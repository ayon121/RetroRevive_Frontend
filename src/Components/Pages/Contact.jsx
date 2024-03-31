// react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Navbar/Navbar";
import loginimg from '../../assets/login1.jpg'
import { Helmet } from 'react-helmet';

const Contact = () => {

    const handlecontact = e => {
        e.preventDefault()
        toast("Thank you ,we will email you")
    }
    return (
        <div>
        <Helmet>
            <title>RETRO REVIVE | Contact</title>
        </Helmet>
        <Navbar></Navbar>
        <div className="flex  justify-center w-full h-screen items-center font-Hind px-3">
            <div className=" max-w-4xl mx-auto rounded-2xl flex h-auto py-8 px-3 mt-11" >
                {/* login form */}
                <div className="flex flex-row gap-4  py-1 px-8  border-l-4 border-pink-500 h-full">
                    <form className='flex flex-col' onSubmit={handlecontact}>
                        <h1 className=" text-3xl md:text-2xl lg:text-3xl font-bold mt-4 mb-2 text-pink-500">Contact Now</h1>
                        <input className="py-1 px-3  my-2 border-2 border-black hover:border-pink-500 rounded-lg" type="email" name="email" placeholder="email" />
                        <input className="py-3 px-3  my-2 border-2 border-black hover:border-pink-500 rounded-lg" type="text" name="password" placeholder="message" />
                        <input className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600 w-full' type="submit" value="Contact" />

                    </form>
                {/* wishes */}
                    <div className=" bg-pink-500 rounded-r-2xl hidden md:flex">
                        <img className='h-full w-full rounded-r-2xl' src={loginimg} alt="hotel img" />
                    </div>
            </div>
            <ToastContainer />
        </div>
        </div>
        </div>
    );
};

export default Contact;