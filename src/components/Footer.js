import React from 'react';
import '../styles/style.css';
import gitHubLogo from '../images/gitHubLogo.png';
import linkedinLogo from '../images/linkedinLogo.png';


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
          <a href="https://www.linkedin.com/in/david-clarke-17355a185/">
          <li>
            <img src={linkedinLogo} alt="GitHub Logo">
            </img>
          </li>
          </a>
        </ul>
        </footer>
);


}