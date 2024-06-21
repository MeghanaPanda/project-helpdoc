// import React from 'react';
// import 'tailwindcss/tailwind.css'; // Make sure Tailwind CSS is properly imported

// const Aboutus = () => {
//   return (
//     <div className="flex flex-wrap justify-between p-6 bg-gray-100">
//       <div className="w-full lg:w-1/2 p-2">
//         <img src="https://www.salaambaalaktrust.com/blog/wp-content/uploads/2022/02/Tax-Exemption-1024x683.jpg" alt="Happy children" className="w-full h-auto rounded-lg" />
//       </div>
//       <div className="w-full lg:w-1/2 p-6">
//         <h2 className="text-orange-700 text-2xl font-bold">ABOUT US</h2>
//         <h1 className="text-4xl font-bold mt-2">Our Work Promise To Uphold The Trust Placed</h1>
//         <p className="text-lg mt-4">
//           Repellendus itaque velit iure ea nostrum cum autem, quam. Gravida harum 
//           incididunt varius volutpat facilisi purus, eum rerum. Hymenaeos sit quaerat 
//           dictumst doloremque ultricies impedit, iaculis!
//         </p>
//         <ul className="list-none mt-4 space-y-2">
//           <li className="text-lg">Porta tempora facilisi, hac.</li>
//           <li className="text-lg">Beatae hac ultrices, nisi.</li>
//           <li className="text-lg">Incididunt vel incidunt.</li>
//           <li className="text-lg">Porta tempora facilisi, hac.</li>
//         </ul>
//         <div className="bg-orange-700 text-white py-6 px-8 rounded-lg text-center mt-6">
//           <h2 className="text-4xl font-bold">28</h2>
//           <p className="text-lg mt-2">YEARS OF EXPERIENCE</p>
//         </div>
//         <button className="bg-orange-700 text-center text-white py-2 px-10 rounded mt-6 hover:bg-yellow-600">Learn More</button>
//       </div>
//       <div className="w-full flex flex-wrap justify-between bg-orange-700 text-white py-6 px-4 rounded-lg mt-6">
//         <div className="text-center flex-1 m-2">
//           <h2 className="text-2xl font-bold">15k+</h2>
//           <p className="text-lg mt-2">VOLUNTEER</p>
//         </div>
//         <div className="text-center flex-1 m-2">
//           <h2 className="text-2xl font-bold">380+</h2>
//           <p className="text-lg mt-2">SPONSORS</p>
//         </div>
//         <div className="text-center flex-1 m-2">
//           <h2 className="text-2xl font-bold">125</h2>
//           <p className="text-lg mt-2">BRANCHES</p>
//         </div>
//         <div className="text-center flex-1 m-2">
//           <h2 className="text-2xl font-bold">75+</h2>
//           <p className="text-lg mt-2">AWARDS</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Aboutus;

import React from 'react';
import 'tailwindcss/tailwind.css'; // Make sure Tailwind CSS is properly imported

const Aboutus = () => {
  return (
    <div className="flex flex-wrap justify-between p-6 bg-gray-100">
      <div className="w-full lg:w-1/2 p-2">
        <img src="https://www.salaambaalaktrust.com/blog/wp-content/uploads/2022/02/Tax-Exemption-1024x683.jpg" alt="Happy children" className="w-full h-auto rounded-lg" />
      </div>
      <div className="w-full lg:w-1/2 p-6">
        <h2 className="text-orange-700 text-2xl font-bold">ABOUT US</h2>
        <h1 className="text-4xl font-bold mt-2">Our Work Promise To Uphold The Trust Placed</h1>
        <p className="text-lg mt-4">
          Repellendus itaque velit iure ea nostrum cum autem, quam. Gravida harum 
          incididunt varius volutpat facilisi purus, eum rerum. Hymenaeos sit quaerat 
          dictumst doloremque ultricies impedit, iaculis!
        </p>
        <ul className="list-none mt-4 space-y-2">
          <li className="text-lg">Porta tempora facilisi, hac.</li>
          <li className="text-lg">Beatae hac ultrices, nisi.</li>
          <li className="text-lg">Incididunt vel incidunt.</li>
          <li className="text-lg">Porta tempora facilisi, hac.</li>
        </ul>
        <div className="bg-orange-700 text-white py-6 px-8 rounded-lg text-center mt-6">
          <h2 className="text-4xl font-bold">28</h2>
          <p className="text-lg mt-2">YEARS OF EXPERIENCE</p>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-orange-700 text-center text-white py-2 px-10 rounded hover:bg-yellow-600">Learn More</button>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-between bg-orange-700 text-white py-6 px-4 rounded-lg mt-6">
        <div className="text-center flex-1 m-2">
          <h2 className="text-2xl font-bold">15k+</h2>
          <p className="text-lg mt-2">VOLUNTEER</p>
        </div>
        <div className="text-center flex-1 m-2">
          <h2 className="text-2xl font-bold">380+</h2>
          <p className="text-lg mt-2">SPONSORS</p>
        </div>
        <div className="text-center flex-1 m-2">
          <h2 className="text-2xl font-bold">125</h2>
          <p className="text-lg mt-2">BRANCHES</p>
        </div>
        <div className="text-center flex-1 m-2">
          <h2 className="text-2xl font-bold">75+</h2>
          <p className="text-lg mt-2">AWARDS</p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;

