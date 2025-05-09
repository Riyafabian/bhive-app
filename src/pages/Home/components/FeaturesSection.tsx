import { features } from "../../../data";
import { useState } from "react";
import arrowIcon from "../../../assets/icons/Arrow.svg";
import type { FeatureCardProps } from "../../../types";

export default function FeaturesSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="py-0 md:py-10 px-4 md:px-0 container mx-auto mb-16 md:mb-20">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-14 flex justify-between items-center">
        Why Choose us?
        <img
          src={arrowIcon}
          alt={"arrow"}
          className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 block lg:hidden"
        />
      </h2>

      {/* Desktop View */}
      <div className="hidden lg:grid grid-cols-4 gap-0">
        {features.map((feature: FeatureCardProps) => {
          const isHovered = hoveredFeature === feature.id;
          return (
            <div
              key={feature.id}
              className={`
                p-6 relative cursor-pointer ${
                  isHovered ? "bg-white shadow-md" : ""
                }
                transition-all duration-300 h-24
              `}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="flex items-start">
                <div className="text-yellow-500 mr-4">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-8 text-yellow-500"
                  />
                </div>
                <div>
                  <p
                    className={`text-lg font-medium transition-transform duration-300 ${
                      isHovered ? "transform -translate-y-1" : ""
                    }`}
                  >
                    {feature.title}
                  </p>

                  <p
                    className={`text-sm text-gray-500 mt-2 h-4 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-300`}
                  >
                    {"One liner details about the feature"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile View */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:hidden">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-4 rounded-lg shadow-md bg-white flex flex-col items-center text-center"
          >
            <div className="text-yellow-500 mb-2">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-6 h-6 text-yellow-500"
              />
            </div>
            <p className="text-sm font-medium">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
