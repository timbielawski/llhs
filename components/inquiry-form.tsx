"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { services, studio } from "@/lib/content";

const interests = [
  ...services.map((service) => service.title),
  "Not sure yet",
];

export function InquiryForm() {
  const params = useSearchParams();
  const preset = params.get("interest") ?? "";
  const initial = interests.includes(preset) ? preset : preset ? "Not sure yet" : "";
  const [interest, setInterest] = useState(initial);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const roleNote = useMemo(() => {
    if (!preset || interests.includes(preset)) return "";
    return preset;
  }, [preset]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organisation = String(data.get("organisation") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const chosen = String(data.get("interest") ?? "").trim();

    if (!name || !email || !message) {
      setError("Name, email, and a short note are required.");
      return;
    }

    const subject = encodeURIComponent(
      roleNote ? `${roleNote} — ${studio.short}` : `A brief for ${studio.short}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        organisation ? `Organisation: ${organisation}` : "",
        chosen ? `Interest: ${chosen}` : "",
        roleNote ? `Role: ${roleNote}` : "",
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    setError("");
    setSent(true);
    window.location.href = `mailto:${studio.email}?subject=${subject}&body=${body}`;
  }

  if (sent) {
    return (
      <div className="border-t border-rule py-10">
        <p className="kicker text-sun">Ready to send</p>
        <h2 className="mt-4 text-4xl font-extralight tracking-[-0.04em]">
          Your email is open.
        </h2>
        <p className="mt-4 max-w-md text-base leading-7 text-mist">
          If it did not appear, write to{" "}
          <a className="action" href={`mailto:${studio.email}`}>
            {studio.email}
          </a>
          . A few lines are enough.
        </p>
      </div>
    );
  }

  return (
    <form className="inquiry" onSubmit={onSubmit} noValidate>
      <div className="grid gap-x-10 md:grid-cols-2">
        <label className="block">
          <span className="kicker text-muted">Name</span>
          <input className="field" name="name" type="text" autoComplete="name" required />
        </label>
        <label className="block">
          <span className="kicker text-muted">Email</span>
          <input className="field" name="email" type="email" autoComplete="email" required />
        </label>
        <label className="block">
          <span className="kicker text-muted">Organisation</span>
          <input className="field" name="organisation" type="text" autoComplete="organization" />
        </label>
        <label className="block">
          <span className="kicker text-muted">Interest</span>
          <select
            className="field"
            name="interest"
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
          >
            <option value="">Select</option>
            {interests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-2 block">
        <span className="kicker text-muted">
          {roleNote ? `About the ${roleNote} role` : "The brief"}
        </span>
        <textarea
          className="field"
          name="message"
          required
          placeholder="What should the organisation be able to decide?"
        />
      </label>
      {error ? <p className="mt-4 text-sm text-coral">{error}</p> : null}
      <button
        type="submit"
        className="mt-8 inline-flex items-center justify-between gap-10 border border-ink px-5 py-4 text-sm font-light transition-colors hover:bg-ink hover:text-canvas"
      >
        Send the brief
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}
