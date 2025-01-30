"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
type NavlinkType = {
    name: string
    url: string
}
export default function Navlink({ name, url }: NavlinkType) {
    const path = usePathname()
    const className = `rounded-full w-full md:w-auto text-right md:text-start text-w-100 py-2 text-sm px-4 ${path === url ? " bg-d-60 md:bg-d-80 " : ""}`
    return (
        <Link href={url} className={className}>
            {name}
        </Link>
    )
}
