"use client";
import { CalendarDate, DateInput, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Textarea, useDisclosure } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { FaNodeJs, FaPhp, FaPlus, FaPython, FaReact, FaUserPlus } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import Cookies from 'js-cookie'
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "@heroui/button";
import { MdClose, MdOutlineDataSaverOn } from "react-icons/md";
import UploadImage from "@/components/UploadImage/UploadImage";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers, getSingleProject } from "@/action/admin";
import { OptionsGetAllLinks, OptionsGetAllMeta, ProjectType, UserType } from "@/app/type";

type ProjectTeamType = Record<number, string>
export default function Page() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { data: dataAlluser } = useQuery<{
        data: {
            data: UserType[],
            links: OptionsGetAllLinks,
            meta: OptionsGetAllMeta
        }
    }>({
        queryKey: ["GetAllUsers"],
        queryFn: getAllUsers,
        staleTime: 1000 * 60 * 60 * 24,
        gcTime: 1000 * 60 * 60 * 24,
    });
    // const { slug } = useParams()
    // let data: ProjectType | null = null
    // if (slug !== "create-project") {
    //     const { data: all } = useQuery<{ data: ProjectType }>({
    //         queryKey: ["SingleProject", slug],
    //         queryFn: () => getSingleProject(slug as string),
    //         staleTime: 1000 * 60 * 60 * 24,
    //         gcTime: 1000 * 60 * 60 * 24,
    //     });
    //     data = all?.data || null
    // }
    const [textTeam, setTextTeam] = useState({ id: 0, value: "", name: "" })
    const [icons, setIcons] = useState<{ name: string, icon: string }[]>([])
    const [startDate, setStartDate] = useState<CalendarDate | null>(null);
    const [endDate, setEndDate] = useState<CalendarDate | null>(null);
    const [image, setImage] = useState<string>("")
    const [selectIcons, setSelectIcons] = useState<string[]>([])
    const [projectTeam, setProjectTeam] = useState<{ id: number, value: string, name: string }[]>([])
    const [dataProject, setDataProject] = useState({
        name: "",
        nameFa: "",
        desc: "",
        descFa: "",
        category: "",
        time: ""
    })
    const addUserTeam = () => {
        setProjectTeam([...projectTeam, textTeam])
        setTextTeam({ id: 0, name: "", value: "" })
        onClose()
    }
    const action = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const iconsArry = icons.filter((row) => selectIcons.includes(row.name))
        const localData = localStorage.getItem("shlabs")
        if (!localData) return
        const body = {
            fa_title: dataProject.nameFa,
            en_title: dataProject.nameFa,
            fa_description: dataProject.descFa,
            en_description: dataProject.desc,
            picture: image,
            categories: dataProject.category,
            time_to_do: dataProject.time,
            technologies: JSON.stringify(iconsArry),
            technology_icons: "test",
            // programmer_rules: string,
            start_date: startDate,
            end_date: endDate,
        }
        console.log(body);
        return
        if (data) {
            axios.post("", body).then(() => { }).catch((err) => {

                toast.error("Error in DataBase")
            })
        } else {
            axios.post("", body, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(() => { }).catch((err) => {

                toast.error("Error in DataBase")
            })
        }
    }
    const syncData = () => {
        if (data) {
            setDataProject({
                category: data.categories,
                desc: data.en_description,
                descFa: data.fa_description,
                name: data.en_title,
                nameFa: data.fa_title,
                time: data.time_to_do
            })
            setEndDate(data.end_date)
            setStartDate(data.start_date)
            const iconBox = JSON.parse(data.technologies)
            if (iconBox && iconBox?.length) {
                setSelectIcons(iconBox.map((row: any) => row.name))
            }
            // setFormTeam()
            setImage(data.picture || "");
        }
    }
    // useEffect(() => {
    //     syncData()
    // }, [data])
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
        <>
            <form onSubmit={action} className="flex flex-col p-3 rounded-xl bg-white shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                        label="Name(En)"
                        type="text"
                        value={dataProject.name}
                        onChange={({ target }) => setDataProject({ ...dataProject, name: target.value })}
                        labelPlacement='outside'
                        isRequired
                        placeholder='name(En)'
                        variant="bordered"
                    />
                    <Input
                        label="Name(Fa)"
                        type="text"
                        value={dataProject.nameFa}
                        onChange={({ target }) => setDataProject({ ...dataProject, name: target.value })}
                        labelPlacement='outside'
                        isRequired
                        placeholder='name(Fa)'
                        variant="bordered"
                    />
                    <Input
                        label="Category"
                        type="text"
                        value={dataProject.category}
                        onChange={({ target }) => setDataProject({ ...dataProject, category: target.value })}
                        labelPlacement='outside'
                        isRequired
                        placeholder='Category'
                        variant="bordered"
                    />
                    <Input
                        label="Time Taken"
                        type="text"
                        value={dataProject.time}
                        onChange={({ target }) => setDataProject({ ...dataProject, time: target.value })}
                        labelPlacement='outside'
                        isRequired
                        placeholder='Based on the day'
                        variant="bordered"
                    />
                    <DateInput
                        isRequired
                        value={endDate}
                        onChange={setEndDate}
                        variant="bordered"
                        labelPlacement="outside"
                        label="Completed Date"
                    />
                    <DateInput
                        isRequired
                        value={startDate}
                        onChange={setStartDate}
                        variant="bordered"
                        labelPlacement="outside"
                        label="Start date"
                    />
                    {icons.length ?
                        <Select
                            selectedKeys={selectIcons}
                            onChange={({ target }) => {
                                setSelectIcons(target.value.split(","))
                            }}
                            labelPlacement="outside"
                            variant='bordered'
                            className='md:col-span-2'
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
                        value={dataProject.desc}
                        onChange={({ target }) => setDataProject({ ...dataProject, desc: target.value })}
                        placeholder="Full description of the Projects"
                    />
                    <Textarea
                        variant='bordered'
                        isRequired
                        label="Description(Fa)"
                        labelPlacement="outside"
                        value={dataProject.descFa}
                        onChange={({ target }) => setDataProject({ ...dataProject, desc: target.value })}
                        placeholder="Full description of the Projects"
                    />
                </div>
                <div className='w-full my-4' onClick={(event) => { event.stopPropagation() }}>
                    <UploadImage height={150} width={300} setImageUrl={setImage} imageUrl={image} />
                </div>
                <div className="my-4">
                    <span>Team Members</span>
                    <div className="flex flex-col gap-4 my-4">
                        {projectTeam.map((row, index) => (
                            <div key={index} className="p-3 shadow-md rounded-md text-white justify-between bg-slate-400 items-center flex gap-5">
                                <span>
                                    {index + 1}
                                </span>
                                <span>
                                    {row.name}
                                </span>
                                <span>
                                    {row.value}
                                </span>
                                <Button isIconOnly onPress={() => setProjectTeam(projectTeam.filter((item) => item.id !== row.id))} radius="full">
                                    <MdClose />
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-5">
                        {dataAlluser?.data.data.length ?
                            <Table
                                selectionMode="none"
                                aria-label="Example static collection table"
                                selectedKeys={["5"]}
                            >
                                <TableHeader>
                                    <TableColumn>NAME</TableColumn>
                                    <TableColumn>ROLE</TableColumn>
                                    <TableColumn>Created At</TableColumn>
                                    <TableColumn>Button</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    {dataAlluser?.data.data.map((row) => (
                                        <TableRow key={row.id} className={projectTeam.some((item) => item.id === row.id) ? "bg-slate-300 shadow-md" : ""}>
                                            < TableCell > {row.username}</TableCell>
                                            <TableCell>{row.user_type}</TableCell>
                                            <TableCell>{new Date(row.created_at).toLocaleDateString("en")}</TableCell>
                                            <TableCell>
                                                {projectTeam.some((item) => item.id === row.id) ?
                                                    <Button type="button" disabled className='bg-d-btn/60 rounded-md shadow-md text-white'>
                                                        Add User
                                                        <FaUserPlus />
                                                    </Button>
                                                    :
                                                    <Button onPress={() => { setTextTeam({ ...textTeam, id: row.id, name: row.username }), onOpen() }} type="button" className='bg-d-btn rounded-md shadow-md text-white'>
                                                        Add User
                                                        <FaUserPlus />
                                                    </Button>
                                                }
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            : null}
                    </div>
                </div >
                <div>
                    <Button type='submit' className='bg-white rounded-md shadow-md text-b-70 border border-b-70'>
                        Save Projects
                        <MdOutlineDataSaverOn />
                    </Button>
                </div>
            </form >
            <Modal size='lg' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Modal Add User</ModalHeader>
                    <ModalBody>
                        <Input
                            label="job position"
                            type="text"
                            value={textTeam.value}
                            onChange={({ target }) => setTextTeam({ ...textTeam, value: target.value })}
                            labelPlacement='outside'
                            isRequired
                            placeholder='job position'
                            variant="bordered"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button onPress={addUserTeam} type="button" className='bg-d-btn rounded-md shadow-md text-white'>
                            Add User
                            <FaUserPlus />
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
