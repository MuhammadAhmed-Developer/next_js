import React from 'react'

export default function UserInfo() {
  return (
    <div className="grid place-items-center h-screen">
    <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Info</h1>
        <div>
            Name: <span>John</span>
        </div>
        <div>
            Email: <span>John@gamil.com</span>
        </div>
         <button className='bg-red-500 py-2 px-4 text-white mt-3 rounded-md'>Logout</button>
    </div>

</div>
  )
}
