import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import TopGames from "../TopGames/TopGames";
import Pagination from "../Pagination/Pagination";
import Products from "../Products/Products";
import RedeemPointsHome from "../RedeemPoints/RedeemPointsHome";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>GRT | Home</title>
            </Helmet>
            {/* body */}
            <Banner></Banner>
            <TopGames></TopGames>
            <Pagination></Pagination>
            <Products></Products>
            <RedeemPointsHome></RedeemPointsHome>

            <Footer>
            </Footer>
        </div>
    );
};

export default Home;