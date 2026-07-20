"use client"

import { useMemo, useState } from "react"
import { MapPin, Hospital as HospitalIcon, Droplet, Check, Filter, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BloodTypeBadge, UrgencyBadge } from "@/components/blood-badges"
import { BLOOD_REQUESTS, BLOOD_TYPES, COUNTIES, HOSPITALS } from "@/lib/data"

const ALL = "All"

export function FindBloodBrowser() {
  const [bloodType, setBloodType] = useState<string>(ALL)
  const [county, setCounty] = useState<string>(ALL)
  const [hospital, setHospital] = useState<string>(ALL)
  const [connected, setConnected] = useState<Record<string, boolean>>({})

  const filtered = useMemo(() => {
    return BLOOD_REQUESTS.filter((r) => {
      if (bloodType !== ALL && r.bloodType !== bloodType) return false
      if (county !== ALL && r.county !== county) return false
      if (hospital !== ALL && r.hospital !== hospital) return false
      return true
    })
  }, [bloodType, county, hospital])

  const hasFilters = bloodType !== ALL || county !== ALL || hospital !== ALL

  function reset() {
    setBloodType(ALL)
    setCounty(ALL)
    setHospital(ALL)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Filter className="size-4 text-primary" />
              Filter Requests
            </h2>
            {hasFilters && (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                <X className="size-3" />
                Clear
              </button>
            )}
          </div>

          {/* Blood type */}
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Blood Type
            </p>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {[ALL, ...BLOOD_TYPES].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setBloodType(t)}
                  className={cn(
                    "rounded-lg border py-1.5 text-xs font-semibold transition-colors",
                    bloodType === t
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-primary/40 hover:text-primary",
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <FilterSelect
            label="County"
            value={county}
            onChange={setCounty}
            options={[ALL, ...COUNTIES]}
          />
          <FilterSelect
            label="Hospital"
            value={hospital}
            onChange={setHospital}
            options={[ALL, ...HOSPITALS]}
          />
        </div>
      </aside>

      {/* Results */}
      <div>
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
            urgent request{filtered.length === 1 ? "" : "s"}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <Droplet className="mx-auto size-8 text-muted-foreground" />
            <p className="mt-3 font-medium text-foreground">No matching requests</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your filters to see more results.
            </p>
            <Button variant="outline" size="lg" className="mt-4" onClick={reset}>
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {filtered.map((req) => (
              <article
                key={req.id}
                className="flex flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Patient ID
                    </p>
                    <p className="font-mono text-sm font-semibold text-foreground">
                      {req.patientId}
                    </p>
                  </div>
                  <BloodTypeBadge type={req.bloodType} className="text-base" />
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <p className="flex items-center gap-2 text-foreground">
                    <HospitalIcon className="size-4 shrink-0 text-muted-foreground" />
                    {req.hospital}
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="size-4 shrink-0" />
                    {req.county} County
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-lg font-bold text-foreground">
                      {req.units} <span className="text-sm font-normal text-muted-foreground">units</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{req.postedAgo}</p>
                  </div>
                  <UrgencyBadge urgency={req.urgency} />
                </div>

                <Button
                  className={cn("mt-4 w-full gap-2", connected[req.id] && "pointer-events-none")}
                  variant={connected[req.id] ? "outline" : "default"}
                  onClick={() => setConnected((c) => ({ ...c, [req.id]: true }))}
                >
                  {connected[req.id] ? (
                    <>
                      <Check className="size-4 text-success" />
                      Request Sent
                    </>
                  ) : (
                    "Connect"
                  )}
                </Button>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: readonly string[]
}) {
  return (
    <div className="mt-5">
      <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o === "All" ? `All ${label === "County" ? "Counties" : label === "Hospital" ? "Hospitals" : ""}`.trim() : o}
          </option>
        ))}
      </select>
    </div>
  )
}
