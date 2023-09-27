import { useLoaderData } from "react-router-dom";
import Donations from "../../components/Donations/Donations";
import Banner from "../../components/Header/Banner";
import { useEffect, useState } from "react";

// sweet alert'
import swal from 'sweetalert'


const Home = () => {
    const [displayDonations,setDisplayDonations]=useState([])
    const donations = useLoaderData()
    useEffect(()=>{

        setDisplayDonations(donations)
        
    },[donations])



        const handleSearch = (searchValue) => {
                
            const searchDisplay = donations?.filter(
                (displayDonation) =>
                  displayDonation.category.toLowerCase() === searchValue.toLowerCase()
              );
              if(searchDisplay.length){
                  setDisplayDonations(searchDisplay)
              }
              else{
                swal("Please Search with category name");

              }
        };
      

    return (
        <div>
            <Banner
            handleSearch={handleSearch}
            ></Banner>
            <Donations displayDonations={displayDonations}></Donations>
        </div>
    );
};

export default Home;