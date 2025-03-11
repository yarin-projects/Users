import React from 'react';

type colorOptions = 'blue' | 'red';
type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'submit' | 'button';
  color?: colorOptions;
};

const colorClasses: Record<colorOptions, string> = {
  blue: 'bg-blue-500',
  red: 'bg-red-500',
};

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button', color = 'blue' }) => {
  return (
    <button
      className={`${colorClasses[color]} text-white p-2 rounded w-full cursor-pointer`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
