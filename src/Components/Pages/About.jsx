

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import '../PageCSS/Home.css'

const About = () => {
    const colors = ['white', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const data = [
        {
            name: '2023',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: '2022',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: '2021',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: '2020',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: '2019',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: '2018',
            uv: 1000,
            pv: 3800,
            amt: 2500,
        },
        {
            name: '2017',
            uv: 1290,
            pv: 4300,
            amt: 2100,
        },
    ];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='backgrnd '>
            <Helmet>
                <title>RETRO REVIVE | About</title>
            </Helmet>

            <Navbar></Navbar>
            <div className='flex justify-center  font-bold font-Hind text-white'>
                <h1 className=' text-3xl md:text-4xl lg:text-5xl mb-5 mt-3'>About Us</h1>
            </div>
            <div className='max-w-6xl mx-auto px-3 font-Hind text-white '>
                <div>
                    <p className='text-lg font-semibold pb-3'>
                        Welcome to Retro Revive, the ultimate destination for all retro gaming enthusiasts! Founded by Ayon Saha, Retro Revive is not just a website; it is a passion project dedicated to bringing back the golden age of gaming while providing an exciting and rewarding experience for our users.</p>
                </div>
                <div>
                    <h1 className='mt-2 text-2xl font-bold'>Our Mission</h1>
                    <p className='text-lg font-semibold pb-3 pt-2'>At Retro Revive, we understand the allure of classic games and the nostalgia they evoke. Our platform offers a vast collection of retro games spanning across different consoles and genres, allowing users to relive their fondest gaming memories or discover timeless classics for the first time.</p>
                </div>
                <div className='w-4/5 overflow-hidden'>
                    <h1 className='mt-2 text-2xl font-bold'>Our Reputation From 2017-2023</h1>
                    <BarChart
                        className='w-4/5'
                        width={400}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>

                </div>
                <div>
                    <h1 className='mt-2 text-2xl font-bold'>Best Returns of Your Time</h1>
                    <p className='text-lg font-semibold pb-3 pt-2'>What sets Retro Revive apart is our unique points system. As you dive into the world of retro gaming on our platform, you will earn points for every achievement, high score, or milestone you reach. These points can then be redeemed for vouchers that can be used to purchase premium gaming products from our website.</p>
                </div>
                <div>
                    <h1 className='mt-2 text-2xl font-bold'>Best Collections</h1>
                    <p className='text-lg font-semibold pb-3 pt-2'>We take pride in curating the best gaming products for our users. Whether you are in search of vintage consoles, rare cartridges, or the latest gaming accessories, Retro Revive has you covered. Our selection is meticulously chosen to ensure top-notch quality and authenticity, guaranteeing an unparalleled gaming experience.</p>
                </div>
                <div>
                    <h1 className='mt-2 text-2xl font-bold'>We Are Community</h1>
                    <p className='text-lg font-semibold pb-3 pt-2'>But Retro Revive is more than just a marketplace; it is a community. We foster a vibrant and inclusive environment where gamers from all walks of life can come together to share their love for retro gaming. Our forums, blogs, and social media channels are buzzing with discussions, tips, and tricks, creating a space where friendships are forged and memories are made.</p>
                    <br />
                    <h1 className='mt-2 text-2xl font-bold'>Our Commitment</h1>
                    <p className='text-lg font-semibold pb-3 pt-2'>At Retro Revive, we are committed to excellence in everything we do. From the seamless user experience on our website to the exceptional customer service we provide, we strive to exceed expectations at every turn. Our team is dedicated to ensuring that your journey with us is nothing short of extraordinary.</p>
                    <br />
                    <p className='text-lg font-semibold pb-3 pt-2'>Thank you for choosing Retro Revive as your go-to destination for all things retro gaming. Join us today, and let us embark on an unforgettable adventure down memory lane together!



                    </p>
                </div>

            </div>
            <Footer></Footer>


        </div>
    );
};

export default About;