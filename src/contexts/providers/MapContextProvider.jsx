import React, { useEffect, useState } from 'react';
import { MapContext } from '..';
import { generateMap } from '../../utils/map';

const MapContextProvider = ({ children }) => {
  const [map, setMap] = useState(null);
  const [mapMatrix, setMapMatrix] = useState(null)
  const [grid, setGrid] = useState(null);
  const [finder, setFinder] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isDigOrder, setIsDigOrder] = useState(null);

  useEffect(() => {
    const { map, mapMatrix } = generateMap(25, 17);

    setMap(map);
    setMapMatrix(mapMatrix);

    document.addEventListener('mousedown', () => {
        setIsMouseDown(true);
    });
    document.addEventListener('mouseup', () => {
        setIsMouseDown(false);
        setIsDigOrder(null);
    });

    return () => {
        document.removeEventListener('mousedown', () => {
            setIsMouseDown(true);
        });
        document.removeEventListener('mouseup', () => {
            setIsMouseDown(false);
        });
    }
}, []);

  return (
    <MapContext.Provider value={{ map, setMap, mapMatrix, setMapMatrix, grid, setGrid, finder, setFinder, isMouseDown, setIsMouseDown, isDigOrder, setIsDigOrder }}>
      {children}
    </MapContext.Provider>
  );
};

export default MapContextProvider;