import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useToasts } from "react-toast-notifications";
function Form() {
  const [name, setName] = useState();
  const { addToast } = useToasts();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const HandelSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_MAIL,
        process.env.REACT_APP_TEMPLATE_MAIL,
        {
          name,
          message,
          email,
        },
        process.env.REACT_APP_USERID_MAIL
      )
      .then(() => {
        addToast("Success : \nWe will response as soon as possible", {
          appearance: "success",
          autoDismiss: true,
        });
      })
      .catch(() => {
        addToast("Error : \nSomething went wrong please try again", {
          appearance: "error",
          autoDismiss: true,
        });
      });

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <form className="contact__form" onSubmit={HandelSubmit}>
      <div className="row ">
        <div className="col-6 mb-3">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Fullname"
            required
          />
        </div>
        <div className="col-6 mb-3">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            required
          />
        </div>
        <div className="col-12 mb-3">
          <textarea
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            cols="30"
            required
            rows="5"
          ></textarea>
        </div>
      </div>
      <button type="submit" className="btn__primary">
        Send
      </button>
    </form>
  );
}

export default Form;
