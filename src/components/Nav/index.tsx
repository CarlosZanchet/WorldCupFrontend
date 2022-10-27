import { NavLink } from "./NavLink";
import { FaUserFriends } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { MdDashboard, MdOutlineLogout } from "react-icons/md";
import { Avatar, Box } from "coheza-ui";
import Logo from "../../assets/logo-branca.png";

export function Nav() {
  return (
    <nav className="w-full max-w-[250px] h-screen">
      <Box className="h-[97vh] w-full mt-4 flex flex-col gap-10 items-center">
        <div className="">
          <img src={Logo} width={150} alt="Logo" />
        </div>

        <div className="flex flex-row gap-2 ring-1 ring-default-700 ring-opacity-25 rounded-3xl p-3">
          <Avatar size="xs" />
          <div className="flex flex-col">
            <span className="text-default-100 text-sm">
              <strong>Olá, </strong>Carlos Zanchet
            </span>
            <span className="text-default-100 text-[0.7rem]">
              carlos.zanchet
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-2">
            <NavLink path="/dashboard" icon={<MdDashboard />}>
              Dashboard
            </NavLink>
            <NavLink path="/bolao" icon={<FaUserFriends />}>
              Bolão
            </NavLink>
            <NavLink path="/games" icon={<GiSoccerBall />}>
              Jogos
            </NavLink>
          </div>
          <NavLink className="text-[#c54b48]" path="/login" icon={<MdOutlineLogout />}>
            Sair
          </NavLink>
        </div>
      </Box>
    </nav>
  );
}
