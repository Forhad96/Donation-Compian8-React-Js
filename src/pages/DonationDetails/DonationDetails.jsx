import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { savaToLs } from "../../utility/localStorage";

const DonationDetails = () => {
    const donations = useLoaderData({});
    const [details,setDetails] = useState({})
    const {images,title,donation_amount,description} = details

    const {id} = useParams()
    const idInt = parseInt(id)
    useEffect(()=>{
        if(donations){
            const filterDetails = donations.find(donation => donation.id === idInt)
            setDetails(filterDetails)
        }
    },[donations,idInt])

    const handleDonate =()=>{
        savaToLs(idInt)
    }

  return (
    <div>
        <div>
        <img className="w-full" src={images} alt="" />
        <button onClick={handleDonate} className="btn bg-primary-color text-white text-xl font-semibold relative bottom-28 left-5">
          Donate$ {donation_amount}
        </button>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default DonationDetails;
