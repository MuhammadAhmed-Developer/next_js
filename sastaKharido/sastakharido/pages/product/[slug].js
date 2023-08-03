import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  const {slug} = router.query
  return <p>This is my slug: {slug}</p>
}