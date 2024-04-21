import { Input } from "antd";
import React from "react";

const Product = ({ image, description, feature, cost }) => {
  return (
    <div className="grid gap-4">
      <div className="grid-cols-5 grid gap-2">
        <div className="col-span-2">
          <img src={image} alt="" />
          <p className="text-center text-blue-600 cursor-pointer underline text-xl"></p>
        </div>
        <div className="col-span-1 grid text-xl font-semibold">
          <p>Description</p>
          <p>Feature</p>
          <p className="text-bold">Cost</p>
        </div>
        <div className="col-span-2 grid">
          <p>{description}</p>
          <p>{feature}</p>
          <p>{cost}</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <p>Enter Quantity</p>
        <Input className="w-40" placeholder="Enter quantity" required />
      </div>
      <div className="flex gap-4">
        <button className="border-2 bg-gray-200 w-max px-4 rounded">
          Add to Cart
        </button>
        <button className="border-2 bg-gray-200 w-max px-4 rounded">
          Make a Payment
        </button>
      </div>
      <div className="text-center">
        <p className="font-bold">Note :-</p>
        <p>Fruit rates are per KG</p>
        <p>&</p>
        <p>Herbs rate are per Piece</p>
      </div>
    </div>
  );
};

export default Product;
