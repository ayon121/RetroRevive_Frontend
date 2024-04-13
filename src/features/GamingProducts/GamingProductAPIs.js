

export const getGamingProduct = async () => {
    const response = await fetch('http://localhost:5000/allproducts')
    return response.json();
}