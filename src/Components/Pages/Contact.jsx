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
            <div className=" max-w-4xl mx-auto rounded-2xl flex h-96 py-8 px-3 mt-11" >
                {/* login form */}
                <div className="flex flex-row gap-4  py-1 px-8  border-l-4 border-[#3fb43b] h-full">
                    <form className='flex flex-col' onSubmit={handlecontact}>
                        <h1 className=" text-3xl md:text-2xl lg:text-3xl font-bold mt-4 mb-2 text-[#3fb43b]">Contact Now</h1>
                        <input className="py-1 px-3  my-2 border-2 border-[#3fb43b] rounded-lg" type="email" name="email" placeholder="email" />
                        <input className="py-3 px-3  my-2 border-2 border-[#3fb43b] rounded-lg" type="text" name="password" placeholder="message" />
                        <input className="btn border-2 border-[#3fb43b] hover:bg-[#3fb43b] hover:text-white" type="submit" value="Contact" />

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

export default Contact;