"use client"
import { Button } from '@heroui/button'
import { Modal, ModalBody, ModalContent, ModalHeader, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from '@nextui-org/react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaAngleDown, FaAngleUp, FaPen } from 'react-icons/fa6'
import Cookies from "js-cookie"
import FormUsers from './FormUsers'
const getData = () => {
  const token = Cookies.get('authToken')
  return axios.get("getusers", {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}
export default function page() {
  const [create, setCreate] = useState<boolean>(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const query = useQueryClient();
  // const { data } = useQuery({
  //   queryKey: ["GetAllUsers"],
  //   queryFn: getData,
  //   staleTime: 1000 * 60 * 60 * 24,
  //   gcTime: 1000 * 60 * 60 * 24,
  // });
  const { mutate: updateUser } = useMutation({
    mutationFn: (body) => {
      const token = Cookies.get('authToken')
      return axios.post("updateUser", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
    },
    onSuccess: ({ data }) => {
      toast.success("User was Updated")
      query.invalidateQueries({ queryKey: 'getUsers' });
    },
    onError: ({ response }: any) => {
      console.log(response);

      toast.error(response?.data?.message);
    },
  });
  const { mutate: createUser } = useMutation({
    mutationFn: (body) => {
      const token = Cookies.get('authToken')
      return axios.post("login", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
    },
    onSuccess: ({ data }) => {
      query.invalidateQueries({ queryKey: 'getUsers' });
      toast("User was created")
    },
    onError: ({ response }: any) => {
      toast.error(response?.data?.message);
    },
  });
  const openModal = (id: number) => {
    onOpen()
    // axios.get(`users?id[eq]=${2}`).then(({ data }) => {
    //   console.log(data);
    // }).catch((err) => {
    //   console.log(err);
    // })
  }
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
          <FormUsers onSubmit={(value) => createUser(value)} />
        )}
      </div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>#</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>Created At</TableColumn>
          <TableColumn>EDit</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>1</TableCell>
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>2024/07/25</TableCell>
            <TableCell>
              <Button onPress={() => openModal(1)} variant='bordered' className='bg-d-btn rounded-md text-white'>
                <FaPen />
                Edit
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className='bg-white p-3 shadow-md rounded-xl flex items-center justify-center'>
        <Pagination classNames={{ cursor: "bg-o-60" }} onChange={(value) => console.log(value)
        } initialPage={3} boundaries={1} total={20} />
      </div>
      <Modal size='lg' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Modal Update</ModalHeader>
          <ModalBody>
            <FormUsers isUpdate onSubmit={(value) => updateUser(value)} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div >
  )
}
