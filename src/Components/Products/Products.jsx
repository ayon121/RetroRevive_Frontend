import { useEffect, useState } from "react";
import Title from "../Title/Title";
import Product from "./Product";
import Marquee from "react-fast-marquee";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const Products = () => {
    const [ HomeProducts, SetHomeProducts] = useState([])
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.get('/homeproducts')
            .then(res => SetHomeProducts(res.data))
    }, [axiosSecure])

    return (
        <div>
            <Title title={'Latest Products'}></Title>
            <Marquee>
            <div className="grid grid-cols-4 gap-4 px-3 max-w-6xl mx-auto mb-4">
                    {
                        HomeProducts.map(homeproduct =><Product key={homeproduct._id} homeproducts={homeproduct}></Product>)
                    }
                </div>
            </Marquee>
            <div className="flex justify-center mb-5 px-2">
                <button  className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'>See More</button>
            </div>

        </div>
    );
};

export default Products;