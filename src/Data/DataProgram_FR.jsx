// ==================== NOUVEAU PROGRAMME FIFAP 2026 ====================
// 2e Festival International du Film Archéologique et Patrimonial de Rabat
// 9 - 14 juin 2026

// Importation des images
import image1 from "./../Image/actu_IMG1.png";
import image2 from "./../Image/actu_IMG2.png";
import image4 from "./../Image/actu_IMG4.png";
import venusEspugue from "./../Image/venus-de-lespugue.jpg";
import bizmone from "./../Image/bizmone.jpg";
import image6 from "./../Image/actu_IMG6.png";
import image7 from "./../Image/actu_IMG7.png";

import appelRep from "./../Image/lappelDeRep.jpg";
import sapiensNaissance from "./../Image/sapiens-naissance.jpg";
import grotteChauvet from "./../Image/Grotte-Chauvet.jpg";
import homoSapiens from "./../Image/homo-sapiens.jpg";
import saharaVert from "./../Image/sahara-vert.jpg";
import cartage from "./../Image/cartage.jpg";
import Liban from "./../Image/Liban.jpg";
import sousSreet from "./../Image/sous-street.jpg";
import alhambraTresor from "./../Image/alhambra-tresor.jpg";
import sagradaFamilia from "./../Image/sagrada-familia.jpg";
import amazoneFemme from "./../Image/amazone-femme.jpg";
import mystereHomme from "./../Image/mystere-homme.jpg";
import Artémis from "./../Image/Artémis.jpg";
import tautavelVivre from "./../Image/tautavel-vivre-europe.jpg";
import teviecMeurtre from "./../Image/teviec-meurtre.jpg";
import Diner from "./../Image/Diner.webp";
import hammamet from "./../Image/hammamet.jpg";
import mesopotamieIrak from "./../Image/mesopotamie-irak.jpg";
import missionMediterrane from "./../Image/mission-mediterrane.jpg";
import Philae from "./../Image/philae.jpg";
import Etrusques from "./../Image/Etrusques.jpg";
import naufrages from "./../Image/naufrages.jpg";
import iznik from "./../Image/iznik.jpg";
import discours from "./../Image/discours.jpg";
import palaisPersepolie from "./../Image/palais-persepolie.jpg";
import cineBlanca from "../Image/cine-blanca.jpg";
import awards from "../Image/awards.jpg";
import citeObliee from "../Image/cite-obliee.png";
import conferance from "../Image/conferance.jpg";
import concert from "../Image/concert.jpg";
import benNacer from "../Image/ben-nacer.jpg";
import Ronald from "../Image/Roland-carre.jpg";
import Rabia from "../Image/Rabia-ridaoui.jpg";
import appelDeRep from "../Image/appelRep.jpg";

import { v4 as uuidv4 } from "uuid";

