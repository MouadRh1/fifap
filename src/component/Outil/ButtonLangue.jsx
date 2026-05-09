// src/component/Outil/ButtonLangue.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";

export default function ButtonLangue() {
  const { i18n } = useTranslation();
  const { language, changeLanguage } = useLanguage();

  const handleChangeLanguage = (lng) => {
    changeLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 items-center">
      <motion.button
        onClick={() => handleChangeLanguage("fr")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-3 py-1.5 rounded-lg font-semibold transition-all duration-200 ${
          language === "fr"
            ? "bg-[#ac5f2d] text-white shadow-md"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        FR
      </motion.button>
      <motion.button
        onClick={() => handleChangeLanguage("ar")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-3 py-1.5 rounded-lg font-semibold transition-all duration-200 ${
          language === "ar"
            ? "bg-[#ac5f2d] text-white shadow-md"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        AR
      </motion.button>
    </div>
  );
}