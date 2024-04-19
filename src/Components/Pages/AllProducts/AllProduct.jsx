
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const AllProduct = ({ allproduct }) => {
    const { img, title, description } = allproduct
    const buyNow = () => {
        Swal.fire({
            title: `${title}`,
            color: "#FFFFFF",
            // custom bg
            background: "linear-gradient(to right, #2F4F4F, rgba(135, 206, 250, 0.5))",
            input: "select",
            html: "<b>Select Options To Before Confirming Your Order</b>",
            inputPlaceholder: "Select Quentity",
            inputAttributes: {
                style: 'background-color: #708090' // Change the color to your desired color
            },
            inputOptions: {
                Quantity: {
                    1: "1",
                    2: "2",
                    3: "3",
                    4: "4",
                    5: "5",
                    6: "6",
                }
            },
            showCancelButton: true,
            confirmButtonText: "Confirm Buy",

            showLoaderOnConfirm: true,
        });
    }
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
                        <button onClick={buyNow} className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllProduct.propTypes = {
    allproduct: PropTypes.object
};

export default AllProduct;