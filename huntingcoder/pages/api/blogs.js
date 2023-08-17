import { log } from 'node:console';
import * as fs from 'node:fs';


export default async function handler(req, res) {
  console.log(req.query.count); // used for infinite scroll bar this line 
  let data = await  fs.promises.readdir('blogsData')
  data = data.slice(0, parseInt(req.query.count)) // used for infinite scroll bar this line
  let myfile;
 let allblogs =[]

    for (let index = 0; index < 5; index++) {
      const item = data[index];
      // console.log(item)
      myfile =  await fs.promises.readFile(('blogsData/' +  item), "utf-8" )
      // console.log(myfile)  
      // Parse object ma convert karta hhy 
       allblogs.push(JSON.parse(myfile))

  }
 res.status(200).json(allblogs)

// fs.promises.readdir('blogsData',(err, data)=>{
//  console.log(data)
//  let allblogs =[]
//  data.forEach((item)=>{
//  console.log(item)
//  fs.readFile(('blogsData/' +  item), (d)=>{
//  allblogs= allblogs.push(d)
//  })                        
//  })
// })
//  res.status(200).json(allblogs)
}
