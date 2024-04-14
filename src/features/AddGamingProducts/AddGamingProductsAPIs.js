export const addNewGamingProduct = async (newproduct) => {
    console.log('bbbbb' ,newproduct);
    const response = await fetch('http://localhost:5000/addproduct',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newproduct)
        }
    )
    const result =  await response.json();
    return result
}