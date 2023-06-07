import React from 'react';
import { useRouter } from 'next/router';

export default function Index() {


   const router = useRouter()

  return (
<div>
    <h1>Users Details</h1>
    <h4>User id is '{router.query.id}'</h4>
    <h6>User name is "{router.query.userName}"</h6>
    
</div>
  )
}
