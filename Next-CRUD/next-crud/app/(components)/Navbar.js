import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-slate-800 px-5 py-3 text-white text-center align-middle">
        <Link href={'/'} className="">CodeGT.</Link>
        <Link href={'/addTopic'} className="bg-white text-black p-1 rounded-sm text-sm">Add Topic</Link>
    </nav>
  )
}
