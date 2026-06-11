const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div className="md:col-span-4">
      {eyebrow ? (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-['Space_Grotesk'] text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
