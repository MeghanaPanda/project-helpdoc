import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
function Formdonate() {
  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align to the top to allow page scrolling
    minHeight: '100vh', // Ensure the container takes up at least the full viewport height
    padding: '20px' // Add some padding for better appearance
  };

  const iframeStyles = {
    display: 'block',
    border: 'none',
    width: '640px',
    height: '2475px',
    overflow: 'hidden' // Hide any internal scrollbars
  };

  return (
    <>
    <Navbar/>
    <div className="bg-blue-gray-100"style={containerStyles}>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSfWFa0Up86IRVXjj3qdwZbcbYiD-KPmuVjT9xSH7A8jzMTtrA/viewform?embedded=true"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        style={iframeStyles}
        scrolling="no" // Prevent internal scrolling
      >
        Loading…
      </iframe>
    </div>
    <Footer/>
    </>
  );
}

export default Formdonate;

