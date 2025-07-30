import React from 'react'
import Sidebar from './_components/Sidebar'

const HomeLayout = ({children}) => {
  return (
    <div className='h-full w-64 flex flex-col fixed inset-y-0 z-50'>
      <Sidebar />
      {children}
      </div>
  )
}

export default HomeLayout