import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import { useEffect } from "react";



const MainLayout = () => {
  const locationPath = useLocation()
      useEffect(()=>{
        // console.log(locationPath.pathname);
        if(locationPath.pathname === '/'){
          document.title= 'Campaign-Home'
          // document.title = locationPath.pathname
        }
        else{
          document.title = `Campaign${locationPath.pathname.replace('/','-')}`
        }
        if(locationPath.state){
          document.title = `${locationPath.state}-donation`
        }
      },[locationPath])
  return (
    <div className="">
    <Navbar></Navbar>
    <Outlet></Outlet>
      

    </div>
  );
};

export default MainLayout;
