import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaMicrophone, FaMusic } from "react-icons/fa";

const events = [
  {
    date: "Jeudi 26 Avril · 17h45",
    title: "Séance/dédicace du livre",
    subtitle: "“CinéCasablanca, la Ville Blanche en 100 films”",
    authors: "Rabéa Ridaoui, Roland Carrée",
    publisher: "Éditions Le Fennec",
    icon: <FaBookOpen className="text-[#006e6d] text-3xl" />,
    description:
      "Casablanca, une ville mythique du cinéma, se dévoile à travers 100 films...",
  },
  {
    date: "Vendredi 25 Avril · 17h30",
    title: "Conférence",
    subtitle: "Aux origines de l’Homo sapiens",
    speaker: "Abdelouahed Ben-Nacer",
    icon: <FaMicrophone className="text-[#1d3557] text-3xl" />,
    description: "Texte et illustration à venir...",
  },
  {
    date: "Samedi 26 Avril · 17h45",
    title: "Conférence",
    subtitle: "Art rupestre au Sud marocain",
    speaker: "Abdelkhalek Lemjidi",
    icon: <FaMicrophone className="text-[#1d3557] text-3xl" />,
    description: "Texte et illustration à venir...",
  },
  {
    date: "Samedi 26 Avril · 20h30",
    title: "Concert",
    subtitle: "Abir El Abed",
    icon: <FaMusic className="text-[#e63946] text-3xl" />,
    description: "Texte du spectacle à venir + photo...",
  },
];

export default function Dedicaces() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Titre principal */}
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📅 Programme du Festival
      </motion.h2>

      {/* Liste des événements */}
      <div className="grid gap-6">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="flex items-start bg-white shadow-md rounded-xl p-6 border-l-4 border-[#006e6d] hover:shadow-lg transition"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            {/* Icône */}
            <div className="mr-4">{event.icon}</div>

            {/* Contenu */}
            <div>
              <p className="text-sm font-semibold text-gray-500">{event.date}</p>
              <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
              <p className="text-lg text-[#006e6d] font-semibold">{event.subtitle}</p>
              {event.authors && (
                <p className="text-gray-600 italic">Par {event.authors}</p>
              )}
              {event.speaker && (
                <p className="text-gray-600 italic">Avec {event.speaker}</p>
              )}
              {event.publisher && (
                <p className="text-gray-500">Éditeur: {event.publisher}</p>
              )}
              <p className="mt-2 text-gray-700">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
