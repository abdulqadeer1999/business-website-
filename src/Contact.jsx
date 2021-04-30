import { useState } from "react";




const Contact = () => {
  const [data,setData] =useState({
    fullname : "",
    phone: "" ,
    email : "",
    message : " "
  })

const InputEvent = (event) =>{
  const {name,value} = event.target
  setData ((preVal) => {
    return {
      ...preVal,
      [name] : value,
    }
  })
}
  const formSubmit = (e) => {
    e.preventDefault()
    alert (
      `My name is ${data.fullname}.
       My Mobile Number is ${data.phone}.
       My Email is ${data.email},
       Here is What I want to say : ${data.message}`
    )
  }
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center" style={{fontWeight:"bold"}} >Contact Us</h1>
      </div>
      <div className="container contact_div">

        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" style={{fontWeight:"bold"}}>Full Name</label>
                <input type="text"
               
                name = "fullname"
                required="required"
                value ={data.fullname}
                 onChange ={InputEvent}
                 className="form-control" 
                id="exampleInputName1" aria-describedby="nameHelp"
                 placeholder="Enter Name" />

              </div> 
              <br />
              <div className="form-group">
                <label htmlFor="exampleInputEmail1"  style={{fontWeight:"bold"}}>Phone Number</label>
                <input type="number"
                name = "phone"
                required="requires"
                value ={data.phone}
                 onChange ={InputEvent}
                  className="form-control" aria-describedby="NumberHelp" placeholder="Enter Mobile Number" />

              </div>
              <br />
              <div className="form-group">
                <label htmlFor="exampleInputEmail1"  style={{fontWeight:"bold"}}>Email address</label>
                <input type="email"
                 name = "email"
                 required="required"
                value ={data.email}
                 onChange ={InputEvent}
                  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted"  style={{fontWeight:"bold"}}>We'll never share your email with anyone else.</small>
              </div>
              <br />
              <div className="form-group">
                <label for="exampleFormControlTextarea1"  style={{fontWeight:"bold"}}>Enter Message</label>
                <textarea className="form-control"
                required="required"
                name = "message"
                value ={data.message}
                 onChange ={InputEvent}
                  id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <br />
              
              <button type="submit" className="btn btn-outline-primary">Submit form</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;