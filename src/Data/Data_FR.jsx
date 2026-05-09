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
import françoise from "../Image/françoise.jpeg";
import fouad from "../Image/fouad.jpeg";
import amal from "../Image/amal-ayouch.jpg";
import lemjidi from "../Image/lemjidi-abdelkhalek.jpg";
import chennaoui from "../Image/chennaoui.png";
import rachidBenzine from "../Image/rachid-benzine.jpg";
import hakim from "../Image/Hakim_Belabbes.jpg";
import nadia from "../Image/nadia-achour.png";
import meriem from "../Image/meriem_ait.jpeg";
import djillali from "../Image/djillali-hadjouis.png";
import basma from "../Image/basma.jpeg";

import { v4 as uuidv4 } from "uuid";
export const prefaces = [
  {
    id: uuidv4(),
    slug: "mohammed-mehdi-bensaid",
    nom: "Mohammed Mehdi BENSAID",
    image: mohamed_mehdi_bensaid,
    role: "Ministre de la Jeunesse, de la Culture et de la Communication",
    title: "Festival International du Film Archéologique et Patrimonial ",
    description: (
      <>
        A la frontière du cinéma, de la recherche scientifique et de
        l’engagement culturel et citoyen, le film documentaire s’est frayé un
        chemin singulier et chatoyant de diversité, et son rôle comme vecteur de
        lien social, de dialogue interculturel et de débat civique, ne cesse de
        se renforcer. <br />
        <br />
        Le film documentaire s’est intéressé, depuis ses origines, au patrimoine
        culturel, et en particulier à ses manifestations monumentales. Mais le
        regard du film documentaire a toujours refusé le cliché et
        l’ornementation superficielle. Sa vocation est de rendre la parole au
        patrimoine, aussi fugace, aussi fragile soit-il. L’ethnologie, le vécu
        quotidien, les mille et un éléments qui font le patrimoine immatériel,
        furent très tôt reconnus par le film documentaire comme dignes du plus
        grand intérêt, au même titre que les monuments les plus majestueux. Ce
        regard visionnaire du film documentaire a précédé la reconnaissance au
        niveau mondial, et l’intérêt du grand public pour la culture dans ses
        aspects les plus variées et les moins spectaculaires. <br />
        <br />
        En organisant le premier Festival International du Film Archéologique et
        Patrimonial (FIFAP) de Rabat, le Centre d’Etudes et de Recherches du
        Patrimoine Archéologique et Anthropologique du Moyen-Atlas (CERPAAM)
        rend ainsi un triple hommage : au cinéma documentaire, au patrimoine
        marocain, et enfin à ce pan fabuleux de notre passé, et qu’on commence
        graduellement à découvrir et à estimer, notre patrimoine préhistorique.
        Car cette première édition, en prenant pour thème « Afrique du Nord :
        une réécriture de l’histoire humaine », met en lumière les découvertes
        archéologiques qui se multiplient au Maroc, confirmant sa place comme
        l’un des berceaux de l’humanité. <br />
        <br />
        Sous la Conduite Eclairée de Sa Majesté le Roi Mohammed VI, que Dieu
        L’assiste, le Royaume du Maroc s’est engagé fermement dans une émergence
        globale, qui fait de la culture le socle de son essor. Le patrimoine,
        dans ses deux dimensions matérielle et immatérielle, est aujourd’hui un
        pilier de nos politiques publiques. Parallèlement, un grand intérêt est
        porté aux industries culturelles et créatives, avec le cinéma comme
        locomotive. En consacrant le film documentaire, et singulièrement le
        documentaire portant sur le patrimoine archéologique, le FIFAP fait
        converger ces différentes passions marocaines, et sera voué à devenir un
        rendez-vous incontournable, surtout qu’il s’agit du premier festival de
        son genre en Afrique et dans le monde arabe. <br />
        <br />
        Le film documentaire n’est pas une restitution froide. Œuvre d’artistes
        et de créateurs, il s’agit d’un regard propre, et donc d’une
        interprétation du patrimoine. En donnant à voir et à entendre le riche
        passé universel, et en particulier notre préhistoire, les auteurs
        invités à cette première édition feront partager au public de Rabat leur
        passion, leur subjectivité, et leur engagement en faveur d’un espace
        public informé, enraciné dans son passé et ouvert sur le monde. <br />
        <br />
        Les prix qui seront remis par différents jurys, dont un jury étudiant,
        consolideront sans doute cette dynamique d’ouverture et d’enracinement.
        Surtout que les rapports que tisse le documentaire avec les sujets qu’il
        aborde peut en faire un puissant outil de développement. En permettant
        aux différents publics de se reconnecter avec divers éléments du
        patrimoine, le documentaire est en définitive un art à réécrire les
        récits des territoires et des communautés, à les rapprocher et à les
        faire dialoguer. <br />
        <span className="text-center font-bold py-4 text-2xl">
          Bon visionnage à tous !
        </span>
      </>
    ),
    route: "preface",
  },
  // {
  //   id: uuidv4(),
  //   slug: "rachid-maalal",
  //   nom: "Rachid Maalal",
  //   image: rachidMaalal,
  //   role: "Directeur de la Société de développement régional de Rabat",
  //   title:
  //     "Préface de la Société de Développement Régional Rabat Région Patrimoine Historique (RRPH)",
  //   description:
  //     "C'est avec une immense fierté que la Société de Développement Régional Rabat Région Patrimoine Historique (RRPH) s'associe à la première édition du Festival international du film archéologique et patrimoine de Rabat. Cet événement d'envergure, qui se déroule dans la capitale du Royaume, inscrite sur la Liste du patrimoine mondial de l'UNESCO, illustre l'engagement continu des acteurs locaux pour la valorisation et la diffusion du patrimoine culturel et historique. Le bien inscrit 'Rabat, Capitale moderne et ville historique : un patrimoine en partage' porte en lui les strates de l’histoire et de la mémoire collective. Parmi ses joyaux figure le site archéologique de Chellah, l’une des huit composantes du bien inscrit, témoignage unique de la richesse historique de notre ville et de son rôle central dans la préservation du passé. Le festival offre une sélection exceptionnelle de films documentaires qui explorent la richesse du patrimoine archéologique mondial. Chaque projection est une invitation à la découverte, à la réflexion et à l’admiration devant l’ingéniosité et la créativité des civilisations passées. En tant que partenaire de cette première édition, RRPH réaffirme son engagement en faveur de la conservation et de la promotion du patrimoine. Nous espérons que cet événement contribuera à sensibiliser un large public à l'importance de préserver et de transmettre notre héritage aux générations futures. Nous souhaitons à tous les participants un festival riche en découvertes et en émotions, et remercions chaleureusement les organisateurs et tous ceux qui ont contribué à la réalisation de cet événement unique. ",
  //   route: "preface",
  // },
  // {
  //   id: uuidv4(),
  //   slug: "agnes-humruzian",
  //   nom: "Agnès Humruzian",
  //   image: AgnèsHumruzian,
  //   role: "Directrice générale de l’Institut Français du Maroc",
  //   description: (
  //     <>
  //       Des murs épais de la mosquée de Tinmel, perchée dans les hauteurs de
  //       l’Atlas, aux colonnes torsadées de Volubilis, en passant par les
  //       intrigantes gravures rupestres d’Aït Ouazik, les exemples de la richesse
  //       patrimoniale et archéologique du Maroc ne manquent pas. Pourtant, ce
  //       remarquable héritage historique est souvent encore trop peu connu du
  //       grand public. C’est à ce constat que vient répondre le lancement de la
  //       première édition du Festival International du Film Archéologique et
  //       Patrimonial (FIFAP). <br />
  //       <br /> En mettant en avant des sites et lieux majeurs de l’histoire du
  //       Maroc comme du reste du bassin méditerranéen, le FIFAP permettra de
  //       faire découvrir à un large public des sites archéologiques et
  //       patrimoniaux parfois encore trop confidentiels. À l’heure où la science
  //       et ses acquis sont régulièrement bousculés et contestés, l’objectif de
  //       médiation que s’est donné le FIFAP constitue un enjeu majeur et une
  //       priorité. La connaissance du passé ne peut pas être cantonnée aux
  //       amphithéâtres d’universités et aux colonnes de revues spécialisées :
  //       elle doit pouvoir être partagée au sein de la société et participer à
  //       une meilleure compréhension du monde qui nous entoure. Dans ce processus
  //       de transmission du savoir, le film documentaire occupe indéniablement
  //       une place de choix : au carrefour des démarches artistiques,
  //       pédagogiques et scientifiques, il constitue un moyen de médiation
  //       attractif et accessible. <br />
  //       <br />
  //       Mais diffuser ces films ce n’est pas seulement contribuer au partage des
  //       savoirs, c’est aussi valoriser le travail précieux des chercheurs et des
  //       scientifiques ainsi que des réalisateurs et des cinéastes. C’est
  //       rappeler l’importance de la coopération internationale en matière de
  //       recherche : les découvertes archéologiques et les avancées scientifiques
  //       sont le fait d’équipes de chercheurs aux origines diverses et formés
  //       dans de nombreux pays différents. La mise à l’honneur par le festival du
  //       paléontologue français Yves Coppens vient témoigner du rôle clef joué
  //       par les collaborations internationales dans le champ de la recherche,
  //       parmi lesquelles on retrouve les relations privilégiées qui unissent les
  //       équipes scientifiques marocaines et françaises dans le domaine
  //       archéologique. <br />
  //       <br />À la croisée de ces différents enjeux, le FIFAP constitue donc une
  //       occasion unique d’échanger, d’apprendre et de découvrir, mais aussi de
  //       s’émerveiller devant la richesse et la beauté du patrimoine historique
  //       de l’humanité.
  //     </>
  //   ),
  //   route: "preface",
  // },
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
  // {
  //   id: uuidv4(),
  //   slug: "editorial",
  //   nom: "Khadija Benlamine & Tahar BENREDJEB",
  //   image: Khadija,
  //   image2: Tahar,
  //   title: "Éditorial",
  //   role: "Directeur de la Société de développement régional de Rabat",
  //   description: (
  //     <>
  //       Malgré cette richesse, le patrimoine culturel marocain, essentiellement
  //       cantonné dans les congrès et les colloques scientifiques, reste mal
  //       connu du grand public et des acteurs locaux et régionaux. Pas assez
  //       valorisé, il n’arrive pas à constituer un levier de développement
  //       durable. Néanmoins, la médiation du patrimoine, une préoccupation des
  //       archéologues et acteurs culturels, pose des questions relevant de la
  //       médiation scientifique et s’inscrit dans une approche de communication.
  //       En effet la mise en scène du patrimoine pourrait se construire autour
  //       d’un récit national pour instaurer une relation avec notre passé. Le
  //       film documentaire constitue l'un des moyens de médiation les plus
  //       attractifs, <br />
  //       <br />
  //       C'est la raison pour laquelle le Centre d’Études et de Recherches du
  //       Patrimoine Archéologique et Anthropologique du Moyen Atlas (CERPAAM),
  //       qui veut s'adresser à un large public, s'est lancé dans l'aventure en
  //       créant le Festival International du Film Archéologique et Patrimonial de
  //       Rabat (FIFAP) dont la première édition se déroulera du 23 au 26 avril
  //       2025. <br />
  //       <br />
  //       Le CERPAAM a bénéficié du concours du Festival du Film d'Archéologie
  //       d'Amiens créé il y a plus de trente ans, s'inscrivant ainsi dans les
  //       politiques actuelles de coopérations franco- marocaines en matière
  //       culturelle. Le FIFAP devient le premier rendez-vous des professionnels
  //       du cinéma documentaire d’archéologie et du patrimoine en Afrique et dans
  //       le monde Arabe. A ce titre, il rejoint le réseau des festivals du film
  //       archéologique organisés à Narbonne et Pech Merle en France, Oiasso en
  //       Espagne, Rovereto, Florence et Licodia Eubea en Italie, Athènes en
  //       Grèce, Nyon en Suisse, Split, en Croatie et Arkhaios aux USA. <br />
  //       <br />
  //       Trente-et-un documentaires (dont dix-neuf en compétition), traitant
  //       principalement des actualités archéologiques du bassin méditerranéen,
  //       vous transporteront à travers le temps à la recherche de nos ancêtres
  //       les plus lointains. Réalisateurs et archéologues, partageront avec les
  //       spectateurs leurs passions et leurs savoirs et les accompagneront dans
  //       ce voyage archéologique visuel et sonore. Les différentes thématiques
  //       autour de la Préhistoire seront largement développées. C'est tout
  //       natuellement que la séance d'inauguration, placée sous le thème «
  //       Afrique du Nord : une réécriture de l’histoire humaine » sera consacrée
  //       à la découverte de Jbel Irhoud. <br />
  //       <br />
  //       Durant le Festival, plusieurs interventions rendront hommage à Yves
  //       Coppens, paléontologue et préhistorien et ami du Maroc. Deux conférences
  //       et une présentation de livre seront également proposées au public.{" "}
  //       <br />
  //       <br />
  //       Pour l'équipe du FIFAP, Khadia Benlamine, directrice du FIFAP, Tahar
  //       Benredjeb directeur du Festival du Film d'Archéologie d'Amiens.
  //     </>
  //   ),
  //   route: "preface",
  // },
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
