'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routes = [
  {
    label: 'Dashboard',
    path: '/dashboard',
  },
  {
    label: 'Account',
    path: '/account',
  },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className='flex items-center justify-between mb-10 shadow '>
      <Link
        href='/dashboard'
        className='flex flex-row items-center'>
        <Image
          className='m-1'
          src='https://images.unsplash.com/vector-1738292714432-14a17592a8c1?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='logo'
          width={25}
          height={25}
        />
        <h1 className='text-2xl font-bold'>Byte</h1>
      </Link>
      <nav>
        <ul className='flex gap-2'>
          {routes.map((route) => (
            <li
              key={route.path}
              className={`px-2 py-1 transition rounded-sm hover:text-white ${
                route.path === pathname ? ' bg-black/10' : ''
              }`}>
              <Link href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
