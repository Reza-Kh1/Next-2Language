"use client"
import { ProducrtType } from '@/app/type'
import { useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'
export default function Products({ children, row }: { children: ReactNode, row: ProducrtType }) {
    const route = useRouter()
    const payment = (item: ProducrtType) => {
        localStorage.setItem("product-shlabs", JSON.stringify(item))
        route.push(`/en/payment`)
    }
    return <div onClick={() => payment(row)} className='p-4 cursor-pointer gap-3 md:p-8 flex justify-between flex-col rounded-xl border border-d-60' style={{ backgroundImage: 'linear-gradient(204deg, #ffffff0d, #0202028f)' }}>
        {children}
    </div>
}
