import { useState } from "react";
import PropTypes from "prop-types";

const Banner = ({ displayDonations, setDisplayDonations }) => {
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
      className=" mb-20 bg-base-200 bg-blend-overlay">
      <div className="flex flex-col items-center min-h-[80vh] justify-center md:gap-10 py-10">
        <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>

        <div className="join w-1/4">
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
  setDisplayDonations: PropTypes.array.isRequired,
};
export default Banner;
