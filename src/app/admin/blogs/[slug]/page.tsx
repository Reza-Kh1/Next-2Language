"use client";
import JoditForm from '@/components/Admin/JoditEditor/JoditEditor';
import UploadImage from '@/components/UploadImage/UploadImage';
import { Button } from '@heroui/button';
import { Input } from '@nextui-org/react';
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6';
import { MdClose, MdOutlineDataSaverOn } from 'react-icons/md';

export default function page() {
  const [editor, setEditor] = useState<string>("")
  const [tags, setTags] = useState<string[]>([])
  const [textTag, setTextTag] = useState<string>("")
  const [image, setImage] = useState<string>("")
  const [dataBlogs, setDataBlogs] = useState({
    name: "",
    category: "",
    time: "",
    author: "",
  })
  const createTags = () => {
    if (!textTag) return
    setTags([...tags, textTag])
    setTextTag("")
  }
  return (
    <div className='flex flex-col p-3 rounded-xl bg-white shadow-md'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-10'>
        <Input
          label="Name"
          type="text"
          value={dataBlogs.name}
          onChange={({ target }) => setDataBlogs({ ...dataBlogs, name: target.value })}
          labelPlacement='outside'
          isRequired
          placeholder='name'
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
                console.log(key);
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
      </div>
      <JoditForm editor={editor} setEditor={setEditor} />
      <div>
        <Button type='submit' className='bg-white rounded-md shadow-md text-b-70 border border-b-70'>
          Save Blog
          <MdOutlineDataSaverOn />
        </Button>
      </div>
    </div>
  )
}
