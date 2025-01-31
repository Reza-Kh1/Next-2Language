import CircleBox from '@/components/CircleBox/CircleBox'
import ContainerHeader from '@/components/ContainerHeader/ContainerHeader'
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle'
import React from 'react'
import CategoriesService from './CategoriesService'
import ImageCustom from '@/components/ImageCustom/ImageCustom'
import Link from 'next/link'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { Button } from '@heroui/button'
import { Metadata } from 'next'
import { useLocale } from 'next-intl'
export const metadata: Metadata = {
  title: 'Services | Site',
  description: 'Services | Site'
}
const dataCicleBox = [
  {
    name: "Web Development",
    text: "Unlock Your Online Potential In today's digital age, a powerful web presence is essential for any business. At DigitX, our web development services empower you to stand out in the crowded online landscape. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices. From e-commerce platforms to interactive web applications, our expert developers bring your vision to life, making your online journey a resounding success.",
    image: "/icons/code.png",
    price: 1500
  }, {
    name: "Mobile App Development",
    text: "Embrace Mobility with Confidence Mobile devices have revolutionized the way we interact with the world. Our mobile app development services enable you to harness this mobility to your advantage. We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement. Whether it's iOS, Android, or cross-platform development, we ensure that your app delivers a seamless experience, leaving a lasting impression on your users.",
    image: "/icons/phone.png",
    price: 1800
  }, {
    name: "Web Design",
    text: "Elevate Your Brand Aesthetics Your website's design is a reflection of your brand's identity and values. DigitX's web design services focus on creating visually striking and user-friendly interfaces that leave a lasting impact. Our creative team blends aesthetics with functionality, delivering a captivating user experience that keeps visitors coming back for more. Let us transform your online presence into an immersive journey that showcases your brand's true essence.",
    image: "/icons/mouse.png",
    price: 2500
  }, {
    name: "Digital Marketing",
    text: "Drive Your Business Forward In the vast digital landscape, standing out from the competition is crucial. Our digital marketing services help you rise above the noise and connect with your target audience effectively. From search engine optimization (SEO) to social media marketing and pay-per-click (PPC) campaigns, our data-driven strategies ensure that your message reaches the right people at the right time.",
    image: "/icons/fast.png",
    price: 2150
  },
]
const datalastBox = [
  {
    name: "ABC Tech Solutions",
    iamge: "/icons/icon-light.png",
    chart: "E-commerce",
    bags: "Web Design & Development",
    challenge: "ABC Enterprises approached us with a desire to revamp their outdated website and create a more user-friendly and visually appealing platform. They sought to improve user engagement and increase online sales.",
    solution: "Our team conducted a thorough analysis of their target audience and business objectives. We designed a modern and intuitive website with seamless navigation and a mobile-responsive layout. Additionally, we integrated an efficient checkout process and optimized the site for search engines."
  }, {
    name: "Fitness Tracker App",
    iamge: "/icons/icon-light2.png",
    chart: "Health & Fitness",
    bags: "Mobile App Development",
    challenge: "Our client aimed to create an all-in-one fitness tracking app to cater to health enthusiasts and fitness professionals. They wanted a seamless user interface, real-time data tracking, and social sharing features.",
    solution: "Leveraging our expertise in app development, we built an interactive mobile app with user-friendly features. The app allowed users to set personalized fitness goals fitness goals, track their progress, and share achievements on social media platforms."
  },
]
export default function page() {
  const local = useLocale()
  return (
    <>
      <ContainerHeader dark='Digital Solutions' light='Our Comprehensive' text='At DigitX, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation, we are committed to delivering exceptional results for every project we undertake. From captivating web design that leaves a lasting impression to seamless web development that ensures optimal functionality, we cover every aspect of your online presence.' />
      <main className="main-class">
        <HeaderTitle dark='Our' light='Services' text='At DigitX, we are committed to providing exceptional digital solutions tailored to suit your unique business needs. Our comprehensive service offerings cover a wide spectrum of digital disciplines, including web design, app development, web development, and marketing.' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-16'>
          {dataCicleBox.map((row, index) => (
            <CircleBox price={row.price} image={row.image} name={row.name} key={index} text={row.text} />
          ))}
        </div>
        <HeaderTitle dark='Categories of' light='Services' text='At DigitX, we are committed to providing exceptional digital solutions tailored to suit your unique business needs. Our comprehensive service offerings cover a wide spectrum of digital disciplines, including web design, app development, web development, and marketing.' />
        <CategoriesService />
        <HeaderTitle dark='Stories' light='Success' text='At DigitX, our success is defined by the achievements of our valued clients. We take immense pride in the transformative impact our digital solutions have had on their businesses. Here are some inspiring success stories that highlight the outcomes of our collaborative efforts' />
        <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
          {datalastBox.map((row, index) => (
            <div key={index} className='w-full md:w-1/2 p-6 md:p-8 rounded-xl mt-6 md:mt-12' style={{ backgroundImage: "linear-gradient(48deg, #0f0f0f, #fefefe12)" }}>
              <div className='flex items-center gap-3 mb-4'>
                <ImageCustom alt={"logo"} figureClass='w-auto' src={row.iamge} width={50} height={50} />
                <h3 className='text-w-100 text-xl font-semibold'>{row.name}</h3>
              </div>
              <div className='flex flex-col md:flex-row items-start  md:items-center gap-3 mb-5 md:mb-8'>
                <div className='p-1 border rounded-full px-2 border-d-60 text-w-100 flex items-center gap-2'>
                  <ImageCustom figureClass='p-2 bg-d-60 rounded-full' src={"/icons/chart.png"} alt={"iamge"} width={15} height={15} />
                  <span className='text-sm'>
                    {row.chart}
                  </span>
                </div>
                <div className='p-1 border rounded-full px-2 border-d-60 text-w-100 flex items-center gap-2'>
                  <ImageCustom figureClass='p-2 bg-d-60 rounded-full' src={"/icons/bags.png"} alt={"iamge"} width={15} height={15} />
                  <span className='text-sm'>
                    {row.bags}
                  </span>
                </div>
              </div>
              <div className='p-6 border border-d-60 rounded-xl'>
                <div>
                  <span className='text-w-90 font-semibold'>Challenge</span>
                  <p className='text-w-50 mt-2'>{row.challenge}</p>
                </div>
                <span className='w-full h-[1px] bg-d-60 my-6 block'></span>
                <div>
                  <span className='text-w-90 font-semibold'>Solution</span>
                  <p className='text-w-50 mt-2'>{row.solution}</p>
                </div>
                <Link href={"#"} className='underline mt-6 text-sm block text-w-90'>Read Full Story</Link>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full flex justify-center my-6 md:mt-12'>
          <Button className='py-6 pr-2 pl-4 items-center rounded-full text-w-100 bg-d-100 border border-d-60'>
            View All Projects
            <i className='px-4 py-2 rounded-full bg-d-80'>
              {local === "fa" ?
                <FaArrowLeftLong className="text-w-100" color="#ffff" />
                :
                <FaArrowRightLong className="text-w-100" color="#ffff" />
              }
            </i>
          </Button>
        </div>
      </main>
    </>
  )
}
