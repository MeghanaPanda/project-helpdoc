// import React from 'react'
// import Aboutus from '../../components/aboutus/Aboutus'
// import Navbar from '../../components/navbar/Navbar'
// import Footer from '../../components/footer/Footer'
// import Contact from '../../components/contact/Contact'
// function ContactPage() {
//     return (
//         <>
//         <Navbar />
//         <Contact />
//         <Footer/>
//         </>
//       );
// }

// export default ContactPage

import React from 'react';
import Aboutus from '../../components/aboutus/Aboutus';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Contact from '../../components/contact/Contact';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-blue-gray-100" >
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
