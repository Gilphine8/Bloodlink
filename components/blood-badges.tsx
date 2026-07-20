import { cn } from "@/lib/utils"
import type { BloodType, SupplyStatus } from "@/lib/data"

export function BloodTypeBadge({
  type,
  className,
}: {
  type: BloodType
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-primary/10 px-2.5 py-1 text-sm font-bold tabular-nums text-primary ring-1 ring-inset ring-primary/20",
        className,
      )}
    >
      {type}
    </span>
  )
}

const URGENCY_STYLES: Record<string, string> = {
  Critical: "bg-primary/10 text-primary ring-primary/20",
  Urgent: "bg-warning/15 text-warning-foreground ring-warning/30",
  Standard: "bg-secondary text-secondary-foreground ring-border",
}

export function UrgencyBadge({ urgency }: { urgency: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset",
        URGENCY_STYLES[urgency] ?? URGENCY_STYLES.Standard,
      )}
    >
      {urgency === "Critical" && (
        <span className="size-1.5 rounded-full bg-primary animate-pulse" aria-hidden />
      )}
      {urgency}
    </span>
  )
}

const STATUS_STYLES: Record<SupplyStatus, { dot: string; text: string; bg: string }> = {
  "Critical Shortage": {
    dot: "bg-primary",
    text: "text-primary",
    bg: "bg-primary/10 ring-primary/20",
  },
  Low: {
    dot: "bg-warning",
    text: "text-warning-foreground",
    bg: "bg-warning/15 ring-warning/30",
  },
  Stable: {
    dot: "bg-success",
    text: "text-success",
    bg: "bg-success/10 ring-success/20",
  },
  "Well Stocked": {
    dot: "bg-success",
    text: "text-success",
    bg: "bg-success/10 ring-success/20",
  },
}

export function SupplyStatusBadge({ status }: { status: SupplyStatus }) {
  const s = STATUS_STYLES[status]
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset",
        s.bg,
        s.text,
      )}
    >
      <span className={cn("size-2 rounded-full", s.dot)} aria-hidden />
      {status}
    </span>
  )
}
