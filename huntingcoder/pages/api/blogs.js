import * as fs from 'node:fs';
export default function handler(req, res) {
fs.readdir('blogsData',(err, data)=>{
 console.log(data)
 let allblogs =[]
 data.forEach((item)=>{
 console.log(item)
 fs.readFile(('blogsData/', +  item), (d)=>{
 allblogs= allblogs.push(d)
 } )                        
 })
 res.status(200).json(allblogs)
})
}
