import Title from "../Title/Title";
import teamA from "../../assets/TeamAlbertos.png"
import teamB from "../../assets/TeamAvengers.png"
import vs from "../../assets/Vs.png"
import Swal from "sweetalert2";


const Tournaments = () => {
    const joinbtn = () => {
        Swal.fire({
            icon: "info",
            title: "Update Will Come Soon",
            text: "I am working on it , Thanks for your interest.",   
          })
    }
    return (
        <div>
            <Title title={'Tournaments'}></Title>
            
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 mb-6">
                {/* team one img */}
                <div>
                    <img className="w-auto" src={teamA} alt="teama" />
                </div>
                {/* vs */}
                <div>
                    <img className="w-auto" src={vs} alt="vs" />
                </div>
                {/* team two img */}
                <div>
                    <img className="w-auto" src={teamB} alt="teamb" />
                </div>
            </div>
            <div className="flex justify-center mb-9">
            <button onClick={joinbtn} className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'>JOIN NOW</button>
            </div>

        </div>
    );         
};

export default Tournaments;