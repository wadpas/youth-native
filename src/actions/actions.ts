'use server'
import { prisma } from '@/lib/db'
import { checkAuthenticationAndMembership } from '@/lib/server-utils'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-01-27.acacia',
})

export async function addBook(formData: FormData) {
  const user = await checkAuthenticationAndMembership()

  await prisma.book.create({
    data: {
      title: formData.get('title') as string,
      author: formData.get('author') as string,
      year: parseInt(formData.get('year') as string),
      price: parseFloat(formData.get('price') as string),
      creatorId: user.id,
    },
  })
  revalidatePath('/dashboard')
}

export async function deleteBook(id: number) {
  await checkAuthenticationAndMembership()

  await prisma.book.delete({
    where: {
      id,
    },
  })
  revalidatePath('/dashboard')
}

export async function createCheckoutSession() {
  const user = await checkAuthenticationAndMembership()

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    customer_email: user.email!,
    client_reference_id: user.id,
    line_items: [
      {
        price: 'price_1QpBi2JDNSkGRpxQp6x6MIwn',
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: 'http://localhost:3000/dashboard?payment=success',
    cancel_url: 'http://localhost:3000/',
  })

  redirect(session.url as string)
}
