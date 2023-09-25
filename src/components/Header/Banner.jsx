import { useState } from "react";
import PropTypes from "prop-types";
import bannerImg from "/banner.png";

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
  console.log(bannerImg);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: bannerImg }}
        className="flex flex-col items-center justify-center md:gap-10 my-28">
        <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>
        <div className="join">
          <div>
            <div>
              <input
                onChange={(e) => setSearchValue(e.target.value)}
                className="input input-bordered join-item"
                placeholder="Search"
              />
            </div>
          </div>
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
