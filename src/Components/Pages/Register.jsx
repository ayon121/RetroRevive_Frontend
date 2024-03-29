
// import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import loginimg from '../../assets/login1.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/Authproviders';
// react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { axiosSecure } from '../../Hooks/useAxiosSecure';
const Register = () => {
    const { createUser, GoogleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')

        console.log(name);
        // create user
        createUser(email, password)
            .then(result => {
                // send user info in the database
                const userinfo = {
                    email: email,
                    name: name,
                    userRole: 'user',
                    userType: 'nonPaid'
                }
                axiosSecure.post('/users', userinfo)
                    .then(res => console.log(res.data))

                console.log(result)

                toast("Login Success")
                navigate('/')

            })
            .catch(error => console.log(error))
    }
    const HandleGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                console.log(result)
                const userinfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    userRole: 'user',
                    userType: 'nonPaid'
                }
                axiosSecure.post('/users', userinfo)
                    .then(res => console.log(res.data))
                toast("Login Success")
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                toast(error.message)
            })
    }

    return (
        <div className="flex flex-row-reverse  justify-center w-full h-screen items-center font-Hind px-3">
            <Helmet>
                <title>RETRO REVIVE | Register</title>
            </Helmet>
            <div className=" max-w-4xl mx-auto rounded-2xl flex h-auto py-8 px-3 mt-11" >
                {/* login form */}
                <div className="flex flex-col  py-1 px-8  border-l-4 border-pink-500 h-full">
                    <form onSubmit={handleRegister} className='flex flex-col'>
                        <h1 className=" text-3xl md:text-2xl lg:text-3xl font-bold mt-4 mb-2 text-pink-500">Register Now</h1>
                        <input className="py-1 px-3  my-2 border-2 border-black hover:border-pink-500 rounded-lg" type="text" name="name" placeholder="User Name" />
                        <input className="py-1 px-3  my-2 border-2 border-black hover:border-pink-500 rounded-lg" type="email" name="email" placeholder="email" />
                        <input className="py-1 px-3  my-2 border-2 border-black hover:border-pink-500 rounded-lg" type="password" name="password" placeholder="password" />
                        <input className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600 w-full' type="submit" value="Register" />
                    </form>
                    <div className="text-center ">
                        <p className="text-sky-500 pb-1">or login using google</p>
                        <button onClick={HandleGoogleLogin} className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600 w-full'><FcGoogle></FcGoogle> Google</button>
                        <p className='pt-2 text-sky-400'>Already have a account? <Link to="/login"> <button className='text-pink-500 underline'>Login Now</button></Link></p>

                    </div>
                </div>
                {/* wishes */}
                <div className=" bg-[#3fb43b] rounded-r-2xl hidden md:flex">
                    <img className='h-full w-full rounded-r-2xl' src={loginimg} alt="hotel img" />

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

Register.propTypes = {

};

export default Register;