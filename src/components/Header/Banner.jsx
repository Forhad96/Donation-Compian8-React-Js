import { useState } from "react";
import PropTypes from "prop-types";

const Banner = ( {displayDonations, setDisplayDonations }) => {
  const [searchValue, setSearchValue] = useState(" ");

  const handleSearch = () => {
    const searchDisplay = displayDonations?.filter(
      (displayDonation) =>
        displayDonation.category.toLowerCase() === searchValue.toLowerCase()
    );
    if (searchDisplay.length) {
      setDisplayDonations(searchDisplay);
    }
  };



  return (
    <div
      style={{ backgroundImage: "url(/banner.png)" }}
      className=" md:mb-20 bg-base-200 bg-blend-overlay">
      <div className="flex flex-col items-center md:min-h-[80vh] justify-center md:gap-10 py-28">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">I Grow By Helping People In Need</h1>

        <div className="join mt-5 md:2">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            className="input w-full input-bordered join-item"
            placeholder="Search"
          />

          <button
            onClick={handleSearch}
            className="btn join-item bg-primary-color text-white hover:text-black">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  displayDonations: PropTypes.array.isRequired,
  setDisplayDonations: PropTypes.func.isRequired,
};
export default Banner;
