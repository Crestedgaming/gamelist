import { Outlet } from "react-router";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
     <h1>TEST - MainLayout fungerar!</h1>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;