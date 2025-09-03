import {
  Grid3X3,
  Users,
  Truck,
  Home,
  MessageSquare,
  BarChart3,
  Settings,
} from "lucide-react";
import SidebarIcon from "./SidebarIcon";

export default function MiniSidebar() {
  return (
    <aside className="hidden lg:flex w-12 xl:w-14 2xl:w-16 shrink-0 flex-col items-center gap-2 bg-black p-1.5 xl:p-2 h-[100vh] overflow-y-auto">
      <div className="mt-0 flex size-6 items-center justify-center rounded-md bg-white">
        <Grid3X3 className="size-3 text-black" />
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <SidebarIcon icon={Users} />
        <SidebarIcon icon={Truck} active />
        <SidebarIcon icon={Home} />
        <SidebarIcon icon={MessageSquare} />
        <SidebarIcon icon={BarChart3} />
      </div>

      <div className="mt-auto">
        <SidebarIcon icon={Settings} />
      </div>
    </aside>
  );
}
