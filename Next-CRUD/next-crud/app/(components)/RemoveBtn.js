"use client"

import { useRouter } from "next/navigation"
import {RiDeleteBin5Fill} from "react-icons/ri"

export default function RemoveBtn({id}) {
  
  const router = useRouter()
  

  const removeTopic = async () => {
    const confirmed = confirm("Are You Sure To Delete Topic?")
     
    if(confirmed){
      const res =  await fetch(`http://localhost:3000/api/topics?id=${id}`,{
        method: "DELETE",
      })

      if(res.ok){

        router.refresh()
      }
    }

  }

  return (
    <button onClick = {removeTopic} >
       <RiDeleteBin5Fill size={24} className="text-red-500"/>
    </button>
  )
}
