import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import banner from "./../../Image/fiche-presentation.jpeg";
import Membresoffestival from "../Membresoffestival";

export default function About() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // Fonction pour formater le texte avec des italiques spécifiques
  const formatText = (text) => {
    if (!text) return text;
    let formattedText = text;
    // Remplacer *texte* par <em>texte</em>
    formattedText = formattedText.replace(
      /\*(.*?)\*/g,
      '<em class="italic">$1</em>',
    );
    // Remplacer Spicomellus afer par sa version en italique (si non déjà fait)
    formattedText = formattedText.replace(
      /Spicomellus afer/g,
      '<em class="italic">Spicomellus afer</em>',
    );
    return formattedText;
  };

  return (
    <div className="bg-orange-100/20">
      <div className="pt-30 pb-10 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-start ${isArabic ? "text-right" : "text-left"}`}
        >
          <h1 className="text-7xl max-w-lg font-bold text-[#ac5f2d]">
            {t("a_propos_du_festival")}
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl">
            {t("a_propos_description")}
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col md:flex-row items-start gap-10">
          <motion.img
            src={banner}
            alt={t("presentation_festival")}
            className="w-full md:w-1/2 mt-20 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-[#006e6d]">
              {t("presentation_festival")}
            </h2>
            <div
              className={`mt-4 text-gray-700 text-justify leading-relaxed ${isArabic ? "font-arabic" : ""}`}
              style={
                isArabic
                  ? {
                      fontFamily: "'Noto Sans Arabic', sans-serif",
                      lineHeight: "1.8",
                    }
                  : {}
              }
              dangerouslySetInnerHTML={{
                __html: formatText(t("presentation_texte")),
              }}
            />
          </motion.div>
        </div>
      </div>
      <div className="mt-">
        <Membresoffestival />
      </div>
    </div>
  );
}
