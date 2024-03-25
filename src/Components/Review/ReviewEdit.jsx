// import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import loginimg from '../../assets/login1.jpg'
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ReviewEdit = () => {
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const handleReviewEdit = (e) => {
        e.preventDefault()
        
        const form = e.target
        const sms = form.message.value;
        const ratings = form.number.value;
        const Editedreview = { sms ,ratings}

        axiosSecure.put(`/editreview/${id}` , Editedreview )
        .then(res => {
            toast(res.data.message)
        })
        .catch(error => toast('error', error))
    }
    
    return (
        <div>
        <Navbar></Navbar>
        <div className="flex  justify-center w-full h-screen items-center font-Hind px-3">
            <div className=" max-w-4xl mx-auto rounded-2xl flex h-96 py-8 px-3 mt-11" >
                {/* login form */}
                <div className="flex flex-row gap-4  py-1 px-8  border-l-4 border-[#3fb43b] h-full">
                    <form className='flex flex-col' onSubmit={handleReviewEdit}>
                        <h1 className=" text-3xl md:text-2xl lg:text-3xl font-bold mt-4 mb-2 text-[#3fb43b]">Give Review </h1>
                        <input className="py-1 px-3  my-2 border-2 border-[#3fb43b] rounded-lg" type="text" name="number" placeholder="give 1 to 5 review" />
                        <input className="py-3 px-3  my-2 border-2 border-[#3fb43b] rounded-lg" type="text" name="message" placeholder="message" />
                        <input className="btn border-2 border-[#3fb43b] hover:bg-[#3fb43b] hover:text-white" type="submit" value="Give Review" />

                    </form>
                {/* wishes */}
                    <div className=" bg-[#3fb43b] rounded-r-2xl hidden md:flex">
                        <img className='h-full w-full rounded-r-2xl' src={loginimg} alt="hotel img" />
                    </div>
            </div>
            <ToastContainer />
        </div>
        </div>
        </div>
    );
};

ReviewEdit.propTypes = {
    
};

export default ReviewEdit;