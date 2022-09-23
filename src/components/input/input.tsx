import React, { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { label, id, type, ...rest } = props;

  return (
    <div className="text-left text-primary">
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        type={type}
        {...rest}
        className={clsx(
          type !== "file" &&
            "rounded-md border-secondary border-2 focus:border-primary-purple-light focus:ring-primary-purple-light pl-4 ",
          "block w-full pr-12 py-1.5 text-primary"
        )}
      />
    </div>
  );
};

export default Input;
