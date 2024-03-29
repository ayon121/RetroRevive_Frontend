
// import PropTypes from 'prop-types';

import { ToastContainer, toast } from "react-toastify";

const AddGame = () => {
    const handleAddGame = e => {
        e.preventDefault()
        
        const form = e.target
        const title = form.title.value;
        const img = form.img.value;
        const description = form.description.value;
        const review = { title,img  , description}

        fetch('https://RETRO REVIVE-backend.vercel.app/games',
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
            <h1 className="text-center px-3 text-4xl md:text-5xl uppercase mt-5 mb-4 font-mono border-4 rounded-3xl border-black max-w-3xl mx-auto">Add a new game</h1>
            <div>
                <div className="flex  justify-center w-full h-screen font-Hind px-3">
                    <div className=" max-w-4xl mx-auto rounded-2xl flex h-96 py-8 px-3" >
                        {/* login form */}
                        <div className="flex flex-row gap-4  py-1 px-28  border-x-4 rounded-3xl border-[#3fb43b] h-full">
                            <form className='flex flex-col' onSubmit={handleAddGame}>
                                <h1 className=" text-3xl md:text-2xl lg:text-3xl font-bold mt-4 mb-2 text-[#3fb43b]">Write Game Details </h1>
                                <input className="py-1 px-3  my-2 border-2 border-[#3fb43b] rounded-lg" type="title" name="title" placeholder="title" />
                                <input className="py-1 px-3  my-2 border-2 border-[#3fb43b] rounded-lg" type="text" name="img" placeholder="game img url" />
                                <input className="py-3 px-3  my-2 border-2 border-[#3fb43b] rounded-lg" type="text" name="description" placeholder="game description" />
                                <input className="btn border-2 border-[#3fb43b] hover:bg-[#3fb43b] hover:text-white" type="submit" value="ADD GAME" />

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