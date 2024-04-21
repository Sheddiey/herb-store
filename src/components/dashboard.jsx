import { Card, Select } from "antd";
import React, { useState } from "react";
import { AllProducts } from "./data";
import Product from "./product";

const Dashboard = ({ handleTabClick }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (productId) => {
    const product = AllProducts.find((product) => product.id === productId);
    setSelectedProduct(product);
  };

  return (
    <div className="grid gap-4">
      <ul className="flex gap-3 w-full">
        <li className="w-full py-2 bg-black text-white flex items-center justify-center font-semibold rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
          Your Fruits and Herbs
        </li>
        <li className="w-full py-2 bg-black text-white flex items-center justify-center font-semibold rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
          Sell Item
        </li>
        <li className="w-full py-2 bg-black text-white flex items-center justify-center font-semibold rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
          Search Hospitals
        </li>
        <li className="w-full py-2 bg-black text-white flex items-center justify-center font-semibold rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
          Feedback
        </li>
        <li
          onClick={() => handleTabClick("login")}
          className="w-full py-2 bg-black text-white flex items-center justify-center font-semibold rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
        >
          Logout
        </li>
      </ul>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-1 bg-white p-4 h-max grid gap-5 rounded-xl">
          <p className="uppercase text-2xl">Select disease</p>
          <Select
            placeholder="Select Disease"
            options={[
              {
                value: "Asthma",
                label: "Asthma",
              },
              {
                value: "Arthritis",
                label: "Arthritis",
              },
              {
                value: "Migraine",
                label: "Migraine",
              },
              {
                value: "Eczema",
                label: "Eczema",
              },
              {
                value: "Fibromyalgia",
                label: "Fibromyalgia",
              },
            ]}
          />
          <button className="border bg-gray-200 w-max px-4 rounded">
            Search
          </button>
        </div>
        <div className="col-span-3 bg-white rounded-xl p-4">
          {!selectedProduct && (
            <div>
              <p className="font-semibold text-xl">All Products</p>
              <div className="grid grid-cols-3 gap-2">
                {AllProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleClick(product.id)}
                    className="cursor-pointer"
                  >
                    <Card>
                      <img src={product.image} alt="" />
                      <p className="text-center text-blue-600 cursor-pointer underline text-xl">
                        {product.name}
                      </p>
                      <p className="opacity-80 text-blue-500 text-center">
                        {product.cost}
                      </p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectedProduct && (
            <Product
              image={selectedProduct.image}
              description={selectedProduct.description}
              feature={selectedProduct.feature}
              cost={selectedProduct.cost}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
