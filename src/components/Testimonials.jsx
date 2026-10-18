import testimonials from "../Files/testimonials";

const Testimonials = ({ isDarkMode }) => {
  // Nothing to show yet, so the whole section stays hidden.
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section
      className={`py-16 px-4 sm:px-6 ${
        isDarkMode ? "bg-[#101010] text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What People Say
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <figure
            key={index}
            className={`w-full sm:w-80 rounded-2xl p-6 border-t-4 border-[#6c4ced] shadow-[0_10px_25px_rgba(0,0,0,0.25)] ${
              isDarkMode ? "bg-[#2f2f2f]" : "bg-white"
            }`}
          >
            <blockquote
              className={`leading-relaxed mb-4 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              “{item.text}”
            </blockquote>
            <figcaption>
              <p className="font-semibold text-[#6c4ced]">{item.name}</p>
              {item.role && (
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.role}
                </p>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
