import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link style={{ color: "white" }} to="/">
            Search
          </Link>
        </li>
        <li>
          <Link style={{ color: "white" }} to="/trending">
            Trending
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
}
