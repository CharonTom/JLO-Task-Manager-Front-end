import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layouts() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default Layouts;
