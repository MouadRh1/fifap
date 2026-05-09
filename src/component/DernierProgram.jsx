import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';
import SeeMore from './Outil/SeeMore';
import 'swiper/css';
import ProgramData from '../Data/DataProgram';

const DernierProgram = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-10">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Titre de la section */}
        <h2 className="max-w-l text-3xl font-extrabold text-[#ff7e2f] mb-6">
            Nos dernières actualités
        </h2>

        {/* Bouton Voir Plus */}
        <div className="mt-8">
          <SeeMore path="actualites" children="Voir toutes les evénéments" />
        </div>

        {/* Swiper avec navigation */}
        <div className="relative mt-10">
          {/* Bouton Précédent */}
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="absolute cursor-pointer left-[-15px] top-0 top-1/2 -translate-y-1/2 bg-[#ff7e2f] shadow-md p-3 rounded-full text-white hover:bg-[#ff7e2f] hover:text-[white] transition-all z-10"          >
            <MdNavigateBefore size={24} />
          </button>

          {/* Swiper */}
          <Swiper
            className="px-10"
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            speed={1000}
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {ProgramData.map((actu) => (
              <SwiperSlide key={actu.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="rounded-lg transition-all transform hover:-translate-y-1 overflow-hidden"
                >
                  {/* Image cliquable */}
                  <Link to={`/program/${actu.id}`}>
                    <img src={actu.image} alt={actu.title} className="w-full h-80 object-cover" />
                  </Link>

                  {/* Contenu */}
                  <div className="p-6">
                    <span className="text-sm text-gray-500">{actu.date}</span>
                    <h3 className="mt-2 text-xl font-bold hover:text-[#ff7e2f]">
                      <Link to={`/program/${actu.id}`}>{actu.title}</Link>
                    </h3>
                    <p className="mt-3 text-black text-sm">{actu.description}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bouton Suivant */}
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="absolute cursor-pointer right-[-15px] top-1/2 -translate-y-1/2 bg-[#ff7e2f] shadow-md p-3 rounded-full text-white hover:bg-[#ff7e2f] hover:text-[white] transition-all z-10"          >
            <MdNavigateNext size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DernierProgram;
