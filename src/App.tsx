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

function App() {
  const rooter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts />}>
        <Route index path="/" element={<Tasktodo />} />
        <Route path="/done" element={<Taskdone />} />
      </Route>
    )
  );

  return <RouterProvider router={rooter} />;
}

export default App;
