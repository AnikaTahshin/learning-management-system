'use client'
import { Layout, Mail, Search, Shield } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const menuList = [
        {
            id:1,
            name:'Browse',
            icon:Search,
            path:'/browse'
        },
        {
            id:1,
            name:'Dashboard',
            icon:Layout,
            path:'/dashboard'
        },{
            id:2,
            name:'Upgrade',
            icon:Shield,
            path:'/upgrade'
        },{
            id:3,
            name:'Newsletter',
            icon:Mail,
            path:'/newsletter'
        },{
            id:4,
            name:'Dashboard',
            icon:Layout,
            path:'/dashboard'
        },
    ]
  return (
    <div className='h-full b-white border-r flex flex-col overflow-y-auto shadow-md'>
        <div className='mx-auto'>
        <Image src='/logo.png' alt='logo' width={170} height={50} />

        </div>
        <div className='flex flex-col'>
        {
            menuList.map((item,index) => (
                <div onClick={() => setActiveIndex(index)} key={item.id} className={`flex items-center gap-2 p-4 px-6 text-gray-500 hover:bg-gray-100 cursor-pointer ${activeIndex == index ? 'bg-purple-50 text-purple-800' : null }`}>
                    <item.icon className='w-5 h-5' />
                    <span className='text-sm'>{item.name}</span>
                </div>
            ))  
        }
        </div>
    </div>
  )
}

export default Sidebar