import InfoCard from "@/components/InfoCard";
import { useAuth } from "@/context/AuthContext";
import { PiBasket, PiHeart, PiPhone, PiVoicemail } from "react-icons/pi";

const UserStatus = () => {
  const { user ,payments} = useAuth();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      <InfoCard
        icon={<PiPhone />}
        title={"شماره همراه"}
        value={user?.phoneNumber}
        className={"bg-primary-100 border-r-8 border-primary-800"}
      />
      <InfoCard
        icon={<PiVoicemail />}
        title={"ایمیل"}
        value={user?.email}
        className={"bg-pink-100 border-r-8 border-pink-600"}
      />
      <InfoCard
        icon={<PiBasket />}
        title={"تعداد سفارشات "}
        value={payments?.length}
        className={"bg-purple-100 border-r-8 border-purple-800"}
      />
      <InfoCard
        icon={<PiHeart />}
        title={"محصولات موردعلاقه شما"}
        value={user?.likedProducts?.length}
        className={"bg-red-50 border-r-8 border-red-600"}
      />
    </div>
  );
};

export default UserStatus;
