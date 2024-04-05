
import PropTypes from 'prop-types';

const Product = ({homeproducts}) => {
    const { img} = homeproducts
    return (
        <div className=" w-auto rounded-3xl image-full mb-3 mt-3">
            <figure><img className='rounded-3xl  shadow-pink-300' src={img} alt="latest products" /></figure>
        </div>
    );
};

Product.propTypes = {
    homeproducts : PropTypes.object
};

export default Product;