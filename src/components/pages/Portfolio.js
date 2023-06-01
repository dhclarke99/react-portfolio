import React, { useState } from 'react';
import portfolioData from './portfolioData';

export default function Portfolio() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const dividedPortfolioItems = [];
  for (let i = 0; i < portfolioData.length; i += 2) {
    dividedPortfolioItems.push(
      <div className="row portfolio" key={i}>
        {portfolioData.slice(i, i + 2).map((item, index) => (
          <div
            className="col portfolio-item"
            key={index}
            onMouseEnter={() => handleMouseEnter(i + index)}
            onMouseLeave={handleMouseLeave}
          >
            <a href={item.link} className="portfolio-link">
              <div className="portfolio-image-container">
                <img src={item.image} alt={item.title} className="portfolio-image" />
                {hoveredItem === i + index && (
                  <div className="portfolio-overlay">
                    <h2>{item.title}</h2>
                  </div>
                )}
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="container" id="tab-content">
      <h1>Portfolio</h1>
      <br />
      {dividedPortfolioItems}
    </div>
  );
}
