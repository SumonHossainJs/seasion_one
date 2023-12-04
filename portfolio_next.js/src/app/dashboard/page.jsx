'use client'
import React from 'react'
import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then(res => res.json())

const DashBoard = () => {
const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

console.log(data);
  return (
    <div>DashBoard</div>
  )
}

export default DashBoard