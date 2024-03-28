import Title from "../Title/Title";
import Product from "./Product";

const Products = () => {
    return (
        <div>
            <Title title={'Latest Products'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 max-w-6xl mx-auto mb-4 gap-3">
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </div>
    );
};

export default Products;