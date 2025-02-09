"use client";

import { CalendarDate, DateInput, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { FaImage, FaNodeJs, FaPhp, FaPlus, FaPython, FaReact, FaTrash } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import Cookies from 'js-cookie'
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "@heroui/button";
import { MdClose, MdOutlineDataSaverOn } from "react-icons/md";
import UploadImage from "@/components/UploadImage/UploadImage";
type TeamType = {
    name: string,
    position: string,
    profile: string
}
export default function Page() {
    const [startDate, setStartDate] = useState<CalendarDate | null>(null);
    const [endDate, setEndDate] = useState<CalendarDate | null>(null);
    const [skills, setSkills] = useState<string[]>([]);
    const [image, setImage] = useState<string>("")
    const [team, setTeam] = useState<TeamType[]>([])
    const [dataProject, setDataProject] = useState({
        name: "",
        desc: "",
        category: "",
        time: ""
    })
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("click");
        const token = Cookies.get('authToken')
        const body = {
            name: dataProject.name,
            category: dataProject.category,
            time: dataProject.time,
            description: dataProject.desc,
            startDate: startDate?.toString(),
            endDate: endDate?.toString(),
            image: image,
            skill: skills
        }
        console.log(body);
        return
        axios.post("", body, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(() => { }).catch((err) => {

            toast.error("Error in DataBase")
        })

    };
    const craeteTableTeam = () => {
        const body = {
            name: "",
            position: "",
            profile: ""
        }
        setTeam([...team, body])
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col p-3 rounded-xl bg-white shadow-md">
            <div className="grid grid-cols-2 gap-5">
                <Input
                    label="Name"
                    type="text"
                    value={dataProject.name}
                    onChange={({ target }) => setDataProject({ ...dataProject, name: target.value })}
                    labelPlacement='outside'
                    isRequired
                    placeholder='name'
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
                    label="Description"
                    labelPlacement="outside"
                    value={dataProject.desc}
                    onChange={({ target }) => setDataProject({ ...dataProject, desc: target.value })}
                    placeholder="Full description of the Projects"
                />
                <Textarea
                    variant='bordered'
                    isRequired
                    label="Description"
                    labelPlacement="outside"
                    value={dataProject.desc}
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
                        <div key={index} className="flex w-full items-center justify-center gap-5">
                            <div>
                                <Button
                                    onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                        event.stopPropagation(); // جلوگیری از propagation
                                        setTeam(team.filter((row, num) => num !== index));
                                    }}
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
                                className="w-4/12"
                            />
                            <Input
                                className="w-4/12"
                                label="Category"
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
                                placeholder='Category'
                                variant="bordered"
                            />
                            <div className="w-3/12" onClick={(event) => { event.stopPropagation() }}>
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
                    Save Product
                    <MdOutlineDataSaverOn />
                </Button>
            </div>
        </form>
    );
}
