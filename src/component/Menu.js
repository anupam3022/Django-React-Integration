import React from 'react';
import {NavLink} from 'react-router-dom';

function Menu() {
  return (
    <>
       <header class="header default">
            <div class="container">
    <div class="row">
      {/* <div class="col-lg-3 header-left-bg d-none d-lg-block">
        <a class="desktop-logo" href="index.html">
          <img class="img-fluid logo" src="assets/images/logo.svg" alt="logo" />
          <h3>Logo</h3>
        </a>
      </div> */}
      <div class="col-lg-12 header-right-bg">
        
            <nav class="navbar navbar-static-top navbar-expand-lg header-sticky ">
              <button type="button" class="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse"><i class="fas fa-align-left"></i></button>
              <a class="navbar-brand" href="/">
                <h4>Logo</h4>
              </a>
              <div class="navbar-collapse collapse justi-right">
                <ul class="nav navbar-nav">
                 
                <li class="nav-item">
                 <NavLink to="/" className="">   Home </NavLink> 
                </li>
                <li class="nav-item">
                 <NavLink to="/Plans" className="">  Plans and packages </NavLink> 
                </li>

                <li class="nav-item">
                <a class="nav-link " href="#">
                 <div class="logout-btn">
                  <i class="fas fa-sign-out-alt"></i>
                  Logout
                  </div>
                  </a>
                </li>

                <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="profile-circle-main"> <img src="assets/images/04.jpg" /> </div>  
                {/* <i class="fas fa-chevron-down fa-xs"></i> */}
              </a>
              {/* <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">option 1</a></li>
                <li><a class="dropdown-item" href="#">Edite</a></li>
                <li><a class="dropdown-item" href="#">Shop Cart</a></li>
                <li><a class="dropdown-item" href="#">Shop Checkout</a></li>
              </ul> */}
            </li>


          </ul>
        </div>

      </nav>
   </div>
  </div>
</div>
        </header>

        
<div class="modal login fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header border-0">
        <h5 class="modal-title" id="loginModalLabel">Log in & Register</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <ul class="nav nav-tabs nav-tabs-02 justify-content-center" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="false"> <span> Log in</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="true"><span>Register</span></a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
            <form class="form-row mt-4 align-items-center">
              <div class="form-group col-sm-12">
                <input type="text" class="form-control" placeholder="Username" />
              </div>
              <div class="form-group col-sm-12">
                <input type="Password" class="form-control" placeholder="Password" />
              </div>
              <div class="col-sm-6">
                <button type="submit" class="btn btn-primary btn-block">Sign up</button>
              </div>
              <div class="col-sm-6">
                <ul class="list-unstyled d-flex mb-1 mt-sm-0 mt-3">
                  <li class="mr-1"><a class="text-dark" href="#"><b>Already Registered User? Click here to login</b></a></li>
                </ul>
              </div>
            </form>
            <div class="login-social-media border pl-4 pr-4 pb-4 pt-0 rounded mt-5">
              <div class="mb-4 d-block text-center"><b class="bg-white pl-2 pr-2 mt-3 d-block">Login or Sign in with</b></div>
              <form class="row">
                <div class="col-sm-12">
                  <a class="btn btn-skew bg-facebook d-block mb-3 text-white" href="#"><span><i class="fab fa-facebook-f"></i>Login with Facebook</span></a>
                </div>
              </form>
            </div>
          </div>
          <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
            <form class="form-row mt-4 mb-5 align-items-center">
              <div class="form-group col-sm-12">
                <input type="text" class="form-control" placeholder="Username" />
              </div>
              <div class="form-group col-sm-12">
                <input type="email" class="form-control" placeholder="Email Address" />
              </div>
              <div class="form-group col-sm-12">
                <input type="Password" class="form-control" placeholder="Password" />
              </div>
              <div class="form-group col-sm-12">
                <input type="Password" class="form-control" placeholder="Confirm Password" />
              </div>
              <div class="col-sm-6">
                <button type="submit" class="btn btn-primary btn-block">Sign up</button>
              </div>
              <div class="col-sm-6">
                <ul class="list-unstyled d-flex mb-1 mt-sm-0 mt-3">
                  <li class="mr-1"><a class="text-dark" href="#"><b>Already Registered User? Click here to login</b></a></li>
                </ul>
              </div>
            </form>
            <div class="login-social-media border pl-4 pr-4 pb-4 pt-0 rounded mt-5">
              <div class="mb-4 d-block text-center"><b class="bg-white pl-2 pr-2 mt-3 d-block">Login or Sign in with</b></div>
              <form class="row">
                <div class="col-sm-12">
                  <a class="btn btn-skew bg-facebook d-block mb-3 text-white" href="#"><span><i class="fab fa-facebook-f"></i>Login with Facebook</span></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
);
}

export default Menu;
