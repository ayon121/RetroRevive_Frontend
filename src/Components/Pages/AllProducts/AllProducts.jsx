import Title from "../../Title/Title";
import "../../PageCSS/Home.css"
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import AllProduct from "./AllProduct";
const AllProducts = () => {
    const [ allproducts, SetALLproducts] = useState([])
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.get('/allproducts')
            .then(res => SetALLproducts(res.data))
    }, [axiosSecure])
    return (
        <div className="backgrnd">
            <Navbar></Navbar>
            <div className="min-h-screen">
                <Title title={'ALL Products'}></Title>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 max-w-6xl mx-auto mb-4">
                    {
                        allproducts.map(allproduct => <AllProduct key={allproduct._id} allproduct={allproduct} ></AllProduct>)
                    }
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default AllProducts;