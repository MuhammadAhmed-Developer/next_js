import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { FaEdit } from 'react-icons/fa';

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", { cache: "no-store" })

    if (!res.ok) {
      throw new Error("Failed To Fetch topics")
    }
    
    return res.json()
  }
  catch (error) {
    console.log(error);
  }
}

export default async function TopicLists(props) {

  const { topics } = await getTopics()

  return (
    <>
      {topics.map((t) => (
        <div className="px-5 py-3 flex justify-between border border-slate-500 my-3 gap-5 items-start align-middle">
          <div>
            <h1 className="font-bold text-2xl">{t.title}</h1>
            <h2>{t.description}</h2>
          </div>
          <div className="flex gap-3 py-3">
            <RemoveBtn  id={t._id } />
            <Link href={`/editTopic/${t._id}`}>
              <FaEdit size={24} className="text-blue-500" />
            </Link>
          </div>
        </div>
      ))}
    </>


  )
}
