import React from 'react';
import portfolioData from './portfolioData';

export default function Portfolio() {
  const portfolioItems = portfolioData.map((item, index) => (
    <div className="col portfolio-image" key={index}>
      <h2>{item.title}</h2>
      <a href={item.link}>
        <img src={item.image} alt={item.title} />
      </a>
    </div>
  ));

  const dividedPortfolioItems = [];
  for (let i = 0; i < portfolioItems.length; i += 2) {
    dividedPortfolioItems.push(
      <div className="row portfolio" key={i}>
        {portfolioItems.slice(i, i + 2)}
      </div>
    );
  }

  return (
    <div className="col container" id="tab-content">
      <h1>Portfolio</h1>
      <br />
      {dividedPortfolioItems}
    </div>
  );
}
