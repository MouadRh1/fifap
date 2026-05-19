import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  comiteDorganisation as comiteFR,
  memberJury as juryFR,
  juryEtudiant as juryEtudiantFR,
} from "../Data/Data_FR";
import {
  comiteDorganisation as comiteAR,
  memberJury as juryAR,
  juryEtudiant as juryEtudiantAR,
} from "../Data/Data_AR";
import LearnMore from "./Outil/LearnMore";
import { generateSlug } from "./Outil/slugUtils";

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
      className={`${className} bg-gradient-to-br from-[#ac5f2d] to-[#e67e22] flex flex-col items-center justify-center`}
    >
      <span className="text-4xl font-bold text-white">{getInitials(name)}</span>
      <span className="text-white/80 text-sm mt-2">Photo non disponible</span>
    </div>
  );
};

export default function MoreMembers() {
  const { t, i18n } = useTranslation();
  const [comiteDorganisation, setComiteDorganisation] = useState([]);
  const [memberJury, setMemberJury] = useState([]);
  const [juryEtudiant, setJuryEtudiant] = useState([]);
  const [loading, setLoading] = useState(true);

  const isArabic = i18n.language === "ar";

  useEffect(() => {
    const loadData = () => {
      const currentLang =
        i18n.language || localStorage.getItem("language") || "fr";
      if (currentLang === "ar") {
        setComiteDorganisation(comiteAR);
        setMemberJury(juryAR);
        setJuryEtudiant(juryEtudiantAR);
      } else {
        setComiteDorganisation(comiteFR);
        setMemberJury(juryFR);
        setJuryEtudiant(juryEtudiantFR);
      }
      setLoading(false);
    };
    loadData();
  }, [i18n.language]);

  if (loading) {
    return (
      <div className="text-center py-30 bg-orange-100/20">
        <p className="text-gray-600">{t("chargement")}</p>
      </div>
    );
  }

  return (
    <div className="text-center py-30 bg-orange-100/20">
      {/* Comité d'Organisation */}
      <h1 className="text-3xl font-bold text-[#ac5f2d] mb-8">
        {t("comite_organisation")}
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {comiteDorganisation.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 w-80 text-center"
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.nom}
                className="w-full h-64 object-cover border-b border-gray-200"
              />
            ) : (
              <DefaultImage name={member.nom} className="w-full h-64" />
            )}
            <div className="p-4">
              <p className="text-xl font-semibold text-gray-800">
                {member.nom}
              </p>
              <p className="text-gray-600">{member.nationalite}</p>
              <p className="text-gray-500 mt-2 line-clamp-2">
                {typeof member.description === "string"
                  ? member.description.slice(0, 100) +
                    (member.description.length > 100 ? "..." : "")
                  : t("aucune_description")}
              </p>
              <LearnMore
                path={member.route}
                name={member.slug || generateSlug(member.nom)}
                children={t("voir_plus")}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Membres du Jury */}
      <h1 className="text-3xl font-bold text-[#ac5f2d] py-8">
        {t("membres_jury")}
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {memberJury.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 w-80 text-center"
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.nom}
                className="w-full h-64 object-cover border-b border-gray-200"
              />
            ) : (
              <DefaultImage name={member.nom} className="w-full h-64" />
            )}
            <div className="p-4">
              <p className="text-xl font-semibold text-gray-800">
                {member.nom}
              </p>
              <p className="text-gray-600">{member.nationalite}</p>
              <p className="text-gray-500 mt-2 line-clamp-2">
                {typeof member.description === "string"
                  ? member.description.slice(0, 100) +
                    (member.description.length > 100 ? "..." : "")
                  : t("aucune_description")}
              </p>
              <LearnMore
                path={member.route}
                name={member.slug || generateSlug(member.nom)}
                children={t("voir_plus")}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Jury Étudiant */}
      {juryEtudiant.length > 0 && (
        <>
          <h1 className="text-3xl font-bold text-[#ac5f2d] py-8">
            {t("jury_etudiant")}
          </h1>
          <div className="flex flex-wrap justify-center gap-6">
            {juryEtudiant.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 w-80 text-center"
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.nom}
                    className="w-full h-64 object-cover border-b border-gray-200"
                  />
                ) : (
                  <DefaultImage name={member.nom} className="w-full h-64" />
                )}
                <div className="p-4">
                  <p className="text-xl font-semibold text-gray-800">
                    {member.nom}
                  </p>
                  <p className="text-gray-600">{member.nationalite}</p>
                  <p className="text-gray-500 mt-2 line-clamp-2">
                    {typeof member.description === "string"
                      ? member.description.slice(0, 100) +
                        (member.description.length > 100 ? "..." : "")
                      : t("aucune_description")}
                  </p>
                  <LearnMore
                    path={member.route}
                    name={member.slug || generateSlug(member.nom)}
                    children={t("voir_plus")}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
