import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoFacebook,
} from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { comiteDorganisation as comiteFR } from "../../Data/Data_FR";
import { memberJury as juryFR } from "../../Data/Data_FR";
import { comiteDorganisation as comiteAR } from "../../Data/Data_AR";
import { memberJury as juryAR } from "../../Data/Data_AR";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [openSection, setOpenSection] = useState(null);
  const isArabic = i18n.language === "ar";

  // Sélectionner les données selon la langue
  const comiteDorganisation = isArabic ? comiteAR : comiteFR;
  const memberJury = isArabic ? juryAR : juryFR;

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="py-20 bg-orange-100/20">
      <div className="max-w-7xl mx-auto p-6 min-h-screen">
        <h1 className="text-[#ac5f2d] mb-8 font-extrabold max-w-[100px] md:max-w-[400px] lg:max-w-2xl text-4xl md:text-6xl">
          {t("association_cerpaam")}
        </h1>
        
        {/* Coordonnées */}
        <h2 className="text-2xl max-w-lg font-bold text-[#ac5f2d]">
          {t("coordonnees")}
        </h2>
        <div className="mx-4 md:mx-10">
          <p className="font-semibold mt-2">
            {t("festival_name")}
          </p>
          <p className="flex items-center gap-2">
            <FaLocationDot className="text-[#ac5d2f]" />
            {t("adresse_rabat")}
          </p>
          <p className="mt-2">
            <span className="flex items-center gap-2">
              <GoAlertFill className="text-lg text-[#ac5f2d]" />
              {t("info_ouverture")}
            </span>
          </p>
          <p>
            <span className="mt-2 flex items-center gap-2">
              <FaPhoneAlt className="text-[#ac5f2d]" />
              {t("standard_telephonique")} :
              <strong>
                <a
                  href="tel:+212 661-101883"
                  className="text-blue-500 hover:underline"
                >
                  0661-101883
                </a>
              </strong>
            </span>
          </p>
        </div>

        {/* Publics */}
        <h2 className="text-2xl font-bold text-orange-600 mt-6">{t("publics")}</h2>
        
        {/* Section Contact */}
        <div
          className="flex justify-between items-center border p-4 mt-4 bg-orange-300/30 rounded-lg cursor-pointer"
          onClick={() => toggleSection("abonnement")}
        >
          <span>{t("contact")}</span>
          <span className="text-xl">
            {openSection === "abonnement" ? <FaMinus /> : <FaPlus />}
          </span>
        </div>
        {openSection === "abonnement" && (
          <div>
            <p className="p-4 flex items-center space-x-2 bg-gray-100 text-gray-700">
              <MdOutlineEmail className="text-xl text-[#ac5f2d]" />
              <a
                href="mailto:cerpaamfes2019@gmail.com"
                className="text-blue-500 hover:underline"
              >
                cerpaamfes2019@gmail.com
              </a>
            </p>
            <p className="p-4 flex items-center space-x-2 bg-gray-100 text-gray-700">
              <FaPhoneAlt className="text-xl text-[#ac5f2d]" />
              <a
                href="tel:+212 661-101883"
                className="text-blue-500 hover:underline"
              >
                0661-101883
              </a>
            </p>
          </div>
        )}

        {/* Section equipe du festival */}
        <h2 className="text-2xl font-bold text-orange-600 mt-6">{t("equipe")}</h2>
        <div
          className="flex justify-between items-center border p-4 mt-2 rounded-lg bg-orange-300/30 cursor-pointer"
          onClick={() => toggleSection("directrice")}
        >
          <span>{t("directrice_festival")}</span>
          <span className="text-xl">
            {openSection === "directrice" ? <FaMinus /> : <FaPlus />}
          </span>
        </div>
        {openSection === "directrice" && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-4 flex justify-between items-center space-x-2 bg-gray-100 text-gray-700"
            >
              <strong className="text-2xl">Khadija Benlamine</strong>
              <p className="flex items-center gap-5">
                <a
                  href="http://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoInstagram
                    className="text-pink-600 hover:text-pink-800"
                    size={25}
                  />
                </a>
                <a
                  href="http://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoFacebook
                    className="text-blue-600 hover:text-blue-800"
                    size={25}
                  />
                </a>
                <a
                  href="http://www.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp
                    className="text-green-600 hover:text-green-800"
                    size={25}
                  />
                </a>
                <a
                  href="http://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin
                    className="text-blue-500 hover:text-blue-700"
                    size={25}
                  />
                </a>
              </p>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Section comité d'organisation */}
        <div
          className="flex justify-between items-center border rounded-lg p-4 mt-2 bg-orange-300/30 cursor-pointer"
          onClick={() => toggleSection("comite")}
        >
          <span>{t("comite_organisation")}</span>
          <span className="text-xl">
            {openSection === "comite" ? <FaMinus /> : <FaPlus />}
          </span>
        </div>
        <AnimatePresence>
          {openSection === "comite" && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-gray-100 rounded-lg"
            >
              <h2 className="text-2xl font-semibold text-[#ac5f2d] mb-4">
                {t("comite_organisation")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {comiteDorganisation.map((member) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <p className="text-lg uppercase font-semibold text-gray-900">
                      {member.nom}
                    </p>
                    <p className="text-gray-600 text-justify leading-relaxed mx-auto">
                      {member.description}
                    </p>
                    <p className="text-gray-500 text-sm italic">
                      {member.nationalite}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;