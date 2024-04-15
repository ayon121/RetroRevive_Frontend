import Title from "../../Title/Title";
import "../../PageCSS/Home.css"
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import AllProduct from "./AllProduct";
import { useDispatch, useSelector } from "react-redux";
import { featchGamingProducts } from "../../../features/GamingProducts/GamingProductsSlice";
import useTotalProductCount from "../../../Hooks/useTotalProductCount";
const AllProducts = () => {
    // Redux Data Fetching
    const { allproducts, isLoading, isError, error } = useSelector(state => state.GamingProducts)
    const dispatch = useDispatch()

    // pagination code
    const [currentPage, SetcurrentPage] = useState(0)
    const itemsPerPage = 3
    const countarray = useTotalProductCount()
    const count = countarray[0]
    const Pagenumber = Math.ceil(count / itemsPerPage)
    const pages = [...Array(Pagenumber).keys()]


    // redux data fetching

    useEffect(() => {
        const pagination = { currentPage, itemsPerPage }
        dispatch(featchGamingProducts(pagination))
    }, [dispatch, currentPage, itemsPerPage])

    let content;
    if (!isLoading && isError) {
        content = <h1>{error}</h1>
    }
    if (!isLoading && !isError && allproducts.length === 0) {
        content = <h1>No Product Found</h1>
    }
    if (!isLoading && !isError && allproducts.length > 0) {
        content = allproducts.map(allproduct => <AllProduct key={allproduct._id} allproduct={allproduct} ></AllProduct>)
    }

    // -----------------------normal data fetching----------------------// 
    // const [ allproducts, SetALLproducts] = useState([])
    // const axiosSecure = useAxiosSecure()

    // useEffect(() => {
    //     axiosSecure.get('/allproducts')
    //         .then(res => SetALLproducts(res.data))
    // }, [axiosSecure])
    return (
        <div className="backgrnd">
            <Navbar></Navbar>
            <div className="min-h-screen">
                <Title title={'ALL Products'}></Title>
                <div className="min-h-screen">
                    {
                        isLoading && <div className="w-full pt-10 md:pt-28 lg:pt-52 flex justify-center items-center text-4xl text-yellow-50"><span className="loading loading-spinner loading-lg"></span></div>
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 max-w-6xl mx-auto mb-1 pt-4 md:pt-10">
                        {/* {
                        allproducts.map(allproduct => <AllProduct key={allproduct._id} allproduct={allproduct} ></AllProduct>)
                    } */}
                        {content}
                    </div>
                </div>
                <div className="max-w-5xl mx-auto px-3 text-center mb-8 ">
                    {
                        pages.map((page, index) => <button onClick={() => { SetcurrentPage(page); }} key={index} className={currentPage === page && 'btn btn-xs mx-2 text-white bg-pink-500 hover:bg-pink-700' || 'btn btn-sm mx-2 text-pink-400 hover:text-black  border-pink-400'}>{page}</button>)
                    }
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default AllProducts;