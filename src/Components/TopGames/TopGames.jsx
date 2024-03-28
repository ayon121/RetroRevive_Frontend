import Title from "../Title/Title";
import TopGame from "./TopGame";


const TopGames = () => {
    return (
        <div>
            <Title title={'Top Retro Games'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 max-w-6xl mx-auto mb-4">
            <TopGame></TopGame>
            <TopGame></TopGame>
            <TopGame></TopGame>
            </div>
        </div>
    );
};

export default TopGames;