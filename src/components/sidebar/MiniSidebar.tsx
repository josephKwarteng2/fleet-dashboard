import { Grid3X3, Image, Truck, MessageSquare, Bell } from "lucide-react";
import SidebarIcon from "./SidebarIcon";

export default function MiniSidebar() {
  return (
    <aside className="hidden lg:flex w-12 xl:w-14 2xl:w-16 shrink-0 flex-col items-center gap-2 bg-black h-[100vh] overflow-y-auto">
      <div className="flex flex-col gap-2 mt-3 w-full">
        <SidebarIcon icon={Grid3X3} />
        <SidebarIcon icon={Image} />
        <SidebarIcon icon={Truck} active />
        <SidebarIcon icon={MessageSquare} />
        <SidebarIcon icon={MessageSquare} />

        <div className="w-6 mx-auto my-2 h-px bg-gray-700" />

        <SidebarIcon icon={Bell} />
        <SidebarIcon icon={Truck} />
        <SidebarIcon icon={Image} />
      </div>
    </aside>
  );
}
