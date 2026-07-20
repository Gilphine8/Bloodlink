import type { Metadata } from "next"
import { MapPin, Phone, Mail, Building2 } from "lucide-react"
import { SupplyStatusBadge } from "@/components/blood-badges"
import { HOSPITAL_DIRECTORY } from "@/lib/data"

export const metadata: Metadata = {
  title: "Hospital Partners | BloodLinks Kenya",
  description:
    "Directory of major Kenyan partner hospitals with contact details and live blood bank supply levels.",
}

const LEGEND: { label: string; className: string }[] = [
  { label: "Critical Shortage", className: "bg-primary" },
  { label: "Low", className: "bg-warning" },
  { label: "Stable / Well Stocked", className: "bg-success" },
]

export default function HospitalPartnersPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hospital Partners
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-lg text-muted-foreground">
            Major hospitals across Kenya working with BloodLinks. Check current blood bank
            supply levels and reach their transfusion desks directly.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGEND.map((l) => (
              <span key={l.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className={`size-2.5 rounded-full ${l.className}`} aria-hidden />
                {l.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HOSPITAL_DIRECTORY.map((h) => (
            <article
              key={h.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Building2 className="size-6" />
                </span>
                <SupplyStatusBadge status={h.status} />
              </div>

              <h2 className="mt-4 text-base font-semibold leading-snug text-foreground text-pretty">
                {h.name}
              </h2>

              <dl className="mt-4 space-y-2.5 text-sm">
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <MapPin className="size-4 shrink-0" />
                  <span>{h.city}</span>
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <Phone className="size-4 shrink-0" />
                  <a href={`tel:${h.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                    {h.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <Mail className="size-4 shrink-0" />
                  <a href={`mailto:${h.email}`} className="truncate hover:text-primary">
                    {h.email}
                  </a>
                </div>
              </dl>

              <div className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
                {h.county} County
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
