
import PropTypes from 'prop-types';
import './MemoryCard.css'

const GameCard = ({item , handleCilcked ,id}) => {
    const itemClass = item.stat ? " active " + item.stat : "";
    return (
        <div onClick={() => handleCilcked(id)} className={'bg-sky-200/75 px-4 py-4 rounded-3xl card ' + itemClass}>
            <img className='cardimg' src={item.img} alt="puzzle img" />
        </div>
    );
};

GameCard.propTypes = {
    item : PropTypes.object
};

export default GameCard;