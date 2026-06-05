import { useAuth } from "@/context/AuthContext";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useLogOut() {
  const { dispatch } = useAuth();
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      const res = await api.post("/user/logout");
      router.push("/auth");
      dispatch({ type: "logout" });
      toast.success("باموفقیت خارج شدید.");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است.");
    }
  };
  return { logoutHandler };
}
