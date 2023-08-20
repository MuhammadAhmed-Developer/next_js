import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
            <h1 className="text-xl font-bold my-4">Login</h1>
            <form className="flex flex-col gap-3">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="passward" />
                <button className="bg-green-500 text-white px-6 py-2 font-bold">Login</button>
                <div className="bg-red-400 py-1 px-3 text-white text-sm w-fit rounded-md">Error</div>
                <Link className="text-sm text-end" href={'/register'}>Dont have an Account! <span className="text-green-500 underline">Register</span></Link>
            </form>
        </div>

    </div>
  )
}
