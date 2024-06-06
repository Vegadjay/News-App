import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); // New state for loading
  const itemsPerPage = 12;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    setLoading(true); // Set loading to true before fetching data

    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=tesla&from=2024-05-06&sortBy=publishedAt&apiKey=c3677ac491e64ce48003dfc11a1d7dbe&page=${currentPage}&pageSize=${itemsPerPage}`
      );

      if (response.data && response.data.articles) {
        setArticles(response.data.articles);
        setTotalPages(Math.ceil(response.data.totalResults / itemsPerPage));
      } else {
        console.error('Unexpected response structure:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched or an error occurs
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const dummyImage = 'https://via.placeholder.com/150';

  return (
    <>
      <div className="container my-3">
        <h1 className="text-center">Reading Daily News From Here</h1>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="row row-cols-1 row-cols-md-4">
              {articles.map((article, index) => (
                <div className="col mb-4" key={index}>
                  <NewsItems
                    url={article.urlToImage || dummyImage}
                    title={article.title || 'Dummy Title'}
                    description={article.description || 'Dummy Description'}
                    url1={article.url || 'Dummy URL'}
                  />
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center">
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