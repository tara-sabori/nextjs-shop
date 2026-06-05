"use client";
import React, { useState } from "react";
import styles from "./auth.module.css";
import GetOtp from "./GetOtp";
import { CheckOtp } from "./CheckOtp";
const AuthPage = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otpMessage, setOtpMessage] = useState("");
  return (
    <div className="h-dvh overflow-hidden flex items-center justify-center relative">
      <div className={styles.right}></div>
      <div className="w-[80%] sm:w-100 bg-secondary-50/80 backdrop-blur-md  border border-secondary-300 rounded-lg p-4 absolute">
        {step === 1 ? (
          <GetOtp
            setStep={setStep}
            phone={phone}
            setPhone={setPhone}
            setOtpMessage={setOtpMessage}
          />
        ) : (
          <CheckOtp
            setStep={setStep}
            phone={phone}
            setOtpMessage={setOtpMessage}
            otpMessage={otpMessage}
          />
        )}
      </div>
      <div className={styles.left}></div>
    </div>
  );
};

export default AuthPage;
