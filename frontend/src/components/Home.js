import React from "react";
import "../CSS/home.css";
import { Link } from "react-router-dom";
import icon from "../icons/student.png";

export default function Home() {
  return (
    <>
      <div className="homebox">
        <h1 id="heading">Welcome to Technical College</h1>
        <div className="container crudbox">
          <h1>One Nation</h1>
          <img src={icon} alt="" className="icon" id="student-icon" />

          <div className="btn-box">
            <Link
              id="add"
              className="btn btn-primary"
              title="Click to insert info"
              to={"register"}
            >
              Add
            </Link>

            <Link
              id="viewbtn"
              className="btn"
              title="Search Roll no"
              to={"search"}
            >
              Search
            </Link>

            <Link
              id="updatebtn"
              className="btn"
              title="Update info"
              to={"update"}
            >
              Update
            </Link>

            <Link
              id="readbtn"
              className="btn"
              title="Show Database"
              to={"read"}
            >
              Read
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
