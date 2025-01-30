import { Button } from '@heroui/button'
import React from 'react'
import ImageCustom from '../ImageCustom/ImageCustom'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import Link from 'next/link'
const menuFooter = [
  {
    title: "Home",
    link: [
      {
        name: "Benefits",
        url: "#"
      },
      {
        name: "Our Testimonials",
        url: "#"
      },
      {
        name: "Partners",
        url: "#"
      },
    ]
  }, {
    title: "Services",
    link: [
      {
        name: "Web Design",
        url: "#"
      }, {
        name: "Website Development",
        url: "#"
      }, {
        name: "App Development",
        url: "#"
      }, {
        name: "Digital Marketing",
        url: "#"
      }
    ]
  }, {
    title: "Projects",
    link: [
      {
        name: "ABC Tech Solutions",
        url: "#"
      }, , {
        name: "GreenEarth Eco Store",
        url: "#"
      }, {
        name: "HealthTech Innovations",
        url: "#"
      }, {
        name: "GlobalTech Solutions",
        url: "#"
      }, , {
        name: "TechGuru Inc.",
        url: "#"
      },
    ]
  }, {
    title: "About Us",
    link: [
      {
        name: "Our Team",
        url: "#"
      }, {
        name: "Achievements",
        url: "#"
      }, {
        name: "Awards",
        url: "#"
      },
    ]
  }, {
    title: "Careers",
    link: [
      {
        name: "Job Openings",
        url: "#"
      }, {
        name: "Benefits & Perks",
        url: "#"
      }, {
        name: "Employee Refral",
        url: "#"
      },
    ]
  }, {
    title: "Blogs",
    link: [
      {
        name: "Our Blogs",
        url: "#"
      }
    ]
  }
]
const iconData = [
  { icon: <FaTwitter /> },
  { icon: <FaLinkedin className='text-w-100' /> },
  { icon: <FaInstagram className='text-w-100' /> },
]
export default function Footer() {
  return (
    <footer className='main-class mt-8 md:mt-12 xl:mt-20'>
      <div className='relative flex justify-center items-center flex-col gap-4 p-6 md:p-32 text-center shadow-lg border border-d-60 rounded-xl'>
        <h1 className='text-w-100 text-2xl md:text-4xl font-semibold'>Ready to Transform Your Digital Presence?</h1>
        <p className='text-w-50 text-sm md:text-base'>Take the first step towards digital success with DigitX by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a data-driven marketing campaign, we've got you covered. Let's embark on this transformative journey together.</p>
        <p className='text-w-100 mt-4 md:mt-10'>Unlock Your Digital Potential Today</p>
        <div className='text-w-100 flex items-center gap-4 z-10'>
          <Button className='rounded-full p-5 !bg-w-90 !text-d-100'>
            Get Started
          </Button>
          <Button className='rounded-full bg-d-80 text-w-100 border border-d-60 p-5'>
            Free Consultation
          </Button>
        </div>
        <ImageCustom figureClass='w-full flex justify-center mt-8' src={"/digit-x.png"} alt={"logo footer"} width={600} height={370} />
        <span className='absolute left-0 top-0 w-[56%] h-[400px]' style={{ backgroundImage: `url(/dot-left-low.png)` }}></span>
        <span className='absolute right-0 top-0 w-[56%] h-[400px]' style={{ backgroundImage: `url(/dot-right-low.png)` }}></span>
      </div>
      <div className='mt-10 flex justify-between items-center pb-6 border-d-60 border-b'>
        <div>
          <ImageCustom src={"/logo.png"} alt={"logo"} width={50} height={50} />
        </div>
        <div className='flex flex-col md:flex-row items-center justify-end gap-5'>
          <span className='text-w-100 text-sm md:text-base'>Follow Us On Social Media</span>
          <div className='flex gap-5 justify-center'>
            {iconData.map((row, index) => (
              <Link href={"#"} key={index} className='border text-sm md:text-base border-d-60 p-3 rounded-full text-w-100 bg-gradient-to-b to-d-100 from-gray-700/90'>
                {row.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-12 grid grid-cols-2 md:grid-cols-6 justify-between gap-5'>
        {menuFooter.map((i, index) => (
          <section key={index}>
            <h3 className='text-w-100 mb-5 font-semibold'>{i.title}</h3>
            <ul className='flex flex-col text-w-80 gap-4'>
              {i.link.map((item, ind) => (
                <li key={ind}><Link className='hover:text-w-90 text-sm md:text-base' href={"#"}>{item?.name}</Link></li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className='flex flex-col md:flex-row gap-4 justify-between items-center text-sm md:text-xs xl:text-base py-5 md:py-8 text-w-50 border-t mt-5 md:mt-16 border-d-60'>
        <span>@2023 Digitax. All Rights Reserved.</span>
        <span className='hidden md:block'>Version 1.0</span>
        <div className='grid grid-cols-2 md:grid-cols-3 text-center gap-3'>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span className='md:hidden'>Version 1.0</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  )
}
