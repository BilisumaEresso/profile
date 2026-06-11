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
          My default approach is simple: make it fast, make it clear, then make
          it feel great.
        </p>

        <div className="grid gap-7 pt-2 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
            <h3 className="text-lg font-semibold text-white">
              Cross-platform mobile
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              React Native and Expo for iOS & Android, with offline-ready
              architecture and optimized performance across devices.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
            <h3 className="text-lg font-semibold text-white">
              Startup execution
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              End-to-end ownership from architecture to deployment, currently
              building OmishGO as sole technical founder.
            </p>
          </div>
        </div>
      </SectionReveal>
    </SectionShell>
  );
};

export default ManifestoSection;
