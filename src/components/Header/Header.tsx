import React from 'react'
import Navlink from '../Navlink/Navlink'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
const linkMenu = [
    {
        name: "Home",
        url: "/"
    }, {
        name: "Services",
        url: "/service"
    }, {
        name: "Projects",
        url: "/project"
    }, {
        name: "About Us",
        url: "/about-us"
    }, {
        name: "Contact Us",
        url: "/contact-us"
    }, {
        name: "Careers",
        url: "/career"
    }, {
        name: "Blogs",
        url: "/blog"
    },
]
export default function Header() {
    return (
        <header>
            <div className='flex'>
                <div className='w-1/2 gap-10 pt-8 pl-28 flex flex-col' style={{ backgroundImage: `url("/dot-home.png")` }}>
                    <Image alt='logo' src={"/logo.png"} width={60} height={60} />
                    <div className='flex flex-col gap-4 justify-center p-8 pl-0'>
                        <h1 className='text-w-100 text-6xl font-semibold'>
                            Digital Solutions
                            <span className='text-w-80'>
                                That Drive Success
                            </span>
                        </h1>
                        <p className='text-w-50'>
                            At DigitX, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape. From captivating web design to data-driven marketing strategies, we are committed to delivering results that exceed expectations.
                        </p>
                        <span className='text-w-100 mt-10'>Unlock Your Digital Potential Today</span>
                        <div className='text-w-100 flex items-center gap-4'>
                            <Button className='rounded-full p-5'>
                                Get Started
                            </Button>
                            <Button className='rounded-full bg-d-80 text-w-100 border border-d-60 p-5'>
                                Free Consultation
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 gap-10 pt-8 justify-start items-center  pr-28  flex flex-col'>
                    <div className='flex items-center justify-end gap-2'>
                        {
                            linkMenu.map((i, index) => (
                                <Navlink key={index} name={i.name} url={i.url} />
                            ))
                        }
                    </div>
                    <figure className=' p-8 flex justify-center items-center'>
                        <Image alt='logo' src={"/logoHome.png"} width={430} height={370} />
                    </figure>
                </div>
            </div>
        </header>
    )
}
