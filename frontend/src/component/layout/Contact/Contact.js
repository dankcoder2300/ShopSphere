import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:vishesh2300@gmail.com">
        <Button>Email: vishesh2300@gmail.com</Button>
      </a>
      <a className="phoneBtn" href="tel:+917800603750">
        <Button>Call: +91-7800603750</Button>
      </a>
    </div>
  );
};

export default Contact;
