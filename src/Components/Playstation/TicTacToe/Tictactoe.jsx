
// import PropTypes from 'prop-types';

import { useRef, useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

import Ologo  from "../../../assets/O.png" ;
import crosslogo  from "../../../assets/cross.png" ;
import '../../PageCSS/Home.css'
import Swal from "sweetalert2";

let data = ["" , "" , "" , "" , "" , "" , "", "" , ""]
const Tictactoe = () => {

    let [count , SetCount] = useState(0)
    const [lock , SetLock ] = useState(false)

    let box1 = useRef(null)
    let box2 = useRef(null)
    let box3 = useRef(null)
    let box4 = useRef(null)
    let box5 = useRef(null)
    let box6 = useRef(null)
    let box7 = useRef(null)
    let box8 = useRef(null)
    let box9 = useRef(null)

    let BoxArray = [box1 , box2 , box3 , box4 , box5 , box6 , box7 , box8 , box9] 

    const toggle = ( e ,num) => {
       if(lock) {
         return 0
       }
       if(count % 2 === 0){
            console.log("x");
            e.target.innerHTML = `<img src='${crosslogo}'  alt='x' />`
            data[num] = "x";
            SetCount(++count)

       }
       else {
        console.log("O");
        e.target.innerHTML = `<img src='${Ologo}'  alt='O' />`
        data[num] = "o";
        SetCount(++count)
       }
       checkWin()
    }

    const won = (winner) => {
        if(winner === 'x'){
            console.log('x won');
            Swal.fire("X Won The Game");
        }else{
            console.log('o won');
            Swal.fire(" 0 Won The Game");
        }
        SetLock(true)
    }

    const reset = () => {
        SetLock(false)
        data = ["" , "" , "" , "" , "" , "" , "", "" , ""]
        BoxArray.map((e)=> {
            e.current.innerHTML = "";
        })
        SetCount(0)
    }


    const checkWin = () => {
        if(data[0] === data[1] && data[1]=== data[2] && data[2] != ""){
            won(data[2])
        }
        else if (data[3] === data[4] && data[4]=== data[5] && data[5] != ""){
            won(data[5])
        }
        else if (data[6] === data[7] && data[7]=== data[8] && data[8] != ""){
            won(data[8])
        }
        else if (data[0] === data[4] && data[4]=== data[8] && data[8] != ""){
            won(data[8])
        }
        else if (data[2] === data[4] && data[4]=== data[6] && data[6] != ""){
            won(data[6])
        }
        else if (data[0] === data[3] && data[3]=== data[6] && data[6] != ""){
            won(data[6])
        }
        else if (data[2] === data[5] && data[5]=== data[8] && data[8] != ""){
            won(data[8])
        }
        else if (data[1] === data[4] && data[4]=== data[7] && data[7] != ""){
            won(data[7])
        }
    }


    return (
        <div className="backgrnd">
            <Navbar></Navbar>
            <div className="min-h-screen max-w-3xl mx-auto px-4 mt-3 mb-3">
                <h1 className="text-3xl md:text-4xl e text-center font-bold uppercase text-white font-Titan">Tic Tac Toe</h1>
                {/* game bg */}
                <div className="px-4 max-w-xl my-4 py-4 mx-auto rounded-3xl border-2 border-sky-300 border-double  bg-gradient-to-r from-slate-900/50   to-sky-950/70">
                    {/* game layout */}
                    <div className=" px-1 md:px-4  max-w-xl grid grid-cols-3 py-4 mx-auto font-extrabold rounded-full ">
                        {/* row 1 */}
                            <button id="btn1" ref={box1} className=" border-sky-200 text-3xl md:text-4xl px-2 md:px-5 py-2  md:min-h-[120px] min-h-16 min-w-full border-b-4 border-r-4 " onClick={(e) => {toggle(e , 0)}}></button>
                            <button id="btn2" ref={box2} className=" border-sky-200 text-3xl md:text-4xl px-2 md:px-5 py-2  md:min-h-[120px] min-h-16 min-w-full border-b-4 border-r-4 border-l-4" onClick={(e) => {toggle(e , 1)}}></button>
                            <button id="btn3" ref={box3} className=" border-sky-200 text-3xl md:text-4xl px-2 md:px-5 py-2  md:min-h-[120px] min-h-16 min-w-full border-b-4 border-l-4" onClick={(e) => {toggle(e , 2)}}></button>
                        {/* row 2 */}
                            <button id="btn4" ref={box4} className=" border-sky-200 text-3xl md:text-4xl px-2 md:px-5 py-2  md:min-h-[120px] min-h-16 min-w-full border-t-4 border-b-4 border-r-4" onClick={(e) => {toggle(e , 3)}}></button>
                            <button id="btn5" ref={box5} className=" border-sky-200 text-3xl md:text-4xl px-2 md:px-5 py-2 md:min-h-[120px] min-h-16 min-w-full border-4 " onClick={(e) => {toggle(e , 4)}}></button>
                            <button id="btn6" ref={box6} className=" border-sky-200 text-3xl md:text-4xl px-2 md:px-5 py-2  md:min-h-[120px] min-h-16 min-w-full  border-t-4 border-b-4 border-l-4" onClick={(e) => {toggle(e , 5)}}></button>
                        {/* row 3 */}
                            <button id="btn7" ref={box7} className=" border-sky-200 text-3xl md:text-4xl px-2 md:px-5 py-2  md:min-h-[120px] min-h-16 min-w-full  border-t-4 border-r-4 " onClick={(e) => {toggle(e , 6)}}></button>
                            <button id="btn8" ref={box8} className="border-sky-200 text-3xl md:text-4xl px-2 md:px-5 py-2  md:min-h-[120px] min-h-16 min-w-full  border-t-4 border-l-4 border-r-4" onClick={(e) => {toggle(e , 7)}}></button>
                            <button id="btn9" ref={box9} className="border-sky-200 text-3xl md:text-4xl px-2 md:px-5 py-2   md:min-h-[120px] min-h-16 min-w-full  border-t-4 border-l-4 " onClick={(e) => {toggle(e , 8)}}></button>
                    </div>
                </div>
                {/* reset button */}
                <div className="flex justify-center">
                    <button onClick={reset} className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'>Reset Game</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

Tictactoe.propTypes = {

};

export default Tictactoe;