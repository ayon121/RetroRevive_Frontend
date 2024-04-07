import { useEffect, useState } from "react";
import Title from "../Title/Title";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Dashboard = () => {
    const [Allinfo, SetAllinfo] = useState([])
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get('/admin')
            .then(res => SetAllinfo(res.data))
    }, [axiosSecure])

    const { productcount, reviewcount, userscount, gamescount } = Allinfo


    return (
        <div>
            <Title title={'Admin Dashboard'}></Title>
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3">
                {/* card 1 */}
                <div className="card  z-10 text-center w-auto text-white mb-3 border-2  bg-gradient-to-r from-slate-900/50   to-sky-950/70  lg:rounded-b-3xl border-b-2 border-sky-300 duration-500 hover:top-3  shadow-xl">
                    <div className="card-body">
                        <h2 className="font-bold text-2xl text-center">Total Products</h2>
                        <p className="text-2xl md:text-3xl font-Rubik font-extrabold">{productcount}</p>
                    </div>
                </div>
                <div className="card text-center w-auto text-white mb-3 border-2  bg-gradient-to-r from-slate-900/50   to-sky-950/70  lg:rounded-b-3xl border-b-2 border-sky-300 duration-500 hover:top-3  shadow-xl">
                    <div className="card-body">
                        <h2 className="font-bold text-2xl text-center">Total Reviews</h2>
                        <p className="text-2xl md:text-3xl font-Rubik font-extrabold">{reviewcount}</p>
                    </div>
                </div>
                <div className="card text-center w-auto text-white mb-3 border-2  bg-gradient-to-r from-slate-900/50   to-sky-950/70  lg:rounded-b-3xl border-b-2 border-sky-300 duration-500 hover:top-3  shadow-xl">
                    <div className="card-body">
                        <h2 className="font-bold text-2xl text-center">Total Users</h2>
                        <p className="text-2xl md:text-3xl font-Rubik font-extrabold">{userscount}</p>
                    </div>
                </div>
                <div className="card text-center w-auto text-white mb-3 border-2  bg-gradient-to-r from-slate-900/50   to-sky-950/70  lg:rounded-b-3xl border-b-2 border-sky-300 duration-500 hover:top-3  shadow-xl">
                    <div className="card-body">
                        <h2 className="font-bold text-2xl text-center">Total Games</h2>
                        <p className="text-2xl md:text-3xl font-Rubik font-extrabold">{gamescount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;