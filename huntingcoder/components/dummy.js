import React from 'react'

export default function Dummy() {
  return (
    <>
    <style jsx global>
        {`
         .dummy{
            background:yellow
         }
        `}
    </style>
    <div className='dummy'>dummy</div>
    </>
  )
}