const ProgramData_FR = [
  // ==================== MARDI 9 JUIN 2026 ====================
  {
    id: uuidv4(),
    slug: "Lancement-du-Festival",
    date: "Mercredi 23 Avril 2025",
    time: "14:00",
    place: "Cinéma Bahnini",
    title: "Lancement du Festival",
    description: "14h. Au cœur de la grotte Chauvet",
    activities: [
      {
        a_id: 1,
        a_title: "Chauvet, voyage aux origines",
        a_image: image1,
        a_description:
          "Réalisé par Guy Padovani (France.tv studio, 2025, 90'). En décembre 1994, une merveille archéologique enfouie au cœur de l’impressionnant massif calcaire des gorges de l’Ardèche est découverte : la grotte Chauvet. Les scientifiques réalisent immédiatement le caractère exceptionnel de cette grotte : scellée par un éboulement depuis plus de 20 000 ans, elle présente un état de conservation hors du commun. Comment ce joyau de l’art pariétal, orné de plusieurs centaines d'œuvres, est-il parvenu jusqu’à nous ? Comment et par qui a-t-il été créé ? Et comment en garantir la transmission aux générations futures ? Chauvet, le premier chef-d’œuvre de l’humanité nous propulse dans une aventure archéologique, géologique et artistique aux côtés des scientifiques qui, depuis trente ans, travaillent à la compréhension et à la conservation de cette grotte unique au monde.",
      },
      {
        a_id: 2,
        a_title: "Grotte Chauvet - Dans les pas des artistes de la Préhistoire",
        a_image: grotteChauvet,
        a_description:
          "Réalisé par Alexis de Favitski (TSVP - Tournez S'il Vous Plaît, CNRS Images, 2024, 88'). Nichée dans les gorges de l’Ardèche, Chauvet, l’une des plus anciennes grottes ornées au monde, a surgi en décembre 1994 sous les yeux éblouis de Christian Hillaire, Éliette Brunel et Jean-Marie Chauvet, trois archéologues amateurs. Remontant, pour certaines, à 36 000 ans avant notre ère, ses centaines de figures d’animaux témoignent de la maîtrise époustouflante du dessin et de la composition d’Homo sapiens.",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px]"
            src="https://www.youtube.com/embed/S6rX9O4oC-g"
            title="Grotte Chauvet : dans les pas des artistes de la préhistoire | Documentaire | ARTE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "Inauguration-du-Festival.",
    date: "Mercredi 23 Avril 2025",
    time: "19:00",
    place: "Théâtre Mohammed V",
    title: "Inauguration du Festival",
    description: "Séance 2. 20h. Préhistoire du Maroc",
    activities: [
      {
        a_id: 3,
        a_title: "Aux confins du cosmos : du berceau de la vie à l'infini",
        a_image: image2,
        a_description:
          "Réalisé par Najib El Mokhtari (2025, 12'). À travers un voyage captivant dans les vastes étendues du cosmos, ce documentaire explore les différentes échelles de l’Univers, en partant de l’échelle humaine jusqu’aux plus grandes structures galactiques. Chaque étape révèle la majesté et la complexité de l’Univers, tout en célébrant la Terre comme berceau unique de la vie et de la conscience.",
      },
      {
        a_id: 4,
        a_title: "Homo sapiens : les nouvelles origines",
        a_image: homoSapiens,
        a_description:
          " Réalisé par Olivier Julien (Arte, Bellota Films, 2020, 86'). En Juin 2017, une double publication dans la toute souveraine revue « Nature » vient bouleverser le monde scientifique. La datation des restes de cinq individus trouvés au Maroc, à environ 315 000 ans, repousse de 100 000 ans l’âge de notre espèce. Les progrès en paléontologie virtuelle ont permis de révéler des informations nouvelles sur ces restes, dont un premier crâne trouvé en 1960 déjà, mais mal interprété à l’époque. Jebel Irhoud au Maroc, devient le théâtre d’une des plus grandes aventures scientifiques et humaines du XXème siècle. Une découverte qui vient bouleverser l’histoire jusqu’à présent admise de notre espèce. De la même manière qu’elle ouvre une brèche dans le temps, La découverte d’Irhoud en ouvre également une dans l’espace. Il faut envisager le continent africain d’il y a 300 000 ans comme un vaste territoire « global », sans la barrière que représente le Sahara. On découvre avec les chercheurs en paléoclimat, les épisodes de « Sahara vert » dans un continent qui en réalité,est aussi étendu que les Etats-Unis, la Chine, l’Inde et une bonne partie de l’Europe réunis. Un berceau de l’Humanité à la taille de cet immense continent, animé par d’importants mouvements migratoires que l’on n’aurait jamais imaginés auparavant. Ce film expose la nouvelle vision panafricaine de notre évolution et nous permet de découvrir la place, jusque là sous estimée, de l’Afrique du Nord dans ce récit.",
        youtube: (
          <iframe
            src="https://geo.dailymotion.com/player.html?video=x7x0aco"
            className="w-full h-[350px] md:h-[400px] lg:h-[500px]"
            allowfullscreen
            title="Dailymotion Video Player"
            allow="web-share"
          ></iframe>
        ),
      },
      {
        a_id: 105,
        a_title: "22 h : cocktail",
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "Art-rupestre-du-Sahara",
    date: "Jeudi 24 Avril 2025",
    time: "09:30",
    place: "Cinéma Renaissance",
    title: "Art rupestre du Sahara",
    description:
      "Découvrez les mystères de l’art rupestre du Sahara et les expéditions archéologiques dans le désert.",
    activities: [
      {
        a_id: 5,
        a_title: "L'appel du rupestre land",
        a_image: appelDeRep,
        a_description:
          "Réalisé par Ghizlane Assif - Best Drone - 56 minutes Un voyage initiatique au cœur du Sahara, là où les pierres murmurent les secrets d'un monde oublié. Oubliez les sentiers battus, embarquez pour un road-movie envoûtant, d'Agadir à Esmara, à la rencontre de Moloud Biba, gardien passionné du désert, de l'archéologue Lemjidi, déchiffreur de l'invisible, et du peintre Djimi, révélateur de beauté. Ensemble, ils luttent contre l'oubli et le vandalisme, érigeant un livre-hommage comme un phare dans la nuit de l'indifférence. Soutenu par le Fonds d'aide du Centre cinématographique Marocain, ce film est une invitation à un voyage sensoriel qui nous plonge dans un univers où l'art rupestre se révèle comme un miroir de notre humanité. « L'appel du rupestre - land » n'est pas seulement un film, c'est une expérience, une quête de sens, un cri du cœur pour la préservation de notre patrimoine commun.",
      },
      {
        a_id: 6,
        a_title: "Sahara vert, l'énigme du paradis perdu",
        a_image: saharaVert,
        a_description:
          " réalisé par Saléha Gherdane (Candice Souillac pour J2F Prod, avec la participation de France 5, 2024, 90'). Longtemps, le Sahara a été considéré comme une étendue immuable de sable et de roche. Mais, dans les années 50, un chercheur du musée de l’Homme met au jour des centaines de milliers de peintures rupestres dans le Sud de l’Algérie. Ces chefs d’œuvre, datant de la Préhistoire, révèlent au monde occidental un passé insoupçonné. Avant d’être un désert, le Sahara était un eldorado verdoyant où l’on chassait le lion et l’autruche où des sociétés culturelles complexes se sont développées.  Que savons-nous de ces peuples du Sahara vert ? A quoi ressemblait leur environnement ?  Par quels mécanismes leur paradis est-il devenu le désert que nous connaissons aujourd’hui ? Cette vaste enquête met en lumière un chapitre méconnu de l’histoire de l’humanité : la métamorphose du Sahara. Grâce aux technologies d’investigation les plus récentes, les scientifiques découvrent de nouvelles preuves ensevelies sous le sable, immergées au fond de l’océan ou gravées dans la pierre. Peu à peu, ils percent les derniers secrets du Sahara Vert et nous révèlent l’histoire de ce paradis perdu… .",
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "Archéologie-du-bassin-méditerranéen",
    date: "Jeudi 24 Avril 2025",
    time: "14:00",
    place: "Cinéma Renaissance",
    title: "Archéologie du bassin méditerranéen",
    description:
      "Explorez les sites archéologiques emblématiques du bassin méditerranéen et leurs richesses historiques.",
    activities: [
      {
        a_id: 7,
        a_title: "Volubilis, la cité miraculée",
        a_image: image4,
        a_description:
          "Réalisé par Hassan Boufous (Laboucine Faouzi, Al Oula, 2023, 85'). Le site archéologique de Volubilis, situé près de Meknès, est un joyau patrimonial marocain. Ce documentaire plonge dans l’histoire de cette cité antique, son architecture, sa vie quotidienne et son rôle économique.",
      },
      {
        a_id: 8,
        a_title: "Carthage : la cité aux deux empires",
        a_image: cartage,
        a_description:
          "Réalisé par Fabrice Buysschaert (ZED pour TCD, ZDF & Histoire TV, 2024, 53'). Carthage, l’une des plus grandes cités de l’Empire romain, rivalisait avec Rome grâce à ses constructions hors normes. Ce documentaire explore l’histoire de cette cité flamboyante et les secrets de son déclin.",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px] lg:h-[500px]"
            src="https://www.youtube.com/embed/3860Rgeb05o"
            title="Carthage, la cité des deux empires - Mégacités antiques"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 9,
        a_title: "Liban, les secrets du royaume de Byblos",
        a_image: Liban,
        a_description:
          "Réalisé par Philippe Aractingi (GEDEON Programmes, ARTE France, 2024, 52'). Les vestiges millénaires de Byblos, au Liban, constituent l’un des sites archéologiques les plus fascinants du Proche-Orient. Ce documentaire suit une équipe d’archéologues qui a découvert une nécropole intacte datant de près de 4 000 ans.",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px] lg:h-[500px]"
            src="https://www.youtube.com/embed/80fpZP3lijY"
            title="Liban, les secrets du royaume de Byblos - BA | Documentaire | ARTE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "Presentation-du-livre-et-Séance-Dédicace",
    date: "Jeudi 24 Avril 2025",
    time: "17:45",
    place: "Ex Palais de Justice",
    title:
      'Presentation du livre et Séance Dédicace "CinéCasablanca, la Ville BLanche en 100 films" de Rabéa Ridaoui et Roland Carrée (édition Le Fenenc) ',
    image: cineBlanca,
    descImage: (
      <>
        Dès les premiers films de l’époque coloniale, Casablanca se voit
        mythifiée par le 7e Art. Le lien se nourrit avec le temps de nombreuses
        autres réalisations étrangères, et la capitale économique marocaine
        devient alors l’une des villes les plus filmées au monde. Avec
        l’émergence du cinéma national, à partir de l’indépendance, s’instaure
        l’intention de saisir un certain esprit marocain à rebours des
        stéréotypes et de dresser des constats d’ordres politique, social,
        économique et culturel allant de pair avec la manière contrastée dont
        vit et fonctionne Casablanca qui devient, ainsi, un véritable
        personnage. La Ville Blanche sait aussi se déguiser pour représenter
        d’autres métropoles du monde. De fait, explicitement ou non, Casablanca
        nous est familière. Sur la base d’une sélection de cent films nationaux
        et internationaux, du début du XXe siècle à nos jours, ce livre
        s’attache à analyser la façon dont Casablanca y apparaît et en décrypte
        les intentions artistiques, le choix des lieux, le contexte historique,
        urbanistique et architectural comme les interprétations par rapport à la
        réalité. Ce livre offre ainsi l’opportunité de (re)visiter la ville tout
        en parcourant l’histoire du cinéma. Roland Carrée est docteur en Études
        cinématographiques de l’Université Rennes 2 et enseignant en cinéma à
        l’ESAV (École Supérieure des Arts Visuels), à Marrakech. Ses recherches
        et actions portent essentiellement sur le cinéma marocain, le cinéma au
        Maroc et le cinéma d’animation. Rabéa Ridaoui est juriste de formation,
        animatrice culturelle et formatrice en cinéma pour l’Institut français
        du Maroc, présidente de l’association Casamémoire de 2019 à 2023 et
        vice-présidente de l’association Nouvelle Vision pour la formation et
        l’insertion des jeunes.
      </>
    ),
    activities: [
      {
        a_id: 1,
        // a_date: "Vendredi 25 Avril 2025 à 17h30",
        a_title: "Roland Carrée",
        a_image: Ronald,
        a_description:
          "Conférence de Abdelouahed Ben-Nacer sur l’évolution humaine et les découvertes archéologiques récentes.",
      },
      {
        a_id: 2,
        // a_date: "Samedi 26 Avril 2025 à 17h45",
        a_image: Rabia,
        a_title: "Rabéa Ridaoui",
        a_description:
          "Conférence de Abdelkhalek Lemjidi sur l’art rupestre et son importance dans le Sud marocain.",
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "De-l'art-préhistorique-au-Street-Art",
    date: "Vendredi 25 Avril 2025",
    time: "09:30",
    place: "Cinéma Renaissance",
    title: "De l'art préhistorique au Street Art",
    description:
      "Découvrez les liens entre l’art préhistorique et le street art, et comment les artistes contemporains s’inspirent du passé.",
    activities: [
      {
        a_id: 9,
        a_title: "Découverte de la grotte de bizmone",
        a_image: bizmone,
      },
      {
        a_id: 10,
        a_title: "La Vénus de Lespugue, Joconde de la préhistoire",
        a_image: venusEspugue,
        a_description:
          "Réalisé par Anaïs Enshaian (La voie lactée, le LoKal, France Télévisions, 2023, 52'). La Vénus de Lespugue, haute de 14 cm, est un joyau en ivoire de mammouth, actuellement exposée au Musée de l’Homme à Paris. Elle a été retrouvée en 1922 aux pieds des Pyrénées, par René de Saint Périer, un médecin passionné d’archéologie, alors presque aveugle ! Datée de - 25 000 ans la sculpture avec ses courbes généreuses, ses fractures et sa construction mathématique, a inspiré notamment Picasso et Giacometti. Nathalie Rouquerol, spécialiste de la préhistoire, nous emmène à la rencontre de personnalités qui nous éclairent sur cette véritable « Joconde du Paléolithique »..",
      },
      {
        a_id: 11,
        a_title: "Sous le street-art, le Louvre",
        a_image: sousSreet,
        a_description:
          "Réalisé par Frédéric Bouquet-Grilli (Merapi Productions, 2023, 52'). 'Faut-il brûler le Louvre ?'. La question fut posée aux artistes en 1919 par la revue d'avant-garde 'L'Esprit nouveau', qui derrière la provocation, interrogeait en réalité le rapport des artistes au passé, à la tradition, aux grands maitres. Le passé est-il encombrant, voire paralysant, ou au contraire nourricier, donc inspirant ? Cette même question a été posée 100 ans plus tard aux street-artistes qui envahissent les rues à coup de bombes, pochoirs, affiches et autres stickers. En effet, le street-art dans sa version figurative puise dans un large répertoire d'images allant de la culture pop aux chefs d'œuvre de l'histoire de l'art dont un grand nombre est précisément conservé au Louvre. Quel rapport entretiennent les artistes urbains avec l'œuvre originale et, partant, avec l'institution muséale ?.",
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "Merveilles-architecturales-d'Espagne",
    date: "Jeudi 24 Avril 2025",
    time: "20:00",
    place: "Cinéma Renaissance",
    title: "Merveilles architecturales d'Espagne",
    description:
      "Explorez les merveilles architecturales de l’Espagne, de l’Alhambra à la Sagrada Familia.",
    activities: [
      {
        a_id: 12,
        a_title: "Alhambra, Le trésor du dernier sultanat d’Espagne",
        a_image: alhambraTresor,
        a_description:
          "réalisé par Marc Jampolsky (GEDEON Programmes, ARTE France, RTVE, FutureMarsMedia WW, 2024, 90'). Lorsqu'en 1492 les couronnes d'Aragon et de Castille font tomber le sultanat de Grenade et pénètrent à l'intérieur des dix hectares cernés de muraille de sa forteresse, au sommet de la colline qui domine la ville, les envahisseurs restent muets devant la magnificence du lieu. C'est que l'Alhambra ('Al Hamra', littéralement 'la rouge', en arabe, la couleur caractéristique de ses murs), dont les travaux ont débuté en 1238, demeure la plus importante merveille architecturale des sultans nasrides, la dernière dynastie musulmane d’Espagne. Les murs des palais, recouverts de calligraphie arabe, racontent par la voix des vizirs, les Premiers ministres également poètes, huit siècles de splendeurs de l'art islamique. Les jardins, joyaux de verdure au cœur d'une région aride, sont irrigués par un ingénieux système développé au XIIIe siècle, qui continue en partie à fournir aujourd’hui l'eau nécessaire aux nombreuses essences d'arbres fruitiers, plantées pour créer une impression d’éden terrestre. Au cœur de la cité palatiale, la célèbre fontaine aux douze lions, alimentant des canaux qui représentent les quatre fleuves du paradis décrit dans le Coran, apporte la preuve que la figuration, tant qu'elle n'investissait pas le domaine religieux, avait toute sa place dans le monde musulman. En compagnie d’experts, d’archéologues et de restaurateurs de l'Alhambra, tous passionnés, Marc Jampolsky révèle le destin aussi exceptionnel que tragique de ce chef-d’œuvre arabo-andalou. Une exploration privilégiée d'un site à la beau.",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px] lg:h-[500px]"
            src="https://www.youtube.com/embed/v2srCKHnEGs"
            title="Alhambra, le trésor du dernier sultanat d’Espagne | Extrait 1 | Documentaire | ARTE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 13,
        a_title: "Sagrada Familia, le défi de Gaudi",
        a_image: sagradaFamilia,
        a_description:
          " réalisé par Marc Jampolsky, Marie Thiry (GEDEON PROGRAMMES, ARTE FRANCE, NHK, ATOMIS MEDIA, 2022, 52'). Est-elle d’autant plus célèbre qu’elle reste inachevée ? Même si le chantier progresse et touche bientôt à sa fin, le chef-d’oeuvre de Gaudí, la basilique de la Sagrada Família, continue de mettre à l’épreuve les successeurs de l’architecte. Une enquête enrichie d’une reconstitution en 3D de l’atelier du maître, détruit en 1936 par un incendie. L’imposante basilique de la Sagrada Família, œuvre majeure de l’architecte catalan Antoni Gaudí (1852-1926) débutée en 1882, surplombe la ville de Barcelone dont elle est devenue l’un des symboles. Sa verticalité, ses formes organiques et courbes et les mosaïques aux couleurs vives qui ornent le sommet de ses tours la rendent unique – bien que ces éléments se retrouvent dans nombre de créations de l’artiste (parc Güell, Casa Batlló, Casa Milà, etc.), toutes conçues dans l’esprit du modernisme catalan dont Gaudí est l’un des principaux représentants. Outre son esthétique audacieuse, ce temple expiatoire est le produit d'innovations techniques à l’image de ses arcs en chaînette conçus pour absorber la charge de l’immense bâtisse dénuée de contreforts ou de ses colonnes inclinées, semblables à des arbres, qui suivent la trajectoire des forces du bâtiment. Une géométrie complexe qui rend la tâche des héritiers de l'ingénieur d’autant plus ardue qu’ils ne disposent que de quelques plans et maquettes originaux, rescapés de l’incendie qui a ravagé l’atelier de Gaudí en 1936..",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px] lg:h-[500px]"
            src="https://www.youtube.com/embed/A7MRjcJ61G0"
            title="GAUDÍ - Sagrada Familia, le défi de Gaudí - FR | Musée d’Orsay"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "Sur-les-traces-de-Ramsès-II",
    date: "Vendredi 25 Avril 2025",
    time: "14:00",
    place: "Cinéma Renaissance",
    title: "Sur les traces de Ramsès II",
    description:
      "Découvrez les secrets de Ramsès II et les fouilles archéologiques de ses cités mythiques.",
    activities: [
      {
        a_id: 14,
        a_title: "La cité oubliée de Ramsès II",
        a_image: citeObliee,
        a_description:
          "Réalisé par Laurent Portes (Pernel Média, avec la participation de France Télévisions, 2023, 90'). Ramsès II, c'est le plus grand pharaon de l’Égypte antique. Il a régné plus de six décennies – le plus long règne de l’Égypte antique. Il a édifié à travers tout le pays une myriade de monuments, tous plus imposants les uns que les autres ; mais le véritable joyau de ce pharaon bâtisseur, c'était sa capitale mythique, Pi-Ramsès. Une cité gigantesque, qui était le cœur battant du royaume, rivalisant de magnificence avec Babylone elle-même. Redécouverte à la fin du XXe siècle dans le delta du Nil, après trois millénaires d'oubli, cette cité mythique est depuis fouillée chaque année par les archéologues. Et, chaque année, elle révèle de nouveaux secrets..",
        youtube: (
          <iframe
            src="https://geo.dailymotion.com/player.html?video=x8jskt5"
            className="w-full h-[350px] md:h-[400px] lg:h-[500px]"
            allowfullscreen
            title="Dailymotion Video Player"
            allow="web-share"
          ></iframe>
        ),
      },
      {
        a_id: 15,
        a_title: "Ramesseum 2023, XXXIVe campagne archéologique",
        a_image: image6,
        a_description:
          "Réalisé par Pascal Pelletier (Association pour la Sauvegarde du Ramesseum, 2025, 87'). Cette mission a vu se poursuivre les fouilles sur les abords et les dépendances du temple. Les travaux sur le cavalier de déblais ont notamment permis de retrouver les assises de briques du mur externe sud du Ramesseum. Des opérations de consolidation de murs ramessides ont également été exécutées, tout comme des travaux de soutien des voûtes des magasins. Cette année, tout particulièrement, les fouilles ont révélé la présence d'un nombre important d'inhumations… Bien avant d'être l'espace 'sacralisé' par et pour Ramsès II, le secteur avait servi de nécropole pour certains dignitaires du Moyen Empire, comme en témoignent la tombe de Sehetepibrê (trouvée par Quibel en 1896 et redécouverte lors de notre mission 2018), ou encore la tombe-concession APO.CN21, où les fouilles viennent de livrer d'émouvantes inhumations d'enfants, datées de la XVIIIe dynastie, révélant combien les strates archéologiques se sont succédées. Après son déclin, le temple sera utilisé pour l'enterrement des élites sacerdotales de la Troisième Période intermédiaire. Puis, le 'privilège' de pouvoir être enterré dans cette enceinte se 'démocratisera'… Des inhumations plus “populaires”, individuelles ou collectives, “coloniseront” alors l'espace, perdurant jusqu'aux périodes tardives… Les matériels funéraires que retrouvent, étudient et restaurent nos équipes, tout en étant des indicateurs des différentes phases 'd'occupation', constituent autant de témoignages précieux sur cette population qui était tombée dans l'oubli… Cette 'réminiscence' du passé permet ainsi de mieux appréhender et de mieux comprendre la longue et riche histoire du site … ",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px] lg:h-[500px]"
            src="https://www.youtube.com/embed/wmROyA4Pn5k"
            title="Bande annonce - Le Ramesseum 2022, XXXIIIe campagne archéologique#Ramsès"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "Conférence-Aux-origines-de-l’Homo-sapiens",
    date: "Vendredi 25 Avril 2025",
    time: "17:45",
    place:
      "La salle à côté de la Fondation pour la Sauvegarde du Patrimoine  Culturel de Rabat",
    place2:
      "Ancien palais de justice , 1 avenue Al Mansour ADDAHBI près du cinéma 7ème Art Rabat",
    title: "Conférence : Aux origines de l’Homo sapiens",
    imageConf: conferance,
    // description: "Conférence de Abdelouahed Ben-Nacer sur l’évolution humaine et les découvertes archéologiques récentes.",
    description: "",
    activities: [
      {
        a_id: 110,
        a_title: "17h30 Conférence ",
        a_image: benNacer,
        a_description: (
          <>
            Conférence de Abdelouahed Ben-Ncer sur l’évolution humaine et les
            découvertes archéologiques récentes : <br />
            <strong>Abdelouahed Ben-Ncer</strong> est un professeur de
            l’Enseignement supérieur. Il est Auteur de nombreux travaux liés
            notamment à la paléoanthropologie. En outre, plusieurs fonctions
            sont venues, dès 1995, jalonner son parcours : conservateur du musée
            archéologique de Rabat, directeur des études de l’insap, directeur
            adjoint de l’insap, chargé d’études au cabinet du ministre de la
            Culture…. Toutefois, toutes ces fonctions ne l’ont jamais empêché
            d’entretenir le cordon qui l’a toujours lié à l’enseignement et à la
            recherche inhérents à la paléoanthropologie. Les travaux qu’il mène
            d’ailleurs au site paléoanthropolgique de Jbel Irhoud (province de
            Youssoufia) en sont la preuve.
          </>
        ),
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "Regard-sur-des-sépultures-féminines-remarquables",
    date: "Vendredi 25 Avril 2025",
    time: "20:00",
    place: "Cinéma Renaissance",
    title: "Regard sur des sépultures féminines remarquables",
    description:
      "Explorez les découvertes archéologiques de sépultures féminines et leur rôle dans l’histoire.",
    activities: [
      {
        a_id: 16,
        a_title: "Amazones, femmes guerrières de l’Antiquité",
        a_image: amazoneFemme,
        a_description:
          " réalisé par Alexandra Barbot (ZED, Ceska Televize - CT, Magellan TV, 2023, 90'). Suite à de récentes découvertes en Sibérie, en Arménie du Nord, en Mongolie et en Crimée, dont plusieurs squelettes de femmes décapitées et la tombe d'une femme qu'on a cru être un homme entouré d'armes, une expédition archéologique menée par des experts internationaux commence. Ces femmes pourraient-elles être de véritables amazones - une tribu de guerrières et de chasseuses farouchement indépendantes vénérées pour leurs prouesses physiques et leur force comparable à celle des hommes les plus courageux ? Y a-t-il une vérité historique derrière le mythe de ces combattantes et cavalières ? Combinant recherches sur le terrain, reconstitutions dramatiques, 3D et interviews, ce documentaire dévoilera qui étaient ces femmes, dans l'espoir d'exposer la vérité derrière le mythe des amazone..",
      },
      {
        a_id: 17,
        a_title: "Vikings la saga des femmes",
        a_image: image7,
        a_description:
          "réalisé par Thomas Cirotteau (Little Big Story, Nordic Eye Productions & Ubisoft pour France Télévisions, Histoire TV & SVT, 2025, 52'). D’abord transmise oralement, puis couchée par écrit par les auteurs des sagas à partir du XIIème siècle, l’histoire du peuple viking est une affaire d’hommes. L’image de la femme y est gommée au profit des hommes pas forcément tous puissants, dépeints par les auteurs occidentaux – souvent des moines chrétiens – comme des barbares sanguinaires. Au XIXème siècle, les premiers archéologues étaient encore des hommes. Ce n’est que depuis une cinquantaine d’année que les femmes, venues grossir les rangs des scientifiques, posent un nouveau regard sur l’histoire des vikings. Le film s’attache à la récente découverte d’une sépulture féminine sur la côte Est de l’Islande. Une équipe d’archéologues dirigée par Ragneidur Traustadóttir a mis au jour les restes d’un important site comprenant plusieurs sépultures vikings, dont celle d’une femme venue de Norvège. Qui était elle ? Et que faisait-elle si loin de sa terre natale ? C’est le point de départ d’une vaste investigation scientifique menée dans sept pays (Islande, Suède, Norvège, Danemark, Pays-Bas, Royaume-Uni et Canada) auprès d’une vingtaine d’intervenant.e.s, pour révéler le rôle déterminant des femmes au cours des célèbres expéditions vikings..",
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "Sauvegarder-le-patrimoine",
    date: "Samedi 26 Avril 2025",
    time: "09:30",
    place: "Cinéma Renaissance",
    title: "Sauvegarder le patrimoine",
    description:
      "Découvrez les efforts internationaux pour sauvegarder le patrimoine archéologique et culturel.",
    activities: [
      {
        a_id: 18,
        a_title: "Mésopotamie, la redécouverte des trésors de l’Irak",
        a_image: mesopotamieIrak,
        a_description:
          "réalisé par Olivier Julien (GEDEON Programmes, ARTE, avec la participation d'Histoire TV, 2023, 90'). Après près de 50 ans d’inaccessibilité du territoire pour cause d’instabilité et de guerres, les destructions perpétuées par les terroristes de l’Etat Islamique ont déclenché un mouvement de solidarité internationale de dimension inédite : répondant à l’appel à l’aide des autorités irakiennes, des équipes d’archéologues venus du monde entier reviennent sur les plus grands sites de Mésopotamie pour tenter de sauver ce qui peut l’être encore et relancer l’ étude de ces précieux vestiges. Aujourd’hui, pour la première fois, en associant aux méthodes classiques de fouille les possibilités de l’archéologie du XXIeme siècle, les chercheurs sont en mesure d’aborder et d’étudier les vestiges des premières cités, telles que Khorsabad, Ninive, Larsa, Lagash, malgré leurs dimensions gigantesques. Ces nouvelles technologies leur permettent de reprendre l’étude de ces sites légendaires à une échelle et à un rythme inimaginables par le passé et apportent de nouvelles révélations sur le développement de l’urbanisme en Mésopotamie. Alors même que l’Irak lutte pour se reconstruire, les nouvelles visions qui émergent peu à peu de l’effort des archéologues révèlent au monde la richesse encore inexplorée du patrimoine antique du pays et la dimension universelle de l’histoire dont sa terre conserve les traces. Son extrême fragilité aussi … C’est paradoxalement dans le douloureux contexte d’un pays dévasté, que les cités mésopotamiennes commencent peu à peu à livrer leurs secrets….",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px] lg:h-[500px]"
            src="https://www.youtube.com/embed/s9oKzPaoW28"
            title="Mésopotamie, la redécouverte des trésors d&#39; Irak"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 19,
        a_title: "Mission méditerranée, le musée des abysses",
        a_image: missionMediterrane,
        a_description:
          "Réalisé par Thomas Marlier et Mathieu Pradinaud (Gedeon Programmes, 2023, 70'). En 2022, l'UNESCO lance la première mission d'exploration d'une zone jamais étudiée, qui conserve pourtant les traces de plus de 2000 ans d'histoire de la navigation en Méditerranée. Pour la première fois de l’histoire, venant de 8 pays du pourtour méditerranéen, les plus grands spécialistes d’archéologie sous-marine étudient les épaves sur le banc des Esquerquis (plateau continental tunisien), sur les traces des expéditions de Ballard McCann dans le Canal de Sicile (plateau continental italien)..",
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "Nouvelles-données-sur-la-Préhistoire",
    date: "Samedi 26 Avril 2025",
    time: "14:00",
    place: "Cinémathéque marocaine",
    title: "Nouvelles données sur la Préhistoire",
    description:
      "Explorez les dernières découvertes scientifiques sur la Préhistoire et les origines de l’humanité.",
    activities: [
      {
        a_id: 20,
        a_title: "Tautavel, Vivre en Europe avant Néandertal",
        a_image: tautavelVivre,
        a_description:
          "Réalisé par Emma Baus (Tangerine Production Avec la participation de France Télévisions, du CNC, de la Procirep-Angoa, de Ushuaïa TV, de la région Occitanie, et de Cap Sud 66. , 2024, 90'). Avant Néandertal, entre 560 000 et 400 000 ans avant J.-C., des représentants du genre humain ont vécu sur le territoire français. Ils ont affronté des périodes de glaciation et des basculements climatiques intenses, et tout cela a priori sans maitriser le feu…. Un lieu, en particulier, a été le témoin de leur passage pendant des centaines de milliers d’années ! Il s’agit de la grotte de Tautavel, située en France, au pied de la chaine pyrénéenne, un site unique au monde d’où a été exhumé un crâne vieux de 450 000 ans, appartenant à celui qu’on appelle aujourd’hui « L’Homme de Tautavel ». Des scientifiques internationaux tentent de comprendre : qui étaient ces hommes et femmes de Tautavel ? D’où venaient-ils et comment se sont-ils répandus sur le territoire européen ? En s’appuyant sur les dernières recherches scientifiques, le film souhaite révolutionner le regard porté sur ces lointains ancêtres dont les capacités cognitives ne cesseront de nous surprendre.",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px] lg:h-[500px]"
            src="https://www.youtube.com/embed/b6d7riX2C3g"
            title="TAUTAVEL, vivre en Europe avant Neandertal, teaser."
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 21,
        a_title: "Le mystère de l'homme de Denisova",
        a_image: mystereHomme,
        a_description:
          "réalisé par Guy Beauche (Galaxie Presse, France Télévisions, 2022, 52'10). En 2008, lors de fouilles en Sibérie, une équipe d'archéologues russes met au jour un étrange petit ossement. L'analyse génétique révèle qu'il s'agit d'un os humain, mais pas celui d'un Homo sapiens, ni d'un Néandertal, mais de celui d'une troisième espèce d'humain qui vivait pendant la préhistoire. Les scientifiques nomment cette espèce l'homme de Denisova, du nom de la grotte où l'os a été trouvé. Cette découverte déclenche une enquête internationale, mobilisant des dizaines de chercheurs, afin de lever un coin de voile sur l'existence de ce nouveau 'cousin'.",
        youtube: (
          <iframe
            src="https://geo.dailymotion.com/player.html?video=x8bv3jq"
            className="w-full h-[350px] md:h-[400px] lg:h-[500px]"
            allowfullscreen
            title="Dailymotion Video Player"
            allow="web-share"
          ></iframe>
        ),
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "Conférence-Art-rupestre-au-Sud-marocain-de-Abdelkhalek-Lemjidi",
    date: "Samedi 26 Avril 2025",
    time: "17:45",
    place: "Ex Palais Justice",
    title:
      "Conférence : Art rupestre au Sud marocain de Abdelkhalek Lemjidi, modération Abdeslam Mikdad",
    imageConf: conferance,
    // description: "Conférence de Abdelouahed Ben-Nacer sur l’évolution humaine et les découvertes archéologiques récentes.",
    description: "",
    activities: [
      {
        a_id: 110,
        a_title: "17h45 Conférence ",
        a_image: appelRep,
        a_description: (
          <>
            Conférence de Abdelkhalek Lemjidi sur l’art rupestre et son
            importance dans le Sud marocain : <br />
            <strong>Abdelkhalek Lemjidi</strong> est un Professeur d'archéologie
            de Préhistoire.Lauréat de l’Université Jdanov de Leningrade (URSS),
            docteur de l’Université Ibn Zohr, en Art et Archéologie pré et
            protohistorique du Sud du Maroc, Abdelkhalek LEMJIDI est Professeur
            habilité au département de préhistoire à l’INSAP et chercheur au
            Parc (Centre) national du patrimoine rupestre (PNPR).
          </>
        ),
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "Cinéma-Renaissance",
    date: "Samedi 26 Avril 2025",
    time: "19:30",
    place: "Cinéma Renaissance",
    title: "Cinéma Renaissance",
    activities: [
      {
        a_id: 102,
        a_title: "Awards",
        a_image: awards,
      },
      {
        a_id: 103,
        a_title: "Discours de clôture",
        a_image: discours,
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "Concert-d'Abir-El-Abed",
    date: "Samedi 26 Avril 2025",
    time: "20:30",
    place: "Cinéma Renaissance",
    title: "Concert d'Abir El Abed",
    activities: [
      {
        a_id: 102,
        a_title: "concert Abir El Abed",
        a_description:
          "Abir El Abed est née à Tanger Née sur le détroit de Gibraltar à Tanger en 1992, Abir el Abed a toujours baigné dans le monde de la musique. Issue d’une famille qui apprécie l’art, ses parents s'inscrivent au Conservatoire National de Tanger à l’âge de 9 ans pour développer ses capacités. Tout en continuant ses études, elle commence les cours de solfège, piano et musique andalouse où elle sera très vite repéré pour sa voix très particulière et les techniques vocales assez impressionnantes pour son jeune âge. Abir intègre alors plusieurs groupes et ateliers au conservatoire, notamment avec la chorale Alboughaz de Tanger, l’ensemble de musique andalouse du conservatoire, etc. En 2011, le chercheur Omar Metioui lui ouvre les portes des scènes marocaines afin de participer dans plusieurs manifestations et festivals culturels spécialisés dans la musique arabo-andalouse. Dans la quasi-totalité des groupes, Abir El Abed endosse le rôle de la chanteuse principale.",
        a_image: concert,
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "Dîner-de-Gala-dans-un-Riad",
    date: "Samedi 26 Avril 2025",
    time: "20:30",
    place: "Café Du Cinéma Renaissance",
    title: "Dîner de Gala dans un Riad",
    activities: [
      {
        a_id: 105,
        a_title: "21h : Dîner de gala dans un riad",
        a_image: Diner,
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "Projections-non-stop !",
    date: "Dimanche 27 Avril 2025",
    time: "09:30",
    place: "Cinéma Renaissance",
    title: "Projections non stop !",
    description:
      "Une journée dédiée à des projections continues de documentaires sur l’archéologie et le patrimoine.",
    activities: [
      {
        a_id: 22,
        a_title: "Sapiens ou la naissance de l'art",
        a_image: sapiensNaissance,
        a_description:
          "Réalisé par Pascal Goblot (Escalenta, Zadig Productions, France Télévisions avec la participation du Museum d’Histoire Naturelle et du CNRS, 2022, 70'). Ce documentaire explore les origines de l’art chez les premiers humains modernes et les œuvres préhistoriques qui racontent une histoire de la beauté et de l’espèce.",
      },
      {
        a_id: 23,
        a_title: "Téviec, Meurtre au mésolithique",
        a_image: teviecMeurtre,
        a_description:
          "Réalisé par Hubert Béasse (Vivement Lundi 1, France Télévisions avec la participation de France 3 Bretagne, 2022, 52'). Ce documentaire explore la découverte d’un site funéraire mésolithique sur l’île de Téviec, en Bretagne, et les indices d’un homicide préhistorique.",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px] lg:h-[500px]"
            src="https://www.youtube.com/embed/Q79t9FhtVFY"
            title="[Bande annonce] Téviec meurtre au mésolithique"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 24,
        a_title: "Hammamet, au temps des Romains",
        a_image: hammamet,
        a_description:
          "réalisé par Serge Viallet (ARTE France, GEDEON Programmes, CNRS Images / Média). A partir de 1996, des archéologues et des scientifiques ont travaillé à la mise au jour d'un cimetière romain vieux de 2000 ans près d'Hammamet, en Tunisie, découvert à l'occasion des travaux de construction d'un complexe touristique. La nécropole de Pupput révèle de précieuses informations sur le mode de vie des habitants de la colonie romaine, leurs us et coutumes et leurs pratiques funéraires. Céramologues et anthropologues affluent de France, d'Italie, de Tunisie et même du Japon pour accélérer les recherches. Hammamet est en effet une station balnéaire très fréquentée et les chantiers de fouilles sont menacés par les travaux. Que cherchent-ils avec tant d'attention, de délicatesse et de précision dans leurs gestes ? Que cherchent-ils avec leurs regards si concentrés, si graves et si passionnés ? Que cherchent-ils dans ce dernier périmètre de terre encerclé, étranglé par l'incessante poussée de nouveaux chantiers du complexe touristico vacancier de la baie de Hammamet. Que cherche donc ce petit groupe de Tunisiens, de Français, d'Italiens et de Japonais penchés à longueur de journées, de mois, d'années sur les vestiges de ce qu'ils savent, depuis peu, être la plus grande nécropole romaine jamais découverte intacte en Afrique ?.",
      },
      {
        a_id: 25,
        a_title: "Philae, le sanctuaire englouti",
        a_image: Philae,
        a_description:
          "réalisé par Olivier Lemaître, co autrice, Claudine Le Tourneur d'Ison  (Sequana Média, avec la participation d'ARTE/ NDR, Histoire TV et l'aide de l'UNESCO, 2023, 90'). Lieu de pèlerinage important dans l’Antiquité, l’île de Philae fascine les voyageurs depuis des siècles. Sur ce rocher surgi du Nil, surnommé la 'perle de l’Égypte', de puissants souverains ont fait bâtir des sanctuaires monumentaux depuis l’époque des derniers pharaons jusqu’aux Romains. Par la suite, les temples ont été pillés, vandalisés ou transformés, avant que les constructions successives de deux barrages au XX e siècle ne scellent le destin de l’île. Pour sauver les précieux vestiges de la montée des eaux, une campagne internationale coordonnée par l’Unesco est entreprise dans les années 1970. L’objectif : démonter les monuments pierre par pierre pour les reconstruire sur une île voisine. Cette course contre la montre représente un immense défi technique, mais son succès permettra aux égyptologues d'explorer comme jamais ces monuments antiques. Depuis, les chercheurs tentent de reconstituer l’histoire du site et de ses grands édifices, mais aussi de comprendre le culte mystérieux qui y était célébré.  De l’émerveillement de Napoléon Bonaparte découvrant les vestiges en 1799, au lendemain de sa conquête de l’Égypte, aux recherches archéologiques récentes, en passant par la visite de l’écrivain Pierre Loti, au début du XXe siècle, sur une île déjà partiellement inondée, le film retrace les différentes étapes de l’exploration scientifique de ce lieu envoûtant. À l’aide d’archives uniques et de l’éclairage de chercheurs, son documentaire lève le voile sur les énigmes du temple sanctuaire sauvé des eaux, de sa création à nos jours. .",
        youtube: (
          <iframe
            src="https://geo.dailymotion.com/player.html?video=x8khvcj"
            className="w-full h-[350px] md:h-[400px] lg:h-[500px]"
            allowfullscreen
            title="Dailymotion Video Player"
            allow="web-share"
          ></iframe>
        ),
      },
      {
        a_id: 26,
        a_title: "Les palais de Persépolis : la folie des grandeurs",
        a_image: palaisPersepolie,
        a_description:
          "réalisé par Angèle Berland (ZED pour TCD, ZDF, Histoire TV, 2023, 52'). Au VIe siècle avant notre ère, le roi des Perses Darius 1er lance la construction d’une incroyable cité royale, au cœur de l’Iran actuel. Une cité qui va devenir mythique : Persépolis. Il s'agit d'une construction gigantesque, l'un des plus grands sites de l'antiquité. Pour asseoir un pouvoir contesté et dominer son immense empire, Darius conçoit une série de palais majestueux sur une terrasse à 15 mètres au-dessus du sol. Rêvée comme un véritable jardin d’Eden en plein milieu du Moyen Orient, cette cité de toutes les démesures s’impose également comme l’un des centres névralgiques de l’Empire. Une cité qui, au fil des siècles et des découvertes archéologiques, va dévoiler bien des mystères. Comment une telle merveille a-t-elle pu sortir de terre ? En quoi les récentes découvertes archéologiques mettent-elles au jour son véritable rôle ? Et surtout comment des siècles d’ingéniosité architecturale ont-ils pu être dévastés en à peine quelques heures ? Persépolis nous révèle ses incroyables secrets..",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px] lg:h-[500px]"
            src="https://www.youtube.com/embed/uCHTMJACsIY"
            title="Persépolis, la folie des grandeurs - Mégacités antiques"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 27,
        a_title: "Les Etrusques, une civilisation mystérieuse de Méditerranée",
        a_image: Etrusques,
        a_description:
          "réalisé par Jonas Rosales et Alexis de Favitski (ARTE France, Galaxie, Inrap, 2022, 90'). En Corse, sur le site de Lamajone, à Aléria, une équipe d’archéologues dirigée par Laurent Vid. L’année suivante, en continuant leurs fouilles sous la nécropole, ils exhument une sépulture présentant une configuration totalement différente : un hypogée. Le tombeau souterrain contient les restes d’un personnage étrusque de haut rang au regard des objets personnels qui l’accompagnaient dans son dernier voyage, il y a 2 500 ans. Les expertises sur le squelette, menées par l’archéoanthropologue Catherine Rigeade dans les laboratoires marseillais de l’Inrap, révèlent qu’il s’agit de celui d’une femme. Cette découverte exceptionnelle vient enrichir les connaissances sur le passé étrusque de l’île de Beauté ainsi que sur les pratiques funéraires de ce peuple de l’Antiquité.al, de l’Inrap a mis au jour, en 2018, 130 tombes romaines dans un très bel état de conservation..",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px] lg:h-[500px]"
            src="https://www.youtube.com/embed/WvoZ517BxNM"
            title="Les Etrusques Une Civilisation mystérieuse"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 28,
        a_title: "Artémis, le temple perdu",
        a_image: Artémis,
        a_description:
          "Réalisé par Sébastien Reichenbach (Stéphane Goël Association Climage, ARTE G.E.I.E., RTS Radio Télévision Suisse, 2023, 52'). La localisation du sanctuaire d’Artémis à Amarynthos est longtemps restée l’une des dernières grandes énigmes archéologiques de l’antiquité grecque. Ce vaste Artémision est évoqué dans plusieurs textes anciens, qui vont même jusqu’à préciser la distance qui sépare le sanctuaire de la ville antique d’Érétrie. Mais malgré les efforts de nombreuses expéditions scientifiques menées dès la fin du 19ème siècle, aucune trace du sanctuaire et de son temple n’a été découverte, laissant le mystère insondable. Dans les années 60, un jeune archéologue neuchâtelois – Denis Knoepfler– se lance à son tour à la recherche du temple perdu d’Artémis. Ses investigations le mènent rapidement dans l’arrière-pays de l’île d’Eubée, bien au-delà des limites des précédentes expéditions. Il faudra cinq décennies de recherches, une foi inébranlable et déplacer des tonnes de terre pour finalement percer le mystère. En 2017, une équipe d’archéologues suisso-grecque identifie enfin de manière formelle le sanctuaire d’Artémis, là où Denis Knoepfler avait prédit qu’il se trouvait enfoui. Le retentissement est considérable : il s’agit de l’une des plus spectaculaires découvertes archéologiques faites en Grèce depuis 30 ans. Le film retrace cette épopée collective riche en rebondissements, et détaille les étapes cruciales d’une enquête au long cours, qui a fasciné et qui fascinera encore plusieurs générations d’archéologues. Le récit explore également l’histoire captivante de la cité antique d’Érétrie et nous plonge dans l’ambiance mystique du culte d’Artémis, la puissante déesse de la chasse et protectrice du monde sauvage..",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px] lg:h-[500px]"
            src="https://www.youtube.com/embed/OE5WurDyeJQ"
            title="ARTÉMIS, LE TEMPLE PERDU (teaser)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 29,
        a_title: "Iznik : les mystères de la basilique engloutie",
        a_image: iznik,
        a_description:
          "réalisé par Pascal Guérin (Les Batelières Productions avec la participation de France Télévisions, du CNC et de la PROCIREP ANGOA, 2023, 55' et 90'). 2014, Turquie. Un simple vol de surveillance au-dessus du lac d’Iznik révèle accidentellement les vestiges engloutis d’une basilique byzantine du IVe siècle. Cette découverte incite les chercheurs à explorer les secrets de l’histoire et la géologie qui se cachent derrière la disparition de cette basilique, construite dans l’ancienne ville romaine Nicée, aujourd’hui connue sous le nom d’Iznik. Quand la basilique a-t-elle été détruite ? Comment a-t-elle été submergée ? Et qu’est-il arrivé à la communauté qui y vivait ? Entre la Turquie, la France, la Suisse, les États-Unis et le Vatican, cette enquête pluridisciplinaire suit pas à pas une équipe mondialement connue dans cette fouille sous-marine. Grâce à un accès exclusif au site, des images aérienne et sous-marines exceptionnelles, et des images de synthèse spectaculaires, nous voyageons à travers les siècles, jusqu’à l’époque romaine et byzantine, et au fondement du Christianisme.",
        youtube: (
          <iframe
            src="https://geo.dailymotion.com/player.html?video=x8r4krh"
            className="w-full h-[350px] md:h-[400px] lg:h-[500px]"
            allowfullscreen
            title="Dailymotion Video Player"
            allow="web-share"
          ></iframe>
        ),
      },
      {
        a_id: 30,
        a_title: "Les naufragés de l'empire romain",
        a_image: naufrages,
        a_description:
          "Réalisé par Kevin Sempe, Stanislas Kraland (Imagissime, 2023, 50'). Carrefour du commerce, la Méditerranée a été une route maritime sans précédent pour l'empire romain. Nombre de navires y ont sombré alors qu'ils transportaient de précieuses cargaisons destinées à étendre le pouvoir de Rome. Aujourd'hui, les archéologues estiment à 20 000 le nombre d'épaves qui reposeraient au fond de ses eaux. Kevin Sempé part à la recherche de ces épaves romaines, témoins des échanges et des voies commerciales de l'empire et sans lesquelles Rome n'aurait jamais pu exister. Son périple commence au large de l'Italie, où repose la Nava Romana, qui a sombré avec sa cargaison d'amphores encore parfaitement conservés..",
      },
    ],
  },
];

export default ProgramData_FR;
