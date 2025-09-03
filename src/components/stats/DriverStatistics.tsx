import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const workingTimeData = [
  { day: "Mon", hours: 8.5, avg: 7.8 },
  { day: "Tue", hours: 7.2, avg: 7.8 },
  { day: "Wed", hours: 9.1, avg: 7.8 },
  { day: "Thu", hours: 8.8, avg: 7.8 },
  { day: "Fri", hours: 7.5, avg: 7.8 },
  { day: "Sat", hours: 6.2, avg: 7.8 },
  { day: "Sun", hours: 5.8, avg: 7.8 },
];

export default function DriverStatistics() {
  const [range, setRange] = React.useState<string>("W");

  return (
    <div className="w-full h-full flex flex-col min-h-0 p-4 divide-y divide-gray-200">
      <div className="flex items-center justify-between px-3 py-2 flex-shrink-0">
        <h2 className="font-semibold text-sm flex items-center gap-1">
          Driver Statistics
          <span className="ml-1 text-gray-400 text-base">&rarr;</span>
        </h2>
        <div className="flex gap-1">
          {["W", "M", "6M", "Y"].map((period) => (
            <button
              key={period}
              onClick={() => setRange(period)}
              className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                range === period
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="px-3 py-3">
        <div className="font-medium text-[11px] text-gray-700 mb-2 uppercase tracking-wide">
          Average time per day by category
        </div>

        <div className="flex w-full rounded-lg overflow-hidden mb-3 h-10 relative backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
          <div
            className="flex items-center justify-center relative backdrop-blur-sm border-r border-white/20"
            style={{ width: "38.7%" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#E9EDFB]/90 to-[#E9EDFB]/40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#E9EDFB]/60 via-[#E9EDFB]/30 to-[#E9EDFB]/10"></div>
            <span className="font-semibold text-gray-800 text-xs relative z-10">
              38.7%
            </span>
            <div className="absolute left-0 right-0 top-full h-12 bg-gradient-to-b from-[#E9EDFB]/40 to-transparent blur-md z-0"></div>
          </div>

          <div
            className="flex items-center justify-center relative backdrop-blur-sm border-r border-white/20"
            style={{ width: "28.3%" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#1E90FF]/90 to-[#1E90FF]/40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1E90FF]/60 via-[#1E90FF]/30 to-[#1E90FF]/10"></div>
            <span className="font-semibold text-white text-xs relative z-10 drop-shadow-sm">
              28.3%
            </span>
            <div className="absolute left-0 right-0 top-full h-12 bg-gradient-to-b from-[#1E90FF]/40 to-transparent blur-md z-0"></div>
          </div>

          <div
            className="flex items-center justify-center relative backdrop-blur-sm border-r border-white/20"
            style={{ width: "17.4%" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF9800]/90 to-[#FF9800]/40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF9800]/60 via-[#FF9800]/30 to-[#FF9800]/10"></div>
            <span className="font-semibold text-white text-xs relative z-10 drop-shadow-sm">
              17.4%
            </span>
            <div className="absolute left-0 right-0 top-full h-12 bg-gradient-to-b from-[#FF9800]/40 to-transparent blur-md z-0"></div>
          </div>

          <div
            className="flex items-center justify-center relative backdrop-blur-sm"
            style={{ width: "14.6%" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10"></div>
            <span className="font-semibold text-white text-xs relative z-10 drop-shadow-sm">
              14.6%
            </span>
            <div className="absolute left-0 right-0 top-full h-12 bg-gradient-to-b from-black/40 to-transparent blur-md z-0"></div>
          </div>
        </div>

        <div className="flex flex-col divide-y divide-gray-200 text-xs">
          <div className="flex items-center py-1.5">
            <span className="font-medium text-gray-900 flex-1">On the Way</span>
            <span className="text-gray-700 w-20 text-right">3 hr 10 min</span>
            <span className="text-gray-500 w-14 text-right">38.7%</span>
          </div>
          <div className="flex items-center py-1.5">
            <span className="font-medium text-blue-700 flex-1">Unloading</span>
            <span className="text-gray-700 w-20 text-right">2 hr 15 min</span>
            <span className="text-blue-500 w-14 text-right">28.3%</span>
          </div>
          <div className="flex items-center py-1.5">
            <span className="font-medium text-yellow-700 flex-1">Loading</span>
            <span className="text-gray-700 w-20 text-right">1 hr 23 min</span>
            <span className="text-yellow-600 w-14 text-right">17.4%</span>
          </div>
          <div className="flex items-center py-1.5">
            <span className="font-medium text-black flex-1">Waiting</span>
            <span className="text-gray-700 w-20 text-right">1 hr 10 min</span>
            <span className="text-black w-14 text-right">14.6%</span>
          </div>
        </div>
      </div>

      <div className="px-3 py-3">
        <div className="flex justify-between items-center mb-2">
          <div className="font-medium text-[11px] text-gray-700 uppercase tracking-wide">
            Working time per day
          </div>
          <div className="text-xs text-gray-500">9/12/22</div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <div className="text-xs text-gray-700">Average</div>
          <div className="text-xs font-medium text-gray-900">6 hr 30 min</div>
        </div>

        <div className="h-36 w-full mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={workingTimeData}
              barSize={14}
              margin={{
                top: 10,
                right: window.innerWidth < 640 ? 8 : 20,
                left: window.innerWidth < 640 ? 8 : 20,
                bottom: 5,
              }}
            >
              <CartesianGrid vertical={false} strokeOpacity={0.15} />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                className="text-gray-500"
                fontSize={11}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                className="text-gray-500"
                fontSize={11}
                width={28}
              />
              <ReferenceLine
                y={7.8}
                stroke="#dbeafe"
                strokeWidth={2}
                strokeDasharray="3 3"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(17, 17, 17, 0.9)",
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  fontSize: "12px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  backdropFilter: "blur(10px)",
                }}
                labelStyle={{ color: "#fff", fontWeight: "500" }}
              />
              <Bar dataKey="hours" fill="#111" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-between text-[11px] text-gray-500 pt-2 border-t border-gray-100">
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-black mr-1"></span>
            Working Time
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-300 mr-1"></span>
            Avg Time
          </span>
        </div>
      </div>
    </div>
  );
}
