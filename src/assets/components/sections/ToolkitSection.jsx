import TechStackSection from "../TechStackSection";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";
import SectionShell from "./SectionShell";

const ToolkitSection = () => {
  return (
    <SectionShell id="toolkit">
      <SectionHeading
        eyebrow="Toolkit"
        title="Tools I reach for daily"
        description="A focused stack that lets me move quickly without sacrificing reliability."
      />
      <SectionReveal className="md:col-span-8">
        <TechStackSection />
      </SectionReveal>
    </SectionShell>
  );
};

export default ToolkitSection;
