
import PropTypes from 'prop-types';

const GameCard = ({item}) => {
    return (
        <div className='bg-sky-200/75 px-4 py-4 rounded-3xl'>
            <img src={item.img} alt="puzzle img" />
        </div>
    );
};

GameCard.propTypes = {
    item : PropTypes.object
};

export default GameCard;