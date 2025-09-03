export default function SidebarIcon({
  icon: Icon,
  active = false,
}: {
  icon: React.ElementType;
  active?: boolean;
}) {
  return (
    <div
      className={`
        size-8 flex items-center justify-center cursor-pointer rounded-lg
        ${
          active
            ? "bg-blue-600 text-white"
            : "text-gray-400 hover:text-white hover:bg-gray-800"
        }
      `}
    >
      <Icon className="size-4" />
    </div>
  );
}
