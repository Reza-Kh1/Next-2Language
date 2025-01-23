import CircleBox from "@/components/CircleBox/CircleBox";
import IconBgStar from "@/components/IconBgStar/IconBgStar";
import ImageCustom from "@/components/ImageCustom/ImageCustom";
import ShapeBox from "@/components/ShapeBox/ShapeBox";
import SwipperComments from "@/components/SwipperComments/SwipperComments";
import { Button } from "@heroui/button";
import Image from "next/image";
import { FaArrowRight, FaTwitter } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
type HeaderTitleType = {
  light: string
  dark: string
  text: string
}
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
const dataCicleBox = [
  {
    name: "Web Development",
    text: "Unlock Your Online Potential In today's digital age, a powerful web presence is essential for any business. At DigitX, our web development services empower you to stand out in the crowded online landscape. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices. From e-commerce platforms to interactive web applications, our expert developers bring your vision to life, making your online journey a resounding success.",
    image: "/icons/code.png"
  }, {
    name: "Mobile App Development",
    text: "Embrace Mobility with Confidence Mobile devices have revolutionized the way we interact with the world. Our mobile app development services enable you to harness this mobility to your advantage. We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement. Whether it's iOS, Android, or cross-platform development, we ensure that your app delivers a seamless experience, leaving a lasting impression on your users.",
    image: "/icons/phone.png"
  }, {
    name: "Web Design",
    text: "Elevate Your Brand Aesthetics Your website's design is a reflection of your brand's identity and values. DigitX's web design services focus on creating visually striking and user-friendly interfaces that leave a lasting impact. Our creative team blends aesthetics with functionality, delivering a captivating user experience that keeps visitors coming back for more. Let us transform your online presence into an immersive journey that showcases your brand's true essence.",
    image: "/icons/mouse.png"
  }, {
    name: "Digital Marketing",
    text: "Drive Your Business Forward In the vast digital landscape, standing out from the competition is crucial. Our digital marketing services help you rise above the noise and connect with your target audience effectively. From search engine optimization (SEO) to social media marketing and pay-per-click (PPC) campaigns, our data-driven strategies ensure that your message reaches the right people at the right time.",
    image: "/icons/fast.png"
  },
]
const dataOurworks = [
  {
    image: "/shape/shape-1.png",
    name: "Innovative E-commerce Platform",
    text: "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping."
    , date: "January 2022",
    category: "Category: Web Development.",
  },
  {
    image: "/shape/shape-2.png",
    name: "Mobile App for Enhanced Fitness",
    text: "Our fitness app helps users stay fit and motivated with personalized workout plans and progress tracking. Its user-friendly design and comprehensive features make staying healthy an enjoyable experience.",
    category: "Category: Mobile App Development.",
    date: "March 2022",
  },
  {
    image: "/shape/shape-3.png",
    name: "Modern Corporate Website",
    text: "Check out our sleek and modern corporate website that showcases the client's brand and services. Its responsive design ensures a consistent experience across devices. ",
    category: "Category: Web Design.",
    date: "April 2022",
  },
  {
    image: "/shape/shape-4.png",
    name: "Digital Marketing Success Story",
    text: "Discover how our data-driven digital marketing strategies boosted a client's online presence, resulting in a significant increase in website traffic and leads.",
    category: "Category: Digital Marketing.",
    date: "May 2022",
  },
]
export default function Home() {
  const HeaderTitle = ({ light, dark, text }: HeaderTitleType) => {
    return <div className="w-2/3 mx-auto text-center mt-16">
      <span className='text-w-80 text-6xl font-semibold mb-9'>{dark}</span>
      <h2 className='text-w-100 text-6xl font-semibold inline-block ml-3 mb-6'>{light}</h2>
      <p className="text-w-50">{text}</p>
    </div>
  }
  return (
    <>
      <div className="w-2/3 mx-auto text-center mt-16">
        <h2 className='text-w-100 text-6xl font-semibold mb-3'>Reasons to Choose DigitX for
        </h2>
        <span className='text-w-80 text-6xl font-semibold block mb-9'>Your Digital Journey</span>
        <p className="text-w-50">Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.</p>
      </div>
      <div className="grid grid-cols-3 mt-16">
        <IconBgStar data={dataFirstIcon} />
      </div>
      <div>
        <HeaderTitle light={"Services"} dark={"Our"} text={"Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results."} />
        <div className="grid grid-cols-2 gap-10 mt-16">
          {dataCicleBox.map((row, index) => (
            <CircleBox name={row.name} key={index} text={row.text} image={row.image} />
          ))}
        </div>
      </div >
      <div>
        <HeaderTitle light={"Works"} dark={"Our"} text={"Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself."} />
        <div className="grid grid-cols-2 gap-10 mt-12">
          <ShapeBox data={dataOurworks} />
        </div>
      </div>
      <div>
        <HeaderTitle light={"Testimonials"} dark={"Our"} text={"Don't just take our word for it; hear what our satisfied clients have to say about their experience with DigitX. We take pride in building lasting relationships and delivering exceptional results."} />
        <div className="mt-12">
          <SwipperComments />
        </div>
      </div>
    </>
  );
}
