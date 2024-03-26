import bannerimage from "../../assets/RETROBanner.png"
import "./Banner.css"
const Banner = () => {
    return (
        <div className="hero min-h-screen h-auto w-full banner mb-4" style={{ backgroundImage: `url(${bannerimage})`  }}>
            <div className="hero-overlay bg-opacity-25 md:bg-opacity-5"></div>
            <div className=" text-left text-neutral-content mt-11 lg:mt-10  pt-8 lg:pt-7  pb-5 lg:pb-2">
                <div className="max-w-7xl px-4 ">
                    <h1 className="mb-5 text-5xl font-bold uppercase">Rediscover Retro</h1>
                    <p className="mb-5 w-full md:w-2/5">Your Passport to Gaming Nostalgia! Dive into a world where classics never age, and every pixel tells a story. Join us in celebrating the timeless joy of retro gaming today</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;