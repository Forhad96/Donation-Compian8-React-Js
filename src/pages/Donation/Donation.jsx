import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getToLs } from "../../utility/localStorage";
import DonateCard from "./DonateCard";

const Donation = () => {
  const donations = useLoaderData();
  const [displayDonation, setDisplayDonation] = useState([]);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (donations) {
      const localStoredData = getToLs();
      const filterDonations = donations.filter((donation) =>
        localStoredData.includes(donation.id)
      );
      if(filterDonations){

        setDisplayDonation(filterDonations);
      }
    }
  }, [donations]);
  const handleShow = () => {
      setIsShow(!isShow)
  };
console.log(displayDonation.length);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5">
        {
            isShow ? displayDonation?.map((donation) => (
                <DonateCard key={donation.id} donation={donation}></DonateCard>
              )):
              displayDonation?.slice(0,4).map((donation) => (
                <DonateCard key={donation.id} donation={donation}></DonateCard>
              ))
        }
      </div>
      {
        displayDonation.length > 4 &&
        <button
        onClick={handleShow}
        className="text-lg font-semibold px-4 py-2 rounded mt-5 btn btn-primary text-white">
          {isShow ?'See Less':'See All'}
      </button>
      }


    </div>
  );
};

export default Donation;
