
import PropTypes from 'prop-types';

const Product = () => {
    return (
        <div className=" w-auto rounded-3xl image-full mb-3 mt-3">
            <figure><img className='rounded-3xl  shadow-pink-300' src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="latest products" /></figure>
        </div>
    );
};

Product.propTypes = {

};

export default Product;