const SectionShell = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`w-full py-16 md:py-20 ${className}`}>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
        {children}
      </div>
      <div className="section-divider mt-8" />
    </section>
  );
};

export default SectionShell;
