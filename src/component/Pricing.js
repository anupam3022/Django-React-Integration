import React from 'react';
import Menu from './Menu';

function Pricing() {
  return (
    <>
    <Menu/>
      <section className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="pricing bg-light p-4 p-lg-5 mb-4 mb-md-0">
                <div className="text-center">
                  <h5 className="pricing-title text-uppercase mb-3">Standard</h5>
                  <p>Positive pleasure-oriented goals are much more powerful.</p>
                  <span className="pricing-price d-block mb-4 mt-3"><strong className="display-4 font-weight-bold text-dark">$12</strong>/mo</span>
                </div>
                <ul className="list-unstyled pricing-list mb-4">
                  <li className="d-flex text-dark mb-3">Cardio <i className="ml-auto fas fa-check text-success font-md" /> </li>
                  <li className="d-flex text-dark mb-3">Swimming Pool <i className="ml-auto fas fa-times text-danger font-md" /> </li>
                  <li className="d-flex text-dark mb-3">Gym <i className="ml-auto fas fa-times text-danger font-md" /> </li>
                  <li className="d-flex text-dark mb-3">Group Lessons <i className="ml-auto fas fa-times text-danger font-md" /> </li>
                  <li className="d-flex text-dark mb-3">Aerobics <i className="ml-auto fas fa-check text-success font-md" /> </li>
                  <li className="d-flex text-dark">Crossfit <i className="ml-auto fas fa-check text-success font-md" /> </li>
                </ul>
                <a className="btn btn-outline-secondary btn-block btn-skew" href="#"><span>Become A Member</span></a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing bg-light p-4 p-lg-5 mb-4 mb-md-0">
                <div className="text-center">
                  <h5 className="pricing-title text-uppercase mb-3">Premium</h5>
                  <p>Make a list of your achievements toward your long-term.</p>
                  <span className="pricing-price d-block mb-4 mt-3 text-secondary"><strong className="display-4 font-weight-bold">$49</strong>/mo</span>
                </div>
                <ul className="list-unstyled pricing-list mb-4">
                  <li className="d-flex text-dark mb-3">Cardio <i className="ml-auto fas fa-check text-success font-md" /> </li>
                  <li className="d-flex text-dark mb-3">Swimming Pool <i className="ml-auto fas fa-times text-danger font-md" /> </li>
                  <li className="d-flex text-dark mb-3">Gym <i className="ml-auto fas fa-check text-success font-md" /> </li>
                  <li className="d-flex text-dark mb-3">Group Lessons <i className="ml-auto fas fa-times text-danger font-md" /> </li>
                  <li className="d-flex text-dark mb-3">Aerobics <i className="ml-auto fas fa-check text-success font-md" /> </li>
                  <li className="d-flex text-dark">Crossfit <i className="ml-auto fas fa-check text-success font-md" /> </li>
                </ul>
                <a className="btn btn-secondary btn-block btn-skew" href="#"><span>Become A Member</span></a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing bg-light p-4 p-lg-5">
                <div className="text-center">
                  <h5 className="pricing-title text-uppercase mb-3">Platinum</h5>
                  <p>Use a past defeat as a motivator. Remind yourself you.</p>
                  <span className="pricing-price d-block mb-4 mt-3"><strong className="display-4 font-weight-bold text-dark">$99</strong>/mo</span>
                </div>
                <ul className="list-unstyled pricing-list mb-4">
                  <li className="d-flex text-dark mb-3">Cardio <i className="ml-auto fas fa-check text-success font-md" /> </li>
                  <li className="d-flex text-dark mb-3">Swimming Pool <i className="ml-auto fas fa-check text-success font-md" /> </li>
                  <li className="d-flex text-dark mb-3">Gym <i className="ml-auto fas fa-check text-success font-md" /> </li>
                  <li className="d-flex text-dark mb-3">Group Lessons <i className="ml-auto fas fa-check text-success font-md" /> </li>
                  <li className="d-flex text-dark mb-3">Aerobics <i className="ml-auto fas fa-check text-success font-md" /> </li>
                  <li className="d-flex text-dark">Crossfit <i className="ml-auto fas fa-check text-success font-md" /> </li>
                </ul>
                <a className="btn btn-outline-secondary btn-block btn-skew" href="#"><span>Become A Member</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Pricing;
