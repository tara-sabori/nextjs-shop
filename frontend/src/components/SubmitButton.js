import React from "react";

const SubmitButton = ({ children, disabled }) => {
  return (
    <button
      type="submit"
      className="text-white w-full p-1.5 mt-2 rounded-lg bgGradient disabled:from-secondary-400 disabled:to-secondary-800 cursor-pointer disabled:cursor-not-allowed text-sm"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
