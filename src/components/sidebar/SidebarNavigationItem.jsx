import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

export default function SidebarNavigationItem({ item }) {
    const route = item.path
    const baseStyle = 'flex items-center gap-[0.375rem] px-2 py-2 rounded-md '
    const itemStyle = {
        active: baseStyle + 'bg-gray-500/30 text-black/90 font-bold',
        default: baseStyle + 'text-black/70'
    }

    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <NavLink
            to={route}
            onClick={handleClick}
            className={({ isActive }) => 
                isActive
                    ? itemStyle.active
                    : itemStyle.default
            }
        >
            {/* <img src={item.icon} alt={item.icon} className='h-5 opacity-70' /> */}
            <span className='text-2xl'>{item.icon}</span>
            <p className='text-sm'>{item.navItemName}</p>
        </NavLink>
    )
}

SidebarNavigationItem.propTypes = {
    item: PropTypes.string.isRequired,
}
