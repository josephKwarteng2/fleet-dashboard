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
        flex items-center gap-2.5 px-2 h-10 
        w-full text-left cursor-pointer border-l-2
        transition-all duration-200 rounded-r-sm focus:outline-none
        ${
          isSelected
            ? "border-l-blue-500 bg-blue-50"
            : "border-l-transparent hover:border-l-transparent focus:border-l-transparent"
        }
      `}
      aria-selected={isSelected}
      onClick={onClick}
    >
      <>
        <div className="relative flex-shrink-0">
          <Avatar className="w-6 h-6 lg:w-7 lg:h-7">
            <AvatarImage src={item.avatar} alt={item.name} />
            <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white text-[9px] lg:text-[10px] font-medium">
              {item.name
                ?.split(" ")
                .map((n: string) => n[0])
                .join("") ?? "?"}
            </AvatarFallback>
          </Avatar>
          {item.warning && (
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-[7px] font-bold">!</span>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-bold text-[10px] lg:text-[11px] text-gray-900 truncate leading-none">
              {item.name}
            </h3>
            <div className="flex-shrink-0">
              <StatusPill status={item.status} />
            </div>
          </div>

          <p className="text-[12px] lg:text-[10px] text-gray-400 truncate leading-none pt-1">
            {item.vehicle}
          </p>

          {item.phone && (
            <p className="text-[8px] lg:text-[9px] text-gray-400 truncate leading-none">
              {item.phone}
            </p>
          )}
        </div>
      </>
    </button>
  );
}
