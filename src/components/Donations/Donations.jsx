import DonationsCard from "./DonationsCard";
import PropTypes from 'prop-types'


const Donations = ({donations}) => {


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                donations?.map(donation => <DonationsCard key={donation.id} donation={donation}></DonationsCard>)
            }
        </div>
    );
};

Donations.propTypes={
    donations:PropTypes.array.isRequired
}
export default Donations;