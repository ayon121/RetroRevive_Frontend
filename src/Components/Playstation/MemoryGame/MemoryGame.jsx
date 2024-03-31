import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import '../../PageCSS/Home.css'
import GameCard from "./GameCard";

import cat from "../../../../public/MemoryGame/Cat.png"
import cow from "../../../../public/MemoryGame/Cow.png"
import dog from "../../../../public/MemoryGame/dog.png"
import monkey from "../../../../public/MemoryGame/Monkey.png"
import panda from "../../../../public/MemoryGame/Panda.png"
import parrot from "../../../../public/MemoryGame/Parrot.png"
import snake from "../../../../public/MemoryGame/Snake.png"
import Tiger from "../../../../public/MemoryGame/Tiger.png"
import Swal from "sweetalert2";



const MemoryGame = () => {
    const [Items, setItems] = useState([
        { id: 1, img: cat, stat: "" },
        { id: 1, img: cat, stat: "" },
        { id: 2, img: cow, stat: "" },
        { id: 2, img: cow, stat: "" },
        { id: 3, img: dog, stat: "" },
        { id: 3, img: dog, stat: "" },
        { id: 4, img: monkey, stat: "" },
        { id: 4, img: monkey, stat: "" },
        { id: 5, img: panda, stat: "" },
        { id: 5, img: panda, stat: "" },
        { id: 6, img: parrot, stat: "" },
        { id: 6, img: parrot, stat: "" },
        { id: 7, img: snake, stat: "" },
        { id: 7, img: snake, stat: "" },
        { id: 8, img: Tiger, stat: "" },
        { id: 8, img: Tiger, stat: "" },

    ].sort(() => Math.random() - 0.5))

    const [prev, Setprev] = useState(-1)
    // checks clicked
    const handleCilcked = (id) => {
        // Items[id].stat = "active";
        // setItems([...Items])
        if (prev === -1) {
            Items[id].stat = "active"
            setItems([...Items])
            Setprev(id)
        } else {
            Check(id)
        }
    }

    // checks matches
    const Check = (current) => {
        if (Items[current].id == Items[prev].id) {
            Items[current].stat = "correct"
            Items[prev].stat = "correct"
            setItems([...Items])
            Setprev(-1)
        } else {
            Items[current].stat = "wrong"
            Items[prev].stat = "wrong"
            setItems([...Items])
            setTimeout(() => {
                Items[current].stat = ""
                Items[prev].stat = ""
                setItems([...Items])
                Setprev(-1)
            }, 1000)
        }
    }

    useEffect( () => {
        if (Items.every(item => item.stat === "correct")) {
            setTimeout(() => {
                Swal.fire({
                    title: "Congratulation You Won The Game",
                    text: "You Earned 2 points",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  })
            } , 1000)
        }
    }, [Items])

    return (
        <div className="backgrnd ">
            <Navbar></Navbar>
            <div className="min-h-screen mt-4 mb-7">
                {/* title */}
                <h1 className="text-3xl md:text-4xl e text-center font-bold uppercase text-white font-Titan">Memory Game</h1>
                {/* game container */}
                <div className="px-4 max-w-xl my-4 py-4 mx-auto rounded-3xl border-2 border-sky-300 border-double  bg-gradient-to-r from-slate-900/50   to-sky-950/70 mb-8">
                    <div className="grid grid-cols-4 gap-3">
                        {
                            Items.map((item, index) => <GameCard key={index} item={item} handleCilcked={handleCilcked} id={index}></GameCard>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MemoryGame;