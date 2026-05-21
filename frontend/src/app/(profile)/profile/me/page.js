"use client";
import { useAuth } from "@/context/AuthContext";
import React from "react";
import ProfileMeForm from "./ProfileMeForm";

const ProfileMePage = () => {
  const { user ,isLoading} = useAuth();
  
  return (
      isLoading?<p>loading ...</p>:<ProfileMeForm user={user} />
  );
};

export default ProfileMePage;
