import { Phone, MessageSquare, MoreVertical } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function VehicleSpecCard() {
  return (
    <TooltipProvider>
      <div className="bg-gray-50 p-6">
        <div className="bg-white rounded-lg px-1 -py-3 mb-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="James Lubin"
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
            <div>
              <h2 className="font-medium text-gray-900 text-sm">James Lubin</h2>
              <p className="text-gray-400 text-xs">ID: 236-542-097</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                  <MessageSquare className="w-4 h-4 text-black fill-current" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Send Message</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                  <Phone className="w-4 h-4 text-black fill-current" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Call Driver</TooltipContent>
            </Tooltip>

            <span className="mx-1 h-6 w-px bg-gray-200 inline-block" />

            <Tooltip>
              <TooltipTrigger asChild>
                <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                  <MoreVertical className="w-4 h-4 text-gray-600" />
                </button>
              </TooltipTrigger>
              <TooltipContent>More Options</TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="bg-[#dddee2] rounded-lg p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-[1.2] min-w-0">
              <h3 className="text-base font-semibold text-gray-900 mb-6">
                Volkswagen Transporter
              </h3>

              <div className="grid grid-cols-2 gap-x-12 gap-y-6 max-w-md">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Payload</p>
                  <p className="text-sm font-semibold text-gray-900">
                    2,885 lbs
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Load Volume</p>
                  <p className="text-sm font-semibold text-gray-900">
                    353,937 in³
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Load Length</p>
                  <p className="text-sm font-semibold text-gray-900">117 in</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Load Width</p>
                  <p className="text-sm font-semibold text-gray-900">67 in</p>
                </div>
              </div>

              <div className="flex items-center gap-8 mt-8">
                <div className="border border-gray-400 bg-gray-50 rounded px-3 py-1.5">
                  <span className="text-xs font-mono font-medium tracking-wide">
                    6TRJ244
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600">Documents</span>
                </div>
              </div>
            </div>

            <div className="flex-[2.2] flex justify-end items-center min-w-0 overflow-x-hidden">
              <img
                src="/van.png"
                alt="Volkswagen Transporter"
                className="w-full max-w-full h-auto object-contain"
                style={{ minWidth: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
