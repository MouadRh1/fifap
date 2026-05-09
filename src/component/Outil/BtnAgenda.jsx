import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const BtnAgenda = ({ onClick, label = "Agenda" }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      className="flex cursor-pointer items-center gap-2 px-5 py-3 bg-blue-600 text-white font-semibold rounded-2xl shadow-md hover:bg-blue-700 transition-all"
    >
      <Calendar className="w-5 h-5" />
        <Link to='/agenda'>
            {label}
        </Link>
    </motion.button>
  );
};

export default BtnAgenda;
