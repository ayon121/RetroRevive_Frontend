
import PropTypes from 'prop-types';
import { useState } from 'react';
import Swal from 'sweetalert2';

const AllProduct = ({ allproduct }) => {
    const { img, title, description } = allproduct
    // order confirmatioan 
    const [address, setAddress] = useState('')
    const [amount, setAmount] = useState(null)
    const [phone, setPhone] = useState(null)
    const [usedcoin, setCoin] = useState(0)
    const buyNow = async () => {
        const { value: number } = await Swal.fire({
            title: `${title}`,
            color: "#FFFFFF",
            background: "linear-gradient(to right, #2F4F4F, rgba(135, 206, 250, 0.5))",
            html: `<b>Select these options before confirmation</b>`,
            input: "select",
            inputPlaceholder: "Select Quentity",
            inputAttributes: {
                style: 'background-color: #708090' // Change the color to your desired color
            },
            inputOptions: {
                Quantity: {
                    1: "1",
                    2: "2",
                    3: "3",
                    4: "4",
                    5: "5",
                    6: "6",
                }
            },
            showCancelButton: true,
            confirmButtonText: "Next",
        })
        if(number){
            const { value: coin } = await Swal.fire({
                title: `${number} ${title} is selected for order `,
                color: "#FFFFFF",
                background: "linear-gradient(to right, #2F4F4F, rgba(135, 206, 250, 0.5))",
                html: `<b>Use 5 goldcoins for free Delivery </b><br>
                <b>Use 5 goldcoins for 5% off </b>`,
                input: "select",
                inputPlaceholder: "Select Gold Coin For Offers",
                inputAttributes: {
                    style: 'background-color: #708090' // Change the color to your desired color
                },
                inputOptions: {
                    Quantity: {
                        5: "5",
                        10: "10",
                    }
                },
                showCancelButton: true,
                confirmButtonText: "Next",
            })
            if (coin) {
                console.log(number);
                const { value: formValues } = await Swal.fire({
                    title: `${number} ${title} is selected for order `,
                    color: "#FFFFFF",
                    background: "linear-gradient(to right, #2F4F4F, rgba(135, 206, 250, 0.5))",
                    html: `
                        <b>Type Your Phone Number</b> <br>
                      <input id="swal-input1" class="swal2-input"><br>
                      <b>Type Your Address</b><br>
                      <input id="swal-input2" class="swal2-input">
                    `,
                    focusConfirm: false,
                    preConfirm: () => {
                        return [
                            number,
                            document.getElementById("swal-input1").value,
                            document.getElementById("swal-input2").value,
                            coin
                        ];
                    }
                });
                if (formValues) {
                    const [selectedQuantity, enteredPhone, enteredAddress , usecoin] = formValues;
                    setAmount(selectedQuantity);
                    setPhone(enteredPhone);
                    setAddress(enteredAddress);
                    setCoin(usecoin)
                    const orderdata = {
                        Product : title ,
                        ProdcutAmount : amount , 
                        OrderAdress : address ,
                        PhoneNumber : phone ,
                        CoinUsed : usedcoin,
                        
                    }
                   console.log(orderdata);
    
                }
            }
        }
        
        
       
    }
    return (
        <div className="card w-auto text-white shadow-2xl  mb-3 border-2  bg-gradient-to-r from-slate-900/50   to-sky-950/70  lg:rounded-b-3xl border-b-2 border-sky-300 duration-500 hover:top-3 ">
            <figure><img src={img} alt="products" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-accent">Gaming</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className='flex items-center gap-2 text-lg '>
                        <button onClick={buyNow} className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllProduct.propTypes = {
    allproduct: PropTypes.object
};

export default AllProduct;