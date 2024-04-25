export const addNewProductOrder = async (neworder) => {
    console.log('bbbbb' ,neworder);
    const response = await fetch('http://localhost:5000/orderproduct',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(neworder)
        }
    )
    const result =  await response.json();
    return result
}