import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiArrowLeft } from "react-icons/fi";
import { prefaces as prefacesFR } from "../Data/Data_FR";
import { prefaces as prefacesAR } from "../Data/Data_AR";
import defaultImg from "../Image/preface-default.webp";

export default function PrefaceItem() {
  const { slug } = useParams(); // ← Changer de 'nom' à 'slug'
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [preface, setPreface] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPreface = () => {
      const currentLang = i18n.language || localStorage.getItem('language') || 'fr';
      
      // Choisir les données selon la langue
      const prefacesData = currentLang === 'ar' ? prefacesAR : prefacesFR;
      
      // Chercher la préface par son slug
      const foundPreface = prefacesData.find((item) => item.slug === slug);
      
      setPreface(foundPreface);
      setLoading(false);
    };
    
    loadPreface();
  }, [slug, i18n.language]);

  const handleGoBack = () => {
    navigate(-1);
  };

  // Affichage pendant le chargement
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto bg-orange-100/20 p-6 py-20 min-h-screen">
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 mb-8 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
        >
          <FiArrowLeft className="text-lg" />
          {t("retour") || "Retour"}
        </button>
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">{t("chargement") || "Chargement..."}</p>
        </div>
      </div>
    );
  }

  // Si aucune préface trouvée
  if (!preface) {
    return (
      <div className="max-w-6xl mx-auto bg-orange-100/20 p-6 py-20 min-h-screen">
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 mb-8 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
        >
          <FiArrowLeft className="text-lg" />
          {t("retour") || "Retour"}
        </button>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-red-500">
            {t("preface_introuvable") || "Préface non trouvée"}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto bg-orange-100/20 p-6 py-20 relative">
      {/* Bouton de retour */}
      <button
        onClick={handleGoBack}
        className="flex items-center gap-2 mb-8 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
      >
        <FiArrowLeft className="text-lg" />
        {t("retour") || "Retour"}
      </button>

      {/* Section Nom + Rôle + Image */}
      <div className="max-w-6xl mx-auto bg-orange-100/20 p-6 py-10">
        <div className="flex items-start flex-col space-x-6">
          {/* Texte (Nom + Rôle) */}
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl uppercase font-bold mb-4 text-gray-800">
              {preface.nom}
            </h2>
            {preface.role && (
              <p className="text-gray-600 font-semibold mb-4">{preface.role}</p>
            )}
          </div>
          
          {/* Image */}
          <div className="flex items-center flex-col md:flex-row gap-5 justify-center w-full">
            {preface.image ? (
              <img
                src={preface.image}
                alt={preface.nom}
                className="w-80 object-cover mb-4 rounded-lg shadow-md"
              />
            ) : (
              <img
                className="w-80 object-cover rounded-lg shadow-md"
                src={defaultImg}
                alt={preface.nom}
              />
            )}
            {preface.image2 && (
              <img
                src={preface.image2}
                alt={preface.nom}
                className="w-80 object-cover rounded-lg shadow-md"
              />
            )}
          </div>
        </div>
      </div>

      {/* Description en dessous */}
      <div className="max-w-4xl mx-auto mt-4">
        {preface.title && (
          <h2 className="font-bold text-xl md:text-2xl text-center text-[#ac5f2d]">
            {preface.title}
          </h2>
        )}
        <div className="text-gray-700 text-justify leading-relaxed mt-4">
          {preface.description}
          {preface.description2 && (
            <>
              <br />
              <br />
              {preface.description2}
            </>
          )}
        </div>
      </div>
    </div>
  );
}