import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <h1>
        <Link to="/">Notes App</Link>
      </h1>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/archives">Archive</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
