
//import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ReviewCard from "./ReviewCard";
import Title from "../Title/Title"

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
            <Title title={'Delete Reviews'}></Title>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 px-3 pb-5'>
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