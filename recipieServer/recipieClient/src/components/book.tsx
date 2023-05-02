import React, { useState } from 'react';
import '../App.css'
export const Book = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className='container'>
        <div className='book'>
            <div className="left">Left Div</div>
            <div className="right">Right Div</div>
        </div>
        <div className="sidebar">Sidebar Div</div>
    </div>
  );
};

