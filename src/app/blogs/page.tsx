import ContainerHeader from '@/components/ContainerHeader/ContainerHeader'
import { Button } from '@heroui/button'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import ImageCustom from '@/components/ImageCustom/ImageCustom'
import Image from 'next/image'
import { MdOutlineAccessTime } from 'react-icons/md'
import { FaCalendar } from 'react-icons/fa6'
const dataBox = [
  {
    title: "The Art of User-Centric Design",
    image: "/profile/woman2.png",
    banner: "/work1.png",
    name: "Daniel Lee",
    text: "User-centric design is the key to creating intuitive and engaging digital experiences...."
  }, {
    title: "Optimizing Mobile User Experience for Higher Conversions",
    image: "/profile/woman.png",
    name: "Amanda Turner",
    banner: "/work2.png",
    text: "Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates...."
  },
  {
    title: "The Psychology of Visual Design in Branding",
    name: "Benjamin Carter",
    image: "/profile/man.png",
    banner: "/work3.png",
    text: "Uncover the impact of visual elements in branding and how they influence customer perceptions and emotions...."
  },
  {
    title: "Mastering the Art of Minimalistic Design",
    name: "Sophia Roberts",
    image: "/profile/man2.png",
    banner: "/work4.png",
    text: "Simplicity and elegance take center stage in minimalistic design. Learn the principles of minimalism,..."
  },
]
export default function page() {
  return (
    <>
      <ContainerHeader light='Digital Journey' dark='Empowering Your' text='At DigitX, we are passionate about sharing our expertise, insights, and latest trends in the digital world. Our blog serves as a knowledge hub, offering valuable information and resources for individuals, businesses, and fellow industry enthusiasts. Whether you are a seasoned professional or a curious learner, our blog covers a wide range of topics related to web design, development, digital marketing, technology, and much more. Join us as we embark on a journey to explore the digital landscape and unlock the potential of the online world.' />
      <main className="main-class">
        <div className='my-8 md:my-16 flex'>
          <div className='bg-d-80 mx-auto p-2 px-3 overflow-auto  text-w-100 rounded-full flex gap-2 items-center border-d-50 border'>
            <NavLink url={"All"} />
            <NavLink url={"Business"} />
            <NavLink url={"Design"} />
            <NavLink url={"Development"} />
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-10'>
          <div className='p-8 w-full md:w-5/12 rounded-xl border border-d-60' style={{ backgroundImage: "url(/dot-top.png)" }}>
            <ImageCustom src={"/bigLogo.png"} alt={"logo"} width={596} height={419} />
          </div>
          <div className='w-full md:w-7/12'>
            <h2 className='text-w-100 font-semibold text-xl mb-6'>Web Design Trends Shaping 2023</h2>
            <p className='text-w-50'>Stay ahead of the design curve with insights into the latest web design trends. From immersive user experiences to bold color choices, explore the design elements that will dominate the digital landscape in 2023 and beyond Read More... <Link href={"#"} className='text-w-100'>Read More...</Link></p>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4 items-center gap-3 md:gap-7 justify-between p-4 md:p-6 rounded-xl border border-d-60'>
              <div className='flex flex-col gap-2 border-b md:border-b-0 pb-3 md:pb-0 md:border-r border-d-60'>
                <span className='text-sm text-w-50'>Read Time</span>
                <span className='text-w-100'>6 minutes</span>
              </div>
              <div className='flex flex-col gap-2 border-b md:border-b-0 pb-3 md:pb-0 md:border-r border-d-60'>
                <span className='text-sm text-w-50'>Author</span>
                <span className='text-w-100'>Laura Turner</span>
              </div>
              <div className='flex flex-col gap-2 border-b md:border-b-0 pb-3 md:pb-0 md:border-r border-d-60'>
                <span className='text-sm text-w-50'>Published Date</span>
                <span className='text-w-100'>15 / 01 / 2023</span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-sm text-w-50'>Category</span>
                <span className='text-w-100'>Design</span>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-12'>
          {dataBox.map((row, index) => (
            <section key={index} className='flex justify-between flex-col gap-6'>
              <div className='p-4 rounded-xl border border-d-60' style={{ backgroundImage: "url(/dot-top.png)" }}>
                <ImageCustom className='w-full' alt={"work"} src={row.banner} height={350} width={500} />
              </div>
              <div className='flex flex-col md:flex-row items-start gap-4 md:gap-0 md:items-center justify-between'>
                <div className='flex gap-2 items-center'>
                  <Image src={row.image} alt='profile' width={40} height={40} />
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
                <Link className='text-w-100 bg-d-60 text-xs md:text-base px-5 py-2 rounded-full border border-d-50' href={"#"}>
                  Read More
                </Link>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  )
}
