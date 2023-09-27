import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DonationsCard = ({ donation }) => {
  const { id, images, title, category, card_color, btn_color, text_color } =
    donation;

  // const {id} = useParams();

  return (
    <Link to={`/donationDetails/${id}`} state={category} >
      <div
        className="cursor-pointer mx-3 h-1/4  hover:scale-95 ease-in-out duration-500">
        <div
          style={{ backgroundColor: card_color }}
          className="relative flex flex-col  rounded-xl bg-clip-border text-gray-700 shadow-md ">
          <figure>
            <img className="md:h-48  rounded-t-md" src={images} alt="" />
          </figure>
          <div className="px-4 pt-4 pb-2">
            <button
              style={{ backgroundColor: btn_color, color: text_color }}
              className="select-none rounded  py-1 px-2 text-center align-middle  text-sm font-medium shadow  transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true">
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
      </div>
    </Link>
  );
};
DonationsCard.propTypes = {
  donation: PropTypes.object.isRequired,
};
export default DonationsCard;
