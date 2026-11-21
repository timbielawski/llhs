import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell pb-28 pt-40">
      <p className="kicker text-muted">404</p>
      <h1 className="display mt-6 max-w-[10ch]">Off the ridge.</h1>
      <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-mist">
        That page is not on the map. The practice is still here.
      </p>
      <Link href="/" className="action mt-8 inline-flex">
        Back to the studio
      </Link>
    </div>
  );
}
