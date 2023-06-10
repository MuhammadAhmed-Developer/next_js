import axios from 'axios'
import { useRouter } from 'next/router';


export default function Home({ users }) {
  
  const router = useRouter()

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>NEXT Api</h1>
      <hr />
      {users.map((user, i) => {
        return (
            <div key={i} onClick={()=>{router.push(`/users/${user.id}`)}}>
          <h3>Name: {user.name}</h3>
          <h4>Age:  {user.age}</h4>
          <hr />
        </div>)
      })}
          </>
  )
}

export async function getStaticProps() {
  
  try {
    const response   = await axios.get('http://localhost:3000/api/users')
    return {
      props: {
        users: response.data
      }
    }
  } catch (error) {
    console.log(error)
  }
}
