import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-orange-50 to-red-50 pt-20 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="mb-4"
        variants={floatingVariants}
        animate="float"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-orange-400"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      </motion.div>

      <motion.h1
        className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600 mb-4"
        variants={itemVariants}
      >
        404
      </motion.h1>

      <motion.p
        className="text-2xl md:text-3xl text-gray-600 mb-3 max-w-md leading-tight"
        variants={itemVariants}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      <motion.p
        className="text-gray-500 mb-4 max-w-md"
        variants={itemVariants}
      >
        Maybe you mistyped the URL or the page has been moved.
      </motion.p>

      <motion.button
        onClick={() => navigate("/")}
        className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Back to Home
      </motion.button>

      <motion.div
        className="absolute bottom-2 text-gray-400 text-sm"
        variants={itemVariants}
      >
        Need help? <span className="text-blue-500 cursor-pointer">Contact support</span>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;