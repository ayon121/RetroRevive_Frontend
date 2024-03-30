import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import TopGames from "../TopGames/TopGames";
import Pagination from "../Pagination/Pagination";
import Products from "../Products/Products";
import RedeemPointsHome from "../RedeemPoints/RedeemPointsHome";
import Tournaments from "../Tournaments/Tournaments";
import Navbar from "../Navbar/Navbar";
import '../PageCSS/Home.css'
const Home = () => {
    return (
        <div className="backgrnd">
            <Helmet>
                <title>RETRO REVIVE | Home</title>
            </Helmet>

            {/* body */}
            <Navbar></Navbar>
            <Banner></Banner>
            <TopGames></TopGames>
            <Pagination></Pagination>
            <Products></Products>
            <RedeemPointsHome></RedeemPointsHome>
            <Tournaments></Tournaments>

            <Footer>
            </Footer>
        </div>
    );
};

export default Home;