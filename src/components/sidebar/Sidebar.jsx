import SidebarNavigation from "./SidebarNavigation";
import User from "./User";

export default function Sidebar() {
    return (
        <div className="fixed flex flex-col text-black bg-white w-68 h-dvh">
            <User />
            <SidebarNavigation />
        </div>
    )
}