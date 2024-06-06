import React, { useState } from 'react';
import './index.css';

const NewsItems = ({ title, description, url, url1, mode1, textcolor }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const descriptionHeight = showMore ? 'auto' : '170px';
  const showReadMoreButton = description.length > descriptionHeight.replace('px', '');

  return (
    <>
      <div className="card mx-auto" style={{ width: '18rem', height: '35rem' }}>
        <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
          <img
            src={url}
            className="card-img-top"
            alt="..."
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={`card-body d-flex flex-column justify-content-between bg-${mode1} text-${textcolor}`}>
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text" style={{ height: descriptionHeight, overflow: 'hidden' }}>
              {description}
            </p>
          </div>
          <div className='d-flex justify-content-between'>
            {showReadMoreButton ? (
              showMore ? (
                <button className="btn btn-primary align-self-end" onClick={toggleShowMore}>
                  Show Less
                </button>
              ) : (
                <button className="btn btn-primary align-self-end" onClick={toggleShowMore}>
                  Read More
                </button>
              )
            ) : null}
            <a href={url1} className="btn btn-primary align-self-end" target="_blank" rel="noreferrer">
              Visit
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItems;