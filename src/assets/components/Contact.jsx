import { useState } from "react";
import { Send, ArrowUpRight } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

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
    <div className="flex-grow flex flex-col items-center justify-start w-full px-4 sm:px-6 md:px-8 max-w-5xl mx-auto py-16 lg:py-24">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full">
        {/* Left Side - Typography & Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white font-['Space_Grotesk'] mb-6 leading-[1.1]">
            Let's start a <br />
            <span className="text-neutral-500">conversation.</span>
          </h1>

          <p className="text-lg text-neutral-400 mb-12 max-w-md font-light leading-relaxed">
            Have a project in mind, a question, or just want to say hi? I'm always open to discussing new opportunities and ideas.
          </p>

          <div className="space-y-6 mt-auto">
            <div>
              <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-2">Email</h3>
              <a href="mailto:bilisumaere@gmail.com" className="text-xl text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group">
                bilisumaere@gmail.com
                <ArrowUpRight size={20} className="text-neutral-600 group-hover:text-emerald-400 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
            <div>
              <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-2">Socials</h3>
              <div className="flex gap-6">
                <a href="https://github.com/bilisumaeresso" target="_blank" rel="noreferrer" className="text-white hover:text-emerald-400 transition-colors text-lg">GitHub</a>
                <a href="https://linkedin.com/in/bilisuma-eresso" target="_blank" rel="noreferrer" className="text-white hover:text-emerald-400 transition-colors text-lg">LinkedIn</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 sm:p-10"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
                className="w-full bg-neutral-950/50 border-b border-neutral-700 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors disabled:opacity-50 font-light"
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
                className="w-full bg-neutral-950/50 border-b border-neutral-700 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors disabled:opacity-50 font-light"
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
                className="w-full bg-neutral-950/50 border-b border-neutral-700 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors disabled:opacity-50 resize-none font-light"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full flex items-center justify-between px-6 py-4 bg-white text-black rounded-xl font-semibold hover:bg-neutral-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              <Send size={18} className={`transition-transform ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-1"}`} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
