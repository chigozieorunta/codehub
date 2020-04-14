import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="codesyrup-navigation">
      <div className="codesyrup-compact">
        <div className="grid-md-13">
          <div></div>
          <div>
            <ul>
              <li>
                <a href="https://codesyrup.io">HTML</a>
              </li>
              <li>
                <a href="https://codesyrup.io">CSS</a>
              </li>
              <li>
                <a href="https://codesyrup.io">JavaScript</a>
              </li>
              <li>
                <a href="https://codesyrup.io">React.js</a>
              </li>
              <li>
                <a href="https://codesyrup.io">PHP</a>
              </li>
              <li>
                <a href="https://codesyrup.io">Laravel</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;