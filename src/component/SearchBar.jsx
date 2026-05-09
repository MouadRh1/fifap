import { useState, useEffect, useRef } from "react";
import {
  Search,
  X,
  Calendar,
  Clock,
  MapPin,
  Film,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// import ProgramData from "../Data/ProgramData";
import ProgramData from "../Data/DataProgram_FR";
import { Link } from "react-router-dom";
import { generateSlug } from "./Outil/slugUtils";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);

  // Filtrer les événements - DÉCLARÉ AVANT LES useEffect
  const filteredEvents = ProgramData.filter(
    (event) =>
      event.title.toLowerCase().includes(query.toLowerCase()) ||
      event.activities.some((activity) =>
        activity.a_title.toLowerCase().includes(query.toLowerCase()),
      ) ||
      event.description?.toLowerCase().includes(query.toLowerCase()),
  ).slice(0, 8);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setQuery("");
        setSelectedIndex(-1);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      inputRef.current?.focus();
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Gestion des touches du clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredEvents.length - 1 ? prev + 1 : prev,
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case "Enter":
          if (selectedIndex >= 0 && filteredEvents[selectedIndex]) {
            window.location.href = `/program/${generateSlug(filteredEvents[selectedIndex].title)}`;
          }
          break;
        case "Escape":
          setIsOpen(false);
          setQuery("");
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredEvents]); // filteredEvents est maintenant accessible

  // Scroll vers l'élément sélectionné
  useEffect(() => {
    if (selectedIndex >= 0 && resultsRef.current) {
      const selectedElement = resultsRef.current.children[selectedIndex];
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [selectedIndex]);

  const highlightText = (text, highlight) => {
    if (!highlight.trim()) return text;
    const regex = new RegExp(`(${highlight})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="bg-[#ac5f2d]/20 text-[#ac5f2d] font-medium">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Bouton de recherche avec animation */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative p-3 rounded-full transition-all duration-300
          ${
            isOpen
              ? "bg-[#ac5f2d] text-white shadow-lg"
              : "bg-transparent border-2 border-[#ac5f2d] text-[#ac5f2d] hover:bg-[#ac5f2d] hover:text-white"
          }
        `}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={20} /> : <Search size={20} />}
        </motion.div>

        {/* Badge de notification */}
        {/* {!isOpen && ProgramData.length > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
            {ProgramData.length}
          </span>
        )} */}
      </motion.button>

      {/* Panneau de recherche */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-14 right-0 w-[450px] sm:w-[500px] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-100"
          >
            {/* En-tête avec titre */}
            <div className="bg-gradient-to-r from-[#ac5f2d]/10 to-transparent px-4 py-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ac5f2d]" />
                <span className="text-sm font-medium text-gray-600">
                  Rechercher un programme ou une activité
                </span>
              </div>
            </div>

            {/* Champ de recherche */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(-1);
                }}
                placeholder="Tapez votre recherche..."
                className="w-full pl-12 pr-4 py-4 outline-none text-gray-700 placeholder-gray-400"
              />
              {query && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={() => {
                    setQuery("");
                    setSelectedIndex(-1);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={18} />
                </motion.button>
              )}
            </div>

            {/* Résultats de recherche */}
            <div ref={resultsRef} className="max-h-[400px] overflow-y-auto">
              {query && filteredEvents.length > 0 ? (
                <div className="divide-y divide-gray-100">
                  {filteredEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`
                        relative group cursor-pointer transition-all duration-200
                        ${selectedIndex === index ? "bg-[#ac5f2d]/5" : "hover:bg-gray-50"}
                      `}
                      onMouseEnter={() => setSelectedIndex(index)}
                      onMouseLeave={() => setSelectedIndex(-1)}
                    >
                      <Link
                        to={`/program/${generateSlug(event.title)}`}
                        onClick={() => {
                          setIsOpen(false);
                          setQuery("");
                        }}
                        className="block p-4"
                      >
                        <div className="flex items-start gap-3">
                          {/* Icône ou image miniature */}
                          <div className="flex-shrink-0 w-10 h-10 bg-[#ac5f2d]/10 rounded-lg flex items-center justify-center">
                            <Film className="w-5 h-5 text-[#ac5f2d]" />
                          </div>

                          <div className="flex-1 min-w-0">
                            {/* Titre de l'événement */}
                            <h4 className="font-bold text-gray-900 mb-1 group-hover:text-[#ac5f2d] transition-colors">
                              {highlightText(event.title, query)}
                            </h4>

                            {/* Métadonnées */}
                            <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {event.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {event.place}
                              </span>
                              {event.time && (
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {event.time}
                                </span>
                              )}
                            </div>

                            {/* Activités correspondantes */}
                            {event.activities
                              .filter((activity) =>
                                activity.a_title
                                  .toLowerCase()
                                  .includes(query.toLowerCase()),
                              )
                              .slice(0, 2)
                              .map((activity, actIndex) => (
                                <div
                                  key={activity.a_id}
                                  className="inline-flex items-center gap-1 mt-1 mr-2 px-2 py-1 bg-gray-100 rounded-md text-xs"
                                >
                                  <span className="text-gray-600">🎬</span>
                                  <span className="text-gray-700">
                                    {highlightText(activity.a_title, query)}
                                  </span>
                                </div>
                              ))}

                            {/* Indicateur de plus d'activités */}
                            {event.activities.filter((a) =>
                              a.a_title
                                .toLowerCase()
                                .includes(query.toLowerCase()),
                            ).length > 2 && (
                              <span className="inline-block mt-1 text-xs text-[#ac5f2d] font-medium">
                                +
                                {event.activities.filter((a) =>
                                  a.a_title
                                    .toLowerCase()
                                    .includes(query.toLowerCase()),
                                ).length - 2}{" "}
                                autres activités
                              </span>
                            )}
                          </div>

                          {/* Indicateur de sélection */}
                          {selectedIndex === index && (
                            <motion.div
                              layoutId="selectionIndicator"
                              className="absolute left-0 top-0 bottom-0 w-1 bg-[#ac5f2d]"
                              initial={{ height: 0 }}
                              animate={{ height: "100%" }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Pied de page des résultats */}
                  <div className="p-3 bg-gray-50 text-xs text-gray-500 flex items-center justify-between">
                    <span>{filteredEvents.length} résultat(s) trouvé(s)</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <span className="text-gray-400">↑↓</span> Naviguer
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-gray-400">↵</span> Sélectionner
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-gray-400">ESC</span> Fermer
                      </span>
                    </div>
                  </div>
                </div>
              ) : query && filteredEvents.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-12 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <Search className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-gray-500 font-medium">
                    Aucun résultat trouvé
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Essayez avec d'autres mots-clés
                  </p>
                </motion.div>
              ) : (
                <div className="p-6 text-center text-gray-400">
                  Commencez à taper pour rechercher...
                </div>
              )}
            </div>

            {/* Suggestions rapides (si pas de recherche) */}
            {!query && (
              <div className="border-t border-gray-100 p-3 bg-gray-50">
                <p className="text-xs text-gray-500 mb-2">
                  Recherches populaires :
                </p>
                <div className="flex flex-wrap gap-2">
                  {ProgramData.slice(0, 3).map((event) => (
                    <button
                      key={event.id}
                      onClick={() => setQuery(event.title)}
                      className="px-3 py-1 bg-white text-xs text-gray-600 rounded-full border border-gray-200 hover:border-[#ac5f2d] hover:text-[#ac5f2d] transition-colors"
                    >
                      {event.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
