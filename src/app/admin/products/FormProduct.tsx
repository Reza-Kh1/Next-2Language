"use client"
import { Button } from '@heroui/button'
import { Input, Progress, Select, SelectItem, Textarea } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { GiCloudUpload } from 'react-icons/gi'
import { MdOutlineDataSaverOn } from 'react-icons/md'
import Cookies from 'js-cookie'
import { ProducrtType } from '@/app/type'
import { IoEye } from 'react-icons/io5'
import { FaTrash } from 'react-icons/fa6'
import UploadImage from '@/components/UploadImage/UploadImage'
type submitHandlerType = {
    submitHandler: (value: any) => void
    data?: ProducrtType
}
export default function FormProduct({ submitHandler, data }: submitHandlerType) {
    const [loading, setLoading] = useState<boolean>(false)
    const [urlFile, setUrlFile] = useState<string>(data?.download_url || "")
    const [progres, setProgres] = useState<number>(0)
    const [selectIcons, setSelectIcons] = useState<string[]>([])
    const [icons, setIcons] = useState<{ name: string, icon: string }[]>([])
    const [dataForm, setDataForm] = useState({
        fa_name: "",
        en_name: "",
        fa_description: "",
        en_description: "",
        support_time: "",
        support_type: "",
        price: "",
        download_count: "",
    })
    const [image, setImage] = useState<string>("")
    const action = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const iconsUrl = icons.filter((row) => selectIcons.includes(row.name))
        const body = {
            fa_name: dataForm.fa_name,
            en_name: dataForm.en_name,
            fa_short_description: "fa_short_description",
            en_short_description: "en_short_description",
            fa_description: dataForm.fa_description,
            en_description: dataForm.en_description,
            technologies: selectIcons,
            technologies_url: iconsUrl.map((i) => i.icon),
            picture: image,
            support_time: dataForm.support_time,
            support_type: dataForm.support_type,
            price: dataForm.price,
            download_count: dataForm.download_count,
            creator_id: "",
            creator: "",
            download_url: urlFile,
        }
        console.log(body);
        // submitHandler(body)
    }
    // apiFiles/KAJK4vGGOL68hnB6M6Nz8Q5zSEjFGmUj4Ln6MJ0c.jpg
    // https://shlabs.ir/storage/app/apiFiles/Tb4g8MoFK8ptf9YoyzpSiHkUgti6FXgHxQlLlVDl.jpg
    const uploadFilel = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoading(true);
        const token = Cookies.get('authToken')
        const newFile = event.target.files;
        if (!newFile?.length) return Promise.reject(new Error("select a file"));
        const formData = new FormData();
        for (let file of newFile) {
            formData.append("file", file);
        }
        // const { data } = await axios.post("upload-file", formData, {
        //     onUploadProgress: (event) => {
        //         if (event.lengthComputable && event.total) {
        //             const percentComplete = Math.round((event.loaded * 100) / event.total);
        //             setProgres(percentComplete)
        //         }
        //     },
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //     }
        // });
        // const url = data?.path ? process.env.NEXT_PUBLIC_URL_FILE + data.path : ""
        const url = "https://shlabs.ir/storage/app/apiFiles/Tb4g8MoFK8ptf9YoyzpSiHkUgti6FXgHxQlLlVDl.jpg"
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
        if (data) {
            setDataForm({
                download_count: data.download_count,
                en_description: data.en_description,
                fa_name: data.fa_name,
                en_name: data.en_name,
                fa_description: data.fa_description,
                price: data.price,
                support_time: data.support_time,
                support_type: data.support_type,
            })
            setImage(data.picture)
            setUrlFile(data?.download_url || "")
            console.log(data);
        }
    }
    useEffect(() => {
        syncData()
    }, [data])
    useEffect(() => {
        import("@/data/icons.json")
            .then((module) => {
                const data = module.default;
                setIcons(data)
            })
            .catch((err) => {
                console.error("Error loading JSON", err);
            });
    }, []);
    return (
        <form onSubmit={action} className='flex flex-col gap-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <Input
                    label="Name(En)"
                    type="text"
                    value={dataForm.en_name}
                    onChange={({ target }) => setDataForm({ ...dataForm, en_name: target.value })}
                    labelPlacement='outside'
                    isRequired
                    placeholder='name(En)'
                    variant="bordered"
                />
                <Input
                    label="Name(Fa)"
                    type="text"
                    value={dataForm.fa_name}
                    onChange={({ target }) => setDataForm({ ...dataForm, fa_name: target.value })}
                    labelPlacement='outside'
                    isRequired
                    placeholder='name(Fa)'
                    variant="bordered"
                />
                <Input
                    isRequired
                    label="Price"
                    type="number"
                    value={dataForm.price}
                    onChange={({ target }) => setDataForm({ ...dataForm, price: target.value })}
                    labelPlacement='outside'
                    placeholder='price'
                    variant="bordered"
                />
                <Input
                    value={dataForm.download_count}
                    onChange={({ target }) => setDataForm({ ...dataForm, download_count: target.value })}
                    label="Download Count"
                    type="number"
                    isRequired
                    labelPlacement='outside'
                    placeholder='How Much'
                    variant="bordered"
                />
                <Input
                    value={dataForm.support_time}
                    onChange={({ target }) => setDataForm({ ...dataForm, support_time: target.value })}
                    label="Support duration"
                    type="number"
                    isRequired
                    labelPlacement='outside'
                    placeholder='days...'
                    variant="bordered"
                />
                {icons.length ?
                    <Select
                        selectedKeys={selectIcons}
                        onChange={({ target }) => {
                            setSelectIcons(target.value.split(","))
                        }}
                        labelPlacement="outside"
                        variant='bordered'
                        label="Favorite Technology"
                        placeholder="Select Technology"
                        selectionMode="multiple"
                    >
                        {icons.map((row, index) => (
                            <SelectItem key={row.name} textValue={row.name}>
                                <div className='flex w-full items-center justify-between'>
                                    <span>{row.name}</span>
                                    <i className={`devicon-${row.name}-${row.icon}`}></i>
                                </div>
                            </SelectItem>
                        ))}
                    </Select>
                    : null}
                <Textarea
                    variant='bordered'
                    isRequired
                    label="Description(En)"
                    labelPlacement="outside"
                    value={dataForm.en_description}
                    onChange={({ target }) => setDataForm({ ...dataForm, en_description: target.value })}
                    placeholder="Full description of the product"
                />
                <Textarea
                    variant='bordered'
                    isRequired
                    label="Description(Fa)"
                    labelPlacement="outside"
                    value={dataForm.fa_description}
                    onChange={({ target }) => setDataForm({ ...dataForm, fa_description: target.value })}
                    placeholder="Full description of the product"
                />

                <div className='w-1/2'>
                    <span>Upload File</span>
                    {
                        urlFile ?
                            <div className='flex gap-3 items-center'>
                                <Button onPress={() => handleDownload(urlFile, dataForm.en_name)} className='bg-d-btn text-white flex justify-center gap-2' variant='bordered'>
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
                    <UploadImage height={150} width={200} setImageUrl={setImage} imageUrl={image} />
                </div>
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
