import BgPattern from '@/components/bg-pattern'
import Navbar from '@/components/navbar'

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BgPattern />
      <Navbar />
      {children}
    </>
  )
}
