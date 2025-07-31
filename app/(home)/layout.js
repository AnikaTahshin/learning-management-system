import React from 'react'
import Sidebar from './_components/Sidebar'
import Header from './_components/Header'

const HomeLayout = ({children}) => {
  return (
    <div>
      <div className='h-full w-64 flex flex-col fixed inset-y-0 z-50'>
      <Sidebar />
      </div>
      <Header />
      {children}
      
    </div>
  )
}

export default HomeLayout