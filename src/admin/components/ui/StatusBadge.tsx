interface StatusBadgeProps {
  status:
    | "Published"
    | "Draft"
    | "Pending"
    | "Active"
    | "Inactive";
}

const colors = {
  Published:
    "bg-green-100 text-green-700",

  Draft:
    "bg-yellow-100 text-yellow-700",

  Pending:
    "bg-orange-100 text-orange-700",

  Active:
    "bg-blue-100 text-blue-700",

  Inactive:
    "bg-gray-100 text-gray-700",
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[status]}`}
    >
      {status}
    </span>
  );
}