

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const About = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

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
        <div>
            <Helmet>
                <title>RETRO REVIVE | About</title>
            </Helmet>

            <Navbar></Navbar>
            <div className='flex justify-center  font-bold font-Hind'>
                <h1 className=' text-3xl md:text-4xl lg:text-5xl mb-5 mt-3'>About Us</h1>
            </div>
            <div className='max-w-6xl mx-auto px-3 font-Hind'>
                <div>
                    <p className='text-lg font-semibold pb-3'>Welcome to RETRO REVIVE REVIEWS, your ultimate destination for game reviews, recommendations, and insights! We are passionate gamers who have come together to create a platform where fellow enthusiasts can discover new games, share their thoughts, and connect with like-minded individuals.</p>
                </div>
                <div>
                    <h1 className='mt-2 text-2xl font-bold'>Our Mission</h1>
                    <p className='text-lg font-semibold pb-3 pt-2'> At RETRO REVIVE our mission is to provide an inclusive and welcoming space for gamers of all backgrounds and preferences. We believe that gaming is not just a hobby but a vibrant community that brings people together, fosters creativity, and sparks joy. Our goal is to celebrate the diversity of gaming and empower our users to explore new experiences, express their opinions, and connect with others who share their passion.</p>
                </div>
                <div>
                    <h1 className='mt-2 text-2xl font-bold'>Our Reputation From 2017-2023</h1>
                    <BarChart
                        width={500}
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
                    <h1 className='mt-2 text-2xl font-bold'>Expert Reviews</h1>
                    <p className='text-lg font-semibold pb-3 pt-2'>Our team of experienced reviewers meticulously assesses each game, providing in-depth analysis, critical insights, and honest opinions. Whether you are looking for the latest AAA blockbuster or a hidden indie gem, we have got you covered with comprehensive reviews that help you make informed decisions.</p>
                </div>
                <div>
                    <h1 className='mt-2 text-2xl font-bold'>Community Interaction</h1>
                    <p className='text-lg font-semibold pb-3 pt-2'>We value the voices of our community members and encourage active participation through user reviews, ratings, and discussions. Share your thoughts, engage in friendly debates, and discover new perspectives from fellow gamers around the world. Together, we are building a vibrant community where every voice matters.</p>
                </div>
                <div>
                    <h1 className='mt-2 text-2xl font-bold'>Exclusive Content</h1>
                    <p className='text-lg font-semibold pb-3 pt-2'>Stay updated with the latest news, interviews, and features from the world of gaming with our exclusive content. From developer interviews to behind-the-scenes insights, we offer unique perspectives that enrich your gaming experience and keep you informed about the industry latest trends and developments.</p>
                    <br />
                    <p className='text-lg font-semibold pb-3 pt-2'>Thank you for choosing RETRO REVIVE as your go-to destination for all things gaming. We look forward to embarking on this exciting journey with you!

                    </p>
                </div>

            </div>
            <Footer></Footer>


        </div>
    );
};

export default About;