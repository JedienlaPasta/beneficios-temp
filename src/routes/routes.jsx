// import campañas from '../assets/campañas-icon.png'
import { MdOutlineCampaign } from "react-icons/md";

export const homeChildrenRoutes = [
    {
        path: 'campañas',
        navItemName: 'Campañas',
        icon: <MdOutlineCampaign />,
        element: '',
    },
    {
        path: 'entregas',
        navItemName: 'Entregas',
        icon: <MdOutlineCampaign />,
        element: <p className='text-black/90'>Entregas</p>,
    },
    {
        path: 'rsh',
        navItemName: 'RSH',
        icon: <MdOutlineCampaign />,
        element: '',
    },
    {
        path: 'folios',
        navItemName: 'Folios',
        icon: <MdOutlineCampaign />,
        element: '',
    },
    {
        path: 'transacciones',
        navItemName: 'Transacciones',
        icon: <MdOutlineCampaign />,
        element: '',
    },
]