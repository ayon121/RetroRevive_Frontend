
import PropTypes from 'prop-types';
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const TopGame = ({topgame}) => {
    let {title , img , description , likes} = topgame

    if (description.length > 100) {
        description = description.substring(0, 120) + "...";
    }

    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('/games')} className="card w-auto text-white shadow-2xl  mb-3 border-2  bg-gradient-to-r from-slate-900/50   to-sky-950/70  lg:rounded-b-3xl border-b-2 border-sky-300 duration-500 hover:top-3 ">
            <figure><img src={img} alt="games" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">TOP</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className='flex items-center gap-2 text-lg '>
                        <FaHeart  className='text-red-400 hover:text-red-700'/>
                        <h2 className="font-semibold text-white">{likes}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

TopGame.propTypes = {
    topgame : PropTypes.object
};

export default TopGame;