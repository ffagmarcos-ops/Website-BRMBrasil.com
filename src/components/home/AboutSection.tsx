"use client";

import React from "react";
import { Users, FolderCheck, Award, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { aboutStats, aboutContent } from "@/data/about";

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <Users className="w-6 h-6 text-[#0754A6]" />;
      case "folder-check":
        return <FolderCheck className="w-6 h-6 text-[#0754A6]" />;
      case "award":
        return <Award className="w-6 h-6 text-[#0754A6]" />;
      case "map-pin":
      default:
        return <MapPin className="w-6 h-6 text-[#0754A6]" />;
    }
  };

  return (
    <section className="bg-[#F5F7FA] py-16 border-b border-brm-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Logo & Text */}
          <div className="lg:col-span-6 space-y-5">
            <div className="mb-2">
              <Logo width={210} height={50} />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brm-navy">
              {aboutContent.title}
            </h2>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>{aboutContent.paragraph1}</p>
              <p>{aboutContent.paragraph2}</p>
            </div>
          </div>

          {/* Right Column: 4 Stat Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {aboutStats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white rounded-xl p-5 border border-brm-border shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center space-y-2 group"
              >
                <div className="p-3 rounded-full bg-blue-50 group-hover:bg-[#0754A6]/10 transition-colors">
                  {getIcon(stat.iconName)}
                </div>
                <div className="text-2xl sm:text-3xl font-black font-heading text-brm-navy">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-gray-600 font-heading">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
