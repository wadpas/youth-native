import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession()
  if (!(await isAuthenticated())) return redirect('/api/auth/login')

  const user = await getUser()

  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold text-white'>Account</h1>
      <p className='mt-2 text-white'>
        Logged in with email: <span className='font-bold'>{user.email}</span>
      </p>
    </div>
  )
}
