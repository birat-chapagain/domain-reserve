import React from "react";
import { useEffect, useState } from "react";

import Socials from "./components/Socials";
import "./App.css";

function App() {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const show = document.querySelector("span[data-show]");
      const next =
        show.nextElementSibling || document.querySelector("span:first-child");
      const up = document.querySelector("span[data-up]");

      // if (!isHovering) {
        if (up) {
          up.removeAttribute("data-up");
        }

        show.removeAttribute("data-show");
        show.setAttribute("data-up", "");

        next.setAttribute("data-show", "");
      // }
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <React.Fragment>
      <h2>
        This Domain is reserved
        <div
          className="mask"
          onMouseEnter={() => {
            setIsHovering(true);
            console.log("Hovering");
          }}
          onMouseLeave={() => {
            setIsHovering(false);
            console.log("Not Hovering");
          }}
        >
          <span data-show>by Birat Chapagain</span>
          <span>+977 9864451362</span>
          <span>for portfolio.</span>
        </div>
      </h2>
      <Socials />
    </React.Fragment>
  );
}

export default App;
