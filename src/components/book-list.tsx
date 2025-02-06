'use client'
import { deleteBook } from '@/actions/actions'

type BooksListProps = {
  books: {
    id: number
    title: string
    author: string
    year: number
    price: number
  }[]
}

export default function BookList({ books }: BooksListProps) {
  return (
    <ul className='mt-4 bg-white rounded shadow-sm min-h-60'>
      {books.map((book) => (
        <li
          key={book.id}
          className='flex items-center justify-between px-4 py-2 border-b border-gray-200'>
          <div className='flex flex-col'>
            <span className='text-gray-800'>{book.title}</span>
            <span className='italic text-gray-600'>{book.author}</span>
            <span className='text-gray-600'>{book.year}</span>
          </div>
          <div>
            <span className='text-gray-800'>${book.price.toString()}</span>
            <button
              onClick={async () => {
                await deleteBook(book.id)
              }}
              className='px-3 py-1 ml-5 text-white bg-red-500 rounded hover:bg-red-600'>
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
