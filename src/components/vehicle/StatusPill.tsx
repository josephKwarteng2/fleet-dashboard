export default function StatusPill({ status }: { status: string }) {
  const normalizedStatus = status ? status.toUpperCase() : "";

  const getStatusDot = (status: string) => {
    switch (status) {
      case "WAITING":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case "WAITING":
        return "text-black";
      case "ON THE WAY":
      case "LOADING":
        return "text-gray-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="flex items-center gap-1.5">
      {normalizedStatus !== "ON THE WAY" && (
        <div
          className={`w-1.5 h-1.5 rounded-full ${getStatusDot(
            normalizedStatus
          )}`}
        />
      )}
      <span
        className={`text-[8px] font-medium uppercase ${getStatusTextColor(
          normalizedStatus
        )}`}
      >
        {normalizedStatus}
      </span>
    </div>
  );
}
