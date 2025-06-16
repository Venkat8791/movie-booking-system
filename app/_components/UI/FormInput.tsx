import { Eye, EyeOff } from "lucide-react";
import React from "react";

type FormInputProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
};
const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  label,
  type,
  value,
  disabled,
  onChange,
  showPassword,
  setShowPassword,
}) => {
  return (
    <div className={`mb-1 ${id === "password" ? "relative" : ""}`}>
      <label className="block text-gray-700 mb-1">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={`Enter ${label}`}
        className="w-full px-4 py-2 border rounded-md bg-gray-100"
      />
      {id === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword?.((prev) => !prev)}
          className="absolute right-2 top-1/2 transform  text-gray-500"
        >
          {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      )}
    </div>
  );
};

export default FormInput;
