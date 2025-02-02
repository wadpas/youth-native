import BgPattern from '@/components/bg-pattern'
import BookForm from '@/components/book-form'
import BookList from '@/components/book-list'

export default function Dashboard() {
  return (
    <div className='container min-h-screen mx-auto '>
      <h1 className='container text-3xl font-bold text-center text-white'>Dashboard</h1>
      <div className='container w-full max-w-2xl mx-auto'>
        <BookList />
        <BookForm />
      </div>
    </div>
  )
}
