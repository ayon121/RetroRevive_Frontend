
//import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ReviewCard from "./ReviewCard";

const DeleteReviews = () => {
    const [reviews, setReview] = useState([])
    const axiosSecure = useAxiosSecure()

    ///////using normal axios Secure////////
    useEffect(() => {
        axiosSecure.get(`/reviews`)
            .then(res => setReview(res.data))
    }, [axiosSecure])

    return (
        <div>
            <h1 className="text-center px-3 text-4xl md:text-5xl uppercase mt-5 mb-4 font-mono border-4 rounded-3xl border-black max-w-3xl mx-auto">Delete Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 px-3 mb-6 '>
                {
                    reviews?.map(review => <ReviewCard key={review._id} review={review}> </ReviewCard>)
                }
            </div>
        </div>
    );
};

DeleteReviews.propTypes = {

};

export default DeleteReviews;