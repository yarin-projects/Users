import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'submit' | 'button';
};

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button' }) => {
  return (
    <button className="bg-blue-500 text-white p-2 rounded w-full" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
