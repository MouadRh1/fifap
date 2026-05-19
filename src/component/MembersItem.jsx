import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoMdArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
import {
  prefaces as prefacesFR,
  comiteDorganisation as comiteFR,
  memberJury as juryFR,
  juryEtudiant as juryEtudiantFR,
} from "../Data/Data_FR";
import {
  prefaces as prefacesAR,
  comiteDorganisation as comiteAR,
  memberJury as juryAR,
  juryEtudiant as juryEtudiantAR,
} from "../Data/Data_AR";

// Composant pour l'image par défaut
const DefaultImage = ({ name, className }) => {
  const getInitials = (fullName) => {
    return fullName
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={`${className} bg-gradient-to-br from-[#ac5f2d] to-[#e67e22] flex flex-col items-center justify-center rounded-lg`}
    >
      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4">
        <span className="text-5xl font-bold text-white">
          {getInitials(name)}
        </span>
      </div>
      <span className="text-white/80 text-sm">Photo non disponible</span>
    </div>
  );
};

export default function MembersItem() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMember = () => {
      const currentLang = i18n.language || localStorage.getItem("language") || "fr";
      
      // Choisir les données selon la langue
      const prefacesData = currentLang === "ar" ? prefacesAR : prefacesFR;
      const comiteData = currentLang === "ar" ? comiteAR : comiteFR;
      const juryData = currentLang === "ar" ? juryAR : juryFR;
      const juryEtudiantData = currentLang === "ar" ? juryEtudiantAR : juryEtudiantFR;
      
      // Chercher le membre dans tous les tableaux par son slug
      const foundMember = [...prefacesData, ...comiteData, ...juryData, ...juryEtudiantData].find(
        (item) => item.slug === slug
      );
      
      setMember(foundMember);
      setLoading(false);
    };
    
    loadMember();
  }, [slug, i18n.language]);

  const handleClick = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="py-20 max-w-6xl mx-auto px-6 text-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          className="flex cursor-pointer items-center gap-2 text-lg text-gray-700 hover:text-[#ac5f2d] transition duration-300"
        >
          <IoMdArrowRoundBack className="text-2xl" />
          {t("retour") || "Retour"}
        </motion.button>
        <h1 className="text-2xl font-bold text-gray-500 mt-8">
          {t("chargement") || "Chargement..."}
        </h1>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="py-20 max-w-6xl mx-auto px-6 text-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          className="flex cursor-pointer items-center gap-2 text-lg text-gray-700 hover:text-[#ac5f2d] transition duration-300"
        >
          <IoMdArrowRoundBack className="text-2xl" />
          {t("retour") || "Retour"}
        </motion.button>
        <h1 className="text-2xl font-bold text-red-500 mt-8">
          {t("membre_introuvable") || "Membre introuvable"}
        </h1>
      </div>
    );
  }

  return (
    <div className="py-20 bg-orange-100/20 max-w-6xl min-h-screen mx-auto px-6">
      {/* Bouton Retour */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="flex cursor-pointer items-center gap-2 text-lg text-gray-700 hover:text-[#ac5f2d] transition duration-300"
      >
        <IoMdArrowRoundBack className="text-2xl" />
        {t("retour") || "Retour"}
      </motion.button>

      {/* Contenu du membre */}
      <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
        {/* Image */}
        <motion.div
          className="w-full md:w-80 lg:w-96 rounded-lg overflow-hidden shadow-lg flex-shrink-0"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {member.image ? (
            <img
              src={member.image}
              alt={member.nom}
              className="w-full h-80 object-cover"
            />
          ) : (
            <DefaultImage name={member.nom} className="w-full h-80" />
          )}
        </motion.div>

        {/* Détails */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-[#ac5f2d]">{member.nom}</h1>
          {member.role && (
            <p className="text-xl text-gray-600 mt-2 font-semibold">
              {member.role}
            </p>
          )}
          {member.nationalite && (
            <p className="text-md text-gray-500 mt-1">{member.nationalite}</p>
          )}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-gray-700 leading-relaxed text-justify whitespace-pre-line">
              {member.description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}