import BookForm from '@/components/book-form'
import BookList from '@/components/book-list'
import { prisma } from '@/lib/db'
import { checkAuthenticationAndMembership } from '@/lib/server-utils'
import { redirect } from 'next/navigation'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const paymentValueFromUrl = (await searchParams).payment
  const user = await checkAuthenticationAndMembership(paymentValueFromUrl === 'success' ? 5000 : 0)
  if (paymentValueFromUrl === 'success') {
    return redirect('/app/dashboard')
  }

  const books = await prisma.book.findMany({
    where: {
      creatorId: user.id,
    },
  })

  return (
    <div className=''>
      <h1 className='text-3xl font-bold text-center text-white '>Dashboard</h1>
      <div className='w-full max-w-2xl mx-auto '>
        <BookList books={books} />
        <BookForm />
      </div>
    </div>
  )
}
