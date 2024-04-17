import axios from 'axios';
export const addGamingPoints = async (useremail) => {
    const response = await axios.patch(`http://localhost:5000/addgamepoint/${useremail}`);
    return response.data
}