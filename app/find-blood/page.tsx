import type { Metadata } from "next"
import { FindBloodBrowser } from "@/components/find-blood-browser"

export const metadata: Metadata = {
  title: "Find Blood | BloodLinks Kenya",
  description:
    "Browse and filter urgent blood requests by blood type, county, and hospital across Kenya. Connect with patients in need.",
}

export default function FindBloodPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Urgent Blood Requests
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-lg text-muted-foreground">
            Real-time requests from patients across Kenyan hospitals. Filter by blood type,
            county, or hospital to find where you can help right now.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <FindBloodBrowser />
      </section>
    </div>
  )
}
