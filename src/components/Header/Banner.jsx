import { useState } from "react";

const Banner = ({displayDonations,setDisplayDonations}) => {
  const [searchValue,setSearchValue] =useState(' ');

  const handleSearch =()=>{
    const searchDisplay = displayDonations?.filter(displayDonation => displayDonation.category.toLowerCase() === searchValue.toLowerCase() )
    if(searchDisplay.length){

      setDisplayDonations(searchDisplay)
    }

  }
  // console.log(searchValue);
  // console.log(searchValue.toLowerCase());
  return (
    <div className="flex flex-col items-center justify-center md:gap-10 my-28">
      <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>
      <div className="join">
        <div>
          <div>
            <input
              onChange={(e)=>setSearchValue(e.target.value)}
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>
          <button onClick={handleSearch} className="btn join-item bg-primary-color text-white hover:text-black">Search</button>

      </div>
    </div>
  );
};

export default Banner;
