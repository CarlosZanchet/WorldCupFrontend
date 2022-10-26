import { Outlet } from "react-router-dom";
import { Nav } from "../Nav";

export function Layout() {
  return (
    <div className="w-full justify-center bg-default-900 items-center flex flex-col">
      <div className="w-full flex-col max-w-7xl flex bg-default-900">
        <div>
          <Nav />
        </div>
        <div className="w-full bg-gray-50 mt-5 p-3 rounded-md ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
