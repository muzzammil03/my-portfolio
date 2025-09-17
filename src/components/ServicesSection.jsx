import { useState } from "react";
import servicesData from "../Files/serviceProvide";
import { motion } from "framer-motion";
function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  const openModal = (service) => {
    setActiveService(service);
  };

  const closeModal = () => {
    setActiveService(null);
  };

  return (<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="...your hero classes"
>
    <section className="py-16 px-4 text-center relative">
      <div className="w-full h-[6px] mb-36 bg-[#6c4ced]" />

      <h2 className="text-3xl font-bold mb-10 mt-20">The Services I Offer</h2>

      <div className="flex flex-wrap justify-center gap-8 mb-32">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-[#2f2f2f]
               border-t-2 border-b-2 border-transparent 
               rounded-2xl p-6 w-80 
               transition-shadow duration-300 
               shadow-[0_10px_25px_rgba(0,0,0,0.3)] 
               hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
            >
              <div className="text-6xl flex items-center justify-center text-[#6c4ced] mb-4">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {service.shortDescription}
              </p>
              <button
                onClick={() => openModal(service)}
                className="bg-[#6c4ced] hover:bg-[#424075] text-white py-2 px-4 rounded-lg transition"
              >
                Know More
              </button>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {activeService && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl w-96 relative shadow-xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-4xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              {activeService.title}
            </h3>

            <ul className="text-left space-y-2">
              {activeService.details.map((point, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300">
                  • {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="w-full h-[6px] mt-36 bg-[#6c4ced]" />
    </section></motion.div>
  );
}

export default ServicesSection;
