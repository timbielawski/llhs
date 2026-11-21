import type { Metadata } from "next";
import { Suspense } from "react";
import { InquiryForm } from "@/components/inquiry-form";
import { studio } from "@/lib/content";

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Tell Little Lions Head what the organisation needs to know, and what it should be able to do. A short note is enough to begin.",
};

export default function StartPage() {
  return (
    <div className="shell grid gap-14 pb-20 pt-36 md:grid-cols-[minmax(0,1fr)_280px] md:pt-44">
      <div>
        <p className="kicker text-muted">Start a project</p>
        <h1 className="section-title mt-5 max-w-[12ch]">Bring the problem.</h1>
        <p className="mt-6 max-w-lg text-base leading-7 text-mist">
          What the organisation needs to know, and what it should be able to do
          with that. A few lines are enough. This opens an email to the studio.
        </p>
        <div className="mt-10">
          <Suspense fallback={<p className="text-sm text-muted">Loading the form…</p>}>
            <InquiryForm />
          </Suspense>
        </div>
      </div>
      <aside className="h-fit border-t border-rule pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-16">
        <p className="kicker text-muted">Direct</p>
        <a className="mt-4 block text-lg font-light hover:text-sun" href={`mailto:${studio.email}`}>
          {studio.email}
        </a>
        <p className="mt-8 text-sm leading-7 text-mist">
          {studio.location}. We read every note. If the work is a fit, you will
          hear back with a time to talk.
        </p>
      </aside>
    </div>
  );
}
