
// import PropTypes from 'prop-types';
import { useContext } from 'react';

import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authproviders';

import useSingleUser from '../../Hooks/useSingleUser';

// logo
import logo from '../../assets/RetroLogo.png'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const [singleuserInfo, refetch] = useSingleUser()
    const handlelogOut = () => {
        logout()
            .then()
            .catch()
    }
    refetch()

    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/games">Games</NavLink></li>
        {
            singleuserInfo[0]?.userRole === 'admin' && <div>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            </div>
        }

        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>

    </>

    return (
        <div className=''>
            <div className='w-full bg-gradient-to-r from-pink-500/40  via-purple-500 to-sky-300/70  lg:rounded-b-3xl border-b-2 border-sky-800'>
                <div className="navbar font-Hind px-1 md:px-3 max-w-7xl mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navlinks}
                            </ul>
                        </div>
                        {/* logo */}
                        <div className="font-Hind font-bold ">
                            <img className='h-16 w-28' src={logo} alt="Retro Revive" />
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2 font-bold">
                            {navlinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <button onClick={handlelogOut} className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600 rounded-2xl'>Logout</button>
                                :
                                <Link to="/login">
                                    <button className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600 rounded-2xl'>Login</button>
                                </Link>
                        }


                    </div>
                </div>
            </div> 
        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;