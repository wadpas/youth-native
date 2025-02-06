import { prisma } from '@/lib/db'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-01-27.acacia',
})

export async function POST(request: Request) {
  const body = await request.text()
  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      request.headers.get('stripe-signature') as string,
      process.env.STRIPE_WEBHOOK_SECRET as string
    )
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
    }
    return Response.json({ ok: false }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed':
      await prisma.membership.create({
        data: {
          userId: event.data.object.client_reference_id!,
          status: 'active',
        },
      })
      break
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  return Response.json({ ok: true }, { status: 200 })
}
