import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'black';
  fullWidth?: boolean;
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  withArrow = false,
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 text-base";
  
  const variants = {
    primary: "bg-black text-white hover:bg-zinc-800 shadow-xl shadow-black/10 border border-transparent",
    black: "bg-black text-white hover:bg-gray-900 border border-black",
    secondary: "bg-gray-100 text-black hover:bg-gray-200 border border-transparent",
    outline: "bg-transparent border border-black text-black hover:bg-black hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="w-4 h-4" />}
    </button>
  );
};