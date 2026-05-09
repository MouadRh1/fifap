import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "swiper/css";
import ProgramData2026_FR from "../../Data/DataProgram_2026_FR.jsx";
import ProgramData2026_AR from "../../Data/DataProgram_2026_AR.jsx";
import SeeMore from "../Outil/SeeMore.jsx";

const SafeImage = ({ src, alt, className }) => {
  const { t } = useTranslation();

  if (!src || src === "") {
    return (
      <div
        className={`${className} bg-gray-300 flex items-center justify-center`}
      >
        <span className="text-gray-500 text-sm">
          {t("image_non_disponible")}
        </span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} />;
};

const ProgramHome = () => {
  const swiperRef = useRef(null);
  const { t, i18n } = useTranslation();

  // Sélectionner les données selon la langue
  const currentLang = i18n.language || localStorage.getItem("language") || "fr";
  const ProgramData =
    currentLang === "ar" ? ProgramData2026_AR : ProgramData2026_FR;

  if (!ProgramData || !Array.isArray(ProgramData)) {
    return (
      <section className="pt-20 bg-gary-300 text-white">
        <div className="max-w-screen-2xl mx-auto px-3">
          <p className="text-black">{t("chargement")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-20 bg-gary-300 text-white">
      <div className="max-w-screen-2xl mx-auto px-3">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
          className="text-6xl max-w-lg font-extrabold text-start text-[#ac5f2d]"
        >
          {t("programme_du_festival")}
        </motion.h2>
        <p className="text-lg max-w-lg text-gray-900 text-start mt-4">
          {t("decouvrez_programme")}
        </p>
        <div className="mt-4">
          <SeeMore path="program" children={t("voir_tout_programme")} />
        </div>

        <div className="relative mt-12">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/50 p-2 rounded-full shadow-lg hover:bg-gray-500/40 transition-all z-10"
          >
            <MdNavigateBefore size={28} />
          </button>

          <Swiper
            className="w-full max-w-full px-0"
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            speed={800}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {ProgramData.map((event) => (
              <SwiperSlide key={event.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-lg overflow-hidden transition-all"
                >
                  <Link to={`/program/${event.slug}`}>
                    <SafeImage
                      src={event.activities?.[0]?.a_image}
                      alt={event.title}
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <div className="p-6">
                    <span className="text-sm text-gray-400">
                      {event.date} - {event.place}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-black hover:text-[#ac5d2f] transition-all">
                      <Link to={`/program/${event.slug}`}>{event.title}</Link>
                    </h3>
                    <div className="mt-4">
                      {event.activities?.slice(0, 1).map((activity) => (
                        <div
                          key={activity.a_id}
                          className="mt-2 p-3 bg-gray-500 rounded-md"
                        >
                          <h4 className="text-lg font-semibold text-white">
                            {activity.a_title}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {typeof activity.a_description === "string" &&
                            activity.a_description.length > 0
                              ? activity.a_description.slice(0, 50) + "..."
                              : t("aucune_description")}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/50 p-2 rounded-full shadow-lg hover:bg-gray-500/40 transition-all z-10"
          >
            <MdNavigateNext size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramHome;
