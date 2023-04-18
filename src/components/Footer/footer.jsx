import React from "react";
import "./footer.css";

const footer = () => {
  return (
   
      <div className="container__footer">
        <div className="container__footer__1">
          <input type="text" placeholder="Email address or phone number" />
          <input type="text" placeholder="Password" />
          <button className="btn_1">Log in</button>
          <a className="password"
            href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"
            target="_blank"
          >
            Forgotten password?
          </a>
          <hr />
          
          <button className="btn_2">Create new account</button>
        </div>
        <div className="container__footer__2">
          <a className="create"
            href="https://www.facebook.com/pages/create/?ref_type=registration_form"
            target="_blank"
          >
            Create a Page
          </a>
          <p>for a celebrity, brand or bussiness</p>
        </div>
      </div>
  
  );
};

export default footer;
