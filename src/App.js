import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Game from "./components/Game";
import AppContextProvider from "./contexts/providers/AppContextProvider";
import MapContextProvider from "./contexts/providers/MapContextProvider";
import MinionContextProvider from "./contexts/providers/MinionContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: 'Hello loader' }),
    Component: Game,
  },
]);

const App = () => {

  const handleEvent = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    // Disable mouse events
    document.addEventListener('contextmenu', handleEvent);
    document.addEventListener('click', handleEvent);
    document.addEventListener('dblclick', handleEvent);
    document.addEventListener('mousedown', handleEvent);
    document.addEventListener('mouseup', handleEvent);
    document.addEventListener('mousemove', handleEvent);

    // Disable scroll events
    document.addEventListener('wheel', handleEvent, { passive: false });
    document.addEventListener('touchstart', handleEvent, { passive: false });
    document.addEventListener('touchmove', handleEvent, { passive: false });

    // Disable keyboard events
    document.addEventListener('keydown', handleEvent);
    document.addEventListener('keyup', handleEvent);

    return () => {
      // Remove all listener
      document.removeEventListener('contextmenu', handleEvent);
      document.removeEventListener('click', handleEvent);
      document.removeEventListener('dblclick', handleEvent);
      document.removeEventListener('mousedown', handleEvent);
      document.removeEventListener('mouseup', handleEvent);
      document.removeEventListener('mousemove', handleEvent);
      document.removeEventListener('wheel', handleEvent);
      document.removeEventListener('touchstart', handleEvent);
      document.removeEventListener('touchmove', handleEvent);
      document.removeEventListener('keydown', handleEvent);
      document.removeEventListener('keyup', handleEvent);
    };
  }, []);

  return (
    <AppContextProvider>
      <MapContextProvider>
        <MinionContextProvider>
          <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
        </MinionContextProvider>
      </MapContextProvider>
    </AppContextProvider>
  );
}

export default App;