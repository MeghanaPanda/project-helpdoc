import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const products = [
  { id: 1, name: 'product1', price: 4500, image: 'path/to/image.png' },
  { id: 2, name: 'Product2', price: 3000, image: 'path/to/image.png' },
  { id: 3, name: 'Product3', price: 5000, image: 'path/to/image.png' },
  { id: 4, name: 'Product4', price: 6000, image: 'path/to/image.png' },
  { id: 5, name: 'Product5', price: 5000, image: 'path/to/image.png' },
  { id: 6, name: 'Product6', price: 6000, image: 'path/to/image.png' },
  // Add more products as needed
];

const Shop = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4 mt-8 text-orange-700">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-48 mt-10">
          {products.map((product) => (
            <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={product.image} alt={product.name} />
              <div className="px-48 py-24">
                <div className="font-bold text-xl mb-20 mt-10">{product.name}</div>
                <p className="text-gray-700 text-base">₹{product.price}</p>
              </div>
              <div className="px-6 pt-4 pb-2 text-center">
                <button className="bg-orange-700 text-white font-bold py-2 px-4 rounded ">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer className="bg-gray-100" />
    </>
  );
};

export default Shop;
