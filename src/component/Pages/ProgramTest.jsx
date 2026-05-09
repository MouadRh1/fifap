import React, { lazy, Suspense, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProgramData2025FR from "../../Data/DataProgram_FR.jsx";
import ProgramData2025AR from "../../Data/DataProgram_AR.jsx";
import ProgramData2026FR from "../../Data/DataProgram_2026_FR.jsx";
import ProgramData2026AR from "../../Data/DataProgram_2026_AR.jsx";
import { Download } from "lucide-react";

const DownloadButton = lazy(() => import("../Outil/DownloadButton"));

// Fonction pour formater l'heure
const formatHour = (time) => {
  return time?.replace(":", "h") || "";
};

// Composant pour afficher une image de manière sécurisée
const SafeImage = ({ src, alt, className }) => {
  const { t } = useTranslation();

  if (!src || src === "") {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <span className="text-gray-400 text-sm">
          {t("image_non_disponible")}
        </span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} />;
};

// Composant pour une activité normale (film)
const NormalActivity = ({ activity }) => {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-sm transition-transform duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-md hover:border-orange-500">
      <SafeImage
        src={activity.a_image}
        alt={activity.a_title}
        className={`object-cover rounded-t-lg w-full ${
          false ? "h-64" : "h-36"
        }`}
      />
      <h3 className="text-lg font-semibold text-center text-gray-900 p-2">
        {activity.a_title}
      </h3>
    </div>
  );
};

// Composant pour une conférence (design spécial mais dans la même carte)
const ConferenceActivity = ({ activity, isArabic }) => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-sm transition-transform duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-md hover:border-orange-500 h-full">
      {/* Photo du conférencier (format carré/portrait) */}
      {activity.a_image && (
        <div className="w-full h-48 overflow-hidden bg-gradient-to-b from-amber-100 to-orange-100">
          <img
            src={activity.a_image}
            alt={activity.a_speaker || activity.a_title}
            className="w-full h-full object-cover object-top"
          />
        </div>
      )}
      
      <div className="p-3">
        {/* Titre */}
        <h3 className="text-md font-semibold text-center text-gray-800 line-clamp-2">
          {activity.a_title}
        </h3>
        
        {/* Sous-titre */}
        {activity.a_subtitle && (
          <p className="text-xs text-[#ac5f2d] font-medium text-center mt-1 line-clamp-2">
            {activity.a_subtitle}
          </p>
        )}
        
        {/* Conférencier */}
        {activity.a_speaker && (
          <p className="text-sm font-semibold text-gray-700 text-center mt-2">
            Par {activity.a_speaker}
          </p>
        )}
        
        {/* Rôle (version très courte) */}
        {activity.a_speakerRole && (
          <p className="text-xs text-gray-500 text-center mt-1 line-clamp-2">
            {activity.a_speakerRole.length > 80 
              ? activity.a_speakerRole.slice(0, 80) + "..." 
              : activity.a_speakerRole}
          </p>
        )}
      </div>
    </div>
  );
};

