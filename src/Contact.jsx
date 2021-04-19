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
       Here is What I want to say ${data.message}`
    )
  }
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">

        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Full Name</label>
                <input type="text"
                name = "fullname"
                value ={data.fullname}
                 onChange ={InputEvent}
                 className="form-control" 
                id="exampleInputName1" aria-describedby="nameHelp"
                 placeholder="Enter Name" />

              </div> 
              <br />
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Phone Number</label>
                <input type="number"
                name = "phone"
                value ={data.phone}
                 onChange ={InputEvent}
                  className="form-control" aria-describedby="NumberHelp" placeholder="Enter Mobile Number" />

              </div>
              <br />
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email"
                 name = "email"
                value ={data.email}
                 onChange ={InputEvent}
                  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <br />
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Enter Message</label>
                <textarea className="form-control"
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