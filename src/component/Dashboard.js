import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { render } from 'react-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Menu from './Menu';



function Dashboard() {
    const [value, onChange] = useState(new Date());
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
                                <li className="dash-menu side-menu-active"> <a href="#"> <i class="fas fa-tachometer-alt"></i> Dashboard </a> </li>
                                <li className=""> <a href="/classes"> <i class="fas fa-compass"></i> Explore </a> </li>
                                <li className=""> <a href="#"> <i class="far fa-calendar-alt"></i> My Schedule </a> </li>
                                <li className=""> <a href="/plans"><i class="fas fa-columns"></i> Plans & Packages </a> </li>
                                <li className=""> <a href="#"> <i class="fas fa-user-alt"></i> Profile </a> </li>
                            </ul>

                            <div className="logout-main">
                                <a href=""><i class="fas fa-sign-out-alt"></i> Logout </a>
                            </div>
                        </div>


                    </div>

                </section>

                <section class="bg-holder right-side dashboard" >

                            <div class="row">

                                <div class="col-sm-5">
                                    <div className="active-plan-title">
                                        <h5>Active Plans & Packages</h5>
                                    </div>

                               
                                        
                                    <div className="active-box">
                                        <div className="act-box-1">
                                            <h6>1 month membership</h6>
                                            <p>8 Course left</p>
                                        </div>
                                        <div className="act-1-box-2">
                                            <h6>Expire</h6>
                                            <p>Fab 21,2021</p>
                                        </div>

                                    </div>
                                    

                                     
                                    <div className="active-box">
                                        <div className="act-box-1">
                                            <h6>1 month membership</h6>
                                            <p>8 Course left</p>
                                        </div>
                                        <div className="act-1-box-2">
                                            <h6>Expire</h6>
                                            <p>Fab 21,2021</p>
                                        </div>

                                    </div>
                
                                </div>

                                <div className="col-sm-7">
                                    <div className="dash-right-main"> 
                                        <div className="dash-explore">
                                            <h2> EXPLORE CLASSES </h2>
                                        </div>

                                        <div className="dash-right-img-main">
                                            <div className="dash-right-content">
                                                <div className="dash-overlay-lef">
                                                <p> Pilatesanada </p>
                                                <h6> Reformer </h6>
                                                <span> 9:00am (50min)</span>
                                                </div>
                                                <div className="dash-overlay-right">
                                                    <button className="overlay-book-btn">
                                                        Book Class
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <section className="das-second-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="calender-part-main">
                                <Calendar
                                    onChange={onChange}
                                    value={value}
                                />
                                </div>
                            </div>

                             <div className="col-md-8">

                             <div class="col-lg-12">
                             <h6 className="dash-today"> Today </h6>
                                <div class="blog-post blog-post-quote dash-column dash-column-active bg-secondary">
                                <div class="row">

                                <div className="col-md-2 pd-r-0">
                                    <div class="dash-column-date">
                                        <h6> Feb 12 </h6>
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
                                        <p> Pilatesanada  </p>
                                        <p> <span> Lorem ipsum dollar </span> </p>
                                       </div>

                                    </div>

                                    <div className="col-md-6 pd-r-0">
                                    
                                    <div class="dash-btn-book-main">
                                    <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
                                    <span>Book</span>
                                    </a>
                                </div>
                                    </div>

                                    </div>
                                </div> 
                                </div>

                                <div class="col-lg-12">
                             <h6 className="dash-today"> Upcoming </h6>
                                <div class="blog-post blog-post-quote dash-column bg-secondary">
                                <div class="row">

                                <div className="col-md-2 pd-r-0">
                                    <div class="dash-column-date">
                                        <h6> Feb 12 </h6>
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
                                        <p> Pilatesanada  </p>
                                        <p> <span> Lorem ipsum dollar </span> </p>
                                       </div>

                                    </div>

                                    <div className="col-md-6 pd-r-0">
                                    
                                    <div class="dash-btn-book-main">
                                    <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
                                    <span>Book</span>
                                    </a>
                                </div>
                                    </div>

                                    </div>
                                </div> 
                             
                                <div class="blog-post blog-post-quote dash-column bg-secondary">
                                <div class="row">

                                <div className="col-md-2 pd-r-0">
                                    <div class="dash-column-date">
                                        <h6> Feb 12 </h6>
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
                                        <p> Pilatesanada  </p>
                                        <p> <span> Lorem ipsum dollar </span> </p>
                                       </div>

                                    </div>

                                    <div className="col-md-6 pd-r-0">
                                    
                                    <div class="dash-btn-book-main">
                                    <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
                                    <span>Book</span>
                                    </a>
                                </div>
                                    </div>

                                    </div>
                                </div> 


                                <div class="blog-post blog-post-quote dash-column bg-secondary">
                                <div class="row">

                                <div className="col-md-2 pd-r-0">
                                    <div class="dash-column-date">
                                        <h6> Feb 12 </h6>
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
                                        <p> Pilatesanada  </p>
                                        <p> <span> Lorem ipsum dollar </span> </p>
                                       </div>

                                    </div>

                                    <div className="col-md-6 pd-r-0">
                                    
                                    <div class="dash-btn-book-main">
                                    <a class="btn btn-primary btn-skew btn-md shape-svg " href="our-trainers.html">
                                    <span>Book</span>
                                    </a>
                                </div>
                                    </div>

                                    </div>
                                </div> 
                                
                                <div className="view-full-schedule-btn">
                                    <button class="btn"> View Full Schedule  </button>
                                </div>

                             
                             </div>

                            

                            </div>

                           
                        </div>
                    </div>
                </section>

            
                </section>

               






                </>
  );
}

export default Dashboard;