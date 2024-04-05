
import PropTypes from 'prop-types';

const AllProduct = ({allproduct})=> {
    const {img , title , description} = allproduct
    return (
        <div className="card w-auto text-white shadow-2xl  mb-3 border-2  bg-gradient-to-r from-slate-900/50   to-sky-950/70  lg:rounded-b-3xl border-b-2 border-sky-300 duration-500 hover:top-3 ">
            <figure><img src={img} alt="products" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-accent">Gaming</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className='flex items-center gap-2 text-lg '>
                    <button  className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllProduct.propTypes = {
    allproduct : PropTypes.object
};

export default AllProduct;