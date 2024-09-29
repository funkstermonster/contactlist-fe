import { TextFieldProps } from "@/app/models/TextFieldProps";
import React from "react";

export default function TextField({label, placeholder, name, value, onChange}: TextFieldProps) {
  return (
    <>
      <div className="flex flex-col gap-[4px]">
        <label className="message w-[390px] h-[16px] opacity-56">{label}</label>
        <input
          className="focus:outline-none w-full h-10 rounded-lg border-[1px] border-grey-60 py-[8px] px-[12px] bg-grey-80 hover:border-grey-30 hover:bg-grey-80 focus:bg-grey-60 focus:border-grey-10 focus:opacity-100 text-white placeholder:opacity-32"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      </div>
    </>
  );
}
