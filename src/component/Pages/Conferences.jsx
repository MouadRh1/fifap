import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

import djillaliHadjouis from "../../Image/Djillali-Hadjouis.png";
import youssefBokbot from "../../Image/Youssef-Bokbot.png";
import drissOuarhache from "../../Image/Driss-Ouarhache.png";

const Conferences = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const conferences = [
    {
      id: 1,
      title: t("conf1_title"),
      subtitle: t("conf1_subtitle"),
      speaker: t("conf1_speaker"),
      speakerRole: t("conf1_speakerRole"),
      image: djillaliHadjouis,
      description: t("conf1_description"),
      date: "Mercredi 10 Juin 2026",
      time: "10:00",
      place: "Cinéma Renaissance",
    },
    {
      id: 2,
      title: t("conf2_title"),
      subtitle: t("conf2_subtitle"),
      speaker: t("conf2_speaker"),
      speakerRole: t("conf2_speakerRole"),
      image: youssefBokbot,
      description: t("conf2_description"),
      date: "Jeudi 11 Juin 2026",
      time: "10:00",
      place: "Cinéma Renaissance",
    },
    {
      id: 3,
      title: t("conf3_title"),
      subtitle: t("conf3_subtitle"),
      speaker: t("conf3_speaker"),
      speakerRole: t("conf3_speakerRole"),
      image: drissOuarhache,
      description: t("conf3_description"),
      date: "Vendredi 12 Juin 2026",
      time: "10:00",
      place: "Cinéma Renaissance",
    },
  ];

  return (
    <div className="py-20 bg-orange-100/30" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#ac5f2d] mb-12"
        >
          {t("conferences")}
        </motion.h1>

        <div className="space-y-16">
          {conferences.map((conf, index) => (
            <motion.div
              key={conf.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                isArabic ? "border-r-8 border-r-[#ac5f2d]" : "border-l-8 border-l-[#ac5f2d]"
              }`}
            >
              <div className="p-6 md:p-8">
                {/* En-tête avec image et titre */}
                <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                  {conf.image && (
                    <img
                      src={conf.image}
                      alt={conf.speaker}
                      className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-[#ac5f2d]/30"
                    />
                  )}
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      {conf.title}
                    </h2>
                    {conf.subtitle && (
                      <h3 className="text-xl text-[#ac5f2d] font-semibold mb-3">
                        {conf.subtitle}
                      </h3>
                    )}
                    <div
                      className={`${
                        isArabic
                          ? "border-r-4 border-r-[#ac5f2d] pr-4"
                          : "border-l-4 border-l-[#ac5f2d] pl-4"
                      } mt-3`}
                    >
                      <p className="text-lg font-semibold text-gray-700">
                        {t("by")} {conf.speaker}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {conf.speakerRole}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Date, heure et lieu */}
                <div className="flex flex-wrap gap-6 mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCalendarAlt className="text-[#ac5f2d]" />
                    <span>{conf.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaClock className="text-[#ac5f2d]" />
                    <span>{conf.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaMapMarkerAlt className="text-[#ac5f2d]" />
                    <span>{conf.place}</span>
                  </div>
                </div>

                {/* Description avec dangerouslySetInnerHTML */}
                <div
                  className={`text-gray-600 leading-relaxed whitespace-pre-line mt-6 ${
                    isArabic ? "text-right" : "text-justify"
                  }`}
                  dangerouslySetInnerHTML={{ __html: conf.description }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conferences;