
export default function AddTopic() {
  return (
    <form className="flex flex-col gap-3 mt-5">
        <input type="text" placeholder="Enter Title" className="border border-slate-500 px-3 py-2 " />
        <input type="text" placeholder="Enter Description" className="border border-slate-500 px-3 py-2 " />
        <button className="bg-blue-950 text-white p-3 rounded-md  w-fit">Add Topic</button>
    </form>
  )
}
