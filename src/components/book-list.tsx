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
  const books2 = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      price: 10.99,
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
      price: 12.99,
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      year: 1949,
      price: 9.99,
    },
    {
      id: 4,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      year: 1951,
      price: 11.99,
    },
    {
      id: 5,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      year: 1954,
      price: 14.99,
    },
  ]

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
