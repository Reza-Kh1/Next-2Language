import ContainerHeader from '@/components/ContainerHeader/ContainerHeader'
import ImageCustom from '@/components/ImageCustom/ImageCustom'
import Link from 'next/link'
import React from 'react'
import { CgArrowTopRight } from 'react-icons/cg'
import { FaHtml5, FaInstagram, FaReact } from 'react-icons/fa'
import { FaArrowRightLong, FaFacebook, FaStar, FaTwitter } from 'react-icons/fa6'
import { HiOutlineMenu } from 'react-icons/hi'
import { SiTailwindcss } from 'react-icons/si'

export default function page() {
    return (
        <>
            <ContainerHeader firstDark dark='Hi Im Naufaldi,' light='a special human' text='with some ability to love learning and working on teamwork.' />
            <main className='main-class'>
                <div className='flex flex-col text-center md:text-start md:flex-row w-full md:w-2/3 gap-3 my-8 md:my-32 mx-auto items-center'>
                    <div className='w-1/5'>
                        <ImageCustom className='rounded-full border border-d-60' src={'/profile/man.png'} alt={"profile"} width={100} height={100} />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span className='text-w-100'>Biography</span>
                        <p className='text-w-50'>Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Exicited on React, UX Research and Agile.</p>
                    </div>
                    <div className='flex flex-col gap-3 w-2/5   '>
                        <span className='text-w-80'>Lets connect</span>
                        <div className='flex gap-2 items-center text-w-80'>
                            <i className='p-3 rounded-full border border-d-60' style={{ background: "linear-gradient(180deg, #7f7d7d29, #000000c4)" }}>
                                <FaInstagram />
                            </i>
                            <i className='p-3 rounded-full border border-d-60' style={{ background: "linear-gradient(180deg, #7f7d7d29, #000000c4)" }}>
                                <FaTwitter />
                            </i>
                            <i className='p-3 rounded-full border border-d-60' style={{ background: "linear-gradient(180deg, #7f7d7d29, #000000c4)" }}>
                                <FaFacebook />
                            </i>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-14 md:gap-10 my-16 md:my-24'>
                    <div>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-w-100 font-semibold text-2xl'>What I do</h2>
                            <Link href={"#"} title='more products' aria-labelledby='more' className='p-3 md:hidden rounded-full border border-d-60' style={{ background: "linear-gradient(180deg, #7f7d7d29, #000000c4)" }}>
                                <FaArrowRightLong className='text-w-100' />
                            </Link>
                        </div>
                        <p className='text-w-50 mt-3'>Build and maintain websites, frontend dev also have a mentorship called MOFON. My motto is Beauty and function in equal measure as priority.</p>
                    </div>
                    <div className='text-center relative pt-12 items-center p-6 justify-center rounded-xl border-d-60 border' style={{ backgroundImage: 'linear-gradient(204deg, #ffffff0d, #0202028f)' }}>
                        <div className="p-3 absolute left-1/2 -top-8 transform -translate-x-1/2 border-4 overflow-hidden rounded-full border-d-50" style={{ backgroundImage: `url('/dote.png')` }}>
                            <span className="absolute w-full h-full bg-gradient-to-tl to-[#ffffff26] from-black/90 left-0 top-0 "></span>
                            <ImageCustom alt={"lamp"} src={"/icons/app.png"} width={30} height={30} />
                        </div>
                        <span className='text-w-100'>Web Development</span>
                        <p className='text-w-50'>You will receive a customized plan for your fitness journey, and lots of support.</p>
                    </div>
                    <div className='text-center relative pt-12 p-6 justify-center rounded-xl border-d-60 border' style={{ backgroundImage: 'linear-gradient(204deg, #ffffff0d, #0202028f)' }}>
                        <div className="p-3 absolute left-1/2 -top-8 transform -translate-x-1/2 border-4 overflow-hidden rounded-full border-d-50" style={{ backgroundImage: `url('/dote.png')` }}>
                            <span className="absolute w-full h-full bg-gradient-to-tl to-[#ffffff26] from-black/90 left-0 top-0 "></span>
                            <ImageCustom alt={"lamp"} src={"/icons/fast.png"} width={30} height={30} />
                        </div>
                        <span className='text-w-100'>Web Development</span>
                        <p className='text-w-50'>You will receive a customized plan for your fitness journey, and lots of support.</p>
                    </div>
                    <div className='hidden md:flex items-center'>
                        <Link href={"#"} title='more products' aria-labelledby='more' className='p-3 rounded-full border border-d-60' style={{ background: "linear-gradient(180deg, #7f7d7d29, #000000c4)" }}>
                            <FaArrowRightLong className='text-w-100' />
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col my-16 gap-6 md:gap-10'>
                    <h2 className='text-w-100 text-2xl md:text-4xl font-semibold'>Featured Project</h2>
                    <div className='flex flex-col md:flex-row items-center gap-7'>
                        <div className='relative md:w-1/2'>
                            <ImageCustom alt={"product"} src={"/work1.png"} width={700} height={530} />
                            <Link href={"#"} className='rounded-md bg-d-100 p-2 text-w-100 border border-d-60 absolute right-3 top-3' aria-label='icone more' title='icone more'>
                                <CgArrowTopRight />
                            </Link>
                        </div>
                        <div className='flex flex-col gap-2 md:gap-8 md:w-1/2'>
                            <span className='text-w-80'>Web Development</span>
                            <span className='text-w-100 text-xl md:text-3xl font-semibold'>Bolder Landingpage</span>
                            <p className='text-w-50 text-sm md:text-base'>Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-7'>
                        <div className='relative md:w-1/2'>
                            <ImageCustom alt={"product"} src={"/work2.png"} width={700} height={530} />
                            <Link href={"#"} className='rounded-md bg-d-100 p-2 text-w-100 border border-d-60 absolute right-3 top-3' aria-label='icone more' title='icone more'>
                                <CgArrowTopRight />
                            </Link>
                        </div>
                        <div className='flex flex-col gap-2 md:gap-8 md:w-1/2'>
                            <span className='text-w-80'>Web Development</span>
                            <span className='text-w-100 text-xl md:text-3xl font-semibold'>Kerja Mantul Education Management</span>
                            <p className='text-w-50 text-sm md:text-base'>Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.</p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <Link href={"#"} className='text-w-100 flex items-center gap-4 text-xs md:text-base p-2 md:p-3 px-4 md:px-6 border border-d-60 rounded-full '>
                            <HiOutlineMenu />
                            See More
                        </Link>
                    </div>
                </div>
                <div>
                    <h2 className='text-w-100 text-2xl md:text-4xl font-semibold mb-12'>Code Snippet</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
                        <div className='p-4 gap-3 md:p-8 flex justify-between flex-col rounded-xl border border-d-60' style={{ backgroundImage: 'linear-gradient(204deg, #ffffff0d, #0202028f)' }}>
                            <div>
                                <span className='text-xl md:text-2xl text-w-100 font-semibold'>Nextjs Starter</span>
                                <p className='text-w-50 text-sm md:text-base mt-4'>A dead simple for nextjs project.</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex gap-4'>
                                    <i className='p-2 rounded-full bg-d-80 border border-d-60 text-w-100'>
                                        <SiTailwindcss />
                                    </i>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <FaStar className='text-yellow-400' />
                                    <span className='text-w-80'>
                                        8 Stars
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 gap-3 md:p-8 flex  justify-between flex-col rounded-xl border border-d-60' style={{ backgroundImage: 'linear-gradient(204deg, #ffffff0d, #0202028f)' }}>
                            <div>
                                <span className='text-xl md:text-2xl text-w-100 font-semibold'>Frontend Starter Kit</span>
                                <p className='text-w-50 text-sm md:text-base mt-4'>AA dead simple for html 5 boilerplate project. Included setup dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting.</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex gap-4'>
                                    <i className='p-2 rounded-full bg-d-80 border border-d-60 text-w-100'>
                                        <FaReact />
                                    </i>
                                    <i className='p-2 rounded-full bg-d-80 border border-d-60 text-w-100'>
                                        <FaHtml5 />
                                    </i>
                                    <i className='p-2 rounded-full bg-d-80 border border-d-60 text-w-100'>
                                        <SiTailwindcss />
                                    </i>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <FaStar className='text-yellow-400' />
                                    <span className='text-w-80'>
                                        12 Stars
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 gap-3 md:p-8 flex justify-between flex-col rounded-xl border border-d-60' style={{ backgroundImage: 'linear-gradient(204deg, #ffffff0d, #0202028f)' }}>
                            <div>
                                <span className='text-xl md:text-2xl text-w-100 font-semibold'>Nextjs Starter</span>
                                <p className='text-w-50 text-sm md:text-base mt-4'>A dead simple for nextjs project.</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex gap-4'>
                                    <i className='p-2 rounded-full bg-d-80 border border-d-60 text-w-100'>
                                        <SiTailwindcss />
                                    </i>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <FaStar className='text-yellow-400' />
                                    <span className='text-w-80'>
                                        8 Stars
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 gap-3 md:p-8 flex justify-between flex-col rounded-xl border border-d-60' style={{ backgroundImage: 'linear-gradient(204deg, #ffffff0d, #0202028f)' }}>
                            <div>
                                <span className='text-xl md:text-2xl text-w-100 font-semibold'>Frontend Starter Kit</span>
                                <p className='text-w-50 text-sm md:text-base mt-4'>AA dead simple for html 5 boilerplate project. Included setup dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting.</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex gap-4'>
                                    <i className='p-2 rounded-full bg-d-80 border border-d-60 text-w-100'>
                                        <FaReact />
                                    </i>
                                    <i className='p-2 rounded-full bg-d-80 border border-d-60 text-w-100'>
                                        <FaHtml5 />
                                    </i>
                                    <i className='p-2 rounded-full bg-d-80 border border-d-60 text-w-100'>
                                        <SiTailwindcss />
                                    </i>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <FaStar className='text-yellow-400' />
                                    <span className='text-w-80'>
                                        12 Stars
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-start mt-4 md:mt-8'>
                        <Link href={"#"} className='text-w-100 flex text-xs md:text-base items-center gap-4 p-2 md:p-3 px-4 md:px-6 border border-d-60 rounded-full '>
                            <HiOutlineMenu />
                            See More
                        </Link>
                    </div>
                </div>
                <div className='my-12 md:my-24'>
                    <h2 className='text-w-100 text-2xl md:text-4xl font-semibold mb-6'>Mentorship</h2>
                    <div className='flex md:flex-row flex-col gap-7 items-start'>
                        <div className='flex flex-col gap-4 w-full md:w-1/3'>
                            <p className='text-w-50'>
                                Menghabiskan banyak waktu untuk belajar sendiri dan tetap merasa stuck?
                            </p>
                            <p className='text-w-50'>
                                Mentorship Frontend ini menjadi jawaban atas permasalahanmu. Karena disini, kamu bakal merasakan mentoring yang lebih personal
                            </p>
                        </div>
                        <div className='flex flex-col gap-5 w-full md:w-2/3'>
                            <div className='flex flex-col md:flex-row gap-5 p-3 md:p-6 rounded-xl border border-d-60'>
                                <div className='flex gap-2 p-4 rounded-xl border border-d-60'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex gap-2 items-center'>
                                            <ImageCustom width={55} figureClass='w-auto  rounded-full bg-d-80 border border-d-60' alt={"prof"} height={55} src={"/profile/prof2.png"} />
                                            <span className='text-w-100 font-semibold'>Minggu Pertama</span>
                                        </div>
                                        <p className='text-w-50 text-sm'>Membahas dasar dari website seperti tag atribut dan element. </p>
                                    </div>
                                </div>
                                <div className='flex gap-2 p-4 rounded-xl border border-d-60'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex gap-2 items-center'>
                                            <ImageCustom width={55} figureClass='w-auto  rounded-full bg-d-80 border border-d-60' alt={"prof"} height={55} src={"/profile/prof.png"} />
                                            <span className='text-w-100 font-semibold'>Minggu Pertama</span>
                                        </div>
                                        <p className='text-w-50 text-sm'>Membahas dasar dari website seperti tag atribut dan element. </p>
                                    </div>
                                </div>
                                <div className='flex gap-2 p-4 rounded-xl border border-d-60'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex gap-2 items-center'>
                                            <ImageCustom width={55} figureClass='w-auto  rounded-full bg-d-80 border border-d-60' alt={"prof"} height={55} src={"/profile/prof3.png"} />
                                            <span className='text-w-100 font-semibold'>Minggu Pertama</span>
                                        </div>
                                        <p className='text-w-50 text-sm'>Membahas seputar konsep layoung seperti flexbox dan grid.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-start'>
                                <Link href={"#"} className='text-w-100 flex items-center text-xs md:text-base gap-4 p-2 px-4 md:p-3 md:px-6 border border-d-60 rounded-full '>
                                    <HiOutlineMenu />
                                    Baca selengkapnya
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-12 md:my-24 flex-col md:flex-row flex'>
                    <div className='md:w-1/3 text-center'>
                        <h2 className='text-w-100 text-2xl md:text-4xl font-semibold mb-6'>Keuntungan Mentorship</h2>
                        <ImageCustom alt={"ex"} src={"/biting.png"} figureClass='w-auto text-center flex justify-center' className='w-52 md:w-72' width={300} height={400} />
                    </div>
                    <div className='md:w-2/3 flex flex-col gap-5'>
                        <div className='relative flex flex-col mt-8 md:ml-16 p-6 pt-10 md:p-8 md:pl-14 md:pt-8 border border-d-60 rounded-xl'>
                            <span className='text-w-100 mb-6'>Mentorship 1 : 1</span>
                            <p className='text-w-50'>Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya</p>
                            <div className="p-4 left-1/2 -top-8 -translate-x-1/2 md:translate-x-0 absolute md:-left-9 md:top-1/2 transform md:-translate-y-1/2 border-1 overflow-hidden rounded-full border-d-50" style={{ background: 'linear-gradient(134deg, #3a3838e6, #000000ed)' }}>
                                <ImageCustom alt={"lamp"} src={"/icons/code.png"} width={30} height={30} />
                            </div>
                        </div>
                        <div className='relative flex flex-col mt-8 md:ml-16 p-6 pt-10 md:p-8 md:pl-14 md:pt-8 border border-d-60 rounded-xl'>
                            <span className='text-w-100 mb-6'>Terarah</span>
                            <p className='text-w-50'>Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya</p>
                            <div className="p-4 left-1/2 -top-8 -translate-x-1/2 md:translate-x-0 absolute md:-left-9 md:top-1/2 transform md:-translate-y-1/2 border-1 overflow-hidden rounded-full border-d-50" style={{ background: 'linear-gradient(134deg, #3a3838e6, #000000ed)' }}>
                                <ImageCustom alt={"lamp"} src={"/icons/chart.png"} width={30} height={30} />
                            </div>
                        </div>
                        <div className='relative flex flex-col mt-8 md:ml-16 p-6 pt-10 md:p-8 md:pl-14 md:pt-8 border border-d-60 rounded-xl'>
                            <span className='text-w-100 mb-6'>Silabus</span>
                            <p className='text-w-50'>Silabus praktis, fundamental yang bisa diimplementasikan berdasarkan studi kasus</p>
                            <div className="p-4 left-1/2 -top-8 -translate-x-1/2 md:translate-x-0 absolute md:-left-9 md:top-1/2 transform md:-translate-y-1/2 border-1 overflow-hidden rounded-full border-d-50" style={{ background: 'linear-gradient(134deg, #3a3838e6, #000000ed)' }}>
                                <ImageCustom alt={"lamp"} src={"/icons/mouse.png"} width={30} height={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
