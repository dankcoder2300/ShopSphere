import React from "react";
import "./aboutSection.css";
import photo from "./profilePic.png"
import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitGithub= () => {
    window.location = "https://github.com/dankcoder2300";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={photo}
              alt="Founder"
            />
            <Typography>Vishesh Pandey</Typography>
            <Button onClick={visitGithub}  color="primary">
              Visit Github
            </Button>
            <span>
              This is a wesbite made by Vishesh Pandey.
            </span>
            <span>MERN Stack Web Developer</span>
            <span>Final Year, CSE @IIT DHANBAD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;