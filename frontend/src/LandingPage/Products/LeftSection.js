import React from "react";

function Leftsection({ image, title, description, link1, link2 }) {
  return (
    <div className="container p-3">
      <div className="row p-3">
        <div className="col">
          <img src={image} />
        </div>
        <div className="col">
          <h1>{title}</h1>
          <p>{description}</p>
          <a href="" className="fs-6" style={{ textDecoration: "None" }}>
            {" "}
            <i class="fa-solid fa-arrow-right "></i> {link1} {"  "}
          </a>
          <a
            className="fs-6 "
            style={{ textDecoration: "None", marginLeft: "50px" }}
          >
            {link2} <i class="fa-solid fa-arrow-right "></i>
          </a>
          <div className="mt-3 ">
            <img src="Assets/appstoreBadge (1).png " />
            <img
              src="assets/googlePlayBadge.png"
              style={{ marginLeft: "40px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftsection;
