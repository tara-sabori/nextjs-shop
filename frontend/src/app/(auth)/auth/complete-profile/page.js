"use client"
import SubmitButton from '@/components/SubmitButton'
import React from 'react'

const CompleteProfilePage = () => {
  return (
    <div className='w-[80%] md:w-100 border border-secondary-300 py-8 px-4 rounded-md mx-auto mt-10 relative'>
        <div className='absolute -top-3 w-fit bg-background'>
            <h3 className='text-base mygradient'>تکمیل اطلاعات</h3>
        </div>
        <form className='space-y-2'>
            <SubmitButton>
                ثبت
            </SubmitButton>
        </form>
    </div>
  )
}

export default CompleteProfilePage