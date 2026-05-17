"use client"
import { useAuth } from '@/context/AuthContext'
import React from 'react'

const ProfilePage = () => {
const {user}=useAuth();
console.log(user);
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage