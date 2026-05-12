import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LearnMore from "./Outil/LearnMore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import SeeMore from "./Outil/SeeMore";
import {
  prefaces as prefacesFR,
  comiteDorganisation as comiteFR,
  memberJury as juryFR,
} from "../Data/Data_FR";
import {
  prefaces as prefacesAR,
  comiteDorganisation as comiteAR,
  memberJury as juryAR,
} from "../Data/Data_AR";

const DefaultAvatar = ({ name, className }) => {
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
      className={`${className} bg-gradient-to-br from-[#ac5f2d] to-[#e67e22] rounded-full flex flex-col items-center justify-center shadow-lg`}
    >
      <span className="text-3xl font-bold text-white">{getInitials(name)}</span>
    </div>
  );
};

const Membresoffestival = () => {
  const { t, i18n } = useTranslation();
  const swiperRefComite = useRef(null);
  const swiperRefJury = useRef(null);
  const swiperRefPreface = useRef(null);

  const [prefaces, setPrefaces] = useState([]);
  const [comiteDorganisation, setComiteDorganisation] = useState([]);
  const [memberJury, setMemberJury] = useState([]);
  const [loading, setLoading] = useState(true);

  const isArabic = i18n.language === "ar";

  useEffect(() => {
    const loadData = () => {
      const currentLang =
        i18n.language || localStorage.getItem("language") || "fr";
      if (currentLang === "ar") {
        setPrefaces(prefacesAR);
        setComiteDorganisation(comiteAR);
        setMemberJury(juryAR);
      } else {
        setPrefaces(prefacesFR);
        setComiteDorganisation(comiteFR);
        setMemberJury(juryFR);
      }
      setLoading(false);
    };
    loadData();
  }, [i18n.language]);

  // Fonction pour extraire le texte de description (gère les objets JSX)
  const getDescriptionText = (description) => {
    if (typeof description === "string") {
      return description;
    }
    if (description && description.props && description.props.children) {
      const children = description.props.children;
      if (typeof children === "string") {
        return children.slice(0, 100);
      }
      if (Array.isArray(children)) {
        const text = children.find((child) => typeof child === "string");
        return text ? text.slice(0, 100) : t("aucune_description");
      }
    }
    return t("aucune_description");
  };

  const renderSwiper = (data, title, ref, roleOrTitle) => {
    const isPreface = title === "Preface";

    return (
      <div className="relative mt-10">
        <button
          onClick={() => ref.current?.slidePrev()}
          className={`absolute ${isArabic ? "right-[-10px]" : "left-[-10px]"} top-1/2 -translate-y-1/2 bg-gray-800 shadow-md p-3 rounded-full text-white cursor-pointer hover:bg-[#ff7e2f] transition-all z-10`}
        >
          <MdNavigateBefore
            size={24}
            className={isArabic ? "rotate-180" : ""}
          />
        </button>

        <Swiper
          className="px-10"
          slidesPerView={2}
          spaceBetween={30}
          loop={false}
          speed={800}
          modules={[Autoplay]}
          onSwiper={(swiper) => (ref.current = swiper)}
          dir="ltr"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {data.map((member, index) => (
            <SwiperSlide key={member.id || index}>
              <motion.div
                initial={{ opacity: 0, y: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white p-6 my-2 rounded-lg shadow-lg hover:shadow-xl transition-all transform flex flex-col h-full"
              >
                {/* Image */}
                <div className="flex justify-center items-center mb-4">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.nom}
                      className="w-32 h-32 rounded-full object-cover border-4 border-gray-800 shadow-lg"
                    />
                  ) : (
                    <DefaultAvatar
                      name={member.nom}
                      className="w-32 h-32 border-4 border-gray-800"
                    />
                  )}
                  {member.image2 && (
                    <img
                      src={member.image2}
                      alt={member.nom}
                      className="w-32 h-32 rounded-full object-cover border-4 border-gray-800 shadow-lg ml-2"
                    />
                  )}
                </div>

                {/* Nom */}
                <h3 className="text-lg font-semibold text-center uppercase text-gray-800 mt-2">
                  {member.nom}
                </h3>

                {/* Description ou badge pour comité/jury */}
                {isPreface ? (
                  <p className="mt-3 text-center text-gray-600 text-sm line-clamp-3 px-2">
                    {getDescriptionText(member.description)}
                  </p>
                ) : (
                  <>
                    <div className="flex justify-center py-2 items-center">
                      {member.role && (
                        <span className="inline-flex items-center text-xs font-semibold text-white bg-blue-500 rounded-full px-2 py-1 text-center">
                          {member.role}
                        </span>
                      )}
                      {!member.role && roleOrTitle && (
                        <span className="inline-flex items-center text-xs font-semibold text-white bg-blue-500 rounded-full px-2 py-1">
                          {roleOrTitle}
                        </span>
                      )}
                    </div>
                    <p className="text-center text-gray-500 text-sm">
                      {member.nationalite}
                    </p>
                    <p className="mt-2 text-center text-gray-600 text-sm line-clamp-2">
                      {typeof member.description === "string"
                        ? member.description.slice(0, 80) +
                          (member.description.length > 80 ? "..." : "")
                        : t("aucune_description")}
                    </p>
                  </>
                )}

                {/* Bouton Voir Plus - pour les préfaces : toujours "Préface", plus d'éditorial */}
                <div className="mt-4 flex justify-center">
                  <LearnMore
                    path={member.route}
                    name={member.slug}
                    children={
                      title === "Preface" ? t("preface") : t("voir_plus")
                    }
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => ref.current?.slideNext()}
          className={`absolute ${isArabic ? "left-[-10px]" : "right-[-10px]"} top-1/2 -translate-y-1/2 bg-gray-800 shadow-md p-3 rounded-full text-white cursor-pointer hover:bg-[#ff7e2f] transition-all z-10`}
        >
          <MdNavigateNext size={24} className={isArabic ? "rotate-180" : ""} />
        </button>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="py-3 bg-orange-100">
        <div className="max-w-screen-2xl mx-auto px-6 text-center py-20">
          <p className="text-gray-600">{t("chargement")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-3 bg-orange-100">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ac5f2d] mt-4 mb-4">
          {t("prefaces_titre")}
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          {t("prefaces_description")}
        </p>

        {prefaces.length > 0 &&
          renderSwiper(prefaces, "Preface", swiperRefPreface)}

        <h3 className="text-4xl font-bold text-[#ac5f2d] mb-4">
          {t("comite_organisation")}
        </h3>
        <SeeMore path="moremembers" children={t("voir_tous_membres_comite")} />
        {comiteDorganisation.length > 0 &&
          renderSwiper(
            comiteDorganisation,
            "Comité d'Organisation",
            swiperRefComite,
            t("comite_organisation"),
          )}

        <h3 className="text-4xl font-bold text-[#ac5f2d] mt-16 mb-4">
          {t("membres_jury")}
        </h3>
        <SeeMore path="moremembers" children={t("voir_tous_membres_jury")} />
        {memberJury.length > 0 &&
          renderSwiper(
            memberJury,
            "Membres du Jury",
            swiperRefJury,
            t("membre_jury"),
          )}
      </div>
    </div>
  );
};

export default Membresoffestival;
