import React from 'react';
import Navbar from './Navbar';
import Cookies from 'universal-cookie';

function Login() {

  const cookies = new Cookies();

  const axios = require('axios');
  console.log(cookies.get('email'));

  async function MyOne(e) {
    debugger
  
    var email = document.getElementById("email").value;

    
    // cookies.set('uuid',email,{path:'/'});

    var password = document.getElementById("password").value;
      e.preventDefault();
      try {
        console.log('Trying');
        let res = await axios.post('http://127.0.0.1:8000/user/authorize/', {
          
          email: email,
          password: password,
        })
       if (res.status === 200) {
          debugger
          console.log(res.data)
          cookies.set('uuid',res.data.uuid,{path:'/'});
          cookies.set('email',res.data.results.email,{path:'/'});
          window.location = '/dashboard';
        }
      }
      catch (err) {
        console.error(err);
          alert('Login unsuccessfull.');
          window.location = '/Login';
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
                    <h4> Login  </h4>
                </div>
                  <form className="form-row mt-4 align-items-center">
                    <div className="form-group col-sm-12">
                      <input type="email" id='email' className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group col-sm-12">
                      <input type="Password" id='password' className="form-control" placeholder="Password" />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <button onClick={MyOne} className="btn btn-primary btn-block">Login</button>
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

export default Login;
