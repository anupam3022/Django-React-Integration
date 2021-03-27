import React from 'react';
import Navbar from './Navbar';

function Home() {
  return (
    <>

<Navbar /> 
<section class="banner-home">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="swipeinner">
          <div class="banner bg-holder bg-overlay-secondary-70" data-jarallax='{"speed": 0.6}'>
            <div class="container">
              <div class="row no-gutters">
                <div class="col-12">
                  <div class="banner-content">
                    <h1 class="text-uppercase text-white banner-title" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.4s">Be Fit, <span class="d-block text-stroke-primary">Live More</span></h1>
                    <div data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.5s">
                      <a class="btn btn-primary mt-3 ml-3 mt-lg-5 ml-lg-5 btn-skew" href="#"> <span> Join us</span></a>
                    </div>
                  </div>
                  <div class="banner-image">
                    <img class="img-fluid" src="assets/images/slider/02.png" alt="" />
                  </div>
                  <div class="banner-shape" data-swiper-animation="bounceIn" data-duration="1s" data-delay="1.5s">
                    <img class="img-fluid" src="assets/images/slider/round-shape.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="swiper-slide">
        <div class="swipeinner">
          <div class="banner bg-holder bg-overlay-secondary-70" data-jarallax='{"speed": 0.6}' >
            <div class="container">
              <div class="row no-gutters">
                <div class="col-12">
                  <div class="banner-content">
                    <h1 class="text-uppercase text-white banner-title" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.4s">Fight for, <span class="d-block text-stroke-primary">Fitness</span></h1>
                    <div data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.5s">
                      <a class="btn btn-primary mt-3 ml-3 mt-lg-5 ml-lg-5 btn-skew" href="#"> <span> Join us</span></a>
                    </div>
                  </div>
                  <div class="banner-image">
                    <img class="img-fluid" src="assets/images/slider/11.png" alt="" />
                  </div>
                  <div class="banner-shape" data-swiper-animation="bounceIn" data-duration="1s" data-delay="1.5s">
                    <img class="img-fluid" src="assets/images/slider/round-shape.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}


    </div>
    <div class="swiper-pagination"></div>
  </div>
</section>

{/* <section class="space-ptb bg-holder bg-overlay-black-70" >
  <div class="container mb-5">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="section-title text-center">
          <span class="sub-title text-primary"><span class="title-shape mr-2"></span> Class list by goals</span>
          <h2 class="text-white">What is timetable for classes</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ul class="nav nav-tabs nav-pills flex-column flex-sm-row mb-4" id="pills-tab" role="tablist">
          <li class="nav-item flex-sm-fill text-center">
            <a class="nav-link active" id="monday-tab" data-toggle="pill" href="#monday" role="tab" aria-controls="monday" aria-selected="true"><span> Monday </span></a>
          </li>
          <li class="nav-item flex-sm-fill text-center">
            <a class="nav-link" id="tuesday-tab" data-toggle="pill" href="#tuesday" role="tab" aria-controls="tuesday" aria-selected="false"><span> Tuesday </span></a>
          </li>
          <li class="nav-item flex-sm-fill text-center">
            <a class="nav-link" id="wednesday-tab" data-toggle="pill" href="#wednesday" role="tab" aria-controls="wednesday" aria-selected="false"><span> Wednesday </span></a>
          </li>
          <li class="nav-item flex-sm-fill text-center">
            <a class="nav-link" id="thursday-tab" data-toggle="pill" href="#thursday" role="tab" aria-controls="thursday" aria-selected="false"><span> Thursday </span></a>
          </li>
          <li class="nav-item flex-sm-fill text-center">
            <a class="nav-link" id="friday-tab" data-toggle="pill" href="#friday" role="tab" aria-controls="friday" aria-selected="false"><span> Friday </span></a>
          </li>
          <li class="nav-item flex-sm-fill text-center">
            <a class="nav-link" id="saturday-tab" data-toggle="pill" href="#saturday" role="tab" aria-controls="saturday" aria-selected="false"><span> Saturday </span></a>
          </li>
          <li class="nav-item flex-sm-fill text-center">
            <a class="nav-link" id="sunday-tab" data-toggle="pill" href="#sunday" role="tab" aria-controls="sunday" aria-selected="false"><span> Sunday </span></a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="monday" role="tabpanel" aria-labelledby="monday-tab">
            <div class="table-responsive">
              <table class="table table-borderless table-striped table-skew mb-0">
                <thead class="bg-white">
                  <tr>
                    <th>Time</th>
                    <th>Class Type</th>
                    <th>Coach Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>06.00 - 07.00</td>
                    <td>Fitness</td>
                    <td>
                      <div class="d-flex align-items-center">
                       <span class="ml-3 mb-0 pr-4">Paul Flavius</span>
                      </div>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td>07.00 - 08.00</td>
                    <td>Boxcycle</td>
                    <td>
                      <div class="d-flex align-items-center">
                         <span class="ml-3 mb-0 pr-4">Ricardo Marshall</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>08.00 - 09.00</td>
                    <td>Body builing</td>
                    <td>
                      <div class="d-flex align-items-center">
                          <span class="ml-3 mb-0 pr-4">Joana Williams</span>
                      </div>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td>09.00 - 10.00</td>
                    <td>Crosfit</td>
                    <td>
                      <div class="d-flex align-items-center">
                        <span class="ml-3 mb-0 pr-4">Gwen Bass</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>10.00 - 11.00</td>
                    <td>Cardio</td>
                    <td>
                      <div class="d-flex align-items-center">
                       <span class="ml-3 mb-0 pr-4">Melanie Byrd</span>
                      </div>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td>11.00 - 12.00</td>
                    <td>Yoga Basics</td>
                    <td>
                      <div class="d-flex align-items-center">
                         <span class="ml-3 mb-0 pr-4">Maria Fields</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>12.00 - 01.00</td>
                    <td>Sports</td>
                    <td>
                      <div class="d-flex align-items-center">
                      
                        <span class="ml-3 mb-0 pr-4">Melvin Harvey</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-pane fade" id="tuesday" role="tabpanel" aria-labelledby="tuesday-tab">
            <div class="table-responsive">
              <table class="table table-borderless table-striped table-skew mb-0">
                <thead class="bg-white">
                  <tr>
                    <th>Time</th>
                    <th>Class Type</th>
                    <th>Coach Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>06.00 - 07.00</td>
                    <td>Fitness</td>
                    <td>
                      <div class="d-flex align-items-center">
             
                        <span class="ml-3 mb-0 pr-4">Paul Flavius</span>
                      </div>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td>07.00 - 08.00</td>
                    <td>Boxcycle</td>
                    <td>
                      <div class="d-flex align-items-center">
                   
                        <span class="ml-3 mb-0 pr-4">Ricardo Marshall</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>08.00 - 09.00</td>
                    <td>Body builing</td>
                    <td>
                      <div class="d-flex align-items-center">
                     
                        <span class="ml-3 mb-0 pr-4">Joana Williams</span>
                      </div>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td>09.00 - 10.00</td>
                    <td>Crosfit</td>
                    <td>
                      <div class="d-flex align-items-center">
                 
                        <span class="ml-3 mb-0 pr-4">Gwen Bass</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>10.00 - 11.00</td>
                    <td>Cardio</td>
                    <td>
                      <div class="d-flex align-items-center">
              
                        <span class="ml-3 mb-0 pr-4">Melanie Byrd</span>
                      </div>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td>11.00 - 12.00</td>
                    <td>Yoga Basics</td>
                    <td>
                      <div class="d-flex align-items-center">
                     
                        <span class="ml-3 mb-0 pr-4">Maria Fields</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>12.00 - 01.00</td>
                    <td>Sports</td>
                    <td>
                      <div class="d-flex align-items-center">
                    
                        <span class="ml-3 mb-0 pr-4">Melvin Harvey</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-pane fade" id="wednesday" role="tabpanel" aria-labelledby="wednesday-tab">
            <div class="table-responsive">
              <table class="table table-borderless table-striped table-skew mb-0">
                <thead class="bg-white">
                  <tr>
                    <th>Time</th>
                    <th>Class Type</th>
                    <th>Coach Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>06.00 - 07.00</td>
                    <td>Fitness</td>
                    <td>
                      <div class="d-flex align-items-center">
           
                        <span class="ml-3 mb-0 pr-4">Paul Flavius</span>
                      </div>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td>07.00 - 08.00</td>
                    <td>Boxcycle</td>
                    <td>
                      <div class="d-flex align-items-center">
              
                        <span class="ml-3 mb-0 pr-4">Ricardo Marshall</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>08.00 - 09.00</td>
                    <td>Body builing</td>
                    <td>
                      <div class="d-flex align-items-center">
                
                        <span class="ml-3 mb-0 pr-4">Joana Williams</span>
                      </div>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td>09.00 - 10.00</td>
                    <td>Crosfit</td>
                    <td>
                      <div class="d-flex align-items-center">
               
                        <span class="ml-3 mb-0 pr-4">Gwen Bass</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>10.00 - 11.00</td>
                    <td>Cardio</td>
                    <td>
                      <div class="d-flex align-items-center">
                  
                        <span class="ml-3 mb-0 pr-4">Melanie Byrd</span>
                      </div>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td>11.00 - 12.00</td>
                    <td>Yoga Basics</td>
                    <td>
                      <div class="d-flex align-items-center">
                     
                        <span class="ml-3 mb-0 pr-4">Maria Fields</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>12.00 - 01.00</td>
                    <td>Sports</td>
                    <td>
                      <div class="d-flex align-items-center">
                     
                        <span class="ml-3 mb-0 pr-4">Melvin Harvey</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </div>
</section> */}




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




{/* <footer class="footer bg-dark space-pt">
  <div class="container">
    <div class="row pb-5">
      <div class="col-lg-3 col-md-6">
        <div class="footer-contact-info">
          <h5 class="text-primary mb-4">Follow Us</h5>
          <div class="d-flex text-center">
            <a class="bg-facebook p-2 mr-1 text-white" href="#">
              <i class="avatar avatar-md mx-auto bg-dark-soft text-center rounded-circle line-h-xxxl fab fa-facebook-f"></i>
              <span class="d-block text-white mt-2">Facebook</span>
            </a>
            <a class="bg-pinterest p-2 mr-1" href="#">
              <i class="avatar avatar-md mx-auto bg-dark-soft text-center rounded-circle line-h-xxxl text-white fab fa-pinterest-p"></i>
              <span class="d-block text-white mt-2">Pinterest</span>
            </a>
            <a class="bg-linkedin p-2" href="#">
              <i class="avatar avatar-md mx-auto bg-dark-soft text-center rounded-circle line-h-xxxl text-white fab fa-linkedin-in"></i>
              <span class="d-block text-white mt-2">Linkedin</span>
            </a>
          </div>
          <p class="text-white mb-4 mt-3">For those of you who are serious about having more, doing more, giving more and being more, success is achievable with some understanding.</p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mt-4 mt-md-0">
        <div class="footer-link">
          <h5 class="text-primary mb-4">Subscribe us</h5>
          <div class="footer-subscribe">
            <p class="text-white">Sign up to our newsletter to get the latest news and offers.</p>
            <form>
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Enter email" />
              </div>
              <button type="submit" class="btn btn-secondary"> <span> Get notified </span> </button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
        <div class="footer-recent-List">
          <h5 class="text-primary mb-4">Recent Work</h5>
          <ul class="list-unstyled d-flex flex-wrap ">
            <li class="mb-0"><a href="#"> <img class="avatar avatar-lg" src="assets/images/avatar/01.jpg" alt="" /> </a></li>
            <li class="mb-0"><a href="#"> <img class="avatar avatar-lg" src="assets/images/avatar/02.jpg" alt="" /> </a></li>
            <li class="mb-0"><a href="#"> <img class="avatar avatar-lg" src="assets/images/avatar/03.jpg" alt="" /> </a></li>
            <li class="mb-0"><a href="#"> <img class="avatar avatar-lg" src="assets/images/avatar/04.jpg" alt="" /> </a></li>
            <li class="mb-0"><a href="#"> <img class="avatar avatar-lg" src="assets/images/avatar/05.jpg" alt="" /> </a></li>
            <li class="mb-0"><a href="#"> <img class="avatar avatar-lg" src="assets/images/avatar/06.jpg" alt="" /> </a></li>
            <li class="mb-0"><a href="#"> <img class="avatar avatar-lg" src="assets/images/avatar/07.jpg" alt="" /> </a></li>
            <li class="mb-0"><a href="#"> <img class="avatar avatar-lg" src="assets/images/avatar/08.jpg" alt="" /> </a></li>
            <li class="mb-0"><a href="#"> <img class="avatar avatar-lg" src="assets/images/avatar/09.jpg" alt="" /> </a></li>
            <li class="mb-0"><a href="#"> <img class="avatar avatar-lg" src="assets/images/avatar/10.jpg" alt="" /> </a></li>
            <li class="mb-0"><a href="#"> <img class="avatar avatar-lg" src="assets/images/avatar/11.jpg" alt="" /> </a></li>
            <li class="mb-0"><a href="#"> <img class="avatar avatar-lg" src="assets/images/avatar/12.jpg" alt="" /> </a></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
        <h5 class="text-primary mb-4">Popular Tags</h5>
        <ul class="footer-tag list-unstyled mb-0">
          <li><a href="#"><span>Bodybuilding</span></a></li>
          <li><a href="#"><span>Class</span></a></li>
          <li><a href="#"><span>Fitness</span></a></li>
          <li><a href="#"><span>Coach</span></a></li>
          <li><a href="#"><span>Fitness</span></a></li>
          <li><a href="#"><span>Health</span></a></li>
          <li><a href="#"><span>Workout</span></a></li>
          <li><a href="#"><span>Training</span></a></li>
          <li><a href="#"><span>Bootstrap</span></a></li>
          <li><a href="#"><span>HTML5</span></a></li>
          <li><a href="#"><span>CSS3</span></a></li>
        </ul>
      </div>
    </div>
    <hr class="m-0" />
    <div class="footer-bottom mt-0">
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-left">
          <p class="mb-0 text-white"> &copy;Copyright <span id="copyright"> <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script></span> <a href="#"> Luvfit </a> All Rights Reserved </p>
        </div>
        <div class="col-md-6 text-center text-md-right">
          <ul class="list-unstyled list-inline mb-0">
            <li class="list-inline-item"><a class="text-white" href="#">Terms & Conditions</a></li>
            <li class="list-inline-item"><a class="text-white" href="#">API Use Policy</a></li>
            <li class="list-inline-item"><a class="text-white" href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer> */}

 {/* <div id="back-to-top" class="back-to-top">
  <a href="#"> <i class="fas fa-angle-up"></i></a>
 </div> */}


    </>
  );
}

export default Home;
