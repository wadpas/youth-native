import BgPattern from '@/components/bg-pattern'

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BgPattern />
      {children}
    </>
  )
}
