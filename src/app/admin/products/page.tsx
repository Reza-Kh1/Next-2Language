"use client"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { PiArrowsCounterClockwiseLight } from "react-icons/pi";
import axios from 'axios';
import React, { useState } from 'react'
const getData = () => {
  return axios.get("transactions")
}
import Cookies from "js-cookie"
import toast from 'react-hot-toast';
import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Textarea, useDisclosure } from '@nextui-org/react';
import { Button } from '@heroui/button';
import { MdOutlineDataSaverOn } from 'react-icons/md';
import { FaAngleDown, FaAngleUp, FaDollarSign } from 'react-icons/fa6';
import ImageCustom from '@/components/ImageCustom/ImageCustom';
export default function page() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [create, setCreate] = useState<boolean>(false)
  const [showProduct, seShowProduct] = useState<number>(0)
  const query = useQueryClient();
  const { data } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getData,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
  console.log(data);

  const { mutate } = useMutation({
    mutationFn: (form: FormData) => {
      const token = Cookies.get('authToken')
      const body = {
        name: "Product Name",
        short_description: "Short description of the product",
        description: "Full description of the product",
        price: 100,
        download_count: 10,
        creator_id: 1,
        download_url: "http://example.com/download-product"
      }
      return axios.post("products", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
    },
    onSuccess: ({ data }) => {
      toast.success("its good");
    },
    onError: ({ response }: any) => {
      toast(response?.data?.message);
    },
  });

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-5 p-3 rounded-xl bg-white shadow-md'>
        <div className='flex justify-between items-center'>
          <span>Create User</span>
          <Button onPress={() => setCreate(prev => !prev)} variant='bordered' className='bg-d-btn rounded-md shadow-md text-white'>
            {create ?
              <>
                Show Less
                <FaAngleDown />
              </>
              :
              <>
                Show More
                <FaAngleUp />
              </>
            }
          </Button>
        </div>
        {create && (
          <form action={mutate} className='flex flex-col gap-2'>
            <div className='grid grid-cols-2 gap-3'>
              <Input
                name='name'
                label="Name"
                type="text"
                labelPlacement='outside'
                isRequired
                placeholder='name'
                variant="bordered"
              />
              <Input
                name='price'
                isRequired
                label="Price"
                type="number"
                labelPlacement='outside'
                placeholder='price'
                variant="bordered"
              />
              <Textarea
                variant='bordered'
                isRequired
                label="Short description"
                labelPlacement="outside"
                name='short_description'
                placeholder="Short description of the product"
              />
              <Textarea
                variant='bordered'
                isRequired
                label="Description"
                labelPlacement="outside"
                name='description'
                placeholder="Full description of the product"
              />

              <Input
                name='download_count'
                label="Download Count"
                type="number"
                isRequired
                labelPlacement='outside'
                placeholder='How Much'
                variant="bordered"
              />
              <Input
                name='download_url'
                label="Download Url"
                isRequired
                type="text"
                labelPlacement='outside'
                placeholder='Download Url'
                variant="bordered"
              />
            </div>
            <div>
              <Button type='submit' className='bg-white rounded-md shadow-md text-b-70 border border-b-70'>
                Create Product
                <MdOutlineDataSaverOn />
              </Button>
            </div>
          </form>
        )}
      </div>
      <div className='grid grid-cols-3 gap-5 p-3 rounded-xl cursor-pointer bg-white shadow-md' onClick={() => { onOpen(), seShowProduct(1) }}>
        <div className='border rounded-xl shadow-md p-4 flex flex-col gap-2'>
          <ImageCustom src={"/service1.png"} alt={"image"} className='w-full' height={180} width={200} />
          <span className='text-2xl font-semibold text-b-70'>
            product
          </span>
          <div className='flex flex-col gap-2'>
            <span className='flex items-center gap-2'> Price :<FaDollarSign />12$</span>
            <span className='flex items-center gap-2'>Download Count :<PiArrowsCounterClockwiseLight />27</span>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum error mollitia quasi nam accusamus repudiandae!</p>
        </div>
      </div>
      <div className='bg-white p-3 shadow-md rounded-xl flex items-center justify-center'>
        <Pagination classNames={{ cursor: "bg-o-60" }} onChange={(value) => console.log(value)
        } initialPage={3} boundaries={1} total={20} siblings={2} />
      </div>
      <Modal isOpen={isOpen} size={"full"} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                  adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
