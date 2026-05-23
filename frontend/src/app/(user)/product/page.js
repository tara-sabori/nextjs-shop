import React from 'react'
import CategorySideBar from './_components/category/CategorySideBar'

const CoursePage = () => {
  return (
    <div className='container'>
        <div className='flex gap-4'>
            {/* side bar */}
            <div className='flex-1'>
                <CategorySideBar />
            </div>
            {/* course cards */}
            <div className='flex-4 bg-amber-300'>ss</div>
        </div>
    </div>
  )
}

export default CoursePage