import React, { useState } from "react";
import { Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import banana from "../assets/Bunch-of-bananas-67e91d5.jpg"


const Admin = ({ handleTabClick, setAllProducts, allProducts }) => {
  const [newProductName, setNewProductName] = useState("");
  const [newProductCost, setNewProductCost] = useState("");
  const [newProductImage, setNewProductImage] = useState(banana);
  const [newProductDisease, setNewProductDisease] = useState("");
  const [newProductTag, setNewProductTag] = useState("");
  const [newProductDescription, setNewProductDescription] = useState("");
  const [newProductFeature, setNewProductFeature] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Math.floor(Math.random() * 10000),
      name: newProductName,
      cost: newProductCost,
      image: newProductImage,
      disease: newProductDisease,
      tag: newProductTag,
      description: newProductDescription,
      feature: newProductFeature,
    };

    setAllProducts([...allProducts, newProduct]);

    setNewProductName("");
    setNewProductCost("");
    setNewProductImage("");
    setNewProductDisease("");
    setNewProductTag("");
    setNewProductDescription("");
    setNewProductFeature("");
  };
  return (
    <div className="grid gap-4">
      <ul className="flex gap-3 w-full">
        <li className="w-full py-2 bg-black text-white flex items-center justify-center font-semibold rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
          Home
        </li>
        <li className="w-full py-2 bg-black text-white flex items-center justify-center font-semibold rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
          About Us
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
      <div className="bg-white grid mt-2 p-4 rounded-xl">
        <form className="grid gap-2" onSubmit={handleAddProduct}>
          <div className="flex gap-5">
            <label className="min-w-[150px] font-semibold">Product Name</label>
            <Input
              placeholder="Enter Product Name"
              onChange={(e) => setNewProductName(e.target.value)}
              required
              type="text"
            />
          </div>
          <div className="flex gap-5">
            <label className="min-w-[150px] font-semibold">Product Cost</label>
            <Input placeholder="Enter Product Cost" required type="text" />
          </div>
          <div className="flex gap-5">
            <label className="min-w-[150px] font-semibold">Product Image</label>
            <Input
              placeholder="Enter Product"
              onChange={(e) => setNewProductImage(e.target.value)}
              required
              type="text"
            />
          </div>
          <div className="flex gap-5">
            <label className="min-w-[150px] font-semibold">
              Product Disease
            </label>
            <Select
              placeholder="Select Disease"
              onChange={(value) => setNewProductDisease(value)}
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
          </div>
          <div className="flex gap-5">
            <label className="min-w-[150px] font-semibold">
              Product Category
            </label>
            <Select
              defaultValue={"Fruit"}
              onChange={(value) => setNewProductTag(value)}
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
          </div>
          <div className="flex gap-5">
            <label className="min-w-[150px] font-semibold">
              Product Description
            </label>
            <TextArea
              placeholder="Enter Product description"
              onChange={(e) => setNewProductDescription(e.target.value)}
              required
              type="text"
            />
          </div>
          <div className="flex gap-5">
            <label className="min-w-[150px] font-semibold">
              Product Feature
            </label>
            <Input
              placeholder="Enter Product Feature"
              onChange={(e) => setNewProductFeature(e.target.value)}
              required
              type="text"
            />
          </div>
          <button
            type="submit"
            className="border bg-green-500 hover:bg-green-400 hover:scale-105 transition-all duration-500 ease-in-out font-semibold w-max px-4 rounded-lg"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
