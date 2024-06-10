import React, { useState } from 'react';
import './index.css';

const NewsItems = ({ title, description, url, url1, mode1, textcolor,}) => {
  const [showMore, setShowMore] = useState(false);
  const descriptionHeight = showMore ? 'auto' : '200px';
  const showReadMoreButton = description.length > 200;
  return (
    <div className={`card bg-${mode1} text-${textcolor} `} style={{width:'18rem'}}>
        <img
          src={url}
          className="card-img-top"
          alt="..."
        />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ height: descriptionHeight, overflow: 'hidden' }}>
            {description}
          </p>
        </div>
        <div className='d-flex w-100'>
          <a href={url1} className="btn btn-primary" target="_blank" rel="noreferrer">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
