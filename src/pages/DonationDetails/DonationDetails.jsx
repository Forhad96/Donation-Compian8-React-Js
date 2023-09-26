import { useEffect, useState } from "react";
import {  useLoaderData, useNavigate, useParams } from "react-router-dom";
import { getToLs, savaToLs } from "../../utility/localStorage";
// sweetAlert
import swal from "sweetalert";

const DonationDetails = () => {
  const donations = useLoaderData({});
  const [details, setDetails] = useState({});
  const {
    images,
    title,
    category,
    donation_amount,
    description,
    card_color,
    btn_color,
    text_color,
  } = details;
  // const { images, title, donation_amount, description } = details;

  const { id } = useParams();
  const idInt = parseInt(id);
  useEffect(() => {
    if (donations) {
      const filterDetails = donations.find((donation) => donation.id === idInt);
      setDetails(filterDetails);
    }
  }, [donations, idInt]);

  const navigate = useNavigate()
  const handleDonate = () => {
    const localStoredData = getToLs();
    if (localStoredData.includes(idInt)) {
      navigate('/donation')
      swal(
        "Already Donated!",
        "Thank you,Checkout your donation history!",
        "error"
      );
    }
    else{
      swal("Congratulations!", "Your donation has been successfully processed. Thank you for your generosity and support.", "success");
      savaToLs(idInt);
    }
  };

  return (
    <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-4 mx-3">
    <img className="max-h-[620px] rounded" src={images} alt="" />
    <div className="relative  bottom-20 ">
      <div className="bg-[#0b0b0b80] mb-5 pt-0">
      <button
            onClick={handleDonate}
            style={{ backgroundColor: text_color }}
            className="select-none rounded ml-5 my-5 py-3 px-4 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true">
            Donate $ {donation_amount}
          </button>
      </div>
      <div className="">
      <h5 className="mb-2 block font-sans text-xl md:text-3xl font-bold leading-snug tracking-normal text-[#0B0B0B] antialiased">
        {title}
      </h5>
      <p className="block text-base  leading-relaxed text-inherit antialiased">
        {description}
      </p>
      </div>
    </div>
  </div>
  );
};

export default DonationDetails;
