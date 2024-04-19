

export const getGamingProduct = async ({ currentPage, itemsPerPage }) => {
    const response = await fetch(`http://localhost:5000/allproducts?page=${currentPage}&size=${itemsPerPage}`)
    return response.json();
}