import React from 'react';
import { useRouter } from 'next/router';

export default function Index() {

    const router = useRouter()

  return (
    <div>
        <h1>Service id is '{router.query.serviceid}'</h1>
        <h1>Service Name is '{router.query.serviceName}'</h1>
    </div>
  )
}
