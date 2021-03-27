import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

function Schedule() {

  // const bannerbg = {
   
  //   backgroundImage: `url("assets/images/bg/06.jpg")`
  // };

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
              <a class="navbar-brand" href="index.html">
                {/* <img class="img-fluid logo" src="assets/images/logo.svg" alt="logo" /> */}
                <h4>Logo</h4>
              </a>
              <div class="navbar-collapse collapse justi-right">
                <ul class="nav navbar-nav">
                 
                <li class="nav-item">
                  <a class="nav-link " href="#">
                  Home 
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">
                  Plans and packages
                  </a>
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

{/* 
<section class="page-title bg-holder bg-overlay-black-50" data-jarallax='{"speed": 0.6}' style={bannerbg}>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="text-stroke-primary display-3 font-weight-bold text-uppercase">Profile</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Profile</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section> */}
<div class="clearfix"></div>

<section class="space-ptb bg-holder" >
  <div class=" mb-5">
    <div class="row">
      <div class="col-12">
        <div className="schedule-tabs-main">
        <ul class="nav nav-tabs nav-pills three-tab" id="pills-tab" role="tablist">
          <li class="nav-item text-center">
            <a class="nav-link active" id="schedule-tab" data-toggle="pill" href="#schedule" role="tab" aria-controls="schedule" aria-selected="false"> <i class="far fa-calendar-alt"></i> <span>  Schedule </span></a>
          </li>

          <li class="nav-item text-center">
            <a class="nav-link" id="activity-tab" data-toggle="pill" href="#activity" role="tab" aria-controls="activity" aria-selected="false"> <i class="fas fa-chart-line"></i>  <span> Activity </span></a>
          </li>

          <li class="nav-item text-center">
            <a class="nav-link" id="profile-tab" data-toggle="pill" href="#profile" role="tab" aria-controls="profile" aria-selected="false"> <i class="far fa-user"></i> <span> Profile </span></a>
          </li>
         
        </ul>
        </div>
       
        <div class="tab-content" id="pills-tabContent">

          {/* <div class="tab-pane fade show " id="explore" role="tabpanel" aria-labelledby="explore-tab">
                 <h2 class="dumy">Explore</h2>
          </div> */}
         
          <div class="tab-pane fade show active" id="schedule" role="tabpanel" aria-labelledby="schedule-tab">
        
          {/* <section class="schedule-section">
              <div class="container">
                <div class="row">
                  <div class="col-lg-3">
                    <div class="schedule-top-box">
                      <div class="schedule-box-title">
                      <i class="fas fa-user"></i>
                      </div>

                      <div class="schedule-box-right">
                      <h5>  Membership</h5>
                          <button class="btn-active">   Active </button>  
                      </div>
                     

                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="schedule-top-box">
                      <div class="schedule-box-title">
                      <i class="fas fa-calendar-check"></i>
                      </div>

                      <div class="schedule-box-right">
                      <h5>Total Classes</h5>
                          <button class="btn-active"> 09</button>  
                      </div>
                     

                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="schedule-top-box">
                      <div class="schedule-box-title">
                      <i class="far fa-calendar-alt"></i>
                      </div>

                      <div class="schedule-box-right">
                      <h5>  Activate Date</h5>
                          <button class="btn-active"> 01/2019/2020 </button>  
                      </div>
                     

                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="schedule-top-box">
                      <div class="schedule-box-title">
                      <i class="far fa-calendar-alt"></i>
                      </div>

                      <div class="schedule-box-right">
                          <h5 >Expiry Date</h5>
                          <button class="btn-active"> 01/02/2021 </button>  
                      </div>
                     

                    </div>
                  </div>


                  
                </div>
              </div>
          </section>       */}


        

<section class="tb-class-section">
<div class="container">
<div class="row">
  <div class="col-md-12">
      <div class="class-tabs-main">
        <ul class="nav nav-tabs nav-pills class" id="pills-tab" role="tablist">
        
        <li class="nav-item text-center">
          <a class="nav-link active" id="class-tab" data-toggle="pill" href="#class" role="tab" aria-controls="class" aria-selected="false"><span>  Classes </span></a>
        </li>

        <li class="nav-item text-center">
          <a class="nav-link" id="course-tab" data-toggle="pill" href="#course" role="tab" aria-controls="course" aria-selected="false">  <span> Courses </span></a>
        </li>

      </ul>
        </div>
      </div> 
  </div>
  </div>
</section>   


<section class="tab-class-section bg-silver">
  
  <div class="container">        
  <div class="row">
          
      <div class="col-lg-12">
        
        <div class="tab-content" id="pills-tabContent">
       
        
          <div class="tab-pane fade show active" id="class" role="tabpanel" aria-labelledby="class-tab">
          <div class="row">
            <div className="col-md-12 pd-left-0">
            <div className="schedule-owl">
              <OwlCarousel items={7}
               className="owl-theme"
                loop
                margin={5}
                nav
                
            >
                <div class="item">
                  <div className="schedule-owl-item">
                    <div class="day"> <h6> TODAY</h6> </div>
                    <div class="date"> <h6> JAN 06</h6> </div>
                  </div>
                </div>

                <div class="item">
                  <div className="schedule-owl-item">
                    <div class="day"> <h6> THU</h6> </div>
                    <div class="date"> <h6> JAN 07</h6> </div>
                  </div>
                </div>

                <div class="item">
                  <div className="schedule-owl-item">
                    <div class="day"> <h6> FRI</h6> </div>
                    <div class="date"> <h6> JAN 08</h6> </div>
                  </div>
                </div>

                <div class="item">
                  <div className="schedule-owl-item">
                    <div class="day"> <h6>SAT</h6> </div>
                    <div class="date"> <h6> JAN 09</h6> </div>
                  </div>
                </div>

                <div class="item">
                  <div className="schedule-owl-item">
                    <div class="day"> <h6>SUN</h6> </div>
                    <div class="date"> <h6> JAN 10</h6> </div>
                  </div>
                </div>

                <div class="item">
                  <div className="schedule-owl-item">
                    <div class="day"> <h6>MON</h6> </div>
                    <div class="date"> <h6> JAN 11</h6> </div>
                  </div>
                </div>

                <div class="item">
                  <div className="schedule-owl-item">
                    <div class="day"> <h6>TUE</h6> </div>
                    <div class="date"> <h6> JAN 12</h6> </div>
                  </div>
                </div>


                <div class="item">
                  <div className="schedule-owl-item">
                    <div class="day"> <h6> TODAY</h6> </div>
                    <div class="date"> <h6> JAN 06</h6> </div>
                  </div>
                </div>

                <div class="item">
                  <div className="schedule-owl-item">
                    <div class="day"> <h6> THU</h6> </div>
                    <div class="date"> <h6> JAN 07</h6> </div>
                  </div>
                </div>

                <div class="item">
                  <div className="schedule-owl-item">
                    <div class="day"> <h6> FRI</h6> </div>
                    <div class="date"> <h6> JAN 08</h6> </div>
                  </div>
                </div>

                <div class="item">
                  <div className="schedule-owl-item">
                    <div class="day"> <h6>SAT</h6> </div>
                    <div class="date"> <h6> JAN 09</h6> </div>
                  </div>
                </div>

                <div class="item">
                  <div className="schedule-owl-item">
                    <div class="day"> <h6>SUN</h6> </div>
                    <div class="date"> <h6> JAN 10</h6> </div>
                  </div>
                </div>

                <div class="item">
                  <div className="schedule-owl-item">
                    <div class="day"> <h6>MON</h6> </div>
                    <div class="date"> <h6> JAN 11</h6> </div>
                  </div>
                </div>

                <div class="item">
                  <div className="schedule-owl-item">
                    <div class="day"> <h6>TUE</h6> </div>
                    <div class="date"> <h6> JAN 12</h6> </div>
                  </div>
                </div>
                
            </OwlCarousel>

             </div>  
            </div>
          </div>
         
         
          <div class="row">
      <div class="col-lg-3 pd-left-0">
        <div class="shop-sidebar">
        
          <div class="widget">
            <div class="widget-title">
              <h6>Class Filter</h6>
            </div>
            <div class="custom-control form-check custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheck2" />
              <label class="custom-control-label" for="customCheck2">Demo class 1</label>
              <span class="text-secondary">(2)</span>
            </div>

            <div class="custom-control form-check custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheck3" />
              <label class="custom-control-label" for="customCheck3">Demo class 2</label>
              <span class="text-secondary">(1)</span>
            </div>

            <div class="custom-control form-check custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheck4" />
              <label class="custom-control-label" for="customCheck4">Demo class 3</label>
              <span class="text-secondary">(2)</span>
            </div>
            <div class="custom-control form-check custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheck5" />
              <label class="custom-control-label" for="customCheck5">Demo class 3</label>
              <span class="text-secondary">(3)</span>
            </div>

            <div class="custom-control form-check custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheck7" />
              <label class="custom-control-label" for="customCheck7">Demo class 4</label>
              <span class="text-secondary">(1)</span>
            </div>
          </div>


          <div class="widget">
            <div class="widget-title">
              <h6>Class Level</h6>
            </div>
            <div class="custom-control form-check custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheck2" />
              <label class="custom-control-label" for="customCheck2">All Level</label>
              <span class="text-secondary">(2)</span>
            </div>

            <div class="custom-control form-check custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheck3" />
              <label class="custom-control-label" for="customCheck3">Intermediate</label>
              <span class="text-secondary">(1)</span>
            </div>

            <div class="custom-control form-check custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheck4" />
              <label class="custom-control-label" for="customCheck4">Advance</label>
              <span class="text-secondary">(2)</span>
            </div>
         

          </div>


          <div class="widget">
            <div class="widget-title">
              <h6>Advance Search</h6>
            </div>

            <div class="form-group">
            <label for="usr"> From Date</label>
              <input type="date" class="form-control" id="customCheck2" />
            </div>


            <div class="form-group">
            <label for="usr">To Date</label>
              <input type="date" class="form-control" id="customCheck2" />
            </div>

            <div class="form-group">
            <label for="usr">Time</label>
              <input type="time" class="form-control" id="customCheck2" />
             
            </div>
          </div>
          
          
        </div>
      </div>


     
      <div class="col-lg-9 mt-5 mt-lg-0">
      
        <div class="row">

        <div class="col-lg-12">
        <div class="blog-post blog-post-quote mb-5 bg-secondary">
         <div class="class-content-img">
             <img src="assets/images/class.jpg" />
         </div>

          <div class="class-content">
          
          <div class="blog-post-title">
            <h6><a class="text-blue" href="#">Demo class</a></h6>
          </div>
          <div class="blog-post-categorise">
            <ul class="list-unstyled mb-0">
              <li><a class="text-blue" href="#"><span>Thuesday </span> <span>7:30pm to 8:30pm </span></a></li>
            </ul>
          </div>
          <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> By April 5</a></li>
            <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration 2 hours </a></li>
            <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Spot left 04</a></li>
          </ul>

          <div class="add-listing d-none d-sm-block class-book-btn">
          <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
            <span>Book Now</span>
          </a>
        </div>

          </div>
        </div> 
        </div>
        
        </div>


        <div class="row">

          <div class="col-lg-12">
          <div class="blog-post blog-post-quote mb-5 bg-secondary ">
          <div class="class-content-img">
              <img src="assets/images/class.jpg" />
          </div>

            <div class="class-content">
            
            <div class="blog-post-title">
              <h6><a class="text-blue" href="#">Demo class</a></h6>
            </div>
            <div class="blog-post-categorise">
              <ul class="list-unstyled mb-0">
                <li><a class="text-blue" href="#"><span>Thuesday </span> <span>7:30pm to 8:30pm </span></a></li>
              </ul>
            </div>
            <ul class="list-unstyled mb-0 blog-post-meta">
              <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> By April 5</a></li>
              <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration 2 hours </a></li>
              <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Spot left 04</a></li>
            </ul>

            <div class="add-listing d-none d-sm-block class-book-btn">
            <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
              <span>Book Now</span>
            </a>
          </div>

            </div>
          </div> 
          </div>

          </div>


        <div class="row">

        <div class="col-lg-12 ">
        <div class="blog-post blog-post-quote mb-5 bg-secondary">
        <div class="class-content-img">
            <img src="assets/images/class.jpg" />
        </div>

          <div class="class-content">
          
          <div class="blog-post-title">
            <h6><a class="text-blue" href="#">Demo class</a></h6>
          </div>
          <div class="blog-post-categorise">
            <ul class="list-unstyled mb-0">
              <li><a class="text-blue" href="#"><span>Thuesday </span> <span>7:30pm to 8:30pm </span></a></li>
            </ul>
          </div>
          <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> By April 5</a></li>
            <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration 2 hours </a></li>
            <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Spot left 04</a></li>
          </ul>

          <div class="add-listing d-none d-sm-block class-book-btn">
          <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
            <span>Book Now</span>
          </a>
        </div>

          </div>
        </div> 
        </div>

        </div>


      </div>
    </div>
          </div>

          <div class="tab-pane fade" id="course" role="tabpanel" aria-labelledby="course-tab">
          <div class="row">
  
      <div class="col-lg-12 mt-5 mt-lg-0">
      
        <div class="row">

        <div class="col-lg-9 m-auto">
        <div class="blog-post blog-post-quote mb-5 bg-secondary">
         <div class="class-content-img">
            <div class="date-time-box">
              <h4> 07:30pm </h4>
            </div>
         </div>

          <div class="class-content">
          
          <div class="blog-post-title">
            <h6><a class="text-blue" href="#">Monday</a></h6>
          </div>
          <div class="blog-post-categorise">
            <ul class="list-unstyled mb-0">
              <li><a class="text-blue" href="#"><span>  </span> <span> <i class="far fa-clock"></i> 7:30pm to 8:30pm </span></a></li>
            </ul>
          </div>
          <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> By Pearl</a></li>
            <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration 2 hours </a></li>
          
          </ul>

          <div class="add-listing d-none d-sm-block class-book-btn">
          <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
            <span>Sign up</span>
          </a>
        </div>

          </div>
        </div> 
        </div>
        
        </div>


        <div class="row">

        <div class="col-lg-9 m-auto">
        <div class="blog-post blog-post-quote mb-5 bg-secondary">
         <div class="class-content-img">
            <div class="date-time-box">
              <h4> 07:30pm </h4>
            </div>
         </div>

          <div class="class-content">
          
          <div class="blog-post-title">
            <h6><a class="text-blue" href="#">friday</a></h6>
          </div>
          <div class="blog-post-categorise">
            <ul class="list-unstyled mb-0">
              <li><a class="text-blue" href="#"><span>  </span> <span> <i class="far fa-clock"></i> 7:30pm to 8:30pm </span></a></li>
            </ul>
          </div>
          <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> By Pearl</a></li>
            <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration 2 hours </a></li>
          
          </ul>

          <div class="add-listing d-none d-sm-block class-book-btn">
          <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
            <span>Sign up</span>
          </a>
        </div>

          </div>
        </div> 
        </div>
        
        </div>





        <div class="row">

        <div class="col-lg-9 m-auto">
        <div class="blog-post blog-post-quote mb-5 bg-secondary">
         <div class="class-content-img">
            <div class="date-time-box">
              <h4> 07:30pm </h4>
            </div>
         </div>

          <div class="class-content">
          
          <div class="blog-post-title">
            <h6><a class="text-blue" href="#">Tuesday</a></h6>
          </div>
          <div class="blog-post-categorise">
            <ul class="list-unstyled mb-0">
              <li><a class="text-blue" href="#"><span>  </span> <span> <i class="far fa-clock"></i> 7:30pm to 8:30pm </span></a></li>
            </ul>
          </div>
          <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> By Pearl</a></li>
            <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration 2 hours </a></li>
          
          </ul>

          <div class="add-listing d-none d-sm-block class-book-btn">
          <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
            <span>Sign up</span>
          </a>
        </div>

          </div>
        </div> 
        </div>
        
        </div>





      </div>
    </div>
          </div>

          </div>
       

</div>

</div>

  </div>
</section>



          </div>

          <div class="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="activity-tab">
            <h2 class="dumy">activity tab</h2>
          </div>

          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <h2 class="dumy"> Profile Tab</h2>
          </div>

          <div class="tab-pane fade" id="setting" role="tabpanel" aria-labelledby="setting-tab">
                <h2 class="dumy"> Setting Tab</h2>
          </div>
  
        </div>
      </div>
    </div>
  </div>
</section>




{/* <section class="space-ptb">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="section-title text-center">
          <span class="sub-title text-secondary"><span class="title-shape mr-2"></span> Our blogs</span>
          <h2>Check out our latest stories</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mb-5 mb-md-0">
        <div class="blog-post">
          <div class="blog-post-image">
            <img class="img-fluid" src="images/blog/01.jpg" alt="">
          </div>
          <div class="blog-post-categorise mt-3">
            <ul class="list-unstyled mb-0">
              <li><a class="text-secondary" href="#"><b>Classes & Coaches</b></a></li>
            </ul>
          </div>
          <div class="blog-post-title">
            <h5><a href="#">Full Body Home Workout</a></h5>
          </div>
          <p class="mt-3">Do it today. Remind yourself of someone you know who died suddenly and the fact...</p>
          <ul class="list-unstyled mb-0 blog-post-meta mt-4">
            <li><a class="text-secondary" href="#">by Ora Bryan</a></li>
            <li><a class="text-secondary" href="#">March 10, 2020 </a></li>
            <li><a class="text-secondary" href="#">02</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-4 mb-5 mb-md-0">
        <div class="blog-post">
          <div class="blog-post-image">
            <img class="img-fluid" src="assets/images/blog/02.jpg" alt="" />
          </div>
          <div class="blog-post-categorise mt-3">
            <ul class="list-unstyled mb-0">
              <li><a class="text-secondary" href="#"><b>Classes & Coaches</b></a></li>
            </ul>
          </div>
          <div class="blog-post-title">
            <h5><a href="#">31-Day Fitness Calendar</a></h5>
          </div>
          <p class="mt-3">Let success motivate you. Find a picture of what epitomizes success to you...</p>
          <ul class="list-unstyled mb-0 blog-post-meta mt-4">
            <li><a class="text-secondary" href="#">by Aaron Sharp</a></li>
            <li><a class="text-secondary" href="#">April 03, 2020 </a></li>
            <li><a class="text-secondary" href="#">03</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="blog-post">
          <div class="blog-post-image">
            <img class="img-fluid" src="assets/images/blog/03.jpg" alt="" />
          </div>
          <div class="blog-post-categorise mt-3">
            <ul class="list-unstyled mb-0">
              <li><a class="text-secondary" href="#"><b>Classes & Coaches</b></a></li>
            </ul>
          </div>
          <div class="blog-post-title">
            <h5><a href="#">At Home Ab Workout</a></h5>
          </div>
          <p class="mt-3">Reflect and experiment until you find the right combination of motivators for...</p>
          <ul class="list-unstyled mb-0 blog-post-meta mt-4">
            <li><a class="text-secondary" href="#">by Sara Lisbon</a></li>
            <li><a class="text-secondary" href="#">May 26, 2020 </a></li>
            <li><a class="text-secondary" href="#">01</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section> */}








    </>
  );
}

export default Schedule;
