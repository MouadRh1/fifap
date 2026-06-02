import React, { lazy, Suspense } from "react";
import Herosection from "../Herosection";
import Membresoffestival from "../Membresoffestival";
import WhatsappBtn from "../Outil/TicketFixed";
import ProgramHome from "./ProgramHome2026";
import SearchBar from "../SearchBar";
import Partenaire from "../Partenaire";
import ProgramHome2025 from "./ProgramHome2025";

const DownloadButton = lazy(() => import("../Outil/DownloadButton"));
const Home = () => {
  // console.log("Build du 21/04 13:58")
  return (
    <>
      <Herosection />
      <ProgramHome />
      {/* <Descriptionfestival/> */}
      {/* <Blogcontent/> */}
      <Membresoffestival />
      {/* <WhatsappBtn/> */}
      {/* <ProgramHome2025/> */}
      <Partenaire />
      <Suspense fallback={null}><DownloadButton /></Suspense>
    </>
  );
};

export default Home;
// import React from 'react'
// import Header from './Header'
// //{Motion}
// export default function Home() {

//   return (
//     <div>
//         {/* <Header/> */}
//     </div>
//   )
// }
// >>>>>>> Stashed changes
