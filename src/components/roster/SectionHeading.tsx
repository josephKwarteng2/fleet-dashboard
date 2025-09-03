import { ChevronDown } from "lucide-react";

export default function SectionHeading({
  title,
  action,
  collapsible = true,
  expanded = true,
  onToggle,
}: {
  title: string;
  action?: React.ReactNode;
  collapsible?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
}) {
  return (
    <div className="flex items-center justify-between mb-0.5 pl-3">
      <h2 className="text-[12px] font-semibold text-black truncate flex-1 uppercase tracking-wider">
        {title}
      </h2>
      <div className="flex items-center gap-0.5 flex-shrink-0">
        {action && <div className="hidden sm:block">{action}</div>}
        {collapsible && (
          <button
            className="text-gray-400 hover:text-gray-600 transition-colors duration-150 p-0.5"
            onClick={onToggle}
            aria-label={expanded ? "Collapse" : "Expand"}
          >
            <ChevronDown
              className={`w-2.5 h-2.5 transition-transform duration-150 ${
                expanded ? "" : "rotate-180"
              }`}
            />
          </button>
        )}
      </div>
    </div>
  );
}
