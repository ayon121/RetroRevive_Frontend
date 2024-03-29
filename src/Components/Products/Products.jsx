import Title from "../Title/Title";
import Product from "./Product";
import Marquee from "react-fast-marquee";
const Products = () => {
    return (
        <div>
            <Title title={'Latest Gaming Products'}></Title>
            <Marquee>
                <div className="grid grid-cols-5 gap-4 px-3 max-w-6xl mx-auto mb-4 md:mb-6">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
            </Marquee>
            
        </div>
    );
};

export default Products;