const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center md:gap-10 my-28">
      <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>
      <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>
          <button className="btn join-item bg-primary-color text-white hover:text-black">Search</button>

      </div>
    </div>
  );
};

export default Banner;
