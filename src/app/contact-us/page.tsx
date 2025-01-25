import CircleBox from '@/components/CircleBox/CircleBox'
import ContainerHeader from '@/components/ContainerHeader/ContainerHeader'
import { Button } from '@heroui/button'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa6'
import { GoMail } from 'react-icons/go'
import FormContact from './FormContact'
import ImageCustom from '@/components/ImageCustom/ImageCustom'
const dataContact = [
  {
    name: "Contact Us Via Email",
    boxs: [
      { name: "info@digitx.com", image: <GoMail className='text-w-80 text-2xl' />, title: "For General Inquiries" },
      { name: "partnerships@digitx.com", image: <GoMail className='text-w-80 text-2xl' />, title: "For Business Collaborations" },
      { name: "careers@digitx.com", image: <GoMail className='text-w-80 text-2xl' />, title: "For Job Opportunities" },
    ]
  }, {
    name: "Contact Us By Phone",
    boxs: [
      { name: "+1-XXX-XXX-XXXX", image: <FaPhone className='text-w-80 text-2xl' />, title: "General Enquiries" },
      { name: "+1-XXX-XXX-XXXX", image: <FaPhone className='text-w-80 text-2xl' />, title: "Business Collaborations" },
      { name: "+1-XXX-XXX-XXXX", image: <FaPhone className='text-w-80 text-2xl' />, title: "Free Consultation" },
    ]
  },
]
export default function page() {
  return (
    <>
      <ContainerHeader bgMid='/bigLogo.png' />
      <main className="main-class">
        <div className='border my-12 relative  bg-center bg-no-repeat border-d-60 rounded-xl p-12 py-24' style={{ backgroundImage: "url(/dot-top.png)" }}>
          <div className='mx-auto w-2/3 text-center'>
            <h2 className='text-4xl font-semibold mb-4 text-w-100'><span className='text-w-50'>Get in</span> Touch with Us Today!</h2>
            <p className='text-w-50'>At DigitX, we value your inquiries, feedback, and collaborations. Whether you are interested in our digital services, have questions about our projects, or want to explore potential partnerships, we encourage you to reach out to our dedicated team. Connect with us through any of the channels below, and we'll be delighted to assist you on your digital journey.</p>
          </div>
          <span className='absolute p-4 text-w-100 left-1/2 -translate-x-1/2 -bottom-7 rounded-full border border-d-60 transform bg-d-100'>Feel free to contact us through any of the following channels</span>
        </div>
        <div>
          {dataContact.map((row, index) => (
            <React.Fragment key={index}>
              <h3 className='text-w-100 font-semibold text-lg text-center my-8 mt-16'>{row.name}</h3>
              <section className='p-8 rounded-xl border gap-10 border-d-60 flex items-center'>
                {row.boxs.map((item, num) => (
                  <React.Fragment key={item.title}>
                    <div className='w-1/3'>
                      <span className='text-w-50 block mb-3'>{item.title}</span>
                      <Link href={"#"} className='flex items-center gap-2 w-full rounded-full border border-d-60 p-2 px-2 pl-4'>
                        {item.image}
                        <p className='w-full text-w-80'>{item.name}</p>
                        <i className='py-2 px-4 rounded-full bg-d-60'>
                          <FaArrowRightLong className='text-w-80' />
                        </i>
                      </Link>
                    </div>
                    {row.boxs.length !== num + 1 ? <span className='block h-full w-[1px] bg-d-60 py-10'></span> : null}
                  </React.Fragment>
                ))}
              </section>
            </React.Fragment>
          ))}
        </div>
        <div className='mt-10'>
          <h3 className='text-w-100 font-semibold text-xl block text-center'>Office Locations</h3>
          <p className='text-w-50 block text-center'>Visit our offices to have a face-to-face discussion with our team. We have locations in</p>
          <div className='border border-d-60 p-10 grid grid-cols-2 gap-10 mt-12 rounded-xl'>
            <CircleBox image='/icons/fast.png'
              customText={<><Button className='bg-d-100 p-3  text-w-100 items-center border border-d-60 rounded-full'>
                Get Direction
                <i className='bg-d-60 py-1 px-3 rounded-full'>
                  <FaArrowRightLong />
                </i>
              </Button></>}
              name='New York City' text='123 Main Street, Suite 456, New York, NY 10001' />
            <CircleBox image='/icons/app.png'
              customText={<><Button className='bg-d-100 p-3  text-w-100 items-center border border-d-60 rounded-full'>
                Get Direction
                <i className='bg-d-60 py-1 px-3 rounded-full'>
                  <FaArrowRightLong />
                </i>
              </Button></>}
              name='New York City' text='123 Main Street, Suite 456, New York, NY 10001' />
          </div>
        </div>
        <div className='mt-10'>
          <h3 className='text-w-100 font-semibold text-xl block text-center'>Online Inquiry Form</h3>
          <p className='text-w-50 block text-center'>Please fill in the following details, and we'll get back to you within 24 hours.</p>
          <FormContact />
        </div>
        <div className='grid grid-cols-2 gap-6 mt-12'>
          <div className='rounded-xl border border-d-60 p-8' style={{ background: 'linear-gradient(194deg, #5552523b, #00000066)' }}>
            <div className='flex items-center gap-2 text-w-100'>
              <i className='p-3 rounded-full' style={{ background: 'linear-gradient(334deg, #000000, #272626b5)' }}>
                <ImageCustom alt={"clock"} src={"/icons/clock.png"} width={30} height={30} />
              </i>
              <span className='text-xl'>Our Response</span>
            </div>
            <p className='text-w-50 mt-6'>We understand the importance of timely responses, and our team is committed to addressing your inquiries promptly. Whether you have a specific project in mind, need advice on digital strategies, or want to explore partnership opportunities, we are here to assist you at every step.</p>
          </div>
          <div className='rounded-xl border border-d-60 p-8' style={{ background: 'linear-gradient(194deg, #5552523b, #00000066)' }}>
            <div className='flex items-center gap-2 text-w-100'>
              <i className='p-3 rounded-full' style={{ background: 'linear-gradient(334deg, #000000, #272626b5)' }}>
                <ImageCustom alt={"clock"} src={"/icons/fast.png"} width={30} height={30} />
              </i>
              <span className='text-xl'>Privacy Assurance</span>
            </div>
            <p className='text-w-50 mt-6'>At DigitX, we prioritize your privacy and protect your personal information in compliance with data protection regulations. Rest assured that your details will only be used for the purpose of addressing your inquiries and will not be shared with third parties without your consent</p>
          </div>
        </div>
        <div className='mt-16'>
          <h3 className='text-w-100 font-semibold text-xl block text-center'>Join Us on Social Media</h3>
          <p className='text-w-50 block text-center mt-2'>Stay updated with our latest projects, industry insights, and company news by following us on social media</p>
          <div className='rounded-xl border mt-16 border-d-60 p-8 py-20' style={{ background: 'linear-gradient(194deg, #5552523b, #00000066)' }}>
            <div className='flex items-center justify-center gap-2 text-w-100'>
              <i className='p-3 rounded-full text-w-100' style={{ background: 'linear-gradient(334deg, #000000, #272626b5)' }}>
                <FaTwitter className='text-2xl' />
              </i>
              <i className='p-3 rounded-full text-w-100' style={{ background: 'linear-gradient(334deg, #000000, #272626b5)' }}>
                <FaInstagram className='text-2xl' />
              </i>
              <i className='p-3 rounded-full text-w-100' style={{ background: 'linear-gradient(334deg, #000000, #272626b5)' }}>
                <FaLinkedin className='text-2xl' />
              </i>
            </div>
            <div className='w-2/3 mx-auto mt-8'>
              <span className='text-center block text-w-100 text-2xl font-semibold'>Thank You!</span>
              <p className='text-w-50 mt-2 text-center'>For considering DigitX for your digital needs. We look forward to connecting with you and being part of your digital success!</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
