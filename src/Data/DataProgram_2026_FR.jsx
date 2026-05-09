// ==================== PROGRAMME FIFAP 2026 ====================
// 2e Festival International du Film Archéologique et Patrimonial de Rabat
// 9 - 14 juin 2026

// Importation des images
import amerique from "./../Image/amerique_image1.png";
import azuchi from "./../Image/dazwchi_image2.png";
import citeMing from "./../Image/image3.png";
import ecritureOubliee from "./../Image/recherche_image4.png";
import elKown from "./../Image/elkowm_image5.png";
import premieresNotes from "./../Image/premiere_image6.png";
import athenes from "./../Image/athene_image7.png";
import delphes from "./../Image/delphe_image8.png";
import momiesEgypte from "./../Image/momies-image9.png";
import papyrus from "./../Image/payrus_image10.png";
import enigmeMomie from "./../Image/enigme_image11.png";
import cerfsVolants from "./../Image/mystere_image12.png";
import gardiensMenjez from "./../Image/gardiens_image13.png";
import sardaigne from "./../Image/sardaigne_image14.png";
import citesOr from "./../Image/cite_dor_image15.png";
import mezcla from "./../Image/mezcla_image16.png";
import indiensCaraibes from "./../Image/indiens_image17.png";
import guerreGaules from "./../Image/guerre_image18.png";
import notreDame from "./../Image/enquete_image19.png";
import toba from "./../Image/toba_image20.png";
import fouillesAbbeville from "./../Image/Fouilles_image21.png";
import premiersPaysans from "./../Image/peau_image22.png";
import djillaliHadjouis from "./../Image/djillali-Hadjouis.png";
import youssefBokbot from "./../Image/youssef-bokbot.png";
import drissOuarhache from "./../Image/Driss-Ouarhache.png";
import sofia from "./../Image/sofia-mestari.jpeg";

import { v4 as uuidv4 } from "uuid";

