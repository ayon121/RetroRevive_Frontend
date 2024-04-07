
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
import '../PageCSS/Home.css'
import Footer from '../Footer/Footer';

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

    // demo admin login
    const handleDemoAdminlogin = () => {
        const email = "admin12@gmail.com"
        const password = "admin1234"
        // demouser12@gmail.com
        loginUser(email, password)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser);
                toast("Login Success")
                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast(error.message)
            })

    }
     // demo admin login
     const handleDemoUserlogin = () => {
        const email = "demouser12@gmail.com"
        const password = "user1234"
        loginUser(email, password)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser);
                toast("Login Success")
                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast(error.message)
            })

    }

    return (
        <div className='backgrnd'>
            <Helmet>
                <title>RETRO REVIVE | Login</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="flex  justify-center w-full h-auto items-center font-Hind px-3 mt-7">
                <div className=" max-w-4xl mx-auto rounded-2xl flex h-auto py-8 px-3 mt-11" >
                    {/* login form */}
                    <div className="flex flex-col  py-1 px-8  border-l-4 border-pink-500 h-auto">
                        <form className='flex flex-col' onSubmit={handlelogin}>
                            <h1 className=" text-3xl md:text-2xl lg:text-3xl font-bold mt-4 mb-2 text-white">Login Now</h1>
                            <input className="py-1 px-3  my-2 border-2 border-black hover:border-pink-500 rounded-lg" type="email" name="email" placeholder="email" />
                            <input className="py-1 px-3  my-2 border-2 border-black hover:border-pink-500 rounded-lg" type="password" name="password" placeholder="password" />
                            <input className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600 w-full' type="submit" value="Login" />

                        </form>
                        <div className="text-center ">
                            <p className="text-sky-400 pb-1">or login using google</p>
                            <button onClick={HandleGoogleLogin} className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600 w-full'><FcGoogle></FcGoogle> Google</button>
                            <p className='pt-2 text-sky-400'>Do not have a account? <Link to="/register"> <button className='text-pink-500 underline'>Register Now</button></Link></p>
                            <div className='flex gap-3 mt-3 mb-2'>
                                <button onClick={handleDemoAdminlogin} className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600 w-auto'>Demo Admin</button>
                                <button onClick={handleDemoUserlogin} className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600 w-auto'>Demo User</button>
                            </div>
                        </div>
                    </div>
                    {/* wishes */}
                    <div className=" bg-pink-500 rounded-r-2xl hidden md:flex">
                        <img className='h-full w-full rounded-r-2xl' src={loginimg} alt="login img" />

                    </div>
                </div>
                <ToastContainer />
            </div>
            <Footer></Footer>
        </div>
    );
};

Login.propTypes = {

};

export default Login;