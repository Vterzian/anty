import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts";
import Ant from "./Ant";
import Map from "./Map";

const Game = () => {
    const [minionList, setMinionList] = useState([]);

    return (
        <>
            <Map />
            { minionList.map((minion) => <Ant /> ) }
        </>
    );
};

export default Game;