const ProgramData2026_FR = [
  {
    // ==================== MARDI 9 JUIN 2026 ====================
    id: uuidv4(),
    slug: "inauguration-du-festival",
    date: "Mardi 9 Juin 2026",
    time: "19:00",
    place: "Auditorium",
    title: "Inauguration du Festival",
    description:
      "Discours et hommages à Joudia Hassar-Benslimane et Abderrahmane Chorfi",
    activities: [
      {
        a_id: 1,
        a_title: "Amérique : La nouvelle histoire des premiers hommes",
        a_image: amerique,
        a_description:
          "Réalisé par Robin Bicknell (Bellota Films, Yap Films, 2023, 90'). Une émouvante enquête archéologique sur l'émergence d'un nouveau paradigme historique, qui date l'arrivée des humains sur le continent américain à près de 30 000 ans avant notre ère. Du Grand Nord canadien à la pointe sud du Chili, en passant par le sud des États-Unis, le centre du Mexique et le Mato Grosso brésilien, de nouvelles découvertes archéologiques concordantes, mais encore controversées, ont fait émerger dans l'archéologie de la préhistoire américaine un nouveau paradigme : l'apparition des premiers humains sur le continent pourrait remonter à près de 30 000 ans avant notre ère, soit environ 15 000 ans plus tôt que la thèse communément admise et enseignée. S'il y eut dans le passé quelques francs-tireurs pour contester le scénario selon lequel les premiers ancêtres des Américains seraient arrivés à pied par le détroit de Béring il y a 16 000 ans, ils furent longtemps tenus à l'écart de la communauté scientifique. Mais de nouvelles découvertes et des datations plus récentes au carbone 14 confirment aujourd'hui leurs hypothèses, situant non seulement le peuplement des Amériques au plus fort de la dernière période glaciaire, mais réécrivant aussi l’histoire des migrations sur tout le continent : elles pourraient avoir emprunté à la fois des voies terrestres et maritimes pour établir plusieurs peuplements simultanés, du sud jusqu’au nord.",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px]"
            src="https://www.youtube.com/embed/DSWrqqBePUQ"
            title="Amérique la nouvelle histoire des premiers hommes | Documentaire | ARTE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 2,
        a_title: "Cocktail",
        a_image: null,
        a_description: "",
      },
    ],
  },

  // ==================== MERCREDI 10 JUIN 2026 ====================
  {
    id: uuidv4(),
    slug: "voyage-en-extreme-orient",
    date: "Mercredi 10 Juin 2026",
    time: "14:30",
    place: "Cinéma Renaissance",
    title: "Voyage en Extrême-Orient",
    description: "",
    activities: [
      {
        a_id: 3,
        a_title: "Le Château perdu d'Azuchi",
        a_image: azuchi,
        a_description:
          "Réalisé par Marc Jampolsky (Gedeon Programmes, France Télévisions, ZDF, NHK, Ubisoft, RTS). Considéré en son temps comme la plus fabuleuse des constructions, le château d’Azuchi fait l’objet d’une vaste enquête qui nous plonge dans l’histoire tourmentée du Japon médiéval. Fin du XVIe siècle, le pays traverse une période trouble où s’affrontent de redoutables chefs samouraïs. Plus cruel et stratège que les autres, Oda Nobunaga étend son influence et devient le premier unificateur du pays. Pour ancrer son pouvoir, il fait élever une demeure aussi colossale que somptueuse : le château d’Azuchi, détruit par un incendie peu de temps après sa construction. Aujourd’hui, il fait l’objet d’une vaste enquête archéologique et historique, à laquelle la NHK nous offre un accès exclusif. Des images du jeu vidéo Ubisoft « Assassin’s creed shadows » redonnent vie à ce château mystérieux. Avant-première",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px]"
            src="https://www.youtube.com/embed/kuqiwRfU1FI"
            title="Le château perdu d&#39;Azuchi - teaser FR"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 4,
        a_title: "La cité oubliée de la dynastie Ming",
        a_image: citeMing,
        a_description:
          "Réalisé par Stéphane Bégoin (Bellota Films, Beijing Hands in Hands Culture & Media, Arte France, Anhui Broadcasting Corporation, 2024, 91'). C’était la plus fastueuse cité impériale de Chine. Son édification a été ordonnée par le fondateur de la dynastie Ming, Zhu Yuanzhang : fils de paysan, celui-ci s’est hissé au rang d’empereur en 1368. Pour asseoir son pouvoir, Hongwu (son nom de règne) décide alors de construire dans sa ville natale de Fengyang une cité impériale comme la Chine n’en a jamais connu. Rassemblant tous les savoir-faire et les ressources du pays, le chantier, titanesque, mobilise plus d’un million de travailleurs. Mais après six ans de labeur, la ville va connaître un funeste destin. Abandonnée aux intempéries et à une lente dégradation, sa magnificence est peu à peu ensevelie dans la terre et l’oubli, jusqu’à ce que Wang Jianying, un historien victime de la révolution culturelle, commence à s’intéresser à ses ruines en 1969. Il faudra néanmoins attendre encore plus de quatre décennies pour que des fouilles soient entreprises à Fengyang. Depuis 2015, des archéologues dégagent ses vestiges et lèvent patiemment le voile, avec le concours d’historiens, sur le destin de ’Ming Zhongdu’, la capitale du Milieu, et sur les raisons de son abandon. Circuit de l’eau, structure du palais central, éléments décoratifs d’un raffinement inouï : leurs découvertes, prolongées par des modélisations 3D, redessinent les contours de ce projet architectural démesuré, synthèse de traditions et de techniques nouvelles, qui servira de modèle à la Cité interdite de Pékin quarante ans plus tard.",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px]"
            src="https://www.youtube.com/embed/vf3TZWtGr_U"
            title="La cité oubliée de la dynastie Ming - Bande-annonce | Documentaire | ARTE"
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
    slug: "ecritures-et-musiques-oubliees",
    date: "Mercredi 10 Juin 2026",
    time: "20:00",
    place: "Cinéma Renaissance",
    title: "Écritures et musiques oubliées",
    description: "",
    activities: [
      {
        a_id: 5,
        a_title: "À la recherche de l'écriture oubliée",
        a_image: ecritureOubliee,
        a_description:
          "Réalisé par Négar Zoka et Thibaud Marchand (Valérianne Boué, Les films d’ici, Arte France, 2024, 53'). Né il y a plus de quatre mille ans dans le sud de l'Iran actuel, dans la civilisation d'Elam, voisine et rivale de la Mésopotamie, et servant à transcrire une langue aujourd'hui éteinte, l'élamite linéaire aura résisté aux chercheurs : la soixantaine de signes qui le composent, préservés sous forme d'inscriptions sur des tablettes, vases et poteries, ont longtemps été considérés comme indéchiffrables du fait du nombre limité de textes connus. Mais il y a une quinzaine d'années, l'archéologue et linguiste français François Desset a décidé de relever le défi. S'appuyant notamment sur les recherches pionnières entreprises au début du XX e siècle par l'orientaliste Ferdinand Bork, ce chercheur passionné a inlassablement mené l'enquête, des réserves du Louvre jusqu'aux hauts plateaux d'Iran. Grâce à sa découverte exceptionnelle de nouveaux objets, des vases en argent gravés issus d'une collection privée, il pense aujourd'hui avoir brisé le code de cette écriture oubliée.",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px]"
            src="https://player.vimeo.com/video/1114515176?h=f3f89df95d"
            // title="La cité oubliée de la dynastie Ming - Bande-annonce | Documentaire | ARTE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 6,
        a_title: "El Kown, une histoire d'avant l'écriture",
        a_image: elKown,
        a_description:
          "Réalisé par Amjad Alqadi (Laboratoire d'Archéologie africaine et anthropologie (ARCAN) Université de Genève, 2024, 23'). Réalisé par le laboratoire ARCAN en collaboration avec le Musée de Damas et la Mission archéologique franco- syrienne El Kowm-Mureybet, ce documentaire présente la Préhistoire du Levant, au cœur de la steppe syrienne. L'occupation humaine y remonte à 1.8 millions d’années et se poursuit jusqu'à nos jours. Plusieurs scènes reconstituent l’environnement et les activités humaines au Paléolithique, à l’Épipaléolithique et au Néolithique, en s'appuyant fidèlement sur des données scientifiques. Ce parcours au travers du temps illustre tant le mobilier archéologique que la faune et la flore qui ont assuré la subsistance et la longévité des groupes humains dans ce milieu aride de la Syrie centrale.",
      },
      {
        a_id: 7,
        a_title: "Premières notes",
        a_image: premieresNotes,
        a_description:
          "Réalisé par Liza Fanjeaux (Bonne Pioche Télévision, avec la participation de France Télévisions, 2026, 90'). Ce film est une investigation scientifique et archéologique, une plongée haletante aux origines de la musique, sur la piste des premiers musiciens de l’Histoire. Dans cette enquête nous partons à la recherche des premiers morceaux de musique : un papyrus miraculeusement retrouvé, un hymne aux dieux, des œuvres qui ont miraculeusement traversé le temps. À travers des écrits millénaires d’une richesse infinie, nous plongeons dans la vie quotidienne des musiciens à l’aube de la civilisation. En redonnant vie à leurs instruments, nous retrouvons les premières notes de l’Antiquité. Cette plongée dans le passé ne s’arrête pas là car la musique existait bien avant que naisse l’écriture. Mais comment retrouver ses traces ? Il nous faut emprunter un chemin différent, explorer des images peintes, étudier la résonance des grottes, rechercher les restes d’instruments primitifs, afin de découvrir les échos du passé. En remontant le temps, les certitudes sont moins fortes mais les vestiges, toujours aussi riches, lèvent le voile sur l’étonnante musique des premiers hommes. En avant- première",
      },
    ],
  },

  // ==================== JEUDI 11 JUIN 2026 ====================
  {
    id: uuidv4(),
    slug: "voyage-dans-la-grece-antique",
    date: "Jeudi 11 Juin 2026",
    time: "14:30",
    place: "Cinéma Renaissance",
    title: "Voyage dans la Grèce antique",
    description: "",
    activities: [
      {
        a_id: 8,
        a_title: "Athènes, aux origines de la démocratie",
        a_image: athenes,
        a_description:
          "Réalisé par Florence Tran (Yuzu Productions, Merit Motion Picture, Anemon Productions, avec la participation de France Télévisions, 2026, 90'). D’où vient l’idée de démocratie ? Quels processus, quels évènements ont permis l’émergence de cette forme de gouvernance radicalement nouvelle, au Vème siècle avant notre ère ? Archéologues, historiens, généticiens, artistes et géologues interrogent les origines et le fonctionnement de cette démocratie directe, explorent sa part lumineuse et sa part sombre, confrontent leurs recherches et découvertes aux textes anciens qui sont parvenus jusqu’à nous. De l’avènement d’innovations brillantes à une forme d’impérialisme implacable voire cruel, l’histoire de la démocratie athénienne nous interpelle. C’est l’aventure humaine que ce film se propose d’explorer, un voyage dans le temps aux sources de la civilisation occidentale, de son héritage si connu et méconnu. En avant-première",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px]"
            src="https://player.vimeo.com/video/876923402?h=0da2fc0cbc"
            // title="La cité oubliée de la dynastie Ming - Bande-annonce | Documentaire | ARTE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 9,
        a_title: "Delphes, nombril du monde",
        a_image: delphes,
        a_description:
          "Réalisé par Thibaud Marchand (Tournez S'il Vous Plaît ! avec la participation de France Télévisions, 2025, 52'). La mythique cité de Delphes est loin d’avoir livré tous ses secrets. Grâce aux récents travaux d’une équipe d’archéologues, ce documentaire va, pour la première fois, reconstituer intégralement le sanctuaire de Delphes. Au-delà de cette prouesse virtuelle, ce sont plusieurs disciplines scientifiques de pointe qui vont permettre d’établir l’incomparable rayonnement de la cité et résoudre les nombreux mystères qui y sont associés. Géologie, imagerie par satellite, spectrométrie gamma et même, archéologie musicale, c’est un arsenal scientifique unique qui va la faire renaître.",
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "histoires-de-momies",
    date: "Jeudi 11 Juin 2026",
    time: "20:00",
    place: "Cinéma Renaissance",
    title: "Histoires de momies",
    description: "",
    activities: [
      {
        a_id: 10,
        a_title: "Momies d'Égypte, en quête d'immortalité",
        a_image: momiesEgypte,
        a_description:
          "Réalisé par Alexandra Barbot (ZED, AMC Networks International Southern Europe, Histoire TV & Foxtel, avec la participation de France Télévisions 2026, 90'). Depuis la nuit des temps, les hommes ont été captivés par les momies. À l’origine de nombreux mythes et légendes, ces corps préservés renferment des secrets inestimables sur l’Égypte antique et ses pharaons. La découverte d’un atelier d’embaumement vieux de 2500 ans, le plus ancien jamais mis au jour, promet des éclairages nouveaux sur les pratiques de momification. Ces cérémonies ancestrales et mystérieuses, censées offrir au défunt l’immortalité, interrogent encore aujourd’hui scientifiques et égyptologues. À travers l’étude de ces rituels, ce sont à la fois la vie quotidienne et les croyances de la civilisation égyptienne qui se révèlent. Mais aussi et surtout une maîtrise et une connaissance absolue des vertus des plantes et aromates.",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px]"
            src="https://www.youtube.com/embed/EKhOCZZEZqU"
            title="[Bande annonce] Science grand format « L&#39;énigme de la momie des marais »"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 11,
        a_title: "Des papyrus qui cartonnent",
        a_image: papyrus,
        a_description:
          "Réalisé par Raphaële Meffre, Pauline Debels, Marie-Pierre Chauffray et Astrid Amadieu (Past and Curious, 2026, 4'). Découvrez l’histoire d’un papyrus à l’époque ptolémaïque, vers 200 avant notre ère. Né sur les bords du Nil, il a été cueilli pour être transformé en papyrus d’écriture. Il a permis de consigner une liste de bétail avant d’être classé au sein d’une grande bibliothèque. Jugé inutile, il a ensuite été jeté avant d’être recyclé en cartonnage de momie. Il a alors été moulé, stuqué et peint pour servir de protection magique à la momie d’un vieil homme. Grâce à ce recyclage, les archéologues et épigraphistes ont pu retrouver ces papyrus écrits sous les décors de stucs et ont pu exploiter cette source documentaire inestimable relatant le quotidien des hommes et des femmes il y a plus de deux mille ans.",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px]"
            src="https://www.youtube.com/embed/XLJhQLkBA4w"
            title="Des papyrus qui cartonnent !"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 12,
        a_title: "L'énigme de la momie des marais",
        a_image: enigmeMomie,
        a_description:
          "Réalisé par Alexis de Favitski (Eclectic avec la participation de France télévisions, 2024, 90'). L'homme de Tollund, une momie naturelle conservée dans un marais danois depuis plus de 2 500 ans offre, cas rarissime, un face à face inédit avec le passé. Contempler ce visage endormi, c'est imaginer d'où il venait, qui il était, comment il vivait, et surtout : pourquoi est-il mort ? Que faisait-il ici, dans la tourbe, un nœud coulant autour du cou ? Depuis sa découverte en 1950, les scientifiques tentent de résoudre cette énigme qui s'avère être un ’cold case’. D'autant plus que la momie retrouvée n'est pas un cas isolé : des centaines de corps ont ainsi été récupérés dans les tourbières du nord-ouest de l'Europe, la plupart ayant connu des morts violentes.",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px]"
            src="https://www.youtube.com/embed/EKhOCZZEZqU"
            title="[Bande annonce] Science grand format « L&#39;énigme de la momie des marais »"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
    ],
  },
  // Conférence 1 - Mercredi 10 Juin 2026 à 10:00
  {
    id: uuidv4(),
    slug: "conference-djillali-hadjouis",
    date: "Mercredi 10 Juin 2026",
    time: "10:00",
    place: "Cinéma Renaissance",
    title:
      "Conférence : La charnière cranio-rachidienne chez le Néandertalien et l'homme moderne",
    description: "",
    activities: [
      {
        a_id: 8,
        a_title:
          "La charnière cranio-rachidienne chez le Néandertalien et l'homme moderne. Entre forme du crâne et posture verticale",
        a_subtitle: "",
        a_speaker: "Djillali Hadjouis",
        a_speakerRole:
          "Paléontologue et paléoanthropologue, Président commission 'Méthodes et Théorie archéologiques', Union Internationale des Sciences Préhistoriques et Protohistoriques, MNHN Paris",
        a_image: djillaliHadjouis,
        a_description: `Les fonctionnalités anatomo-physiologiques de la base du crâne, clef de voûte de l'édifice crânien, interviennent tant sur le développement de la face et de l'occlusion, que sur la charnière occipito-cervicale. De même, cette dernière répond à la dynamique des postures cervicale et lombaire lors de la station debout. L'évolution de l'adaptation posturale de l'homme moderne (Homo sapiens) a été différente de celle du néandertalien, aussi bien chez le jeune que chez l'adulte.\n\nEn s'appuyant sur l'imagerie téléradiographique, la dynamique fonctionnelle de l'occlusion et des articulés dentaires se retrouve sous l'influence des trajectoires de croissance (mouvements antéro-postérieurs) de la base du crâne notamment la charnière occipito-cervicale. En comparaison avec les Hommes de Néandertal, cette dernière s'avère nettement différente avec les hommes modernes, compte tenu d'une insuffisance de la bascule occipitale, suspendue en extension, donnant au rachis cervical une absence de lordose, de même la mise en place d'une cyphose lombaire lors d'une posture pelvienne en rétroversion. Au final, cette nouvelle lecture holistique a mis en évidence non seulement les déséquilibres de la dynamique posturale en station bipède, mais a également relevé un grand nombre d'asymétries cranio-faciales et des dysmorphoses dento-squelettiques.`,
      },
    ],
  },

  // Conférence 2 - Jeudi 11 Juin 2026 à 10:00
  {
    id: uuidv4(),
    slug: "conference-youssef-bokbot",
    date: "Jeudi 11 Juin 2026",
    time: "10:00",
    place: "Cinéma Renaissance",
    title:
      "Conférence : Les récentes découvertes archéologiques exceptionnelles au Maroc",
    description: "",
    activities: [
      {
        a_id: 9,
        a_title:
          "Les récentes découvertes archéologiques exceptionnelles au Maroc et leur contribution à la réécriture de l'histoire de l'Afrique du Nord et du Sahara",
        a_subtitle: "",
        a_speaker: "Youssef Bokbot",
        a_speakerRole:
          "Archéologue, professeur à l'Institut National des Sciences de l'Archéologie et du Patrimoine",
        a_image: youssefBokbot,
        a_description: `Ces dernières années, des équipes de recherches pluridisciplinaires internationales, dirigées par d'éminents archéologues marocains de l'Institut national des sciences de l'archéologie et du patrimoine (INSAP), ont réalisé des découvertes archéologiques exceptionnelles, qui sont en mesure de réécrire l'histoire de l'humanité entière, et qui ont émerveillé le monde entier, contribuant ainsi au rayonnement scientifique international du Maroc.\n\nRécemment, en 2024 et 2025, les équipes de recherches que je dirige ont annoncé à la communauté scientifique internationale et au grand public, deux grandes découvertes archéologiques exceptionnelles, qui ont bouleversé les connaissances historiques de la Méditerranée et l'Afrique. Il s'agit de la découverte à Oued Beht (Khémisset) du plus ancien et le plus vaste complexe agricole néolithique d'Afrique, datant de 5.400 à 4.800 ans ; ainsi que l'identification du plus vieux village d'Age du Bronze du Maghreb à Kach Kouch (Oued Laou Tétouan), habité par des populations autochtones maures, 7 siècles avant l'arrivée des marins et marchands phéniciens, occupé de 4200 à 2500 ans passés.\n\nNos découvertes à l'Oued Beht (province de Khémisset), ont été classées par les sociétés savantes, parmi les meilleurs au monde en 2024 et 2025 :\n1. Top 10 des meilleures découvertes archéologiques d'Afrique, de Méditerranée et du Proche Orient, décerné par l'université Stellenbosch d'Afrique du Sud;\n2. « Prix Antiquity » de la meilleure publication et meilleure équipe scientifique, délivré par l'Université de Cambridge;\n3. Awards of Field Discovery 2025, décerné par le Forum mondial d'Archéologie, octroyé par l'Académie chinoise des Sciences Sociales.`,
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "conference-driss-ouarhache",
    date: "Vendredi 12 Juin 2026",
    time: "10:00",
    place: "Cinéma Renaissance",
    title:
      "Conférence : Découverte d'un Ankylosaure à armure étrange dans le Jurassique moyen",
    description: "",
    activities: [
      {
        a_id: 12,
        a_title:
          "Découverte d'un Ankylosaure à armure étrange dans le Jurassique moyen de la région de Boulmane (Moyen Atlas, Maroc)",
        a_subtitle: "",
        a_speaker: "Driss Ouarhache",
        a_speakerRole:
          "Géologue, paléoanthropologue et Professeur à l'Université Sidi Mohamed Ben Abdellah de Fès",
        a_image: drissOuarhache,
        a_description: `Des fouilles paléontologiques, entamées depuis 2018 dans les terrains continentaux du Jurassique moyen (Bathonien : -165 à -168 Ma) de la région de Boulemane, nous ont permis de récolter un riche matériel de vertébrés fossiles. L'étude de ce matériel, par une équipe de chercheurs marocains et britanniques, a révélé que la majorité des restes fossiles appartiennent à un étrange dinosaure blindé, du groupe des Ankylosaures.\n\nLes Ankylosaures (Ankylosauria) sont des dinosaures herbivores, connus essentiellement au Crétacé supérieur (68 à 66 Ma). Ils se caractérisent par une armure composée de pointes et de plaques osseuses (Ostéodermes), incorporées dans les couches dermiques, et une massue de défense à l'extrémité de la queue.\n\nL'étude du matériel récolté a dévoilé des caractéristiques morphologiques inédites, telles :\n• des pointes de l'armure qui sont fusionnées aux côtes, caractère unique jamais observé auparavant chez les autres vertébrés, éteints ou vivants ;\n• des vertèbres sous forme de "poignées" au niveau de la queue, indiquent que l'animal possédait une arme caudale, ce qui remet en cause les connaissances actuelles sur l'évolution de la massue caudale chez les ankylosaures ;\n• de longues pointes, mesurant 1 mètre de long, qui sortent d'un collier osseux cervical ; une paire de longues pointes au niveau des hanches ;\n• des plaques osseuses qui servaient à protéger les flancs de l'animal.\n\nCes caractéristiques singulières ont permis de donner le nom de Spicomellus afer à ce dinosaure, nom qui signifie "collier à pointes africain", et de le présenter comme étant le plus ancien ankylosaure jamais découvert, et le premier à être décrit sur le continent africain. Les résultats de cette étude ont été publiés récemment dans la revue scientifique Nature.`,
      },
    ],
  },

  // ==================== VENDREDI 12 JUIN 2026 ====================
  {
    id: uuidv4(),
    slug: "neolithique-du-bassin-mediterraneen",
    date: "Vendredi 12 Juin 2026",
    time: "15:30",
    place: "Auditorium",
    title: "Néolithique du Bassin méditerranéen",
    description: "",
    activities: [
      {
        a_id: 13,
        a_title: "Le Mystère des cerfs-volants du désert",
        a_image: cerfsVolants,
        a_description:
          "Réalisé par Nathalie Laville (Ma Drogue à Moi, FTV, BBC Four, PBS Nova, ZDF Info, SBS, avec la participation de France Télévisions, 2025, 52'). Au Nord de l’Arabie Saoudite et au Sud de la Jordanie se trouvent des milliers de mystérieuses structures géométriques dont la forme, vue du ciel, fait penser à d’immenses cerfs-volants. Les plus anciens de ces gigantesques alignements de pierres ont été élaborés vers 7000 avant notre ère. Nous voilà donc en présence de quelques-unes des plus anciennes structures de l’histoire de l’humanité. À l’aide des technologies les plus modernes et déterminée à apporter sur cette période méconnue du Néolithique un éclairage inédit, une équipe internationale d’archéologues menée par le français Rémy Crassard et le franco-jordanien Wael Abu-Azizeh tente de comprendre qui a construit ces structures et pourquoi.",
        youtube: (
          <iframe
            className="w-full h-[350px] md:h-[400px]"
            src="https://www.youtube.com/embed/P0Px2BbqCMI"
            title="Le mystère des cerfs-volants du désert jeudi 4 décembre 2025 sur France 5"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 14,
        a_title:
          "Les gardiens du passé de Menjez - les mégalithes du Liban révélés",
        a_image: gardiensMenjez,
        a_description:
          "Réalisé par Giovan Peyrotty (SciencEscape, 2025, 19'). Centré sur les impressionnantes tombes mégalithiques du nord libanais dans la région de Menjez, le projet « MEG-A » (codirigé par la Dr. Tara Steimer de l’Université de Genève) explore les origines des populations bâtisseuses, leur émergence au IV e et III e millénaire av. n.è., et le rôle des commanditaires dans la formation des cités-États levantines. Ce documentaire nous plonge dans cette aventure archéologique, filmant les scientifiques passionnés explorant ces mystérieux mégalithes, et les habitants de Menjez qui jouent un rôle clé, partageant leur vision du site et contribuant à la préservation du patrimoine. Le projet scientifique va au-delà de l’archéologie, car il incarne un effort local pour préserver ces nécropoles et favoriser le tourisme autour de ces précieuses reliques du passé.",
      },
      {
        a_id: 15,
        a_title: "Sardaigne, la mystérieuse civilisation des nuraghes",
        a_image: sardaigne,
        a_description:
          "Réalisé par Thomas Marlier (GEDEON Programmes, ARTE France, 2024, 90'). La Sardaigne abrite à l’intérieur de ses terres les vestiges spectaculaires d’une civilisation qui s’y est développée durant l’âge du bronze entre -1800 et -800 avant notre ère. Cette civilisation, puissante et prospère, inventa un nouveau type de monuments : des tours hautes de 30 mètres appelées les « nuraghes », des sanctuaires dédiés au culte de l’eau, des tombes gigantesques aux formes géométriques. Cette société de bâtisseurs est tombée dans l’oubli, mais son héritage permet aujourd’hui de la redécouvrir. Qui était le peuple des nuraghes ? Quel était son mode de vie, ses croyances ? Aujourd’hui, archéologues et scientifiques s’apprêtent à en percer les secrets, et à révéler l’une des cultures les plus originales qu’ait connu la Méditerranée.",
        youtube: (
          <iframe
            src="https://www.youtube.com/embed/EWriASRO0l4"
            title="Sardaigne, la mystérieuse civilisation des nuraghes | Documentaire | ARTE"
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
    slug: "regards-sur-les-civilisations-precolombiennes",
    date: "Vendredi 12 Juin 2026",
    time: "20:00",
    place: "Cinéma Renaissance",
    title: "Regards sur les civilisations précolombiennes",
    description: "",
    activities: [
      {
        a_id: 16,
        a_title: "Les Cités d'or - Le grand malentendu",
        a_image: citesOr,
        a_description:
          "Réalisé par Joséphine Duteuil (Tournez S'il Vous Plaît ! Centre national du cinéma et de l’image animée, Angoa, Procirep, avec la participation de France Télévisions, 2024, 90'). Cinq siècles après la conquête de l’Amérique, des chercheurs du monde entier enquêtent sur ce qui fut l’un des moteurs les plus puissants de la colonisation du continent : la quête de l’or. Ce métal précieux, éclatant, qu’on dit éternel, a motivé des expéditions colossales, justifié les pires exactions... et donné naissance aux récits les plus fous. Une multitude de mythes faisant des Amériques une terre « magique », au sol d’une richesse infinie et aux rues pavées d’or, qui ne demandait qu’à être conquise. Mais que se cache-t-il derrière ces fantasmes ? Les fameuses « Cités d’or » de la légende ont-elles réellement existé ? S’agissait-il d’un immense malentendu ? Et quelle place occupait vraiment l’or pour les peuples des Amériques ? Pour les scientifiques, il est temps de réécrire l’histoire. De réévaluer le récit des vainqueurs à l’aune des découvertes actuelles et de réhabiliter la vérité sur les populations indigènes. Des montagnes colombiennes aux étendues lunaires de l’Altiplano bolivien, ils font parler les ruines des cités perdues et les trésors des énigmatiques « peuples de l’or », qui prospéraient sur ces terres depuis des millénaires bien avant l’arrivée des conquistadors.",
      },
      {
        a_id: 17,
        a_title: "Mezcla ! Un festin chez les anciens Mayas",
        a_image: mezcla,
        a_description:
          "Réalisé par Past & Curious (Past & Curious, 2024, 4'44). Découvrez comment les archéologues reconstituent l'alimentation des Mayas, à partir de vases et de graines carbonisées ! Pourquoi ne pas vous en inspirer pour vos recettes personnelles ?",
        youtube: (
          <iframe
            src="https://www.youtube.com/embed/J0c9ZDzW0Ps"
            title="Mezcla ! Un festin chez les anciens Mayas"
            // title="Des papyrus qui cartonnent !"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 18,
        a_title: "Sur la trace des indiens des Caraïbes",
        a_image: indiensCaraibes,
        a_description:
          "Réalisé par Marie Linton (KAMI Productions avec la participation de France Télévisions, 2026, 90'). 12 octobre 1492. Christophe Colomb débarque dans les Antilles. Le navigateur pense avoir découvert la nouvelle route des Indes et baptise les habitants des îles les « Indiens ». Il décrit de « gentils sauvages » et quelques « féroces cannibales ». Depuis des siècles, on en sait peu sur ces populations autochtones. Mais aujourd’hui, les chercheurs traquent les moindres indices pour redonner une histoire à ces peuples méconnus. Archéologie expérimentale en canoë, Lidar, séquençage ADN : les expériences inédites révèlent enfin ceux qui ont été les premiers à se confronter aux Européens.",
      },
    ],
  },

  // ==================== SAMEDI 13 JUIN 2026 ====================
  {
    id: uuidv4(),
    slug: "des-gaulois-aux-cathedrales",
    date: "Samedi 13 Juin 2026",
    time: "09:30",
    place: "Cinéma Renaissance",
    title: "Des Gaulois aux cathédrales",
    description: "",
    activities: [
      {
        a_id: 19,
        a_title: "La Guerre des Gaules : César nous a-t-il menti ?",
        a_image: guerreGaules,
        a_description:
          "Réalisé par Laurence Thiriat (J2F production, avec la participation de France Télévisions, 2025, 90'). En 58 avant notre ère, César, à la tête d’une puissante armée, se lance dans une conquête fulgurante, implacable, presque impossible. En seulement 8 ans, il va soumettre l’ensemble des peuples gaulois. César n’est alors que gouverneur d’une province romaine, mais déjà animé par une ambition démesurée. Pendant des siècles, seul le témoignage de cette guerre sanglante nous est parvenu : de « Bello Gallico », écrit par César lui- même. Mais quel crédit donner à ce texte écrit par le vainqueur ? Aujourd’hui, archéologues, historiens et scientifiques cherchent sans relâche de nouveaux indices. Armés de technologies innovantes, ils passent au crible les moindres vestiges pour faire surgir des vérités jusqu’ici ignorées. Au fur et à mesure de leurs découvertes, le récit historique de César pose de plus en plus de questions aux scientifiques. Ce documentaire nous entraîne dans des reconstitutions spectaculaires au plus près des Gaulois. En avant-première.",
      },
      {
        a_id: 20,
        a_title: "Enquête sur les trésors enfouis de Notre-Dame de Paris",
        a_image: notreDame,
        a_description:
          "Réalisé par Florence Tran (ZED, Inrap, CNRS Images pour ARTE France, TV5 Quebec-Canada, Planete+, eskaTelevize, Foxtel, RTBF, Mediaset & PBS NOVA/GBH, 2024, 77'). Après l’incendie qui a ravagé Notre-Dame, une fouille archéologique hors du commun révèle des trésors qui se cachaient depuis des siècles sous le dallage de pierre de la cathédrale : deux cercueils de plomb et un millier de fragments sculptés de l’ancien jubé - détruit au XVIII e siècle. Ces découvertes se sont révélées si exceptionnelles que les travaux de fouilles ont été prolongés à plusieurs reprises, malgré l’urgence des travaux de restauration du monument. Une enquête historique et scientifique fascinante au cours de laquelle de nombreux experts (archéologues, anthropologues, médecins légistes, historiens de l’art, restaurateurs...) tenteront de décrypter les secrets de ces vestiges. À l’aide des technologies de pointe, ils mettront au jour un pan oublié de l’histoire de Notre- Dame.",
        youtube: (
          <iframe
            src="https://www.youtube.com/embed/jliy8KQRqUs"
            title="Documentaire « Enquête sur les trésors enfouis de Notre-Dame de Paris » - Teaser"
            // title="[Bande annonce] Science grand format « L&#39;énigme de la momie des marais »"
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
    slug: "a-travers-la-prehistoire",
    date: "Samedi 13 Juin 2026",
    time: "14:30",
    place: "Cinéma Renaissance",
    title: "À travers la Préhistoire",
    description: "",
    activities: [
      {
        a_id: 21,
        a_title: "Toba, le volcan qui a failli tuer l'humanité",
        a_image: toba,
        a_description:
          "Réalisé par Franck Cuveillier et Eric Ellena (French Connection, Fred Hilgemann, avec la participation de France Télévisions, 2026, 90'). L’île de Sumatra en Indonésie cache, sous un grand lac paisible, un véritable monstre : le Toba. Un volcan d’une taille colossale qui excite l’imagination des scientifiques du monde entier. La dernière éruption aurait eu lieu il y a 74.000 ans. Une éruption si extraordinaire que les volcanologues ont inventé pour lui les mots « méga- éruption » et « super-volcan ». Mais quelles en ont été les conséquences ? Jusqu’où ses gigantesques panaches empoisonnés ont-ils voyagé ? Avec quels effets majeurs sur la nature, sur le climat et surtout... sur nos ancêtres qui, à cette époque, commençaient à peupler la Terre ? Certains scientifiques vont jusqu’à penser que les effets du Toba ont failli anéantir notre espèce, et que nous descendons tous des rares survivants de cette catastrophe planétaire. En avant-première.",
      },
      {
        a_id: 22,
        a_title:
          "Fouilles d'Abbeville : fenêtre sur la vie des premiers hommes d'il y a 600 000 ans",
        a_image: fouillesAbbeville,
        a_description:
          "Réalisé par François Goulin et Robin Thedenat (Inrap, 2025, 4'38). La fouille, d’une petite superficie, à Abbeville a permis d’explorer des sédiments alluviaux de la Somme, d’un âge d’environ 600 000 ans. Dans les sédiments, ont été mis au jour des restes de grands herbivores (rhinocéros étrusque et mégacéros) et quelques artefacts qui témoignent de la présence de l'Homme il y a plus d'un demi- million d'années à Abbeville. Le site se trouve à proximité immédiate de la carrière Carpentier, classée au titre des Monuments Historiques depuis 1983.",
        youtube: (
          <iframe
            src="https://www.youtube.com/embed/Jw0ARK37eSo"
            title="Fouilles d&#39;Abbeville : fenêtre sur la vie des premiers hommes d&#39;il y a 600 000 ans"
            // title="[Bande annonce] Science grand format « L&#39;énigme de la momie des marais »"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        a_id: 23,
        a_title: "Dans la peau des premiers paysans français",
        a_image: premiersPaysans,
        a_description:
          "Réalisé par Stéphane Jacques (Audrey Ferrarese - Drôle de Trame, avec la participation de France Télévisions, 2025, 90'). Ce documentaire nous entraîne dans une aventure archéologique sur les traces de nos premiers ancêtres agriculteurs. Il y a 7500 ans, venus du Proche-Orient, les pionniers de l’agriculture ont franchi mers et montagnes et initié une révolution sur le territoire français : celle de l’élevage et de la culture des plantes. À la fois aventuriers et bâtisseurs, ils ont posé les premières pierres des villages. Sur notre sol, ils ont mis fin à la préhistoire. Grâce aux avancées spectaculaires de la paléogénétique, de l’archéologie et de reconstitutions visuelles innovantes, le film redonne vie à ces pionniers, femmes et hommes restés longtemps oubliés. Qui étaient-ils ? À quoi ressemblaient-ils ? Comment s’est passé leur rencontre avec les habitants du territoire, des chasseurs-cueilleurs présents depuis des millénaires ? Amenant avec eux leurs propres animaux, leurs propres semences et des savoirs inédits, les premiers paysans ont cherché à apprivoiser la nature et transmis bien plus que des techniques : un mode de vie qui est encore le nôtre.",
        youtube: (
          <iframe
            src="https://www.youtube.com/embed/LlXZHa5InOc"
            title="[Bande annonce] Dans la peau des premiers paysans français"
            // title="[Bande annonce] Science grand format « L&#39;énigme de la momie des marais »"
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
    slug: "palmares-et-concert",
    date: "Samedi 13 Juin 2026",
    time: "20:00",
    place: "Cinéma Renaissance",
    title: "Palmarès et concert",
    description: "Remise des prix et concert de clôture",
    activities: [
      {
        a_id: 24,
        a_title: "Cérémonie de clôture – Palmarès",
        a_image: null,
        a_description:
          "Le jury décerne deux prix : le Grand Prix du Festival et le prix du meilleur apport scientifique. Un jury d'étudiants décerne également un prix.",
      },
      {
        a_id: 25,
        a_title: "Concert de clôture - Sofia Mestari",
        // a_speaker: "Sofia Mestari",
        a_image: sofia, // Ajouter l'image de Sofia Mestari quand disponible
        a_description: `En 2000, Sofia Mestari remporte la présélection de l'Eurovision dans la salle mythique de l'Olympia à Paris et représente la France à Stockholm. Elle signe avec le label Universal Music avec lequel elle collabore et enregistre plusieurs opus. Elle est révélée par son premier album "On aura le Ciel" et entame une série de concerts salués par le public et la presse. En 2003 sort l'album "En plein Cœur de la Nuit", d'où sont extraits les singles "Ne Pars pas" et "Ce que tu m'as fait" qui se classent dans le Top et rencontrent un franc succès.

Sofia est sollicitée par l'association Rêves, dont la marraine est Vanessa Paradis, pour figurer sur l'album "Ma Chanson d'Enfance" puis est invitée par Patrick Bruel à enregistrer le single "Et puis la Terre" avec le collectif A.S.I.E, en faveur des victimes des séismes et tsunamis. Elle se joint à l'association Fight Aids, dont la présidente est SAS Stéphanie de Monaco et chante dans de nombreux concerts organisés par cette ONG.

En 2006 sort l'opus "La Vie en Entier", puis elle participe au concert "Autour de la Guitare" au Casino de Paris. En 2010, Sofia signe l'album "À la Croisée des Chemins". L'immense Maurane l'invite à chanter en duo à l'Olympia puis Sofia assure la première partie de l'artiste Eros Ramazzotti dans les plus grandes salles ainsi que des représentations aux côtés de Florent Pagny, Michel Fugain, Murray Head, Cock Robin ou encore Julien Clerc.

En 2013, avec l'artiste Barry, Sofia compose la chanson "Atfal El Jibal" chantée par un collectif d'artistes Marocains au profit de l'association El Baraka Angels. En 2015, Sofia dévoile l'album "Écoute les Parler" puis en 2017, elle s'installe quelques temps aux États-Unis.

En 2020, sur son nouvel album, Lartiste invite Sofia à reprendre en duo son titre à succès "Ne Pars pas", la même année Sofia se joint à l'association "Enfants du Désert" créée par Laetitia et Emmanuel Chevalier, puis en devient Ambassadrice. L'association "Enfants du Désert" œuvrant en faveur des populations en situation de précarité dans la province d'Errachidia.

En juin 2021, avec le soutien de l'Ambassade du Royaume du Maroc en Côte d'Ivoire, Sofia donne un concert à l'Institut Français d'Abidjan au profit de la Fondation "Children of Africa", dont la Présidente est Madame Dominique Ouattara, Première Dame de Côte d'Ivoire.

Un nouvel album symbolise un tournant dans la carrière de l'artiste, les premières émotions des débuts laissant place à la passion maîtrisée. Aujourd'hui, femme et artiste accomplie, Sofia Mestari est en préparation de son prochain album où elle revendique un univers musical bien à elle, à l'image de Sofia qui a su faire fructifier un chant à la fois multiple et unique, préférant à la puissance dont elle dispose, les subtiles nuances des sentiments vrais qui ne se livrent qu'avec sensibilité et retenue, mais avec et toujours, un message plein d'espoir...

Le premier extrait de ce nouvel opus est "AFRICA", chanson réalisée en collaboration avec Dj VAN, comme un hommage en musique au Maroc et à l'Afrique, notre continent.

En avril 2026, Sofia Mestari organise la première édition du Concert "VOICES OF AFRICA", itinérant et qui réunit plusieurs artistes de renom du Continent pour chanter ensemble l'unité Africaine et la solidarité puisque chaque édition, le Concert "VOICES OF AFRICA" sera en soutien à l'association "Les Bonnes Œuvres du Cœur", fondée par le Docteur Said Ejjennane.`,
        youtube: null, // Ajouter un lien YouTube si disponible
      },
    ],
  },
];

export default ProgramData2026_FR;
