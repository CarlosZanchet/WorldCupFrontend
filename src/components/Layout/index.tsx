import { Box } from "coheza-ui";
import { Outlet } from "react-router-dom";
import { Nav } from "../Nav";

export function Layout() {
  return (
    <div className="w-full justify-center bg-default-900 items-center flex flex-col">
      <div className="w-full max-w-7xl flex bg-default-900 gap-4">
        <Nav />
        <Box className="w-full mt-4">
          <Outlet />
        </Box>
      </div>
    </div>
  );
}
