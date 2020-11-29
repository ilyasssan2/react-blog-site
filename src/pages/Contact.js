import React from "react";
import { Send, MapPin, PhoneCall } from "react-feather";
import Form from "../components/Form";
import PageTop from "../components/PageTop";
function Contact() {
  document.title = "Contact us";
  return (
    <div>
      <PageTop page="Contact Us" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.55067307464!2d-7.657033315659803!3d33.572410807547655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4v1604862136816!5m2!1sen!2sma"
              height="400"
              frameBorder="0"
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-lg-4 col-ms-12">
            <h2 className="mb-4">Information</h2>
            <ul className="ul__information">
              <li>
                <div className="icon__container">
                  <PhoneCall />
                </div>
                <div>
                  <span>+2129477470 </span>
                  <span>+2129477470 </span>
                </div>
              </li>
              <li>
                <div className="icon__container">
                  <Send />
                </div>
                <div>
                  <span>test@test.com </span>
                </div>
              </li>
              <li>
                <div className="icon__container">
                  <MapPin />
                </div>
                <div>
                  <span>put your address here </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-8 col-ms-12 ">
            <h2 className="mb-4">leave a message</h2>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
