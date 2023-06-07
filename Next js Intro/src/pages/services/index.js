import Link from 'next/link';
import React from 'react';

export default function Services(){
    return (
    <>
      <h1 className = 'bg-warning'>SERVICES PAGE</h1>
      <Link href='/'>Home</Link><br/>
      <Link href='/users'>Users</Link>
    </>
    )
}