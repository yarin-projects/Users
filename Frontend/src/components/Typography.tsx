import React from 'react';

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({ children, className }) => {
  return <p className={`text-white ${className}`}>{children}</p>;
};

export default Typography;
