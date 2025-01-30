import AccordionBox from "@/components/AccordionBox/AccordionBox";
import CircleBox from "@/components/CircleBox/CircleBox";
import HeaderTitle from "@/components/HeaderTitle/HeaderTitle";
import IconBgStar from "@/components/IconBgStar/IconBgStar";
import ShapeBox from "@/components/ShapeBox/ShapeBox";
import SwipperComments from "@/components/SwipperComments/SwipperComments";
import TwoImageBox from "@/components/TwoImageBox/TwoImageBox";
import { FaSearch } from "react-icons/fa";
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
const twoImages = [
  {
    img1: "/logo.png",
    img2: "/flower/logo.png",
    name: "ABC Tech Solutions",
    text: "A leading technology firm that trusted DigitX to develop their responsive website, showcasing their cutting-edge products and services."
  }, {
    img1: "/logo.png",
    img2: "/flower/logo2.png",
    name: "GreenEarth Eco Store",
    text: "DigitX collaborated with GreenEarth Eco Store to create an engaging e-commerce platform that promotes sustainable living and eco-friendly products."
  }, {
    img1: "/logo.png",
    img2: "/flower/logo3.png",
    name: "HealthTech Innovations",
    text: "DigitX developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health."
  }, {
    img1: "/logo.png",
    img2: "/flower/logo4.png",
    name: "GlobalTech Solutions",
    text: "GlobalTech Solutions partnered with DigitX for a website redesign, resulting in a modern interface that elevates their online presence."
  },
  {
    img1: "/logo.png",
    img2: "/flower/logo4.png",
    name: "TechGuru Inc.",
    text: "DigitX's digital marketing strategies boosted TechGuru Inc.'s online visibility and customer engagement, driving significant business growth."
  },
  {
    img1: "/logo.png",
    img2: "/flower/logo4.png",
    name: "ArtScape Gallery",
    text: "DigitX brought ArtScape Gallery's artistic vision to life with a visually stunning website, showcasing the work of talented artists."
  },
]
export default function Home() {
  return (
    <main className="main-class">
      <div className="w-full md:w-2/3 mx-auto text-center mt-16">
        <h2 className='text-w-100 text-3xl md:text-6xl font-semibold mb-3'>Reasons to Choose DigitX for
        </h2>
        <span className='text-w-80 text-3xl md:text-6xl font-semibold block mb-9'>Your Digital Journey</span>
        <p className="text-w-50">Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.</p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-3 mt-10 md:mt-16">
        <IconBgStar data={dataFirstIcon} />
      </div>
      <div>
        <HeaderTitle light={"Services"} dark={"Our"} text={"Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results."} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-16">
          {dataCicleBox.map((row, index) => (
            <CircleBox btnMore name={row.name} key={index} text={row.text} image={row.image} />
          ))}
        </div>
      </div >
      <div>
        <HeaderTitle light={"Works"} dark={"Our"} text={"Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself."} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-8 md:t-12">
          <ShapeBox data={dataOurworks} />
        </div>
      </div>
      <div>
        <HeaderTitle light={"Testimonials"} dark={"Our"} text={"Don't just take our word for it; hear what our satisfied clients have to say about their experience with DigitX. We take pride in building lasting relationships and delivering exceptional results."} />
        <div className="mt-12">
          <SwipperComments />
        </div>
      </div>
      <div>
        <HeaderTitle dark="Frequently" light="Asked Questions" text="Got questions? We've got answers. Check out our frequently asked questions section to find valuable insights into our processes, pricing, and more. Transparency is at the core of our client interactions." />
        <div className="my-10 md:my-14 flex justify-center">
          <label htmlFor="" className="relative rounded-full bg-d-80 border w-full md:w-1/4 mx-auto border-d-60">
            <input type="text" placeholder="Search" className="w-full pl-10 p-4 rounded-full h-full bg-d-80 text-w-90" />
            <button title="search button" type="button" className="absolute left-3 text-w-90 top-1/2 transform -translate-y-1/2">
              <FaSearch />
            </button>
          </label>
        </div>
        <div>
          <AccordionBox />
        </div>
      </div>
      <div>
        <HeaderTitle dark="Our" light="Partners and Clients" text="We are grateful for the opportunity to work with esteemed partners and clients. Our strong relationships are a testament to our dedication and expertise in the digital realm." />
        <div className="my-10 md:my-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {twoImages.map((i, index) => (
            <TwoImageBox img1={i.img1} img2={i.img2} name={i.name} text={i.text} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
