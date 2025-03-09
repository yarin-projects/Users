import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`max-w-4xl mx-auto min-h-screen p-4 ${className}`}>{children}</div>;
};

export default Container;
