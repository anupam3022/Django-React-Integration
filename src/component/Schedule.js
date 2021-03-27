import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Menu from './Menu';
import BlockUi from 'react-block-ui';
import Cookies from 'universal-cookie';
let count = 0;
function Schedule() {
  
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  var date = new Date();

  var today = monthNames[date.getMonth()] + ' ' + date.getDate();
  const currDate = today;
  const currDay = days[date.getDay()]

  date.setDate(date.getDate() + 1);

  var tomm = monthNames[date.getMonth()] + ' ' + date.getDate()
  const tommday = days[date.getDay()];

  date.setDate(date.getDate() + 1);

  var third = monthNames[date.getMonth()] + ' ' + date.getDate()
  const thirdday = days[date.getDay()];

  date.setDate(date.getDate() + 1);

  var fourth = monthNames[date.getMonth()] + ' ' + date.getDate()
  const fourthday = days[date.getDay()];

  date.setDate(date.getDate() + 1);

  var five = monthNames[date.getMonth()] + ' ' + date.getDate()
  const fiveday = days[date.getDay()];

  date.setDate(date.getDate() + 1);

  var six = monthNames[date.getMonth()] + ' ' + date.getDate()
  const sixday = days[date.getDay()];

  date.setDate(date.getDate() + 1);

  var seven = monthNames[date.getMonth()] + ' ' + date.getDate()
  const sevenday = days[date.getDay()];

  date.setDate(date.getDate() + 1);

  var eight = monthNames[date.getMonth()] + ' ' + date.getDate()
  const eightday = days[date.getDay()];

  date.setDate(date.getDate() + 1);

  var nine = monthNames[date.getMonth()] + ' ' + date.getDate()
  const nineday = days[date.getDay()];

  date.setDate(date.getDate() + 1);

  var ten = monthNames[date.getMonth()] + ' ' + date.getDate()
  const tenday = days[date.getDay()];

  date.setDate(date.getDate() + 1);

  var elven = monthNames[date.getMonth()] + ' ' + date.getDate()
  const elevenday = days[date.getDay()];

  date.setDate(date.getDate() + 1);

  var twlve = monthNames[date.getMonth()] + ' ' + date.getDate()
  const twlveday = days[date.getDay()];

  date.setDate(date.getDate() + 1);

  var thirteen = monthNames[date.getMonth()] + ' ' + date.getDate()
  const thirteenday = days[date.getDay()];

  date.setDate(date.getDate() + 1);

  var foutteen = monthNames[date.getMonth()] + ' ' + date.getDate()
  const foutteenday = days[date.getDay()];

  date.setDate(date.getDate() + 1);

  var fifteen = monthNames[date.getMonth()] + ' ' + date.getDate()
  const fifteenday = days[date.getDay()];


  var mon = new Date();

  var currmonth = monthNames[mon.getMonth()];
  const curryear = mon.getFullYear();

  mon.setDate(mon.getDate() + 30);

  var secondmonth = monthNames[mon.getMonth()];
  const secondyear = mon.getFullYear();

  mon.setDate(mon.getDate() + 30);

  var thirdmonth = monthNames[mon.getMonth()];
  const thirdyear = mon.getFullYear();

  mon.setDate(mon.getDate() + 30);

  var fourmonth = monthNames[mon.getMonth()];
  const fouryear = mon.getFullYear();

  mon.setDate(mon.getDate() + 30);

  var fivemonth = monthNames[mon.getMonth()];
  const fiveyear = mon.getFullYear();

  mon.setDate(mon.getDate() + 30);

  var sixmonth = monthNames[mon.getMonth()];
  const sixyear = mon.getFullYear();

  mon.setDate(mon.getDate() + 30);

  var sevenmonth = monthNames[mon.getMonth()];
  const sevenyear = mon.getFullYear();

  mon.setDate(mon.getDate() + 30);

  var eightmonth = monthNames[mon.getMonth()];
  const eightyear = mon.getFullYear();

  mon.setDate(mon.getDate() + 30);

  var ninemonth = monthNames[mon.getMonth()];
  const nineyear = mon.getFullYear();

  mon.setDate(mon.getDate() + 30);

  var tenmonth = monthNames[mon.getMonth()];
  const tenyear = mon.getFullYear();

  mon.setDate(mon.getDate() + 30);

  var elevenmonth = monthNames[mon.getMonth()];
  const elevenyear = mon.getFullYear();

  mon.setDate(mon.getDate() + 30);

  var twlevemonth = monthNames[mon.getMonth()];
  const twleveyear = mon.getFullYear();


  const axios = require('axios');
  const cookies = new Cookies();
  const [classes, getclasses] = useState([])
  const [courses, getcourses] = useState([])


  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/gymprofile/classes')
      .then(res => {
        console.log(res)
        console.log(cookies.get('email'));
        getclasses(res.data)
      })
      .catch(err => {
        // console.log(err)
      })
  }, [])

  // useEffect(() => {
  //   axios
  //     .get('http://127.0.0.1:8000/gymprofile/course')
  //     .then(res => {
  //       
  //       console.log(res)
  //       getcourses(res.data)
  //     })
  //     .catch(err => {
  //       // console.log(err)
  //     })
  // }, [])
  
  // const [blog2, setblog2] = useState([])

  // axios
  //     .get('http://127.0.0.1:8000/user/' + cookies.get('uuid'))
  //     .then(getuuid => {
  //       console.log(getuuid);
  //       setblog2(getuuid.data[0]);
  //     })

  async function Bookclass(data) {
         debugger
         console.log(data)
      var user_uuid = cookies.get('uuid');
      var class_uuid = data.uuid;
      
      {  
         
          console.log('Trying to send request');
          // e.preventDefault();
          try {
              let res = await axios.post('http://127.0.0.1:8000/user/bookclass/list/', {
                user_uuid:user_uuid,
                class_uuid:class_uuid
              })
              
              if (res.status === 201) {
                
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
       < Menu /> 
      
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

      <div class="clearfix"></div>

      <section class="bg-holder " >

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

              <div class="tab-pane fade show active" id="schedule" role="tabpanel" aria-labelledby="schedule-tab">


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
                                  <OwlCarousel items={6}
                                    className="owl-theme nav nav-tabs"

                                    margin={5}
                                    nav
                                  >


                                    <div class="item show_time_date active" data-toggle="tab" href="#tab1">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> TODAY</h6> </div>
                                          <div class="date"> <h6> {currDate}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#tab2">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {tommday}</h6> </div>
                                          <div class="date"> <h6> {tomm}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#tab3">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {thirdday}</h6> </div>
                                          <div class="date"> <h6> {third}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#tab4">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {fourthday} </h6> </div>
                                          <div class="date"> <h6> {fourth}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#tab5">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {fiveday}</h6> </div>
                                          <div class="date"> <h6> {five}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#tab6">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {sixday}</h6> </div>
                                          <div class="date"> <h6> {six}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#tab7">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {sevenday}</h6> </div>
                                          <div class="date"> <h6> {seven}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#tab8">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {eightday}</h6> </div>
                                          <div class="date"> <h6> {eight}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#tab9">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {nineday}</h6> </div>
                                          <div class="date"> <h6> {nine}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#tab10">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {tenday}</h6> </div>
                                          <div class="date"> <h6> {ten}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#tab11">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {elevenday}</h6> </div>
                                          <div class="date"> <h6> {elven}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#tab12">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {twlveday}</h6> </div>
                                          <div class="date"> <h6> {twlve}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#tab13">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {thirteenday}</h6> </div>
                                          <div class="date"> <h6> {thirteen}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#tab14">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {foutteenday}</h6> </div>
                                          <div class="date"> <h6> {foutteen}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#tab15">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {fifteenday}</h6> </div>
                                          <div class="date"> <h6> {fifteen}</h6> </div>
                                        </div>
                                      </div>

                                    </div>





                                  </OwlCarousel>

                                </div>

                              </div>
                            </div>


                            <div class="row">
                              <div class="col-lg-3 ">
                                <div class="shop-sidebar">

                                  <div class="widget">
                                    <div class="widget-title">
                                      <h6>Class Filter</h6>
                                    </div>
                                    <div class="custom-control form-check custom-checkbox">
                                      <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                      <label class="custom-control-label" for="customCheck2">Demo class 1</label>
                                      {/* <span class="text-secondary">(2)</span> */}
                                    </div>

                                    <div class="custom-control form-check custom-checkbox">
                                      <input type="checkbox" class="custom-control-input" id="customCheck3" />
                                      <label class="custom-control-label" for="customCheck3">Demo class 2</label>
                                      {/* <span class="text-secondary">(1)</span> */}
                                    </div>

                                    <div class="custom-control form-check custom-checkbox">
                                      <input type="checkbox" class="custom-control-input" id="customCheck4" />
                                      <label class="custom-control-label" for="customCheck4">Demo class 3</label>
                                      {/* <span class="text-secondary">(2)</span> */}
                                    </div>
                                    <div class="custom-control form-check custom-checkbox">
                                      <input type="checkbox" class="custom-control-input" id="customCheck5" />
                                      <label class="custom-control-label" for="customCheck5">Demo class 3</label>
                                      {/* <span class="text-secondary">(3)</span> */}
                                    </div>

                                    <div class="custom-control form-check custom-checkbox">
                                      <input type="checkbox" class="custom-control-input" id="customCheck7" />
                                      <label class="custom-control-label" for="customCheck7">Demo class 4</label>
                                      {/* <span class="text-secondary">(1)</span> */}
                                    </div>
                                  </div>


                                  <div class="widget">
                                    <div class="widget-title">
                                      <h6>Class Level</h6>
                                    </div>
                                    <div class="custom-control form-check custom-checkbox">
                                      <input type="checkbox" class="custom-control-input" id="level1" />
                                      <label class="custom-control-label" for="level1">All Level</label>
                                      {/* <span class="text-secondary">(2)</span> */}
                                    </div>

                                    <div class="custom-control form-check custom-checkbox">
                                      <input type="checkbox" class="custom-control-input" id="level2" />
                                      <label class="custom-control-label" for="level2">Intermediate</label>
                                      {/* <span class="text-secondary">(1)</span> */}
                                    </div>

                                    <div class="custom-control form-check custom-checkbox">
                                      <input type="checkbox" class="custom-control-input" id="level3" />
                                      <label class="custom-control-label" for="level3">Advance</label>
                                      {/* <span class="text-secondary">(2)</span> */}
                                    </div>


                                  </div>


                                  <div class="widget">
                                    <div class="widget-title">
                                      <h6>Advance Search</h6>
                                    </div>

                                    <div class="form-group">
                                      <label for="usr"> Date</label>
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
                                <div class="tab-content">


                                  <div id="tab1" class="tab-pane fade in show active">
                                    {classes.map(data => (
                                      <div class="row">
                                        {(() => {

                                          return data.class_scheduled_on.map(sch => {
                                            if (sch[0].day === currDay) {
                                              return (<div class="col-lg-12">
                                                <div class="blog-post blog-post-quote mb-5 bg-secondary">
                                                  <div class="class-content-img">
                                                    <img src={'http://127.0.0.1:8000' + data.class_image} />
                                                  </div>

                                                  <div class="class-content">

                                                    <div class="blog-post-title">
                                                      <h6><a class="text-blue" href="#">{data.class_topic}</a></h6>
                                                      <input type='hidden' id='class_uuid'value={data.uuid}></input>
                                                    </div>
                                                    <div class="blog-post-categorise">
                                                      <ul class="list-unstyled mb-0">
                                                        <li><a class="text-blue" href="#"><span>{sch[0].day}</span> <span>{data.start_time} to {data.end_time} </span></a></li>
                                                      </ul>
                                                    </div>
                                                    <ul class="list-unstyled mb-0 blog-post-meta">
                                                      <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration - {data.duration} hours {data.min_duration} min </a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Instructor - {data.instructor_info}</a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Spot left 04</a></li>
                                                    </ul>

                                                    <div class="add-listing d-none d-sm-block class-book-btn">
                                                      <a class="btn btn-primary btn-skew btn-md shape-svg" onClick={() => Bookclass(data)}>
                                                        <span>Book Now</span>
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              )
                                            }
                                            else {
                                              // // console.log("No match");
                                            }
                                          })
                                        })()}


                                      </div>
                                    ))}</div>

                                  <div id="tab2" class="tab-pane fade ">
                                    {classes.map(data => (
                                      <div class="row">

                                        {(() => {

                                          return data.class_scheduled_on.map(sch => {
                                            if (sch[0].day === tommday) {
                                              
                                              console.log(sch[0].day)
                                              console.log(tommday)
                                              return (<div class="col-lg-12">
                                                <div class="blog-post blog-post-quote mb-5 bg-secondary">
                                                  <div class="class-content-img">
                                                    <img src={'http://127.0.0.1:8000' + data.class_image} />
                                                  </div>

                                                  <div class="class-content">

                                                    <div class="blog-post-title">
                                                      <h6><a class="text-blue" href="#">{data.class_topic}</a></h6>
                                                      <input type='hidden' id='class_uuid'value={data.uuid}></input>
                                                    </div>
                                                    <div class="blog-post-categorise">
                                                      <ul class="list-unstyled mb-0">
                                                        <li><a class="text-blue" href="#"><span>{sch[0].day}</span> <span>{data.start_time} to {data.end_time} </span></a></li>
                                                      </ul>
                                                    </div>
                                                    <ul class="list-unstyled mb-0 blog-post-meta">
                                                      {/* <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> By April 5</a></li> */}
                                                      <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration {data.duration} hours </a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Instructor - {data.instructor_info}</a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Spot left 04</a></li>
                                                    </ul>

                                                    <div class="add-listing d-none d-sm-block class-book-btn">
                                                      <a class="btn btn-primary btn-skew btn-md shape-svg " onClick={() => Bookclass(data)}>
                                                        <span>Book Now</span>
                                                      </a>
                                                    </div>

                                                  </div>
                                                </div>
                                              </div>
                                              )
                                            }
                                            else {
                                              // // console.log("No Match");
                                            }
                                          })
                                        })()}


                                      </div>
                                    ))}</div>

                                  <div id="tab3" class="tab-pane fade">
                                    {classes.map(data => (
                                      <div class="row">

                                        {(() => {

                                          return data.class_scheduled_on.map(sch => {
                                            if (sch[0].day === thirdday) {
                                              // // console.log(sch[0].day)
                                              // // console.log(thirdday)
                                              return (<div class="col-lg-12">
                                                <div class="blog-post blog-post-quote mb-5 bg-secondary">
                                                  <div class="class-content-img">
                                                    <img src={'http://127.0.0.1:8000' + data.class_image} />
                                                  </div>

                                                  <div class="class-content">

                                                    <div class="blog-post-title">
                                                      <h6><a class="text-blue" href="#">{data.class_topic}</a></h6>
                                                      <input type='hidden' id='class_uuid'value={data.uuid}></input>
                                                    </div>
                                                    <div class="blog-post-categorise">
                                                      <ul class="list-unstyled mb-0">
                                                        <li><a class="text-blue" href="#"><span>{sch[0].day}</span> <span>{data.start_time} to {data.end_time} </span></a></li>
                                                      </ul>
                                                    </div>
                                                    <ul class="list-unstyled mb-0 blog-post-meta">
                                                      {/* <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> By April 5</a></li> */}
                                                      <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration {data.duration} hours </a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Instructor - {data.instructor_info}</a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Spot left 04</a></li>
                                                    </ul>

                                                    <div class="add-listing d-none d-sm-block class-book-btn">
                                                      <a class="btn btn-primary btn-skew btn-md shape-svg " onClick={Bookclass}>
                                                        <span>Book Now</span>
                                                      </a>
                                                    </div>

                                                  </div>
                                                </div>
                                              </div>
                                              )
                                            }
                                            else {
                                              // // console.log("No Match");
                                            }
                                          })
                                        })()}


                                      </div>
                                    ))}</div>

                                  <div id="tab4" class="tab-pane fade">
                                    {classes.map(data => (
                                      <div class="row">

                                        {(() => {

                                          return data.class_scheduled_on.map(sch => {
                                            if (sch[0].day === fourthday) {
                                              // con/sole.log(sch[0].day)
                                              // // console.log(fourthday)
                                              
                                              return (<div class="col-lg-12">
                                                <div class="blog-post blog-post-quote mb-5 bg-secondary">
                                                  <div class="class-content-img">
                                                    <img src={'http://127.0.0.1:8000' + data.class_image} />
                                                  </div>

                                                  <div class="class-content">

                                                    <div class="blog-post-title">
                                                      <h6><a class="text-blue" href="#">{data.class_topic}</a></h6>
                                                      <input type='hidden' id='class_uuid'value={data.uuid}></input>
                                                    </div>
                                                    <div class="blog-post-categorise">
                                                      <ul class="list-unstyled mb-0">
                                                        <li><a class="text-blue" href="#"><span>{sch[0].day}</span> <span>{data.start_time} to {data.end_time} </span></a></li>
                                                      </ul>
                                                    </div>
                                                    <ul class="list-unstyled mb-0 blog-post-meta">
                                                      {/* <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> By April 5</a></li> */}
                                                      <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration {data.duration} hours </a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Instructor - {data.instructor_info}</a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Spot left 04</a></li>
                                                    </ul>

                                                    <div class="add-listing d-none d-sm-block class-book-btn">
                                                      <a class="btn btn-primary btn-skew btn-md shape-svg " onClick={Bookclass}>
                                                        <span>Book Now</span>
                                                      </a>
                                                    </div>

                                                  </div>
                                                </div>
                                              </div>
                                              )
                                            }
                                            else {
                                              // // console.log("No Match");
                                            }
                                          })
                                        })()}


                                      </div>
                                    ))}</div>

                                  <div id="tab5" class="tab-pane fade">
                                    {classes.map(data => (
                                      <div class="row">

                                        {(() => {

                                          return data.class_scheduled_on.map(sch => {
                                            if (sch[0].day === fiveday) {
                                              // console.log(sch[0].day)
                                              // console.log(fiveday)
                                              return (<div class="col-lg-12">
                                                <div class="blog-post blog-post-quote mb-5 bg-secondary">
                                                  <div class="class-content-img">
                                                    <img src={'http://127.0.0.1:8000' + data.class_image} />
                                                  </div>

                                                  <div class="class-content">

                                                    <div class="blog-post-title">
                                                      <h6><a class="text-blue" href="#">{data.class_topic}</a></h6>
                                                      <input type='hidden' id='class_uuid'value={data.uuid}></input>
                                                    </div>
                                                    <div class="blog-post-categorise">
                                                      <ul class="list-unstyled mb-0">
                                                        <li><a class="text-blue" href="#"><span>{sch[0].day}</span> <span>{data.start_time} to {data.end_time} </span></a></li>
                                                      </ul>
                                                    </div>
                                                    <ul class="list-unstyled mb-0 blog-post-meta">
                                                      <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration {data.duration} hours </a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Instructor - {data.instructor_info}</a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Spot left 04</a></li>
                                                    </ul>

                                                    <div class="add-listing d-none d-sm-block class-book-btn">
                                                      <a class="btn btn-primary btn-skew btn-md shape-svg " onClick={Bookclass}>
                                                        <span>Book Now</span>
                                                      </a>
                                                    </div>

                                                  </div>
                                                </div>
                                              </div>
                                              )
                                            }
                                            else {
                                              // console.log('No Match');
                                            }
                                          })
                                        })()}


                                      </div>
                                    ))}</div>

                                  <div id="tab6" class="tab-pane fade">
                                    {classes.map(data => (
                                      <div class="row">

                                        {(() => {

                                          return data.class_scheduled_on.map(sch => {
                                            if (sch[0].day === sixday) {
                                              // console.log(sch[0].day)
                                              // console.log(sixday)
                                              
                                              return (<div class="col-lg-12">
                                                <div class="blog-post blog-post-quote mb-5 bg-secondary">
                                                  <div class="class-content-img">
                                                    <img src={'http://127.0.0.1:8000' + data.class_image} />
                                                  </div>

                                                  <div class="class-content">

                                                    <div class="blog-post-title">
                                                      <h6><a class="text-blue" href="#">{data.class_topic}</a></h6>
                                                      <input type='hidden' id='class_uuid'value={data.uuid}></input>
                                                    </div>
                                                    <div class="blog-post-categorise">
                                                      <ul class="list-unstyled mb-0">
                                                        <li><a class="text-blue" href="#"><span>{sch[0].day}</span> <span>{data.start_time} to {data.end_time} </span></a></li>
                                                      </ul>
                                                    </div>
                                                    <ul class="list-unstyled mb-0 blog-post-meta">
                                                      <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration {data.duration} hours </a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Instructor - {data.instructor_info}</a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Spot left 04</a></li>
                                                    </ul>

                                                    <div class="add-listing d-none d-sm-block class-book-btn">
                                                      <a class="btn btn-primary btn-skew btn-md shape-svg " onClick={Bookclass}>
                                                        <span>Book Now</span>
                                                      </a>
                                                    </div>

                                                  </div>
                                                </div>
                                              </div>
                                              )
                                            }
                                            else {
                                              // console.log("No Match");
                                            }
                                          })
                                        })()}


                                      </div>
                                    ))}</div>

                                  <div id="tab7" class="tab-pane fade">
                                    {classes.map(data => (
                                      <div class="row">

                                        {(() => {

                                          return data.class_scheduled_on.map(sch => {
                                            if (sch[0].day === sevenday) {
                                              // console.log(sch[0].day)
                                              // console.log(sevenday)
                                              
                                              return (<div class="col-lg-12">
                                                <div class="blog-post blog-post-quote mb-5 bg-secondary">
                                                  <div class="class-content-img">
                                                    <img src={'http://127.0.0.1:8000' + data.class_image} />
                                                  </div>

                                                  <div class="class-content">

                                                    <div class="blog-post-title">
                                                      <h6><a class="text-blue" href="#">{data.class_topic}</a></h6>
                                                      <input type='hidden' id='class_uuid'value={data.uuid}></input>
                                                    </div>
                                                    <div class="blog-post-categorise">
                                                      <ul class="list-unstyled mb-0">
                                                        <li><a class="text-blue" href="#"><span>{sch[0].day}</span> <span>{data.start_time} to {data.end_time} </span></a></li>
                                                      </ul>
                                                    </div>
                                                    <ul class="list-unstyled mb-0 blog-post-meta">
                                                      <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration {data.duration} hours </a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Instructor - {data.instructor_info}</a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Spot left 04</a></li>
                                                    </ul>

                                                    <div class="add-listing d-none d-sm-block class-book-btn">
                                                      <a class="btn btn-primary btn-skew btn-md shape-svg " onClick={Bookclass}>
                                                        <span>Book Now</span>
                                                      </a>
                                                    </div>

                                                  </div>
                                                </div>
                                              </div>
                                              )
                                            }
                                            else {
                                              // console.log("No Match");
                                            }
                                          })
                                        })()}


                                      </div>
                                    ))}</div>

                                  <div id="tab8" class="tab-pane fade">
                                    {classes.map(data => (
                                      <div class="row">

                                        {(() => {

                                          return data.class_scheduled_on.map(sch => {
                                            if (sch[0].day === eightday) {
                                              // console.log(sch[0].day)
                                              // console.log(eightday)
                                              
                                              return (<div class="col-lg-12">
                                                <div class="blog-post blog-post-quote mb-5 bg-secondary">
                                                  <div class="class-content-img">
                                                    <img src={'http://127.0.0.1:8000' + data.class_image} />
                                                  </div>

                                                  <div class="class-content">

                                                    <div class="blog-post-title">
                                                      <h6><a class="text-blue" href="#">{data.class_topic}</a></h6>
                                                      <input type='hidden' id='class_uuid'value={data.uuid}></input>
                                                    </div>
                                                    <div class="blog-post-categorise">
                                                      <ul class="list-unstyled mb-0">
                                                        <li><a class="text-blue" href="#"><span>{sch[0].day}</span> <span>{data.start_time} to {data.end_time} </span></a></li>
                                                      </ul>
                                                    </div>
                                                    <ul class="list-unstyled mb-0 blog-post-meta">
                                                      <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration {data.duration} hours </a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Instructor - {data.instructor_info}</a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Spot left 04</a></li>
                                                    </ul>

                                                    <div class="add-listing d-none d-sm-block class-book-btn">
                                                      <a class="btn btn-primary btn-skew btn-md shape-svg " onClick={Bookclass}>
                                                        <span>Book Now</span>
                                                      </a>
                                                    </div>

                                                  </div>
                                                </div>
                                              </div>
                                              )
                                            }
                                            else {
                                              // console.log("No Match");
                                            }
                                          })
                                        })()}


                                      </div>
                                    ))}</div>

                                  <div id="tab9" class="tab-pane fade">
                                    {classes.map(data => (
                                      <div class="row">

                                        {(() => {

                                          return data.class_scheduled_on.map(sch => {
                                            if (sch[0].day === nineday) {
                                              // console.log(sch[0].day)
                                              // console.log(nineday)
                                              
                                              return (<div class="col-lg-12">
                                                <div class="blog-post blog-post-quote mb-5 bg-secondary">
                                                  <div class="class-content-img">
                                                    <img src={'http://127.0.0.1:8000' + data.class_image} />
                                                  </div>

                                                  <div class="class-content">

                                                    <div class="blog-post-title">
                                                      <h6><a class="text-blue" href="#">{data.class_topic}</a></h6>
                                                      <input type='hidden' id='class_uuid'value={data.uuid}></input>
                                                    </div>
                                                    <div class="blog-post-categorise">
                                                      <ul class="list-unstyled mb-0">
                                                        <li><a class="text-blue" href="#"><span>{sch[0].day}</span> <span>{data.start_time} to {data.end_time} </span></a></li>
                                                      </ul>
                                                    </div>
                                                    <ul class="list-unstyled mb-0 blog-post-meta">
                                                      <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration {data.duration} hours </a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Instructor - {data.instructor_info}</a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Spot left 04</a></li>
                                                    </ul>

                                                    <div class="add-listing d-none d-sm-block class-book-btn">
                                                      <a class="btn btn-primary btn-skew btn-md shape-svg " onClick={Bookclass}>
                                                        <span>Book Now</span>
                                                      </a>
                                                    </div>

                                                  </div>
                                                </div>
                                              </div>
                                              )
                                            }
                                            else {
                                              // console.log("No Match");
                                            }
                                          })
                                        })()}


                                      </div>
                                    ))}</div>

                                  <div id="tab10" class="tab-pane fade">
                                    {classes.map(data => (
                                      <div class="row">

                                        {(() => {

                                          return data.class_scheduled_on.map(sch => {
                                            if (sch[0].day === tenday) {
                                              // console.log(sch[0].day)
                                              // console.log(tenday)
                                              
                                              return (<div class="col-lg-12">
                                                <div class="blog-post blog-post-quote mb-5 bg-secondary">
                                                  <div class="class-content-img">
                                                    <img src={'http://127.0.0.1:8000' + data.class_image} />
                                                  </div>

                                                  <div class="class-content">

                                                    <div class="blog-post-title">
                                                      <h6><a class="text-blue" href="#">{data.class_topic}</a></h6>
                                                      <input type='hidden' id='class_uuid'value={data.uuid}></input>
                                                    </div>
                                                    <div class="blog-post-categorise">
                                                      <ul class="list-unstyled mb-0">
                                                        <li><a class="text-blue" href="#"><span>{sch[0].day}</span> <span>{data.start_time} to {data.end_time} </span></a></li>
                                                      </ul>
                                                    </div>
                                                    <ul class="list-unstyled mb-0 blog-post-meta">
                                                      <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration {data.duration} hours </a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Instructor - {data.instructor_info}</a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Spot left 04</a></li>
                                                    </ul>

                                                    <div class="add-listing d-none d-sm-block class-book-btn">
                                                      <a class="btn btn-primary btn-skew btn-md shape-svg " onClick={Bookclass}>
                                                        <span>Book Now</span>
                                                      </a>
                                                    </div>

                                                  </div>
                                                </div>
                                              </div>
                                              )
                                            }
                                            else {
                                              // console.log("No Match");
                                            }
                                          })
                                        })()}


                                      </div>
                                    ))}</div>

                                  <div id="tab11" class="tab-pane fade">
                                    {classes.map(data => (
                                      <div class="row">

                                        {(() => {

                                          return data.class_scheduled_on.map(sch => {
                                            if (sch[0].day === elevenday) {
                                              // console.log(sch[0].day)
                                              // console.log(elevenday)
                                              
                                              return (<div class="col-lg-12">
                                                <div class="blog-post blog-post-quote mb-5 bg-secondary">
                                                  <div class="class-content-img">
                                                    <img src={'http://127.0.0.1:8000' + data.class_image} />
                                                  </div>

                                                  <div class="class-content">

                                                    <div class="blog-post-title">
                                                      <h6><a class="text-blue" href="#">{data.class_topic}</a></h6>
                                                      <input type='hidden' id='class_uuid'value={data.uuid}></input>
                                                    </div>
                                                    <div class="blog-post-categorise">
                                                      <ul class="list-unstyled mb-0">
                                                        <li><a class="text-blue" href="#"><span>{sch[0].day}</span> <span>{data.start_time} to {data.end_time} </span></a></li>
                                                      </ul>
                                                    </div>
                                                    <ul class="list-unstyled mb-0 blog-post-meta">
                                                      <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration {data.duration} hours </a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Instructor - {data.instructor_info}</a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Spot left 04</a></li>
                                                    </ul>

                                                    <div class="add-listing d-none d-sm-block class-book-btn">
                                                      <a class="btn btn-primary btn-skew btn-md shape-svg " onClick={Bookclass}>
                                                        <span>Book Now</span>
                                                      </a>
                                                    </div>

                                                  </div>
                                                </div>
                                              </div>
                                              )
                                            }
                                            else {
                                              // console.log("No Match");
                                            }
                                          })
                                        })()}


                                      </div>
                                    ))}</div>

                                  <div id="tab12" class="tab-pane fade">
                                    {classes.map(data => (
                                      <div class="row">

                                        {(() => {

                                          return data.class_scheduled_on.map(sch => {
                                            if (sch[0].day === twlveday) {
                                              // console.log(sch[0].day)
                                              // console.log(twlveday)
                                              
                                              return (<div class="col-lg-12">
                                                <div class="blog-post blog-post-quote mb-5 bg-secondary">
                                                  <div class="class-content-img">
                                                    <img src={'http://127.0.0.1:8000' + data.class_image} />
                                                  </div>

                                                  <div class="class-content">

                                                    <div class="blog-post-title">
                                                      <h6><a class="text-blue" href="#">{data.class_topic}</a></h6>
                                                    </div>
                                                    <div class="blog-post-categorise">
                                                      <ul class="list-unstyled mb-0">
                                                        <li><a class="text-blue" href="#"><span>{sch[0].day}</span> <span>{data.start_time} to {data.end_time} </span></a></li>
                                                      </ul>
                                                    </div>
                                                    <ul class="list-unstyled mb-0 blog-post-meta">
                                                      <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration {data.duration} hours </a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Instructor - {data.instructor_info}</a></li>
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
                                              )
                                            }
                                            else {
                                              // console.log("No Match");
                                            }
                                          })
                                        })()}


                                      </div>
                                    ))}</div>

                                  <div id="tab13" class="tab-pane fade">
                                    {classes.map(data => (
                                      <div class="row">

                                        {(() => {

                                          return data.class_scheduled_on.map(sch => {
                                            if (sch[0].day === thirteenday) {
                                              // console.log(sch[0].day)
                                              // console.log(thirteenday)
                                              
                                              return (<div class="col-lg-12">
                                                <div class="blog-post blog-post-quote mb-5 bg-secondary">
                                                  <div class="class-content-img">
                                                    <img src={'http://127.0.0.1:8000' + data.class_image} />
                                                  </div>

                                                  <div class="class-content">

                                                    <div class="blog-post-title">
                                                      <h6><a class="text-blue" href="#">{data.class_topic}</a></h6>
                                                    </div>
                                                    <div class="blog-post-categorise">
                                                      <ul class="list-unstyled mb-0">
                                                        <li><a class="text-blue" href="#"><span>{sch[0].day}</span> <span>{data.start_time} to {data.end_time} </span></a></li>
                                                      </ul>
                                                    </div>
                                                    <ul class="list-unstyled mb-0 blog-post-meta">
                                                      <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration {data.duration} hours </a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Instructor - {data.instructor_info}</a></li>
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
                                              )
                                            }
                                            else {
                                              // console.log("No Match");
                                            }
                                          })
                                        })()}


                                      </div>
                                    ))}</div>

                                  <div id="tab14" class="tab-pane fade">
                                    {classes.map(data => (
                                      <div class="row">

                                        {(() => {

                                          return data.class_scheduled_on.map(sch => {
                                            if (sch[0].day === foutteenday) {
                                              // console.log(sch[0].day)
                                              // console.log(foutteenday)
                                              
                                              return (<div class="col-lg-12">
                                                <div class="blog-post blog-post-quote mb-5 bg-secondary">
                                                  <div class="class-content-img">
                                                    <img src={'http://127.0.0.1:8000' + data.class_image} />
                                                  </div>

                                                  <div class="class-content">

                                                    <div class="blog-post-title">
                                                      <h6><a class="text-blue" href="#">{data.class_topic}</a></h6>
                                                    </div>
                                                    <div class="blog-post-categorise">
                                                      <ul class="list-unstyled mb-0">
                                                        <li><a class="text-blue" href="#"><span>{sch[0].day}</span> <span>{data.start_time} to {data.end_time} </span></a></li>
                                                      </ul>
                                                    </div>
                                                    <ul class="list-unstyled mb-0 blog-post-meta">
                                                      <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration {data.duration} hours </a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Instructor - {data.instructor_info}</a></li>
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
                                              )
                                            }
                                            else {
                                              // console.log("No Match");
                                            }
                                          })
                                        })()}


                                      </div>
                                    ))}</div>

                                  <div id="tab15" class="tab-pane fade">
                                    {classes.map(data => (
                                      <div class="row">

                                        {(() => {

                                          return data.class_scheduled_on.map(sch => {
                                            if (sch[0].day === fifteenday) {
                                              // console.log(sch[0].day)
                                              // console.log(fifteenday)
                                              
                                              return (<div class="col-lg-12">
                                                <div class="blog-post blog-post-quote mb-5 bg-secondary">
                                                  <div class="class-content-img">
                                                    <img src={'http://127.0.0.1:8000' + data.class_image} />
                                                  </div>

                                                  <div class="class-content">

                                                    <div class="blog-post-title">
                                                      <h6><a class="text-blue" href="#">{data.class_topic}</a></h6>
                                                    </div>
                                                    <div class="blog-post-categorise">
                                                      <ul class="list-unstyled mb-0">
                                                        <li><a class="text-blue" href="#"><span>{sch[0].day}</span> <span>{data.start_time} to {data.end_time} </span></a></li>
                                                      </ul>
                                                    </div>
                                                    <ul class="list-unstyled mb-0 blog-post-meta">
                                                      <li><a class="text-blue" href="#"><i class="fa fa-hourglass-end" aria-hidden="true"></i> Duration {data.duration} hours </a></li>
                                                      <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Instructor - {data.instructor_info}</a></li>
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
                                              )
                                            }
                                            else {
                                              // console.log("No Match");
                                            }
                                          })
                                        })()}


                                      </div>
                                    ))}</div>

                                </div>

                              </div>

                            </div>
                          </div>
                          <div class="tab-pane fade" id="course" role="tabpanel" aria-labelledby="course-tab">

                            <div class="row">
                              <div className="col-md-12">
                                <div className="schedule-owl">
                                  <OwlCarousel items={6}
                                    className="owl-theme nav nav-tabs"
                                    margin={5}
                                    nav
                                  >

                                    <div class="item show_time_date active" data-toggle="tab" href="#coursetab1">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {currmonth}</h6> </div>
                                          <div class="date"> <h6> {curryear}</h6> </div>
                                        </div>
                                      </div>

                                    </div>


                                    <div class="item show_time_date" data-toggle="tab" href="#coursetab2">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {secondmonth}</h6> </div>
                                          <div class="date"> <h6> {secondyear}</h6> </div>
                                        </div>
                                      </div>

                                    </div>



                                    <div class="item show_time_date" data-toggle="tab" href="#coursetab3">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {thirdmonth}</h6> </div>
                                          <div class="date"> <h6> {thirdyear}</h6> </div>
                                        </div>
                                      </div>

                                    </div>


                                    <div class="item show_time_date" data-toggle="tab" href="#coursetab4">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {fourmonth} </h6> </div>
                                          <div class="date"> <h6> {fouryear}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#coursetab5">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {fivemonth}</h6> </div>
                                          <div class="date"> <h6> {fiveyear}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#coursetab6">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {sixmonth}</h6> </div>
                                          <div class="date"> <h6> {sixyear}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#coursetab7">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {sevenmonth}</h6> </div>
                                          <div class="date"> <h6> {sevenyear}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#coursetab8">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {eightmonth}</h6> </div>
                                          <div class="date"> <h6> {eightyear}</h6> </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="item show_time_date" data-toggle="tab" href="#coursetab9">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {ninemonth}</h6> </div>
                                          <div class="date"> <h6> {nineyear}</h6> </div>
                                        </div>
                                      </div>

                                    </div>


                                    <div class="item show_time_date" data-toggle="tab" href="#coursetab10">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {tenmonth}</h6> </div>
                                          <div class="date"> <h6> {tenyear}</h6> </div>
                                        </div>
                                      </div>

                                    </div>


                                    <div class="item show_time_date" data-toggle="tab" href="#coursetab11">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {elevenmonth}</h6> </div>
                                          <div class="date"> <h6> {elevenyear}</h6> </div>
                                        </div>
                                      </div>

                                    </div>


                                    <div class="item show_time_date" data-toggle="tab" href="#coursetab12">

                                      <div>
                                        <div className="schedule-owl-item">
                                          <div class="day"> <h6> {twlevemonth}</h6> </div>
                                          <div class="date"> <h6> {twleveyear}</h6> </div>
                                        </div>
                                      </div>

                                    </div>


                                    

</OwlCarousel>

                                </div>

                              </div>
                            </div>

                            <div class="row">

                              <div class="col-lg-12 mt-5 mt-lg-0">
                              {courses.map(data => (
                                <div class="tab-content">
                                  {(() => {
                                    
                                  if (data.start_month === thirdmonth) {
                                    console.log(data.start_month)
                                    console.log(currmonth)
                                    return (
                                      <div id="coursetab1" class="tab-pane fade in show active">
                                        <div className="row">
                                          <div className="col-md-12 col-xs-12">
                                            <div className="date-row-detail">
                                              <p><i class="far fa-calendar-alt"></i> {data.course_start_date}  </p>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="row">

                                          <div class="col-lg-12 m-auto">
                                            <div class="blog-post blog-post-quote mb-5 bg-secondary">
                                              <div class="class-content-img">
                                                <div class="date-time-box">
                                                  <img src={'http://127.0.0.1:8000' + data.course_image} />
                                                </div>
                                              </div>

                                              <div class="class-content course-content">

                                                <div class="blog-post-title">
                                                  <h6><a class="text-blue" href="#">{data.course_name}</a></h6>
                                                </div>

                                                <ul class="list-unstyled mb-0 blog-post-meta">
                                                  <li><a class="text-blue" href="#"><i class="far fa-clock"></i> <span>{data.start_time} to {data.end_time} </span></a></li>
                                                  <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> Start date : {data.course_start_date} </span></a></li>
                                                  <li><a class="text-blue" href="#"><span><i class="far fa-calendar-alt"></i> End date : {data.course_end_date}</span></a></li>
                                                </ul>

                                                <ul class="list-unstyled mb-0 blog-post-meta">
                                                  
                                                  <li><a class="text-blue" href="#"><i class="far fa-chart-bar"></i> {data.level} </a></li>
                                                  <li><a class="text-blue" href="#"><i class="fa fa-users" aria-hidden="true"></i>  Instructor - {data.instructor_info}</a></li>
                                                  
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
                                    )
                                  }
                                  else {
                                    // // console.log("No Match");
                                  }

                                  })()}


                                  
                                </div> 
                              ))}
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

      </section>


    </>
  );
}

export default Schedule;
