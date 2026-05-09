import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import joudia from "../Image/joudia-hassar.png";
import chorfi from "../Image/chorfi-abde.jpeg";

export default function FestivalHommage() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <motion.div
      className="py-25 max-w-7xl mx-auto bg-orange-100/20 rounded-2xl overflow-hidden p-8 flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Titre */}
      <div className="text-center mb-6">
        <h2 className="text-4xl py-2 font-bold text-[#ac5d2f]">{t("hommage")}</h2>
        <p className="font-semibold">{t("hommage_sous_titre")}</p>
      </div>

      {/* Images côte à côte - Style portrait */}
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {/* Image Joudia */}
        <motion.div
          className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative pb-[120%] md:pb-[130%] bg-gradient-to-b from-amber-100 to-orange-100">
            <img
              src={joudia}
              alt="Joudia Hassar-Benslimane"
              className="absolute top-0 left-0 w-full h-full object-cover object-top"
            />
          </div>
          <div className="p-4 text-center bg-gradient-to-r from-[#ac5d2f]/5 to-[#ac5d2f]/10">
            <p className="font-bold text-[#ac5d2f] text-lg">
              JOUDIA HASSAR-BENSLIMANE
            </p>
            <p className="text-sm text-gray-500">(1943-2018)</p>
          </div>
        </motion.div>

        {/* Image Chorfi */}
        <motion.div
          className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative pb-[120%] md:pb-[130%] bg-gradient-to-b from-amber-100 to-orange-100">
            <img
              src={chorfi}
              alt="Abderrahmane Chorfi"
              className="absolute top-0 left-0 w-full h-full object-cover object-top"
            />
          </div>
          <div className="p-4 text-center bg-gradient-to-r from-[#ac5d2f]/5 to-[#ac5d2f]/10">
            <p className="font-bold text-[#ac5d2f] text-lg">
              ABDERRAHMANE CHORFI
            </p>
            <p className="text-sm text-gray-500">(1948-2026)</p>
          </div>
        </motion.div>
      </div>

      {/* Texte justifié et centré */}
      <motion.div 
        className={`max-w-5xl mx-auto text-gray-700 text-justify leading-relaxed mt-8 ${isArabic ? "font-arabic" : ""}`}
        style={isArabic ? { fontFamily: "'Noto Sans Arabic', sans-serif", lineHeight: "1.8" } : {}}
      >
        {/* Hommage à Joudia Hassar-Benslimane */}
        <h3 className="text-2xl font-bold text-[#ac5d2f] mb-4 mt-6">
          {t("hommage_joudia_titre")}
        </h3>
        <p>{t("hommage_joudia_p1")}</p>
        <p className="mt-4">{t("hommage_joudia_p2")}</p>
        <p className="mt-4">{t("hommage_joudia_p3")}</p>
        <p className="mt-4">{t("hommage_joudia_p4")}</p>
        <p className="mt-4">{t("hommage_joudia_p5")}</p>
        <p className="mt-4">{t("hommage_joudia_p6")}</p>
        <p className="mt-4 italic font-semibold">{t("hommage_joudia_conclusion")}</p>

        {/* Hommage à Abderrahmane Chorfi */}
        <h3 className="text-2xl font-bold text-[#ac5d2f] mb-4 mt-10">
          {t("hommage_chorfi_titre")}
        </h3>
        <p>{t("hommage_chorfi_p1")}</p>
        <p className="mt-4">{t("hommage_chorfi_p2")}</p>
        <p className="mt-4">{t("hommage_chorfi_p3")}</p>
        <p className="mt-4">{t("hommage_chorfi_p4")}</p>
        <p className="mt-4">{t("hommage_chorfi_p5")}</p>
        <p className="mt-4">{t("hommage_chorfi_p6")}</p>
        <p className="mt-4 italic font-semibold">{t("hommage_chorfi_conclusion")}</p>
      </motion.div>
    </motion.div>
  );
}