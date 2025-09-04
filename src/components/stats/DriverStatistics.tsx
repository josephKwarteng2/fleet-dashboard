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
    <div className="w-full h-full flex flex-col min-h-0 p-4">
      <div className="flex items-center justify-between px-3 py-4 flex-shrink-0">
        <h2 className="font-semibold text-sm flex items-center gap-1">
          Driver Statistics
          <span className="ml-1 text-gray-400 text-base">&rarr;</span>
        </h2>
      </div>

      <div className="px-3 py-3">
        <div className="flex justify-between items-center mb-2 ont-medium text-[11px]">
          <div className="font-medium text-[11px] text-gray-700 uppercase tracking-wide">
            Average time per day by category
          </div>
          <div className="flex gap-0.5">
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

        <div className="flex w-full mb-1 px-1">
          <div className="flex items-center" style={{ width: "38.7%" }}>
            <div className="flex flex-col items-start w-full">
              <span className="text-xs font-semibold text-gray-400 text-start">
                On the Way
              </span>
              <div className="w-px h-2 bg-gray-400 rounded-full mt-1"></div>
            </div>
          </div>
          <div className="flex items-center" style={{ width: "28.3%" }}>
            <div className="flex flex-col items-start w-full">
              <span className="text-xs font-semibold text-gray-400 text-start">
                Unloading
              </span>
              <div className="w-px h-2 bg-gray-400 rounded-full mt-1"></div>
            </div>
          </div>
          <div className="flex items-center" style={{ width: "17.4%" }}>
            <div className="flex flex-col items-start w-full">
              <span className="text-xs font-semibold text-gray-400 text-start">
                Loading
              </span>
              <div className="w-px h-2 bg-gray-400 rounded-full mt-1"></div>
            </div>
          </div>
          <div className="flex items-center" style={{ width: "14.6%" }}>
            <div className="flex flex-col items-start w-full">
              <span className="text-xs font-semibold text-gray-400 text-start">
                Waiting
              </span>
              <div className="w-px h-2 bg-gray-400 rounded-full mt-1"></div>
            </div>
          </div>
        </div>
        <div className="flex w-full rounded-xl mb-3 h-12 relative shadow-2xl">
          <div className="absolute -inset-6 bg-gradient-radial from-transparent via-transparent to-transparent pointer-events-none">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#E9EDFB]/20 via-[#E9EDFB]/10 to-transparent blur-xl"></div>
            <div className="absolute top-0 left-1/4 w-1/4 h-full bg-gradient-to-r from-[#1E90FF]/20 via-[#1E90FF]/10 to-transparent blur-xl"></div>
            <div className="absolute top-0 left-1/2 w-1/5 h-full bg-gradient-to-r from-[#FF9800]/20 via-[#FF9800]/10 to-transparent blur-xl"></div>
            <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-[#424242]/15 via-[#424242]/8 to-transparent blur-xl"></div>
          </div>

          <div className="flex w-full rounded-xl overflow-hidden relative">
            <div
              className="flex items-center justify-center relative overflow-visible"
              style={{
                width: "38.7%",
                boxShadow:
                  "0 8px 25px 0 rgba(233, 237, 251, 0.4), 0 4px 12px 0 rgba(233, 237, 251, 0.3), 0 2px 6px 0 rgba(233, 237, 251, 0.2)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#F5F8FF] via-[#E9EDFB] to-[#D1DAF0] rounded-l-xl"></div>
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/60 to-transparent rounded-l-xl"></div>
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-gradient-to-br from-[#E9EDFB]/30 via-transparent to-transparent blur-md pointer-events-none"></div>
              <div className="absolute top-0 -left-4 w-8 h-full bg-gradient-to-r from-[#E9EDFB]/25 to-transparent blur-lg"></div>
              <div className="absolute -top-3 left-1/2 w-6 h-6 bg-[#E9EDFB]/40 rounded-full blur-sm"></div>

              <span className="font-bold text-gray-800 text-xs relative z-10 drop-shadow-sm">
                <span className="font-bold text-gray-800 text-xs relative z-10 drop-shadow-sm text-left w-full pl-2">
                  38.7%
                </span>
              </span>
              <div className="absolute left-0 right-0 top-full h-16 overflow-visible opacity-40">
                <div className="w-full h-full bg-gradient-to-b from-[#E9EDFB] via-[#E9EDFB]/60 to-transparent transform scale-y-[-1] blur-[3px]"></div>
                <div className="absolute top-2 left-1/4 w-4 h-4 bg-[#E9EDFB]/30 rounded-full blur-sm"></div>
              </div>
            </div>
            <div
              className="flex items-center justify-center relative overflow-visible"
              style={{
                width: "28.3%",
                boxShadow:
                  "0 8px 25px 0 rgba(30, 144, 255, 0.4), 0 4px 12px 0 rgba(30, 144, 255, 0.3), 0 2px 6px 0 rgba(30, 144, 255, 0.2)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#5BA3FF] via-[#1E90FF] to-[#1565C0]"></div>
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/50 to-transparent"></div>
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-gradient-to-br from-[#1E90FF]/35 via-transparent to-transparent blur-md pointer-events-none"></div>
              <div className="absolute -top-4 left-1/3 w-5 h-5 bg-[#5BA3FF]/50 rounded-full blur-sm"></div>
              <div className="absolute top-1/2 -right-3 w-4 h-8 bg-gradient-to-r from-transparent to-[#1E90FF]/30 blur-lg"></div>

              <span className="font-bold text-white text-xs relative z-10 drop-shadow-lg">
                <span className="font-bold text-white text-xs relative z-10 drop-shadow-lg text-left w-full pl-2">
                  28.3%
                </span>
              </span>

              <div className="absolute left-0 right-0 top-full h-16 overflow-visible opacity-50">
                <div className="w-full h-full bg-gradient-to-b from-[#1E90FF] via-[#1E90FF]/60 to-transparent transform scale-y-[-1] blur-[3px]"></div>
                <div className="absolute top-3 right-1/4 w-3 h-6 bg-[#1E90FF]/40 rounded-full blur-sm"></div>
              </div>
            </div>
            <div
              className="flex items-center justify-center relative overflow-visible"
              style={{
                width: "17.4%",
                boxShadow:
                  "0 8px 25px 0 rgba(255, 152, 0, 0.4), 0 4px 12px 0 rgba(255, 152, 0, 0.3), 0 2px 6px 0 rgba(255, 152, 0, 0.2)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFD54F] via-[#FF9800] to-[#E65100]"></div>
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/50 to-transparent"></div>
              <div className="absolute -top-3 -left-1 -right-1 -bottom-1 bg-gradient-to-t from-transparent via-[#FF9800]/30 to-[#FFD54F]/25 blur-md pointer-events-none"></div>
              <div className="absolute -top-2 right-1/4 w-3 h-3 bg-[#FFD54F]/60 rounded-full blur-sm"></div>
              <div className="absolute bottom-0 -right-2 w-6 h-4 bg-gradient-to-l from-[#FF9800]/35 to-transparent blur-lg"></div>

              <span className="font-bold text-white text-xs relative z-10 drop-shadow-lg">
                <span className="font-bold text-white text-xs relative z-10 drop-shadow-lg text-left w-full pl-2">
                  17.4%
                </span>
              </span>

              <div className="absolute left-0 right-0 top-full h-16 overflow-visible opacity-50">
                <div className="w-full h-full bg-gradient-to-b from-[#FF9800] via-[#FF9800]/60 to-transparent transform scale-y-[-1] blur-[3px]"></div>
                <div className="absolute top-1 left-1/2 w-4 h-3 bg-[#FF9800]/45 rounded-full blur-sm"></div>
              </div>
            </div>

            <div
              className="flex items-center justify-center relative overflow-visible"
              style={{
                width: "14.6%",
                boxShadow:
                  "0 6px 12px -2px rgba(66, 66, 66, 0.4), 0 4px 8px -2px rgba(66, 66, 66, 0.3), 0 2px 4px -1px rgba(66, 66, 66, 0.2)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#757575] via-[#424242] to-[#212121] rounded-r-xl"></div>
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/40 to-transparent rounded-r-xl"></div>

              <div className="absolute -top-1 -left-1 -right-3 -bottom-1 bg-gradient-to-bl from-transparent via-[#424242]/25 to-[#757575]/20 blur-md pointer-events-none"></div>
              <div className="absolute top-1/4 -right-3 w-5 h-5 bg-[#757575]/30 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 right-1/3 w-2 h-2 bg-[#424242]/40 rounded-full blur-sm"></div>

              <span className="font-bold text-white text-xs relative z-10 drop-shadow-lg">
                <span className="font-bold text-white text-xs relative z-10 drop-shadow-lg text-left w-full pl-2">
                  14.6%
                </span>
              </span>

              <div className="absolute left-0 right-0 top-full h-16 overflow-visible opacity-50">
                <div className="w-full h-full bg-gradient-to-b from-[#424242] via-[#424242]/60 to-transparent transform scale-y-[-1] blur-[3px]"></div>
                <div className="absolute top-2 right-1/2 w-3 h-4 bg-[#424242]/35 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col divide-y divide-gray-200 text-xs">
          <div className="flex items-center py-1.5">
            <span className="font-medium text-gray-400 flex-1">On the Way</span>
            <span className="font-semibold text-gray-700 w-20 text-right">
              3 hr 10 min
            </span>
            <span className="font-semibold text-black w-14 text-right">
              38.7%
            </span>
          </div>
          <div className="flex items-center py-1.5">
            <span className="font-medium text-gray-400 flex-1">Unloading</span>
            <span className="font-semibold text-gray-700 w-20 text-right">
              2 hr 15 min
            </span>
            <span className="font-semibold text-black w-14 text-right">
              28.3%
            </span>
          </div>
          <div className="flex items-center py-1.5">
            <span className="font-medium text-gray-400 flex-1">Loading</span>
            <span className="font-semibold text-gray-700 w-20 text-right">
              1 hr 23 min
            </span>
            <span className="font-semibold text-black w-14 text-right">
              17.4%
            </span>
          </div>
          <div className="flex items-center py-1.5">
            <span className="ffont-medium text-gray-400 flex-1">Waiting</span>
            <span className="font-semibold text-gray-700 w-20 text-right">
              1 hr 10 min
            </span>
            <span className="font-semibold text-black w-14 text-right">
              14.6%
            </span>
          </div>
        </div>
      </div>

      <div className="px-3 py-3">
        <div className="flex justify-between items-center mb-2">
          <div className="font-medium text-[11px] text-gray-700 uppercase tracking-wide">
            Working time per day
          </div>
          <div className="text-xs text-gray-500">W M 6M Y</div>
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
