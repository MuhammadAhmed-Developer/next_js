import axios from 'axios'
import React from 'react'

export default function index({user}) {
  return (
    <div className='text-center'>
          <h2>{user.name} Data</h2>
          <hr />
          <p>Name: <b>{user.name}</b></p>
          <p>Email: <b>{user.email}</b></p>
          <p>UserName: <b>{user.username}</b></p>
          <p>Phone: <b>{user.phone}</b></p>
          <p>Web: <b>{user.website}</b></p>
          <p>City: <b>{user.address.city}</b></p>
    </div>
  )
}

export async function getServerSideProps(context){

    try {

        const responce = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)
        
        return {
            props:{
                user : responce.data
            }
        }

    } catch (error) {
         console.log(error)
    }

}