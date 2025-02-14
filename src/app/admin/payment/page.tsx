"use client"
import { getAllTransaction } from '@/action/admin';
import { OptionsGetAllLinks, OptionsGetAllMeta, ProducrtType, TransactionType } from '@/app/type';
import PaginationAdmin from '@/components/Admin/PaginationAdmin/PaginationAdmin';
import SearchAdmin from '@/components/Admin/SearchAdmin/SearchAdmin';
import DeleteModal from '@/components/DeleteModal/DeleteModal';
import { Button } from '@heroui/button';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa6';
const getData = () => {
  return axios.get("products")
}
export default function page() {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState<any>();
  const { data } = useInfiniteQuery<{
    data: TransactionType[],
    links: OptionsGetAllLinks,
    meta: OptionsGetAllMeta
  }>({
    queryKey: ["GetAllBlogs", searchQuery],
    queryFn: () => getAllTransaction(searchQuery),
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage) => lastPage.links.next || undefined,
    initialPageParam: "",
  });
  const { mutate: deleteTransaction } = useMutation({
    mutationFn: (id: number) => {
      return axios.delete(`transactions/${id}`);
    },
    onSuccess: () => {
      toast.success("transaction was Deleted");
      queryClient.invalidateQueries({ queryKey: ["GetAllBlogs"] });
    },
    onError: ({ response }: any) => {
      console.log(response);
      toast.error(response?.data?.message);
    },
  });

  return (
    <div className='flex flex-col gap-5'>
      <SearchAdmin name={["en_name", "en_description"]} setSearch={setSearchQuery} />
      {data?.pages[0].data.length ? <>
        <Table aria-label="Transaction">
          <TableHeader >
            <TableColumn>Id</TableColumn>
            <TableColumn>Product</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Ref Code</TableColumn>
            <TableColumn>Created</TableColumn>
            <TableColumn>Edit</TableColumn>
          </TableHeader>
          <TableBody>
            {data?.pages[0].data.map(((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <Link className='hover:underline' href={`/admin/products/${row.product.id}`}>
                    {row.product.en_name}
                  </Link>
                </TableCell>
                <TableCell>
                  <span className={`p-3 shadow-md rounded-md ${row.status === "pending" ? "bg-blue-200" : "bg-green-200"}`}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell>{row.ref_code}</TableCell>
                <TableCell>{new Date().toLocaleDateString("en")}</TableCell>
                <TableCell className='flex gap-3 items-center'>
                  <DeleteModal id={row.id} onSubmit={(id) => deleteTransaction(id)} />
                </TableCell>
              </TableRow>
            )))}
          </TableBody>
        </Table>
        <PaginationAdmin search={searchQuery} setSearch={setSearchQuery} meta={data.pages[0].meta} />
      </> :
        "No data available."
      }
    </div>
  )
}
