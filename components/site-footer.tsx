import Link from "next/link"
import { Droplet, Phone } from "lucide-react"

const NAV = [
  { href: "/find-blood", label: "Find Blood" },
  { href: "/become-donor", label: "Become a Donor" },
  { href: "/hospital-partners", label: "Hospital Partners" },
]

const RESOURCES = [
  { href: "/become-donor", label: "Donation Eligibility" },
  { href: "/find-blood", label: "Urgent Requests" },
  { href: "/hospital-partners", label: "Partner Hospitals" },
]

const HELPLINES = [
  { label: "KNBTS National Line", number: "0709 819 000" },
  { label: "Emergency Blood Desk", number: "0800 720 500" },
  { label: "Nairobi Regional Centre", number: "020 271 7077" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Droplet className="size-5 fill-current" />
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Blood<span className="text-primary">Links</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Connecting voluntary blood donors with patients in urgent need across
              Kenya&apos;s major hospitals.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Platform</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-2.5">
              {RESOURCES.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Emergency Helplines</h3>
            <ul className="mt-4 space-y-3">
              {HELPLINES.map((h) => (
                <li key={h.label} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="size-3.5" />
                  </span>
                  <span className="flex flex-col">
                    <a
                      href={`tel:${h.number.replace(/\s/g, "")}`}
                      className="text-sm font-semibold text-foreground hover:text-primary"
                    >
                      {h.number}
                    </a>
                    <span className="text-xs text-muted-foreground">{h.label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} BloodLinks Kenya. All rights reserved.</p>
          <p>
            In partnership with the Kenya National Blood Transfusion Service (KNBTS).
          </p>
        </div>
      </div>
    </footer>
  )
}
