import React from "react";

const SubmitButton = ({ children, disabled }) => {
  return (
    <button
      type="submit"
      className="text-white w-full p-1.5 mt-2 rounded-lg bg-linear-to-l from-primary-900 to-blue-950 disabled:bg-secondary-500 cursor-pointer disabled:cursor-not-allowed text-sm"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
