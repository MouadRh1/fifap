import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../component/Pages/Home";
import About from "../component/Pages/About";
import Contact from "../component/Pages/Contact";
import Navbar from "../component/Pages/navBar";
import Program from "../component/Pages/ProgramTest";
import MembersItem from "../component/MembersItem";
import MoreMembers from "../component/MoreMembers";
import Actualites from "../component/Pages/Actualites";
import ProgramItem from "../component/ProgramItem";
import ScrollToTop from "../component/ScrollToTop";
import ScrollToTopButton from "../component/ScrollToTopButton";
import Footer from "../component/Footer";
import AutourFestival from "../component/Pages/AutourFestival";
import PrefaceItem from "../component/PrefaceItem";
import NotFound from "../component/Pages/NotFound";
import Conferences from "../component/Pages/Conferences";
import FestivalHommage from "../component/FestivalHommage";
import ContactForm from "../component/Pages/ContactForm";
import ChatButton from "../component/Outil/ChatBtn";
export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTopButton />
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div>Chargement du programme...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactez-nous" element={ <ContactForm/> } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/program/:year" element={<Program />} />
          <Route path="/moreMembers" element={<MoreMembers />} />
          <Route path="/actualite" element={<Actualites />} />
          <Route path="/autour" element={<AutourFestival />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/hommage" element={ <FestivalHommage/> } />
          {/* Routage entre deatils */}
          <Route path="/members/:slug" element={<MembersItem />} />
          <Route path="/preface/:slug" element={<PrefaceItem />} />
          <Route path="/program/:year/:slug" element={<ProgramItem />} />
          {/* notFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      {/* <ChatButton/> */}
    </BrowserRouter>
  );
}
