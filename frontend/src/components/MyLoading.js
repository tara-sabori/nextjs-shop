import React from 'react'
import { PropagateLoader } from 'react-spinners'

const MyLoading = () => {
  return (
    <div className='h-[50vh] flex items-center justify-center'>
        <PropagateLoader color={"#4a6dff"} />
    </div>
  )
}

export default MyLoading