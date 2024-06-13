import "./index.css";

const NewsItems = ({
  title,
  description,
  url,
  url1,
  mode1,
  textcolor,
  date,
  newsfrom,
  bordercolor
}) => {

  return (
    <div
      className={`card bg-${mode1} text-${textcolor} border border-${bordercolor}`}  style={{ minHeight: "550px" }}>
      <img src={url} className="card-img-top" alt="Image not available" style={{ height: "200px", objectFit: "cover" }}/>
      <div className="card-body">
        <div>
          <h5 className="card-title">{title}</h5>
          <span>
            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary z-3">
              This news is from : {newsfrom}
            </span>
          </span>
          <p
            className="card-text"
            style={{ display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical", overflow: "hidden" }}
          >
            {description}
          </p>
        </div>{" "}
        <div className="bg-dark">
          <p className="m-3 text-danger fw-bold position-absolute top-25 start-0 mb-3 z-2">Publish At: {date}</p>{" "}
        </div>
        <div className="d-flex align-items-center position-absolute bottom-0 start-0 mt-2">
          {" "}
          <a
            href={url1}
            className="btn btn-primary m-5 mb-3"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Visit
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default NewsItems;
