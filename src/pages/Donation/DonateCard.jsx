import PropTypes from 'prop-types'
import { Link} from 'react-router-dom';

const DonateCard = ({ donation }) => {
  const {
    id,
    images,
    title,
    category,
    card_color,
    btn_color,
    text_color,
    donation_amount,
  } = donation;
  return (

    <div style={{ backgroundColor: card_color }} className='rounded-lg  shadow-xl mx-3'>
      <div  className="md:flex gap-6">
        <img className="w-full md:max-w-[220px] md:h-52 md:rounded-s-lg" src={images} alt="" />
        <div className="px-5 py-4">
          <div className="">
            <button
              style={{ backgroundColor: btn_color,color:text_color }}
              className="px-2 rounded font-medium">
              {category}
            </button>
          </div>
          <h2 style={{ color: text_color }} className="card-title ">
            {title}
          </h2>
          <p style={{ color: text_color }} className="font-semibold">
            $ {donation_amount}.00
          </p>
          <Link to={`/donationDetails/${id}`}>
          <button
            style={{ backgroundColor: text_color }}
            className="text-lg font-semibold px-4 py-2 rounded mt-5 text-white">
            View Details
          </button>
          </Link>
        </div>
        
      </div>

    </div>
  );
};

DonateCard.propTypes={
    donation: PropTypes.object.isRequired
}

export default DonateCard;
