
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';
import useSingleUser from '../../Hooks/useSingleUser';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/Authproviders';
import { Link } from 'react-router-dom';
const OnPageReview = ({ post }) => {
    const [singleuserInfo] = useSingleUser()
    const { user } = useContext(AuthContext)
    const {_id ,  name, sms, ratings, Userlocation , UserEmail} = post
    return (
        <div className="card w-auto text-white mb-3 border-2  bg-gradient-to-r from-slate-900/50   to-sky-950/70  lg:rounded-b-3xl border-b-2 border-sky-300 duration-500 hover:top-3  shadow-xl">
            <div className="card-body">
                <h2 className="text-3xl md:text-4xl font-extrabold  uppercase">{name}

                </h2>
                <p className='w-full bg-sky-400 h-1 rounded-full'></p>
                <p className='flex items-center '>
                    <span className='text-xl font-Hind'> {ratings}</span>
                    <span className='text-yellow-500 text-xl'><AiFillStar></AiFillStar></span>
                </p>
                <p className='text-lg md:text-xl font-light '>{sms}</p>
                {/* location admin */}
                {singleuserInfo[0]?.userRole === 'admin' && <div>
                    <p className="text-xl md:text-2xl font-extrabold  uppercase">Location</p>
                    <p className='gap-2 text-lg font-semibold'><span>latitude : {Userlocation?.latitude}</span> <br /><span>longitude : {Userlocation?.longitude}</span></p>
                </div>
                }
                {
                   user?.email === UserEmail && <Link to={`/reviewedit/${_id}`}><button  className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'>Edit</button></Link>
                }
            </div>
        </div>
    );
};

OnPageReview.propTypes = {
    post: PropTypes.object
};

export default OnPageReview;