import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layouts() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layouts;
