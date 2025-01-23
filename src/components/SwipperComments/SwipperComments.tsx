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
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className="flex flex-col gap-8">
                    <div className="p-10 border-d-50 border relative bg-gradient-to-b from-gray-500/15 flex flex-col justify-center items-start gap-8 to-black/0 rounded-xl">
                        <i className='border border-d-50 p-4 rounded-md text-w-100 bg-d-60'>
                            <FaTwitter className="text-w-100" />
                        </i>
                        <p className="text-w-80">Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.</p>
                        <i className="absolute left-0 -bottom-8">
                            <TiArrowSortedDown className="text-d-50 text-5xl" />
                        </i>
                    </div>
                    <div className="flex items-center gap-4">
                        <ImageCustom src={"/profile/man.png"} figureClass="w-auto" alt={"profile"} width={50} height={50} />
                        <div className="flex flex-col">
                            <span className="text-w-100">Founder of GreenEarth Eco Store</span>
                            <span className="text-w-50 text-sm">Mark Roberts</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col gap-8">
                    <div className="p-10 border-d-50 border relative bg-gradient-to-b from-gray-500/15 flex flex-col justify-center items-start gap-8 to-black/0 rounded-xl">
                        <i className='border border-d-50 p-4 rounded-md text-w-100 bg-d-60'>
                            <FaTwitter className="text-w-100" />
                        </i>
                        <p className="text-w-80">Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.</p>
                        <i className="absolute left-0 -bottom-8">
                            <TiArrowSortedDown className="text-d-50 text-5xl" />
                        </i>
                    </div>
                    <div className="flex items-center gap-4">
                        <ImageCustom src={"/profile/man.png"} figureClass="w-auto" alt={"profile"} width={50} height={50} />
                        <div className="flex flex-col">
                            <span className="text-w-100">Founder of GreenEarth Eco Store</span>
                            <span className="text-w-50 text-sm">Mark Roberts</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col gap-8">
                    <div className="p-10 border-d-50 border relative bg-gradient-to-b from-gray-500/15 flex flex-col justify-center items-start gap-8 to-black/0 rounded-xl">
                        <i className='border border-d-50 p-4 rounded-md text-w-100 bg-d-60'>
                            <FaTwitter className="text-w-100" />
                        </i>
                        <p className="text-w-80">Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.</p>
                        <i className="absolute left-0 -bottom-8">
                            <TiArrowSortedDown className="text-d-50 text-5xl" />
                        </i>
                    </div>
                    <div className="flex items-center gap-4">
                        <ImageCustom src={"/profile/man.png"} figureClass="w-auto" alt={"profile"} width={50} height={50} />
                        <div className="flex flex-col">
                            <span className="text-w-100">Founder of GreenEarth Eco Store</span>
                            <span className="text-w-50 text-sm">Mark Roberts</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col gap-8">
                    <div className="p-10 border-d-50 border relative bg-gradient-to-b from-gray-500/15 flex flex-col justify-center items-start gap-8 to-black/0 rounded-xl">
                        <i className='border border-d-50 p-4 rounded-md text-w-100 bg-d-60'>
                            <FaTwitter className="text-w-100" />
                        </i>
                        <p className="text-w-80">Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.</p>
                        <i className="absolute left-0 -bottom-8">
                            <TiArrowSortedDown className="text-d-50 text-5xl" />
                        </i>
                    </div>
                    <div className="flex items-center gap-4">
                        <ImageCustom src={"/profile/man.png"} figureClass="w-auto" alt={"profile"} width={50} height={50} />
                        <div className="flex flex-col">
                            <span className="text-w-100">Founder of GreenEarth Eco Store</span>
                            <span className="text-w-50 text-sm">Mark Roberts</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col gap-8">
                    <div className="p-10 border-d-50 border relative bg-gradient-to-b from-gray-500/15 flex flex-col justify-center items-start gap-8 to-black/0 rounded-xl">
                        <i className='border border-d-50 p-4 rounded-md text-w-100 bg-d-60'>
                            <FaTwitter className="text-w-100" />
                        </i>
                        <p className="text-w-80">Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.</p>
                        <i className="absolute left-0 -bottom-8">
                            <TiArrowSortedDown className="text-d-50 text-5xl" />
                        </i>
                    </div>
                    <div className="flex items-center gap-4">
                        <ImageCustom src={"/profile/man.png"} figureClass="w-auto" alt={"profile"} width={50} height={50} />
                        <div className="flex flex-col">
                            <span className="text-w-100">Founder of GreenEarth Eco Store</span>
                            <span className="text-w-50 text-sm">Mark Roberts</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col gap-8">
                    <div className="p-10 border-d-50 border relative bg-gradient-to-b from-gray-500/15 flex flex-col justify-center items-start gap-8 to-black/0 rounded-xl">
                        <i className='border border-d-50 p-4 rounded-md text-w-100 bg-d-60'>
                            <FaTwitter className="text-w-100" />
                        </i>
                        <p className="text-w-80">Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.</p>
                        <i className="absolute left-0 -bottom-8">
                            <TiArrowSortedDown className="text-d-50 text-5xl" />
                        </i>
                    </div>
                    <div className="flex items-center gap-4">
                        <ImageCustom src={"/profile/man.png"} figureClass="w-auto" alt={"profile"} width={50} height={50} />
                        <div className="flex flex-col">
                            <span className="text-w-100">Founder of GreenEarth Eco Store</span>
                            <span className="text-w-50 text-sm">Mark Roberts</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
