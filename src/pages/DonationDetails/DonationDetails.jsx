import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    const donations = useLoaderData({});
    const [details,setDetails] = useState({})
    const {images,title,donation_amount,description} = details

    const {id} = useParams()
    const idInt = parseInt(id)
    // console.log(typeof idInt);
    useEffect(()=>{
        if(donations){
            const filterDetails = donations.find(donation => donation.id === idInt)
            setDetails(filterDetails)
        }
    },[donations,idInt])
    console.log(donations);
  return (
    <div>
        hello
        <div>
        <img className="w-full" src={images} alt="" />
        <button className="btn bg-primary-color text-white text-xl font-semibold relative bottom-28 left-5">
          Donate$ {donation_amount}
        </button>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default DonationDetails;
