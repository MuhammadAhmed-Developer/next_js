import axios from 'axios'
import React from 'react'

export default function index({user}) {
  return (
    <div>
        <h1>{user.name}</h1>
    </div>
  )
}

export async function getServerSideProps(context){

    try {
        const response  = await axios.get(`http://localhost:3000/users/${context.query.id}`)
        return{
            props:{
                user : response.data
            }
        }
    } catch (error) {
        console.log(error)
    }
}