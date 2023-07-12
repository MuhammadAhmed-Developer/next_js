import * as fs from 'node:fs';
export default function handler(req, res) {
fs.readFile('blogsData/learn-js.json', 'utf-8',(err, data)=>{
 console.log(req.query)
 res.status(200).json(JSON.parse(data))
})
}
