import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

export default function SidebarNavigationItem({ item }) {
    const route = item.path
    const baseStyle = 'flex items-center gap-2 px-2 py-2 rounded-md border '
    const itemStyle = {
        active: baseStyle + 'border-sky-500 text-sky-500 font-bold',
        default: baseStyle + 'border-blue-500/0 text-slate-900/80'
    }

    const handleClick = () => {
        console.log(route)
    }

    return (
        <li key={item.path}>
            <NavLink
                to={route}
                end
                onClick={handleClick}
                className={({ isActive }) => 
                    isActive
                        ? itemStyle.active
                        : itemStyle.default
                }
            >
                <span className='text-[1.4rem]'>{item.icon}</span>
                <p className='text-sm'>{item.navItemName}</p>
            </NavLink>
        </li>
    )
}

SidebarNavigationItem.propTypes = {
    item: PropTypes.object.isRequired,
}
