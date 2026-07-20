import type { Metadata } from "next"
import { Gift, HeartPulse, ShieldCheck, Coffee, Activity, CalendarClock } from "lucide-react"
import { DonorRegistrationForm } from "@/components/donor-registration-form"

export const metadata: Metadata = {
  title: "Become a Donor | BloodLinks Kenya",
  description:
    "Register as a blood donor in minutes. Review eligibility requirements and the benefits of donating blood in Kenya.",
}

const BENEFITS = [
  {
    icon: Gift,
    title: "Save Up to 3 Lives",
    body: "A single donation can be separated into components that help multiple patients.",
  },
  {
    icon: HeartPulse,
    title: "Free Health Check",
    body: "Every donation includes a mini screening of your blood pressure, pulse and haemoglobin.",
  },
  {
    icon: Activity,
    title: "Boost Your Wellbeing",
    body: "Regular donation supports healthy blood flow and helps you monitor your own health.",
  },
  {
    icon: ShieldCheck,
    title: "Priority Access",
    body: "Registered donors receive priority support should they or family ever need blood.",
  },
]

const REQUIREMENTS = [
  { icon: CalendarClock, text: "Aged between 16 and 65 years" },
  { icon: Activity, text: "Weigh at least 50 kg (110 lbs)" },
  { icon: HeartPulse, text: "In good general health, free of infection" },
  { icon: Coffee, text: "Well rested and hydrated, having eaten a meal" },
  { icon: CalendarClock, text: "At least 3 months since your last donation" },
]

export default function BecomeDonorPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Become a Blood Donor
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-lg text-muted-foreground">
            Join Kenya&apos;s network of life-savers. Registration takes just a few minutes and
            connects you with patients who need your blood type.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* Form */}
          <div>
            <DonorRegistrationForm />
          </div>

          {/* Info column */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground">Why Donate?</h2>
              <ul className="mt-4 space-y-4">
                {BENEFITS.map((b) => (
                  <li key={b.title} className="flex gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <b.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{b.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                        {b.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground">Health Requirements</h2>
              <ul className="mt-4 space-y-3">
                {REQUIREMENTS.map((r) => (
                  <li key={r.text} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                      <r.icon className="size-4" />
                    </span>
                    {r.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
