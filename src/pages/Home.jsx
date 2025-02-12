import { Outlet } from 'react-router'
import Sidebar from '../layouts/Sidebar'

export default function Home() {
    return (
      <div className='overflow-hidden'>
        <Sidebar />
        <div className='relative ml-64'>         
          <Outlet />
        </div>
      </div>
  )
}
