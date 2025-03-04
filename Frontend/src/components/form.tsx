import React from 'react';

type FormProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="w-100 p-4 border-white">
      {children}
    </form>
  );
};

export default Form;
