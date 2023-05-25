import React from 'react';

const PDF_URL = 'http://localhost:3000/David_Hernandez_Clarke_Resume.pdf';

export default function Resume() {
  const downloadFile=(url)=> {
    const fileName = url.split('/').pop();
const aTag = document.createElement('a');
aTag.href =url;
aTag.setAttribute('download', fileName);
document.body.appendChild(aTag);
aTag.click();
aTag.remove();

  };
  return (
    <div id="tab-content">
      <h1>Resume</h1>
      <button onClick={()=>{downloadFile(PDF_URL)}}>
        Download my Resume
      </button>
      <h3>Front-End Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-End Proficiencies</h3>
      <ul>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>ExpressJS</li>
      </ul>
    </div>
  );
}
