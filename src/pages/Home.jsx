import { Outlet } from 'react-router'
import Sidebar from '../components/sidebar/Sidebar'

export default function Home() {
  return (
    <>
        <Sidebar />
        <div className='relative left-68'>
            <Outlet />
        </div>
    </>
  )
}
