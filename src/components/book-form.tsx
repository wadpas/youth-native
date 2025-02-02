export default function BookForm() {
  return (
    <form className='w-full mt-8 overflow-hidden rounded'>
      <input
        className='w-full px-3 py-2 outline-none'
        type='text'
        name='title'
        placeholder='Title'
      />
      <input
        className='w-full px-3 py-2 outline-none'
        type='number'
        name='amount'
        placeholder='Amount'
      />
      <button className='w-full px-3 py-2 font-bold text-white bg-sky-500'>Add Book</button>
    </form>
  )
}
