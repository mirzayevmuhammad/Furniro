import React, { useEffect, useState } from "react";

interface InputProps {
  label: string;
  name?: string;
  inputClassName?: string;
  placeholder?: string;
  type?: string;
  isTextarea?: boolean;
  maxLength?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  inputClassName = "",
  placeholder = "",
  type = "text",
  isTextarea = false,
  maxLength,
  value,
  onChange,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(value?.length ?? 0);
  }, [value]);

  const isOverLimit = typeof maxLength === "number" && count >= maxLength;

  return (
    <div className="flex flex-col gap-y-2 relative">
      <label htmlFor={name} className="text-[17px] font-medium">
        {label}
      </label>

      <div className="relative">
        {isTextarea ? (
          <>
            <textarea
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              maxLength={maxLength}
              className={`placeholder:text-[17px] w-full sm:w-[530px] outline-0 placeholder:text-[#9F9F9F] border-2 rounded-[17px] py-[22px] px-[31px] resize-none h-[120px] ${
                isOverLimit ? "border-red-500" : "border-[#9F9F9F]"
              } ${inputClassName}`}
            />
            {typeof maxLength === "number" && (
              <span
                className={`absolute bottom-3 left-5 text-[15px] ${
                  isOverLimit ? "text-red-500" : "text-[#9F9F9F]"
                }`}
              >
                {count}/{maxLength}
              </span>
            )}
          </>
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            maxLength={maxLength}
            className={`placeholder:text-[17px] sm:w-[530px] w-full outline-0 placeholder:text-[#9F9F9F] border-2 rounded-[17px] py-[22px] px-[31px] border-[#9F9F9F] ${inputClassName}`}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
