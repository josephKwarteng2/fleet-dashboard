import { Phone, MessageSquare, MoreHorizontal } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function VehicleSpecCard() {
  return (
    <TooltipProvider>
      <div className="bg-gray-50 p-4">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="James Lubin"
              className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm"
            />
            <div>
              <h2 className="font-semibold text-gray-900 text-sm">
                James Lubin
              </h2>
              <p className="text-gray-500 text-xs">ID: 236-542-097</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <MessageSquare className="w-4 h-4 text-gray-600" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Send Message</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Phone className="w-4 h-4 text-gray-600" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Call Driver</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <MoreHorizontal className="w-4 h-4 text-gray-600" />
                </button>
              </TooltipTrigger>
              <TooltipContent>More Options</TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Volkswagen Transporter
              </h3>

              <div className="grid grid-cols-2 gap-x-12 gap-y-6 max-w-md">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Payload</p>
                  <p className="text-lg font-bold text-gray-900">2,885 lbs</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Load Volume</p>
                  <p className="text-lg font-bold text-gray-900">353,937 in³</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Load Length</p>
                  <p className="text-lg font-bold text-gray-900">117 in</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Load Width</p>
                  <p className="text-lg font-bold text-gray-900">67 in</p>
                </div>
              </div>

              <div className="flex items-center gap-8 mt-8">
                <div className="flex items-center gap-3">
                  <div className="border border-gray-300 rounded px-3 py-1">
                    <span className="text-sm font-mono font-medium tracking-wide">
                      6TRJ244
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <span className="text-sm text-gray-600">Documents</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-end">
              <img
                src="/van.png"
                alt="Volkswagen Transporter"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
