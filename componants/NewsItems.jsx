import React from 'react';

const NewsItems = ({ title, description, url, url1 }) => {
  return (
    <>
      <div className="card mx-auto" style={{ width: '18rem', height: '30rem' }}>
        <img
          src={url}
          className="card-img-top"
          alt="..."
          style={{
            height: '200px',
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text" style={{ height: '100px', overflow: 'auto' }}>
              {description}
            </p>
          </div>
          <a href={url1} className="btn btn-primary align-self-end" target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItems;