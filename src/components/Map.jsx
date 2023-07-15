import { useContext, useEffect, useState } from "react";
import Square from "./Square";
import { generateMap } from "../utils/map";
import { Grid, AStarFinder } from 'pathfinding';
import Ant from "./Ant";
import { MapContext } from "../contexts";

const Map = () => {
    const { 
        map, setMap,
        mapMatrix, setMapMatrix,
        grid, setGrid,
        finder, setFinder,
        isDigOrder, setIsDigOrder,
        isMouseDown,
    } = useContext(MapContext);

    useEffect(() => {
        if (mapMatrix) {
            const newGrid = new Grid(mapMatrix);
            const newFinder = new AStarFinder({
                allowDiagonal: false,
            });
            setGrid(newGrid);
            setFinder(newFinder);
        }
    }, [mapMatrix]);

    const findPath = (startX, startY, endX, endY) => {
        if (!finder) return null;

        const path = finder.findPath(startX, startY, endX, endY, grid);

        return path;
    };

    return (
        <>
            {
                map?.map((row, y) => (
                    <div className="flex" key={y}>
                        { row.map((square, x) => (
                            <Square key={x} square={square} map={map} setMap={setMap} handleSquareMouseEnter={handleSquareMouseEnter}/>
                        ))}
                    </div>
                ))
            }
            {finder && grid && <Ant initialPosition={{ x: Math.round(25 / 2), y: Math.round(17 / 2)}} findPath={findPath} />}
        </>
    );
};

export default Map;