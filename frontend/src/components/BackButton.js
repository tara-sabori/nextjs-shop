"use client"
import { useRouter } from "next/navigation";
import { PiArrowLeftBold } from "react-icons/pi";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="flex justify-end container">
      <button
        onClick={() => router.back()}
        className="text-lg text-secondary-700 cursor-pointer"
      >
        <PiArrowLeftBold />
      </button>
    </div>
  );
};

export default BackButton;
