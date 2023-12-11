'use client'
import React, { useReducer } from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from 'swr';
import Image from 'next/image';





const DashBoard = () => {
  const router = useRouter()
  console.log(router)


  const fetcher = (...args) => fetch(...args).then((res)=> res.json());


  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts/username=${session?.data?.user.name}`, fetcher
  )

const session = useSession();

if(session.status === "loading"){
  return <p>Loading...</p>
}

if(session.status === "unauthenticated"){
  router?.push("/dashboard/login");
}

  return (
    <div>DashBoard</div>
  )
}

export default DashBoard