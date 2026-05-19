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
import lemjidi from "../Image/lemjidi.jpeg";
import chennaoui from "../Image/chennaoui.png";
import rachidBenzine from "../Image/rachid-benzine.jpg";
import hakim from "../Image/hakim.jpeg";
import nadia from "../Image/nadia-achour.png";
import meriem from "../Image/meriem_ait.jpeg";
import djillali from "../Image/Djillali-Hadjouis.png";
import basma from "../Image/basma.jpeg";
import basmaOumaima from "../Image/basma-oumaima.jpeg";
import haroune from "../Image/haroune-hidaoui.jpeg";
import yamane from "../Image/yamane-aya.jpeg";
import ghita from "../Image/ghita-elouali.jpeg";
import saraZhiro from "../Image/sara-zhiro.jpeg";

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
    title: "Archéologie, Quelques repères historiques",
    role: "Directrice Du Festival",
    description: (
      <>
        Depuis sa création, le Centre d'Etudes et de Recherches du Patrimoine
        Archéologique et Anthropologique du Moyen Atlas (CERPAAM) a pour mission
        la promotion et la valorisation du patrimoine archéologique et culturel
        marocain. En parallèle de ses campagnes de prospections et de fouilles
        archéologiques au Moyen Atlas menées depuis 2019, le CERPAAM développe
        également des actions adressées au grand public dont la mise en place
        d'un nouvel événement culturel et patrimonial : l'organisation de la
        première édition du FIFAP en avril 2025.
        <br />
        <br />
        La mise en scène du patrimoine pourrait se construire autour d'un récit
        pour instaurer une relation avec notre passé. À ce titre, le film
        documentaire constitue l'un des moyens de médiation les plus attractifs.
        Il a bénéficié du concours du Festival du Film d'Archéologie d'Amiens
        créé il y a plus de trente ans, s'inscrivant ainsi dans les politiques
        actuelles de coopérations franco-marocaines en matière culturelle.
        <br />
        <br />
        Après un premier succès retentissant, le Festival International du Film
        Archéologique et Patrimonial de Rabat revient pour une deuxième édition,
        du 9 au 13 juin 2026. Placée sous le thème « Hommes, cultures,
        territoires », cette édition nous plonge pendant une semaine dans un
        voyage épique à travers le temps et l'espace. Elle proposera un
        programme riche et diversifié à travers la projection de 22 films, dont
        16 seront en compétition. Ces films retracent l'évolution culturelle de
        l'humanité depuis la préhistoire jusqu'à la période antique.
        <br />
        <br />
        Le FIFAP organisé à Rabat, capitale du Royaume et ville Lumière, devient
        le premier rendez-vous des professionnels du cinéma documentaire
        d'archéologie et du patrimoine en Afrique et dans le monde Arabe. Il
        rejoint le réseau des festivals du film archéologique organisés à
        Amiens, Narbonne et Pech Merle (France), Oiasso (Espagne), Rovereto,
        Florence et Licodia Eubea (Italie), Athènes (Grèce), Nyon (Suisse),
        Split (Croatie) et Arkhaios (USA).
        <br />
        <br />
        Sous la thématique de sa première édition « Afrique du Nord, pour une
        réécriture de l'histoire humaine », une trentaine de films traitant
        principalement de la Préhistoire et des actualités archéologiques ont
        transporté le public de Rabat du 23 au 27 avril 2025, à travers le
        temps, à la recherche de nos ancêtres les plus lointains. Réalisateurs
        et archéologues ont partagé avec les spectateurs leurs passions et leurs
        savoirs et les ont accompagnés dans ce voyage archéologique visuel et
        sonore.
        <br />
        <br />
        Comme pour la première édition, des archéologues, des architectes, des
        paléontologues et des chercheurs éminents et de renommée internationale
        dans les domaines du patrimoine seront aussi au rendez-vous. Ils
        animeront des conférences sur les grandes découvertes archéologiques
        récentes au Maroc, dédiées au grand public. Le festival sera ainsi un
        espace de rencontres et offrira une occasion unique pour le public
        marocain de découvrir et de s'ouvrir sur les nouvelles expériences de
        production cinématographique dans les domaines de l'archéologie et du
        patrimoine.
        <br />
        <br />
        Khadija Benlamine, directrice du FIFAP.
      </>
    ),
    route: "preface",
  },
  {
    id: uuidv4(),
    slug: "khadija-et-tahar",
    nom: "Khadija Benlamine & Tahar BENREDJEB",
    image: Khadija,
    image2: Tahar,
    title: "Éditorial",
    description: (
      <>
        Le patrimoine ne se transmet vraiment que lorsqu'il devient récit. Le
        film documentaire en est aujourd'hui l'un des vecteurs les plus
        puissants. Il donne à voir, à comprendre, à ressentir. En collaboration
        avec le Festival du Film d'Archéologie d'Amiens, fondé il y a plus de
        trente ans, le FIFAP s'inscrit d'emblée dans une dynamique de
        coopération franco-marocaine et dans un réseau international qui relie
        Rabat à Amiens, Narbonne, Pech Merle, Oiasso, Rovereto, Florence,
        Athènes, Nyon, Split ou encore Arkhaios. Rabat rejoint ainsi les grandes
        capitales du film d'archéologie.
        <br />
        <br />
        La deuxième édition, du 9 au 13 juin 2026, confirmera cette vocation.
        Placée sous le thème « Hommes, cultures, territoires », elle propose un
        voyage, pendant une semaine, à travers le temps et l'espace. Vingt-deux
        films seront projetés, dont seize en compétition, retraçant l'aventure
        humaine depuis la préhistoire jusqu'à la période antique en passant par
        les premières peintures pariétales et par l'invention de l'écriture.
        C'est une invitation à regarder d'où nous venons pour mieux comprendre
        qui nous sommes.
        <br />
        <br />
        La première édition avait donné le ton. Du 23 au 27 avril 2025, une
        trentaine de films consacrés à la Préhistoire et aux découvertes
        récentes avaient transporté le public de Rabat. Réalisateurs et
        archéologues ont partagé leurs passions, leurs méthodes, leurs
        questions. Ils ont montré que la recherche ne se fait pas à huis clos :
        elle se partage.
        <br />
        <br />
        En 2026, cette exigence se poursuit. Archéologues, architectes,
        paléontologues et chercheurs de renommée viendront animer des
        conférences de vulgarisation scientifique autour des grandes découvertes
        faites au Maroc. Le festival devient ainsi carrefour : entre
        disciplines, entre chercheurs et citoyens, entre le Maroc et le monde.
        <br />
        <br />
        Le FIFAP n'est pas seulement un festival. C'est un espace de rencontre,
        un lieu où la science sort des laboratoires pour dialoguer avec la
        société. C'est aussi une occasion unique pour le public marocain de
        découvrir la richesse du cinéma documentaire consacré à l'archéologie et
        au patrimoine, et de participer à la réécriture de l'histoire humaine,
        en particulier celle de l'Afrique du Nord.
        <br />
        <br />
        Rabat, ville lumière et capitale du Royaume, devient avec le FIFAP le
        premier rendez-vous du cinéma documentaire d'archéologie en Afrique et
        dans le monde arabe. Une étape importante dans la reconnaissance et la
        valorisation de notre patrimoine commun.
        <br />
        <br />
        Pour l'équipe du FIFAP, Khadija Benlamine, directrice du FIFAP, Tahar
        Benredjeb, directeur du Festival du Film d'Archéologie d'Amiens.
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
      "Amal Ayouch est l’une des figures phares représentative de la scène culturelle marocaine, réputée notamment pour ses choix artistiques exigeants et engagés. Sa carrière est riche d’une grande variété de rôles dans des films marocains tels que Ali Zaoua, Destin de femmes, les Anges de Satan, L'Orchestre de minuit, et internationaux, The Jesus Code, Palestina, Gladiator 2.. Son parcours théâtral dans Antigone, En attendant Godot  de Samuel Beckett, Ophélie n’est pas morte de Nabyl Lahlou, Roméo et Juliette ou encore l’adaptation de La Civilisation ma mère de Driss Chraibi, et des ouvrages de Fatéma Mernissi…témoigne de son amour pour les mots et le texte. Femme engagée, elle est marraine de l’association « Solidarité Féminine », pour qui elle a recueilli les témoignages de mères célibataires, et les a réécrit pour donner lieu à une pièce de théâtre « Violenscène », puis un livre « A haute voix »",
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
      "Abdelkhalek Lemjidi est lauréat (1990) de l'Université de Leningrad (ex-URSS), archéologue spécialisé dans l'art rupestre, professeur (à la retraite) au département de préhistoire de l'Institut national des sciences de l'archéologie et du patrimoine (INSAP) de Rabat. Il mène des recherches archéologiques et paléopaysagères au Sud marocain, principalement dans le bassin de la Saqia Al Hamra à Smara.",
    nationalite: "(Maroc)",
    route: "members",
    role: "Membre du Jury",
  },
];
export const juryEtudiant = [
  {
    id: uuidv4(),
    slug: "sara-zhiro",
    nom: "Sara ZHIRO",
    image: saraZhiro, // À remplacer par l'image correspondante
    description:
      "Étudiante à l'Institut national de musique et des arts chorégraphiques (première année)",
    nationalite: "(Maroc)",
    route: "members",
    role: "Membre du Jury Étudiant",
  },
  {
    id: uuidv4(),
    slug: "yamane-aya",
    nom: "Yamane Aya",
    image: yamane, // À remplacer par l'image correspondante
    description:
      "Étudiante à l'École nationale d'architecture de Rabat (première année)",
    nationalite: "(Maroc)",
    route: "members",
    role: "Membre du Jury Étudiant",
  },
  {
    id: uuidv4(),
    slug: "haroune-el-hidaoui",
    nom: "Haroune EL HIDAOUI",
    image: haroune, // À remplacer par l'image correspondante
    description:
      "Étudiant en 6ème année à l'école d'architecture de Rabat (UIR)",
    nationalite: "(Maroc)",
    route: "members",
    role: "Membre du Jury Étudiant",
  },
  {
    id: uuidv4(),
    slug: "ghita-louali",
    nom: "Ghita LOUALI",
    image: ghita, // À remplacer par l'image correspondante
    description:
      "Étudiante à l'Institut supérieur d'art dramatique et d'animation culturelle (3ème année)",
    nationalite: "(Maroc)",
    route: "members",
    role: "Membre du Jury Étudiant",
  },
  {
    id: uuidv4(),
    slug: "basma-oumaima",
    nom: "Basma Oumaima",
    image: basmaOumaima, // À remplacer par l'image correspondante
    description:
      "Étudiante en 3ème année cycle fondamentale à l'INSAP (option archéologie subaquatique)",
    nationalite: "(Maroc)",
    route: "members",
    role: "Membre du Jury Étudiant",
  },
];