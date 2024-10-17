import { Outlet } from "react-router-dom";
import AppBar from "../AppBarr/AppBarr.jsx";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
