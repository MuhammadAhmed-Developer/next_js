import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
            <h1 className="text-xl font-bold my-4">Register</h1>
            <form className="flex flex-col gap-3">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="passward" />
                <button className="bg-green-500 text-white px-6 py-2 font-bold">Register</button>
                <div className="bg-red-400 py-1 px-3 text-white text-sm w-fit rounded-md">Error</div>
                <Link className="text-sm text-end" href={'/'}>Already have an Account! <span className="text-green-500 underline">Login</span></Link>
            </form>
        </div>

    </div>
  )
}
