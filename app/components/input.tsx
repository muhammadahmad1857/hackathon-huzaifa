import React from "react";

const Input = ({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string | undefined;
}) => {
  return (
    <div className="space-y-4  flex flex-col items-start ">
      <label className="font-semibold text-[16px]  leading-6 tracking-tight text-text-dark">
        {label}
      </label>
      <input
        className="rounded-[10px] bg-inputBg focus:bg-text-light/20 p-4 h-14 w-96 max-md:w-full"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
