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
    <div className="flex items-center justify-between mb-3 gap-2">
      <h2 className="text-sm lg:text-base font-medium text-gray-900 truncate flex-1">
        {title}
      </h2>
      <div className="flex items-center gap-2 flex-shrink-0">
        {action && <div className="hidden sm:block">{action}</div>}
        {collapsible && (
          <button
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
            onClick={onToggle}
            aria-label={expanded ? "Collapse" : "Expand"}
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                expanded ? "" : "rotate-180"
              }`}
            />
          </button>
        )}
      </div>
    </div>
  );
}
