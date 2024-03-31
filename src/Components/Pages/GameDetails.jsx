import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { ToastContainer } from 'react-toastify';
import Footer from '../Footer/Footer';
import OnPageReview from '../Review/OnPageReview';
import Navbar from '../Navbar/Navbar';
import { Helmet } from 'react-helmet';
import "../PageCSS/Home.css"

const GameDetails = () => {
    const { id } = useParams()
    const [review, setReview] = useState([])
    const [averageRatings, setaverageRatings] = useState(0);
    const axiosSecure = useAxiosSecure()

    ///////using normal axios Secure////////
    useEffect(() => {
        axiosSecure.get(`/reviews/${id}`)
        .then(res => {
            setReview(res.data)
            // Calculate average review
            let totalRating = 0;
            if (res.data.length > 0) {
                res.data.forEach(item => {
                    totalRating += parseInt(item.ratings );
                });
                const avgRating = totalRating / res.data.length;
                // Round the average rating to one digit after the decimal point
                const roundedAvgRating = avgRating.toFixed(1);
                setaverageRatings(roundedAvgRating);
            } else {
                // If there are no ratings, set average rating to 0
                setaverageRatings(0);
            }
        })
    }, [id, axiosSecure]);



    return (
        <div className='backgrnd'>
            { }
            <Helmet>
                <title>RETRO REVIVE | GameDetails</title>
            </Helmet>
            <Navbar></Navbar>
            <div className='max-w-6xl px-3 mx-auto mt-5 font-Hind min-h-screen text-white'>
                <div>
                    <div className='flex justify-center mt-4 mb-4'>
                        <h1 className='text-4xl md:text-5xl font-bold'>Average Ratings {averageRatings || 0}</h1>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 px-3 mb-6 '>
                        {
                            review?.map(post => <OnPageReview key={post._id} post={post}></OnPageReview>)
                        }
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
            <Footer></Footer>
        </div>
    );
};

GameDetails.propTypes = {

};

export default GameDetails;