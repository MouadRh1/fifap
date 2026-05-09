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
        {/* Badge Entrée Libre */}
        <MotionSection className="flex justify-center md:justify-start mb-8 md:mb-0 md:mt-6">
          <div
            className="relative flex flex-col bg-[#1a0a00] md:bg-[#1a0a00]/70 items-center justify-center"
            style={{
              // background: "#1a0a00",
              borderRadius: "16px",
              padding: "0",
              width: "220px",
              height: "110px",
              overflow: "hidden",
            }}
          >
            {/* Encoches latérales */}
            <div
              style={{
                position: "absolute",
                left: "-12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: "-12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
              }}
            />

            {/* Ligne pointillée centrale */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "12px",
                right: "12px",
                borderTop: "1px dashed #ac5d2f",
                opacity: 0.5,
              }}
            />

            {/* Haut du ticket */}
            <div
              className="flex flex-col items-center"
              style={{ paddingBottom: "12px" }}
            >
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "9px",
                  color: "#d4945a",
                  letterSpacing: "4px",
                }}
              >
                FESTIVAL · RABAT
              </span>
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#f5e6d0",
                  letterSpacing: "2px",
                }}
              >
                ENTRÉE LIBRE
              </span>
            </div>

            {/* Bas du ticket */}
            <div
              className="flex flex-col items-center"
              style={{ paddingTop: "12px" }}
            >
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "9px",
                  color: "#d4945a",
                  letterSpacing: "3px",
                }}
              >
                09 - 13 JUIN 2026
              </span>
            </div>

            {/* Bordure intérieure en pointillés */}
            <div
              style={{
                position: "absolute",
                inset: "6px",
                borderRadius: "10px",
                border: "0.8px dashed rgba(172, 93, 47, 0.4)",
                pointerEvents: "none",
              }}
            />
          </div>
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
