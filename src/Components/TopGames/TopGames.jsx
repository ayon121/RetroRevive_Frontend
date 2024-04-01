import { useEffect, useState } from "react";
import Title from "../Title/Title";
import TopGame from "./TopGame";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const TopGames = () => {
    const [topgames, Settopgames] = useState([])
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get('/topgames')
            .then(res => Settopgames(res.data))
    }, [axiosSecure])
    return (
        <div>
            <Title title={'Top Retro Games'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 max-w-6xl mx-auto mb-4">
                {
                    topgames.map(topgame => <TopGame  key={topgame._id} topgame={topgame}></TopGame>)
                }
            </div>
        </div>
    );
};

export default TopGames;