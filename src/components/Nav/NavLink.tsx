import { ReactElement } from "react";
import { NavLink as RouterLink } from "react-router-dom";

interface NavLinkProps {
  icon?: ReactElement;
  children: string;
  path: string;
  className?: string;
}

export function NavLink({ icon, children, path, className }: NavLinkProps) {
  return (
      <div >
        <RouterLink
          className={(navigationData) =>
            navigationData.isActive ? 
            `text-white bg-primary-900 rounded-md flex transition-colors bg-opacity-40 hover:bg-opacity-60 ${!!className && className}` : 
            `text-default-400  flex rounded-md transition-colors hover:bg-default-900 hover:bg-opacity-40 ${!!className && className}`
          }
          to={path}
        >
          <div className="flex flex-row text-xs items-center gap-5 px-6 py-3">
            <span className="text-xl flex items-center">
            {icon}
            </span>
            {children}
          </div>
        </RouterLink>
      </div>
  );
}
