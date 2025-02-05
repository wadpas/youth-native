'use server'
import { prisma } from '@/lib/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function addBook(formData: FormData) {
  const { isAuthenticated, getUser } = getKindeServerSession()
  if (!(await isAuthenticated())) return redirect('/api/auth/login')

  const user = await getUser()

  await prisma.book.create({
    data: {
      title: formData.get('title') as string,
      author: formData.get('author') as string,
      year: parseInt(formData.get('year') as string),
      price: parseFloat(formData.get('price') as string),
      creatorId: user.id,
    },
  })
  revalidatePath('/dashboard')
}

export async function deleteBook(id: number) {
  await prisma.book.delete({
    where: {
      id,
    },
  })
  revalidatePath('/dashboard')
}
