import { ArrowUpRight, MessageCircle } from "lucide-react";
import SectionShell from "./SectionShell";

const TelegramCtaSection = () => {
  return (
    <SectionShell className="py-12 md:py-14">
      <div className="md:col-span-12">
        <div className="flex flex-col gap-5 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">Prefer quick updates?</p>
            <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">Join my Telegram devlog channel.</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
              I share build-in-public updates, shipping notes, and lessons from real client work. Short and useful, no spam.
            </p>
          </div>
          <a
            href="https://t.me/devlogs_by_billy"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 self-start rounded-xl bg-[#2AABEE] px-5 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#62c2f4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2AABEE] focus-visible:ring-offset-2 focus-visible:ring-offset-black md:self-auto"
          >
            <MessageCircle size={16} />
            Join my Telegram
            <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </SectionShell>
  );
};

export default TelegramCtaSection;
