"use client";
import ProfileMeForm from "@/components/ProfileMeForm";
import { useAuth } from "@/context/AuthContext";

const AdminProfilePage = () => {
  const { user, isLoading } = useAuth();
  return isLoading ? <p>loading ...</p> : <ProfileMeForm user={user} />;
};

export default AdminProfilePage;
