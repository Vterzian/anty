import { useEffect, useState } from 'react';
import { GiWarPick } from 'react-icons/gi';
import { styled } from 'styled-components';

const squareTypeList = [
    {
        title: 'ground',
        type: 0,
        class: 'square-ground',
        img: process.env.PUBLIC_URL + '/ground.jpg',
    },
    {
        title: 'dirt',
        type: 1,
        class: 'square-dirt',
        img: process.env.PUBLIC_URL + '/dirt.jpg',
    },
    {
        title: 'stone',
        type: 2,
        class: 'square-stone',
        img: process.env.PUBLIC_URL + '/stone.jpg',
    },
];

const SquareContainer = styled.div`
    .square {
        min-width: 50px;
        min-height: 50px;
        background-size: 100% 100%;

        &:hover {
            &:before {
                content: '';
                width: 100%;
                height: 100%;
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                border: 2px solid yellow;
            }
        }

        &-ground {
            background-image: url('${squareTypeList.find((squareType) => squareType.title === 'ground')?.img}');
        }

        &-dirt {
            background-image: url('${squareTypeList.find((squareType) => squareType.title === 'dirt')?.img}');
        }

        &-stone {
            background-image: url('${squareTypeList.find((squareType) => squareType.title === 'stone')?.img}');
        }

        &-dig-order {
            &:before {
                content: '';
                width: 100%;
                height: 100%;
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                background: rgba(0, 0, 0, 0.5);
            }
        }
    }
`;

const Square = ({ square, map, setMap, handleSquareMouseEnter }) => {

    const [squareClass, setSquareClass] = useState('square');

    useEffect(() => {
        setSquareClass(`square ${squareTypeList[square.type]?.class}`);

        if (square.digOrder) {
            setSquareClass(`${squareClass} square-dig-order`);
        }
    }, [square]);

    const handleSquareMouseDown = (value, x, y) => {
        if (value === 1) {
            let newMap = [ ...map ];
            newMap[y][x] = { ...map[y][x], digOrder: !map[y][x].digOrder };

            setMap(newMap);
        }
    }

    return (
        <SquareContainer className="flex relative">
            <span className={squareClass} onMouseDown={() => { handleSquareMouseDown(square.type, square.x, square.y) }} onMouseEnter={() => handleSquareMouseEnter(square)}>
            </span>
        </SquareContainer>
    );
};

export default Square;