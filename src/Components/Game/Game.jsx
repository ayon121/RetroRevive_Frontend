
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
// react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSingleUser from '../../Hooks/useSingleUser';
const Game = ({ game }) => {

    const [singleuserInfo ] = useSingleUser()
    const { _id, title, description, img } = game
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const handleGameDelete = () => {
        axiosSecure.delete(`/deletegame/${_id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast('done');
                    navigate('/')
                } else {
                    toast('No items deleted');
                }
            })
            .catch(error => {
                toast('Error:', error);
            });
    }
    return (
        <div className="card card-compact w-auto h-96 bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="cover image" />
            </figure>
            <div className="card-body text-center items-center">
                <h2 className="card-title text-center">{title}</h2>
                <div>
                    <h1 className='text-sm text-center px-2 font-light'> {description}</h1>
                </div>
                <div className='flex gap-3 px-2'>
                    <div className="card-actions justify-end">
                        <Link to={`/givereviews/${_id}`}><button className="btn btn-outline btn-success">Give Review</button></Link>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/allreviews/${_id}`}><button className="btn btn-outline btn-success">ALL Reviews</button></Link>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/${_id}`}><button className="btn btn-outline btn-success">Play</button></Link>
                    </div>
                    {
                        singleuserInfo[0]?.userRole === 'admin' && <div className="card-actions justify-end">
                        <button onClick={handleGameDelete} className="btn btn-outline btn-success">Delete</button>
                    </div>
                    }
                    
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

Game.propTypes = {
    game: PropTypes.object
};

export default Game;