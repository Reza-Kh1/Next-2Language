import React from 'react'
import Navlink from '../Navlink/Navlink'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import ImageCustom from '../ImageCustom/ImageCustom'
import HeaderMobile from './HeaderMobile'
import LanguageBtn from './LanguageBtn'
const linkMenu = [
    {
        name: "Home",
        url: "/"
    }, {
        name: "Services",
        url: "/services"
    }, {
        name: "Projects",
        url: "/projects"
    }, {
        name: "Scripts Hub",
        url: "/scripts-hub"
    }, {
        name: "About Us",
        url: "/about-us"
    }, {
        name: "Contact Us",
        url: "/contact-us"
    }, {
        name: "Careers",
        url: "/careers"
    }, {
        name: "Blogs",
        url: "/blogs"
    },
]
export default function HeaderHome() {
    return (
        <header className='flex flex-col md:flex-row md:pt-8 px-6 md:px-10 xl:px-20  flex-wrap bg-no-repeat' style={{ backgroundImage: `url("/dot-home.png")` }}>
            <div className='hidden md:flex w-full justify-between items-center px-8'>
                <div className="flex gap-3 items-center">
                    <ImageCustom figureClass="w-auto" alt='logo' src={"/logo.png"} width={60} height={60} />
                    <LanguageBtn />
                </div>
                <div className='flex items-center justify-end gap-2'>
                    {linkMenu.map((i, index) => (
                        <Navlink key={index} name={i.name} url={i.url} />
                    ))}
                </div>
            </div>
            <HeaderMobile />
            <div className='w-full md:w-1/2 order-2 md:order-1 gap-10 flex flex-col'>
                <div className='flex flex-col gap-4 justify-center mt-6 md:mt-0 md:p-8 pl-0'>
                    <h1 className='text-w-100 text-3xl text-center md:text-start md:text-6xl font-semibold'>
                        Digital Solutions
                        <span className='text-w-80'>
                            That Drive Success
                        </span>
                    </h1>
                    <p className='text-w-50 text-center md:text-start'>
                        At DigitX, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape. From captivating web design to data-driven marketing strategies, we are committed to delivering results that exceed expectations.
                    </p>
                    <span className='text-w-100 mt-10 text-center md:text-start'>Unlock Your Digital Potential Today</span>
                    <div className='text-w-100 flex items-center justify-center md:justify-start gap-4'>
                        <Button className='rounded-full p-5'>
                            Get Started
                        </Button>
                        <Button className='rounded-full bg-d-80 text-w-100 border border-d-60 p-5'>
                            Free Consultation
                        </Button>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 order-1 md:order-2 gap-10 justify-center md:justify-start items-center flex flex-col'>
                <figure className='p-8 flex justify-center items-center'>
                    <Image alt='logo' src={"/logoHome.png"} width={430} height={370} />
                </figure>
            </div>
        </header>
    )
}
