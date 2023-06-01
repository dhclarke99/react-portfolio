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
            className="col portfolio-image"
            key={index}
            onMouseEnter={() => handleMouseEnter(i + index)}
            onMouseLeave={handleMouseLeave}
          >
            <a href={item.link}>
              <img src={item.image} alt={item.title} />
              {hoveredItem === i + index && (
                <div className="portfolio-overlay">
                  <h2>{item.title}</h2>
                </div>
              )}
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
