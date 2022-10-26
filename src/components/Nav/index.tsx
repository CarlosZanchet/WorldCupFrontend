import { NavLink } from "./NavLink";
import { HiAnnotation } from "react-icons/hi";
import { FaUsers, FaFutbol } from "react-icons/fa";
import { Avatar, Heading, Text } from "coheza-ui";

export function Nav() {
  return (
    <nav className="h-16 w-fill bg-gray-50 mt-4 flex bg-default-800 gap-7 justify-between px-8 items-center rounded">
      <div className="flex gap-4">
        <NavLink path="/dashboard">
          Dashboard
        </NavLink>
        <NavLink path="/clan">
          Clan
        </NavLink>
        <NavLink path="/games">
          Jogos
        </NavLink>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-end">
          <Heading size="xxs">Nome Usuário</Heading>
          <Text size="xs">Time Favorito</Text>
        </div>
        <Avatar size="sm" />
      </div>
    </nav>
  );
}
