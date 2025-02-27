import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input: React.FC<InputProps> = ({ error, ...props }) => {
  return (
    <div className="p-4">
      <input className={`border p-2 w-full rounded ${error ? 'border-red-400' : ''}`} {...props} />
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
