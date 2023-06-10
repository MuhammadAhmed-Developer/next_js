import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import {  useRouter } from 'next/router'



export default function index({users}) {

    const router = useRouter()

  return (
    <div className='m-5'>
        <h3 className='text-center mt-3'>

        Users List
        </h3>
       
         <table  className='table table-dark table-striped border'>
               <thead>
                <tr>
                    <th>
                        Sr.No
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        UserName
                    </th>
                </tr>
               </thead>
               {users.map((user,i)=>{
                  return <tbody key={i} >
                  <tr onClick={()=>{router.push(`/users/${user.id}`)}}>
                      <td>
                          {user.id}
                      </td>
                      <td>
                          {user.name}
                      </td>
                      <td>
                          {user.email}
                      </td>
                      <td>
                          {user.username}
                      </td>
                     
                  </tr>
  
                 </tbody>
               })}
               
         </table>
       
        
    </div>
  )
}

export async function getStaticProps(context){
    try {

        const responce = await axios.get('https://jsonplaceholder.typicode.com/users')

        return {
            props: {
                users : responce.data
            }
        }
        
    } catch (error) {
        console.log(error)
    }
}