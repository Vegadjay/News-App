import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";
import NewsItems from '../componants/NewsItems.jsx';
import Spinner from '../componants/Spinner.jsx'
const ErrorMessage = ({ message }) => (
  <div className="alert alert-danger" role="alert">
    {message}
  </div>
);



const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 12;
  const apiKeys = [
    "c3677ac491e64ce48003dfc11a1d7dbe",
    "df8e59db2ed54b31b85b4b36650098c7",
  ];
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);

  const defaultCategory = "general";
  const defaultCountry = "us";
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 8) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
    document.body.appendChild(css);

}
  useEffect(() => {
    fetchData();
  }, [currentPage, props.category, props.country, currentKeyIndex]);

  const fetchData = async (retries = 3) => {
    props.setProgress(10);
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=${
          props.category || defaultCategory
        }&country=${props.country || defaultCountry}&apiKey=${
          apiKeys[currentKeyIndex]
        }&page=${currentPage}&pageSize=${itemsPerPage}`
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
        setError(
          "Failed to fetch news. Please check your internet connection or try again later."
        );
      }
    } finally {
      props.setProgress(100);
      setLoading(false);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const dummyImage =
    "https://via.placeholder.com/400x200?text=Image+Not+Available";

  return (
    <>
      <h1 className={`text-center fw-bolder mt-5 text-${props.textcolor}`}>Welcome To Deer News 📰</h1>
      <h4 className={`typewrite text-center text-${props.textcolor}`} data-period="1000" data-type='["Welcome to our news","Read Fresh News Daily"]'>
      <span class="wrap"></span>
      </h4>
    <div className="container p-4">
      {/* bg-${props.mode} Add this class class*/}
      {loading && <Spinner />}
      {!loading && error && <ErrorMessage message={error} />}
      {!loading && !error && (
        <>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
            {articles.map((article, index) => (
             <div className="col mb-4" key={index}>
             {(() => {
               const publishedDate = new Date(article.publishedAt || new Date().toISOString());
               return (
                 <>
                   <div className="col mb-2 text-muted">
                   </div>
                   <NewsItems
                     url={article.urlToImage || dummyImage}
                     title={article.title || "News is not available"}
                     description={article.description || "Data is not available"}
                     url1={article.url || "#"}
                     mode1={props.mode}
                     textcolor={props.textcolor}
                     getWeb={article.source}
                     newsfrom={article.source.name}
                     date={publishedDate.toLocaleString()}
                     border={props.bordercolor}
                   />
                 </>
               );
             })()}
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
  </>
  );
  };

export default News;