import ImageCustom from '@/components/ImageCustom/ImageCustom';
import { Link } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'
import { FaCalendar } from 'react-icons/fa6';
import { GoDotFill } from "react-icons/go";
import { MdArrowOutward, MdOutlineAccessTime } from 'react-icons/md';

export default function page() {
    const local = useLocale()
    const t = useTranslations("Blog")
    return (
        <>
            <figure className='relative after:absolute after:w-full after:left-0 after:bottom-0 after:h-24 after:bg-gradient-to-t after:to-transparent after:from-black'>
                <Image alt='work' src={"/work1.png"} className='w-full h-[400px] md:h-[600px]' width={1200} height={600} />
                <h1 className='text-xl md:text-3xl w-full text-center text-white font-semibold bottom-12 md:bottom-16 absolute left-1/2 transform -translate-x-1/2'>The Rise of Artificial Intelligence in Healthcare</h1>
            </figure>
            <main className="main-class">
                <div className='flex flex-col md:flex-row gap-2 md:gap-0 mt-2'>
                    <div className='w-full md:w-8/12 order-2 md:order-1 border rounded-xl md:rounded-none border-d-60'>
                        <div className='flex flex-col gap-5 p-12 border-b border-d-60'>
                            <h2 className='text-lg text-white'>Introduction</h2>
                            <p className='text-lg text-w-80'>Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.</p>
                        </div>
                        <div className='p-12'>
                            <h2 className='text-3xl text-white'>Artificial Intelligence (AI)</h2>
                            <p className='text-w-80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor rem cupiditate! Quo aliquid iusto recusandae fugit laudantium sint, repellat sapiente illo dolorem voluptate officia cupiditate ratione nemo nostrum voluptatem deserunt cumque minus tempore fuga asperiores beatae laborum, nisi iste aperiam? Eveniet sit cumque commodi provident, itaque alias placeat nam harum tenetur, possimus omnis vel molestiae libero, magni illum facilis sapiente blanditiis consectetur consequatur delectus nihil quasi inventore nostrum officiis? Accusamus dolores ex dolor iure dolore. Vel ipsa quod, excepturi assumenda libero dolores aliquid reprehenderit fugit, voluptate commodi labore illum id molestiae, facere veniam ab dicta recusandae iure magni corporis.</p>
                        </div>
                    </div>
                    <div className='w-full md:w-4/12 order-1 md:order-2 p-4 md:p-12 border  rounded-xl md:rounded-none border-d-60'>
                        <div className='grid grid-cols-2 gap-3 md:gap-5'>
                            <section className='flex flex-col gap-2'>
                                <span className='text-w-80 text-sm'>Publication Date</span>
                                <span className='text-white'>October 15, 2023</span>
                            </section>
                            <section className='flex flex-col gap-2'>
                                <span className='text-w-80 text-sm'>Category</span>
                                <span className='text-white'>Healthcare</span>
                            </section>
                            <section className='flex flex-col gap-2'>
                                <span className='text-w-80 text-sm'>Reading Time</span>
                                <span className='text-white'>10 Min</span>
                            </section>
                            <section className='flex flex-col gap-2'>
                                <span className='text-w-80 text-sm'>Author Name</span>
                                <span className='text-white'>Dr. Emily Walker</span>
                            </section>
                        </div>
                        <div className='flex flex-col gap-2 mt- md:mt-10'>
                            <span className='text-w-80 text-sm'>Table of Contents</span>
                            <div className='flex p-6 bg-d-80 flex-col gap-2 rounded-xl'>
                                <div className='flex items-start gap-1'>
                                    <i><GoDotFill className='text-w-100' /></i>
                                    <span className='text-w-100'>Introduction</span>
                                </div>
                                <div className='flex items-start gap-1'>
                                    <i><GoDotFill className='text-w-100' /></i>
                                    <span className='text-w-100'>AI in Diagnostic Imaging</span>
                                </div>
                                <div className='flex items-start gap-1'>
                                    <i><GoDotFill className='text-w-100' /></i>
                                    <span className='text-w-100'>Predictive Analytics and Disease Prevention</span>
                                </div>
                                <div className='flex items-start gap-1'>
                                    <i><GoDotFill className='text-w-100' /></i>
                                    <span className='text-w-100'>AI in Telemedicine</span>
                                </div>
                                <div className='flex items-start gap-1'>
                                    <i><GoDotFill className='text-w-100' /></i>
                                    <span className='text-w-100'>Ethical Considerations</span>
                                </div>
                                <div className='flex items-start gap-1'>
                                    <i><GoDotFill className='text-w-100' /></i>
                                    <span className='text-w-100'>The Future of AI in Healthcare</span>
                                </div>
                                <div className='flex items-start gap-1'>
                                    <i><GoDotFill className='text-w-100' /></i>
                                    <span className='text-w-100'>Conclusion</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-12 md:my-16'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-w-80 md:text-2xl'>Similar News</h2>
                        <Link href={"/blogs"} className='p-3 px-4 rounded-full border border-d-60 flex items-center gap-2'>
                            <span className='text-w-80 text-xs  md:text-sm'>
                                View All News
                            </span>
                            <i>
                                <MdArrowOutward className='text-w-80 text-sm md:text-xl' />
                            </i>
                        </Link>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-4 md:mt-12'>
                        {t.raw("section-1.array").map((row: any, index: number) => {
                            if (Number(index) > 2) return
                            return <section key={index} className='flex justify-between flex-col gap-6'>
                                <div className='p-4 rounded-xl border border-d-60' style={{ backgroundImage: "url(/dot-top.png)" }}>
                                    <ImageCustom className='w-full' alt={"work"} src={row.banner} height={350} width={500} />
                                </div>
                                <div className='flex flex-col md:flex-row items-start gap-4 md:gap-0 md:items-center justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <Image src={"/profile-auth.jpg"} alt='profile' className='rounded-full' width={40} height={40} />
                                        <span className='text-w-100'>{row.name}</span>
                                    </div>
                                    <div className='flex gap-2 text-w-80'>
                                        <span className='py-2 px-3 border rounded-full flex items-center gap-1 text-xs border-d-60'><MdOutlineAccessTime /> 6 min read</span>
                                        <span className='py-2 px-3 border rounded-full flex items-center gap-1 text-xs border-d-60'><FaCalendar /> March 2019</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-w-100 text-lg'>{row.title}</h3>
                                    <p className='text-w-50 mt-2'>{row.text}</p>
                                </div>
                                <div className='flex justify-center'>
                                    <Link className='text-w-100 bg-d-60 text-xs md:text-base px-5 py-2 rounded-full border border-d-50' href={"/blogs/1"}>
                                        {local === "fa" ? "مطالعه بیشتر" : "Read More"}
                                    </Link>
                                </div>
                            </section>
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}   