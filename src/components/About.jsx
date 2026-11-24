import { useState, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const About = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log('안녕');
    console.log(count)
  })

  const tabs = [
    { to: '/about', label: '회사소개', end: true },
    { to: '/about/member', label: 'Member' },
    { to: '/about/location', label: 'Location' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 w-full">
      <h4 className="text-2xl font-bold text-gray-900 mb-6">회사정보임</h4>

      <div className="flex space-x-2 border-b border-gray-200 mb-6">
        {
          tabs.map((tab, i) =>
            <NavLink
              key={i}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                isActive
                  ? 'px-4 py-2 -mb-px border-b-2 border-red-600 text-red-600 font-semibold'
                  : 'px-4 py-2 -mb-px border-b-2 border-transparent text-gray-500 hover:text-gray-900 transition-colors'
              }
            >
              {tab.label}
            </NavLink>
          )
        }
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 text-gray-700">
        <Outlet></Outlet>
      </div>

      <button
        className="mt-6 border border-gray-500 text-gray-600 hover:bg-gray-500 hover:text-white font-medium text-sm px-4 py-2 rounded transition-colors cursor-pointer"
        onClick={()=>{ setCount(count + 1) }}
      >
        버튼
      </button>
    </div>
  )
}

export default About
