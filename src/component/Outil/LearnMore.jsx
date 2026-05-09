import React from 'react'
import styles from '../Css/LearnMore.module.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
export default function LearnMore({className,children,onclick,path,name}) {
  return (
    <motion.div
        className={`${styles.learnMore} ${className}`}
        whileHover={{scale:1.05}}
        whileTap={{scale:0.9}}
        onClick={onclick}
    >
        <Link to={`/${path}/${name}`}>
            {children || "Voir Plus"}
        </Link>
    </motion.div>
  )
}
