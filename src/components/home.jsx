import React, { useState } from "react";
import { Input } from "antd";

const Home = ({ handleTabClick }) => {
  const [userId, setUserId] = useState("");
  const [passcode, setPasscode] = useState("");

  const handleLogin = () => {
    if (userId === "customer" && passcode === "1234567") {
      handleTabClick("dashboard");
    } else if (userId === "admin" && passcode === "1234567") {
      handleTabClick("admin");
    } else {
      alert("Wrong password or account id");
    }
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
          Register
        </li>
        <li className="w-full py-2 bg-black text-white flex items-center justify-center font-semibold rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
          Login
        </li>
      </ul>
      <div className="bg-white p-4 grid mt-2 rounded-xl">
        <p className="font-semibold text-3xl">Login</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="grid gap-2"
        >
          <div className="grid gap-2">
            <label>User Id</label>
            <Input
              placeholder="Enter User Id"
              onChange={(e) => setUserId(e.target.value)}
              required
              type="text"
            />
          </div>
          <div className="grid gap-2">
            <label>Password</label>
            <Input
              placeholder="Enter Password"
              onChange={(e) => setPasscode(e.target.value)}
              required
              type="password"
            />
          </div>
          <button
            onClick={handleLogin}
            className="border bg-green-500 hover:bg-green-400 hover:scale-105 transition-all duration-500 ease-in-out font-semibold w-max px-4 rounded-lg"
            type="submit"
          >
            Login
          </button>
        </form>
        <p>
          New User?{" "}
          <span className="text-blue-500 underline hover:opacity-70 transition-all duration-300 ease-in-out cursor-pointer">
            Register Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Home;
