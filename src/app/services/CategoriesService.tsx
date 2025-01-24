"use client"
import ImageCustom from '@/components/ImageCustom/ImageCustom'
import { Button } from '@heroui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
const dataBtn = [
    { name: "Web Design", img: "/icons/mouse.png" },
    { name: "Web Development", img: "/icons/code.png" },
    { name: "Mobile App Development", img: "/icons/phone.png" },
    { name: "Digital Marketing", img: "/icons/sun.png" },
]
const dataBox = [
    {
        name: "Key Features",
        text: "",
        boxs: [
            {
                name: "Customized Design",
                text: "We craft bespoke designs tailored to match your brand personality and industry."
            }, {
                name: "Responsive Design",
                text: "Ensuring your website adapts seamlessly to different devices and screen sizes."
            },
            {
                name: "User-Centric Approach",
                text: "Prioritizing ease of navigation and intuitive user experience."
            },
            {
                name: "Visual Elements",
                text: "Incorporating engaging visuals, graphics, and animations to enhance the overall appeal."
            },
        ]
    }, {
        name: "Design Process",
        text: "Our Web Design process follows a systematic approach to deliver a website that aligns perfectly with your business needs and branding. Here's an overview of our design process",
        boxs: [
            {
                name: "Discovery & Planning",
                text: "We start by understanding your business, target audience, and project goals. This stage involves gathering requirements and planning the design strategy."
            }, {
                name: "Wireframing & Prototyping",
                text: "Creating wireframes and interactive prototypes to visualize the website's layout and user flow."
            },
            {
                name: "Design & Development",
                text: "Once the wireframes are approved, our designers start working on the visual elements while our developers bring the design to life."
            },
            {
                name: "Testing & Review",
                text: "We conduct thorough testing to ensure the website functions flawlessly across different browsers and devices. Client feedback is also incorporated at this stage."
            },
        ]
    },
]
const dataTable = [
    { name: "GlobalTech Solutions", subject: "E-commerce", url: "www.globaltechsolutions.com" },
    { name: "GreenEarth Eco Store", subject: "Design Agency", url: "www.greenearthecostore.com" },
    { name: "TechGuru Inc.", subject: "Technology", url: "www.techguruinc.com" },
]
type BoxComponentType = {
    name: string
    text: string
    boxs: {
        name: string
        text: string
    }[]
}
export default function CategoriesService() {
    const [category, setCategory] = useState<string>("Web Design")
    const BoxComponent = ({ data }: { data: BoxComponentType }) => {
        return <div className='p-8 border border-d-60 rounded-xl my-4'>
            <span className='text-w-100'>Key Features</span>
            {data.text && <p className='text-w-50 mt-4 mb-8'>{data.text}</p>}
            <div className='flex flex-wrap'>
                {data.boxs.map((row, index) => (
                    <React.Fragment key={index}>
                        <div key={index} className={`w-1/2 py-8 pr-8 pl-0 ${(index + 1) % 2 === 0 ? " border-l border-l-d-60 pl-8" : ""}`}>
                            <span className='text-w-90'>Customized Design</span>
                            <p className='text-w-50'>We craft bespoke designs tailored to match your brand personality and industry.</p>
                        </div>
                        {(index + 1) === 2 ? <div className='w-full h-[1px] bg-d-60 my-6'></div> : null}
                    </React.Fragment>
                )
                )}
            </div>
        </div>
    }

    return (
        <div className='mt-12 flex gap-8 items-start'>
            <div className='sticky flex flex-col gap-4 w-1/4 top-5 h-auto left-0'>
                {dataBtn.map((row, index) => (
                    <Button onPress={() => setCategory(row.name)} key={index} className={`${category === row.name ? "bg-d-60" : "bg-d-100"} border border-d-60 rounded-lg p-4 py-6 justify-start text-white w-full flex gap-2`}>
                        <Image src={row.img} alt='button' width={20} height={20} />
                        {row.name}
                    </Button>
                ))}
            </div>
            <div className='w-3/4 flex flex-col'>
                <h2 className='text-w-100 font-semibold mb-4 text-xl'>Web Design</h2>
                <p className='text-w-50 mb-10'>Web Design is the art and science of creating visually appealing and user-friendly websites that reflect your brand identity and resonate with your target audience. At DigitX, our web design process involves a careful blend of creativity, user experience (UX) design, and cutting-edge technologies. We take the time to understand your business goals, target market, and unique selling points to create a website that not only looks great but also drives results.</p>
                {dataBox.map((i, index) => (
                    <BoxComponent data={i} key={index} />
                ))}
                <div className='p-8 border border-d-60 rounded-xl my-4'>
                    <span className='text-w-100'>Web Design Portfolio</span>
                    <p className='text-w-50 mt-4 mb-8'>Check out some of our most recent Web Design projects in the table below</p>
                    <div className='flex gap-5 relative'>
                        <ImageCustom alt={"services"} src={"/service1.png"} width={500} height={300} />
                        <ImageCustom alt={"services"} src={"/service2.png"} width={500} height={300} />
                        <Button className='py-6 pr-2 pl-4 absolute bottom-0 items-center left-1/2 transform -translate-x-1/2 rounded-full text-w-100 bg-d-100 border border-d-60'>
                            View All Projects
                            <i className='px-4 py-2 rounded-full bg-d-80'>
                                <FaArrowRightLong />
                            </i>
                        </Button>
                    </div>
                </div>
                <div className='p-8 border border-d-60 rounded-xl mt-4'>
                    <span className='text-w-100'>Our Web Design Competed Projects</span>
                    <p className='text-w-50 mt-4 mb-8'>At DigitX, we are dedicated to creating transformative mobile apps that empower your business and enrich your users' experiences.</p>
                    <ul className='w-full flex mb-6 ul-border'>
                        <li className='text-w-90 border border-d-60 p-5 font-semibold w-1/3'>Project Name</li>
                        <li className='text-w-90 border border-d-60 p-5 font-semibold w-1/3'>Industry</li>
                        <li className='text-w-90 border border-d-60 p-5 font-semibold w-1/3'>Website URL</li>
                    </ul>
                    <div className='flex flex-col table-border'>
                        {dataTable.map((row, index) => (
                            <ul key={index} className='w-full flex border-d-80'>
                                <li className='text-w-80 border border-d-60 p-5  w-1/3'>{row.name}</li>
                                <li className='text-w-80 border border-d-60 p-5  w-1/3'>{row.subject}</li>
                                <li className='text-w-80 border border-d-60 p-5  w-1/3'>{row.url}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}