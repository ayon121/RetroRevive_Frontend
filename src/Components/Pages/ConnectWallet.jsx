import { ToastContainer, toast } from 'react-toastify';
import '../PageCSS/Home.css'
import { useAccount } from "wagmi";



const ConnectWallet = () => {
    const { address , isConnected} = useAccount()
    console.log(address);
    if(isConnected){
        toast('Successfully Connected')
    }
    return (
        <div>
            <w3m-button balance="show" size="md" />
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default ConnectWallet;