import * as fs from 'node:fs';
export default function handler(req, res) {
fs.readFile('blogsData/learn-js.json', 'utf-8',(err, data)=>{
 console.log(data)
})
  res.status(200).json({ name: 'John Doe' })
}
