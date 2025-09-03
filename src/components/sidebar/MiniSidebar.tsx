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
    <aside className="hidden lg:flex w-16 xl:w-20 2xl:w-24 shrink-0 flex-col items-center gap-4 bg-black p-2 xl:p-4 h-[100vh] overflow-y-auto">
      <div className="mt-0 flex size-8 items-center justify-center rounded-lg bg-white">
        <Grid3X3 className="size-4 text-black" />
      </div>

      <div className="flex flex-col gap-4 mt-4">
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
