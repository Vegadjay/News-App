import { useGSAP } from "@gsap/react";
import axios from "axios";
import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import "./index.css";

const Spinner = () => {
  return (
    <div className="text-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

const NewsItems = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="position-relative">
          <img src={props.url} className="card-img-top" alt="..." />
          <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-2">
            {props.getWeb ? props.getWeb.name : ''}
          </span>
        </div>
        <div className={`card-body bg-${props.mode1} text-${props.textcolor}`}>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">{formatDate(props.time)}</small>
          </p>
          <a
            href={props.url1}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    props.setProgress(10);
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&apiKey=c3677ac491e64ce48003dfc11a1d7dbe&page=${currentPage}&pageSize=${itemsPerPage}`
      );
      props.setProgress(70);
      if (response.data && response.data.articles) {
        setArticles(response.data.articles);
        setTotalPages(Math.ceil(response.data.totalResults / itemsPerPage));
      } else {
        console.error("Unexpected response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      props.setProgress(100);
      setLoading(false);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const dummyImage =
    "https://th.bing.com/th/id/OIP.focxdosXfLcVMbGpnwmbHQAAAA?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";

  return (
    <>
      {loading && (
        <div className="text-center">
          <Spinner />
        </div>
      )}
      <div className="titlediv" style={{ marginTop: "80px" }}>
        <h1
          className={`text-center text-${props.textcolor} mt-5`}
          style={{ fontFamily: "Josefin Sans" }}
        >
          Welcome to Gorilla News
        </h1>
      </div>
      <div
        className={`container container-fluid my-5 bg-${props.mode} text-${props.textcolor}`}
      >
        {!loading && (
          <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {articles.map((article, index) => (
                <div className="col mb-3 mb-md-4" key={index}>
                  <NewsItems
                    url={article.urlToImage || dummyImage}
                    title={article.title || "News is not available"}
                    description={article.description || "Data is not available"}
                    url1={article.url || "Data is not available"}
                    mode1={props.mode}
                    textcolor={props.textcolor}
                    time={article.publishedAt || new Date().toISOString()}
                    getWeb={article.source}
                  />
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button
                className="btn btn-primary mx-2"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default News;