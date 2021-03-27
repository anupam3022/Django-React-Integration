import React , { useState, useEffect }  from 'react';
import Menu from './Menu';
import Cookies from 'universal-cookie';

function Plans() {

  const axios = require('axios');
  const [packages, getpackages] = useState([])
  const cookies = new Cookies();


  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/gymprofile/packages')
      .then(res => {
        console.log(res)
        console.log(cookies.get('uuid'));
        getpackages(res.data)
      })
      .catch(err => {
        // console.log(err)
      })
  }, [])

  async function packagepuchase(data){
    console.log(data);
    debugger
    {         
        console.log('Trying to send request');
        
        try {
            
            let res = await axios.patch('http://127.0.0.1:8000/user/userupdate/' , {
            
                uuid:cookies.get('uuid'),
                package_purchased:data.package_name,
                package_class_passes:data.class_count,
                
                

            });
            if (res.status === 200) {
                debugger
                console.log(res.status);
                console.log(cookies.get('uuid'));
                console.log(res.data);  
                window.location='/schedule';
            }
            debugger
            // Don't forget to return something
            return res.data
        }
        catch (err) {
            console.error('Signup Failed , Please try again.');
            window.location='/plans';
            alert(err);
        }
    }

    
  }

  return (
    <>
      <Menu/>
         <section className="space-ptb">
        <div className="container">
          <div className="row">

          {packages.map(data => (
            <div className="col-md-4">
              <div className="pricing bg-light p-4 p-lg-5 mb-4 mb-md-0">
                <div className="text-center">
                  <h5 className="pricing-title text-uppercase mb-3">{data.package_name}</h5>
                  <p>{data.package_description}</p>

                  {/* <input type="hidden" id = 'package_purchased' value={data.package_name}></input>
                  <input type="hidden" id = 'package_class_passes' value={data.class_count}></input>
                  <input type="hidden" id = 'uuid' value = "cd3e926f-ff29-4939-9c9b-18971c6f97f7"></input> */}

                  <span className="pricing-price d-block mb-4 mt-3"><strong className="display-4 font-weight-bold text-dark">${data.package_price}</strong></span>
                </div>
                <ul className="list-unstyled pricing-list mb-4">
                  <li className="d-flex text-dark mb-3">Classes - {data.class_count}</li>
                  <li className="d-flex text-dark mb-3">{data.package_duration} Weeks Duration</li>
                  <li className="d-flex text-dark mb-3">{data.class_count} Class Passes</li>
                </ul>
                <a className="btn btn-outline-secondary btn-block btn-skew" onClick={() => packagepuchase(data)}><span>Buy Package</span></a>
                {/* onClick = {packagepuchase(data)} */}
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Plans;
