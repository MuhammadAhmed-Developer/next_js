export default (req, res)=>{


    const users = [
        {name:'Ahmed',age: 19, id:1},
        {name:'Karna',age: 21, id:2},
        {name:'rashid',age: 25, id:3},

] 

    if(req.method === 'GET'){
        res.send(users)
    }
    if(req.method==='POST'){
        // res.send('This is Post Request')

        const {name, age }= req.body

        if(age >= 18){
            res.send('Major')
        }else{
            res.send('Minor')
        }
    }
}