import React from 'react';

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  size: 'text-sm' | 'text-xl' | 'text-4xl';
};

const Typography: React.FC<TypographyProps> = ({ children, className, size }) => {
  return <p className={`text-white ${className} ${size}`}>{children}</p>;
};

export default Typography;
