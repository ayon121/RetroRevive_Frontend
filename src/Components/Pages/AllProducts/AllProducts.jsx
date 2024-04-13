import Title from "../../Title/Title";
import "../../PageCSS/Home.css"
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect} from "react";
import AllProduct from "./AllProduct";
import { useDispatch, useSelector } from "react-redux";
import { featchGamingProducts } from "../../../features/GamingProducts/GamingProductsSlice";
const AllProducts = () => {
    // Redux Data Fetching
    const {allproducts , isLoading , isError , error  }  = useSelector(state => state.GamingProducts)
    const dispatch = useDispatch()
    useEffect( ()  => {
        dispatch(featchGamingProducts())
    }, [dispatch])

    let content ;
    if(isLoading){
        content = <h1>Loading</h1>
    }
    if(!isLoading && isError){
        content = <h1>{error}</h1>
    }
    if(!isLoading && !isError && allproducts.length === 0 ){
        content = <h1>No Product Found</h1>
    }
    if(!isLoading && !isError && allproducts.length > 0 ){
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 max-w-6xl mx-auto mb-4">
                    {/* {
                        allproducts.map(allproduct => <AllProduct key={allproduct._id} allproduct={allproduct} ></AllProduct>)
                    } */}
                    {content}
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default AllProducts;