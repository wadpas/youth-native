import { addBook } from '@/actions/actions'

export default function BookForm() {
  return (
    <form
      action={addBook}
      className='w-full mt-8 overflow-hidden rounded'>
      <input
        className='w-full px-3 py-2 outline-none'
        type='text'
        name='title'
        placeholder='Title'
      />
      <input
        className='w-full px-3 py-2 outline-none'
        type='text'
        name='author'
        placeholder='Author'
      />
      <input
        className='w-full px-3 py-2 outline-none'
        type='text'
        name='year'
        placeholder='Year'
      />
      <input
        className='w-full px-3 py-2 outline-none'
        type='text'
        name='price'
        placeholder='Price'
      />
      <button className='w-full px-3 py-2 font-bold text-white bg-sky-500'>Add Book</button>
    </form>
  )
}
