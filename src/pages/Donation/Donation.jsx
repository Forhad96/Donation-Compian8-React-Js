import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getToLs } from "../../utility/localStorage";
import DonateCard from "./DonateCard";

// sweetAlert
import swal from 'sweetalert'

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
  const handleRemove = () => {

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
          
        });
        localStorage.clear()
        setDisplayDonation([])
      } else {
        swal("Your imaginary file is safe!");
      }
    });

  };


  return (
    <div className="">
      <div className="text-center my-5">
      <button onClick={handleRemove} className="bg-red-400 px-4 py-2 rounded text-white font-bold mt-5 ">Remove All</button>

      </div>
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
        <div className="text-center my-5">
        {
        displayDonation.length > 4 &&
        <button
        onClick={()=>setIsShow(!isShow)}
        className="bg-green-600 px-6 text-lg py-2 rounded text-white font-bold mt-5">
          {isShow ?'See Less':'See All'}
      </button>
      }
        </div>


    </div>
  );
};

export default Donation;
