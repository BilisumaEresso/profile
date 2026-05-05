import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";
import SectionShell from "./SectionShell";

const ManifestoSection = () => {
  return (
    <SectionShell id="work">
      <SectionHeading
        eyebrow="How I work"
        title="Practical engineering, thoughtful product decisions."
        description="I care about performance, clarity, and building features that solve real user problems."
      />

      <SectionReveal className="space-y-8 md:col-span-8">
        <p className="max-w-3xl text-2xl font-light leading-snug tracking-tight text-neutral-200 md:text-3xl">
          My default approach is simple: make it fast, make it clear, then make it feel great.
        </p>

        <div className="grid gap-7 pt-2 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
            <h3 className="text-lg font-semibold text-white">Engineering</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              I prefer maintainable architecture, predictable data flow, and code that your future team can read in one pass.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
            <h3 className="text-lg font-semibold text-white">Product thinking</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Before shipping UI, I focus on hierarchy and interaction details so users always know what to do next.
            </p>
          </div>
        </div>
      </SectionReveal>
    </SectionShell>
  );
};

export default ManifestoSection;
