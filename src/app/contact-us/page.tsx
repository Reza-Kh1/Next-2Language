import CircleBox from '@/components/CircleBox/CircleBox'
import ContainerHeader from '@/components/ContainerHeader/ContainerHeader'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong, FaPhone } from 'react-icons/fa6'
import { GoMail } from 'react-icons/go'
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
          <div className='border border-d-60 p-10 grid grid-cols-2 gap-10 mt-12'>
            <CircleBox image='/icons/bag.png' btnMore name='New York City' text='123 Main Street, Suite 456, New York, NY 10001' />
            <CircleBox image='/icons/bag.png' btnMore name='New York City' text='123 Main Street, Suite 456, New York, NY 10001' />
          </div>
        </div>
      </main>
    </>
  )
}
