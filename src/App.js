import React from "react";
import Home from "./components/home";
import garden_image from "./assets/Container-Garden-Headers-OG.jpg";
import Dashboard from "./components/dashboard";

const App = () => {
  const [selectedTab, setSelectedTab] = React.useState("login");

  const handleTabClick = (setting) => {
    setSelectedTab(setting);
  }
  return (
    <div className="p-2 bg-green-500 grid gap-4">
      <img
        className="h-[300px] w-full bg-contain rounded-xl"
        src={garden_image}
        alt=""
      />
        <div>
          {selectedTab === "login" && <Home handleTabClick={handleTabClick}/>}
          {selectedTab === "dashboard" && <Dashboard handleTabClick={handleTabClick} />}
        </div>
      
    </div>
  );
};

export default App;
