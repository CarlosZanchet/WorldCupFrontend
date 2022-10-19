import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  
}

export function Input({...rest}: InputProps) {
  return (
    <input className="ring-2 ring-gray-300 focus:ring-primary-800 outline-none rounded p-[5px]" type="text" {...rest} />
  )
}