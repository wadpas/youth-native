import BookForm from '@/components/book-form'
import BookList from '@/components/book-list'

export default function Dashboard() {
  return (
    <div className=''>
      <h1 className='text-3xl font-bold text-center text-white '>Dashboard</h1>
      <div className='w-full max-w-2xl mx-auto '>
        <BookList />
        <BookForm />
      </div>
    </div>
  )
}
