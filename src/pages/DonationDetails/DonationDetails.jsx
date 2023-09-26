import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { getToLs, savaToLs } from "../../utility/localStorage";
// sweetAlert 
import swal from 'sweetalert';

const DonationDetails = () => {
  const donations = useLoaderData({});
  const [details, setDetails] = useState({});
  const { images, title, donation_amount, description } = details;

  const { id } = useParams();
  const idInt = parseInt(id);
  useEffect(() => {
    if (donations) {
      const filterDetails = donations.find((donation) => donation.id === idInt);
      setDetails(filterDetails);
    }
  }, [donations, idInt]);

  const handleDonate = () => {
    const localStoredData = getToLs()
    if(localStoredData.includes(idInt)){
      swal("Already Donated!", "Thank you,Checkout your donation history!", "success");
    }
    savaToLs(idInt);
  };

  return (
    <div>
      <div>
        <img className="w-full h-[700px]" src={images} alt="" />
        <div className="bg-gray-400 bg-opacity-60 py-6 relative bottom-24">
          <Link to={`/donation`}>
            <button
              onClick={handleDonate}
              className="btn bg-primary-color text-white text-xl font-semibold relative left-5  ">
              Donate$ {donation_amount}
            </button>
          </Link>
        </div>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default DonationDetails;
