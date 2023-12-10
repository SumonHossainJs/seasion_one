'use client'
import React, { useReducer } from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";





const DashBoard = () => {
  console.log(useRouter)
  const router = useRouter()
  console.log(router)

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