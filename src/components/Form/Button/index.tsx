import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
  children?: ReactNode;
  asChild?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  color?: 'primary' | 'secondary' | 'default';
  variant?: 'solid' | 'border' | 'text'
}

export function Button({
  children,
  asChild,
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth,
  color = 'default',
  variant = 'solid',
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "flex items-center gap-2 justify-center rounded font-bold transition-colors ",
        {
          "py-[2px] px-2 text-[0.82rem]": size === "xs",
          "py-[5px] px-2 text-[0.85rem]": size === "sm",
          "py-[6px] px-3 text-sm": size === "md",
          "py-2 px-4 text-lg": size === "lg",
          "w-full": fullWidth,

          // VARIACAO SOLID
          "bg-primary-800 text-primary-contrast hover:bg-green-hover": color === 'primary' && variant === 'solid',
          "bg-secondary-600 hover:bg-secondary-hover text-secondary-contrast": color === 'secondary' && variant === 'solid',
          "bg-gray-700 hover:bg-gray-hover": color === 'default' && variant === 'solid'
        }
      )}
      {...props}
    >
      {leftIcon && <Slot className={clsx(
        "",
        {
          "w-[13px] h-[13px]": size === "xs" || size === "sm",
          "w-3 h-3": size === "md",
          "w-4 h-4": size === "lg",
        }
      )}>{leftIcon}</Slot>}
      {children}
      {rightIcon && <Slot className={clsx(
        "",
        {
          "w-[10px] h-[10px]": size === "xs" || size === "sm",
          "w-3 h-3": size === "md",
          "w-4 h-4": size === "lg",
        }
      )}>{rightIcon}</Slot>}
    </Component>
  );
}
