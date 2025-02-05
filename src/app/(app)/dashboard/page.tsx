import BookForm from '@/components/book-form'
import BookList from '@/components/book-list'
import { prisma } from '@/lib/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const { getUser, isAuthenticated } = getKindeServerSession()
  if (!(await isAuthenticated())) return redirect('/api/auth/login')
  const user = await getUser()

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
