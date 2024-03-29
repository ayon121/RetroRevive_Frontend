import poster from "../../assets/CoinRedeemPoster.png"

const RedeemPointsHome = () => {
    return (
        <div className="w-full bg-pink-200 mt-2 mb-4 md:mb-7">
            <div className="max-w-7xl ">
                <div className="hero h-auto py-4   mx-auto">
                    <div className="hero-content flex-col md:flex-row-reverse">
                        <img  src={poster} className="max-w-sm rounded-lg shadow-2xl hidden md:block h-96" />
                        <div className="md:w-2/3 w-full">
                            <h1 className="text-3xl md:text-4xl font-bold uppercase">Earn Game Points, Shop with Vouchers!</h1>
                            <p className="py-6">Earn game points, redeem for vouchers, shop now! Level up your gaming experience with our exclusive rewards program. Play retro classics, earn points, and unlock vouchers to shop for amazing products on our website. Start gaming, start earning, start shopping...</p>
                            <button className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'>Redeem Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RedeemPointsHome;