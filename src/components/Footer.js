import React from 'react';
import '../styles/style.css';
import gitHubLogo from '../images/gitHubLogo.png';


export default function Footer() {
return (
    <footer >
        <ul>
          <a href="https://github.com/dhclarke99">
          <li>
            <img src={gitHubLogo} alt="GitHub Logo">
            </img>
          </li>
          </a>
          <a href="https://github.com/dhclarke99">
          <li>
            <img src={gitHubLogo} alt="GitHub Logo">
            </img>
          </li>
          </a>
        </ul>
        </footer>
);


}