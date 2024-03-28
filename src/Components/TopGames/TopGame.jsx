
import PropTypes from 'prop-types';
import { FaHeart } from "react-icons/fa";
const TopGame = () => {
    return (
        <div className="card w-auto text-black shadow-2xl  mb-3 border-4  bg-gradient-to-r from-slate-400/40   to-sky-300/70  lg:rounded-b-3xl border-b-2 border-sky-800 duration-500 hover:top-3 ">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="games" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">TOP</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className='flex items-center gap-2 text-lg '>
                        <FaHeart  className='text-red-400 hover:text-red-700'/>
                        <h2 className="font-semibold text-slate-800">10k</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

TopGame.propTypes = {

};

export default TopGame;