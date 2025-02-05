"use client"
import { ProducrtType } from '@/app/type'
import ContainerHeader from '@/components/ContainerHeader/ContainerHeader'
import { Button } from '@heroui/button'
import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Image from 'next/image'

export default function page() {
    const [step, setStep] = useState<number>(0)
    const [data, setData] = useState<ProducrtType>()
    const [phone, setPhone] = useState<string>("")
    const phoneHandler = () => {
        setStep(1)
    }
    useEffect(() => {
        const local = localStorage.getItem("product-shlabs")
        if (local) {
            const json = JSON.parse(local as string) as ProducrtType
            setData(json)
        }
    }, [])
    return (
        <>

            <ContainerHeader firstDark dark={"shlabs"} light={"payments"} text={""} />
            <main className='main-class'>
                <div className='p-4 gap-3 mt-12 md:p-8 flex justify-between rounded-xl border border-d-60' style={{ backgroundImage: 'linear-gradient(204deg, #ffffff0d, #0202028f)' }}>
                    <div className='w-4/12 pr-5 border-r border-d-60 flex flex-col items-center justify-center text-center gap-6'>
                        <h1 className='text-white text-3xl font-semibold'>Order Summery</h1>
                        <div className='border p-6 w-full bg-d-80 rounded-xl flex justify-between text-white items-center relative border-d-60'>
                            <span className='font-semibold'>{data?.name}</span>
                            <span>${data?.price}</span>
                            <span className='absolute cursor-pointer top-1 right-1 text-white'>
                                <MdClose size={20} />
                            </span>
                        </div>
                        <div className='w-full flex flex-col gap-6'>
                            <div className='flex justify-between w-full items-center text-white'>
                                <span>Subtotal</span>
                                <span>${data?.price}</span>
                            </div>
                            <div className='flex justify-between w-full items-center text-white'>
                                <span>Shipping</span>
                                <span>$5.25</span>
                            </div>
                            <div className='flex justify-between w-full items-center text-red-500 text-2xl font-semibold'>
                                <span>Total</span>
                                <span>${Number(data?.price) + Number(5.25)}</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-8/12 pl-5 flex flex-col justify-evenly'>
                        <div className='flex items-center mb-8'>
                            <figure className='bg-d-100 p-3 rounded-full'>
                                <Image src={"/icons/phone.png"} alt='phone' width={40} height={40} />
                            </figure>
                            <span className={`${step > 0 ? ' bg-d-100' : 'bg-d-50'} block w-full h-1`}></span>
                            <figure className={`${step > 0 ? ' bg-d-100' : 'bg-d-50'} p-3 rounded-full`}>
                                <Image src={"/icons/chart.png"} alt='phone' width={40} height={40} />
                            </figure>
                            <span className={`${step > 1 ? ' bg-d-100' : 'bg-d-50'} block w-full h-1`}></span>
                            <figure className={`${step > 1 ? ' bg-d-100' : 'bg-d-50'} p-3 rounded-full`}>
                                <Image src={"/icons/app.png"} alt='phone' width={40} height={40} />
                            </figure>
                        </div>
                        {step === 0 ? <div className=' flex flex-col justify-evenly items-center'>
                            <label htmlFor="" className='flex flex-col gap-2 w-2/3 mx-auto'>
                                <span className='font-semibold text-w-100'>Phone Number</span>
                                <input value={phone} onChange={({ target }) => setPhone(target.value)} type="text" name='phone' placeholder='Enter your Phone Number' title='Name' className='bg-d-100 border border-d-60 rounded-full p-3 text-w-80' />
                            </label>
                            <div className='flex justify-end mt-6 w-2/3 mx-auto'>
                                <Button onPress={phoneHandler} className='px-5 py-3 bg-d-100 rounded-full border border-d-60'>
                                    Next
                                    <i>
                                        <GrFormNextLink size={25} />
                                    </i>
                                </Button>
                            </div>
                        </div> :
                            step === 1 ?
                                <div className=' flex flex-col gap-4 justify-evenly items-center'>
                                    <label htmlFor="" className='flex flex-col gap-2 w-2/3 mx-auto'>
                                        <span className='font-semibold text-w-100'>card Holder</span>
                                        <input value={phone} onChange={({ target }) => setPhone(target.value)} type="text" name='phone' placeholder='Enter your card Holder' title='Name' className='bg-d-100 border border-d-60 rounded-full p-3 text-w-80' />
                                    </label>
                                    <label htmlFor="" className='flex flex-col gap-2 w-2/3 mx-auto'>
                                        <span className='font-semibold text-w-100'>card Number</span>
                                        <input value={phone} onChange={({ target }) => setPhone(target.value)} type="text" name='phone' placeholder='Enter your card Number' title='Name' className='bg-d-100 border border-d-60 rounded-full p-3 text-w-80' />
                                    </label>
                                    <div className='flex w-2/3'>
                                        <label htmlFor="" className='flex flex-col gap-2'>
                                            <span className='font-semibold text-w-100'>CVV</span>
                                            <input value={phone} onChange={({ target }) => setPhone(target.value)} type="text" name='phone' placeholder='Enter your CVV' title='Name' className='bg-d-100 border border-d-60 rounded-full p-3 text-w-80' />
                                        </label>
                                    </div>
                                    <div className='flex justify-end mt-6'>
                                        <Button onPress={() => setStep(0)} className='px-5 py-3 bg-d-100 rounded-full border border-d-60'>
                                            Back
                                            <i>
                                                <GrFormPreviousLink size={25} />
                                            </i>
                                        </Button>
                                        <Button onPress={() => setStep(2)} className='px-5 py-3 bg-d-100 rounded-full border border-d-60'>
                                            Purchase
                                            <i>
                                                <GrFormNextLink size={25} />
                                            </i>
                                        </Button>
                                    </div>
                                </div>
                                :
                                <div className=' flex flex-col justify-evenly'>
                                    <label htmlFor="" className='flex flex-col gap-2'>
                                        <span className='font-semibold text-w-100'>Phone Number</span>
                                        <input value={phone} onChange={({ target }) => setPhone(target.value)} type="text" name='phone' placeholder='Enter your Phone Number' title='Name' className='bg-d-100 border border-d-60 rounded-full p-3 text-w-80' />
                                    </label>
                                    <div className='flex justify-end mt-6'>
                                        <Button onPress={phoneHandler} className='px-5 py-3 bg-d-100 rounded-full border border-d-60'>
                                            Next
                                            <i>
                                                <GrFormNextLink size={25} />
                                            </i>
                                        </Button>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