export default function Program() {
  const { t, i18n } = useTranslation();
  const { year } = useParams();
  const [programData, setProgramData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentYear, setCurrentYear] = useState(year || "2026");
  const isArabic = i18n.language === "ar";

  useEffect(() => {
    const loadProgramData = () => {
      const currentLang = i18n.language || localStorage.getItem('language') || 'fr';
      const selectedYear = year || "2026";
      setCurrentYear(selectedYear);
      
      let data;
      if (selectedYear === "2025") {
        data = currentLang === 'ar' ? ProgramData2025AR : ProgramData2025FR;
      } else {
        data = currentLang === 'ar' ? ProgramData2026AR : ProgramData2026FR;
      }
      
      setProgramData(data);
      setLoading(false);
    };

    loadProgramData();
  }, [i18n.language, year]);

  if (!loading && (!programData || !Array.isArray(programData))) {
    return (
      <main className="bg-orange-100/30 w-full py-20 px-6">
        <h1 className="text-4xl text-center font-bold text-[#ac5f2d]">
          {t("programme_du_festival")} {currentYear}
        </h1>
        <p className="text-center text-red-500 mt-10">
          {t("erreur_chargement")}
        </p>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="bg-orange-100/30 w-full py-20 px-6">
        <h1 className="text-4xl text-center font-bold text-[#ac5f2d]">
          {t("programme_du_festival")} {currentYear}
        </h1>
        <p className="text-center text-gray-500 mt-10">Chargement...</p>
      </main>
    );
  }

  const groupedByDate = programData.reduce((acc, program) => {
    if (!acc[program.date]) {
      acc[program.date] = [];
    }
    acc[program.date].push(program);
    return acc;
  }, {});

  return (
    <main className="bg-orange-100/30 w-full py-20 px-6">
      {/* En-tête avec sélecteur d'année */}
      <div className="text-center mb-8">
        <div className="flex justify-center gap-4 mb-4">
          <Link
            to="/program/2025"
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              currentYear === "2025"
                ? "bg-[#ac5f2d] text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {t("programme_2025")}
          </Link>
          <Link
            to="/program/2026"
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              currentYear === "2026"
                ? "bg-[#ac5f2d] text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {t("programme_2026")}
          </Link>
        </div>
        <h1 className="text-4xl text-center font-bold text-[#ac5f2d]">
          {t("programme_du_festival")} {currentYear}
        </h1>
      </div>

      {Object.entries(groupedByDate).map(([date, programs]) => {
        const gridCols =
          programs.length >= 3
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : programs.length === 2
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
            : "grid-cols-1";

        return (
          <section key={date}>
            <h2 className="text-3xl font-bold text-gray-800 py-10 text-center">
              <i className="fa-solid fa-calendar-days pr-2 text-orange-500"></i>
              {date}
            </h2>

            <div className={`grid gap-8 ${gridCols}`}>
              {programs
                .sort((a, b) => a.time.localeCompare(b.time))
                .map((program) => (
                  <Link
                    to={`/program/${currentYear}/${program.slug}`}
                    key={program.id}
                    className="bg-white border border-gray-300 rounded-lg shadow-md transition-transform duration-300 overflow-hidden hover:bg-gray-200 hover:border-orange-500 hover:shadow-lg hover:-translate-y-1 block"
                  >
                    {/* Heure */}
                    <div className="bg-[#ac5f2d]/10 py-2 border-b border-gray-200">
                      <h3 className="text-xl font-semibold text-center text-[#ac5f2d]">
                        <i className="fa-solid fa-clock mr-2"></i>
                        {formatHour(program.time)}
                      </h3>
                    </div>

                    {/* Titre du programme */}
                    <h1 className="text-lg font-bold text-center text-[#ac5d2f] py-3 px-2">
                      {program.title}
                    </h1>

                    {/* Description courte */}
                    {program.description && (
                      <p className="px-4 pb-2 text-gray-600 text-sm line-clamp-2 text-center">
                        {program.description}
                      </p>
                    )}

                    {/* Activités - avec logique de grille */}
                    <div
                      className={`grid gap-4 p-4 ${
                        program.activities?.length === 1
                          ? "grid-cols-1 place-items-center"
                          : "grid-cols-1 sm:grid-cols-2"
                      }`}
                    >
                      {program.activities?.slice(0, 4).map((activity) => {
                        // Vérifier si c'est une conférence
                        const isConference = activity.a_speaker || 
                                           program.slug?.includes('conference');
                        
                        return isConference ? (
                          <ConferenceActivity 
                            key={activity.a_id} 
                            activity={activity} 
                            isArabic={isArabic}
                          />
                        ) : (
                          <NormalActivity key={activity.a_id} activity={activity} />
                        );
                      })}
                    </div>
                    
                    {/* Indicateur "Voir plus" si plus de 4 activités */}
                    {program.activities?.length > 4 && (
                      <div className="pb-3 text-center">
                        <span className="text-xs text-[#ac5f2d]">
                          +{program.activities.length - 4} activités
                        </span>
                      </div>
                    )}
                  </Link>
                ))}
            </div>
          </section>
        );
      })}

      <Suspense fallback={null}>
        {/* <DownloadButton /> */}
      </Suspense>
    </main>
  );
}