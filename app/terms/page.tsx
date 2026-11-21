import type { Metadata } from "next";
import { studio } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the Little Lions Head Studios website.",
};

export default function TermsPage() {
  return (
    <article className="shell max-w-3xl pb-24 pt-36 md:pt-44">
      <p className="kicker text-muted">Studio</p>
      <h1 className="section-title mt-5">Terms.</h1>
      <div className="mt-10 space-y-6 text-base leading-8 text-mist">
        <p>
          This website describes {studio.name}. It is an introduction, not an
          offer and not a contract. Work begins when both sides agree in
          writing.
        </p>
        <p>
          Until that agreement exists, ideas you send us stay yours, and the
          writing, design, and mark on this site stay ours. Please do not copy
          the site or the mark for another business.
        </p>
        <p>
          Use the site in good faith. Do not attempt to break it, scrape it in
          a way that gets in the way of other people, or send anything unlawful.
        </p>
        <p>
          The studio is based in {studio.location}. Questions about these terms
          can go to{" "}
          <a className="text-ink underline decoration-white/30 underline-offset-4" href={`mailto:${studio.email}`}>
            {studio.email}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
