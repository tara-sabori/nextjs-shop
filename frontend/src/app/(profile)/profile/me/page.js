"use client";
import MyLoading from "@/components/MyLoading";
import ProfileMeForm from "@/components/ProfileMeForm";
import { useAuth } from "@/context/AuthContext";

const ProfileMePage = () => {
  const { user, isLoading } = useAuth();

  return isLoading ? <MyLoading /> : <ProfileMeForm user={user} />;
};

export default ProfileMePage;
