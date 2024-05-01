import React, { useState } from "react";
import Home from "./components/home";
import garden_image from "./assets/Container-Garden-Headers-OG.jpg";
import Dashboard from "./components/dashboard";
import Admin from "./components/admin";
import { AllProducts } from "./components/data";

const App = () => {
  const [selectedTab, setSelectedTab] = React.useState("login");
  const [allProducts, setAllProducts] = useState(AllProducts);

  const handleTabClick = (setting) => {
    setSelectedTab(setting);
  }
  return (
    <div className="p-2 h-[100vh] bg-green-500 grid gap-4">
      <img
        className="h-[300px] w-full bg-contain rounded-xl"
        src={garden_image}
        alt=""
      />
        <div>
          {selectedTab === "login" && <Home handleTabClick={handleTabClick}/>}
          {selectedTab === "dashboard" && <Dashboard allProducts={allProducts} handleTabClick={handleTabClick} />}
          {selectedTab === "admin" && <Admin allProducts={allProducts} setAllProducts={setAllProducts} handleTabClick={handleTabClick} />}
        </div>
      
    </div>
  );
};

export default App;
