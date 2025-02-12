import SidebarNavigation from "../components/sidebar/SidebarNavigation";
import User from "../components/sidebar/User";

export default function Sidebar() {
    return (
        <div className="fixed flex flex-col w-64 text-black bg-white border-r h-dvh border-slate-900/15">
            <User />
            <SidebarNavigation />
        </div>
    )
}