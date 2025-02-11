import SidebarNavigationItem from './SidebarNavigationItem'
import { homeChildrenRoutes } from '../../routes/routes'

export default function SidebarNavigation() {

    const displayNavigationItems = homeChildrenRoutes.map((item, index) => <SidebarNavigationItem key={index} item={item} />)

    return (
        <section className='m-4'>
            <h2 className='text-xs text-black/50'>GESTIONAR</h2>
            <ul className='flex flex-col gap-3 p-2'>{displayNavigationItems}</ul>
        </section>
    )
}