export default function SidebarIcon({
  icon: Icon,
  active = false,
}: {
  icon: React.ElementType;
  active?: boolean;
}) {
  return (
    <div
      className={`w-full flex items-center justify-center cursor-pointer overflow-hidden
        ${
          active
            ? "bg-blue-600 text-white"
            : "text-gray-400 hover:text-white hover:bg-gray-800"
        }`}
    >
      <div className="size-7 flex items-center justify-center">
        <Icon className="size-4" />
      </div>
    </div>
  );
}
