import DonationsCard from "./DonationsCard";
import PropTypes from 'prop-types'


const Donations = ({displayDonations}) => {


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                displayDonations?.map(donation => <DonationsCard key={donation.id} donation={donation}></DonationsCard>)
            }
        </div>
    );
};

Donations.propTypes={
    displayDonations:PropTypes.array.isRequired
}
export default Donations;