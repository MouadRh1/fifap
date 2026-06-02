import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoLogoLinkedin,
} from "react-icons/io5";
import { motion } from "framer-motion";
import { comiteDorganisation as comiteFR } from "../../Data/Data_FR";
import { memberJury as juryFR } from "../../Data/Data_FR";
import { comiteDorganisation as comiteAR } from "../../Data/Data_AR";
import { memberJury as juryAR } from "../../Data/Data_AR";
import ContactForm from "./ContactForm";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // Sélectionner les données selon la langue
  const comiteDorganisation = isArabic ? comiteAR : comiteFR;
  const memberJury = isArabic ? juryAR : juryFR;

  const contactInfo = [
    {
      icon: <MdOutlineEmail className="w-6 h-6" />,
      title: t("email"),
      value: "cerpaamfes2019@gmail.com",
      link: "mailto:cerpaamfes2019@gmail.com",
    },
    {
      icon: <FaPhoneAlt className="w-6 h-6" />,
      title: t("telephone"),
      value: "+212 661-101883",
      link: "tel:+212661101883",
    },
    {
      icon: <FaLocationDot className="w-6 h-6" />,
      title: t("adresse"),
      value: t("adresse_rabat"),
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <IoLogoInstagram size={24} />, href: "https://www.instagram.com/fifapmaroc?igsh=N3MwbzN0d2F2cWo2", label: "Instagram" },
    { icon: <IoLogoFacebook size={24} />, href: "https://www.facebook.com/share/14eGYJbtg9P/?mibextid=wwXIfr", label: "Facebook" },
    // { icon: <IoLogoWhatsapp size={24} />, href: "https://whatsapp.com", label: "WhatsApp" },
    // { icon: <IoLogoLinkedin size={24} />, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#ac5f2d] mb-4">
            {t("contactez_nous")}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ac5f2d] to-[#e67e22] mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {t("contact_description")}
          </p>
        </motion.div>

        {/* Formulaire et Coordonnées - 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>

          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#ac5f2d] to-[#e67e22] px-6 py-4">
                <h2 className="text-xl font-bold text-white">{t("coordonnees")}</h2>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Informations de contact */}
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-[#ac5f2d] flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-[#ac5f2d] transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Séparateur */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Réseaux sociaux */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">{t("suivez_nous")}</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#ac5f2d] hover:text-white transition-all duration-300"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Info ouverture */}
                {/* <div className="bg-amber-50 rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-[#ac5f2d] text-lg">📢</span>
                    {t("info_ouverture")}
                  </p>
                </div> */}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section Équipe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-[#ac5f2d] text-center mb-8">
            {t("notre_equipe")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Comité d'organisation */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gray-800 px-6 py-3">
                <h3 className="text-lg font-bold text-white">{t("comite_organisation")}</h3>
              </div>
              <div className="p-4 max-h-96 overflow-y-auto">
                <div className="space-y-3">
                  {comiteDorganisation.slice(0, 6).map((member) => (
                    <div key={member.id} className="border-b border-gray-100 pb-3 last:border-0">
                      <p className="font-semibold text-gray-800">{member.nom}</p>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Membres du Jury */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gray-800 px-6 py-3">
                <h3 className="text-lg font-bold text-white">{t("membres_jury")}</h3>
              </div>
              <div className="p-4 max-h-96 overflow-y-auto">
                <div className="space-y-3">
                  {memberJury.slice(0, 6).map((member) => (
                    <div key={member.id} className="border-b border-gray-100 pb-3 last:border-0">
                      <p className="font-semibold text-gray-800">{member.nom}</p>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;