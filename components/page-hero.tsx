export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="shell pb-14 pt-36 md:pb-20 md:pt-44">
      <p className="kicker text-muted">{kicker}</p>
      <h1 className="display mt-6 max-w-[12ch]">{title}</h1>
      <p className="mt-8 max-w-[38ch] text-lg font-light leading-relaxed text-mist md:text-xl">
        {lede}
      </p>
    </header>
  );
}
