import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-10 bg-emerald-300 xl:flex-row'>
      <Image
        src='https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Books'
        width={500}
        height={333}
        className='rounded-md'
      />
      <div>
        <h1 className='max-w-2xl my-6 text-5xl font-semibold'>Favorite books</h1>
        <p className='max-w-2xl text-2xl font-medium'>
          The modern book industry has seen several major changes due to new technologies
        </p>
        <div className='mt-10 space-x-3'>
          <LoginLink className='px-4 py-2 font-medium text-white bg-black rounded-lg'>Login</LoginLink>
          <RegisterLink className='px-4 py-2 font-medium text-white bg-black rounded-lg'>Register</RegisterLink>
        </div>
      </div>
    </div>
  )
}
