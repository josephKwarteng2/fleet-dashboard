import { Clock3, MapPin, Package } from "lucide-react";

type StatusPillProps = {
  status: string;
};

const StatusPill = ({ status }: StatusPillProps) => (
  <span className="px-4 py-1 bg-green-100 text-green-800 text-sm rounded-full font-semibold whitespace-nowrap flex items-center justify-center">
    {status}
  </span>
);

export default function RoutesPanel() {
  return (
    <div className="w-full h-full flex flex-col min-h-0 divide-y divide-gray-200">
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 flex-wrap gap-2 flex-shrink-0">
        <h2 className="font-semibold text-base sm:text-lg md:text-xl">
          Routes
        </h2>
        <button className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 transition-colors">
          History
        </button>
      </div>

      <div className="px-3 sm:px-4 md:px-6 py-4">
        <div className="font-medium text-xs sm:text-sm text-gray-700 mb-3 uppercase tracking-wide">
          Now on the way
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="font-semibold text-sm sm:text-base md:text-lg">
            ID: 107-591 · 138 packages
          </div>
          <StatusPill status="On the way" />
        </div>

        <div className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4">
          2972 Westheimer Rd, Santa Ana → 270 Rucker Ave
        </div>

        <div className="w-full aspect-video max-h-32 sm:max-h-40 md:max-h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-xs sm:text-sm text-gray-400">
            [Map Preview]
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 min-w-0">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-gray-500" />
            <span className="truncate">0.62 mi</span>
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <Clock3 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-gray-500" />
            <span className="truncate">10 min</span>
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <Package className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-gray-500" />
            <span className="truncate">2,160 lbs</span>
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <Package className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-gray-500" />
            <span className="truncate">3,357 in³</span>
          </div>
        </div>
      </div>

      <div className="px-3 sm:px-4 md:px-6 py-4 space-y-3">
        <div className="font-medium text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-wide">
          12/10/22
        </div>
        {[
          {
            id: "170-270",
            packages: 107,
            address: "8900 Murray Ave → 168 W 10th St, Gilroy, CA 95020",
          },
          {
            id: "112-791",
            packages: 86,
            address:
              "230 Mayock Rd → 2825 Arroyo Cir Suite 21, Gilroy, CA 95020",
          },
          {
            id: "128-612",
            packages: 129,
            address: "—",
          },
        ].map((route, i) => (
          <div key={i} className="pb-3 border-b last:border-0">
            <div className="font-semibold text-xs sm:text-sm md:text-base mb-1">
              ID: {route.id} · {route.packages} packages
            </div>
            <div className="text-xs sm:text-sm text-gray-600 leading-relaxed break-words">
              {route.address}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
