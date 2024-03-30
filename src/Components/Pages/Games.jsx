
// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import Game from "../Game/Game";
import "../PageCSS/Home.css"
import Footer from "../Footer/Footer";

const Games = () => {
    const [games, setGames] = useState([])
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.get('/games')
            .then(res => setGames(res.data))
    }, [axiosSecure])

    return (
        <div className='font-Hind backgrnd'>
            <Helmet>
                <title>RETRO| Games</title>
            </Helmet>

            <Navbar></Navbar>
            <div className="min-h-screen">
                <div className='flex justify-center mt-6 mb-5'>
                    <h1 className='font-bold text-4xl md:text-5xl text-white'>Our Games</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 mb-7 gap-4 items-center'>
                    {
                        games.map(game => <Game key={game._id} game={game}></Game>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

Games.propTypes = {

};

export default Games;