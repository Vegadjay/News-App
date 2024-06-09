import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css"; // Import the external stylesheet

const Spinner = () => (
  <div className="text-center">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="alert alert-danger" role="alert">
    {message}
  </div>
);

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

const NewsItems = (props) => (
  <div className="card mb-4">
    <div style={{ height: '250px', overflow: 'hidden' }}>
      <img
        src={props.url}
        className="card-img-top"
        alt="..."
      />
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
        className="btn btn-primary w-100"
      >
        Read More
      </a>
    </div>
  </div>
);

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 12;

  const apiKeys = ["c3677ac491e64ce48003dfc11a1d7dbe", "df8e59db2ed54b31b85b4b36650098c7"];
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);

  const defaultCategory = "general";
  const defaultCountry = "us";

  useEffect(() => {
    fetchData();
  }, [currentPage, props.category, props.country, currentKeyIndex]);

  const fetchData = async (retries = 3) => {
    props.setProgress(10);
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=${props.category || defaultCategory}&country=${props.country || defaultCountry}&apiKey=${apiKeys[currentKeyIndex]}&page=${currentPage}&pageSize=${itemsPerPage}`
      );
      props.setProgress(70);
      if (response.data && response.data.articles) {
        setArticles(response.data.articles);
        setTotalPages(Math.ceil(response.data.totalResults / itemsPerPage));
      } else {
        throw new Error("Unexpected response structure");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response && error.response.status === 429) {
        setCurrentKeyIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
      } else if (retries > 0) {
        setTimeout(() => fetchData(retries - 1), 2000);
        return;
      } else {
        setError("Failed to fetch news. Please check your internet connection or try again later.");
      }
    } finally {
      props.setProgress(100);
      setLoading(false);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const dummyImage = "https://via.placeholder.com/400x200?text=Image+Not+Available";

  return (
    <div className="container mt-5 pt-5">
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      <div className="mt-5 pt-4">
        <h1 className={`text-center text-${props.textcolor}`} style={{ fontFamily: "Josefin Sans", fontSize: "2rem" }}>
          Welcome to Gorilla News
        </h1>
      </div>
      <div className={`py-4 bg-${props.mode} text-${props.textcolor}`}>
        {!loading && !error && (
          <>
            <div className="row">
              {articles.map((article, index) => (
                <div className="col-md-3" key={index}>
                  <NewsItems
                    url={article.urlToImage || dummyImage}
                    title={article.title || "News is not available"}
                    description={article.description || "Data is not available"}
                    url1={article.url || "#"}
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
                className="btn btn-primary"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default News;
