
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import './Pagination.css'
const Pagination = () => {
    const [text] = useTypewriter({
        words: ['discover and share the latest gaming products'],
        loop : 6
      })
    return (
        <div className='featuredimage bg-fixed mb-5  h-[330px] md:h-[500px] font-inter text-white mt-4 '>
        <div className='md:flex h-[500px] justify-center items-center py-8 px-16 gap-3'>
            <div className='md:ml-9 text-center max-w-4xl'>
                <p className='uppercase text-3xl md:text-4xl font-bold pb-3'>{text}<Cursor cursorColor='pink' /></p>
                <button className='btn bg-white text-black font-bold hover:text-pink-600'>Shop Now</button>
            </div>
        </div>
    </div>
    );
};

export default Pagination;