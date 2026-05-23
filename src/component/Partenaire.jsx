import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";

import partenaire1 from "../Image/partenaire1.png";
import partenaire2 from "../Image/partenaire2.png";
import partenaire3 from "../Image/partenaire3.png";
import partenaire4 from "../Image/partenaire4.png";
import tm5 from "../Image/LogoTM5FormatPNG.png";
import accademieHassan2 from "../Image/partenaire6.png";
import renaissance from "../Image/COMM.jpg";
import institutFrançais from "../Image/partenaire8.jpg";
import partenaire9 from "../Image/apluse.jpg";
import partenaire10 from "../Image/partenaire-cinema-theque.png";
import partenaire11 from "../Image/partenaire-hiba-noir.png";
import partenaire12 from "../Image/partenaire-fta.png";
import markaz from "../Image/markaz.png";
import audithorium from "../Image/audithorium.jpeg";

const partenaires = [
  {
    id: 1,
    name: "Partenaire 1",
    name_ar: "شريك 1",
    logo: partenaire1,
    link: "https://www.partenaire1.com",
  },
  {
    id: 2,
    name: "Partenaire 2",
    name_ar: "شريك 2",
    logo: partenaire2,
    link: "https://www.partenaire2.com",
  },
  {
    id: 3,
    name: "Partenaire 3",
    name_ar: "شريك 3",
    logo: partenaire3,
    link: "https://www.partenaire3.com",
  },
  {
    id: 4,
    name: "Partenaire 4",
    name_ar: "شريك 4",
    logo: partenaire4,
    link: "https://www.partenaire4.com",
  },
  // {
  //   id: 5,
  //   name: "TM5",
  //   name_ar: "تي إم 5",
  //   logo: tm5,
  //   link: "https://tm5.ma/",
  // },
  {
    id: 6,
    name: "Académie Hassan II",
    name_ar: "أكاديمية الحسن الثاني",
    logo: accademieHassan2,
    link: "http://www.academie.hassan2.sciences.ma/",
  },
  {
    id: 7,
    name: "Cinéma Renaissance",
    name_ar: "سينما النهضة",
    logo: renaissance,
    link: "https://www.renaissance.ma/",
  },
  {
    id: 8,
    name: "Institut Français",
    name_ar: "المعهد الفرنسي",
    logo: institutFrançais,
    link: "https://if-maroc.org/",
  },
  {
    id: 9,
    name: "Aplus",
    name_ar: "أبلوس",
    logo: partenaire9,
    link: "https://www.aplus.ma",
  },
  // {
  //   id: 10,
  //   name: "Cinémathèque",
  //   name_ar: "سينماتيك",
  //   logo: partenaire10,
  //   link: "https://www.cinematheque.ma",
  // },
  {
    id: 11,
    name: "Hiba Noir",
    name_ar: "هيبة نوار",
    logo: partenaire11,
    link: "https://www.hibanoir.ma",
  },
  // {
  //   id: 12,
  //   name: "FTA",
  //   name_ar: "إف تي إيه",
  //   logo: partenaire12,
  //   link: "https://www.fta.ma",
  // },
  {
    id: 13,
    name: "Markaz",
    name_ar: "مركز",
    logo: markaz,
    link: "https://www.markaz.ma",
  },
  {
    id: 14,
    name: "Audithorium",
    name_ar: "",
    logo: audithorium,
    link: "https://www.audithorium.ma",
  },
];

const PartenaireComponent = () => {
  const { t, i18n } = useTranslation();
  const swiperRef = useRef(null);
  const isArabic = i18n.language === "ar";

  // Obtenir le nom du partenaire selon la langue
  const getPartnerName = (partner) => {
    return isArabic ? partner.name_ar : partner.name;
  };

  return (
    <div className="bg-gray-100 pt-10 pb-20 px-5 text-center">
      <h2 className="text-3xl pb-10 font-bold mb-6 text-[#ac5d2f]">
        {t("nos_partenaires")}
      </h2>
      
      <div className="relative">
        <Swiper
          ref={swiperRef}
          slidesPerView={7}
          spaceBetween={30}
          loop={true}
          speed={800}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          dir={isArabic ? "rtl" : "ltr"}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 15 },
            480: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 25 },
            768: { slidesPerView: 4, spaceBetween: 25 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
            1200: { slidesPerView: 7, spaceBetween: 30 },
          }}
        >
          {partenaires.map((partenaire) => (
            <SwiperSlide key={partenaire.id}>
              <a
                href={partenaire.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-4 mb-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <img
                  src={partenaire.logo}
                  alt={getPartnerName(partenaire)}
                  className="w-32 h-32 object-contain mx-auto transition-all duration-300 group-hover:grayscale"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartenaireComponent;