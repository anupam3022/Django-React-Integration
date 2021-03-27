
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { render} from 'react-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import Menu from './Menu';
import TimeRangeSlider from 'react-time-range-slider';
// var TimeRangeSlider = require('react-time-range-slider')




class Classes extends React.Component{

 
  constructor(props) {
    super(props);
    this.featureRef = React.createRef();
    this.changeStartHandler = this.changeStartHandler.bind(this);
    this.timeChangeHandler = this.timeChangeHandler.bind(this);
    this.changeCompleteHandler = this.changeCompleteHandler.bind(this);
    this.state = {
        value: {
            start: "00:00",
            end: "23:59"
        }
    }
}

changeStartHandler(time){
    console.log("Start Handler Called", time);
}

timeChangeHandler(time){
    this.setState({
        value: time
    });
}

changeCompleteHandler(time){
    console.log("Complete Handler Called", time);
}

  render() {
  return (
    <>
   
    
    <header class="top-bar">
      <div className="gym-title-main">
          <div className="header-gym-title">
            <h5> Haraka center for movment arts  </h5> 
          </div>

            <div className="header-gym-btn-main">
              <button className="btn-gym-1"> CP </button>
            </div>

            <div className="header-gym-btn-main-2">
               <button className="btn-gym-2"> PG </button>
            </div>

            <div className="header-gym-btn-main-3">

               <button className="btn-gym-3"> DE </button>
            </div>
      </div>

      <div className="menu-icn-main">
        <ul>
          <li> <a href="#">  Example@.com  </a> </li>
          <li> <a href="#"> <span> ENG </span></a> </li>
          <li> <a href="#"> <i class="fas fa-cog"></i> </a> </li>
          <li> <a href="#"><i class="far fa-bell"></i> </a> </li>
        </ul>
      </div>
    </header>

    <section className="left-bar-main">

            <div class="sidebar-content">

              <div className="side-bar-logo">
                <h4>Business Logo</h4>
              </div>

              <div className="side-menu-list">
                <ul>
                  <li className="dash-menu"> <a href="#"> <i class="fas fa-tachometer-alt"></i> Dashboard </a> </li>
                  <li className="side-menu-active"> <a href="#"> <i class="fas fa-compass"></i> Explore </a> </li>
                  <li className=""> <a href="#"> <i class="far fa-calendar-alt"></i> My Schedule </a> </li>
                  <li className=""> <a href="#"><i class="fas fa-columns"></i> Plans & Packages </a> </li>
                  <li className=""> <a href="#"> <i class="fas fa-user-alt"></i> Profile </a> </li>
                </ul>

                <div className="logout-main">
                  <a href=""><i class="fas fa-sign-out-alt"></i> Logout </a>
                </div>
              </div>
                  
              
            </div>

    </section>
    
    <section class="bg-holder right-side" >
      
        <div class="row">
          
          <div class="col-12">             
              
        <section class="tb-class-section">
        <div class="container">
        <div class="row">
          <div class="col-md-12 ">

           

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
              
          <div class="col-lg-12 ">
            
            <div class="tab-content" id="pills-tabContent">
           
            
              <div class="tab-pane fade show active" id="class" role="tabpanel" aria-labelledby="class-tab">
              
              
              <div class="row">
                <div className="col-md-12">
                <div className="schedule-owl">
                  <OwlCarousel items={7}
                   className="owl-theme nav nav-tabs"
                  
                    margin={5}
                    nav
                  
                    
                >
         

            <div class="item show_time_date active" data-toggle="tab" href="#tab1">
            
            

              <div>
                      <div className="schedule-owl-item">
                        <div class="day"> <h6> TODAY</h6> </div>
                        <div class="date"> <h6>
                         01</h6> </div>
                      </div>
                    </div>
    
            </div>
    
    
            <div class="item show_time_date" data-toggle="tab" href="#tab2">
         
              <div>
                      <div className="schedule-owl-item">
                        <div class="day"> <h6> MON</h6> </div>
                        <div class="date"> <h6>  02</h6> </div>
                      </div>
                    </div>
    
            </div>
    
    
    
            <div class="item show_time_date" data-toggle="tab" href="#tab3">
                
              <div>
                      <div className="schedule-owl-item">
                        <div class="day"> <h6> TUE</h6> </div>
                        <div class="date"> <h6>03</h6> </div>
                      </div>
                    </div>
    
            </div>
    
    
            <div class="item show_time_date" data-toggle="tab" href="#tab4">
         
              <div>
                      <div className="schedule-owl-item">
                        <div class="day"> <h6> WED </h6> </div>
                        <div class="date"> <h6> 04</h6> </div>
                      </div>
                    </div>
    
            </div>
    
            <div class="item show_time_date" data-toggle="tab" href="#tab5">
         
              <div>
                      <div className="schedule-owl-item">
                        <div class="day"> <h6> THU</h6> </div>
                        <div class="date"> <h6> 05</h6> </div>
                      </div>
                    </div>
    
            </div>
    
            <div class="item show_time_date" data-toggle="tab" href="#tab6">
         
              <div>
                      <div className="schedule-owl-item">
                        <div class="day"> <h6> FRI</h6> </div>
                        <div class="date"> <h6>  06</h6> </div>
                      </div>
                    </div>
    
            </div>
    
            <div class="item show_time_date" data-toggle="tab" href="#tab7">
         
              <div>
                      <div className="schedule-owl-item">
                        <div class="day"> <h6> SUN</h6> </div>
                        <div class="date"> <h6> 07</h6> </div>
                      </div>
                    </div>
    
            </div>

            <div class="item show_time_date" data-toggle="tab" href="#tab8">
         
              <div>
                      <div className="schedule-owl-item">
                        <div class="day"> <h6> SAT</h6> </div>
                        <div class="date"> <h6> 07</h6> </div>
                      </div>
                    </div>
    
            </div>
    
            
    
    
                </OwlCarousel>
    
                 </div>  
    
                </div>
              </div>
             
             
              <div class="row">
   
 
          <div class="col-lg-9 mt-5 mt-lg-0">
          <div class="tab-content mr-top-70">
          
              <div id="tab1" class="tab-pane fade in show active">
          
          <div class="row">
    
          <div class="col-lg-12">
          <div class="blog-post blog-post-quote mb-5 bg-secondary">
          <div class="row">

          <div className="col-md-2 pd-r-0">
            <div class="class-content-img">
               <img src="assets/images/class.jpg" />
            </div>
          </div>


            <div className="col-md-2 pd-r-0">
            <div className="all-lavels">
                <p>09:00 am </p>
                <p> <span> (60 min) </span> </p>
              </div>
           
            </div>


            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> All Lavels </p>
                <p> <span> Female (18+) </span> </p>
              </div>

            </div>

            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> Pilatesanada  </p>
                <p> <span> Lorem ipsum dollar </span> </p>
                <p className="two-seat-text"> 2 Seats Available </p>
              </div>

            </div>

             <div className="col-md-2 pd-r-0">
            
            <div class="add-listing d-none d-sm-block class-book-btn more-info">
              <a class="m-info" href="our-trainers.html">
               More info
              </a>
            </div>
              </div>

            <div className="col-md-2 pd-r-0">
              
            <div class="add-listing d-none d-sm-block class-book-btn">
            <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
              <span>Book</span>
            </a>
          </div>
            </div>

            </div>
          </div> 
          </div>
          
          </div>
    
    
          <div class="row">
    
          <div class="col-lg-12">
          <div class="blog-post blog-post-quote mb-5 bg-secondary">
          <div class="row">

          <div className="col-md-2 pd-r-0">
            <div class="class-content-img">
               <img src="assets/images/class.jpg" />
            </div>
          </div>


            <div className="col-md-2 pd-r-0">
            <div className="all-lavels">
                <p>09:00 am </p>
                <p> <span> (60 min) </span> </p>
              </div>
           
            </div>


            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> All Lavels </p>
                <p> <span> Female (18+) </span> </p>
              </div>

            </div>

            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> Pilatesanada  </p>
                <p> <span> Lorem ipsum dollar </span> </p>
                <p className="two-seat-text"> 2 Seats Available </p>
              </div>

            </div>

             <div className="col-md-2 pd-r-0">
            
            <div class="add-listing d-none d-sm-block class-book-btn more-info">
              <a class="m-info" href="our-trainers.html">
               More info
              </a>
            </div>
              </div>

            <div className="col-md-2 pd-r-0">
              
            <div class="add-listing d-none d-sm-block class-book-btn">
            <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
              <span>Book</span>
            </a>
          </div>
            </div>

            </div>
          </div> 
          </div>
    
          </div>
    
    
          <div class="row">
    
          <div class="col-lg-12">
          <div class="blog-post blog-post-quote mb-5 bg-secondary">
          <div class="row">

          <div className="col-md-2 pd-r-0">
            <div class="class-content-img">
               <img src="assets/images/class.jpg" />
            </div>
          </div>


            <div className="col-md-2 pd-r-0">
            <div className="all-lavels">
                <p>09:00 am </p>
                <p> <span> (60 min) </span> </p>
              </div>
           
            </div>


            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> All Lavels </p>
                <p> <span> Female (18+) </span> </p>
              </div>

            </div>

            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> Pilatesanada  </p>
                <p> <span> Lorem ipsum dollar </span> </p>
                <p className="two-seat-text"> 2 Seats Available </p>
              </div>

            </div>

             <div className="col-md-2 pd-r-0">
            
            <div class="add-listing d-none d-sm-block class-book-btn more-info">
              <a class="m-info" href="our-trainers.html">
               More info
              </a>
            </div>
              </div>

            <div className="col-md-2 pd-r-0">
              
            <div class="add-listing d-none d-sm-block class-book-btn">
            <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
              <span>Book</span>
            </a>
          </div>
            </div>

            </div>
          </div> 
          </div>
    
          </div>
    
        </div>
    
    
                <div id="tab2" class="tab-pane fade">
                <div class="row">
    
                <div class="col-lg-12">
          <div class="blog-post blog-post-quote mb-5 bg-secondary">
          <div class="row">

          <div className="col-md-2 pd-r-0">
            <div class="class-content-img">
               <img src="assets/images/class.jpg" />
            </div>
          </div>


            <div className="col-md-2 pd-r-0">
            <div className="all-lavels">
                <p>09:00 am </p>
                <p> <span> (60 min) </span> </p>
              </div>
           
            </div>


            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> All Lavels </p>
                <p> <span> Female (18+) </span> </p>
              </div>

            </div>

            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> Pilatesanada  </p>
                <p> <span> Lorem ipsum dollar </span> </p>
                <p className="two-seat-text"> 2 Seats Available </p>
              </div>

            </div>

             <div className="col-md-2 pd-r-0">
            
            <div class="add-listing d-none d-sm-block class-book-btn more-info">
              <a class="m-info" href="our-trainers.html">
               More info
              </a>
            </div>
              </div>

            <div className="col-md-2 pd-r-0">
              
            <div class="add-listing d-none d-sm-block class-book-btn">
            <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
              <span>Book</span>
            </a>
          </div>
            </div>

            </div>
          </div> 
          </div>
    
                  </div>
                </div>
    
                <div id="tab3" class="tab-pane fade">
                <div class="row">
    
                <div class="col-lg-12">
          <div class="blog-post blog-post-quote mb-5 bg-secondary">
          <div class="row">

          <div className="col-md-2 pd-r-0">
            <div class="class-content-img">
               <img src="assets/images/class.jpg" />
            </div>
          </div>


            <div className="col-md-2 pd-r-0">
            <div className="all-lavels">
                <p>09:00 am </p>
                <p> <span> (60 min) </span> </p>
              </div>
           
            </div>


            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> All Lavels </p>
                <p> <span> Female (18+) </span> </p>
              </div>

            </div>

            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> Pilatesanada  </p>
                <p> <span> Lorem ipsum dollar </span> </p>
                <p className="two-seat-text"> 2 Seats Available </p>
              </div>

            </div>

             <div className="col-md-2 pd-r-0">
            
            <div class="add-listing d-none d-sm-block class-book-btn more-info">
              <a class="m-info" href="our-trainers.html">
               More info
              </a>
            </div>
              </div>

            <div className="col-md-2 pd-r-0">
              
            <div class="add-listing d-none d-sm-block class-book-btn">
            <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
              <span>Book</span>
            </a>
          </div>
            </div>

            </div>
          </div> 
          </div>
    
                </div>
                </div>
    
                <div id="tab4" class="tab-pane fade">
                <div class="row">
    
                <div class="col-lg-12">
          <div class="blog-post blog-post-quote mb-5 bg-secondary">
          <div class="row">

          <div className="col-md-2 pd-r-0">
            <div class="class-content-img">
               <img src="assets/images/class.jpg" />
            </div>
          </div>


            <div className="col-md-2 pd-r-0">
            <div className="all-lavels">
                <p>09:00 am </p>
                <p> <span> (60 min) </span> </p>
              </div>
           
            </div>


            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> All Lavels </p>
                <p> <span> Female (18+) </span> </p>
              </div>

            </div>

            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> Pilatesanada  </p>
                <p> <span> Lorem ipsum dollar </span> </p>
                <p className="two-seat-text"> 2 Seats Available </p>
              </div>

            </div>

             <div className="col-md-2 pd-r-0">
            
            <div class="add-listing d-none d-sm-block class-book-btn more-info">
              <a class="m-info" href="our-trainers.html">
               More info
              </a>
            </div>
              </div>

            <div className="col-md-2 pd-r-0">
              
            <div class="add-listing d-none d-sm-block class-book-btn">
            <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
              <span>Book</span>
            </a>
          </div>
            </div>

            </div>
          </div> 
          </div>
    
                </div>
                </div>
    
                <div id="tab5" class="tab-pane fade">
                <div class="row">
    
                <div class="col-lg-12">
          <div class="blog-post blog-post-quote mb-5 bg-secondary">
          <div class="row">

          <div className="col-md-2 pd-r-0">
            <div class="class-content-img">
               <img src="assets/images/class.jpg" />
            </div>
          </div>


            <div className="col-md-2 pd-r-0">
            <div className="all-lavels">
                <p>09:00 am </p>
                <p> <span> (60 min) </span> </p>
              </div>
           
            </div>


            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> All Lavels </p>
                <p> <span> Female (18+) </span> </p>
              </div>

            </div>

            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> Pilatesanada  </p>
                <p> <span> Lorem ipsum dollar </span> </p>
                <p className="two-seat-text"> 2 Seats Available </p>
              </div>

            </div>

             <div className="col-md-2 pd-r-0">
            
            <div class="add-listing d-none d-sm-block class-book-btn more-info">
              <a class="m-info" href="our-trainers.html">
               More info
              </a>
            </div>
              </div>

            <div className="col-md-2 pd-r-0">
              
            <div class="add-listing d-none d-sm-block class-book-btn">
            <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
              <span>Book</span>
            </a>
          </div>
            </div>

            </div>
          </div> 
          </div>
    
                  </div>
                </div>
    
                <div id="tab6" class="tab-pane fade">
                <div class="row">
    
                <div class="col-lg-12">
          <div class="blog-post blog-post-quote mb-5 bg-secondary">
          <div class="row">

          <div className="col-md-2 pd-r-0">
            <div class="class-content-img">
               <img src="assets/images/class.jpg" />
            </div>
          </div>


            <div className="col-md-2 pd-r-0">
            <div className="all-lavels">
                <p>09:00 am </p>
                <p> <span> (60 min) </span> </p>
              </div>
           
            </div>


            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> All Lavels </p>
                <p> <span> Female (18+) </span> </p>
              </div>

            </div>

            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> Pilatesanada  </p>
                <p> <span> Lorem ipsum dollar </span> </p>
                <p className="two-seat-text"> 2 Seats Available </p>
              </div>

            </div>

             <div className="col-md-2 pd-r-0">
            
            <div class="add-listing d-none d-sm-block class-book-btn more-info">
              <a class="m-info" href="our-trainers.html">
               More info
              </a>
            </div>
              </div>

            <div className="col-md-2 pd-r-0">
              
            <div class="add-listing d-none d-sm-block class-book-btn">
            <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
              <span>Book</span>
            </a>
          </div>
            </div>

            </div>
          </div> 
          </div>
    
                  </div>
                </div>
    
                <div id="tab7" class="tab-pane fade">
                <div class="row">
    
                <div class="col-lg-12">
          <div class="blog-post blog-post-quote mb-5 bg-secondary">
          <div class="row">

          <div className="col-md-2 pd-r-0">
            <div class="class-content-img">
               <img src="assets/images/class.jpg" />
            </div>
          </div>


            <div className="col-md-2 pd-r-0">
            <div className="all-lavels">
                <p>09:00 am </p>
                <p> <span> (60 min) </span> </p>
              </div>
           
            </div>


            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> All Lavels </p>
                <p> <span> Female (18+) </span> </p>
              </div>

            </div>

            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> Pilatesanada  </p>
                <p> <span> Lorem ipsum dollar </span> </p>
                <p className="two-seat-text"> 2 Seats Available </p>
              </div>

            </div>

             <div className="col-md-2 pd-r-0">
            
            <div class="add-listing d-none d-sm-block class-book-btn more-info">
              <a class="m-info" href="our-trainers.html">
               More info
              </a>
            </div>
              </div>

            <div className="col-md-2 pd-r-0">
              
            <div class="add-listing d-none d-sm-block class-book-btn">
            <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
              <span>Book</span>
            </a>
          </div>
            </div>

            </div>
          </div> 
          </div>
    
                </div>
                </div>
    
                <div id="tab8" class="tab-pane fade">
                
                <div class="row">
    
                <div class="col-lg-12">
          <div class="blog-post blog-post-quote mb-5 bg-secondary">
          <div class="row">

          <div className="col-md-2 pd-r-0">
            <div class="class-content-img">
               <img src="assets/images/class.jpg" />
            </div>
          </div>


            <div className="col-md-2 pd-r-0">
            <div className="all-lavels">
                <p>09:00 am </p>
                <p> <span> (60 min) </span> </p>
              </div>
           
            </div>


            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> All Lavels </p>
                <p> <span> Female (18+) </span> </p>
              </div>

            </div>

            <div className="col-md-2 pd-r-0">
              <div className="all-lavels">
                <p> Pilatesanada  </p>
                <p> <span> Lorem ipsum dollar </span> </p>
                <p className="two-seat-text"> 2 Seats Available </p>
              </div>

            </div>

             <div className="col-md-2 pd-r-0">
            
            <div class="add-listing d-none d-sm-block class-book-btn more-info">
              <a class="m-info" href="our-trainers.html">
               More info
              </a>
            </div>
              </div>

            <div className="col-md-2 pd-r-0">
              
            <div class="add-listing d-none d-sm-block class-book-btn">
            <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
              <span>Book</span>
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
          

            <div class="col-lg-3 ">
            <div class="shop-sidebar">
              <div class="filter-top-main">
                <div class="filter-top-title">
                  <p> Filter </p>
                </div>
                <div class="filter-top-icn">
                  <a href="#"> Clear all <i class="far fa-trash-alt"></i> </a>
                </div>

              </div>

              <div class="widget">
                <div class="widget-title">
                  <h6>Time Range</h6>
                  
                </div>

                <div class="right-filter-content">

                <TimeRangeSlider
                disabled={false}
                format={24}
                maxValue={"23:59"}
                minValue={"00:00"}
                name={"time_range"}
                onChangeStart={this.changeStartHandler}
                onChangeComplete={this.changeCompleteHandler}
                onChange={this.timeChangeHandler}
                step={15}
                value={this.state.value}/>

                  <div className="time-text"> 
                    <p class="pull-left"> 8 am  </p>
                    <p class="pull-right"> 6 pm  </p>
                  </div>

                </div>

              </div>

              <div class="widget">
                <div class="widget-title">
                  <h6>Lavel</h6>
                </div>

                <div class="right-filter-content">
                  <div class="right-text"> <p class="cl-red">All lavel</p> </div>
                  <div class="right-input">  
                    <label class="main-check">
                      <input type="checkbox" checked="checked"/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div class="right-filter-content">
                  <div class="right-text"> <p>Beginer</p> </div>
                  <div class="right-input">  
                    <label class="main-check">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div class="right-filter-content">
                  <div class="right-text"> <p>Intermedite</p> </div>
                  <div class="right-input">  
                    <label class="main-check">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div class="right-filter-content">
                  <div class="right-text"> <p>Advanced</p> </div>
                  <div class="right-input">  
                    <label class="main-check">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
            
              </div>


              <div class="widget">
                <div class="widget-title">
                  <h6>Gender</h6>
                </div>

                <div class="right-filter-content">
                  <div class="right-text"> <p class="cl-red">Male</p> </div>
                  <div class="right-input">  
                    <label class="main-check">
                      <input type="checkbox" checked="checked"/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                
                 </div>

                <div class="right-filter-content">
                  <div class="right-text"> <p>Female</p> </div>
                  <div class="right-input">  
                    <label class="main-check">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  </div>

                <div class="right-filter-content">
                  <div class="right-text"> <p>Mixed</p> </div>
                  <div class="right-input">  
                    <label class="main-check">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              
              </div>

              <div class="widget">
                <div class="widget-title">
                  <h6>Type</h6>
                </div>

                <div class="right-filter-content">
                  <div class="right-text"> <p class="cl-red">Contempory</p> </div>
                  <div class="right-input">  
                    <label class="main-check">
                      <input type="checkbox" checked="checked" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div class="right-filter-content">
                  <div class="right-text"> <p>Baket</p> </div>
                  <div class="right-input">  
                    <label class="main-check">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div class="right-filter-content">
                  <div class="right-text"> <p>Modern</p> </div>
                  <div class="right-input">  
                    <label class="main-check">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              
              </div>

              <div class="widget">
                <div class="widget-title">
                  <h6>Ages</h6>
                </div>

                <div class="right-filter-content">
                  <div class="right-text"> <p>Kids (2-12)</p> </div>
                  <div class="right-input">  
                    <label class="main-check">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div class="right-filter-content">
                  <div class="right-text"> <p>Teens (13-17)</p> </div>
                  <div class="right-input">  
                    <label class="main-check">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div class="right-filter-content">
                  <div class="right-text"> <p class="cl-red">Adult (18+)</p> </div>
                  <div class="right-input">  
                    <label class="main-check">
                      <input type="checkbox"  checked="checked"/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              
              </div>

              <div class="filter-btn-main text-center">
                <button class="btn-filter"> Apply filters</button>
              </div>
    
  
              
            </div>
          </div>

        </div>
              </div>
{/*     
          <div class="tab-pane fade" id="course" role="tabpanel" aria-labelledby="course-tab">
         
          <div class="row">
                <div className="col-md-12">
                <div className="schedule-owl">
                  <OwlCarousel items={7}
                   className="owl-theme nav nav-tabs"
                  
                    margin={5}
                    nav
                  
                    
                >
         
            
            <div class="item show_time_date active" data-toggle="tab" href="#tab9">
         
              <div>
                      <div className="schedule-owl-item">
                        <div class="day"> <h6> TODAY</h6> </div>
                        <div class="date"> <h6> JAN 01</h6> </div>
                      </div>
                    </div>
    
            </div>
    
    
            <div class="item show_time_date" data-toggle="tab" href="#tab10">
         
              <div>
                      <div className="schedule-owl-item">
                        <div class="day"> <h6> MON</h6> </div>
                        <div class="date"> <h6> JAN 02</h6> </div>
                      </div>
                    </div>
    
            </div>
    
    
    
            <div class="item show_time_date" data-toggle="tab" href="#tab11">
         
              <div>
                      <div className="schedule-owl-item">
                        <div class="day"> <h6> TUE</h6> </div>
                        <div class="date"> <h6> JAN 03</h6> </div>
                      </div>
                    </div>
    
            </div>
    
    
            <div class="item show_time_date" data-toggle="tab" href="#tab12">
         
              <div>
                      <div className="schedule-owl-item">
                        <div class="day"> <h6> WED </h6> </div>
                        <div class="date"> <h6> JAN 04</h6> </div>
                      </div>
                    </div>
    
            </div>
    
            <div class="item show_time_date" data-toggle="tab" href="#tab13">
         
              <div>
                      <div className="schedule-owl-item">
                        <div class="day"> <h6> THU</h6> </div>
                        <div class="date"> <h6> JAN 05</h6> </div>
                      </div>
                    </div>
    
            </div>
    
            <div class="item show_time_date" data-toggle="tab" href="#tab14">
         
              <div>
                      <div className="schedule-owl-item">
                        <div class="day"> <h6> FRI</h6> </div>
                        <div class="date"> <h6> JAN 06</h6> </div>
                      </div>
                    </div>
    
            </div>
    
            <div class="item show_time_date" data-toggle="tab" href="#tab15">
         
              <div>
                      <div className="schedule-owl-item">
                        <div class="day"> <h6> SAT</h6> </div>
                        <div class="date"> <h6> JAN 07</h6> </div>
                      </div>
                    </div>
    
            </div>
    
            <div class="item show_time_date" data-toggle="tab" href="#tab16">
         
              <div>
                      <div className="schedule-owl-item">
                        <div class="day"> <h6> SUN </h6> </div>
                        <div class="date"> <h6> JAN 08</h6> </div>
                      </div>
                    </div>
    
            </div>
    
    
                </OwlCarousel>
    
                 </div>  
    
                </div>
              </div>
          
          <div class="row">
          
          <div class="col-lg-12 mt-5 mt-lg-0">
          <div class="tab-content">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="date-row-detail">
              <p><i class="far fa-calendar-alt"></i> Monday Jan 20,21  </p>
            </div>
          </div>  
        </div>
          <div id="tab9" class="tab-pane fade in show active">
            <div class="row">
    
            <div class="col-lg-12 m-auto">
            <div class="blog-post blog-post-quote mb-5 bg-secondary">
             <div class="class-content-img">
                <div class="date-time-box">
                  <h4> 07:30pm </h4>
                </div>
             </div>
    
             <div class="class-content">
            
            <div class="blog-post-title">
              <h6><a class="text-blue" href="#">Demo class</a></h6>
            </div>
          
            <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="far fa-clock"></i> <span>7:30pm to 8:30pm </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> Start date : 20/01/2021 </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> End date : 20/02/2021</span></a></li>
             </ul>
    
            <ul class="list-unstyled mb-0 blog-post-meta">
             <li><a class="text-blue" href="#"><i class="far fa-calendar-alt"></i> By April 5</a></li>
              <li><a class="text-blue" href="#"><i class="far fa-chart-bar"></i> All lavels </a></li>
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
    
            <div class="col-lg-12 m-auto">
            <div class="blog-post blog-post-quote mb-5 bg-secondary">
             <div class="class-content-img">
                <div class="date-time-box">
                  <h4> 07:30pm </h4>
                </div>
             </div>
    
             <div class="class-content">
            
            <div class="blog-post-title">
              <h6><a class="text-blue" href="#">Demo class</a></h6>
            </div>
          
            <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="far fa-clock"></i> <span>7:30pm to 8:30pm </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> Start date : 20/01/2021 </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> End date : 20/02/2021</span></a></li>
             </ul>
    
            <ul class="list-unstyled mb-0 blog-post-meta">
             <li><a class="text-blue" href="#"><i class="far fa-calendar-alt"></i> By April 5</a></li>
              <li><a class="text-blue" href="#"><i class="far fa-chart-bar"></i> All lavels </a></li>
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
    
            <div class="col-lg-12 m-auto">
            <div class="blog-post blog-post-quote mb-5 bg-secondary">
             <div class="class-content-img">
                <div class="date-time-box">
                  <h4> 07:30pm </h4>
                </div>
             </div>
    
             <div class="class-content">
            
            <div class="blog-post-title">
              <h6><a class="text-blue" href="#">Demo class</a></h6>
            </div>
          
            <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="far fa-clock"></i> <span>7:30pm to 8:30pm </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> Start date : 20/01/2021 </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> End date : 20/02/2021</span></a></li>
             </ul>
    
            <ul class="list-unstyled mb-0 blog-post-meta">
             <li><a class="text-blue" href="#"><i class="far fa-calendar-alt"></i> By April 5</a></li>
              <li><a class="text-blue" href="#"><i class="far fa-chart-bar"></i> All lavels </a></li>
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
        
          <div id="tab10" class="tab-pane fade">
            <div className="row">
            <div class="col-lg-12 m-auto">
            <div class="blog-post blog-post-quote mb-5 bg-secondary">
             <div class="class-content-img">
                <div class="date-time-box">
                  <h4> 07:30pm </h4>
                </div>
             </div>
    
             <div class="class-content">
            
            <div class="blog-post-title">
              <h6><a class="text-blue" href="#">Demo class</a></h6>
            </div>
          
            <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="far fa-clock"></i> <span>7:30pm to 8:30pm </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> Start date : 20/01/2021 </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> End date : 20/02/2021</span></a></li>
             </ul>
    
            <ul class="list-unstyled mb-0 blog-post-meta">
             <li><a class="text-blue" href="#"><i class="far fa-calendar-alt"></i> By April 5</a></li>
              <li><a class="text-blue" href="#"><i class="far fa-chart-bar"></i> All lavels </a></li>
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
        
          <div id="tab11" class="tab-pane fade">
          <div className="row">
            <div class="col-lg-12 m-auto">
            <div class="blog-post blog-post-quote mb-5 bg-secondary">
             <div class="class-content-img">
                <div class="date-time-box">
                  <h4> 07:30pm </h4>
                </div>
             </div>
    
             <div class="class-content">
            
            <div class="blog-post-title">
              <h6><a class="text-blue" href="#">Demo class</a></h6>
            </div>
          
            <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="far fa-clock"></i> <span>7:30pm to 8:30pm </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> Start date : 20/01/2021 </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> End date : 20/02/2021</span></a></li>
             </ul>
    
            <ul class="list-unstyled mb-0 blog-post-meta">
             <li><a class="text-blue" href="#"><i class="far fa-calendar-alt"></i> By April 5</a></li>
              <li><a class="text-blue" href="#"><i class="far fa-chart-bar"></i> All lavels </a></li>
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
    
            <div className="row">
            <div class="col-lg-12 m-auto">
            <div class="blog-post blog-post-quote mb-5 bg-secondary">
             <div class="class-content-img">
                <div class="date-time-box">
                  <h4> 07:30pm </h4>
                </div>
             </div>
    
             <div class="class-content">
            
            <div class="blog-post-title">
              <h6><a class="text-blue" href="#">Demo class</a></h6>
            </div>
          
            <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="far fa-clock"></i> <span>7:30pm to 8:30pm </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> Start date : 20/01/2021 </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> End date : 20/02/2021</span></a></li>
             </ul>
    
            <ul class="list-unstyled mb-0 blog-post-meta">
             <li><a class="text-blue" href="#"><i class="far fa-calendar-alt"></i> By April 5</a></li>
              <li><a class="text-blue" href="#"><i class="far fa-chart-bar"></i> All lavels </a></li>
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
    
          <div id="tab12" class="tab-pane fade">
            <div className="row">
            <div class="col-lg-12 m-auto">
            <div class="blog-post blog-post-quote mb-5 bg-secondary">
             <div class="class-content-img">
                <div class="date-time-box">
                  <h4> 07:30pm </h4>
                </div>
             </div>
    
             <div class="class-content">
            
            <div class="blog-post-title">
              <h6><a class="text-blue" href="#">Demo class</a></h6>
            </div>
          
            <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="far fa-clock"></i> <span>7:30pm to 8:30pm </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> Start date : 20/01/2021 </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> End date : 20/02/2021</span></a></li>
             </ul>
    
            <ul class="list-unstyled mb-0 blog-post-meta">
             <li><a class="text-blue" href="#"><i class="far fa-calendar-alt"></i> By April 5</a></li>
              <li><a class="text-blue" href="#"><i class="far fa-chart-bar"></i> All lavels </a></li>
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
    
          <div id="tab13" class="tab-pane fade">
            <div className="row">
            <div class="col-lg-12 m-auto">
            <div class="blog-post blog-post-quote mb-5 bg-secondary">
             <div class="class-content-img">
                <div class="date-time-box">
                  <h4> 07:30pm </h4>
                </div>
             </div>
    
             <div class="class-content">
            
            <div class="blog-post-title">
              <h6><a class="text-blue" href="#">Demo class</a></h6>
            </div>
          
            <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="far fa-clock"></i> <span>7:30pm to 8:30pm </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> Start date : 20/01/2021 </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> End date : 20/02/2021</span></a></li>
             </ul>
    
            <ul class="list-unstyled mb-0 blog-post-meta">
             <li><a class="text-blue" href="#"><i class="far fa-calendar-alt"></i> By April 5</a></li>
              <li><a class="text-blue" href="#"><i class="far fa-chart-bar"></i> All lavels </a></li>
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
        
    
          <div id="tab14" class="tab-pane fade">
            <div className="row">
            <div class="col-lg-12 m-auto">
            <div class="blog-post blog-post-quote mb-5 bg-secondary">
             <div class="class-content-img">
                <div class="date-time-box">
                  <h4> 07:30pm </h4>
                </div>
             </div>
    
             <div class="class-content">
            
            <div class="blog-post-title">
              <h6><a class="text-blue" href="#">Demo class</a></h6>
            </div>
          
            <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="far fa-clock"></i> <span>7:30pm to 8:30pm </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> Start date : 20/01/2021 </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> End date : 20/02/2021</span></a></li>
             </ul>
    
            <ul class="list-unstyled mb-0 blog-post-meta">
             <li><a class="text-blue" href="#"><i class="far fa-calendar-alt"></i> By April 5</a></li>
              <li><a class="text-blue" href="#"><i class="far fa-chart-bar"></i> All lavels </a></li>
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
        
          <div id="tab15" class="tab-pane fade">
            <div className="row">
            <div class="col-lg-9 m-auto">
            <div class="blog-post blog-post-quote mb-5 bg-secondary">
             <div class="class-content-img">
                <div class="date-time-box">
                  <h4> 07:30pm </h4>
                </div>
             </div>
    
             <div class="class-content">
            
            <div class="blog-post-title">
              <h6><a class="text-blue" href="#">Demo class</a></h6>
            </div>
          
            <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="far fa-clock"></i> <span>7:30pm to 8:30pm </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> Start date : 20/01/2021 </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> End date : 20/02/2021</span></a></li>
             </ul>
    
            <ul class="list-unstyled mb-0 blog-post-meta">
             <li><a class="text-blue" href="#"><i class="far fa-calendar-alt"></i> By April 5</a></li>
              <li><a class="text-blue" href="#"><i class="far fa-chart-bar"></i> All lavels </a></li>
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
        
          <div id="tab16" class="tab-pane fade">
            <div className="row">
            <div class="col-lg-12 m-auto">
            <div class="blog-post blog-post-quote mb-5 bg-secondary">
             <div class="class-content-img">
                <div class="date-time-box">
                  <h4> 07:30pm </h4>
                </div>
             </div>
    
             <div class="class-content">
            
            <div class="blog-post-title">
              <h6><a class="text-blue" href="#">Demo class</a></h6>
            </div>
          
            <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="far fa-clock"></i> <span>7:30pm to 8:30pm </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> Start date : 20/01/2021 </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> End date : 20/02/2021</span></a></li>
             </ul>
    
            <ul class="list-unstyled mb-0 blog-post-meta">
             <li><a class="text-blue" href="#"><i class="far fa-calendar-alt"></i> By April 5</a></li>
              <li><a class="text-blue" href="#"><i class="far fa-chart-bar"></i> All lavels </a></li>
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
        
        <div id="tab17" class="tab-pane fade">
            <div className="row">
            <div class="col-lg-12 m-auto">
            <div class="blog-post blog-post-quote mb-5 bg-secondary">
             <div class="class-content-img">
                <div class="date-time-box">
                  <h4> 07:30pm </h4>
                </div>
             </div>
    
             <div class="class-content">
            
            <div class="blog-post-title">
              <h6><a class="text-blue" href="#">Demo class</a></h6>
            </div>
          
            <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> <span>7:30pm to 8:30pm </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="fa fa-hourglass-end" aria-hidden="true"></i> Start date : 20/01/2021 </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="fa fa-hourglass-end" aria-hidden="true"></i> End date : 20/02/2021</span></a></li>
             </ul>
    
            <ul class="list-unstyled mb-0 blog-post-meta">
             <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> By April 5</a></li>
              <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> All lavels </a></li>
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
        
        <div id="tab18" class="tab-pane fade">
            <div className="row">
            <div class="col-lg-12 m-auto">
            <div class="blog-post blog-post-quote mb-5 bg-secondary">
             <div class="class-content-img">
                <div class="date-time-box">
                  <h4> 07:30pm </h4>
                </div>
             </div>
    
             <div class="class-content">
            
            <div class="blog-post-title">
              <h6><a class="text-blue" href="#">Demo class</a></h6>
            </div>
          
            <ul class="list-unstyled mb-0 blog-post-meta">
            <li><a class="text-blue" href="#"><i class="far fa-clock"></i> <span>7:30pm to 8:30pm </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> Start date : 20/01/2021 </span></a></li>
              <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> End date : 20/02/2021</span></a></li>
             </ul>
    
            <ul class="list-unstyled mb-0 blog-post-meta">
             <li><a class="text-blue" href="#"><i class="far fa-calendar-alt"></i> By April 5</a></li>
              <li><a class="text-blue" href="#"><i class="far fa-chart-bar"></i> All lavels </a></li>
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
        </div>
              </div>
     */}
              </div>
           
    
    </div>
    
    </div>
    
      </div>
    </section>
    
    
    
          
    
           
      
            
          </div>
        </div>
    
    </section>
    
    
    
    
    
    
        </>
  );
}
}


export default Classes;




















// import React, { useState, useEffect }  from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import { render} from 'react-dom';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css'; 
// import Menu from './Menu';
// import TimeRangeSlider from 'react-time-range-slider';
// // var TimeRangeSlider = require('react-time-range-slider')
// import Cookies from 'universal-cookie';

// function Classes() {
// class Schedule extends React.Component{
  
//   constructor(props) {
//     super(props);
//     this.featureRef = React.createRef();
//     this.changeStartHandler = this.changeStartHandler.bind(this);
//     this.timeChangeHandler = this.timeChangeHandler.bind(this);
//     this.changeCompleteHandler = this.changeCompleteHandler.bind(this);
//     this.state = {
//         value: {
//             start: "00:00",
//             end: "23:59"
//         }
//     }
//   }

// changeStartHandler(time){
//     console.log("Start Handler Called", time);
// }

// timeChangeHandler(time){
//     this.setState({
//         value: time
//     });
// }

// changeCompleteHandler(time){
//     console.log("Complete Handler Called", time);
// }


// }

// const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
// "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// var date = new Date();

// var today = monthNames[date.getMonth()] + ' ' + date.getDate();
// const currDate = today;
// const currDay = days[date.getDay()]

// date.setDate(date.getDate() + 1);

// var tomm = monthNames[date.getMonth()] + ' ' + date.getDate()
// const tommday = days[date.getDay()];

// date.setDate(date.getDate() + 1);

// var third = monthNames[date.getMonth()] + ' ' + date.getDate()
// const thirdday = days[date.getDay()];

// date.setDate(date.getDate() + 1);

// var fourth = monthNames[date.getMonth()] + ' ' + date.getDate()
// const fourthday = days[date.getDay()];

// date.setDate(date.getDate() + 1);

// var five = monthNames[date.getMonth()] + ' ' + date.getDate()
// const fiveday = days[date.getDay()];

// date.setDate(date.getDate() + 1);

// var six = monthNames[date.getMonth()] + ' ' + date.getDate()
// const sixday = days[date.getDay()];

// date.setDate(date.getDate() + 1);

// var seven = monthNames[date.getMonth()] + ' ' + date.getDate()
// const sevenday = days[date.getDay()];

// date.setDate(date.getDate() + 1);

// var eight = monthNames[date.getMonth()] + ' ' + date.getDate()
// const eightday = days[date.getDay()];

// date.setDate(date.getDate() + 1);

// var nine = monthNames[date.getMonth()] + ' ' + date.getDate()
// const nineday = days[date.getDay()];

// date.setDate(date.getDate() + 1);

// var ten = monthNames[date.getMonth()] + ' ' + date.getDate()
// const tenday = days[date.getDay()];

// date.setDate(date.getDate() + 1);

// var elven = monthNames[date.getMonth()] + ' ' + date.getDate()
// const elevenday = days[date.getDay()];

// date.setDate(date.getDate() + 1);

// var twlve = monthNames[date.getMonth()] + ' ' + date.getDate()
// const twlveday = days[date.getDay()];

// date.setDate(date.getDate() + 1);

// var thirteen = monthNames[date.getMonth()] + ' ' + date.getDate()
// const thirteenday = days[date.getDay()];

// date.setDate(date.getDate() + 1);

// var foutteen = monthNames[date.getMonth()] + ' ' + date.getDate()
// const foutteenday = days[date.getDay()];

// date.setDate(date.getDate() + 1);

// var fifteen = monthNames[date.getMonth()] + ' ' + date.getDate()
// const fifteenday = days[date.getDay()];


// var mon = new Date();

// var currmonth = monthNames[mon.getMonth()];
// const curryear = mon.getFullYear();

// mon.setDate(mon.getDate() + 30);

// var secondmonth = monthNames[mon.getMonth()];
// const secondyear = mon.getFullYear();

// mon.setDate(mon.getDate() + 30);

// var thirdmonth = monthNames[mon.getMonth()];
// const thirdyear = mon.getFullYear();

// mon.setDate(mon.getDate() + 30);

// var fourmonth = monthNames[mon.getMonth()];
// const fouryear = mon.getFullYear();

// mon.setDate(mon.getDate() + 30);

// var fivemonth = monthNames[mon.getMonth()];
// const fiveyear = mon.getFullYear();

// mon.setDate(mon.getDate() + 30);

// var sixmonth = monthNames[mon.getMonth()];
// const sixyear = mon.getFullYear();

// mon.setDate(mon.getDate() + 30);

// var sevenmonth = monthNames[mon.getMonth()];
// const sevenyear = mon.getFullYear();

// mon.setDate(mon.getDate() + 30);

// var eightmonth = monthNames[mon.getMonth()];
// const eightyear = mon.getFullYear();

// mon.setDate(mon.getDate() + 30);

// var ninemonth = monthNames[mon.getMonth()];
// const nineyear = mon.getFullYear();

// mon.setDate(mon.getDate() + 30);

// var tenmonth = monthNames[mon.getMonth()];
// const tenyear = mon.getFullYear();

// mon.setDate(mon.getDate() + 30);

// var elevenmonth = monthNames[mon.getMonth()];
// const elevenyear = mon.getFullYear();

// mon.setDate(mon.getDate() + 30);

// var twlevemonth = monthNames[mon.getMonth()];
// const twleveyear = mon.getFullYear();


// const axios = require('axios');
// const cookies = new Cookies();
// const [classes, getclasses] = useState([])
// const [courses, getcourses] = useState([])

// useEffect(() => {
// axios
//   .get('http://127.0.0.1:8000/gymprofile/classes')
//   .then(res => {
//     console.log(res)
//     console.log(cookies.get('email'));
//     getclasses(res.data)
//   })
//   .catch(err => {
//     // console.log(err)
//   })
// }, [])


// async function Bookclass(data) {
//   debugger
//   console.log(data)
//   var user_uuid = cookies.get('uuid');
//   var class_uuid = data.uuid;
  
//   {  
//       console.log('Trying to send request');
//       // e.preventDefault();
//       try {
//           let res = await axios.post('http://127.0.0.1:8000/user/bookclass/list/', {
//             user_uuid:user_uuid,
//             class_uuid:class_uuid
//           })
          
//           if (res.status === 201) {
            
//               // test for status you want, etc
//               console.log(res.status);
//               console.log(res.data);
//               // alert(res.data.message);

//               window.location='/login';
             

//           }
//           // Don't forget to return something
//           return res.data
//       }
//       catch (err) {
//           console.error('Signup Failed , Please try again.');
//           window.location='/register'
//           alert(err)
//       }
//   }
// }

// async function logout(){
//   debugger
//   cookies.remove("uuid");
//   cookies.remove("email");
  
//   window.location ="/login"
// }
// var email = cookies.get('email')

// return (
//   <>
 
  
//   <header class="top-bar">
//     <div className="gym-title-main">
//         <div className="header-gym-title">
//           <h5> Haraka center for movment arts  </h5> 
//         </div>

//           <div className="header-gym-btn-main">
//             <button className="btn-gym-1"> CP </button>
//           </div>

//           <div className="header-gym-btn-main-2">
//              <button className="btn-gym-2"> PG </button>
//           </div>

//           <div className="header-gym-btn-main-3">

//              <button className="btn-gym-3"> DE </button>
//           </div>
//     </div>

//     <div className="menu-icn-main">
//       <ul>
//         <li> <a href="#">{email}</a> </li>
//         <li> <a href="#"> <span> ENG </span></a> </li>
//         <li> <a href="#"> <i class="fas fa-cog"></i> </a> </li>
//         <li> <a href="#"><i class="far fa-bell"></i> </a> </li>
//       </ul>
//     </div>
//   </header>

//   <section className="left-bar-main">

//           <div class="sidebar-content">

//             <div className="side-bar-logo">
//               <h4>Business Logo</h4>
//             </div>

//             <div className="side-menu-list">
//               <ul>
//                 <li className="dash-menu"> <a href="/dashboard"><i class="fas fa-tachometer-alt"></i>Dashboard</a></li>
//                 <li className="side-menu-active"><a href="#"><i class="fas fa-compass"></i> Explore </a> </li>
//                 <li className=""> <a href="/schedule"> <i class="far fa-calendar-alt"></i> My Schedule </a> </li>
//                 <li className=""> <a href="/plans"><i class="fas fa-columns"></i> Plans & Packages </a> </li>
//                 <li className=""> <a href="#"> <i class="fas fa-user-alt"></i> Profile </a> </li>
//               </ul>

//               <div className="logout-main">
//                 <a href="/login" onClick={() => logout()} ><i class="fas fa-sign-out-alt"></i> Logout </a>
//               </div>
//             </div>
                
            
//           </div>

//   </section>
  
//   <section class="bg-holder right-side" >
    
//       <div class="row">
        
//         <div class="col-12">             
            
//       <section class="tb-class-section">
//       <div class="container">
//       <div class="row">
//         <div class="col-md-12 ">

         

//             <div class="class-tabs-main">
//               <ul class="nav nav-tabs nav-pills class" id="pills-tab" role="tablist">
              
//               <li class="nav-item text-center">
//                 <a class="nav-link active" id="class-tab" data-toggle="pill" href="#class" role="tab" aria-controls="class" aria-selected="false"><span>  Classes </span></a>
//               </li>
      
//               <li class="nav-item text-center">
//                 <a class="nav-link" id="course-tab" data-toggle="pill" href="#course" role="tab" aria-controls="course" aria-selected="false">  <span> Courses </span></a>
//               </li>
      
//             </ul>

            
//               </div>
//             </div> 
//         </div>
//         </div>
//       </section>   
      
      
//       <section class="tab-class-section bg-silver">
        
//         <div class="container">        
//         <div class="row">
            
//         <div class="col-lg-12 ">
          
//           <div class="tab-content" id="pills-tabContent">
         
          
//             <div class="tab-pane fade show active" id="class" role="tabpanel" aria-labelledby="class-tab">
            
            
//             <div class="row">
//               <div className="col-md-12">
//               <div className="schedule-owl">
//                 <OwlCarousel items={7}
//                  className="owl-theme nav nav-tabs"
                
//                   margin={5}
//                   nav
                
                  
//               >
       

//         <div class="item show_time_date active" data-toggle="tab" href="#tab1">
//           <div>
//             <div className="schedule-owl-item">
//               <div class="day"> <h6> TODAY</h6> </div>
//               <div class="date"> <h6> {currDate}</h6> </div>
//             </div>
//           </div>
//         </div>

//         <div class="item show_time_date" data-toggle="tab" href="#tab2">

//         <div>
//           <div className="schedule-owl-item">
//             <div class="day"> <h6> {tommday}</h6> </div>
//             <div class="date"> <h6> {tomm}</h6> </div>
//           </div>
//         </div>

//         </div>

//         <div class="item show_time_date" data-toggle="tab" href="#tab3">

//         <div>
//           <div className="schedule-owl-item">
//             <div class="day"> <h6> {thirdday}</h6> </div>
//             <div class="date"> <h6> {third}</h6> </div>
//           </div>
//         </div>

//         </div>

//         <div class="item show_time_date" data-toggle="tab" href="#tab4">

//         <div>
//           <div className="schedule-owl-item">
//             <div class="day"> <h6> {fourthday} </h6> </div>
//             <div class="date"> <h6> {fourth}</h6> </div>
//           </div>
//         </div>

//         </div>

//         <div class="item show_time_date" data-toggle="tab" href="#tab5">

//         <div>
//           <div className="schedule-owl-item">
//             <div class="day"> <h6> {fiveday}</h6> </div>
//             <div class="date"> <h6> {five}</h6> </div>
//           </div>
//         </div>

//         </div>

//         <div class="item show_time_date" data-toggle="tab" href="#tab6">

//         <div>
//           <div className="schedule-owl-item">
//             <div class="day"> <h6> {sixday}</h6> </div>
//             <div class="date"> <h6> {six}</h6> </div>
//           </div>
//         </div>

//         </div>

//         <div class="item show_time_date" data-toggle="tab" href="#tab7">

//         <div>
//           <div className="schedule-owl-item">
//             <div class="day"> <h6> {sevenday}</h6> </div>
//             <div class="date"> <h6> {seven}</h6> </div>
//           </div>
//         </div>

//         </div>

//         <div class="item show_time_date" data-toggle="tab" href="#tab8">

//         <div>
//           <div className="schedule-owl-item">
//             <div class="day"> <h6> {eightday}</h6> </div>
//             <div class="date"> <h6> {eight}</h6> </div>
//           </div>
//         </div>

//         </div>

//         <div class="item show_time_date" data-toggle="tab" href="#tab9">

//         <div>
//           <div className="schedule-owl-item">
//             <div class="day"> <h6> {nineday}</h6> </div>
//             <div class="date"> <h6> {nine}</h6> </div>
//           </div>
//         </div>

//         </div>

//         <div class="item show_time_date" data-toggle="tab" href="#tab10">

//         <div>
//           <div className="schedule-owl-item">
//             <div class="day"> <h6> {tenday}</h6> </div>
//             <div class="date"> <h6> {ten}</h6> </div>
//           </div>
//         </div>

//         </div>

//         <div class="item show_time_date" data-toggle="tab" href="#tab11">

//         <div>
//           <div className="schedule-owl-item">
//             <div class="day"> <h6> {elevenday}</h6> </div>
//             <div class="date"> <h6> {elven}</h6> </div>
//           </div>
//         </div>

//         </div>

//         <div class="item show_time_date" data-toggle="tab" href="#tab12">

//         <div>
//           <div className="schedule-owl-item">
//             <div class="day"> <h6> {twlveday}</h6> </div>
//             <div class="date"> <h6> {twlve}</h6> </div>
//           </div>
//         </div>

//         </div>

//         <div class="item show_time_date" data-toggle="tab" href="#tab13">

//         <div>
//           <div className="schedule-owl-item">
//             <div class="day"> <h6> {thirteenday}</h6> </div>
//             <div class="date"> <h6> {thirteen}</h6> </div>
//           </div>
//         </div>

//         </div>

//         <div class="item show_time_date" data-toggle="tab" href="#tab14">

//         <div>
//           <div className="schedule-owl-item">
//             <div class="day"> <h6> {foutteenday}</h6> </div>
//             <div class="date"> <h6> {foutteen}</h6> </div>
//           </div>
//         </div>

//         </div>

//         <div class="item show_time_date" data-toggle="tab" href="#tab15">

//         <div>
//           <div className="schedule-owl-item">
//             <div class="day"> <h6> {fifteenday}</h6> </div>
//             <div class="date"> <h6> {fifteen}</h6> </div>
//           </div>
//         </div>

//         </div>


// </OwlCarousel>
  
//                </div>  
  
//               </div>
//             </div>
           
           
//             <div class="row">
 

//         <div class="col-lg-9 mt-5 mt-lg-0">
//         <div class="tab-content mr-top-70">
        
//             <div id="tab1" class="tab-pane fade in show active">
            
//                   <div class="col-lg-12">
//                   <div class="blog-post blog-post-quote mb-5 bg-secondary">
//                   <div class="row">

//                   <div className="col-md-2 pd-r-0">
//                     <div class="class-content-img">
//                       <img src={'http://127.0.0.1:8000' + data.class_image} />
//                     </div>
//                   </div>


//                     <div className="col-md-2 pd-r-0">
//                     <div className="all-lavels">
//                         <p>{data.start_time} </p>
//                         <p> <span> {data.duration} hours </span> </p>
//                       </div>
                  
//                     </div>


//                     <div className="col-md-2 pd-r-0">
//                       <div className="all-lavels">
//                         <p> {data.level} </p>
//                         {/* <p> <span> Female (18+) </span> </p> */}
//                       </div>

//                     </div>

//                     <div className="col-md-2 pd-r-0">
//                       <div className="all-lavels">
//                         <p> {data.class_topic}  </p>
//                         <p> <span> {data.class_description} </span> </p>
//                         <p className="two-seat-text"> {data.no_of_participants} Seats Available </p>
//                       </div>

//                     </div>

//                     <div className="col-md-2 pd-r-0">
                    
//                     <div class="add-listing d-none d-sm-block class-book-btn more-info">
//                       <a class="m-info" href="our-trainers.html">
//                       More info
//                       </a>
//                     </div>
//                       </div>

//                     <div className="col-md-2 pd-r-0">
                      
//                     <div class="add-listing d-none d-sm-block class-book-btn">
//                     <a class="btn btn-primary btn-skew btn-md shape-svg " onClick={() => Bookclass(data)}>
//                       <span>Book</span>
//                     </a>
//                   </div>
//                     </div>

