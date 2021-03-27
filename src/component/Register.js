import React from 'react';
import Navbar from './Navbar';
import Cookies from 'universal-cookie';

function Register() {

  const axios = require('axios');
  const cookies = new Cookies();

async function Myone(e) {
 
debugger
  // var form = document.forms["myForm"]["email"].value;   
  var role = 'Customer';
  var username = document.forms["myForm"]["username"].value;
  var first_name = document.forms["myForm"]["fname"].value;
  var last_name = document.forms["myForm"]["lname"].value;
  var email = document.forms["myForm"]["email"].value;
  var mobile = document.forms["myForm"]["mobile"].value;
  var dob = document.forms["myForm"]["dob"].value;
  var gender = document.forms["myForm"]["gender"].value;
  var password = document.forms["myForm"]["password"].value;
  var password1 = document.forms["myForm"]["password1"].value;
  // var password = '1234';
  // var password1 = '1234';
  console.log(password1);
  console.log(password);
  cookies.set('email',email,{path:'/'});
  console.log(cookies.get('email'));
  if (password !== password1) {
      alert('Passwords do not match.');
  }
  else {  
     
      console.log('Trying to send request');
      e.preventDefault();
      try {
          // alert('err')
          // let loader = `<div><div class="loader centered"/></div>`;
          // document.getElementById('trial').innerHTML = loader;
          console.log('Trying')
          let res = await axios.post('http://127.0.0.1:8000/user/', {
              role : role,
              username:username,
              first_name: first_name,
              last_name: last_name,
              email: email,
              phone_number: mobile,
              dob:dob,
              gender:gender,
              password: password,
          })
          
          if (res.status === 200) {
            debugger
              // test for status you want, etc
              console.log(res.status);
              console.log(res.data);
              // alert(res.data.message);

              window.location='/login';
             

          }
          // Don't forget to return something
          return res.data
      }
      catch (err) {
          console.error('Signup Failed , Please try again.');
          window.location='/register'
          alert(err)
      }
  }
}
  return (
    <>
    <Navbar/>
    <section className="space-ptb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
            <div className="log-main">
            <div className="login-title">
                    <h4> Register  </h4>
                </div>
            <form id='myForm' className="form-row mt-4 mb-5 align-items-center">
                    <div className="form-group col-sm-12">
                      <input type="text" className="form-control" id='username' placeholder="Username" />
                    </div>
                    <div className="form-group col-sm-12">
                      <input type="email" className="form-control" id='email' placeholder="Email Address" />
                    </div>
                    <div className="form-group col-sm-12">
                      <input type="text" className="form-control" id='fname' placeholder="First Name" />
                    </div>
                    <div className="form-group col-sm-12">
                      <input type="text" className="form-control" id= "lname" placeholder="Last Name" />
                    </div>
                    <div className="form-group col-sm-12">
                      <input type="text" className="form-control" id='mobile' placeholder="Mobile" />
                    </div>
                    <div className="form-group col-sm-12">
                      <input type="date" className="form-control" id='dob' placeholder="Date Of Birth" />
                    </div>
                    <div className="form-group col-sm-12">
                    <select id="gender" name="gender" class="form-control">
                        <option>Male </option>
                        <option>Female </option>
                        </select>
                    </div>
                    <div className="form-group col-sm-12">
                      <input type="Password" id='password' className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group col-sm-12">
                      <input type="Password" id='password1' className="form-control" placeholder="Confirm Password" />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <button  onClick={Myone} className="btn btn-primary btn-block">Sign up</button>
                    </div>
                    
                  </form>
                  {/* <div className="login-social-media border pl-4 pr-4 pb-4 pt-0 rounded mt-5">
                    <div className="mb-4 d-block text-center"><b className=" pl-2 pr-2 mt-3 d-block">Login or Sign in with</b></div>
                    <form className="row">
                      <div className="col-sm-12">
                        <a className="btn btn-skew bg-facebook d-block mb-3 text-white" href="#"><span><i className="fab fa-facebook-f" />Login with Facebook</span></a>
                      </div>
                    </form>
                  </div> */}
                </div>
            </div>
              
          </div>
        </div>
      </section>

    </>
  );
}

export default Register;
