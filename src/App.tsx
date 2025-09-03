import { TooltipProvider } from "./components/ui/tooltip";
import MiniSidebar from "./components/sidebar/MiniSidebar";
import RosterPanel from "./components/roster/RosterPanel";
import VehicleSpecCard from "./components/vehicle/VehicleHero";
import RoutesPanel from "./components/routes/RoutesPanel";
import DriverStatistics from "./components/stats/DriverStatistics";

export default function App() {
  return (
    <TooltipProvider>
      <div className="flex h-screen w-screen bg-gray-50">
        <div className="flex flex-col lg:flex-row h-full">
          <MiniSidebar />
          <RosterPanel />
        </div>

        <div className="flex-1 flex flex-col h-screen overflow-y-auto">
          <div className="flex-shrink-0">
            <VehicleSpecCard />
          </div>

          <div className="flex flex-col lg:flex-row w-full">
            <div className="flex-1">
              <RoutesPanel />
            </div>
            <div className="flex-1">
              <DriverStatistics />
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
