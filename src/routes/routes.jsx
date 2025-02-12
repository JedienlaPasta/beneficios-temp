// import campañas from '../assets/campañas-icon.png'
import { RiDashboardFill } from "react-icons/ri";
import { FaBoxesStacked } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { FaFileExcel } from "react-icons/fa6";
import DashboardLayout from "../layouts/DashboardLayout";

export const homeChildrenRoutes = [
    {
        path: '/',
        navItemName: 'General',
        icon: <RiDashboardFill />,
        element: <DashboardLayout />,
    },
    {
        path: 'campañas',
        navItemName: 'Campañas',
        icon: <FaBoxesStacked />,
        element: '',
    },
    {
        path: 'entregas',
        navItemName: 'Entregas',
        icon: <FaBoxOpen />,
        element: <p className='text-black/90'>Entregas</p>,
    },
    {
        path: 'rsh',
        navItemName: 'RSH',
        icon: <FaHouseChimney />,
        element: '',
    },
    {
        path: 'transacciones',
        navItemName: 'Transacciones',
        icon: <FaFileExcel />,
        element: '',
    },
]