"use client"
import { ProducrtType } from '@/app/type'
import ContainerHeader from '@/components/ContainerHeader/ContainerHeader'
import { Button } from '@heroui/button'
import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Image from 'next/image'
import { Checkbox, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import { Link } from '@/i18n/routing'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import ImageCustom from '@/components/ImageCustom/ImageCustom'
import { SiTailwindcss } from 'react-icons/si'
import { FaHtml5, FaReact } from 'react-icons/fa6'
export default function page() {
    const t = useTranslations("Payment")
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const local = useLocale()
    const [payment, setPayment] = useState<string>("")
    const [step, setStep] = useState<number>(0)
    const [data, setData] = useState<ProducrtType>()
    const [approvalRule, setApprovalRule] = useState<boolean>(false)
    const [phone, setPhone] = useState<string>("")

    const route = useRouter()
    const phoneHandler = () => {
        setStep(1)
        return
        if (approvalRule && phone) {
            setStep(1)
        } else {
            const err = local === "fa" ? "قوانین وبسایت را مطالعه و تایید کنید" : "You must accept the Terms and Conditions before proceeding."
            toast.error(err)
        }
    }
    const cancelHandler = () => {
        localStorage.setItem("product-shlabs", "")
        route.replace("/en/scripts-hub")
    }
    const downloadHandler = async () => {
        if (!data?.download_url) return
        try {
            const response = await fetch(data?.download_url);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = blobUrl;
            link.setAttribute("download", data?.download_url);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            toast.error("Downlod in Error")
            console.error("Error in download:", error);
        }
    };
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
                <div className='p-4 gap-3 mt-12 md:p-8 flex flex-col md:flex-row justify-between rounded-xl border border-d-60' style={{ backgroundImage: 'linear-gradient(204deg, #ffffff0d, #0202028f)' }}>
                    <div className='w-full md:w-4/12 pb-5 md:pr-5 border-b md:border-b-0 md:border-r border-d-60 flex flex-col items-center justify-center text-center gap-6'>
                        <h1 className='text-white text-3xl font-semibold'>{local === "fa" ? "خلاصه سفارس" : "Order Summery"}</h1>
                        <div className='border p-6 w-full bg-d-80 rounded-xl flex justify-between text-white items-center relative border-d-60'>
                            <span className='font-semibold'>{data?.en_name}</span>
                            <span>{data?.price} T</span>
                            <span onClick={cancelHandler} className='absolute cursor-pointer top-1 right-1 text-white'>
                                <MdClose size={20} />
                            </span>
                        </div>
                        <div className='w-full flex flex-col gap-6'>
                            <div className='flex justify-between w-full items-center text-white'>
                                <span>{local === "fa" ? "هزینه محصول" : "Subtotal"}</span>
                                <span>{data?.price} T</span>
                            </div>
                            <div className='flex justify-between w-full items-center text-white'>
                                <span>{local === "fa" ? "حمل و نقل" : "Shipping"}</span>
                                <span>5.25 T</span>
                            </div>
                            <div className='flex justify-between w-full items-center text-red-500 text-2xl font-semibold'>
                                <span>{local === "fa" ? "جمع کل" : "Total"}</span>
                                <span>{Number(data?.price) + Number(5.25)} T</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-8/12 pt-5 md:pl-5 flex flex-col justify-evenly'>
                        <div className='flex items-center mb-8'>
                            <figure className='bg-w-90 p-3 rounded-full'>
                                <Image src={"/icons/phone-call.png"} alt='phone' width={50} height={50} />
                            </figure>
                            <span className={`${step > 0 ? ' bg-w-90' : 'bg-d-50'} block w-full h-1`}></span>
                            <figure className={`${step > 0 ? ' bg-w-90' : 'bg-d-50'} p-3 rounded-full`}>
                                <Image src={"/icons/cvv-card.png"} alt='phone' width={50} height={50} />
                            </figure>
                            <span className={`${step > 1 ? ' bg-w-90' : 'bg-d-50'} block w-full h-1`}></span>
                            <figure className={`${step > 1 ? ' bg-w-90' : 'bg-d-50'} p-3 rounded-full`}>
                                <Image src={"/icons/download.png"} alt='phone' width={50} height={50} />
                            </figure>
                        </div>
                        {step === 0 ?
                            <div className=' flex flex-col justify-evenly items-center'>
                                <label htmlFor="" className='flex flex-col gap-2 w-full md:w-2/3 mx-auto'>
                                    <span className='font-semibold text-w-100'>Phone Number</span>
                                    <input value={phone} onChange={({ target }) => setPhone(target.value)} type="text" name='phone' placeholder='Enter your Phone Number' title='Name' className='bg-d-100 border border-d-60 rounded-full p-3 text-w-80' />
                                    <button type='button' className='text-white flex justify-start mt-8' onClick={onOpen}>
                                        <Checkbox color='default' onChange={() => onOpen()} isSelected={approvalRule} />
                                        <span>{t("terms")}</span>
                                    </button>
                                </label>
                                <div className='flex justify-end mt-6 w-full md:w-2/3 mx-auto'>
                                    <Button onPress={phoneHandler} className='px-5 py-3 bg-d-100 rounded-full border border-d-60'>
                                        Next
                                        <i>
                                            <GrFormNextLink size={25} />
                                        </i>
                                    </Button>
                                </div>
                            </div> :
                            step === 1 ?
                                <div className='flex flex-col gap-4 justify-evenly'>
                                    <div className='w-full'>
                                        <div className='flex gap-2 items-center'>
                                            <ImageCustom src={"/service2.png"} alt={data?.en_name || ""} width={300} height={280} figureClass='w-auto' />
                                            <div>
                                                <span className='text-white font-semibold mb-5 block'>
                                                    {data?.en_name || ""}
                                                </span>
                                                <div className='flex gap-4'>
                                                    <i className='p-2 rounded-full bg-d-80 border border-d-60 text-w-100'>
                                                        <SiTailwindcss />
                                                    </i>
                                                    <i className='p-2 rounded-full bg-d-80 border border-d-60 text-w-100'>
                                                        <FaHtml5 />
                                                    </i>
                                                    <i className='p-2 rounded-full bg-d-80 border border-d-60 text-w-100'>
                                                        <FaReact />
                                                    </i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex gap-3 flex-col text-white mt-4'>
                                            <span>
                                                Support duration : 20 days
                                            </span>
                                            <span>
                                                Number of downloads allowed : 4
                                            </span>
                                            <span>Select your payment gateway:</span>
                                            <div className='flex items-center gap-5'>
                                                <div onClick={() => setPayment("zarinpal")} className={`${payment === "zarinpal" ? "bg-d-60" : ""} flex w-1/4 gap-3 border border-d-60 rounded-md p-3 cursor-pointer items-center`}>
                                                    <ImageCustom figureClass='w-auto' className='rounded-xl shadow-md' src={"/zarinpal.png"} alt={"logo"} width={60} height={40} />
                                                    <span>Zarin pal</span>
                                                </div>
                                                <div onClick={() => setPayment("zibal")} className={`${payment === "zibal" ? "bg-d-60" : ""} flex w-1/4 gap-3 border border-d-60 rounded-md p-3 cursor-pointer items-center`}>
                                                    <ImageCustom figureClass='w-auto' className='rounded-xl shadow-md' src={"/zibal.jpg"} alt={"logo"} width={60} height={40} />
                                                    <span>Zibal</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex justify-between w-full mt-6'>
                                        <Button onPress={() => setStep(0)} className='px-5 py-3 bg-d-100 rounded-full border border-d-60'>
                                            <i>
                                                <GrFormPreviousLink size={25} />
                                            </i>
                                            Back
                                        </Button>
                                        <Button type='submit' onPress={() => setStep(2)} className='px-5 py-3 bg-d-100 rounded-full border border-d-60'>
                                            Purchase
                                            <i>
                                                <GrFormNextLink size={25} />
                                            </i>
                                        </Button>
                                    </div>
                                </div>
                                :
                                <div className='text-center flex flex-col justify-evenly mx-auto w-3/4'>
                                    <span className='text-2xl text-white font-semibold'>Payment Success!</span>
                                    <span className='text-w-80 font-semibold block mb-4 pb-4 border-b border-d-60'>Your payment has been successfully done.</span>
                                    <span className='text-w-80 text-sm'>Total Payment</span>
                                    <span className='text-w-80 text-2xl font-semibold mb-8'>IDR 1,000,000</span>
                                    <div className='grid grid-cols-2 gap-5'>
                                        <div className='p-3 flex flex-col gap-3 border rounded-xl border-d-60'>
                                            <span className='text-sm text-w-80'>Ref Number</span>
                                            <span className='text-w-100'>000085752257</span>
                                        </div>
                                        <div className='p-3 flex flex-col gap-3 border rounded-xl border-d-60'>
                                            <span className='text-sm text-w-80'>Payment Time</span>
                                            <span className='text-w-100'>25 Feb 2023, 13:22</span>
                                        </div>
                                        <div className='p-3 flex flex-col gap-3 border rounded-xl border-d-60'>
                                            <span className='text-sm text-w-80'>Payment Method</span>
                                            <span className='text-w-100'>Bank Transfer</span>
                                        </div>
                                        <div className='p-3 flex flex-col gap-3 border rounded-xl border-d-60'>
                                            <span className='text-sm text-w-80'>Sender Name</span>
                                            <span className='text-w-100'>Antonio Roberto</span>
                                        </div>
                                    </div>
                                    <div className='text-w-80 cursor-pointer flex w-3/4 mx-auto gap-2 items-center justify-center mt-5' onClick={downloadHandler}>
                                        <ImageCustom figureClass='w-auto' src={"/download.png"} width={30} height={30} alt={"logo download"} />
                                        <span className='text-'>Get PDF Receipt</span>
                                    </div>
                                    <div className='flex justify-end mt-6'>
                                        <Link href={"/scripts-hub"} className='px-5 py-3 flex items-center text-white justify-center gap-2 bg-d-100 rounded-full border border-d-60'>
                                            Scrpits Hub Page
                                            <i>
                                                <GrFormNextLink size={25} />
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </main>
            <Modal scrollBehavior='inside' size='full' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-white">{t("terms")}</ModalHeader>
                            <ModalBody>
                                <div className='flex flex-col gap-5 '>
                                    <span className='text-w-90'>{t("textTerms.name")}</span>
                                    <p className='text-white text-xl'>{t("textTerms.create")}</p>
                                    <div className='flex flex-col gap-4'>
                                        {t.raw("textTerms.array").map((row: any) => (
                                            <div key={row.name} className='flex flex-col gap-3'>
                                                <span className='text-w-90'>{row.name}</span>
                                                {row.texts.map((item: any, index: number) => (
                                                    <div key={index} className='flex flex-col gap-2'>
                                                        <p className='text-sm ml-2 text-w-80'>{item}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                    <p className='text-white text-lg'>{t("textTerms.lastText")}</p>
                                    <div className='flex justify-start'>
                                        <Button className='bg-white text-black rounded-full' onPress={() => { onOpenChange(), setApprovalRule(true) }}>
                                            {local === "fa" ? "تایید قوانین" : "confirmation"}
                                        </Button>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter className='flex justify-end items-center'>
                                <Button className='rounded-full bg-d-btn text-white border border-d-60' onPress={() => { onClose(), setApprovalRule(false) }}>
                                    {local === "fa" ? "بستن" : "Close"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
