import * as fs from 'node:fs';
export default function handler(req, res) {
fs.readdir('blogsData',(err, data)=>{
 console.log(data)
 res.status(200).json(data)
})
}
