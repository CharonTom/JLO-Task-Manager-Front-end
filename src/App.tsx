import Tasktodo from "./pages/task-to-do";
import Taskdone from "./pages/task-done";
import Layouts from "./layout/Layouts";
import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Settings from "./pages/Settings";

function App() {
  const rooter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts />}>
        <Route index path="/" element={<Tasktodo />} />
        <Route path="/done" element={<Taskdone />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    )
  );

  return <RouterProvider router={rooter} />;
}

export default App;
