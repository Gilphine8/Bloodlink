import Link from "next/link";
import Image from "next/image";
import {
  Droplet,
  HeartHandshake,
  Hospital,
  Search,
  UserPlus,
  Bell,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const STATS = [
  { value: "12", label: "Major Partner Hospitals" },
  { value: "45", label: "Active Requests Today" },
  { value: "8,300+", label: "Registered Donors" },
  { value: "47", label: "Counties Covered" },
];

const STEPS = [
  {
    icon: UserPlus,
    title: "Register as a Donor",
    body: "Create your donor profile with your blood type and county so hospitals can reach you when it matters.",
  },
  {
    icon: Bell,
    title: "Get Matched Instantly",
    body: "Receive alerts for urgent requests near you that match your blood type, or search live patient requests.",
  },
  {
    icon: HeartHandshake,
    title: "Donate & Save a Life",
    body: "Connect with the requesting hospital, confirm your visit, and give the gift of life to a Kenyan in need.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              <Droplet className="size-3.5 fill-current" />
              Kenya&apos;s Blood Donor Network
            </span>
            <h1 className="mt-5 text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Connecting Donors,{" "}
              <span className="text-primary">Saving Kenyan Lives</span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Every two seconds someone needs blood. BloodLinks bridges the gap
              between willing donors and patients in urgent need across major
              hospitals in Nairobi, Mombasa, Kisumu and beyond.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                href="/find-blood"
                className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-red-600 text-white hover:bg-red-700 h-11 px-8 text-sm gap-2"
              >
                Request Blood
              </Link>

              <Link
                href="/become-donor"
                className="inline-flex items-center justify-center rounded-md font-medium transition-colors border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 h-11 px-8 text-sm gap-2"
              >
                Donate Now
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="size-4 text-success" />
              Verified in partnership with the Kenya National Blood Transfusion
              Service
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl ring-1 ring-border shadow-xl">
              <Image
                src="/hero-donation.png"
                alt="A Kenyan blood donor giving blood while a nurse attends in a modern clinic"
                width={720}
                height={560}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl bg-card p-4 shadow-lg ring-1 ring-border sm:flex">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <HeartHandshake className="size-6" />
              </span>
              <div>
                <p className="text-lg font-bold leading-none text-foreground">
                  1,240
                </p>
                <p className="text-xs text-muted-foreground">
                  Lives saved this year
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How BloodLinks Works
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            A simple, transparent process that gets blood to patients faster —
            for both donors and those in need.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-7"
            >
              <span className="absolute right-6 top-6 text-5xl font-bold text-secondary">
                {i + 1}
              </span>
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <step.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <Hospital className="mx-auto size-10 opacity-90" />
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Your blood type could be the one someone is searching for right now
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-primary-foreground/85">
            Join thousands of Kenyans making a difference. It only takes a few
            minutes to register and could save up to three lives.
          </p>
          <div className="mt-8 flex flex-col justify-center sm:flex-row gap-4">
            <Link
              href="/become-donor"
              className="inline-flex items-center justify-center rounded-md font-medium text-sm transition-colors bg-red-600 text-white shadow hover:bg-red-700 h-10 px-6"
            >
              Register as a Donor
            </Link>
            <Link
              href="/find-blood"
              className="inline-flex items-center justify-center rounded-md font-medium text-sm transition-colors border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 h-10 px-6"
            >
              Find Blood Requests
            </Link>
            return (
            <div className="min-h-screen bg-background text-foreground">)</div>
          </div>
        </div>
      </section>
    </div>
  );
}
