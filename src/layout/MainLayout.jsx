import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import PieDemoChart from "../pages/Statistics/PieDemoChart";


const MainLayout = () => {
  return (
    <div >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className="max-w-7xl mx-auto">
        
      </div>
      <PieDemoChart></PieDemoChart>
    </div>
  );
};

export default MainLayout;
