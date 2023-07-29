import * as fs from 'fs'
export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      // console.log(req.body)
      let data = await fs.promises.readdir('contactdata')
      // console.log(data)
       fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body))
       
      res.status(200).json(req)

    } else {
      // Handle any other HTTP method
    //   get reqest
      res.status(200).json(['Contact US'])
    //   name, email,desc,phone
    }
  }