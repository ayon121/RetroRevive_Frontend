
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
    return (
        <div className='border-2 border-black rounded-3xl px-4 '>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{sms}</p>
                 <p className='flex items-center '> 
                    <span>Ratings :  {ratings}</span>
                 <span className='text-yellow-500'><AiFillStar></AiFillStar></span>
                 </p>
                 <button onClick={handleDelete} className="mt-3 w-1/2 mx-auto font-Hind font-bold  btn text-white bg-[#3fb43b] hover:bg-white hover:text-black">Delete</button>
            </div>
            <ToastContainer />
        </div>
    );
};

ReviewCard.propTypes = {
    review : PropTypes.object
};

export default ReviewCard;