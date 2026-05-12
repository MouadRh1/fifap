import { image, title } from "framer-motion/client";
import React from "react";
import christophe from "./../Image/Christophe.png";
import Chorfi from "./../Image/chorfi-abde.jpeg";
import Jalil from "./../Image/Jalil-Nour.jpg";
import Rahmouni from "./../Image/Rahmouni_eltayeb.jpg";
import Ali from "./../Image/Ali-Safi.jpg";
import Khadija from "./../Image/Khadija-Benlamine.jpg";
import mohamed_mehdi_bensaid from "./../Image/Mohamed-Mehdi-Bensaid.webp";
import Tahar from "../Image/tahar-benredjeb.jpg";
import ImaneBennani from "../Image/imane-bennani.jpg";
import hanaeBekakri from "../Image/hanae-bekkari.jpg";
import rachidMaalal from "../Image/Rachid-Maalal.jpg";
import payenFrançoise from "../Image/françoise-payen.jpg";
import bouselaham from "../Image/Bouselham-Daif.jpg";
import lahrach from "../Image/Abderrahim-Lahrach.jpg";
import Hassan from "../Image/hassan.jpg";
import AgnèsHumruzian from "../Image/Agnès-Humruzian.jpg";
import fadhila from "../Image/fadhila.jpeg";
// import françoise from "../Image/françoise.jpeg";
import françoise from "../Image/Françoise.jpeg";
import fouad from "../Image/Fouad.jpeg";
import amal from "../Image/amal-ayouch.jpg";
import lemjidi from "../Image/lemjidi-abdelkhalek.jpg";
import chennaoui from "../Image/chennaoui.png";
import rachidBenzine from "../Image/rachid-benzine.jpg";
import hakim from "../Image/Hakim_Belabbes.jpg";
import nadia from "../Image/nadia-achour.png";
import meriem from "../Image/meriem_ait.jpeg";
import djillali from "../Image/Djillali-Hadjouis.png";
import basma from "../Image/basma.jpeg";

