
import PropTypes from 'prop-types';

const Title = ({title}) => {
    return (
        <div className="pt-4 mb-4 px-3 text-center">
            <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl font-Titan  text-white tracking-wider">{title}</h1>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string
};

export default Title;