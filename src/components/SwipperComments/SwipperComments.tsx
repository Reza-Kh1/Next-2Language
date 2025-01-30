"use client"
import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { TiArrowSortedDown } from 'react-icons/ti'
import ImageCustom from '../ImageCustom/ImageCustom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./style.css"
import { Pagination, Navigation } from 'swiper/modules';
export default function SwipperComments() {
    return (
        <Swiper

            modules={[Pagination, Navigation]}
            spaceBetween={50}
            loop={true}
            slidesPerView={3}
            // navigation
            breakpoints={{
                0: { 
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 3,
                }
            }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className="flex flex-col gap-8">
                    <div className="p-6 md:p-10 border-d-50 border relative bg-gradient-to-b from-gray-500/15 flex flex-col justify-center items-start gap-4 md:gap-8 to-black/0 rounded-xl">
                        <i className='border  border-d-50 mx-auto md:mx-0 p-4 rounded-md text-w-100 bg-d-60'>
                            <FaTwitter className="text-w-100" />
                        </i>
                        <p className="text-w-80 text-center md:text-start text-sm">Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.</p>
                        <i className="absolute transform -translate-x-1/2 md:translate-x-0 left-1/2 md:left-0 -bottom-8">
                            <TiArrowSortedDown className="text-d-50 text-5xl" />
                        </i>
                    </div>
                    <div className="flex items-center justify-center md:justify-start md:flex-row flex-col gap-2 md:gap-4">
                        <ImageCustom src={"/profile/man.png"} figureClass="w-auto" alt={"profile"} width={50} height={50} />
                        <div className="flex flex-col">
                            <span className="text-w-100 text-sm md:text-base text-center md:text-start">Founder of GreenEarth Eco Store</span>
                            <span className="text-w-50 text-sm text-center md:text-xs md:text-start">Mark Roberts</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col gap-8">
                    <div className="p-6 md:p-10 border-d-50 border relative bg-gradient-to-b from-gray-500/15 flex flex-col justify-center items-start gap-4 md:gap-8 to-black/0 rounded-xl">
                        <i className='border  border-d-50 mx-auto md:mx-0 p-4 rounded-md text-w-100 bg-d-60'>
                            <FaTwitter className="text-w-100" />
                        </i>
                        <p className="text-w-80 text-center md:text-start text-sm">Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.</p>
                        <i className="absolute transform -translate-x-1/2 md:translate-x-0 left-1/2 md:left-0 -bottom-8">
                            <TiArrowSortedDown className="text-d-50 text-5xl" />
                        </i>
                    </div>
                    <div className="flex items-center justify-center md:justify-start md:flex-row flex-col gap-2 md:gap-4">
                        <ImageCustom src={"/profile/man.png"} figureClass="w-auto" alt={"profile"} width={50} height={50} />
                        <div className="flex flex-col">
                            <span className="text-w-100 text-sm md:text-base text-center md:text-start">Founder of GreenEarth Eco Store</span>
                            <span className="text-w-50 text-sm text-center md:text-xs md:text-start">Mark Roberts</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col gap-8">
                    <div className="p-6 md:p-10 border-d-50 border relative bg-gradient-to-b from-gray-500/15 flex flex-col justify-center items-start gap-4 md:gap-8 to-black/0 rounded-xl">
                        <i className='border  border-d-50 mx-auto md:mx-0 p-4 rounded-md text-w-100 bg-d-60'>
                            <FaTwitter className="text-w-100" />
                        </i>
                        <p className="text-w-80 text-center md:text-start text-sm">Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.</p>
                        <i className="absolute transform -translate-x-1/2 md:translate-x-0 left-1/2 md:left-0 -bottom-8">
                            <TiArrowSortedDown className="text-d-50 text-5xl" />
                        </i>
                    </div>
                    <div className="flex items-center justify-center md:justify-start md:flex-row flex-col gap-2 md:gap-4">
                        <ImageCustom src={"/profile/man.png"} figureClass="w-auto" alt={"profile"} width={50} height={50} />
                        <div className="flex flex-col">
                            <span className="text-w-100 text-sm md:text-base text-center md:text-start">Founder of GreenEarth Eco Store</span>
                            <span className="text-w-50 text-sm text-center md:text-xs md:text-start">Mark Roberts</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col gap-8">
                    <div className="p-6 md:p-10 border-d-50 border relative bg-gradient-to-b from-gray-500/15 flex flex-col justify-center items-start gap-4 md:gap-8 to-black/0 rounded-xl">
                        <i className='border  border-d-50 mx-auto md:mx-0 p-4 rounded-md text-w-100 bg-d-60'>
                            <FaTwitter className="text-w-100" />
                        </i>
                        <p className="text-w-80 text-center md:text-start text-sm">Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.</p>
                        <i className="absolute transform -translate-x-1/2 md:translate-x-0 left-1/2 md:left-0 -bottom-8">
                            <TiArrowSortedDown className="text-d-50 text-5xl" />
                        </i>
                    </div>
                    <div className="flex items-center justify-center md:justify-start md:flex-row flex-col gap-2 md:gap-4">
                        <ImageCustom src={"/profile/man.png"} figureClass="w-auto" alt={"profile"} width={50} height={50} />
                        <div className="flex flex-col">
                            <span className="text-w-100 text-sm md:text-base text-center md:text-start">Founder of GreenEarth Eco Store</span>
                            <span className="text-w-50 text-sm text-center md:text-xs md:text-start">Mark Roberts</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
