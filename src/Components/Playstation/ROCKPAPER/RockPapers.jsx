import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import "../../PageCSS/Home.css"



const RockPapers = () => {
    const [userChoice , SetuserChoice] = useState('Rock')
    const [computerChoice , SetComputerChoice ] = useState('Rock')
    const [winner , SetWinner] = useState(null)
    const [userpoints , Setuserpoints] =useState(0)
    const [computerPoints , SetcomputerPoints] =useState(0)
    const choices = ["Rock", "paper", "scissor"]

    const handleChoice = (choice) => {
        SetuserChoice(choice)
        GanerateComputerChoice()
    }

    const GanerateComputerChoice = () => {
        const RandomChoice = choices[Math.floor(Math.random() * choices.length)]
        SetComputerChoice(RandomChoice)
    }

    useEffect(()=> {
        const comboMoves = userChoice + computerChoice
        if(userpoints <= 4 && computerPoints <=4){
            if(comboMoves === "Rockscissor" || comboMoves === "paperRock" || comboMoves === "scissorpaper"){
                const updateUserPoints= userpoints + 1
                Setuserpoints(updateUserPoints)
                if(updateUserPoints === 5){
                    SetWinner('You Won the Game')
                }
            }
            if(comboMoves === "paperscissor" || comboMoves === "scissorRock" || comboMoves === "Rockpaper"){
                const updateComputerPoints= computerPoints + 1
                SetcomputerPoints(updateComputerPoints)
                if(updateComputerPoints === 5){
                    SetWinner('Computer Won the Game')
                }

            }
            if(comboMoves === "paperpaper" || comboMoves === "scissorscissor" || comboMoves === "RockRock"){
                SetWinner('Stay Playing')
            }
        }

    },[userChoice , computerChoice])
    return (
        <div className="backgrnd ">
            <Navbar></Navbar>
            <div className="min-h-screen mt-4 mb-7 px-2">
                {/* title */}
                <h1 className="text-3xl md:text-4xl e text-center font-bold uppercase text-white font-Titan">Rock Paper Scissor Game</h1>
                {/* game layout */}
                <div className="px-4 max-w-xl my-4 py-4 mx-auto rounded-3xl border-2 border-sky-300 border-double  bg-gradient-to-r from-slate-900/50   to-sky-950/70 mb-8 px-4">
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

                     {/* ----------points---------- */}
                     <div className="text-sky-400 px-4 text-center mb-4 ">
                        <h1 className="text-2xl md:text-3xl font-extrabold ">Points</h1>
                        <div className="flex gap-3 justify-center font-bold items-center">
                            <h1>You : {userpoints}</h1> vs
                            <h1>Com : {computerPoints}</h1>
                        </div>
                     </div>
                     {/* ----------------------btns-------------- */}
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
                        <h1 className="text-3xl md:text-4xl text-white font-extrabold font-Rubik">{winner}</h1>
                    </div>
                    <div className="flex justify-center gap-3">
                        {/* start btn */}
                        {
                            (userpoints === 5 || computerPoints === 5) &&
                                <button onClick={() => {
                                    SetcomputerPoints(0)
                                     Setuserpoints(0)
                                     SetWinner(null)
                                    }} className='btn w-3/4 px-4 mt-5 mb-3 bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'>RESTART</button>
                            
                        }
                     
                    </div>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default RockPapers;