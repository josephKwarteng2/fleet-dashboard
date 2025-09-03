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
        return "text-gray-500";
      case "LOADING":
        return "text-yellow-600";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="flex items-center gap-2">
      {normalizedStatus !== "ON THE WAY" && (
        <div
          className={`w-2 h-2 rounded-full ${getStatusDot(normalizedStatus)}`}
        />
      )}
      <span
        className={`text-xs font-semibold uppercase ${getStatusTextColor(
          normalizedStatus
        )}`}
      >
        {normalizedStatus}
      </span>
    </div>
  );
}
