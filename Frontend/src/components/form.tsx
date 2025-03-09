import React from 'react';

type FormProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
};

const Form: React.FC<FormProps> = ({ children, onSubmit, className }) => {
  return (
    <form onSubmit={onSubmit} className={`"w-100 border-white ${className}`}>
      {children}
    </form>
  );
};

export default Form;
