import React from 'react';
import logo from '../../images/logo192.png';

export default function Portfolio() {
  return (
    <div className="container">
      <h1>Portfolio</h1>
      <br></br>
      <div className="row">
      <div className="col">
        <h2>Tech Blog</h2>
      <a href="https://github.com/dhclarke99/tech-blog">
      <img src={logo} alt="Tech Blog">
      
      </img>
      </a>
      </div>
      <div className="col">
      <h2>BucketList Generator</h2>
      <a href="https://github.com/dhclarke99/bucketlist-generator">
      <img src={logo} alt="BucketList Generator">
      
      </img>
      </a>
      </div>
      </div>
      <div className="row">
      <div className="col">
      <h2>Date Planner</h2>
      <a href="https://github.com/dhclarke99/date_planner">
      <img src={logo} alt="Date Planner">
      
      </img>
      </a>
      </div>
      <div className="col">
      <h2>Weather Dashboard</h2>
      <a href="https://github.com/dhclarke99/weather-dashboard">
      <img src={logo} alt="Weather Dashboard">
      
      </img>
      </a>
      </div>
      </div>
      <div className="row">
      <div className="col">
      <h2>ExpressJS NoteTaker</h2>
      <a href="https://github.com/dhclarke99/expressjs-note-taker">
      <img src={logo} alt="ExpressJS NoteTaker">
      
      </img>
      </a>
      </div>
      </div>
    </div>
  );
}
