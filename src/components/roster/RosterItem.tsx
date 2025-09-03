import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import StatusPill from "../vehicle/StatusPill";

interface RosterItemProps {
  id: string;
  avatar?: string;
  name: string;
  vehicle: string;
  status: string;
  phone?: string;
  warning?: boolean;
  isSelected?: boolean;
}

export default function RosterItem({
  item,
  isSelected = false,
  onClick,
}: {
  item: RosterItemProps;
  isSelected?: boolean;
  onClick?: () => void;
}) {
  if (!item) return null;
  return (
    <button
      className={`
        flex items-center gap-3 p-3 w-full text-left 
        hover:bg-gray-50 active:bg-gray-100 cursor-pointer border-l-2 transition-all duration-200
        rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
        ${
          isSelected
            ? "border-l-blue-500 bg-blue-50 ring-1 ring-blue-200"
            : "border-l-transparent hover:border-l-gray-200"
        }
      `}
      aria-selected={isSelected}
      onClick={onClick}
    >
      <div className="relative flex-shrink-0">
        <Avatar className="w-9 h-9 lg:w-10 lg:h-10">
          <AvatarImage src={item.avatar} alt={item.name} />
          <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white text-xs lg:text-sm font-medium">
            {item.name
              ?.split(" ")
              .map((n) => n[0])
              .join("") ?? "?"}
          </AvatarFallback>
        </Avatar>
        {item.warning && (
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 lg:w-3.5 lg:h-3.5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-[9px] lg:text-[10px] font-bold">
              !
            </span>
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-0.5">
          <h3 className="font-medium text-sm lg:text-base text-gray-900 truncate leading-tight">
            {item.name}
          </h3>
          <div className="flex-shrink-0">
            <StatusPill status={item.status} />
          </div>
        </div>
        <p className="text-xs lg:text-sm text-gray-500 truncate leading-tight">
          {item.vehicle}
        </p>
        {item.phone && (
          <p className="text-xs text-gray-400 truncate leading-tight mt-0.5">
            {item.phone}
          </p>
        )}
      </div>
    </button>
  );
}
