import type { Metadata } from "next";
import { studio } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Little Lions Head Studios handles notes sent through this website.",
};

export default function PrivacyPage() {
  return (
    <article className="shell max-w-3xl pb-24 pt-36 md:pt-44">
      <p className="kicker text-muted">Studio</p>
      <h1 className="section-title mt-5">Privacy.</h1>
      <div className="mt-10 space-y-6 text-base leading-8 text-mist">
        <p>
          {studio.name} is based in {studio.location}. This page describes the
          website only. Project agreements, when there is one, say how we handle
          the work itself.
        </p>
        <p>
          The inquiry form does not store what you type on a server. Sending it
          opens an email to {studio.email} from your own mail app. We receive
          whatever you choose to send, and we keep that correspondence so we can
          reply and do the work.
        </p>
        <p>
          We do not sell personal information, and this site does not use
          advertising trackers. If the site is hosted, the host may keep
          ordinary technical logs such as an address and a time, the way any
          web server does.
        </p>
        <p>
          You can ask us to delete a conversation by writing to{" "}
          <a className="text-ink underline decoration-white/30 underline-offset-4" href={`mailto:${studio.email}`}>
            {studio.email}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
