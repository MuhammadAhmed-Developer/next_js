// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Product from "../../models/product"
import connectDb from "../../middleware/mongoose"
// import product from "../../models/product"

const handler = async (req, res)=> {

    if(req.method == "POST"){  
        console.log(req.body);

        for (let i = 0; i < req.body.length; i++) {
        let p = new Product({
        tittle: req.body[i].tittle ,
        slug:req.body[i].slug ,
        desc: req.body[i].desc,
        img : req.body[i].img,
        category : req.body[i].category,
        size :req.body[i].size ,
        color : req.body[i].color ,
        price : req.body[i].price,
        availableQty: req.body[i].availableQty,
        })
        await p.save()
    }
    res.status(200).json({ success: "successfully"})
    }else{
    res.status(400).json({ error: "This Method is not allowed" })

    }

  }
 
export default connectDb(handler)
  