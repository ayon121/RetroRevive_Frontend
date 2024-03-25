import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>GRT | Home</title>
        </Helmet>
            <Navbar></Navbar>
            <Footer>
            </Footer>
        </div>
    );
};

export default Home;