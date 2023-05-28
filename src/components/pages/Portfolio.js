import React from 'react';
import portfolioData from './portfolioData';

export default function Portfolio() {
  return (
    <div className="container" id="tab-content">
      <h1>Portfolio</h1>
      <br />
      <div className="row portfolio">
        {portfolioData.map((item, index) => (
          <div className="col portfolio-image" key={index}>
            <h2>{item.title}</h2>
            <a href={item.link}>
              <img src={item.image} alt={item.title} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
