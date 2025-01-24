import ContainerHeader from '@/components/ContainerHeader/ContainerHeader'
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle'
import IconBgStar from '@/components/IconBgStar/IconBgStar'
import ImageCustom from '@/components/ImageCustom/ImageCustom'
import ProjectCards from '@/components/ProjectCards/ProjectCards'
import React from 'react'
const dataFirstIcon = [
  {
    image: "/icons/3star.png"
    , name: "Expertise That Drives Results"
    , text: "Our team of seasoned professionals brings years of experience and expertise to the table."
  }, {
    image: "/icons/lamp.png"
    , name: "Tailored Business Solutions "
    , text: "We understand that every business is unique. That's why our solutions are customized."
  }, {
    image: "/icons/mouse.png"
    , name: "Cutting-Edge Web Design"
    , text: "Leave a lasting impression on your audience with our top-notch web design services."
  },
  {
    image: "/icons/phone.png"
    , name: "Mobile-First Approach"
    , text: "In today's mobile-centric world, we prioritize mobile-first design to ensure your website."
  }, {
    image: "/icons/fast.png"
    , name: "Marketing Strategies"
    , text: "Our data-driven marketing strategies allow us to target the right audience with precision"
  }, {
    image: "/icons/app.png"
    , name: "Search Engine Optimization"
    , text: "(SEO) Mastery Boost your online visibility with our expert SEO techniques."
  },
]
const products = [
  { name: "E-Commerce Revolution", image: "/service1.png", text: "A dynamic e-commerce platform that revolutionized online shopping for fashion enthusiasts. The website showcases the latest trends, offers personalized recommendations, and seamless checkout options." },
  { name: "E-Commerce Revolution", image: "/service2.png", text: "A dynamic e-commerce platform that revolutionized online shopping for fashion enthusiasts. The website showcases the latest trends, offers personalized recommendations, and seamless checkout options." },
]
const box = [
  {
    name: "Healthcare Platform Enhancement",
    image: "/icons/icon-light.png",
    cat: "Web Development",
    date: "Q4 2023",
    text: "Our team is collaborating with a leading healthcare provider to enhance their existing platform. The project aims to streamline user experiences, optimize database performance, and implement advanced security measures to safeguard patient data. This ambitious undertaking will elevate the platform's capabilities and revolutionize healthcare accessibility for users."
  }, {
    name: "AI-Driven Marketing Automation",
    image: "/icons/icon-light2.png",
    cat: "Digital Marketing",
    date: "Q1 2024",
    text: "We are partnering with a dynamic marketing agency to develop an AI-driven marketing automation platform. This cutting-edge solution will empower businesses to optimize their marketing efforts through data-driven insights, personalized customer interactions, and automated campaign management. The project promises to revolutionize the digital marketing landscape and drive exceptional results for businesses of all sizes."
  },
  {
    name: "Educational Learning App",
    image: "/icons/icon-light.png",
    cat: "E-commerce",
    date: "Q4 2024",
    text: "We are collaborating with an eco-conscious startup to create an innovative e-commerce platform that promotes sustainable products and environmentally friendly practices. The platform will empower consumers to make eco-conscious choices while supporting sustainable businesses. This project aligns with our commitment to creating digital solutions that contribute to a greener future."
  },
  {
    name: "Community Engagement Portal",
    image: "/icons/icon-light2.png",
    cat: "Web Development",
    date: "Q4 2024"
    , text: "Our team is excited to be part of a community-driven initiative to develop an engagement portal that connects residents with local services, events, and resources. The portal aims to foster community interactions, promote inclusivity, and enhance the quality of life for residents. This project represents our dedication to using technology for positive social impact."
  },
]
export default function page() {
  return (
    <>
      <ContainerHeader firstDark dark='Empowering Your' light='Digital Vision' text='At DigitX, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we deliver exceptional results that elevate your online presence. Whether its captivating web designs, seamless app development, effective digital marketing, or other digital solutions, we are dedicated to bringing your ideas to life and helping your business thrive in the dynamic digital landscape. Partner with us today, and lets unlock endless possibilities for your digital success!' />
      <main className="main-class">
        <HeaderTitle firstLight light=' of Our Projects' dark='Key Features' text='Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.' />
        <div className="grid grid-cols-3 mt-16">
          <IconBgStar data={dataFirstIcon} />
        </div>
        <HeaderTitle firstLight dark='Projects' light='Showcase' text='Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations weve had with diverse clients across various industries. Let our work speak for itself.' />
        <div className='my-12 flex flex-col gap-10'>
          {products.map((row, index) => (
            <ProjectCards image={row.image} name={row.name} text={row.text} key={index} />
          ))}
        </div>
        <HeaderTitle firstLight light='Upcoming' dark='Projects' text='At DigitX, we are continually working on exciting new projects to push the boundaries of digital innovation and deliver exceptional solutions to our valued clients. While we are thrilled to share our upcoming projects with you, we understand the importance of confidentiality and safeguarding sensitive information. Therefore, we will provide a brief overview of the upcoming projects while keeping specific details concealed.' />
        <div className='grid grid-cols-2 gap-10 mt-12' >
          {box.map((row, index) => (
            <div key={index} className='p-8 rounded-xl flex flex-col gap-7' style={{ backgroundImage: "linear-gradient(31deg, rgb(15 15 15 / 0%), rgb(62 62 62 / 7%))" }}>
              <div className='flex items-center gap-3'>
                <ImageCustom figureClass='w-auto' src={row.image} width={40} height={40} alt={"icon"} />
                <h3 className='text-w-100 font-semibold text-xl'>{row.name}</h3>
              </div>
              <div className='p-6 border border-d-60 rounded-xl justify-between flex items-center'>
                <div className='flex flex-col gap-1'>
                  <span className='text-w-50 text-sm'>Category</span>
                  <span className='text-w-90'>{row.cat}</span>
                </div>
                <div className='w-[1px] border border-d-60 h-full bg-d-60'></div>
                <div className='flex flex-col gap-1'>
                  <span className='text-w-50 text-sm'>Expected Completion</span>
                  <span className='text-w-90'>{row.date}</span>
                </div>
              </div>
              <div className='p-6 border border-d-60 rounded-xl'>
                <span className='text-w-90'>Project Description</span>
                <p className='text-w-50 mt-4'>{row.text}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
