import React, { useState } from "react";
// import style from './Css/MembersItem.module.css'
import MotionSection from "./Outil/MotionSection";
import { motion } from "framer-motion";
import { comiteDorganisation, memberJury } from "../Data/Data_FR";
import LearnMore from "./Outil/LearnMore";
import { generateSlug } from "./Outil/slugUtils";
export default function MoreMembers() {
  return (
    <div className="text-center py-30 bg-orange-100/20">
      <h1 className="text-3xl  font-bold text-[#ac5f2d] mb-8">
        Comite D'organisation
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {comiteDorganisation.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 w-80 text-center"
          >
            <img
              src={member.image}
              alt={member.nom}
              className="w-full h-64 object-cover border-b border-gray-200"
            />
            {member.nom === "Khadija BENLAMINE" && (
              <div className="flex justify-center py-3 items-center">
                <span className="inline-flex items-center text-xs font-semibold text-white bg-blue-500 rounded-full px-1.5 py-0.5">
                  Directrice Du Festival
                </span>
              </div>
            )}
            <div className="p-4">
              <p
                style={{ fontFamily: "'Poppins', 'sans-serif'" }}
                className="text-xl font-semibold text-gray-800"
              >
                {member.nom}
              </p>
              <p className="text-gray-600">{member.nationalite}</p>
              <p className="text-gray-500 mt-2 line-clamp-1">
                {member.description}
              </p>
              <LearnMore path={member.route} name={generateSlug(member.nom)} />
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-bold text-[#ac5f2d] py-8">
        Members De Jury
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {memberJury.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 w-80 text-center"
          >
            <img
              src={member.image}
              alt={member.nom}
              className="w-full h-64 object-cover border-b border-gray-200"
            />
            <div className="p-4">
              <p
                style={{ fontFamily: "'Poppins', 'sans-serif'" }}
                className="text-xl font-semibold text-gray-800"
              >
                {member.nom}
              </p>
              <p className="text-gray-600">{member.nationalite}</p>
              <p className="text-gray-500 mt-2 line-clamp-1">
                {member.description}
              </p>
              <LearnMore path={member.route} name={member.nom} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
