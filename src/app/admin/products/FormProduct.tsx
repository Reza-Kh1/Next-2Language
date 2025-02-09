"use client"
import { Button } from '@heroui/button'
import { Input, Progress, Select, SelectItem, Textarea } from '@nextui-org/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GiCloudUpload } from 'react-icons/gi'
import { MdOutlineDataSaverOn } from 'react-icons/md'
import Cookies from 'js-cookie'
import { ProducrtType } from '@/app/type'
import { IoEye } from 'react-icons/io5'
import { FaImage, FaNodeJs, FaPhp, FaPython, FaReact, FaTrash } from 'react-icons/fa6'
import toast from 'react-hot-toast'
import Image from 'next/image'
import { SiNextdotjs } from 'react-icons/si'
import UploadImage from '@/components/UploadImage/UploadImage'
type submitHandlerType = {
    submitHandler: (value: any) => void
    data?: ProducrtType
}
export default function FormProduct({ submitHandler, data }: submitHandlerType) {
    const [loading, setLoading] = useState<boolean>(false)
    const [urlFile, setUrlFile] = useState<string>(data?.download_url || "")
    const [progres, setProgres] = useState<number>(0)
    const [name, setName] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [short, setShort] = useState<string>("")
    const [count, setCount] = useState<string>("")
    const [price, setPrice] = useState<string>("")
    const [image, setImage] = useState<string>("")
    const action = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const body = {
            name,
            short_description: short,
            description: desc,
            price: price,
            download_count: count,
            creator_id: 1,
            download_url: urlFile
        }
        console.log(body);

        submitHandler(body)
    }
    // apiFiles/KAJK4vGGOL68hnB6M6Nz8Q5zSEjFGmUj4Ln6MJ0c.jpg
    // apiFiles/aVMQxCpCxp36LWBxgOwrG7l9J6gbErUk3yp2K8Xa.webp
    const uploadFilel = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoading(true);
        const token = Cookies.get('authToken')
        const newFile = event.target.files;
        if (!newFile?.length) return Promise.reject(new Error("select a file"));
        const formData = new FormData();
        for (let file of newFile) {
            formData.append("file", file);
        }
        const { data } = await axios.post("upload-file", formData, {
            onUploadProgress: (event) => {
                if (event.lengthComputable && event.total) {
                    const percentComplete = Math.round((event.loaded * 100) / event.total);
                    setProgres(percentComplete)
                }
            },
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        const url = data?.path ? process.env.NEXT_PUBLIC_URL_FILE + data.path : ""
        setLoading(false)
        setUrlFile(url)
    }
    const handleDownload = async (url: string, filename: string) => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = blobUrl;
            link.setAttribute("download", filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error("Error in download:", error);
        }
    };
    const syncData = () => {
        setName(data?.name || "")
        setDesc(data?.description || "")
        setShort(data?.short_description || "")
        setCount(data?.download_count || "")
        setPrice(data?.price || "")
        setUrlFile(data?.download_url || "")
        console.log(data);

    }
    useEffect(() => {
        if (data) {
            syncData()
        }
    }, [data])
    return (
        <form onSubmit={action} className='flex flex-col gap-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <Input
                    label="Name"
                    type="text"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    labelPlacement='outside'
                    isRequired
                    placeholder='name'
                    variant="bordered"
                />
                <Input
                    isRequired
                    label="Price"
                    type="number"
                    value={price}
                    onChange={({ target }) => setPrice(target.value)}
                    labelPlacement='outside'
                    placeholder='price'
                    variant="bordered"
                />
                {/* <Textarea
                    variant='bordered'
                    isRequired
                    value={short}
                    onChange={({ target }) => setShort(target.value)} label="Short description"
                    labelPlacement="outside"
                    placeholder="Short description of the product"
                /> */}

                <Input
                    value={count}
                    onChange={({ target }) => setCount(target.value)}
                    label="Download Count"
                    type="number"
                    isRequired
                    labelPlacement='outside'
                    placeholder='How Much'
                    variant="bordered"
                />
                <Input
                    value={count}
                    onChange={({ target }) => setCount(target.value)}
                    label="Support duration"
                    type="number"
                    isRequired
                    labelPlacement='outside'
                    placeholder='days...'
                    variant="bordered"
                />
                <div className='w-1/2'>
                    <span>Upload File</span>
                    {
                        urlFile ?
                            <div className='flex gap-3 items-center'>
                                <Button onPress={() => handleDownload(urlFile, name)} className='bg-d-btn text-white flex justify-center gap-2' variant='bordered'>
                                    Download File
                                    <IoEye />
                                </Button>
                                <Button isIconOnly onPress={() => setUrlFile("")} color='danger'>
                                    <FaTrash />
                                </Button>
                            </div>
                            :
                            <label htmlFor="upload" className={`transition-all group p-3 shadow-md border-black flex items-center justify-center rounded-md border-dashed border h-32 w-full ${!loading ? "cursor-pointer" : ""}`}>
                                <input onChange={uploadFilel} type="file" hidden id='upload' disabled={loading} />
                                {loading ?
                                    <Progress
                                        classNames={{
                                            base: "max-w-md",
                                            track: "drop-shadow-md border border-default",
                                            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                                            label: "tracking-wider font-medium text-default-600",
                                            value: "text-foreground/60",
                                        }}
                                        label="Upload File"
                                        radius="sm"
                                        showValueLabel={true}
                                        size="sm"
                                        value={progres}
                                    />
                                    :
                                    <i className='text-3xl text-b-70 '><GiCloudUpload /></i>
                                }
                            </label>
                    }
                </div>
                <div className='w-1/2'>
                    <UploadImage setImageUrl={setImage} imageUrl={image} />
                </div>
                <Textarea
                    variant='bordered'
                    isRequired
                    label="Description"
                    labelPlacement="outside"
                    value={desc}
                    onChange={({ target }) => setDesc(target.value)}
                    placeholder="Full description of the product"
                />
                <Select
                    labelPlacement="outside"
                    variant='bordered'
                    className="max-w-xs"
                    label="Favorite Technology"
                    placeholder="Select Technology"
                    selectionMode="multiple"
                >
                    <SelectItem key={"react"} textValue='react'>
                        <div className='flex w-full items-center justify-between'>
                            <span>React</span>
                            <i><FaReact /></i>
                        </div>
                    </SelectItem>
                    <SelectItem key={"Node"} textValue='Node js'>
                        <div className='flex w-full items-center justify-between'>
                            <span>Node js</span>
                            <i><FaNodeJs /></i>
                        </div>
                    </SelectItem>
                    <SelectItem key={"Next"} textValue='Next js'>
                        <div className='flex w-full items-center justify-between'>
                            <span>Next js</span>
                            <i><SiNextdotjs /></i>
                        </div>
                    </SelectItem>
                    <SelectItem key={"PHP"} textValue='PHP'>
                        <div className='flex w-full items-center justify-between'>
                            <span>PHP</span>
                            <i><FaPhp /></i>
                        </div>
                    </SelectItem>
                    <SelectItem key={"Python"} textValue='Python'>
                        <div className='flex w-full items-center justify-between'>
                            <span>Python</span>
                            <i><FaPython /></i>
                        </div>
                    </SelectItem>
                </Select>
            </div>
            <div>
                <Button type='submit' className='bg-white rounded-md shadow-md text-b-70 border border-b-70'>
                    Save Product
                    <MdOutlineDataSaverOn />
                </Button>
            </div>
        </form>
    )
}
