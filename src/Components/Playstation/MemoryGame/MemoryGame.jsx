import { useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import '../../PageCSS/Home.css'
import GameCard from "./GameCard";


const MemoryGame = () => {
    const [Items, setItems] = useState([
        { id: 1, img: '', stat: "" },
        { id: 1, img: '', stat: "" },
        { id: 2, img: '', stat: "" },
        { id: 2, img: '', stat: "" },
        { id: 3, img: '', stat: "" },
        { id: 3, img: '', stat: "" },
        { id: 4, img: '', stat: "" },
        { id: 4, img: '', stat: "" },
        { id: 5, img: '', stat: "" },
        { id: 5, img: '', stat: "" },
        { id: 6, img: '', stat: "" },
        { id: 6, img: '', stat: "" },
        { id: 7, img: '', stat: "" },
        { id: 7, img: '', stat: "" },
        { id: 8, img: '', stat: "" },
        { id: 8, img: '', stat: "" },

    ].sort(()=> Math.random() - 0.5))

    return (
        <div className="backgrnd ">
            <Navbar></Navbar>
            <div className="min-h-screen mt-4">
                {/* title */}
                <h1 className="text-3xl md:text-4xl e text-center font-bold uppercase text-white font-Titan">Memory Game</h1>
                {/* game container */}
                <div className="px-4 max-w-xl my-4 py-4 mx-auto rounded-3xl border-2 border-sky-300 border-double  bg-gradient-to-r from-slate-900/50   to-sky-950/70">
                    <div className="grid grid-cols-4 gap-3">
                        {
                            Items.map((item , index) => <GameCard key={index}  item={item}></GameCard>)
                        }
                    </div>
                </div>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default MemoryGame;