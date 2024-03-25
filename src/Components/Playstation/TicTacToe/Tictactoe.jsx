
// import PropTypes from 'prop-types';

import { useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

import Ologo  from "../../../assets/O.png" ;
import crosslogo  from "../../../assets/cross.png" ;


let data = ["" , "" , "" , "" , "" , "" , "", "" , ""]
const Tictactoe = () => {

    let [count , SetCount] = useState(0)
    const [lock , SetLock ] = useState(false)

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
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen px-4 mt-3 mb-3">
                <h1 className="text-3xl md:text-4xl text-center font-bold uppercase">Tic Tac Toe</h1>
                {/* game bg */}
                <div className="px-4 max-w-xl my-4 py-4 mx-auto ">
                    {/* game layout */}
                    <div className="px-4 border-2 max-w-xl grid grid-cols-3 py-4 mx-auto font-extrabold ">
                        {/* row 1 */}
                            <button id="btn1" className=" border-black text-3xl md:text-4xl px-5 py-2  md:min-h-[120px] min-h-16 min-w-full border-4" onClick={(e) => {toggle(e , 0)}}></button>
                            <button id="btn2" className=" border-black text-3xl md:text-4xl px-5 py-2  md:min-h-[120px] min-h-16 min-w-full border-4" onClick={(e) => {toggle(e , 1)}}></button>
                            <button id="btn3" className=" border-black text-3xl md:text-4xl px-5 py-2  md:min-h-[120px] min-h-16 min-w-full border-4" onClick={(e) => {toggle(e , 2)}}></button>
                        {/* row 2 */}
                            <button id="btn4" className=" border-black text-3xl md:text-4xl px-5 py-2  md:min-h-[120px] min-h-16 min-w-full border-4" onClick={(e) => {toggle(e , 3)}}></button>
                            <button id="btn5" className=" border-black text-3xl md:text-4xl px-5 py-2 md:min-h-[120px] min-h-16 min-w-full border-4 " onClick={(e) => {toggle(e , 4)}}></button>
                            <button id="btn6" className=" border-black text-3xl md:text-4xl px-5 py-2  md:min-h-[120px] min-h-16 min-w-full border-4" onClick={(e) => {toggle(e , 5)}}></button>
                        {/* row 3 */}
                            <button id="btn7" className=" border-black text-3xl md:text-4xl px-5 py-2  md:min-h-[120px] min-h-16 min-w-full border-4 " onClick={(e) => {toggle(e , 6)}}></button>
                            <button id="btn8" className="border-black text-3xl md:text-4xl px-5 py-2  md:min-h-[120px] min-h-16 min-w-full border-4" onClick={(e) => {toggle(e , 7)}}></button>
                            <button id="btn9" className="border-black text-3xl md:text-4xl px-5 py-2   md:min-h-[120px] min-h-16 min-w-full border-4" onClick={(e) => {toggle(e , 8)}}></button>
                    </div>
                </div>
                {/* reset button */}
                <div className="flex justify-center">
                    <button className="btn bg-black text-white mt-4 mb-4 px-4 mx-2">Reset Game</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

Tictactoe.propTypes = {

};

export default Tictactoe;