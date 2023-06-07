import React from 'react';
import Link from 'next/link';

export default function Users(){
    return (
    <>
      <h1>USERS PAGE</h1>
      
      <Link href='/'>index/home</Link><br/>
      <Link href='/services'>Services</Link>
            
    </>
    )
}