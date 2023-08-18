import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { FaEdit } from 'react-icons/fa';
export default function TopicLists() {


  const getTopic = async () =>{
     try {
        const res =  await fetch("http://localhost:3000/api/topics",{cache: "no-store"})
      
     } catch (error) {
       console.log(error);
     }
  }
  
  return (
    <div className="px-5 py-3 flex justify-between border border-slate-500 my-3 gap-5 items-start align-middle">
      <div>
        <h1 className="font-bold text-2xl">Title</h1>
        <h2>Description</h2>
      </div>
      <div className="flex gap-3 py-3">
        <RemoveBtn />
        <Link href={'/editTopic/123'}>
          <FaEdit size={24}  className="text-blue-500"/>
          </Link>
      </div>
    </div>


  )
}
