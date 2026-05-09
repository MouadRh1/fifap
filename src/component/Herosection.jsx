import React from "react";
import MotionSection from "./Outil/MotionSection";
import style from "./Css/HeroSection.module.css";
import { useTranslation } from "react-i18next";
import heroTextAr from "../Image/text-arabe.png"; // Import de l'image arabe

const Herosection = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const handleDownload = () => {
    const pdfUrl = "Image1.png";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Invitation_Festival.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className={`relative w-full bg-gray-100/20 h-screen bg-cover bg-center ${style.slide}`}
    >
      {/* Overlay noir léger */}
      <div className="absolute inset-0 bg-black/10 md:bg-black/10 pointer-events-none"></div>

      {/* Conteneur principal */}
      <div
        className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-11/12 flex flex-col md:flex-row items-center md:items-start text-black text-center md:text-left
                      justify-between"
      >
        {/* Titre */}
        <MotionSection className="max-w-2xl bg-gray-100/30 mb-10 rounded-lg px-4 opacity-50 text-center">
          {isArabic ? (
            // Version arabe : afficher l'image
            <img
              src={heroTextAr}
              alt="المهرجان الدولي الثاني للفيلم الأثري والتراثي بالرباط"
              className="w-full max-w-2xl mx-auto"
            />
          ) : (
            // Version française : afficher le texte
            <h1
              style={{ fontFamily: "Almalik, sans-serif" }}
              className="leading-tight"
            >
              <span className="block mt-3 text-4xl md:text-6xl">Deuxieme</span>
              <span className="block text-8xl md:text-9xl">Festival</span>
              <span
                style={{ marginTop: "-35px" }}
                className="block text-6xl md:text-7xl text-[#ac5d2f] font-bold"
              >
                International
              </span>
              <span className="block text-3xl md:text-4xl">
                du Film Archéologique
              </span>
              <span className="block text-3xl md:text-4xl">
                et Patrimonial de Rabat
              </span>
              <span
                className="block md:hidden text-3xl md:text-4xl text-[#ac5d2f] font-bold"
                style={{
                  textShadow:
                    "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black",
                }}
              >
                du 09 au 13 Juin 2026
              </span>
            </h1>
          )}
        </MotionSection>

        {/* Texte descriptif (à droite en desktop, centré en mobile) */}
        <MotionSection className="hidden md:block sm:pt-2 md:pt-44 lg:pt-65 max-[1200px]:pt-10 md:ml-4 mt-4 md:mt-0">
          <span
            className="hidden md:block text-2xl md:text-3xl text-[#ac5d2f] font-bold"
            style={{
              textShadow:
                "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black",
            }}
          >
            du 09 au 13 Juin 2026
          </span>
        </MotionSection>
      </div>
    </section>
  );
};

export default Herosection;