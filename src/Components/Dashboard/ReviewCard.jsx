
import PropTypes from 'prop-types';

import { AiFillStar } from 'react-icons/ai';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
// react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const ReviewCard = ({review}) => {
    const {name , sms , ratings , _id } = review
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    
    const handleDelete = () => {
        axiosSecure.delete(`/deletereview/${_id}`)
        .then(res => {
            if (res.data.deletedCount > 0) {
                toast('done');
                navigate('/dashboard')
            } else {
                toast('No items deleted');
            }
        })
        .catch(error => {
            toast('Error:', error);
        });
    }
    // ratings star function
    const stars = [];
    for( let i = 0; i < ratings; i++ ){
        stars.push(
            <span key={i} className='text-yellow-500 text-xl'>
              <AiFillStar />
            </span>
          );                  
    }
    return (
        <div className="card text-center  w-auto text-white mb-3 border-2  bg-gradient-to-r from-slate-900/50   to-sky-950/70  lg:rounded-b-3xl border-b-2 border-sky-300 duration-500 hover:top-3  shadow-xl">
            <div className="card-body">
                <h2 className="font-bold text-2xl text-center">{name}</h2>
                <p>{sms}</p>
                 <p className='flex justify-center '> 
                    {stars}
                 </p>
                 <button onClick={handleDelete}  className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'>Delete</button>
            </div>
            <ToastContainer />
        </div>
    );
};

ReviewCard.propTypes = {
    review : PropTypes.object
};

export default ReviewCard;