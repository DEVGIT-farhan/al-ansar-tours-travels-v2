import { FiCheckCircle, FiClock } from "react-icons/fi";

import CrudHeader from "@/admin/components/crud/CrudHeader";
import CrudTable, { type CrudColumn } from "@/admin/components/crud/CrudTable";
import StatusBadge, {
  type StatusVariant,
} from "@/admin/components/ui/StatusBadge";
import { useEnquiries, useUpdateEnquiryStatus } from "@/features/enquiries";

import type { Enquiry, EnquiryStatus } from "@/shared/types/enquiry.types";

const statusOptions: { label: string; value: EnquiryStatus }[] = [
  { label: "New", value: "new" },
  { label: "Contacted", value: "contacted" },
  { label: "Booked", value: "booked" },
  { label: "Closed", value: "closed" },
];

const statusVariants: Record<EnquiryStatus, StatusVariant> = {
  new: "info",
  contacted: "warning",
  booked: "success",
  closed: "neutral",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function EnquiriesPage() {
  const { data: enquiries = [], isLoading, isError } = useEnquiries();
  const updateStatus = useUpdateEnquiryStatus();
  const newCount = enquiries.filter(
    (enquiry) => enquiry.status === "new",
  ).length;
  const bookedCount = enquiries.filter(
    (enquiry) => enquiry.status === "booked",
  ).length;

  const columns: CrudColumn<Enquiry>[] = [
    {
      key: "customer",
      title: "Customer",
      render: (row) => (
        <div>
          <p className="font-semibold text-[#102a43]">{row.name}</p>
          <a
            href={`mailto:${row.email}`}
            className="mt-0.5 block text-xs text-slate-500 hover:text-[#102a43]"
          >
            {row.email}
          </a>
          <a
            href={`tel:${row.phone.replace(/\s+/g, "")}`}
            className="block text-xs text-slate-500 hover:text-[#102a43]"
          >
            {row.phone}
          </a>
          {row.preferred_callback_time && (
            <p className="mt-1 text-xs font-medium text-[#9b6a18]">
              Callback: {row.preferred_callback_time}
            </p>
          )}
        </div>
      ),
    },
    {
      key: "trip",
      title: "Trip",
      render: (row) => (
        <div>
          <p>{row.package_name || "General enquiry"}</p>
          {row.destination && (
            <p className="mt-0.5 text-xs text-slate-500">{row.destination}</p>
          )}
        </div>
      ),
    },
    {
      key: "message",
      title: "Message",
      className: "max-w-xs",
      render: (row) => (
        <p className="line-clamp-3 leading-6" title={row.message}>
          {row.message}
        </p>
      ),
    },
    {
      key: "created_at",
      title: "Received",
      render: (row) => formatDate(row.created_at),
    },
    {
      key: "status",
      title: "Status",
      render: (row) => (
        <div className="space-y-2">
          <StatusBadge
            label={
              statusOptions.find((option) => option.value === row.status)
                ?.label ?? row.status
            }
            variant={statusVariants[row.status]}
          />
          <select
            aria-label={`Update status for ${row.name}`}
            value={row.status}
            disabled={updateStatus.isPending}
            onChange={(event) =>
              updateStatus.mutate({
                id: row.id,
                status: event.target.value as EnquiryStatus,
              })
            }
            className="block rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700 outline-none transition focus:border-[#102a43] focus:ring-2 focus:ring-[#102a43]/10"
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-7">
      <CrudHeader
        title="Customer Enquiries"
        description="Every website contact request is stored here so your team can follow up and track the outcome."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
            Total enquiries
          </p>
          <p className="mt-2 text-3xl font-bold text-[#102a43]">
            {enquiries.length}
          </p>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
            <FiClock className="h-4 w-4" /> Awaiting follow-up
          </p>
          <p className="mt-2 text-3xl font-bold text-blue-800">{newCount}</p>
        </div>
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
            <FiCheckCircle className="h-4 w-4" /> Booked
          </p>
          <p className="mt-2 text-3xl font-bold text-emerald-800">
            {bookedCount}
          </p>
        </div>
      </div>

      {isError ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
          Enquiries could not be loaded. Apply the latest Supabase migration,
          then refresh this page.
        </div>
      ) : isLoading ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500">
          Loading enquiries...
        </div>
      ) : (
        <CrudTable columns={columns} data={enquiries} rowKey="id" />
      )}
    </div>
  );
}
