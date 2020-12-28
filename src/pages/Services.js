import React from "react";
import PageTop from "../components/PageTop";

function Services() {
  document.title = "Services";
  return (
    <div>
      <PageTop page="Services" />
      <div className="services ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4  service active ">
              <div>
                <img src="/assets/images/services/s2.svg" alt="" />
              </div>
              <div>
                <h5>Hello there</h5>
                <p>Lorem ipsum dolor sit, amet consectetur</p>
              </div>
            </div>

            <div className="col-lg-4   service  ">
              <div>
                <img src="/assets/images/services/s2.svg" alt="" />
              </div>
              <div>
                <h5>Hello there</h5>
                <p>Lorem ipsum dolor sit, amet consectetur</p>
              </div>
            </div>
            <div className="col-lg-4  service ">
              <div>
                <img src="/assets/images/services/s3.svg" alt="" />
              </div>
              <div>
                <h5>Hello there</h5>
                <p>Lorem ipsum dolor sit, amet consectetur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
