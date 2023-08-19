"use client"

import { useRouter } from "next/router"

export default function EditTopicForm(id, title, description) {
  const router = useRouter()
  const [newtitle, setnewTitle] = useState()
  const [newdescription, setnewDescription] = useState()

  const handleUpdated = async (e) =>{
    e.preventDefault()
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
        method:"PUT",
        headers:{
          "Content type":"application DEveloper"
        },
        body: JSON.stringify(newtitle, newdescription)
    })
    if(!res.ok){
         throw new Error("Failded to update")
    }
    router.push('/')
    } catch (error) {
      console.log(error);
    }
  }

    return (
      <form className="flex flex-col gap-3 mt-5">
          <input onChange={(e)=>setnewTitle(e.target.value)} value={newtitle} type="text" placeholder="Enter Title" className="border border-slate-500 px-3 py-2 " />
          <input  onChange={(e)=>setnewDescription(e.target.value)} value={newdescription} type="text" placeholder="Enter Description" className="border border-slate-500 px-3 py-2 " />
          <button onClick={handleUpdated} className="bg-blue-950 text-white p-3 rounded-md  w-fit">Update Topic</button>
      </form>
    )
  }
  