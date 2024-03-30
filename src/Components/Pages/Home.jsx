import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import TopGames from "../TopGames/TopGames";
import Pagination from "../Pagination/Pagination";
import Products from "../Products/Products";
import RedeemPointsHome from "../RedeemPoints/RedeemPointsHome";
import websitebg from "../../assets/webbg.jpg"
import Tournaments from "../Tournaments/Tournaments";
import Navbar from "../Navbar/Navbar";
const Home = () => {
    return (
        <div className=""  style={{ backgroundImage: `url(${websitebg})`, background : 'fit'  }}>
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