import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import "../../PageCSS/Home.css"

const RockPapers = () => {
    return (
        <div className="backgrnd ">
            <Navbar></Navbar>
            <div className="min-h-screen mt-4 mb-7">
                {/* title */}
                <h1 className="text-3xl md:text-4xl e text-center font-bold uppercase text-white font-Titan">Rock Paper Scissor Game</h1>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default RockPapers;