import Tasktodo from "./pages/ToDo";
import Taskdone from "./pages/Done";
import Layouts from "./layout/Layouts";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Settings from "./pages/Settings";

function App() {
  const { theme } = useContext(ThemeContext);

  const rooter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts />}>
        <Route index path="/" element={<Tasktodo />} />
        <Route path="/done" element={<Taskdone />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    )
  );

  return (
    <div className={`bg-skin-fill ${theme}`}>
      <RouterProvider router={rooter} />
    </div>
  );
}

export default App;
