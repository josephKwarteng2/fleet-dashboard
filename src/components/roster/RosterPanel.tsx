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
          fixed top-2 left-2 z-50 p-1.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-md shadow-sm
          lg:hidden hover:bg-gray-50 active:bg-gray-100 transition-colors
          focus:outline-none
        "
        aria-label={isOpen ? "Close roster panel" : "Open roster panel"}
      >
        <Menu className="w-4 h-4" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-40 lg:hidden"
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
          w-72 sm:w-80 lg:w-72 xl:w-80
          min-w-[260px] max-w-full
        `}
        aria-label="Roster Panel"
      >
        <div className="px-2.5 py-2 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-2 mb-1.5 lg:hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="p-0.5 hover:bg-gray-100 rounded transition-colors"
              aria-label="Close panel"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
            <Input
              placeholder="Search drivers & vehicles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="
                pl-6 pr-2 py-1 h-6 text-[10px]
                border border-gray-200 rounded 
                focus:border-blue-400
                placeholder:text-[10px] placeholder:text-gray-400
              "
            />
          </div>
        </div>

        <div className="flex-1 overflow-hidden min-h-0">
          <ScrollArea className="h-full">
            <div className="px-2.5 py-2 space-y-2.5">
              <div>
                <SectionHeading
                  title="⭐ FAVORITES"
                  expanded={showFavorites}
                  onToggle={() => setShowFavorites((v) => !v)}
                />
                {showFavorites && (
                  <div className="space-y-0">
                    {filteredData(drivers).map((driver) => (
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
                    {filteredData(drivers).length === 0 && searchQuery && (
                      <p className="text-[9px] text-gray-500 py-2 text-center">
                        No favorite drivers found
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div>
                <SectionHeading
                  title={`TRUCKS (${filteredData(trucks).length})`}
                  expanded={showTrucks}
                  onToggle={() => setShowTrucks((v) => !v)}
                />
                {showTrucks && (
                  <div className="mt-1">
                    {filteredData(trucks).map((truck) => (
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
                    {filteredData(trucks).length === 0 && searchQuery && (
                      <p className="text-[9px] text-gray-500 py-2 text-center">
                        No trucks found
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div>
                <SectionHeading
                  title={`VANS (${filteredData(vans).length})`}
                  expanded={showVans}
                  onToggle={() => setShowVans((v) => !v)}
                />
                {showVans && (
                  <div className="mt-1 space-y-0">
                    {filteredData(vans).map((van) => (
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
                    {filteredData(vans).length === 0 && searchQuery && (
                      <p className="text-[9px] text-gray-500 py-2 text-center">
                        No vans found
                      </p>
                    )}
                  </div>
                )}
              </div>

              {searchQuery &&
                filteredData(drivers).length === 0 &&
                filteredData(trucks).length === 0 &&
                filteredData(vans).length === 0 && (
                  <div className="text-center py-4">
                    <Search className="w-6 h-6 text-gray-300 mx-auto mb-1" />
                    <p className="text-[10px] text-gray-500 mb-0.5">
                      No results found
                    </p>
                    <p className="text-[9px] text-gray-400">
                      Try different keywords
                    </p>
                  </div>
                )}
            </div>
          </ScrollArea>
        </div>

        <div className="px-2.5 py-2 border-t border-gray-100 flex-shrink-0">
          <Button
            className="
              w-full bg-black text-white hover:bg-black active:bg-black 
              h-7 px-2 rounded font-medium 
              transition-colors duration-150 
              focus:outline-none
            "
            style={{
              backgroundColor: "black",
              fontSize: "11px",
              borderRadius: 4,
            }}
            onClick={() => setIsOpen(false)}
          >
            ⊕ Add New Vehicle
          </Button>
        </div>
      </aside>
    </>
  );
}
