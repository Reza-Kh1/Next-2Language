"use client"
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
const getData = () => {
  return axios.get("comments")
}

export default function page() {
  const query = useQueryClient();
  const { data } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getData,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
  console.log(data);

  // const { isPending, mutate: loginHandler } = useMutation({
  //   mutationFn: (form: FormType) => {
  //     const url = isLogin ? "user" : "user/login";
  //     return axios.post(url, form);
  //   },
  //   onSuccess: ({ data }) => {
  //     if (data.role === "USER") {
  //       toast.info("شما اجازه ورود ندارید!");
  //       return;
  //     }
  //     const body = {
  //       id: data.id,
  //       name: data.name,
  //       role: data.role,
  //     };
  //     localStorage.setItem("user", JSON.stringify(body));
  //     const name = `خوش آمدید ${data?.name}`;
  //     navigate("home/dashboard");
  //     toast.success(name);
  //   },
  //   onError: ({ response }: any) => {
  //     setErr((prev) => prev + 1);
  //     toast.warning(response?.data?.message);
  //   },
  // });
  return (
    <div>

    </div>
  )
}
