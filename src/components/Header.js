import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div>
    <header className="row">
    <h1 className='col'>David Clarke</h1>
  <aside className='col'> 
  <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
  
  </aside>
  </header>
  {renderPage()}
  </div>
  
  );


}
