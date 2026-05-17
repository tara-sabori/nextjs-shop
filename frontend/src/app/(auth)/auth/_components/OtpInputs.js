import { useEffect, useRef } from "react";

const OtpInputs = ({ otp, setOtp }) => {
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length == 1) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key == "Backspace") {
      if (otp[index] == "" && index > 0) {
        const updatedOtp = [...otp];
        updatedOtp[index - 1] = "";
        setOtp(updatedOtp);

        inputRefs.current[index - 1].focus();
      } else {
        const updatedOtp = [...otp];
        updatedOtp[index] = "";
        setOtp(updatedOtp);
      }
    }
  };
  return (
    <div className="flex justify-between flex-row-reverse">
      {Array.from({ length: 6 }).map((_, index) => (
        <input
          key={index}
          type="text"
          className="border border-secondary-500 rounded-md w-10 h-10 text-center focus:border-2 outline-none"
          inputMode="numeric"
          maxLength={1}
          ref={(el) => (inputRefs.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
          value={otp[index]}
        />
      ))}
    </div>
  );
};

export default OtpInputs;