import { v4 as uuidv4 } from "uuid";
export const prefaces = [
  {
    id: uuidv4(),
    slug: "mohammed-mehdi-bensaid",
    nom: "Mohammed Mehdi BENSAID",
    image: mohamed_mehdi_bensaid,
    role: "Ministre de la Jeunesse, de la Culture et de la Communication",
    title:
      "Préface 2ème Edition : Festival International du Film Archéologique et Patrimonial",
    description: (
      <>
        Le cinéma a le même âge que l’anthropologie. Les deux activités naissent
        à la fin du XIXème siècle, avides, toutes les deux, d’explorer le monde,
        de se l’accaparer par la vue et l’écrit, de l’inventorier, de le
        classer, et quelque part de le dominer. Depuis, l’anthropologie, et ses
        disciplines sœurs, l’ethnologie, l’étude du patrimoine, l’archéologie,
        et les autres sciences soucieuses de l’humain dans toute sa diversité,
        se sont ouvertes sur la complexité, la pluralité, et l’égale dignité de
        toutes les cultures humaines. Le cinéma, à son tour, est devenu le
        porte-parole des voix et des récits marginaux ou alternatifs. C’est dire
        combien le film documentaire et l’étude du patrimoine et de
        l’archéologie ont de commun, tant dans les valeurs, que dans les
        méthodes ou les objectifs.
        <br />
        <br />
        Après une première édition réussie, le Festival International du Film
        Archéologique et Patrimonial confirme l’institutionnalisation de sa
        démarche avec cette deuxième édition qui le consacre comme rendez-vous
        régulier. Cette année, il inscrit sa programmation sous la thématique «
        Hommes, cultures, territoires ». Il rappelle ainsi l’importance des
        communautés et des localisations spatiales et symboliques où se déploie
        l’activité humaine. La grande variété des sujets abordés par les longs
        et courts métrages en est témoin : diversité dans le temps, depuis le
        paléolithique jusqu’à l’époque moderne ; diversité spatiale, depuis
        l’Extrême-Orient jusqu’aux Amériques, en passant par l’Afrique, l’Europe
        et le Moyen-Orient ; diversité des domaines et des sujets, musicologie
        et gastronomie, architecture et volcanologie…
        <br />
        <br />
        Cette pluralité ancrée dans les territoires résonne avec les Hautes
        Orientations de Sa Majesté le Roi Mohammed VI, que Dieu L’assiste,
        relatives à l’inscription du développement du Royaume dans la proximité
        et le souci des communautés et territoires concernés, à travers la
        concertation dans l’élaboration et l’implémentation des politiques
        publiques. Le film documentaire, et l’intérêt porté aux cultures et
        mémoires locales, aux récits et aux formes de mobilisation liées à la
        valorisation de l’histoire, procurent des outils supplémentaires pour
        construire cette émergence singulière, qui fait de la culture, de la
        mémoire et du lien social, son socle principal.
        <br />
        <br />
        Plus généralement, l’enjeu pour les pays du Sud est de poursuivre
        l’appropriation de leur(s) récit(s) et de leur(s) histoire(s), de faire
        parler le patrimoine, de le sortir de son mutisme, et de promouvoir une
        coopération culturelle et artistique internationale fondée sur le
        partage d’un universalisme pluriel. Et dans ce cadre, le rôle du
        Festival International du Film Archéologique et Patrimonial est décisif.
        <br />
        <br />
        En proposant conférences et débats, en ciblant des publics variés, en
        sélectionnant aussi bien des cinéastes confirmés que de jeunes
        réalisateurs, sous le regard esthète et érudit d’un jury de grande
        qualité, enfin en consacrant un prix spécial décerné par les étudiants,
        le FIFAP incarne par l’exemple une éthique inclusive et ouverte sur
        l’expérimentation et l’innovation.
        <br />
        <br />
        Il poursuit ainsi la vocation de ces deux jumeaux, le cinéma et l’étude
        du patrimoine. Et quel plus bel écrin pour ce Janus mi artiste mi savant
        que Rabat, ville aux mille visages !
      </>
    ),
    route: "preface",
  },
  {
    id: uuidv4(),
    slug: "khadija-benlamine",
    nom: "Khadija Benlamine",
    image: Khadija,
    title: "Archéologie,  Quelques repères historiques",
    role: "Directrice Du Festival",
    description: (
      <>
        Les premières fouilles archéologiques ont été effectuées dans les deux
        sites de Volubilis et de Lexus de 1885 à 1889 par Henri de la Martinière
        qui a édité plusieurs ouvrages sur le Maroc. Après l’instauration du
        protectorat français au Maroc, des missions archéologiques ont été mises
        en place afin de dévoiler les richesses archéologiques et patrimoniales
        du pays. En 1931, le premier Musée archéologique de Rabat et le Service
        des Antiquités sont créés. Il faut attendre le décret ministériel du 31
        janvier 1985 pour que l’Institut National des Sciences de l’Archéologie
        et du Patrimoine ouvre ses portes avec l'ambition d’une part de former
        des étudiants et d’autre part d’initier et de promouvoir la recherche
        archéologique. C’est ainsi que depuis trente ans de nombreux programmes
        de recherche dirigés par des archéologues nationaux, souvent en
        collaboration avec des établissements étrangers, ont mis au jour
        d’importantes découvertes. <br /> <br /> Parmi les principales, citons
        la découverte des plus anciens éléments de parure au monde dans la
        Grotte de Bizmoune (Essaouira) datant de plus de 145000 ans ; celle des
        plus anciens outils de confection de vêtements au Maroc, vieux de 120
        000 ans, dans la grotte des Contrebandiers près de Rabat ; celle de la
        plus ancienne trépanation connue à ce jour (12 000 ans BP) dans la
        grotte de Tafoughalt dans les Beni-Snassen. De nombreux autres sites
        reconnus, notamment des grottes, présentent des œuvres d'art rupestre,
        des peintures, des gravures et des sculptures élaborées.
      </>
    ),
    description2: (
      <>
        Depuis quelques années, les découvertes archéologiques se multiplient.
        Celle des vestiges d’hominidés de Jbel Irhoud, les plus vieux Homo
        Sapiens datés de plus 315 000 ans, ont suscité un intérêt universel.
        L’identification, par une équipe de chercheurs marocains, britanniques
        et italiens, à Oued Beht d’un site de production de céréales et de
        céramiques renouvelle nos connaissances sur la complexité du Nord-Ouest
        africain à la fin du Néolithique et sur ses interactions avec la
        péninsule Ibérique. Une équipe d’archéologues dirigée par le professeur
        Youssef Bokbot de l’Institut national des sciences de l’archéologie et
        du patrimoine (INSAP) vient de mettre au jour le premier village
        protohistorique connu du Maghreb, situé sur le site de Kach Kouch, dans
        la province de Tétouan. Cette découverte remet en question les idées
        reçues sur le développement des sociétés nord africaines avant l’arrivée
        des Phéniciens. <br />
        <br />
        Le dynamisme de l'archéologie marocaine vient d'être récompensé, aux
        Rencontres Archéologiques Narbonnaises, par le prix 2024 pour la
        préservation par l’étude du patrimoine archéologique méditerranéen qui a
        été attribué à la mission archéologique franco-marocaine « Sanctuaires
        et forteresses almohades ». <br />
        <br />
        Rabat, ville lumière et capitale du Maroc a été fondée au X siècle par
        les Almohades sous le règne d’Abd El Moumen (1133-1163). Sous
        l’impulsion de Yaqoub El Mansour (1184-1199), la ville va connaitre un
        grand essor. Le souverain fait édifier une grande muraille jalonnée de
        tours et percée de cinq portes. Il construit la mosquée de Hassan dont
        la tour s’apparente aux minarets de la Koutoubia à Marrakech et de la
        Giralda à Séville. Sidi Mohammed Ben Abdellah au 18ème siècle y
        construit un palais royal. La ville va être érigée en capitale du pays
        en 1912. <br />
        <br />
        L’histoire de Rabat s’enracine dans un passé très lointain, 400 000 ans,
        par la présence de vestiges d’Homo erectus (Salé et Rabat-Kebibat). Les
        grottes du littoral atlantique ont également livré des restes humains
        appartenant à une civilisation atérienne propre au Nord de l’Afrique et
        dont les datations remontent à plus de 92 000 ans. Le complexe
        archéologique de Chellah, situé sur une colline dominant la vallée de
        l’Oued Bouregreg, se compose d’une nécropole mérinide et de l’ancienne
        cité romaine de Sala. Il est entouré d’une muraille et abrite une
        mosquée, une médersa, un mausolée, un capitole, des thermes et un arc de
        triomphe. <br />
        <br />
        Neuf sites marocains sont inscrits sur la Liste du Patrimoine Mondial de
        l’UNESCO. Quinze autres éléments sont classés au patrimoine immatériel
        de l’humanité. Témoins des civilisations anciennes, ils possèdent une
        valeur culturelle et scientifique exceptionnelle, témoignant d’une
        singularité et d’une authenticité marocaines. Khadija Benlamine,
        directrice du FIFAP.{" "}
      </>
    ),
    route: "preface",
  },
];
export const comiteDorganisation = [
  {
    id: uuidv4(),
    slug: "khadija-benlamine-comite",
    nom: "Khadija Benlamine",
    image: Khadija,
    description:
      "Directrice du Festival, archéologue marocaine spécialisée en archéologie funéraire des périodes protohistoriques de l'Afrique du Nord. Trésorière du comité marocain du Conseil International des Monuments et des Sites (ICOMOS-Maroc) et secrétaire générale du Centre d'Études et de Recherches du Patrimoine Archéologique et Anthropologique du Moyen Atlas.",
    nationalite: "(Maroc)",
    route: "members",
    role: "Directrice du Festival",
  },
  {
    id: uuidv4(),
    slug: "tahar-benredjeb-comite",
    nom: "Tahar Benredjeb",
    image: Tahar,
    description:
      "Ingénieur d'études à la DRAC des Hauts-de-France (service régional de l'Archéologie) de 1977 à 2022. Il dirige depuis 1990 le Festival du Film d'Archéologie d'Amiens qui vient de tenir sa 18e édition.",
    nationalite: "(France)",
    route: "members",
    role: "Co-directeur du Festival",
  },

  {
    id: uuidv4(),
    slug: "nadia-achour",
    nom: "Nadia Achour",
    image: nadia,
    description:
      "Architecte et urbaniste, forte de plus de 30 ans d'expérience en aménagement urbain au Maroc, elle a consacré l'essentiel de sa carrière à la Société d'Aménagement Ryad (Groupe CDG), où elle a piloté et contribué à des projets urbains structurants à Rabat, notamment le développement du quartier de Hay Ryad conçu comme une « Ville Nouvelle ».",
    nationalite: "(Maroc)",
    route: "members",
    role: "Membre du Comité",
  },
  {
    id: uuidv4(),
    slug: "meryem-ait-ouali",
    nom: "Meryem Ait Ouali",
    image: meriem,
    description:
      "Professeure universitaire à l'Université Sidi Mohamed Ben Abdellah de Fès, ses travaux portent sur les enjeux du numérique, du développement durable, des villes intelligentes et de l'entrepreneuriat, dans une perspective de gouvernance et de développement territorial.",
    nationalite: "(Maroc)",
    route: "members",
    role: "Membre du Comité",
  },
  {
    id: uuidv4(),
    slug: "basma-elalj",
    nom: "Basma Elalj",
    image: basma,
    description: `Basma El Alj est lauréate de l'Institut Supérieur d'Art Dramatique et d'Animation Culturelle (ISADAC) et titulaire d'un Master en muséologie et métiers du patrimoine. 
      
      Elle a exercé en tant que médiatrice culturelle au sein du Centre Les Étoiles de la Médina – Fondation Ali Zaoua, où elle a contribué au développement de projets artistiques et culturels à fort impact social. 
      
      Au cours de son parcours, elle a assuré la gestion administrative de plusieurs troupes de théâtre et accompagne également différentes compagnies dans leur stratégie de communication. Son travail se situe à la croisée de la création artistique, de la médiation culturelle et de la valorisation du patrimoine.`,
    nationalite: "(Maroc)",
    route: "members",
    role: "Membre du Comité",
  },
  {
    id: uuidv4(),
    slug: "fadhila-chebbi",
    nom: "Fadhila Chebbi",
    image: fadhila,
    description:
      "Elle exerce très tôt dans le domaine culturel, d'abord en tant qu'administratrice, puis dans diverses fonctions : attachée de presse, responsable du mécénat, responsable de production, assistante à la mise en scène, pour se spécialiser sur la production et la diffusion du spectacle vivant en France.",
    nationalite: "(France)",
    route: "members",
    role: "Membre du Comité",
  },
  {
    id: uuidv4(),
    slug: "bouselham-daif",
    nom: "Bouselham Daif",
    image: bouselaham,
    description:
      "Auteur et metteur en scène, lauréat de l'institut supérieur d'art dramatique et d'animation culturelle, il a réalisé plusieurs pièces de théâtre et participé à des festivals en France, Tunisie, Algérie, Égypte, Syrie, Jordanie, Irak.",
    nationalite: "(Maroc)",
    route: "members",
    role: "Membre du Comité",
  },
  {
    id: uuidv4(),
    slug: "djillali-hadjouis",
    nom: "Djillali Hadjouis",
    image: djillali,
    description:
      "Paléontologue, paléoanthropologue et paléopathologiste diplômé du MNHN de Paris et des universités de Pierre et Marie-Curie Paris VI et de Perpignan, ancien archéologue départemental du Val-de-Marne et directeur de recherche honoraire au CNRPAH, longtemps associé au CNRS, au MNHN et professeur associé aux universités.",
    nationalite: "(France)",
    route: "members",
    role: "Membre du Comité",
  },
  {
    id: uuidv4(),
    slug: "nour-eddine-jallil",
    nom: "Nour-Eddine Jallil",
    image: Jalil,
    description:
      "Professeur au Muséum national d'Histoire naturelle et rattaché au Centre de recherche en Paléontologie - Paris du CNRS (France). Il est spécialiste des reptiles fossiles. En plus de son activité au MNHN, il reste fondamentalement attaché à la sauvegarde et à la valorisation du patrimoine paléontologique marocain.",
    nationalite: "(Maroc-France)",
    route: "members",
    role: "Membre du Comité",
  },
  {
    id: uuidv4(),
    slug: "abderrahim-lahrach",
    nom: "Abderrahim Lahrach",
    image: lahrach,
    description:
      "Professeur de l'enseignement supérieur à l'Université Sidi Mohammed Ben Abdellah, Directeur de l'École Nationale des Sciences Appliquées de Fès et Président du Centre d'Études et des recherches du Patrimoine Archéologique et Anthropologique du Moyen Atlas.",
    nationalite: "(Maroc)",
    route: "members",
    role: "Membre du Comité",
  },
  {
    id: uuidv4(),
    slug: "francoise-payen",
    nom: "Françoise Payen",
    image: payenFrançoise,
    description:
      "Présidente du CIRAS, elle gère tous les aspects organisationnels et logistiques du Festival du Film d'Archéologie d'Amiens. Elle a travaillé depuis de nombreuses années sur la numismatique romaine.",
    nationalite: "(France)",
    route: "members",
    role: "Membre du Comité",
  },
];
export const memberJury = [
  {
    id: uuidv4(),
    slug: "rachid-benzine",
    nom: "Rachid Benzine",
    image: rachidBenzine, // À remplacer par l'image correspondante
    description:
      "Président du jury. Politologue et islamologue. Chercheur associé au fonds Paul Ricoeur. Il est aussi romancier. Ses travaux portent sur le lien entre Récits et les théories de la reconnaissance. Il a notamment écrit pour le théâtre et le cinéma (Omar Sy, Julian Schnabel etc...). Son dernier roman « L'homme qui lisait des livres » a été traduit dans 20 pays.",
    nationalite: "(Maroc)",
    route: "members",
    role: "Président du Jury",
  },
  {
    id: uuidv4(),
    slug: "fouad-laroui",
    nom: "Fouad Laroui",
    image: fouad, // À remplacer par l'image correspondante
    description:
      "Écrivain, économiste et ingénieur marocain. Auteur prolifique d'expression française, il est célèbre pour son humour décapant et son ironie, qu'il utilise pour traiter des thèmes de l'identité, de l'exil et des préjugés culturels. Lauréat du Prix Goncourt de la nouvelle en 2013 pour L'Étrange Destin de M. Bechri, il vit aujourd'hui au Maroc où il enseigne la littérature et l'économétrie.",
    nationalite: "(Maroc-Pays-Bas)",
    route: "members",
    role: "Membre du Jury",
  },
  {
    id: uuidv4(),
    slug: "amal-ayouch",
    nom: "Amal Ayouch",
    image: amal, // À remplacer par l'image correspondante
    description:
      "Figure emblématique du cinéma et du théâtre marocain. Pharmacienne de formation, elle a choisi la scène pour devenir une actrice engagée, souvent récompensée pour ses rôles de femmes fortes et complexes. Elle est mondialement connue pour ses collaborations avec des réalisateurs comme Nabil Ayouch (Les Chevaux de Dieu) ou Farida Benlyazid, et pour son activisme en faveur des droits des femmes et de la culture.",
    nationalite: "(Maroc)",
    route: "members",
    role: "Membre du Jury",
  },
  {
    id: uuidv4(),
    slug: "hanae-bekkari",
    nom: "Hanae Bekkari",
    image: hanaeBekakri,
    description:
      "Architecte engagée dans la réconciliation des habitants avec le patrimoine et avec le cadre bâti. Elle est membre actif de la Fondation Tanger Al Madina depuis plus de 20 ans, et de Bab Marshan. Elle a participé au programme Madinati Ajmal et s'investit dans le Haouz où elle entretient des liens étroits avec les femmes en milieu rural.",
    nationalite: "(Maroc)",
    route: "members",
    role: "Membre du Jury",
  },
  {
    id: uuidv4(),
    slug: "Hakim-Belabbes",
    nom: "Hakim Belabbes",
    image: hakim, // À remplacer par l'image correspondante
    description:
      "Hakim Belabbes est né dans la ville marocaine de Boujad, où son père possédait le seul cinéma. Il a obtenu un baccalauréat ès arts en littérature américaine et africaine en 1983 à l'université Mohamed V de Rabat, au Maroc, et un diplôme d'études supérieures en cinéma et vidéo au Columbia College de Chicago, où il enseigne aujourd'hui la réalisation et la production cinématographiques. Belabbes a dirigé le département audiovisuel de la Fondation Hassan II à Rabat, où il a créé des films qui documentent les expériences des immigrants marocains en Europe. Il a produit et réalisé plus de 10 films et a reçu plusieurs prix.",
    nationalite: "(Maroc)",
    route: "members",
    role: "Membre du Jury",
  },
  {
    id: uuidv4(),
    slug: "hasna-chennaoui",
    nom: "Hasna Chennaoui",
    image: chennaoui, // À remplacer par l'image correspondante
    description:
      "Scientifique marocaine de renommée mondiale, spécialiste des météorites et de la planétologie. Professeure à l'Université Hassan II de Casablanca, elle est la première femme en Afrique et dans le monde arabe à avoir obtenu un doctorat d'État sur les météorites. Considérée comme la 'mère des météorites' au Maroc, elle préside la fondation Attarik et œuvre activement pour la préservation du patrimoine géologique et la promotion de la recherche spatiale.",
    nationalite: "(Maroc)",
    route: "members",
    role: "Membre du Jury",
  },
  {
    id: uuidv4(),
    slug: "francois-djindjian",
    nom: "François Djindjian",
    image: françoise, // À remplacer par l'image correspondante
    description:
      "Préhistorien, spécialiste du Paléolithique supérieur européen, il s'intéresse particulièrement à la classification des vestiges matériels et des procédés de fabrication. Membre de l'Union internationale des sciences préhistoriques et protohistoriques, il a animé la commission Méthodes et théorie de l'archéologie, dont il est devenu président en 2001. Participant à la réforme de cette institution en 2006, il en est devenu le trésorier en 2011 puis président de 2018 à 2023.",
    nationalite: "(France)",
    route: "members",
    role: "Membre du Jury",
  },

  {
    id: uuidv4(),
    slug: "abdelkhalek-lemjidi",
    nom: "Abdelkhalek Lemjidi",
    image: lemjidi, // À remplacer par l'image correspondante
    description:
      "Chercheur passionné et explorateur de terrain dédié à l'étude de la biodiversité en milieux arides. Spécialiste de la faune sauvage, il allie une expertise scientifique rigoureuse à une présence constante sur le terrain pour documenter et protéger des espèces souvent méconnues. À travers ses recherches et ses expéditions dans les paysages rocheux, il s'efforce de transmettre une meilleure compréhension des écosystèmes et de sensibiliser à la préservation du patrimoine naturel.",
    nationalite: "(Maroc)",
    route: "members",
    role: "Membre du Jury",
  },
];
