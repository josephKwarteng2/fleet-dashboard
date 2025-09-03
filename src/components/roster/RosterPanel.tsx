import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { drivers } from "@/data/drivers";
import { trucks } from "@/data/trucks";
import { vans } from "@/data/vans";
import RosterItem from "./RosterItem";
import SectionHeading from "./SectionHeading";
import { Menu, Search, X } from "lucide-react";

export default function RosterPanel() {
  const [showFavorites, setShowFavorites] = React.useState(true);
  const [showTrucks, setShowTrucks] = React.useState(true);
  const [showVans, setShowVans] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  type RosterItemType = {
    id: string | number;
    name: string;
    vehicle: string;
    status?: string;
  };

  const filteredData = (data: RosterItemType[]) => {
    if (!searchQuery) return data;
    return data.filter(
      (item: RosterItemType) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.vehicle.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed top-2 left-2 z-50 p-2 bg-white border border-gray-300 rounded-lg shadow-lg
          lg:hidden hover:bg-gray-50 active:bg-gray-100 transition-colors
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        "
        aria-label={isOpen ? "Close roster panel" : "Open roster panel"}
        style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
      >
        <Menu className="w-6 h-6" />
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black z-40 lg:hidden"
          style={{ opacity: 0.15 }}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40 lg:z-auto
          transition-all duration-300 ease-in-out flex flex-col bg-white border-r border-gray-200 
          h-full max-h-screen
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          w-80 sm:w-96 lg:w-80 xl:w-96 2xl:w-[28rem] 
          min-w-[280px] max-w-full
        `}
        aria-label="Roster Panel"
      >
        <div className="p-3 sm:p-4 lg:p-4 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center gap-3 mb-3 lg:hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <Input
              placeholder="Search drivers & vehicles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="
              pl-10 pr-4 py-2.5
              border border-gray-200 rounded-lg 
              focus:ring-2 focus:ring-blue-500 focus:border-transparent 
              text-sm lg:text-base
              placeholder:text-sm lg:placeholder:text-base
            "
            />
          </div>
        </div>

        <div className="flex-1 overflow-hidden min-h-0">
          <ScrollArea className="h-full">
            <div className="px-3 sm:px-4 space-y-4 sm:space-y-5 py-4">
              <div>
                <SectionHeading
                  title="⭐ FAVORITES"
                  expanded={showFavorites}
                  onToggle={() => setShowFavorites((v) => !v)}
                />
                <div
                  className={`space-y-1 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    showFavorites
                      ? "max-h-[500px] opacity-100 py-2"
                      : "max-h-0 opacity-0 py-0"
                  }`}
                  style={{
                    maxHeight: showFavorites ? "500px" : "0px",
                    opacity: showFavorites ? 1 : 0,
                    paddingTop: showFavorites ? "0.5rem" : "0rem",
                    paddingBottom: showFavorites ? "0.5rem" : "0rem",
                  }}
                >
                  {showFavorites &&
                    filteredData(drivers).map((driver) => (
                      <RosterItem
                        key={driver.id}
                        item={{
                          ...driver,
                          id: String(driver.id),
                          status: driver.status ?? "active",
                        }}
                        onClick={() => setIsOpen(false)}
                      />
                    ))}
                  {showFavorites &&
                    filteredData(drivers).length === 0 &&
                    searchQuery && (
                      <p className="text-sm text-gray-500 px-3 py-4 text-center">
                        No favorite drivers match your search
                      </p>
                    )}
                </div>
              </div>

              <div>
                <SectionHeading
                  title={`TRUCKS (${filteredData(trucks).length})`}
                  expanded={showTrucks}
                  onToggle={() => setShowTrucks((v) => !v)}
                />
                <div
                  className={`space-y-1 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    showTrucks
                      ? "max-h-[500px] opacity-100 py-2"
                      : "max-h-0 opacity-0 py-0"
                  }`}
                  style={{
                    maxHeight: showTrucks ? "500px" : "0px",
                    opacity: showTrucks ? 1 : 0,
                    paddingTop: showTrucks ? "0.5rem" : "0rem",
                    paddingBottom: showTrucks ? "0.5rem" : "0rem",
                  }}
                >
                  {showTrucks &&
                    filteredData(trucks).map((truck) => (
                      <RosterItem
                        key={truck.id}
                        item={{
                          ...truck,
                          id: String(truck.id),
                          status: truck.status ?? "active",
                        }}
                        onClick={() => setIsOpen(false)}
                      />
                    ))}
                  {showTrucks &&
                    filteredData(trucks).length === 0 &&
                    searchQuery && (
                      <p className="text-sm text-gray-500 px-3 py-4 text-center">
                        No trucks match your search
                      </p>
                    )}
                </div>
              </div>

              <div>
                <SectionHeading
                  title={`VANS (${filteredData(vans).length})`}
                  expanded={showVans}
                  onToggle={() => setShowVans((v) => !v)}
                />
                <div
                  className={`space-y-1 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    showVans
                      ? "max-h-[500px] opacity-100 py-2"
                      : "max-h-0 opacity-0 py-0"
                  }`}
                  style={{
                    maxHeight: showVans ? "500px" : "0px",
                    opacity: showVans ? 1 : 0,
                    paddingTop: showVans ? "0.5rem" : "0rem",
                    paddingBottom: showVans ? "0.5rem" : "0rem",
                  }}
                >
                  {showVans &&
                    filteredData(vans).map((van) => (
                      <RosterItem
                        key={van.id}
                        item={{
                          ...van,
                          id: String(van.id),
                          status: van.status ?? "active",
                        }}
                        onClick={() => setIsOpen(false)}
                      />
                    ))}
                  {showVans &&
                    filteredData(vans).length === 0 &&
                    searchQuery && (
                      <p className="text-sm text-gray-500 px-3 py-4 text-center">
                        No vans match your search
                      </p>
                    )}
                </div>
              </div>

              {searchQuery &&
                filteredData(drivers).length === 0 &&
                filteredData(trucks).length === 0 &&
                filteredData(vans).length === 0 && (
                  <div className="text-center py-8 px-4">
                    <Search className="w-8 h-8 sm:w-12 sm:h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-sm sm:text-base text-gray-500 mb-1">
                      No results found
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 italic">
                      Try different keywords or check your spelling.
                    </p>
                  </div>
                )}
            </div>
          </ScrollArea>
        </div>

        <div className="p-3 sm:p-4 border-t border-gray-100 flex-shrink-0">
          <Button
            className="
            w-full bg-black text-white hover:bg-gray-800 active:bg-gray-900
            py-3 px-4 rounded-lg text-sm font-medium 
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
          "
            onClick={() => setIsOpen(false)}
          >
            ⊕ Add New Vehicle
          </Button>
        </div>
      </aside>
    </>
  );
}
