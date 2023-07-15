const generateMap = (width, height) => {
    let map = [];
    let mapMatrix = [];
    const baseSquare = { type: 1, digOrder: false, x: 0, y: 0 };

    for (let y = 0; y < height + 2; y++) {
        map[y] = [];
        mapMatrix[y] = [];
        for (let x = 0; x < width + 2; x++) {
            if (y === 0 || x === 0 || y === height + 1 || x === width + 1) {
                map[y][x] = { ...baseSquare, type: 2, x, y };
                mapMatrix[y][x] = 1;
            } else if (y === Math.round(height / 2) || x === Math.round(width / 2)) {
                map[y][x] = { ...baseSquare, type: 0, x, y };
                mapMatrix[y][x] = 0;
            } else if (y === 17 && x === 15) {
                map[y][x] = { ...baseSquare, type: 0, x, y };
                mapMatrix[y][x] = 0;
            } else {
                let rand = Math.round(Math.random(0, 2));
                if (rand === 1) {
                    rand = Math.round(Math.random(0, 2));
                }
                map[y][x] = { ...baseSquare, type: rand, x, y };
                mapMatrix[y][x] = rand;
            }
        }
    }

    return {
        map,
        mapMatrix,
    };
};

export {
    generateMap,
}