import { useState } from "react";
import { Send, ArrowUpRight } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import SectionHeading from "./sections/SectionHeading";
import SectionShell from "./sections/SectionShell";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formspreeEndpoint = "https://formspree.io/f/xgozreej";
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <SectionShell id="contact" className="border-b-0 pb-0">
      <SectionHeading
        eyebrow="Contact"
        title="Start a project"
        description="Got a product idea, feature request, or redesign in mind? Send details and I will reply with a practical next step."
      />

      <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 md:col-span-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Let us talk through it.
          </h3>

          <p className="mb-10 mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
            I usually respond with a scoped plan, timeline estimate, and tradeoffs instead of vague promises.
          </p>

          <div className="space-y-6 mt-auto">
            <div>
              <h3 className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-500">Email</h3>
              <a href="mailto:bilisumaere@gmail.com" className="group inline-flex items-center gap-2 text-lg text-white transition-colors hover:text-emerald-400">
                bilisumaere@gmail.com
                <ArrowUpRight size={20} className="text-neutral-600 group-hover:text-emerald-400 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-500">Socials</h3>
              <div className="flex gap-6">
                <a href="https://github.com/bilisumaeresso" target="_blank" rel="noreferrer" className="text-base text-white transition-colors hover:text-emerald-400">GitHub</a>
                <a href="https://linkedin.com/in/bilisuma-eresso" target="_blank" rel="noreferrer" className="text-base text-white transition-colors hover:text-emerald-400">LinkedIn</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-neutral-400">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-lg border border-neutral-700 bg-neutral-950/60 px-3 py-2.5 text-white transition-colors focus:border-white focus:outline-none disabled:opacity-50"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-neutral-400">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-lg border border-neutral-700 bg-neutral-950/60 px-3 py-2.5 text-white transition-colors focus:border-white focus:outline-none disabled:opacity-50"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-neutral-400">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                disabled={isSubmitting}
                className="w-full resize-none rounded-lg border border-neutral-700 bg-neutral-950/60 px-3 py-2.5 text-white transition-colors focus:border-white focus:outline-none disabled:opacity-50"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-3 flex w-full items-center justify-between rounded-xl bg-white px-5 py-3.5 text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              <Send size={18} className={`transition-transform ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-1"}`} />
            </button>
          </form>
        </motion.div>
      </div>
    </SectionShell>
  );
};

export default Contact;
