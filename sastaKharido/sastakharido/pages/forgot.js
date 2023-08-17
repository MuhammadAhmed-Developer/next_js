import Link from 'next/link'
import React from 'react'

export default function Forgot() {
  return(  <div>

<div className=" flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="/logo.png"/>
    <h2 className="mt-6  text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot Passward</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm shadow-2xl lg:p-10 md:p-4">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
    
      
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Continue</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      No Account! 
      <Link href={'/signup'} className="font-semibold text-md leading-6 text-green-600 hover:text-green-500"> Login</Link>
    </p>
  </div>
</div>
      

    </div>
  )
}
 