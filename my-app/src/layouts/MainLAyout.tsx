import { Outlet } from "react-router";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
     <h1>Game List</h1>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;