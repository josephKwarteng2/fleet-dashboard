import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
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
    <div className="w-full h-full flex flex-col min-h-0 divide-y divide-gray-200">
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 flex-wrap gap-2 flex-shrink-0">
        <h2 className="font-semibold text-base sm:text-lg md:text-xl">
          Driver Statistics
        </h2>
        <div className="flex gap-1">
          {["W", "M", "6M", "Y"].map((period) => (
            <button
              key={period}
              onClick={() => setRange(period)}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm font-medium transition-colors ${
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

      <div className="px-3 sm:px-4 md:px-6 py-4">
        <div className="font-semibold text-xs sm:text-sm text-gray-800 mb-4 tracking-wide uppercase">
          Average time per day by category
        </div>

        <div className="flex w-full rounded-lg overflow-hidden mb-4 h-14">
          <div
            className="flex items-center justify-center bg-gray-100"
            style={{ width: "39.7%" }}
          >
            <span className="font-bold text-gray-800 text-xs sm:text-sm">
              39.7%
            </span>
          </div>
          <div
            className="flex items-center justify-center bg-blue-500"
            style={{ width: "28.3%" }}
          >
            <span className="font-bold text-white text-xs sm:text-sm">
              28.3%
            </span>
          </div>
          <div
            className="flex items-center justify-center bg-yellow-400"
            style={{ width: "17.4%" }}
          >
            <span className="font-bold text-white text-xs sm:text-sm">
              17.4%
            </span>
          </div>
          <div
            className="flex items-center justify-center bg-black"
            style={{ width: "14.6%" }}
          >
            <span className="font-bold text-white text-xs sm:text-sm">
              14.6%
            </span>
          </div>
        </div>

        <div className="flex flex-col divide-y divide-gray-200 text-xs sm:text-sm">
          <div className="flex items-center py-2">
            <span className="font-medium text-gray-900 flex-1">On the Way</span>
            <span className="text-gray-700 w-24 text-right">3 hr 10 min</span>
            <span className="text-gray-500 w-16 text-right">39.7%</span>
          </div>
          <div className="flex items-center py-2">
            <span className="font-medium text-blue-700 flex-1">Unloading</span>
            <span className="text-gray-700 w-24 text-right">2 hr 15 min</span>
            <span className="text-blue-500 w-16 text-right">28.3%</span>
          </div>
          <div className="flex items-center py-2">
            <span className="font-medium text-yellow-700 flex-1">Loading</span>
            <span className="text-gray-700 w-24 text-right">1 hr 23 min</span>
            <span className="text-yellow-600 w-16 text-right">17.4%</span>
          </div>
          <div className="flex items-center py-2">
            <span className="font-medium text-black flex-1">Waiting</span>
            <span className="text-gray-700 w-24 text-right">1 hr 10 min</span>
            <span className="text-black w-16 text-right">14.6%</span>
          </div>
        </div>
      </div>

      <div className="px-3 sm:px-4 md:px-6 py-4">
        <div className="font-medium text-xs sm:text-sm text-gray-700 mb-4 tracking-wide uppercase">
          Working time per day
        </div>

        <div className="h-40 sm:h-44 md:h-52 w-full mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={workingTimeData}
              barSize={18}
              margin={{
                top: 20,
                right: window.innerWidth < 640 ? 10 : 30,
                left: window.innerWidth < 640 ? 10 : 20,
                bottom: 5,
              }}
            >
              <CartesianGrid vertical={false} strokeOpacity={0.2} />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                className="text-gray-500"
                fontSize={window.innerWidth < 640 ? 11 : 12}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                className="text-gray-500"
                fontSize={window.innerWidth < 640 ? 11 : 12}
                width={window.innerWidth < 640 ? 30 : 40}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#111",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: window.innerWidth < 640 ? "12px" : "14px",
                  boxShadow: "0 4px 12px -1px rgba(0,0,0,0.25)",
                }}
                labelStyle={{ color: "#fff", fontWeight: "500" }}
              />
              <Bar dataKey="hours" fill="#111" radius={[4, 4, 0, 0]} />
              <Bar dataKey="avg" fill="#dbeafe" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 pt-2 border-t border-gray-100">
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-black mr-1"></span>
            Working Time
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-300 mr-1"></span>
            <span className="hidden sm:inline">Average Working Time</span>
            <span className="sm:hidden">Avg Time</span>
          </span>
        </div>
      </div>
    </div>
  );
}
