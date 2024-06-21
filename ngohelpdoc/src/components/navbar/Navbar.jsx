// import React from 'react';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
// const Navbar = () => {
//   return (
//     <nav className="font-sans">
//       <div className="bg-blue-gray-100  text-black flex justify-between items-center p-2">
//         <div className="flex space-x-4">
//           <span>📞 + (911) 123 456</span>
//           <span>📧 yourmail@gmail.com</span>
//           <span>📍 Rock Street, San Francisco</span>
//         </div>
//         <div className="flex space-x-4">
//           <a href="#" className="hover:text-yellow-500"><i className="fab fa-facebook"></i></a>
//           <a href="#" className="hover:text-yellow-500"><i className="fab fa-twitter"></i></a>
//           <a href="#" className="hover:text-yellow-500"><i className="fab fa-instagram"></i></a>
//           <a href="#" className="hover:text-yellow-500"><i className="fab fa-google"></i></a>
//           <a href="#" className="hover:text-yellow-500"><i className="fas fa-search"></i></a>
//         </div>
//       </div>
//       <div className="bg-orange-700 flex justify-between items-center p-4 shadow-md">
//         <div className="flex items-center">
//           <img src="path/to/logo.png" alt="Bosa Charity Logo" className="h-12" />
//         </div>
//         <div className="flex space-x-8">
//           <a href="#" className="hover:text-yellow-500">HOME</a>
//           <a href="#" className="hover:text-yellow-500">ABOUT US</a>
//           <a href="#" className="hover:text-yellow-500">EVENTS</a>
//           <a href="#" className="hover:text-yellow-500">PAGES</a>
//           <a href="#" className="hover:text-yellow-500">BLOG</a>
//           <a href="#" className="hover:text-yellow-500">SHOP</a>
//           <a href="#" className="hover:text-yellow-500">CONTACT</a>
//         </div>
//         <div>
//           <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700">Donate Now</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaGoogle, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/Formdonate');
  };

  const handleAboutUsClick = () => {
    navigate('/Aboutus');
  };

  const handleShopClick = () => {
    navigate('/Shop');
  };

  const handleContactClick = () => {
    navigate('/Contact');
  };


  return (
    <nav className="font-sans">
      <div className="bg-gray-100 text-black flex justify-between items-center p-2">
        <div className="flex space-x-4">
          <span><FaPhone /> + (911) 123 456</span>
          <span><FaEnvelope /> yourmail@gmail.com</span>
          <span><FaMapMarkerAlt /> Rock Street, San Francisco</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-yellow-500"><FaFacebook /></a>
          <a href="#" className="hover:text-yellow-500"><FaTwitter /></a>
          <a href="#" className="hover:text-yellow-500"><FaInstagram /></a>
          <a href="#" className="hover:text-yellow-500"><FaGoogle /></a>
          <a href="#" className="hover:text-yellow-500"><FaSearch /></a>
        </div>
      </div>
      <div className="bg-orange-700 flex justify-between items-center p-4 shadow-md">
        <div className="flex items-center">
          <img src="path/to/logo.png" alt="Bosa Charity Logo" className="h-12" />
        </div>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-yellow-500">HOME</a>
          <button className="hover:text-yellow-500" onClick={handleAboutUsClick}>ABOUT US</button>
          <a href="#" className="hover:text-yellow-500">EVENTS</a>
          <a href="#" className="hover:text-yellow-500">PAGES</a>
          <a href="#" className="hover:text-yellow-500">BLOG</a>
          <a href="#" className="hover:text-yellow-500" onClick={handleShopClick}>SHOP</a>
          <a href="#" className="hover:text-yellow-500" onClick={handleContactClick}>CONTACT</a>
        </div>
        <div>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700" onClick={handleDonateClick}>
            Donate Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
