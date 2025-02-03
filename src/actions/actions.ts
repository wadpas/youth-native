'use server'
import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function addBook(formData: FormData) {
  await prisma.book.create({
    data: {
      title: formData.get('title') as string,
      author: formData.get('author') as string,
      year: parseInt(formData.get('year') as string),
      price: parseFloat(formData.get('price') as string),
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
