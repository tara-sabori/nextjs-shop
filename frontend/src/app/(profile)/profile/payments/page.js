"use client"
import React from 'react'
import PaymentsTabel from '../_components/PaymentsTabel'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

const PaymentsPage = () => {
  const { payments } = useAuth();
  return (
    <div className="p-5 lg:pt-8 lg:w-[80%] space-y-5 lg:space-y-8">
      <h3 className="text-base font-semibold lg:text-lg">
        <span className="mygradient">سفارشات</span>
      </h3>
        <PaymentsTabel payments={payments} />
    </div>
  )
}

export default PaymentsPage