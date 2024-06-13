// NewsItems.jsx
import React, { useState } from "react";
import "./index.css";

const NewsItems = ({
  title,
  description,
  url,
  url1,
  mode1,
  textcolor,
  date,
}) => {
  const [showMore, setShowMore] = useState(false);
  const descriptionHeight = showMore ? "auto" : "200px";

  return (
    <div
      className={`card bg-${mode1} text-${textcolor} h-100`}
      style={{ width: "100%" }}
    >
      <img src={url} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{title}</h5>
          <p
            className="card-text"
            style={{ height: descriptionHeight, overflow: "hidden" }}
          >
            {description}
          </p>
          {description.length > 200 && (
            <button
              className={`btn btn-link text-${textcolor}`}
              onClick={() => setShowMore(!showMore)}
            >
              {" "}
              {showMore ? "Show Less" : "Show More"}{" "}
            </button>
          )}{" "}
        </div>{" "}
        <p>Publish At: {date}</p>{" "}
        <div className="d-flex justify-content-between align-items-center">
          {" "}
          <a
            href={url1}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Visit{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default NewsItems;
