import EditTopicForm from "@/app/(components)/EditTopicForm";


const getTopicById = async (id) =>{
  try {
    
    const res = fetch(`http://localhost:3000/api/topics/${id}`, {cache:"no-store"})


    if(!res.ok){
      throw new error("Failed to fetch ")
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
 }

export default async function EditTopic({params}) {
  const {id} = params; 
  // console.log(id);
  const {topic} = await getTopicById(id)
  console.log(topic);
  const {title, description} = topic

    return <EditTopicForm id={id} title={title} description={description}/>
    
  }
  