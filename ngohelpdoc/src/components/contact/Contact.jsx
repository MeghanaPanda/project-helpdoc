// import React from 'react';

// function Contact() {
//   const containerStyles = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'flex-start', // Align to the top to allow page scrolling
//     minHeight: '100vh', // Ensure the container takes up at least the full viewport height
//     padding: '20px' // Add some padding for better appearance
//   };

//   const iframeStyles = {
//     display: 'block',
//     border: 'none',
//     width: '640px',
//     height: '2463px',
//     overflow: 'hidden' // Hide any internal scrollbars
//   };

//   return (
//     <div style={containerStyles}>
//       <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScUm_egezyEBhAk2kTfLsmDS69bjtWNn7Uo-eDFs8FV80nN8Q/viewform?embedded=true" 
//       width="640" 
//       height="816" 
//       frameborder="0"
//        marginheight="0" 
//        marginwidth="0"
//         style={iframeStyles}
//         scrolling="no" // Prevent internal scrolling
//       >
//         Loading…
//       </iframe>
//     </div>
//   );
// }

// export default Contact;


//Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="p-4" > {/* Use padding as needed */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScUm_egezyEBhAk2kTfLsmDS69bjtWNn7Uo-eDFs8FV80nN8Q/viewform?embedded=true" 
        height="640"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        scrolling="yes"
        className="w-full h-screen"  // Adjust height as needed
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Contact;

