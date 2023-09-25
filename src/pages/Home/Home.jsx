import { useLoaderData } from "react-router-dom";
import Donations from "../../components/Donations/Donations";
import Banner from "../../components/Header/Banner";
import { useEffect, useState } from "react";


const Home = () => {
    const [displayDonations,setDisplayDonations]=useState([])
    const donations = useLoaderData()
    useEffect(()=>{

        setDisplayDonations(donations)
        
    },[donations])
    // console.log(displayDonations);
    // const handleSearch=(e)=>{
    //     e.preventDefault()
    //     console.log(e.target.value)
    // }
    return (
        <div>
            <Banner
            displayDonations={displayDonations} 
            setDisplayDonations={setDisplayDonations}></Banner>
            <Donations displayDonations={displayDonations}></Donations>
        </div>
    );
};

export default Home;