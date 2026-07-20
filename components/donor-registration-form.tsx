"use client"

import { useState } from "react"
import { Check, ChevronLeft, ChevronRight, Droplet, PartyPopper } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BLOOD_TYPES, COUNTIES } from "@/lib/data"

const STEPS = ["Personal", "Blood Details", "Health Check"] as const

const HEALTH_QUESTIONS = [
  "I am between 16 and 65 years old",
  "I weigh at least 50 kg (110 lbs)",
  "I have not donated blood in the last 3 months",
  "I am feeling healthy and well today",
  "I have not had a tattoo or piercing in the last 6 months",
]

export function DonorRegistrationForm() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    bloodType: "",
    county: "",
    lastDonation: "",
  })
  const [checks, setChecks] = useState<boolean[]>(Array(HEALTH_QUESTIONS.length).fill(false))

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }))

  const step0Valid = form.fullName && form.email && form.phone
  const step1Valid = form.bloodType && form.county
  const allChecked = checks.every(Boolean)

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center">
        <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-success/10 text-success">
          <PartyPopper className="size-8" />
        </span>
        <h2 className="mt-6 text-2xl font-bold text-foreground">You&apos;re registered!</h2>
        <p className="mx-auto mt-3 max-w-md text-pretty text-muted-foreground">
          Thank you, {form.fullName.split(" ")[0] || "donor"}. Your profile is active. We&apos;ll
          alert you when a patient near {form.county || "you"} needs your{" "}
          <span className="font-semibold text-primary">{form.bloodType}</span> blood.
        </p>
        <Button
          size="lg"
          variant="outline"
          className="mt-6"
          onClick={() => {
            setSubmitted(false)
            setStep(0)
            setForm({
              fullName: "",
              email: "",
              phone: "",
              bloodType: "",
              county: "",
              lastDonation: "",
            })
            setChecks(Array(HEALTH_QUESTIONS.length).fill(false))
          }}
        >
          Register another donor
        </Button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      {/* Stepper */}
      <ol className="flex items-center">
        {STEPS.map((label, i) => (
          <li key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex items-center gap-2.5">
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                  i < step
                    ? "bg-success text-success-foreground"
                    : i === step
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground",
                )}
              >
                {i < step ? <Check className="size-4" /> : i + 1}
              </span>
              <span
                className={cn(
                  "hidden text-sm font-medium sm:block",
                  i === step ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <span
                className={cn(
                  "mx-3 h-0.5 flex-1 rounded",
                  i < step ? "bg-success" : "bg-border",
                )}
              />
            )}
          </li>
        ))}
      </ol>

      <div className="mt-8">
        {step === 0 && (
          <div className="space-y-5">
            <Field label="Full Name">
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => set("fullName")(e.target.value)}
                placeholder="e.g. Amina Wanjiru"
                className={inputClass}
              />
            </Field>
            <Field label="Email Address">
              <input
                type="email"
                value={form.email}
                onChange={(e) => set("email")(e.target.value)}
                placeholder="you@example.com"
                className={inputClass}
              />
            </Field>
            <Field label="Phone Number">
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => set("phone")(e.target.value)}
                placeholder="+254 7XX XXX XXX"
                className={inputClass}
              />
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-5">
            <Field label="Blood Type">
              <div className="grid grid-cols-4 gap-2">
                {BLOOD_TYPES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => set("bloodType")(t)}
                    className={cn(
                      "rounded-lg border py-2.5 text-sm font-bold transition-colors",
                      form.bloodType === t
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-primary/40 hover:text-primary",
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="County">
              <select
                value={form.county}
                onChange={(e) => set("county")(e.target.value)}
                className={inputClass}
              >
                <option value="" disabled>
                  Select your county
                </option>
                {COUNTIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Last Donation Date (optional)">
              <input
                type="date"
                value={form.lastDonation}
                onChange={(e) => set("lastDonation")(e.target.value)}
                className={inputClass}
              />
            </Field>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-sm text-muted-foreground">
              Please confirm each statement to check your eligibility to donate safely.
            </p>
            <div className="mt-4 space-y-2.5">
              {HEALTH_QUESTIONS.map((q, i) => (
                <label
                  key={q}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-sm transition-colors",
                    checks[i]
                      ? "border-primary/40 bg-primary/5 text-foreground"
                      : "border-border bg-background text-foreground hover:bg-secondary",
                  )}
                >
                  <input
                    type="checkbox"
                    checked={checks[i]}
                    onChange={(e) =>
                      setChecks((c) => c.map((v, idx) => (idx === i ? e.target.checked : v)))
                    }
                    className="sr-only"
                  />
                  <span
                    className={cn(
                      "flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors",
                      checks[i]
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background",
                    )}
                  >
                    {checks[i] && <Check className="size-3.5" />}
                  </span>
                  {q}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Nav buttons */}
      <div className="mt-8 flex items-center justify-between gap-3">
        <Button
          variant="ghost"
          size="lg"
          className="gap-1.5"
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
        >
          <ChevronLeft className="size-4" />
          Back
        </Button>

        {step < STEPS.length - 1 ? (
          <Button
            size="lg"
            className="gap-1.5"
            disabled={(step === 0 && !step0Valid) || (step === 1 && !step1Valid)}
            onClick={() => setStep((s) => s + 1)}
          >
            Continue
            <ChevronRight className="size-4" />
          </Button>
        ) : (
          <Button
            size="lg"
            className="gap-1.5"
            disabled={!allChecked}
            onClick={() => setSubmitted(true)}
          >
            <Droplet className="size-4" />
            Complete Registration
          </Button>
        )}
      </div>
    </div>
  )
}

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-foreground">{label}</label>
      {children}
    </div>
  )
}
