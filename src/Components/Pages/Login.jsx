
// import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import loginimg from '../../assets/login1.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/Authproviders';
// react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar/Navbar';

import { Helmet } from 'react-helmet';

const Login = () => {
    const { loginUser, GoogleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const handlelogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        loginUser(email, password)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser);
                toast("Login Success")

                // navigate after login
                navigate(location?.state ? location.state : '/')
                // get access token
                // axios.post(' https://hotel-management-server-side.vercel.app/jwt' , user ,  {withCredentials : true})
                // .then( res => {
                //     console.log(res.data);
                //     if(res.data.success) {
                //         navigate(location?.state ? location.state : '/')
                //     }

                // })




            })
            .catch(error => {

                toast(error.message)


            })

    }

    const HandleGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                console.log(result)
                toast("Login Success")
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => toast(error.message))
    }

    return (
        <div>
            <Helmet>
                <title>RETRO REVIVE | Login</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="flex  justify-center w-full h-screen items-center font-Hind px-3">
                <div className=" max-w-4xl mx-auto rounded-2xl flex h-96 py-8 px-3 mt-11" >
                    {/* login form */}
                    <div className="flex flex-col  py-1 px-8  border-l-4 border-[#3fb43b] h-full">
                        <form className='flex flex-col' onSubmit={handlelogin}>
                            <h1 className=" text-3xl md:text-2xl lg:text-3xl font-bold mt-4 mb-2 text-[#3fb43b]">Login Now</h1>
                            <input className="py-1 px-3  my-2 border-2 border-[#3fb43b] rounded-lg" type="email" name="email" placeholder="email" />
                            <input className="py-1 px-3  my-2 border-2 border-[#3fb43b] rounded-lg" type="password" name="password" placeholder="password" />
                            <input className="btn border-2 border-[#3fb43b] hover:bg-[#3fb43b] hover:text-white" type="submit" value="Login" />

                        </form>
                        <div className="text-center ">
                            <p className="text-[#3fb43b] pb-1">or login using google</p>
                            <button onClick={HandleGoogleLogin} className="btn border-2 border-[#3fb43b] w-full hover:bg-[#3fb43b] hover:text-white"><FcGoogle></FcGoogle> Google</button>
                            <p className='pt-2 '>Do not have a account? <Link to="/register"> <button className='text-[#3fb43b] underline'>Register Now</button></Link></p>

                        </div>
                    </div>
                    {/* wishes */}
                    <div className=" bg-[#3fb43b] rounded-r-2xl hidden md:flex">
                        <img className='h-full w-full rounded-r-2xl' src={loginimg} alt="hotel img" />

                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

Login.propTypes = {

};

export default Login;