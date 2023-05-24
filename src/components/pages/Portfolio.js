import React from 'react';
import logo from '../../images/logo192.png';
import techBlog from '../../images/Tech Blog.png';
import bucketList from '../../images/BucketList.png';
import datePlanner from '../../images/DatePlanner.png';
import weatherDashboard from '../../images/WeatherDashboard.png';
import noteTaker from '../../images/NoteTaker.png';


export default function Portfolio() {
  return (
    <div className="container" id="tab-content">
      <h1>Portfolio</h1>
      <br></br>
      <div className="row portfolio">
      <div className="col portfolio-image">
        <h2>Tech Blog</h2>
      <a href="https://github.com/dhclarke99/tech-blog">
      <img src={techBlog} alt="Tech Blog" >
      
      </img>
      </a>
      </div>
      <div className="col portfolio-image">
      <h2>BucketList Generator</h2>
      <a href="https://github.com/dhclarke99/bucketlist-generator">
      <img src={bucketList} alt="BucketList Generator">
      
      </img>
      </a>
      </div>
      </div>
      <div className="row portfolio">
      <div className="col portfolio-image">
      <h2>Date Planner</h2>
      <a href="https://github.com/dhclarke99/date_planner">
      <img src={datePlanner} alt="Date Planner">
      
      </img>
      </a>
      </div>
      <div className="col portfolio-image">
      <h2>Weather Dashboard</h2>
      <a href="https://github.com/dhclarke99/weather-dashboard">
      <img src={weatherDashboard} alt="Weather Dashboard">
      
      </img>
      </a>
      </div>
      </div>
      <div className="row portfolio">
      <div className="col portfolio-image">
      <h2>ExpressJS NoteTaker</h2>
      <a href="https://github.com/dhclarke99/expressjs-note-taker">
      <img src={noteTaker} alt="ExpressJS NoteTaker">
      
      </img>
      </a>
      </div>
      </div>
    </div>
  );
}
