import React from 'react';

const products = [
  { id: 1, name: 'product3', price: 4500, image: 'path/to/image.png' },
  { id: 2, name: 'Product4', price: 3000, image: 'path/to/image.png' }
];

const AllProducts = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={product.image} alt={product.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-gray-700 text-base">₹{product.price}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
