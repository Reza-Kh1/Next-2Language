import IconBgStar from "@/components/IconBgStar/IconBgStar";
import ImageCustom from "@/components/ImageCustom/ImageCustom";
import { Button } from "@heroui/button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
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

export default function Home() {
  const HeaderTitle = ({ light, dark, text }: HeaderTitleType) => {
    return <div className="w-2/3 mx-auto text-center mt-16">
      <span className='text-w-80 text-6xl font-semibold mb-9'>{light}</span>
      <h2 className='text-w-100 text-6xl font-semibold inline-block ml-3 mb-6'>{dark}</h2>
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
        <HeaderTitle dark={"Services"} light={"Our"} text={"Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results."} />
        <div className="grid grid-cols-2">
          <div className="p-16 text-center flex flex-col justify-center items-center" style={{ backgroundImage: "url(/dot-top.png)" }}>
            <div className=" border-box">
              <span>asjdj alskd asdm</span>
              {/* <Image src={"/icons/code.png"} className="w-full h-11" width={50} height={50} alt="icon" /> */}
            </div>
            <span className="text-w-100">Web Development</span>
            <p className="text-w-80 mb-6 mt-4">Unlock Your Online Potential In today's digital age, a powerful web presence is essential for any business. At DigitX, our web development services empower you to stand out in the crowded online landscape. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices. From e-commerce platforms to interactive web applications, our expert developers bring your vision to life, making your online journey a resounding success.</p>
            <Button className="p-4 py-6 rounded-full border bg-d-100 text-w-80 border-d-60">
              Learn More
              <i className="py-1 px-3 bg-d-60 rounded-full">
                <FaArrowRight className="text-w-100" color="#ffff" />
              </i>
            </Button>
          </div>
        </div>
      </div>
      <div>
        <HeaderTitle dark={"Works"} light={"Our"} text={"Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself."} />
      </div>
    </>
  );
}
