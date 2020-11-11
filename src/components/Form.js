import React, { useState } from "react";

function Form() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const HandelSubmit = (e) => {
    e.preventDefault();
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
          />
        </div>
        <div className="col-6 mb-3">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
        </div>
        <div className="col-12 mb-3">
          <textarea
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            cols="30"
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
