"use client";
import { CalendarDate, DateInput, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { FaNodeJs, FaPhp, FaPlus, FaPython, FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import Cookies from 'js-cookie'
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "@heroui/button";
import { MdClose, MdOutlineDataSaverOn } from "react-icons/md";
import UploadImage from "@/components/UploadImage/UploadImage";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getSingleProject } from "@/action/admin";
import { ProjectType } from "@/app/type";
type TeamType = {
    name: string,
    position: string,
    profile: string
}
export default function Page() {
    const { slug } = useParams()
    let data: ProjectType | null = null
    if (slug !== "create-project") {
        const { data: all } = useQuery<{ data: ProjectType }>({
            queryKey: ["SibgleProject", slug],
            queryFn: () => getSingleProject(slug as string),
            staleTime: 1000 * 60 * 60 * 24,
            gcTime: 1000 * 60 * 60 * 24,
        });
        data = all?.data || null
    }
    const [startDate, setStartDate] = useState<CalendarDate | null>(null);
    const [endDate, setEndDate] = useState<CalendarDate | null>(null);
    const [skills, setSkills] = useState<string[]>([]);
    const [image, setImage] = useState<string>("")
    const [team, setTeam] = useState<TeamType[]>([])
    const [formTeam, setFormTeam] = useState<TeamType>()
    const [dataProject, setDataProject] = useState({
        name: "",
        nameFa: "",
        desc: "",
        descFa: "",
        category: "",
        time: ""
    })
    const craeteTableTeam = () => {
        if (team.length) {
            const some = team.some((row) => !row.name || !row.position || !row.profile)
            if (!some) {
                const body = {
                    name: "",
                    position: "",
                    profile: ""
                }
                setTeam([...team, body])
            } else {
                toast.error("Fill in all the fields")
            }
        } else {
            const body = {
                name: "",
                position: "",
                profile: ""
            }
            setTeam([...team, body])
        }

    }
    const action = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const token = Cookies.get('authToken')
        const body = {
            fa_title: dataProject.nameFa,
            en_title: dataProject.nameFa,
            fa_description: dataProject.descFa,
            en_description: dataProject.desc,
            picture: image,
            categories: dataProject.category,
            time_to_do: dataProject.time,
            technologies: skills,
            // technology_icons: string,
            // programmer_rules: string,
            start_date: startDate,
            end_date: endDate,
        }
        console.log(body);
        return
        if (data) {
            axios.post("", body, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(() => { }).catch((err) => {

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
            setSkills(data?.technologies.length ? data.technologies : [])
            // setFormTeam()
            setImage(data.picture || "");
        }
    }
    useEffect(() => {
        syncData()
    }, [data])
    return (
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
                <Select
                    labelPlacement="outside"
                    variant='bordered'
                    label="Favorite Technology"
                    onChange={({ target }) => {
                        setSkills(target.value.split(","))
                    }}
                    selectedKeys={skills}
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
                <div className="flex flex-col gap-5">
                    <div>
                        <Button onPress={craeteTableTeam} className="flex items-center gap-1 bg-d-btn text-white rounded-full">
                            Add Members
                            <FaPlus />
                        </Button>
                    </div>
                    {team.length ? team?.map((row, index) => (
                        <div key={index} className="flex flex-wrap md:flex-row justify-start w-full p-5 rounded-xl border border-d-50 shadow-md items-center gap-5">
                            <div className=" w-1/12">
                                <Button
                                    onPress={() => setTeam(team.filter((i, num) => num !== index))}
                                    isIconOnly
                                    className="bg-black/20 shadow-md hover:bg-black hover:text-white rounded-full p-3"
                                >
                                    <MdClose />
                                </Button>
                            </div>
                            <Input
                                label="Name"
                                type="text"
                                value={row.name}
                                onChange={({ target }) => {
                                    const filter = team.map((item, num) => {
                                        if (num === index) {
                                            item.name = target.value;
                                        }
                                        return item;
                                    });
                                    setTeam(filter);
                                }}
                                labelPlacement='outside'
                                isRequired
                                placeholder='name'
                                variant="bordered"
                                className="w-9/12 md:w-4/12"
                            />
                            <Input
                                className="w-full md:w-4/12"
                                label="Position"
                                type="text"
                                value={row.position}
                                onChange={({ target }) => {
                                    const filter = team.map((item, num) => {
                                        if (num === index) {
                                            item.position = target.value;
                                        }
                                        return item;
                                    });
                                    setTeam(filter);
                                }}
                                labelPlacement='outside'
                                isRequired
                                placeholder='Position'
                                variant="bordered"
                            />
                            <div className="w-1/2 md:w-2/12" onClick={(event) => { event.stopPropagation() }}>
                                <UploadImage
                                    height={70}
                                    width={70}
                                    setImageUrl={(value) => {
                                        setTeam(team.map((item, num) =>
                                            num === index ? { ...item, profile: value } : item
                                        ));
                                    }}
                                    imageUrl={row.profile}
                                />
                            </div>
                        </div>
                    )) : null}
                </div>
            </div>
            <div>
                <Button type='submit' className='bg-white rounded-md shadow-md text-b-70 border border-b-70'>
                    Save Projects
                    <MdOutlineDataSaverOn />
                </Button>
            </div>
        </form>
    );
}