//                     </div>
//                   </div> 
//                   </div>
               
//               </div>
          
//             </div>
  
  
//               <div id="tab2" class="tab-pane fade">
//               {classes.map(data => (
//               <div class="row">
//             {(() => {

//               return data.class_scheduled_on.map(sch => {
//                 if (sch[0].day === tommday) {
//                   return(
//                   <div class="col-lg-12">
//                   <div class="blog-post blog-post-quote mb-5 bg-secondary">
//                   <div class="row">

//                   <div className="col-md-2 pd-r-0">
//                     <div class="class-content-img">
//                       <img src={'http://127.0.0.1:8000' + data.class_image} />
//                     </div>
//                   </div>


//                     <div className="col-md-2 pd-r-0">
//                     <div className="all-lavels">
//                         <p>{data.start_time} </p>
//                         <p> <span> {data.duration} hours </span> </p>
//                       </div>
                  
//                     </div>


//                     <div className="col-md-2 pd-r-0">
//                       <div className="all-lavels">
//                         <p> {data.level} </p>
//                         {/* <p> <span> Female (18+) </span> </p> */}
//                       </div>

//                     </div>

//                     <div className="col-md-2 pd-r-0">
//                       <div className="all-lavels">
//                         <p> {data.class_topic}  </p>
//                         <p> <span> {data.class_description} </span> </p>
//                         <p className="two-seat-text"> {data.no_of_participants} Seats Available </p>
//                       </div>

//                     </div>

//                     <div className="col-md-2 pd-r-0">
                    
//                     <div class="add-listing d-none d-sm-block class-book-btn more-info">
//                       <a class="m-info" href="our-trainers.html">
//                       More info
//                       </a>
//                     </div>
//                       </div>

//                     <div className="col-md-2 pd-r-0">
                      
//                     <div class="add-listing d-none d-sm-block class-book-btn">
//                     <a class="btn btn-primary btn-skew btn-md shape-svg " onClick={() => Bookclass(data)}>
//                       <span>Book</span>
//                     </a>
//                   </div>
//                     </div>

//                     </div>
//                   </div> 
//                   </div>)
//                 }
//                 else {
//                   // // console.log("No match");
//                 }
//               })
//             })()}
//               </div>
//             ))}</div>
  
//               <div id="tab3" class="tab-pane fade">
//               {classes.map(data => (
//               <div class="row">
//             {(() => {

//               return data.class_scheduled_on.map(sch => {
//                 if (sch[0].day === thirdday) {
//                   return(
//                   <div class="col-lg-12">
//                   <div class="blog-post blog-post-quote mb-5 bg-secondary">
//                   <div class="row">

//                   <div className="col-md-2 pd-r-0">
//                     <div class="class-content-img">
//                       <img src={'http://127.0.0.1:8000' + data.class_image} />
//                     </div>
//                   </div>


//                     <div className="col-md-2 pd-r-0">
//                     <div className="all-lavels">
//                         <p>{data.start_time} </p>
//                         <p> <span> {data.duration} hours </span> </p>
//                       </div>
                  
//                     </div>


//                     <div className="col-md-2 pd-r-0">
//                       <div className="all-lavels">
//                         <p> {data.level} </p>
//                         {/* <p> <span> Female (18+) </span> </p> */}
//                       </div>

//                     </div>

//                     <div className="col-md-2 pd-r-0">
//                       <div className="all-lavels">
//                         <p> {data.class_topic}  </p>
//                         <p> <span> {data.class_description} </span> </p>
//                         <p className="two-seat-text"> {data.no_of_participants} Seats Available </p>
//                       </div>

//                     </div>

//                     <div className="col-md-2 pd-r-0">
                    
//                     <div class="add-listing d-none d-sm-block class-book-btn more-info">
//                       <a class="m-info" href="our-trainers.html">
//                       More info
//                       </a>
//                     </div>
//                       </div>

//                     <div className="col-md-2 pd-r-0">
                      
//                     <div class="add-listing d-none d-sm-block class-book-btn">
//                     <a class="btn btn-primary btn-skew btn-md shape-svg " onClick={() => Bookclass(data)}>
//                       <span>Book</span>
//                     </a>
//                   </div>
//                     </div>

//                     </div>
//                   </div> 
//                   </div>)
//                 }
//                 else {
//                   // // console.log("No match");
//                 }
//               })
//             })()}
//               </div>
//             ))}</div>
  
//               <div id="tab4" class="tab-pane fade">
//               <div class="row">
  
//               <div class="col-lg-12">
//         <div class="blog-post blog-post-quote mb-5 bg-secondary">
//         <div class="row">

//         <div className="col-md-2 pd-r-0">
//           <div class="class-content-img">
//              <img src="assets/images/class.jpg" />
//           </div>
//         </div>


//           <div className="col-md-2 pd-r-0">
//           <div className="all-lavels">
//               <p>09:00 am </p>
//               <p> <span> (60 min) </span> </p>
//             </div>
         
//           </div>


//           <div className="col-md-2 pd-r-0">
//             <div className="all-lavels">
//               <p> All Lavels </p>
//               <p> <span> Female (18+) </span> </p>
//             </div>

//           </div>

//           <div className="col-md-2 pd-r-0">
//             <div className="all-lavels">
//               <p> Pilatesanada  </p>
//               <p> <span> Lorem ipsum dollar </span> </p>
//               <p className="two-seat-text"> 2 Seats Available </p>
//             </div>

//           </div>

//            <div className="col-md-2 pd-r-0">
          
//           <div class="add-listing d-none d-sm-block class-book-btn more-info">
//             <a class="m-info" href="our-trainers.html">
//              More info
//             </a>
//           </div>
//             </div>

//           <div className="col-md-2 pd-r-0">
            
//           <div class="add-listing d-none d-sm-block class-book-btn">
//           <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
//             <span>Book</span>
//           </a>
//         </div>
//           </div>

//           </div>
//         </div> 
//         </div>
  
//               </div>
//               </div>
  
//               <div id="tab5" class="tab-pane fade">
//               <div class="row">
  
//               <div class="col-lg-12">
//         <div class="blog-post blog-post-quote mb-5 bg-secondary">
//         <div class="row">

//         <div className="col-md-2 pd-r-0">
//           <div class="class-content-img">
//              <img src="assets/images/class.jpg" />
//           </div>
//         </div>


//           <div className="col-md-2 pd-r-0">
//           <div className="all-lavels">
//               <p>09:00 am </p>
//               <p> <span> (60 min) </span> </p>
//             </div>
         
//           </div>


//           <div className="col-md-2 pd-r-0">
//             <div className="all-lavels">
//               <p> All Lavels </p>
//               <p> <span> Female (18+) </span> </p>
//             </div>

//           </div>

//           <div className="col-md-2 pd-r-0">
//             <div className="all-lavels">
//               <p> Pilatesanada  </p>
//               <p> <span> Lorem ipsum dollar </span> </p>
//               <p className="two-seat-text"> 2 Seats Available </p>
//             </div>

//           </div>

//            <div className="col-md-2 pd-r-0">
          
//           <div class="add-listing d-none d-sm-block class-book-btn more-info">
//             <a class="m-info" href="our-trainers.html">
//              More info
//             </a>
//           </div>
//             </div>

//           <div className="col-md-2 pd-r-0">
            
//           <div class="add-listing d-none d-sm-block class-book-btn">
//           <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
//             <span>Book</span>
//           </a>
//         </div>
//           </div>

//           </div>
//         </div> 
//         </div>
  
//                 </div>
//               </div>
  
//               <div id="tab6" class="tab-pane fade">
//               <div class="row">
  
//               <div class="col-lg-12">
//         <div class="blog-post blog-post-quote mb-5 bg-secondary">
//         <div class="row">

//         <div className="col-md-2 pd-r-0">
//           <div class="class-content-img">
//              <img src="assets/images/class.jpg" />
//           </div>
//         </div>


//           <div className="col-md-2 pd-r-0">
//           <div className="all-lavels">
//               <p>09:00 am </p>
//               <p> <span> (60 min) </span> </p>
//             </div>
         
//           </div>


//           <div className="col-md-2 pd-r-0">
//             <div className="all-lavels">
//               <p> All Lavels </p>
//               <p> <span> Female (18+) </span> </p>
//             </div>

//           </div>

//           <div className="col-md-2 pd-r-0">
//             <div className="all-lavels">
//               <p> Pilatesanada  </p>
//               <p> <span> Lorem ipsum dollar </span> </p>
//               <p className="two-seat-text"> 2 Seats Available </p>
//             </div>

//           </div>

//            <div className="col-md-2 pd-r-0">
          
//           <div class="add-listing d-none d-sm-block class-book-btn more-info">
//             <a class="m-info" href="our-trainers.html">
//              More info
//             </a>
//           </div>
//             </div>

//           <div className="col-md-2 pd-r-0">
            
//           <div class="add-listing d-none d-sm-block class-book-btn">
//           <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
//             <span>Book</span>
//           </a>
//         </div>
//           </div>

//           </div>
//         </div> 
//         </div>
  
