import CircleBox from '@/components/CircleBox/CircleBox'
import ContainerHeader from '@/components/ContainerHeader/ContainerHeader'
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle'
import IconBgStar from '@/components/IconBgStar/IconBgStar'
import ImageCustom from '@/components/ImageCustom/ImageCustom'
import { Button } from '@heroui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong, FaCalendar, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
const profile = [
  { name: "Co-Founder & CEO", image: "/profile/man2.png", skill: "Co-Founder & CEO" },
  { name: "Head of Design", image: "/profile/woman.png", skill: "Head of Design" },
  { name: "Michael Williams", image: "/profile/man2.png", skill: "Project Manager" },
  { name: "Emily Johnson", image: "/profile/man.png", skill: "Lead Web Developer" },
  { name: "Jessica Lee", image: "/profile/woman2.png", skill: "UX/UI Designer" },
  { name: "Robert Johnson", image: "/profile/man.png", skill: "Lead Mobile App Developer" },
  { name: "Emma Taylor", image: "/profile/woman.png", skill: "Digital Marketer" },
  { name: "Olivia Martin", image: "/profile/woman2.png", skill: "Content Specialist" },
]
const numbers = [
  {
    num: "01",
    date: "October 2017",
    name: "Foundation of DigitX",
    text: "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality."
  },
  {
    num: "02",
    date: "June 2018",
    name: "100 Successful Projects",
    text: "We celebrated a significant milestone of completing 100 successful projects, marking our commitment to delivering excellence in every endeavor. Our diverse portfolio showcased our ability to cater to various industries and client requirements."
  }, {
    num: "03",
    date: "August 2019",
    name: "Expansion to International Markets",
    text: "We expanded our services to international clients, opening new avenues for growth and global collaboration. Our expansion into international markets solidified our position as a leading digital agency with a global footprint."
  }, {
    num: "04",
    date: "March 2021",
    name: "DigitX Innovation Lab Inauguration",
    text: "To foster creativity and innovation, we inaugurated the DigitX Innovation Lab. This state-of-the-art facility served as a hub for our team to ideate, experiment, and explore emerging technologies."
  }, {
    num: "05",
    date: "September 2023",
    name: "500 Satisfied Clients",
    text: "We celebrated reaching a milestone of serving 500 satisfied clients, further strengthening our reputation for customer-centric services and successful project outcomes."
  },
]
const circleBoxData = [
  { name: "Digital Excellence Award", image: "/icons/win.png", date: "October 2017", text: "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.", why: "Innovative web design and development solutions." },
  { name: "Top Mobile App Development Agency", image: "/icons/win.png", date: "March 2019", text: "Recognized as a top mobile app development agency by industry experts, highlighting our proficiency in delivering seamless and user-centric mobile applications.", why: "Unparalleled app development services and designs." },
  { name: "Best Digital Marketing Campaign", image: "/icons/win.png", date: "July 2022", text: "Awarded for an exceptional digital marketing campaign with outstanding results, showcasing our data-driven strategies and targeted marketing efforts that achieved remarkable business growth for our clients.", why: "Data-driven strategies and targeted marketing efforts." },
  { name: "Innovative Tech Startup Award", image: "/icons/win.png", date: "January 2026", text: "Recognition of our pioneering efforts as a technology startup, acknowledging our commitment to exploring and implementing cutting-edge technologies to drive innovation in the digital space.", why: "Pioneering in the use of emerging technologies." },
]
const last = [
  {
    name: "Careers At DigitX",
    text: "At DigitX, we believe in fostering a dynamic and collaborative work environment that empowers our team members to excel in their respective fields. Join us to be part of a passionate and innovative team dedicated to crafting exceptional digital solutions for clients across the globe. We are committed to nurturing talent, encouraging professional growth, and creating a workplace where creativity thrives.",
    image: "/icons/bags.png"
  },
  {
    name: "Contact Us",
    text: "At DigitX, we value your inquiries, feedback, and collaborations. Whether you are interested in our digital services, have questions about our projects, or want to explore potential partnerships, we encourage you to reach out to our dedicated team. Connect with us through any of the channels below, and we'll be delighted to assist you on your digital journey.",
    image: "/icons/phone.png"
  },
]
export default function page() {

  const ProfileBox = ({ image, name, skill }: { name: string, image: string, skill: string }) => {
    return <div className='p-3 rounded-xl flex flex-col justify-center items-center' style={{ backgroundImage: 'url(/dot-top.png), linear-gradient(3deg, #00000000, #4141411f)' }} >
      <div className='flex justify-center items-center bg-no-repeat bg-center bg-contain h-[120px] w-2/3' style={{ backgroundImage: 'url(circle-icon.png)' }}>
        <Image src={image} alt={"man"} width={60} height={60} />
      </div>
      <span className='text-w-100 block text-center'>{name}</span>
      <span className='text-w-100 text-xs px-5 text-center py-3 rounded-full border border-d-60 inline-block mt-5 mx-auto' style={{ background: 'linear-gradient(45deg, #2f2f2f, #000000)' }}>{skill}</span>
      <span className='block w-full h-[1px] my-6 bg-d-60'></span>
      <div className='flex gap-3'>
        <Link href={"#"} className='border border-d-60 p-3 rounded-full text-w-100 bg-gradient-to-b to-d-100 from-gray-700/90'>
          <FaInstagram className='text-w-100' />
        </Link>
        <Link href={"#"} className='border border-d-60 p-3 rounded-full text-w-100 bg-gradient-to-b to-d-100 from-gray-700/90'>
          <FaTwitter className='text-w-100' />
        </Link>
        <Link href={"#"} className='border border-d-60 p-3 rounded-full text-w-100 bg-gradient-to-b to-d-100 from-gray-700/90'>
          <FaLinkedin className='text-w-100' />
        </Link>
      </div>
    </div>
  }
  return (
    <>
      <ContainerHeader dark='in the Digital Age' light='Elevating Brands' text='Welcome to DigitX, your trusted partner in the dynamic world of digital solutions. We are a passionate team of creative minds, tech enthusiasts, and digital strategists, dedicated to empowering businesses and individuals in the digital realm. Our mission is to deliver exceptional results that drive success, create meaningful connections, and bring your digital vision to life. With a customer-centric approach and a focus on innovation, we are committed to being at the forefront of the ever-evolving digital landscape.' />
      <main className="main-class">
        <HeaderTitle dark='Our' light='Team Members' text='Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.' />
        <div className='mt-12 grid grid-cols-1  md:grid-cols-4 gap-10'>
          {profile.map((row, index) => (
            <ProfileBox image={row.image} name={row.name} key={index} skill={row.skill} />
          ))}
        </div>
        <HeaderTitle dark='Our' light='Achievements' text='Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations weve had with diverse clients across various industries. Let our work speak for itself.' />
        <div className='flex mt-12 flex-col gap-8 md:gap-16'>
          {numbers.map((row, index) => (
            <section className='flex gap-2 md:gap-5' key={index}>
              <span className='text-4xl md:text-7xl mt-2 md:mt-0 font-semibold text-w-100 block'>{row.num}</span>
              <div className='flex flex-col gap-4 md:gap-8'>
                <div className='flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-start md:items-center mt-5'>
                  <h3 className='md:text-lg font-semibold text-w-100'>{row.name}</h3>
                  <span className='flex gap-2 items-center py-3 px-5 border text-xs rounded-full border-d-60 text-w-80'>
                    <FaCalendar />
                    {row.date}
                  </span>
                </div>
                <div className='p-4 md:p-6 rounded-xl border border-d-60'>
                  <span className='text-w-90'>Description</span>
                  <p className='text-w-50 mt-1'>{row.text}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
        <HeaderTitle dark='Our' light='Awards & Recognitions' text='Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations weve had with diverse clients across various industries. Let our work speak for itself.' />
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10'>
          {circleBoxData.map((row, index) => (
            <CircleBox image='/icons/win.png' key={index} date={row.date} why={row.why} name={row.name} text={row.text} />
          ))}
        </div>
        <div className='mt-8 md:mt-24'>
          <span className='text-w-90 block text-center'>See This Pages</span>
          <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-10'>
            {last.map((row, index) => (
              <CircleBox image={row.image} key={index}
                customText={<>
                  <div>
                    <Button className='bg-d-100 p-3 px-5  text-w-100 items-center border border-d-60 rounded-full'>
                      View Page
                      <i className='bg-d-60 py-1 px-3 rounded-full'>
                        <FaArrowRightLong />
                      </i>
                    </Button>
                  </div>
                </>}
                name={row.name} text={row.text} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
