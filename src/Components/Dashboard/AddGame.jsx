
// import PropTypes from 'prop-types';

import { ToastContainer, toast } from "react-toastify";
import Title from "../Title/Title";

const AddGame = () => {
    const handleAddGame = e => {
        e.preventDefault()
        
        const form = e.target
        const title = form.title.value;
        const img = form.img.value;
        const description = form.description.value;
        const review = { title,img  , description}

        fetch('http://localhost:5000/games',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast("Game added Successfully")

                }
            })

    }
    return (
        <div>
            <Title title={'Add New Game'}></Title>
            <div>
                <div className="flex  justify-center w-full h-auto font-Hind px-3">
                    <div className=" max-w-4xl mx-auto rounded-2xl flex h-auto py-8 px-3" >
                        {/* login form */}
                        <div className="flex flex-row gap-4  py-1 px-28  border-x-4 rounded-3xl border-sky-300 h-full">
                            <form className='flex flex-col' onSubmit={handleAddGame}>
                                <h1 className=" text-3xl md:text-2xl lg:text-3xl font-bold mt-4 mb-2 text-sky-300">Write Game Details </h1>
                                <input className="py-1 px-3  my-2 border-2 border-sky-200 hover:border-pink-600 rounded-lg" type="title" name="title" placeholder="title" />
                                <input className="py-1 px-3  my-2 border-2 border-sky-200 hover:border-pink-600 rounded-lg" type="text" name="img" placeholder="game img url" />
                                <input className="py-3 px-3  my-2 border-2 border-sky-200 hover:border-pink-600 rounded-lg" type="text" name="description" placeholder="game description" />
                                <input  className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600' type="submit" value="ADD GAME" />

                            </form>

                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

AddGame.propTypes = {

};

export default AddGame;