'use client'
import { createCheckoutSession } from '@/actions/actions'

export default function PurchaseBtn() {
  return (
    <button
      onClick={async () => {
        await createCheckoutSession()
      }}
      className='px-4 py-2 font-medium text-white bg-black rounded-lg'>
      Purchase
    </button>
  )
}
