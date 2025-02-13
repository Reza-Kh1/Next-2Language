"use client"
import { getComments } from '@/action/admin';
import { CommentType, OptionsGetAllLinks, OptionsGetAllMeta } from '@/app/type';
import PaginationAdmin from '@/components/Admin/PaginationAdmin/PaginationAdmin';
import SearchAdmin from '@/components/Admin/SearchAdmin/SearchAdmin';
import { Button } from '@heroui/button';
import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Textarea, useDisclosure } from '@nextui-org/react';
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { FaPen, FaSearch } from 'react-icons/fa';
import { FaCheck, FaTrash } from 'react-icons/fa6';
import { MdClose, MdOutlineDataSaverOn } from 'react-icons/md';

export default function page() {
  const queryClient = useQueryClient();
  const [detailComment, setDetailComment] = useState({ id: 0, value: "" })
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState<any>();
  const { data } = useInfiniteQuery<{
    data: CommentType[],
    links: OptionsGetAllLinks,
    meta: OptionsGetAllMeta
  }>({
    queryKey: ["GetComments", searchQuery],
    queryFn: () => getComments(searchQuery),
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage) => lastPage.links.next || undefined,
    initialPageParam: "",
  });
  const { mutate: deleteComment } = useMutation({
    mutationFn: ({ id }: any) => {
      return axios.delete(`comments/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GetComments"] });
    },
    onError: ({ response }: any) => {
      console.log(response);
      toast.error(response?.data?.message);
    },
  });
  const { mutate: acceptComment } = useMutation({
    mutationFn: ({ value, id }: any) => {
      return axios.patch(`comments/${id}`, {
        comment: value,
        status: "Approved"
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GetComments"] });
    },
    onError: ({ response }: any) => {
      console.log(response);
      toast.error(response?.data?.message);
    },
  });
  const { mutate: updateHandler } = useMutation({
    mutationFn: () => {
      return axios.patch(`comments/${detailComment.id}`, {
        comment: detailComment.value,
        status: "Approved"
      });
    },
    onSuccess: () => {
      setDetailComment({ value: "", id: 0 })
      queryClient.invalidateQueries({ queryKey: ["GetComments"] });
      toast.success("Comment Was Updated");
      onClose()
    },
    onError: ({ response }: any) => {
      console.log(response);
      onClose()
      toast.error(response?.data?.message);
    },
  });
  return (
    <div className='flex flex-col gap-5'>
      <SearchAdmin name={["status", "comment"]} setSearch={setSearchQuery} />
      {data?.pages[0].data.length ?
        <>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>#</TableColumn>
              <TableColumn>Comment</TableColumn>
              <TableColumn>status</TableColumn>
              <TableColumn>Score</TableColumn>
              <TableColumn>Created At</TableColumn>
              <TableColumn>EDit</TableColumn>
            </TableHeader>
            <TableBody>
              {data?.pages[0].data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <p className='cutline cutline-2'>{row.comment}</p>
                  </TableCell>
                  <TableCell>
                    <span className={`${row.status === "pending" ? "bg-blue-200" : row.status === "Approved" ? "bg-green-200" : "bg-red-200"} p-2  rounded-md shadow-md text-gray-600 w-full text-center block`}>
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell>{row.rank}</TableCell>
                  <TableCell>{new Date(row.updated_at).toLocaleDateString("en")}</TableCell>
                  <TableCell className='flex gap-5'>
                    <Button onPress={() => acceptComment({ value: row.comment, id: row.id })} variant='bordered' className='bg-d-btn rounded-md text-white'>
                      <FaCheck />
                      Accept
                    </Button>
                    <Button onPress={() => { setDetailComment({ id: row.id, value: row.comment }), onOpen() }} variant='bordered' className='rounded-md'>
                      <FaPen />
                      Edit
                    </Button>
                    <Button onPress={() => deleteComment({ id: row.id })} variant='bordered' className='rounded-md'>
                      <FaTrash />
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <PaginationAdmin search={searchQuery} setSearch={setSearchQuery} meta={data?.pages[0].meta} />
        </>
        : "No data available"}
      <Modal size='xl' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <Textarea
                  onChange={({ target }) => setDetailComment({ ...detailComment, value: target.value })}
                  variant='bordered'
                  isRequired
                  className='w-full'
                  value={detailComment.value}
                  label="Comment"
                  labelPlacement="outside"
                  placeholder="Text Comment"
                />
              </ModalBody>
              <ModalFooter className='flex justify-between items-center'>
                <Button className='flex justify-between items-center gap-5 rounded-md' variant="bordered" onPress={onClose}>
                  Close
                  <MdClose size={25} />
                </Button>
                <Button className='flex justify-between items-center gap-5 border rounded-md bg-d-btn text-white' onPress={() => updateHandler()}>
                  Update
                  <MdOutlineDataSaverOn size={25} />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
