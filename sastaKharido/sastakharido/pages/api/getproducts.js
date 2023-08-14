// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Product from "../../models/product"
import connectDb from "../../middleware/mongooes"
// import product from "../../models/product"

const handler = async (req, res)=> {
    let products = await Product.find()
    res.status(200).json({ products })
  }
 
export default connectDb(handler)
  