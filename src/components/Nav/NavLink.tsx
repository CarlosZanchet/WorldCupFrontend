import { ReactElement } from "react";
import { NavLink as RouterLink } from "react-router-dom";

interface NavLinkProps {
  icon?: ReactElement;
  children: string;
  path: string;
}

export function NavLink({ icon, children, path }: NavLinkProps) {
  return (
      <div >
        <RouterLink
          className={(navigationData) =>
            navigationData.isActive ? 
            "text-primary-800 border-b-[3px] border-primary-800 border-solid flex h-14" : 
            "text-gray-700"
          }
          to={path}
        >
          <div className="flex flex-row items-center gap-1">
            {icon}
            {children}
          </div>
        </RouterLink>
      </div>
  );
}
