const MapPreview = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 300 150"
    className="rounded-md"
    preserveAspectRatio="none"
  >
    <rect width="100%" height="100%" fill="#f0f5ff" />

    <path
      d="M50,75 L250,75"
      stroke="#a4b8e1"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M150,30 L150,120"
      stroke="#a4b8e1"
      strokeWidth="6"
      strokeLinecap="round"
    />

    <path
      d="M80,40 L80,110"
      stroke="#c0cff0"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M200,50 L200,100"
      stroke="#c0cff0"
      strokeWidth="4"
      strokeLinecap="round"
    />

    <circle cx="70" cy="75" r="10" fill="#4c6ef5" />
    <circle cx="70" cy="75" r="6" fill="white" />
    <circle cx="230" cy="75" r="10" fill="#fa5252" />
    <circle cx="230" cy="75" r="6" fill="white" />

    <path
      d="M70,75 C120,60 180,90 230,75"
      stroke="#4c6ef5"
      strokeWidth="3"
      strokeDasharray="5,3"
      fill="none"
    />

    <g transform="translate(180, 80)">
      <rect x="-8" y="-5" width="16" height="10" rx="2" fill="#495057" />
      <circle cx="-4" cy="8" r="3" fill="#868e96" />
      <circle cx="4" cy="8" r="3" fill="#868e96" />
      <rect x="-6" y="-3" width="12" height="4" fill="#e9ecef" />
    </g>
  </svg>
);

export default function RoutesPanel() {
  return (
    <div className="w-full h-full flex flex-col min-h-0 p-4">
      <div className="flex items-center justify-between px-3 py-2 flex-shrink-0">
        <h2 className="font-semibold text-sm">Routes</h2>
        <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
          History
        </button>
      </div>

      <div className="px-3 py-3">
        <div className="flex items-center mb-5 w-full">
          <span className="font-semibold uppercase text-xs text-gray-600 uppercase tracking-wide">
            now on the way
          </span>
          <span className="flex-1 h-px bg-gray-200 ml-2" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div className="font-bold text-sm">ID: 107-591 - 138 packages</div>
        </div>

        <div className="text-xs text-gray-600 leading-relaxed mb-3">
          2972 Westheimer Rd, Santa Ana → 270 Rucker Ave
        </div>

        <div className="w-full aspect-video max-h-32 bg-gray-100 rounded-md mb-4 overflow-hidden">
          <MapPreview />
        </div>

        <div className="grid grid-cols-4 gap-4 text-xs mb-3">
          <div className="text-center space-y-1">
            <div className="text-[11px] text-gray-500 tracking-wide">
              Distance
            </div>
            <div className="font-semibold text-gray-800">0.62 mi</div>
          </div>
          <div className="text-center space-y-1">
            <div className="text-[11px] text-gray-500 tracking-wide">
              Time Left
            </div>
            <div className="font-semibold text-gray-800">10 min</div>
          </div>
          <div className="text-center space-y-1">
            <div className="text-[11px] text-gray-500 tracking-wide">
              Weight
            </div>
            <div className="font-semibold text-gray-800">2,160 lbs</div>
          </div>
          <div className="text-center space-y-1">
            <div className="text-[11px] text-gray-500 tracking-wide">
              Volume
            </div>
            <div className="font-semibold text-gray-800">3,357 in³</div>
          </div>
        </div>
      </div>

      <div className="px-3 py-3 space-y-3">
        <div className="font-medium text-[11px] text-gray-500 mb-1 uppercase tracking-wide">
          12/10/22
        </div>

        {[
          {
            id: "109-270",
            packages: 107,
            address: "8900 Murray Ave → 168 W 10th St, Gilroy, CA 95020",
          },
          {
            id: "112-791",
            packages: 86,
            address:
              "230 Mayock Rd → 8225 Arroyo Cir Suite 21, Gilroy, CA 95020",
          },
          {
            id: "128-612",
            packages: 129,
            address: "6215 Engle Way → 905 1st St, Gilroy, CA 95020",
          },
        ].map((route, i) => (
          <div key={i} className="pb-3 last:pb-0">
            <div className="font-semibold text-sm mb-1">
              ID: {route.id} - {route.packages} packages
            </div>
            <div className="text-xs text-gray-600 leading-relaxed break-words">
              {route.address}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
