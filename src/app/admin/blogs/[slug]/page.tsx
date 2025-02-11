"use client";
import { getSingleBlog } from '@/action/admin';
import { BlogType } from '@/app/type';
import JoditForm from '@/components/Admin/JoditEditor/JoditEditor';
import UploadImage from '@/components/UploadImage/UploadImage';
import { Button } from '@heroui/button';
import { Input } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie'
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa6';
import { MdClose, MdOutlineDataSaverOn } from 'react-icons/md';
import toast from 'react-hot-toast';

export default function page() {
  const { slug } = useParams()
  let data: BlogType | null = null
  if (slug !== "create-blog") {
    const { data: all } = useQuery<{ data: BlogType }>({
      queryKey: ["SingleBlog", slug],
      queryFn: () => getSingleBlog(slug as string),
      staleTime: 1000 * 60 * 60 * 24,
      gcTime: 1000 * 60 * 60 * 24,
    });
    data = all?.data || null
  }
  const [editor, setEditor] = useState<string>("")
  const [editorFa, setEditorFa] = useState<string>("")
  const [tags, setTags] = useState<string[]>([])
  const [textTag, setTextTag] = useState<string>("")
  const [image, setImage] = useState<string>("")
  const [dataBlogs, setDataBlogs] = useState({
    name: "",
    nameFa: "",
    category: "",
    time: "",
    author: "",
  })
  const createTags = () => {
    if (!textTag) return
    setTags([...tags, textTag])
    setTextTag("")
  }
  const action = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = Cookies.get('authToken')
    const body = {
      picture: image || "",
      fa_title: dataBlogs.name || "",
      en_title: dataBlogs.name || "",
      fa_content: editor,
      en_content: editor,
      categories: dataBlogs.category,
      read_time: dataBlogs.time,
      author_id: dataBlogs.author,
      tags: tags
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
      setDataBlogs({
        name: data.en_title || "",
        nameFa: data.fa_title || "",
        category: data.categories || "",
        time: data.read_time || "",
        author: data.author_id || "",
      });
      setEditor(data.en_content || "");
      setEditorFa(data.fa_content || "");
      setTags(data.tags || []);
      setImage(data.picture || "");
    }
  }
  useEffect(() => {
    syncData()
  }, [data])
  return (
    <div className='flex flex-col p-3 rounded-xl bg-white shadow-md'>
      <form onSubmit={action} className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-10'>
        <Input
          label="Name(En)"
          type="text"
          value={dataBlogs.name}
          onChange={({ target }) => setDataBlogs({ ...dataBlogs, name: target.value })}
          labelPlacement='outside'
          isRequired
          placeholder='name(En)'
          variant="bordered"
        />
        <Input
          label="Name(Fa)"
          type="text"
          value={dataBlogs.name}
          onChange={({ target }) => setDataBlogs({ ...dataBlogs, name: target.value })}
          labelPlacement='outside'
          isRequired
          placeholder='name(Fa)'
          variant="bordered"
        />
        <Input
          label="Category"
          type="text"
          value={dataBlogs.category}
          onChange={({ target }) => setDataBlogs({ ...dataBlogs, category: target.value })}
          labelPlacement='outside'
          isRequired
          placeholder='Category'
          variant="bordered"
        />
        <Input
          label="Read Time"
          type="number"
          value={dataBlogs.time}
          onChange={({ target }) => setDataBlogs({ ...dataBlogs, time: target.value })}
          labelPlacement='outside'
          isRequired
          placeholder='in minutes'
          variant="bordered"
        />
        <div className='md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5 justify-evenly items-center'>
          <Input
            label="Tags"
            labelPlacement='outside'
            placeholder='Tags'
            variant="bordered"
            value={textTag}
            onChange={({ target }) => setTextTag(target.value)}
            onKeyDown={(key) => {
              if (key.code === "Enter") {
                createTags()
              }
            }}
            endContent={
              <i className='cursor-pointer' onClick={createTags}>
                <FaPlus />
              </i>
            }
          />
          <div className='flex flex-wrap gap-2'>
            {tags.length ? tags?.map((row, index) => (
              <span className='flex items-center gap-1 p-1 px-5 rounded-full border border-d-60' key={index}>
                <span>{row}</span>
                <i className='cursor-pointer' onClick={() => setTags(tags.filter((item) => item !== row))}>
                  <MdClose />
                </i>
              </span>
            )) : null}
          </div>
        </div>
        <div>
          <UploadImage imageUrl={image} setImageUrl={setImage} />
        </div>
      </form>
      <h1 className='block w-full border-t pt-8 mt-8 border-d-50'>English Contact</h1>
      <JoditForm editor={editor} setEditor={setEditor} />
      <h1 className='block w-full border-t pt-8 mt-8 border-d-50'>Persian Contact</h1>
      <JoditForm editor={editorFa} setEditor={setEditorFa} />
      <div>
        <Button type='submit' className='bg-white rounded-md shadow-md text-b-70 border border-b-70'>
          Save Blog
          <MdOutlineDataSaverOn />
        </Button>
      </div>
    </div>
  )
}
