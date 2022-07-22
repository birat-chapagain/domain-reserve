import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import "./Socials.css";
import { Button } from "@material-ui/core";

const Socials = () => {
  return (
    <React.Fragment>
      <Button
        onClick={(event) =>
          (window.location.href = "https://github.com/birat-chapagain")
        }
      >
        <GitHubIcon className="icon1" />
      </Button>
      <Button
        onClick={(event) =>
          (window.location.href =
            "https://www.linkedin.com/in/birat-chapagain-6a6b16220/")
        }
      >
        <LinkedInIcon className="icon2" />
      </Button>
      <Button
        onClick={(event) =>
          (window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        }
      >
        <TwitterIcon className="icon2" />
      </Button>
    </React.Fragment>
  );
};

export default Socials;
