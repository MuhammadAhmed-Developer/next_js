import * as fs from 'fs';
export default async function handler(req, res) {
    
  let data = await  fs.promises.readdir('blogsData')
  let myfile;
 let allblogs =[]

    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      console.log(item)
      myfile =  await fs.promises.readFile(('blogsData/' +  item), "utf-8" )
      // console.log(myfile)  
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
