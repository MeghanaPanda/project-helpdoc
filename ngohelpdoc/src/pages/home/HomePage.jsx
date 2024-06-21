// import React from 'react';
// import Layout from "../../components/layout/Layout";
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import Sponsers from '../../components/Sponsers/Sponsers';
// import Cards from '../../components/card/Cards';
// import Testimonial from '../../components/testimonial/Testimonial';

// const HomePage = () => {
//     const SamplePrevArrow = (props) => {
//         const { className, style, onClick } = props;
//         return (
//             <div
//                 className={`${className} absolute left-0 z-10`}
//                 style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
//                 onClick={onClick}
//             >
//                 <FaArrowLeft className="text-white" />
//             </div>
//         );
//     };

//     const SampleNextArrow = (props) => {
//         const { className, style, onClick } = props;
//         return (
//             <div
//                 className={`${className} absolute right-0 z-10`}
//                 style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
//                 onClick={onClick}
//             >
//                 <FaArrowRight className="text-white" />
//             </div>
//         );
//     };

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//     };

//     return (
//         <Layout>
//             <Slider {...settings}>
//                 <div>
//                     <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://st2.depositphotos.com/3591429/11974/i/450/depositphotos_119741292-stock-photo-people-drawing-banner.jpg)' }}>
//                         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                             <div className="text-center text-white p-4">
//                                 <h2 className="text-4xl font-bold">Let's Build The Better World Together</h2>
//                                 <p className="mt-4">Provident tenetur...</p>
//                                 <div className="mt-4">
//                                     <button className="bg-orange-700 text-white px-4 py-2 rounded mr-2">Donate fund</button>
//                                     <button className="bg-transparent border border-white text-white px-4 py-2 rounded">Read More</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://irp.cdn-website.com/3f4c882c/dms3rep/multi/Top+10+Genuine+Charity+Organizations+in+India+%281%29-21cf4d8a.webp)' }}>
//                         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                             <div className="text-center text-white p-4">
//                                 <h2 className="text-4xl font-bold">Another Slide</h2>
//                                 <p className="mt-4">Lorem ipsum dolor sit...</p>
//                                 <div className="mt-4">
//                                     <button className="bg-orange-700 text-white px-4 py-2 rounded mr-2">Donate fund</button>
//                                     <button className="bg-transparent border border-white text-white px-4 py-2 rounded">Read More</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Add more slides as needed */}
//             </Slider>
//             <Sponsers />
//             <Cards />
//             <Testimonial />
//         </Layout>
//     );
// }

// export default HomePage;


// import React from 'react';
// import Layout from "../../components/layout/Layout";
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import Sponsers from '../../components/Sponsers/Sponsers';
// import Cards from '../../components/card/Cards';
// import Testimonial from '../../components/testimonial/Testimonial';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const HomePage = () => {
//     const SamplePrevArrow = (props) => {
//         const { className, style, onClick } = props;
//         return (
//             <div
//                 className={`${className} absolute left-0 z-10`}
//                 style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
//                 onClick={onClick}
//             >
//                 <FaArrowLeft className="text-white" />
//             </div>
//         );
//     };

//     const SampleNextArrow = (props) => {
//         const { className, style, onClick } = props;
//         return (
//             <div
//                 className={`${className} absolute right-0 z-10`}
//                 style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
//                 onClick={onClick}
//             >
//                 <FaArrowRight className="text-white" />
//             </div>
//         );
//     };

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//     };

//     const notify = () => {
//         toast.info(
//             <div>
//                 <p>Click the link below to fill out the review form:</p>
//                 <a href="https://docs.google.com/forms/d/e/1FAIpQLScUm_egezyEBhAk2kTfLsmDS69bjtWNn7Uo-eDFs8FV80nN8Q/viewform?embedded=true" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                     Review Form
//                 </a>
//             </div>,
//             {
//                 position: "top-center",
//                 autoClose: false,
//                 closeOnClick: true,
//             }
//         );
//     };

//     return (
//         <Layout>
//             <Slider {...settings}>
//                 <div>
//                     <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://st2.depositphotos.com/3591429/11974/i/450/depositphotos_119741292-stock-photo-people-drawing-banner.jpg)' }}>
//                         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                             <div className="text-center text-white p-4">
//                                 <h2 className="text-4xl font-bold">Let's Build The Better World Together</h2>
//                                 <p className="mt-4">Provident tenetur...</p>
//                                 <div className="mt-4">
//                                     <button className="bg-orange-700 text-white px-4 py-2 rounded mr-2">Donate fund</button>
//                                     <button className="bg-transparent border border-white text-white px-4 py-2 rounded">Read More</button>
//                                     <button onClick={notify} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Open Review Form</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://irp.cdn-website.com/3f4c882c/dms3rep/multi/Top+10+Genuine+Charity+Organizations+in+India+%281%29-21cf4d8a.webp)' }}>
//                         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                             <div className="text-center text-white p-4">
//                                 <h2 className="text-4xl font-bold">Another Slide</h2>
//                                 <p className="mt-4">Lorem ipsum dolor sit...</p>
//                                 <div className="mt-4">
//                                     <button className="bg-orange-700 text-white px-4 py-2 rounded mr-2">Donate fund</button>
//                                     <button className="bg-transparent border border-white text-white px-4 py-2 rounded">Read More</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Add more slides as needed */}
//             </Slider>
//             <Sponsers />
//             <Cards />
//             <Testimonial />
//             <ToastContainer  />
//         </Layout>
//     );
// }

// export default HomePage;



import React, { useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Sponsers from '../../components/Sponsers/Sponsers';
import Cards from '../../components/card/Cards';
import Testimonial from '../../components/testimonial/Testimonial';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chatbot from '../../components/chatbot/Chatbot';

const HomePage = () => {
    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} absolute left-0 z-10`}
                style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
                onClick={onClick}
            >
                <FaArrowLeft className="text-white" />
            </div>
        );
    };

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} absolute right-0 z-10`}
                style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
                onClick={onClick}
            >
                <FaArrowRight className="text-white" />
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const notify = () => {
        toast.info(
            <div>
                <p>Click the link below to fill out the review form:</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScUm_egezyEBhAk2kTfLsmDS69bjtWNn7Uo-eDFs8FV80nN8Q/viewform?embedded=true" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    Review Form
                </a>
            </div>,
            {
                position: "top-center",
                autoClose: false,
                closeOnClick: true,
            }
        );
    };

    useEffect(() => {
        notify();
    }, []);

    return (
        <Layout>
            <Slider {...settings}>
                <div>
                    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://st2.depositphotos.com/3591429/11974/i/450/depositphotos_119741292-stock-photo-people-drawing-banner.jpg)' }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-center text-white p-4">
                                <h2 className="text-4xl font-bold">Let's Build The Better World Together</h2>
                                <p className="mt-4">Provident tenetur...</p>
                                <div className="mt-4">
                                    <button className="bg-orange-700 text-white px-4 py-2 rounded mr-2">Donate fund</button>
                                    <button className="bg-transparent border border-white text-white px-4 py-2 rounded">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://irp.cdn-website.com/3f4c882c/dms3rep/multi/Top+10+Genuine+Charity+Organizations+in+India+%281%29-21cf4d8a.webp)' }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-center text-white p-4">
                                <h2 className="text-4xl font-bold">Another Slide</h2>
                                <p className="mt-4">Lorem ipsum dolor sit...</p>
                                <div className="mt-4">
                                    <button className="bg-orange-700 text-white px-4 py-2 rounded mr-2">Donate fund</button>
                                    <button className="bg-transparent border border-white text-white px-4 py-2 rounded">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add more slides as needed */}
            </Slider>
            <Sponsers />
            <Cards />
            <Testimonial />
            <ToastContainer />
            <Chatbot/>
        </Layout>
    );
}

export default HomePage;
