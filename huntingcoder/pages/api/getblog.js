import * as fs from 'fs';
// asy dalna slug
// http://localhost:3000/api/getblog?slug=learn-js
export default function handler(req, res) {
fs.readFile(`blogsData/${req.query.slug}.json`, 'utf-8',(err, data)=>{

    if(err){
    res.status(500).json({error:'some error'})
       
    }

    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
})
}
