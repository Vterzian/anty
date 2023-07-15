import { useEffect, useState } from "react";
import { styled } from "styled-components";

const AntContainer = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    font-size: 32px;
    transition: top 250ms linear, left 250ms linear;

    top: ${props => props.y * 50}px;
    left: ${props => props.x * 50}px;
`;

const Ant = ({ initialPosition, findPath, map, setMap }) => {
    const [position, setPosition] = useState(initialPosition);
    const [path, setPath] = useState(null);
    const [pendingActions, setPendingActions] = useState([]);

    // useEffect(() => {
    //     if (path && path.length > 0) {
    //         const [nextStepX, nextStepY] = path[0];

    //         setPosition({ x: nextStepX, y: nextStepY });
    //         setTimeout(() => {
    //             setPath(path.slice(1));
    //         }, 250);
    //     } else if (pendingActions.length > 0) {
    //         const nextAction = pendingActions[0];
    //         if (nextAction.type === "dig") {
    //           handleDigAction(nextAction);
    //         }
    //         setPendingActions(pendingActions.slice(1));
    //       }
    // }, [path, pendingActions]);

    useEffect(() => {
        handleNextAction();
    }, [pendingActions]);

    const handleNextAction = () => {
        if (!pendingActions.length) return null;

        const nextAction = pendingActions[0];

        switch (nextAction.type) {
            case "move":
                // moveTo();
            case "dig":
                // handleDig();
            default:
        };

        setPendingActions(pendingActions.slice(1));
    }

    const moveAction = (targetX, targetY) => {
        setPosition({ x: targetX, y: targetY});
    };

    const digAction = (targetX, targetY) => {
        const newMap = { ...map };
        newMap[targetY][targetX] = { ...newMap[targetY][targetX], type: 0 };
        setMap(newMap);
    }

    const handleMoveToTarget = (targetX, targetY) => {
        if (targetY === position.y && targetX === position.x) return;
        const newPath = findPath(position.x, position.y, targetX, targetY);

        if (newPath.length) {
            setPendingActions([...pendingActions, [ ...newPath.map((step) => ({ type: 'move', coordinates: step }))]]);
        }
    };

    const handleDigAction = (action) => {
        const { targetY, targetX } = action;
        const targetSquare = map[targetY][targetX];

        if (targetSquare.type === 1) {
            const newMap = map.map((row, y) =>
            row.map((square, x) => {
                if (y === targetY && x === targetX) {
                return { ...square, type: 0 };
                }
                return square;
            })
            );
            setMap(newMap);
        }
    };

    const handleDigOrder = (targetY, targetX) => {
        const action = { type: "dig", targetY, targetX };
        setPendingActions([...pendingActions, action]);
    };
  
    return (
      <AntContainer x={position.x} y={position.y}>
        🐜
      </AntContainer>
    );
};

export default Ant;