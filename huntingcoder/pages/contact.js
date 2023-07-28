import React, { useState } from 'react'
import styles from '../styles/contact.module.css'
export default function Contact() {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(name, phone, email, desc)

    const data = {name, email, phone, desc}

    fetch('http://localhost:3000/api/postcontact/', {
      method: 'post',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
     .then(response => response.text())
     .then(data => {
      console.log('Success', data)
      alert('Thanks for contacting us')
      setdesc('')
      setname('')
      setemail('')
      setphone('')
       
     })
     .catch((err)=>{
      console.log(err);
     })
  }
  const handleChange = (e) => {
    if(e.target.name == 'name'){
      setname(e.target.value)
    }
   else if(e.target.name == 'email'){
      setemail(e.target.value)
    }
   else if(e.target.name == 'phone'){
      setphone(e.target.value)
    }
   else if(e.target.name == 'desc'){
      setdesc(e.target.value)
    }else{
      console.log('Hii')
    }
  }

  return (
    <div className={styles.container}>
      <h1 >Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb}>
          <label htmlFor="name" className="form-label">Enter Your Name </label>
          <input type="text" onChange={handleChange} value={name} className="form-control" id="name" name='name' />

        </div>
        <div className={styles.mb}>
          <label htmlFor="email" className="form-label"> Enter Email </label>
          <input type="email"  value={email} onChange={handleChange} className="form-control" id="email" name='email' />
        </div>
        
        <div className={styles.mb}>
          <label htmlFor="phone" className="form-label"> Enter Phone </label>
          <input type="phone" value={phone} onChange={handleChange} className="form-control" id="phone" name='phone' />
        </div>
        <label htmlFor="desc" >Comments</label>
        <div className={styles.mb} >
          <textarea className="form-control" placeholder="Write Your Concern here" id="desc" name='desc'  onChange={handleChange} value={desc} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
