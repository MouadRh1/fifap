import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTimes,
  FaClock,
  FaArrowLeft,
  FaUser,
  FaMicrophoneAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ProgramData2025FR from "../Data/DataProgram_FR.jsx";
import ProgramData2025AR from "../Data/DataProgram_AR.jsx";
import ProgramData2026FR from "../Data/DataProgram_2026_FR.jsx";
import ProgramData2026AR from "../Data/DataProgram_2026_AR.jsx";

const DetailsProgram = () => {
  const { year, slug } = useParams();
  const { t, i18n } = useTranslation();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const isArabic = i18n.language === "ar";

  // Vérifier si c'est une conférence
  const isConference =
    slug?.includes("conference") || program?.slug?.includes("conference");

  useEffect(() => {
    const loadProgramData = () => {
      const currentLang =
        i18n.language || localStorage.getItem("language") || "fr";
      const selectedYear = year || "2026";

      let ProgramData;
      if (selectedYear === "2025") {
        ProgramData =
          currentLang === "ar" ? ProgramData2025AR : ProgramData2025FR;
      } else {
        ProgramData =
          currentLang === "ar" ? ProgramData2026AR : ProgramData2026FR;
      }

      const foundProgram = ProgramData.find((p) => p.slug === slug);
      setProgram(foundProgram);
      setLoading(false);
    };

    loadProgramData();
  }, [slug, year, i18n.language]);

  if (loading) {
    return (
      <div className="text-center flex justify-center items-center h-[100vh]">
        <div>
          <p className="text-gray-500 pb-10 font-bold text-5xl">
            {t("chargement") || "Chargement..."}
          </p>
        </div>
      </div>
    );
  }

  if (!program) {
    return (
      <div className="text-center flex justify-center items-center h-[100vh]">
        <div>
          <p className="text-red-500 pb-10 font-bold text-5xl">
            {t("programme_non_trouve") || "Programme non trouvé"}
          </p>
          <Link
            className="border-2 border-gray-800 p-3 rounded-[10px] hover:bg-gray-800 hover:border-none hover:text-white transition-all"
            to="/"
          >
            {t("retour") || "Retour"}
          </Link>
        </div>
      </div>
    );
  }

  // Détecter si l'une des activités est une conférence
  const hasConference = program.activities?.some(
    (a) => a.a_speaker || a.a_speakerRole,
  );

  return (
    <div
      className={`max-w-7xl mx-auto py-20 px-6 ${isConference || hasConference ? "bg-gradient-to-br from-orange-50 to-amber-50" : "bg-orange-100/20"}`}
    >
      {/* Bouton retour */}
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 mb-8 bg-[#ac5f2d] hover:bg-[#8b4a24] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
      >
        <FaArrowLeft className="text-lg" />
        {t("retour") || "Retour"}
      </button>

      {isConference || hasConference ? (
        // ========== DESIGN SPÉCIAL CONFÉRENCE ==========
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-l-[#ac5f2d]">
            <div className="p-8 md:p-10">
              <h1 className="text-3xl md:text-4xl font-bold text-[#ac5f2d] text-center mb-8">
                {program.title}
              </h1>

              {program.activities?.map((activity) => (
                <div key={activity.a_id} className="mb-8 last:mb-0">
                  {/* En-tête avec image du conférencier */}
                  <div className="flex flex-col md:flex-row gap-8 items-start mb-8 pb-6 border-b border-gray-200">
                    {activity.a_image && (
                      <div className="flex-shrink-0">
                        <img
                          src={activity.a_image}
                          alt={activity.a_speaker || activity.a_title}
                          className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-[#ac5f2d]/30 hover:scale-105 transition-transform duration-300 cursor-pointer"
                          onClick={() => setSelectedImage(activity.a_image)}
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                        {activity.a_title}
                      </h2>
                      {activity.a_subtitle && (
                        <h3 className="text-lg text-[#ac5f2d] font-semibold mb-4">
                          {activity.a_subtitle}
                        </h3>
                      )}
                      <div className="bg-amber-50 rounded-lg p-4">
                        <p className="flex items-center gap-2 text-gray-700 mb-2">
                          <FaUser className="text-[#ac5f2d]" />
                          <span className="font-semibold">
                            {t("by") || "Par"} :
                          </span>
                          <span>{activity.a_speaker || activity.a_title}</span>
                        </p>
                        {activity.a_speakerRole && (
                          <p className="text-sm text-gray-500 ml-7 leading-relaxed">
                            {activity.a_speakerRole}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Date, heure et lieu */}
                  <div className="flex flex-wrap gap-6 mb-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#ac5f2d]" />
                      <span>{program.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-[#ac5f2d]" />
                      <span>{program.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#ac5f2d]" />
                      <span>{program.place}</span>
                    </div>
                  </div>

                  {/* Description complète */}
                  <div
                    className={`text-gray-700 leading-relaxed whitespace-pre-line ${isArabic ? "text-right" : "text-justify"}`}
                  >
                    {activity.a_description}
                  </div>

                  {/* YouTube si disponible */}
                  {activity.youtube && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-[#ac5f2d] mb-4 flex items-center gap-2">
                        <FaMicrophoneAlt />
                        {t("bande_annonce") || "Bande-annonce"}
                      </h3>
                      <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
                        <div className="absolute top-0 left-0 w-full h-full">
                          {activity.youtube}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // ========== DESIGN NORMAL POUR FILMS ==========
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-center text-[#ac5f2d] pb-6">
                {program.title}
              </h1>

              {/* Date, heure et lieu */}
              <div className="mb-8 flex flex-wrap gap-4 justify-center border-b pb-4">
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt
                    style={{ color: "#ac5f2d" }}
                    className="mr-2"
                  />
                  <span>{program.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaClock style={{ color: "#ac5f2d" }} className="mr-2" />
                  <span>{program.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt
                    style={{ color: "#ac5f2d" }}
                    className="mr-2"
                  />
                  <span>{program.place}</span>
                  {program.place2 && (
                    <span className="ml-1">{program.place2}</span>
                  )}
                </div>
              </div>

              {/* Image principale */}
              {program.image && (
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full md:w-80 rounded-lg shadow cursor-pointer"
                    onClick={() => setSelectedImage(program.image)}
                  />
                  {program.descImage && (
                    <p className="text-justify text-gray-600 flex-1">
                      {program.descImage}
                    </p>
                  )}
                </div>
              )}

              {/* Activités */}
              {program.activities && program.activities.length > 0 && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
                    {t("activites") || "Activités"}
                  </h2>
                  <ul className="space-y-6">
                    {program.activities.map((activity) => (
                      <li
                        key={activity.a_id}
                        className="p-4 bg-gray-100 rounded-lg shadow-md"
                      >
                        <h3 className="text-xl font-semibold text-gray-800">
                          {activity.a_title}
                        </h3>
                        {activity.a_date && (
                          <h3 className="text-lg font-semibold text-[#ac5f2d]">
                            {activity.a_date}
                          </h3>
                        )}

                        <div className="flex flex-col md:flex-row gap-4 mt-3">
                          {activity.a_image && (
                            <img
                              src={activity.a_image}
                              alt={activity.a_title}
                              onClick={() => setSelectedImage(activity.a_image)}
                              className="w-full md:w-60 md:h-90 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                            />
                          )}
                          {activity.a_description && (
                            <p className="text-gray-700 text-justify leading-relaxed flex-1">
                              {activity.a_description}
                            </p>
                          )}
                        </div>

                        {activity.youtube && (
                          <div className="mt-4 flex justify-center">
                            <div className="relative pb-[56.25%] h-0 w-full rounded-lg overflow-hidden">
                              <div className="absolute top-0 left-0 w-full h-full">
                                {activity.youtube}
                              </div>
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {program.imageConf && (
                <div className="mt-8 flex justify-center">
                  <img
                    src={program.imageConf}
                    alt="Conférence"
                    className="w-80 rounded-lg shadow cursor-pointer"
                    onClick={() => setSelectedImage(program.imageConf)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL pour agrandir l'image */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50">
          <div className="relative bg-white rounded-lg p-4 shadow-lg max-w-4xl">
            <button
              className="absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-gray-900 bg-white rounded-full p-1"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Aperçu"
              className="max-w-full max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsProgram;
