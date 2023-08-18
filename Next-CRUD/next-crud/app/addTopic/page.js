"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

 
export default function AddTopic() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const router = useRouter()

  const handleSubmit = async (e) =>{
     e.preventDefault()
     if(!title || !description){
      alert("Title and Description are requried")
      return
     }

     try {

    const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers:{
          "Content-type": "application/json"
        },
        body:JSON.stringify({title, description})
      })
        if(res.ok){
          router.push('/')
        }else{
          throw new Error('Failed To create a Topic')
        }
     } catch (error) {
       console.log(error);
     }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5">
        <input  onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Enter Title" className="border border-slate-500 px-3 py-2 " />
        <input  onChange={(e)=>setDescription(e.target.value)} value={description} type="text" placeholder="Enter Description" className="border border-slate-500 px-3 py-2 " />
        <button type="submit" className="bg-blue-950 text-white p-3 rounded-md  w-fit">Add Topic</button>
    </form>
  )
}
