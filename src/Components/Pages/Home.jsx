import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import TopGames from "../TopGames/TopGames";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>GRT | Home</title>
        </Helmet>
            <Navbar></Navbar>
            {/* body */}
            <div className="min-h-screen">
                <Banner></Banner>
                <TopGames></TopGames>
            </div>
            <Footer>
            </Footer>
        </div>
    );
};

export default Home;