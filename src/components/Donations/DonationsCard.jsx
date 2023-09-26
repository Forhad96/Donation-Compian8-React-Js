import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const DonationsCard = ({ donation }) => {
  const { id, images, title, category, card_color, btn_color, text_color } =
    donation;
  // console.log(id);

  // const {id} = useParams();
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/donationDetails/${id}`);
  };
  return (
    <div
    onClick={handleDetails}
     className="cursor-pointer mx-3">
      <div 
    style={{ backgroundColor: card_color }}
      className="relative flex flex-col  rounded-xl bg-clip-border text-gray-700 shadow-md">
        <figure>
          <img className="md:max-h-52  rounded-t-md" src={images} alt="" />
        </figure>
  <div className="px-4 pt-4 pb-2">
    <button
      style={{ backgroundColor: btn_color,color:text_color }}
      className="select-none rounded  py-1 px-2 text-center align-middle  text-sm font-medium shadow  transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      {category}
    </button>
  </div>
  <div 
  style={{ color: text_color }}
  className="px-4 pb-4 h-14 overflow-hidden">
    <h5 className="mb-2 block font-sans text-base font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h5>

  </div>
</div>












      {/* <div
        onClick={handleDetails}
        style={{ backgroundColor: card_color }}
        className="card cursor-pointer shadow-xl">
        <img className="h-48" src={images} alt="" />
        <figure></figure>
        <div className="card-body">
          <div>
            <button
              style={{ backgroundColor: btn_color }}
              className="px-2 py-1 rounded font-medium ">
              {category}
            </button>
          </div>
          <h2 style={{ color: text_color }} className="card-title ">
            {title}
          </h2>
        </div>
      </div> */}
    </div>
  );
};
DonationsCard.propTypes = {
  donation: PropTypes.object.isRequired,
};
export default DonationsCard;