//                 </div>
//               </div>
  
//               <div id="tab7" class="tab-pane fade">
//               <div class="row">
  
//               <div class="col-lg-12">
//         <div class="blog-post blog-post-quote mb-5 bg-secondary">
//         <div class="row">

//         <div className="col-md-2 pd-r-0">
//           <div class="class-content-img">
//              <img src="assets/images/class.jpg" />
//           </div>
//         </div>


//           <div className="col-md-2 pd-r-0">
//           <div className="all-lavels">
//               <p>09:00 am </p>
//               <p> <span> (60 min) </span> </p>
//             </div>
         
//           </div>


//           <div className="col-md-2 pd-r-0">
//             <div className="all-lavels">
//               <p> All Lavels </p>
//               <p> <span> Female (18+) </span> </p>
//             </div>

//           </div>

//           <div className="col-md-2 pd-r-0">
//             <div className="all-lavels">
//               <p> Pilatesanada  </p>
//               <p> <span> Lorem ipsum dollar </span> </p>
//               <p className="two-seat-text"> 2 Seats Available </p>
//             </div>

//           </div>

//            <div className="col-md-2 pd-r-0">
          
//           <div class="add-listing d-none d-sm-block class-book-btn more-info">
//             <a class="m-info" href="our-trainers.html">
//              More info
//             </a>
//           </div>
//             </div>

//           <div className="col-md-2 pd-r-0">
            
//           <div class="add-listing d-none d-sm-block class-book-btn">
//           <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
//             <span>Book</span>
//           </a>
//         </div>
//           </div>

//           </div>
//         </div> 
//         </div>
  
//               </div>
//               </div>
  
//               <div id="tab8" class="tab-pane fade">
              
//               <div class="row">
  
//               <div class="col-lg-12">
//         <div class="blog-post blog-post-quote mb-5 bg-secondary">
//         <div class="row">

//         <div className="col-md-2 pd-r-0">
//           <div class="class-content-img">
//              <img src="assets/images/class.jpg" />
//           </div>
//         </div>


//           <div className="col-md-2 pd-r-0">
//           <div className="all-lavels">
//               <p>09:00 am </p>
//               <p> <span> (60 min) </span> </p>
//             </div>
         
//           </div>


//           <div className="col-md-2 pd-r-0">
//             <div className="all-lavels">
//               <p> All Lavels </p>
//               <p> <span> Female (18+) </span> </p>
//             </div>

//           </div>

//           <div className="col-md-2 pd-r-0">
//             <div className="all-lavels">
//               <p> Pilatesanada  </p>
//               <p> <span> Lorem ipsum dollar </span> </p>
//               <p className="two-seat-text"> 2 Seats Available </p>
//             </div>

//           </div>

//            <div className="col-md-2 pd-r-0">
          
//           <div class="add-listing d-none d-sm-block class-book-btn more-info">
//             <a class="m-info" href="our-trainers.html">
//              More info
//             </a>
//           </div>
//             </div>

//           <div className="col-md-2 pd-r-0">
            
//           <div class="add-listing d-none d-sm-block class-book-btn">
//           <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
//             <span>Book</span>
//           </a>
//         </div>
//           </div>

//           </div>
//         </div> 
//         </div>
  
//                 </div>
//               </div>
  
  
  
//             </div>
  
//           </div>
        

//           <div class="col-lg-3 ">
//           <div class="shop-sidebar">
//             <div class="filter-top-main">
//               <div class="filter-top-title">
//                 <p> Filter </p>
//               </div>
//               <div class="filter-top-icn">
//                 <a href="#"> Clear all <i class="far fa-trash-alt"></i> </a>
//               </div>

//             </div>

//             <div class="widget">
//               <div class="widget-title">
//                 <h6>Time Range</h6>
                
//               </div>

//               <div class="right-filter-content">

//               {/* <TimeRangeSlider
//               disabled={false}
//               format={24}
//               maxValue={"23:59"}
//               minValue={"00:00"}
//               name={"time_range"}
//               onChangeStart={this.changeStartHandler}
//               onChangeComplete={this.changeCompleteHandler}
//               onChange={this.timeChangeHandler}
//               step={15}
//               value={this.state.value}/> */}

//                 <div className="time-text"> 
//                   <p class="pull-left"> 8 am  </p>
//                   <p class="pull-right"> 6 pm  </p>
//                 </div>

//               </div>

//             </div>

//             <div class="widget">
//               <div class="widget-title">
//                 <h6>Lavel</h6>
//               </div>

//               <div class="right-filter-content">
//                 <div class="right-text"> <p class="cl-red">All lavel</p> </div>
//                 <div class="right-input">  
//                   <label class="main-check">
//                     <input type="checkbox" checked="checked"/>
//                     <span class="checkmark"></span>
//                   </label>
//                 </div>
//               </div>

//               <div class="right-filter-content">
//                 <div class="right-text"> <p>Beginer</p> </div>
//                 <div class="right-input">  
//                   <label class="main-check">
//                     <input type="checkbox" />
//                     <span class="checkmark"></span>
//                   </label>
//                 </div>
//               </div>
//               <div class="right-filter-content">
//                 <div class="right-text"> <p>Intermedite</p> </div>
//                 <div class="right-input">  
//                   <label class="main-check">
//                     <input type="checkbox" />
//                     <span class="checkmark"></span>
//                   </label>
//                 </div>
//               </div>
//               <div class="right-filter-content">
//                 <div class="right-text"> <p>Advanced</p> </div>
//                 <div class="right-input">  
//                   <label class="main-check">
//                     <input type="checkbox" />
//                     <span class="checkmark"></span>
//                   </label>
//                 </div>
//               </div>
          
//             </div>


//             <div class="widget">
//               <div class="widget-title">
//                 <h6>Gender</h6>
//               </div>

//               <div class="right-filter-content">
//                 <div class="right-text"> <p class="cl-red">Male</p> </div>
//                 <div class="right-input">  
//                   <label class="main-check">
//                     <input type="checkbox" checked="checked"/>
//                     <span class="checkmark"></span>
//                   </label>
//                 </div>
              
//                </div>

//               <div class="right-filter-content">
//                 <div class="right-text"> <p>Female</p> </div>
//                 <div class="right-input">  
//                   <label class="main-check">
//                     <input type="checkbox" />
//                     <span class="checkmark"></span>
//                   </label>
//                 </div>
//                 </div>

//               <div class="right-filter-content">
//                 <div class="right-text"> <p>Mixed</p> </div>
//                 <div class="right-input">  
//                   <label class="main-check">
//                     <input type="checkbox" />
//                     <span class="checkmark"></span>
//                   </label>
//                 </div>
//               </div>
            
//             </div>

//             <div class="widget">
//               <div class="widget-title">
//                 <h6>Type</h6>
//               </div>

//               <div class="right-filter-content">
//                 <div class="right-text"> <p class="cl-red">Contempory</p> </div>
//                 <div class="right-input">  
//                   <label class="main-check">
//                     <input type="checkbox" checked="checked" />
//                     <span class="checkmark"></span>
//                   </label>
//                 </div>
//               </div>

//               <div class="right-filter-content">
//                 <div class="right-text"> <p>Baket</p> </div>
//                 <div class="right-input">  
//                   <label class="main-check">
//                     <input type="checkbox" />
//                     <span class="checkmark"></span>
//                   </label>
//                 </div>
//               </div>

//               <div class="right-filter-content">
//                 <div class="right-text"> <p>Modern</p> </div>
//                 <div class="right-input">  
//                   <label class="main-check">
//                     <input type="checkbox" />
//                     <span class="checkmark"></span>
//                   </label>
//                 </div>
//               </div>
            
//             </div>

//             <div class="widget">
//               <div class="widget-title">
//                 <h6>Ages</h6>
//               </div>

//               <div class="right-filter-content">
//                 <div class="right-text"> <p>Kids (2-12)</p> </div>
//                 <div class="right-input">  
//                   <label class="main-check">
//                     <input type="checkbox" />
//                     <span class="checkmark"></span>
//                   </label>
//                 </div>
//               </div>

//               <div class="right-filter-content">
//                 <div class="right-text"> <p>Teens (13-17)</p> </div>
//                 <div class="right-input">  
//                   <label class="main-check">
//                     <input type="checkbox" />
//                     <span class="checkmark"></span>
//                   </label>
//                 </div>
//               </div>

//               <div class="right-filter-content">
//                 <div class="right-text"> <p class="cl-red">Adult (18+)</p> </div>
//                 <div class="right-input">  
//                   <label class="main-check">
//                     <input type="checkbox"  checked="checked"/>
//                     <span class="checkmark"></span>
//                   </label>
//                 </div>
//               </div>
            
//             </div>

//             <div class="filter-btn-main text-center">
//               <button class="btn-filter"> Apply filters</button>
//             </div>
  

            
//           </div>
//         </div>

//       </div>
//             </div>
//             </div>
         
  
//   </div>
  
//   </div>
  
//     </div>
//   </section>
  
  
  
        
  
         
    
          
//         </div>
//       </div>
  
//   </section>
  
  
  
  
  
  
//       </>
// );
// }

// export default Classes;
