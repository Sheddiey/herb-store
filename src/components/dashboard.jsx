import { Card, Select } from "antd";
import React, { useState } from "react";
import Product from "./product";

const Dashboard = ({ handleTabClick, allProducts }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [tagFilter, setTagFilter] = useState("");
  const [diseaseFilter, setDiseaseFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts); // Initial filtered products

  const handleClick = (productId) => {
    const product = allProducts.find((product) => product.id === productId);
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  const handleSearch = () => {
    const results = searchProducts(tagFilter, diseaseFilter);
    setFilteredProducts(results); // Update filtered products on search
  };

  const clearSearch = () => {
    setTagFilter(""); // Reset tag filter
    setDiseaseFilter(""); // Reset disease filter
    setFilteredProducts(allProducts); // Set filtered products back to all
  };

  function searchProducts(tagFilter, diseaseFilter) {
    return allProducts.filter((product) => {
      const tagMatches = !tagFilter || product.tag === tagFilter;
      const diseaseMatches =
        !diseaseFilter || product.disease === diseaseFilter;
      return tagMatches && diseaseMatches;
    });
  }

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
      <div className="grid  grid-cols-4 gap-2">
        <div className="col-span-1 bg-white p-4 h-max grid gap-5 rounded-xl">
          <p className="font-semibold text-2xl">Select disease</p>
          <Select
            placeholder="Select Disease"
            onChange={(value) => setDiseaseFilter(value)}
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
                value: "Cold",
                label: "Cold",
              },
              {
                value: "Fibromyalgia",
                label: "Fibromyalgia",
              },
            ]}
          />
          <p className="font-medium text-2xl">Fruit or Herb</p>
          <Select
            defaultValue={"Fruit"}
            onChange={(value) => setTagFilter(value)}
            options={[
              {
                value: "Herb",
                label: "Herb",
              },
              {
                value: "Fruit",
                label: "Fruit",
              },
            ]}
          />
          <div className="flex w-full justify-between">
            <button
              className="border bg-green-500 hover:bg-green-400 hover:scale-105 transition-all duration-500 ease-in-out font-semibold w-max px-4 rounded-lg"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              className="border bg-green-500 hover:bg-green-400 hover:scale-105 transition-all duration-500 ease-in-out font-semibold w-max px-4 rounded-lg"
              onClick={clearSearch}
            >
              Clear Search
            </button>
          </div>
        </div>
        <div className="col-span-3 bg-white rounded-xl p-4">
          {!selectedProduct && (
            <div>
              <p className="font-semibold text-xl">All Products</p>
              <div className="grid grid-cols-3 gap-2">
                {filteredProducts.map((product) => (
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
              handleBack={handleBack}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
