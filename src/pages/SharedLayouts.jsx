import { Outlet } from "react-router-dom";
import Footer from "../Components/layouts/Footer";
import Header from "../Components/layouts/Header";

const SharedLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayouts;
