import {  useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'

const DonationsCard = ({ donation }) => {
  const {id, images, title, category, card_color, btn_color, text_color } =
    donation;
    // console.log(id);

    // const {id} = useParams();
    const navigate = useNavigate()
    const handleDetails =()=>{
        navigate(`/donationDetails/${id}`)

    }
  return (
    <div>
      <div
        onClick={handleDetails}
        style={{ backgroundColor: card_color }}
        className="card cursor-pointer shadow-xl">
        <img src={images[0]} alt="" />
        <figure></figure>
        <div className="card-body">
          <div>
            <button
              style={{ backgroundColor: btn_color }}
              className="px-2 py-1 rounded font-medium">
              {category}
            </button>
          </div>
          <h2 style={{ color: text_color }} className="card-title ">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};
DonationsCard.propTypes ={
    donation:PropTypes.object.isRequired
}
export default DonationsCard;
