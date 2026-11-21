import Image from "next/image";

export function Mark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/mark-on-dark.png"
      alt=""
      width={1304}
      height={1088}
      className={className}
      priority
    />
  );
}

export function Lockup({
  tone = "light",
  className = "",
  priority = false,
}: {
  tone?: "light" | "ink";
  className?: string;
  priority?: boolean;
}) {
  const light = tone === "light";

  return (
    <Image
      src={light ? "/logo-light.png" : "/logo.png"}
      alt="Little Lions Head Studios"
      width={1560}
      height={1392}
      className={className}
      priority={priority}
    />
  );
}
