import nc from 'next-connect'


const handler = nc().get((req, res)=>{
     res.send('Players Get Request');
}).post((req, res )=>{
    const {age} = req.body
    if(age > 18){
      res.send('Player Selected')
    }else{
      res.send('Player not Selected')
    }
})

export default handler