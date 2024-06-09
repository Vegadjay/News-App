import React, { useState } from 'react';
import './index.css'; // Import the external stylesheet

const NewsItems = ({ title, description, url, url1, mode1, textcolor }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const descriptionHeight = showMore ? 'auto' : '200px';
  const showReadMoreButton = description.length > 200;

  return (
    <div className="card mb-4">
      <div style={{ height: '250px', overflow: 'hidden' }}>
        <img
          src={url}
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className={`card-body d-flex flex-column justify-content-between bg-${mode1} text-${textcolor}`}>
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ height: descriptionHeight, overflow: 'hidden' }}>{description}</p>
        </div>
        <div className='d-flex justify-content-between mt-3'>
          {showReadMoreButton && (
            <button className="btn btn-primary" onClick={toggleShowMore}>
              {showMore ? "Show Less" : "Read More"}
            </button>
          )}
          <a href={url1} className="btn btn-primary" target="_blank" rel="noreferrer">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
