import { useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import "../../PageCSS/Home.css"



const RockPapers = () => {
    const [userChoice , SetuserChoice] = useState('Rock')
    const [computerChoice , SetComputerChoice ] = useState('Rock')
    const [winner , SetWinner] = useState(null)
    const [gameOver , SetgameOver] =useState(false)
    const choices = ["Rock", "paper", "scissor"]

    const handleChoice = (choice) => {
        SetuserChoice(choice)
    }
    return (
        <div className="backgrnd ">
            <Navbar></Navbar>
            <div className="min-h-screen mt-4 mb-7">
                {/* title */}
                <h1 className="text-3xl md:text-4xl e text-center font-bold uppercase text-white font-Titan">Rock Paper Scissor Game</h1>
                {/* game layout */}
                <div className="px-4 max-w-xl my-4 py-4 mx-auto rounded-3xl border-2 border-sky-300 border-double  bg-gradient-to-r from-slate-900/50   to-sky-950/70 mb-8">
                    {/* --------------Game-------------------------- */}
                    <div className="flex items-center gap-4 px-4 mb-5">
                        {/* user choice */}
                        <div>
                            <img src={`../../../../public/RockPaper/${userChoice}.png`} alt="userchoice" />
                        </div>
                        <div>
                            <img src={`../../../../public/RockPaper/${computerChoice}.png`} alt="userchoice" />
                        </div>


                    </div>
                     {/* --------------Game-------------------------- */}
                    <div className="flex justify-center gap-3">
                        {/* rock btn */}
                        <button onClick={() => handleChoice('Rock')} className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'>ROCK</button>
                        {/* PAPER btn */}
                        <button onClick={() => handleChoice('paper')} className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'>PAPER</button>
                        {/* SCISSORS btn */}
                        <button onClick={() => handleChoice('scissor')} className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'>SCISSORS</button>
                    </div>
                    {/* winner */}
                    <div className="flex justify-center px-2 my-5">
                        <h1 className="text-3xl md:text-4xl text-white font-extrabold font-Rubik">Winner</h1>
                    </div>
                    <div className="flex justify-center gap-3">
                        {/* start btn */}
                        <button className='btn w-3/4 px-4 mt-5 mb-3 bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'>START</button>
                     
                    </div>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default RockPapers;