import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This page was coded by
        <span className="coder">
          <strong> Samira Seyfi</strong> and is
          <a
            href="https://github.com/Samira77-ss/react-weather-app7"
            target="_blank"
            rel="noreferrer"
          >
            Open-Sourced on GitHub
          </a>
          .
        </span>
      </p>
    </div>
  );
}
