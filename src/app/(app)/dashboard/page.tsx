import BookForm from '@/components/book-form'
import BookList from '@/components/book-list'
import { prisma } from '@/lib/db'

export default async function Dashboard() {
  const books = await prisma.book.findMany()

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
