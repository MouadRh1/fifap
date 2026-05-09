// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: {
        // Navigation
        Accueil: "Accueil",
        Programme: "Programme",
        "Autour du festival": "Autour du festival", // ← Identique à Utils.js
        "À propos": "À propos", // ← Identique à Utils.js
        Contact: "Contact",
        Actualités: "Actualités",

        // Messages
        programme_du_festival: "Programme du Festival",
        decouvrez_programme:
          "Découvrez les événements marquants du festival et plongez dans une expérience unique !",
        voir_tout_programme: "Voir tout le Programme",
        chargement: "Chargement...",
        aucune_description: "Aucune description disponible",
        image_non_disponible: "Image non disponible",

        erreur_chargement: "Erreur de chargement du programme",
        // Jours
        mardi: "Mardi",
        mercredi: "Mercredi",
        jeudi: "Jeudi",
        vendredi: "Vendredi",
        samedi: "Samedi",
        dimanche: "Dimanche",

        // Mois
        juin: "Juin",
        hero_premier: "Premier",
        hero_festival: "Festival",
        hero_international: "International",
        hero_film_archeologique: "du Film Archéologique",
        hero_patrimonial_rabat: "et Patrimonial de Rabat",
        hero_date: "du 09 au 13 Juin 2026",
        invitation_filename: "Invitation_Festival.pdf",

        //prefaces
        prefaces_titre: "Préfaces des représentants des institutions",
        prefaces_description:
          "Les institutions marocaines jouent un rôle clé dans le soutien et la promotion du festival. Découvrez les messages et préfaces de leurs représentants.",
        comite_organisation: "Comité d'Organisation",
        membres_jury: "Membres du Jury",
        membre_jury: "Membre du Jury",
        voir_tous_membres_comite: "Voir tous les membres du comité",
        voir_tous_membres_jury: "Voir tous les membres du jury",
        preface: "Préface",
        editorial: "Éditorial",
        voir_plus: "Voir Plus",
        aucune_description: "Aucune description disponible",
        //MEMBERS

        retour: "Retour",
        membre_introuvable: "Membre introuvable",
        chargement: "Chargement...",

        nos_partenaires: "Nos Partenaires",

        //hommage

        hommage: "Hommages",
        hommage_sous_titre: "À Joudia Hassar-Benslimane et Abderrahmane Chorfi",

        hommage_joudia_titre: "Hommage à Joudia Hassar-Benslimane (1943-2018)",
        hommage_joudia_p1:
          "Née à Salé en 1943, Mme. Joudia Hassar-Benslimane est une des figures emblématiques de l'archéologie marocaine. En 1972, elle intègre le ministère des affaires culturelles marocain et devient directrice du musée d'archéologie de Rabat.",
        hommage_joudia_p2:
          "Cet établissement, créé dans les années 1920 sous le protectorat français, devint un joyau de la ville de Rabat. Il a été rénové en 1952 et porte le nom du Musée de l'Histoire et des civilisations.",
        hommage_joudia_p3:
          "Depuis son affectation au service d'archéologie, Mme. Joudia Hassar-Benslimane a participé à de nombreuses fouilles dans les sites relevant de l'archéologie islamique au Maroc.",
        hommage_joudia_p4:
          "Dans un esprit de collaboration, elle initie et dirige des programmes de recherche à travers tout le territoire marocain avec des institutions françaises, allemandes, espagnoles et italiennes. Les publications des travaux menés sous sa direction ont permis la naissance en 1975, du Bulletin de l'Archéologie Marocaine, interrompu depuis quelques années.",
        hommage_joudia_p5:
          "Par son dévouement et son profond patriotisme, ainsi que par son engagement en faveur de l'archéologie et le patrimoine marocain, Mme. Joudia Hassar-Benslimane bénéficia du soutien royal. En 1992, elle fonda la Société Marocaine d'Archéologie et du Patrimoine (SMAP) sous la présidence effective de Son Altesse Royale la princesse Lalla Hasna. Œuvrant pour la promotion et la valorisation de l'archéologie et du patrimoine marocain, la SMAP lança en 2004 le premier numéro de la revue scientifique spécialisée en science d'archéologie et du patrimoine « Le Jardin des Hespérides ».",
        hommage_joudia_p6:
          "En 2015, Mme. Joudia Hassar-Benslimane choisit de se retirer de l'ensemble de ses activités scientifiques préférant laisser la relève aux jeunes chercheurs. Qualifiée par ses collègues et ses étudiants de personne sérieuse et scientifiquement rigoureuse, Joudia Hassar-Benslimane s'est éteinte en mai 2018 à Rabat.",
        hommage_joudia_conclusion:
          "Elle laisse derrière elle le parcours d'une femme d'exception, qui a consacré toute sa vie à faire reconnaître à l'archéologie marocaine la place éminente qu'elle mérite sur la scène de l'archéologie mondiale.",

        hommage_chorfi_titre: "Hommage à Abderrahmane Chorfi (1948–2026)",
        hommage_chorfi_p1:
          "M. Abderrahmane Chorfi, Président fondateur de l'ICOMOS Maroc était architecte, urbaniste et professeur respecté, il a consacré sa vie à protéger et à valoriser le patrimoine architectural du Maroc.",
        hommage_chorfi_p2:
          "En 1997, M. Chorfi est devenu le premier Président de l'ICOMOS Maroc, en plus d'avoir participé à la petite équipe fondatrice ayant préparé la création du Comité national. Il occupa le poste de président de 1997 à 2013. Pendant ces années formatrices, il a renforcé la place du Comité dans les débats et projets nationaux sur le patrimoine. En parallèle, il siégea également en tant que membre au sein du Conseil d'Administration de l'ICOMOS entre 2002 et 2005.",
        hommage_chorfi_p3:
          "Sous sa direction, l'ICOMOS Maroc a contribué à plusieurs initiatives d'importance nationale. M. Chorfi a notamment participé à la préparation du dossier de candidature de la ville de Rabat pour son inscription au patrimoine mondial, ainsi qu'à celle des dossiers de candidature de plusieurs autres sites au registre du patrimoine national du Maroc. Il avait été sollicité en 2024 comme expert par l'Unité de conseil et de suivi du patrimoine mondial de l'ICOMOS.",
        hommage_chorfi_p4:
          "Enseignant engagé, M. Chorfi a fondé l'École nationale d'architecture (ENA) de Rabat. Il en a été directeur de 1980 à 1982 puis de 1999 à 2004. Il a joué un rôle déterminant en encourageant les étudiants en architecture à traiter des thèmes liés au patrimoine dans leurs projets de fin d'études.",
        hommage_chorfi_p5:
          "Au niveau national, M. Chorfi a occupé de 2004 à 2010 le poste de Directeur général de l'urbanisme, de l'architecture et de l'aménagement du territoire au Ministère du Logement, de l'Urbanisme et de l'Aménagement du territoire. Parmi ses principales réalisations professionnelles, on peut citer la direction personnelle du plan d'aménagement et de sauvegarde de la ville moderne de Rabat et du quartier des Habous de Diour Jamaâ. Ce travail a contribué à la reconnaissance et à la protection du patrimoine urbain du XXe siècle.",
        hommage_chorfi_p6:
          "Grâce à ses conseils, son érudition et sa générosité envers les jeunes générations, Abderrahmane Chorfi laisse une empreinte durable sur la culture architecturale du Maroc ainsi que dans le développement de l'ICOMOS Maroc. Le souvenir de son intégrité, de son engagement intellectuel et de sa conviction inébranlable de la valeur du patrimoine comme essentielle à l'identité collective et au développement durable, restera dans les mémoires.",
        hommage_chorfi_conclusion:
          "En 2025, il nous avait fait l'honneur de participer au jury de la première édition du FIFAP.",

        //conferences

        conferences: "Conférences",
        by: "par",

        conf1_title:
          "La charnière cranio-rachidienne chez le Néandertalien et l'Homme moderne .Entre forme du crâne et posture verticale ",
        conf1_subtitle: "",
        conf1_speaker: "Djillali Hadjouis",
        conf1_speakerRole:
          "Paléontologue et paléoanthropologue, Président commission 'Méthodes et Théorie archéologiques', Union Internationale des Sciences Préhistoriques et Protohistoriques, MNHN Paris",
        conf1_description: `Les fonctionnalités anatomo-physiologiques de la base du crâne, clef de voûte de l'édifice crânien, interviennent tant sur le développement de la face et de l'occlusion, que sur la charnière occipito-cervicale. De même, cette dernière répond à la dynamique des postures cervicale et lombaire lors de la station debout. L'évolution de l'adaptation posturale de l'homme moderne <em class=\"italic\">Homo sapiens</em> a été différente de celle du néandertalien, aussi bien chez le jeune que chez l'adulte.\n\nEn s'appuyant sur l'imagerie téléradiographique, la dynamique fonctionnelle de l'occlusion et des articulés dentaires se retrouve sous l'influence des trajectoires de croissance (mouvements antéro-postérieurs) de la base du crâne notamment la charnière occipito-cervicale. En comparaison avec les Hommes de Néandertal, cette dernière s'avère nettement différente avec les hommes modernes, compte tenu d'une insuffisance de la bascule occipitale, suspendue en extension, donnant au rachis cervical une absence de lordose, de même la mise en place d'une cyphose lombaire lors d'une posture pelvienne en rétroversion. Au final, cette nouvelle lecture holistique a mis en évidence non seulement les déséquilibres de la dynamique posturale en station bipède, mais a également relevé un grand nombre d'asymétries cranio-faciales et des dysmorphoses dento-squelettiques.`,

        conf2_title:
          "Les récentes découvertes archéologiques exceptionnelles au Maroc et leur contribution à la réécriture de l'histoire de l'Afrique du Nord et du Sahara.",
        conf2_subtitle:
          "",
        conf2_speaker: "Youssef Bokbot",
        conf2_speakerRole:
          "Archéologue, professeur à l'Institut National des Sciences de l'Archéologie et du Patrimoine",
        conf2_description: `Ces dernières années, des équipes de recherches pluridisciplinaires internationales, dirigées par d'éminents archéologues marocains de l'Institut national des sciences de l'archéologie et du patrimoine (INSAP), ont réalisé des découvertes archéologiques exceptionnelles, qui sont en mesure de réécrire l'histoire de l'humanité entière, et qui ont émerveillé le monde entier, contribuant ainsi au rayonnement scientifique international du Maroc.\n\nRécemment, en 2024 et 2025, les équipes de recherches que je dirige ont annoncé à la communauté scientifique internationale et au grand public, deux grandes découvertes archéologiques exceptionnelles, qui ont bouleversé les connaissances historiques de la Méditerranée et l'Afrique. Il s'agit de la découverte à Oued Beht (Khémisset) du plus ancien et le plus vaste complexe agricole néolithique d'Afrique, datant de 5.400 à 4.800 ans ; ainsi que l'identification du plus vieux village d'Age du Bronze du Maghreb à Kach Kouch (Oued Laou Tétouan), habité par des populations autochtones maures, 7 siècles avant l'arrivée des marins et marchands phéniciens, occupé de 4200 à 2500 ans passés.\n\nNos découvertes à l'Oued Beht (province de Khémisset), ont été classées par les sociétés savantes, parmi les meilleurs au monde en 2024 et 2025 :\n1. Top 10 des meilleures découvertes archéologiques d'Afrique, de Méditerranée et du Proche Orient, décerné par l'université Stellenbosch d'Afrique du Sud;\n2. « Prix Antiquity » de la meilleure publication et meilleure équipe scientifique, délivré par l'Université de Cambridge;\n3. Awards of Field Discovery 2025, décerné par le Forum mondial d'Archéologie, octroyé par l'Académie chinoise des Sciences Sociales.`,

        conf3_title:
          "Découverte d'un Ankylosaure à armure étrange dans le Jurassique moyen de la région de Boulmane (Moyen Atlas, Maroc)",
        conf3_subtitle: "",
        conf3_speaker: "Driss Ouarhache",
        conf3_speakerRole:
          "Géologue, paléoanthropologue et Professeur à l'Université Sidi Mohamed Ben Abdellah de Fès",
        conf3_description: `Des fouilles paléontologiques, entamées depuis 2018 dans les terrains continentaux du Jurassique moyen (Bathonien : -165 à -168 Ma) de la région de Boulemane, nous ont permis de récolter un riche matériel de vertébrés fossiles. L'étude de ce matériel, par une équipe de chercheurs marocains et britanniques, a révélé que la majorité des restes fossiles appartiennent à un étrange dinosaure blindé, du groupe des Ankylosaures.\n\nLes Ankylosaures (Ankylosauria) sont des dinosaures herbivores, connus essentiellement au Crétacé supérieur (68 à 66 Ma). Ils se caractérisent par une armure composée de pointes et de plaques osseuses (Ostéodermes), incorporées dans les couches dermiques, et une massue de défense à l'extrémité de la queue.\n\nL'étude du matériel récolté a dévoilé des caractéristiques morphologiques inédites, telles :\n• des pointes de l'armure qui sont fusionnées aux côtes, caractère unique jamais observé auparavant chez les autres vertébrés, éteints ou vivants ;\n• des vertèbres sous forme de "poignées" au niveau de la queue, indiquent que l'animal possédait une arme caudale, ce qui remet en cause les connaissances actuelles sur l'évolution de la massue caudale chez les ankylosaures, car on pensait auparavant que ces structures n'avaient évolué qu'au Crétacé ;\n• de longues pointes, mesurant 1 mètre de long, qui sortent d'un collier osseux cervical ; une paire de longues pointes au niveau des hanches ;\n• des plaques osseuses qui servaient à protéger les flancs de l'animal.\n\nCes caractéristiques singulières ont permis de donner le nom de <em class="italic">Spicomellus afer</em> à ce dinosaure, nom qui signifie "collier à pointes africain", et de le présenter comme étant le plus ancien ankylosaure jamais découvert, et le premier à être décrit sur le continent africain. Les résultats de cette étude ont été publiés récemment dans la revue scientifique Nature. La découverte d'une armure aussi élaborée chez <em class="italic">Spicomellus afer</em>, un ankylosaure primitif, modifie notre compréhension de l'évolution phylogénétique de ces dinosaures et de leur répartition géographique. Toutefois, les restes fossiles des ankylosaures du Jurassique moyen sont encore rares et donc peu connus, et l'Afrique est probablement le continent le moins exploré en matière de fossiles de dinosaures. Ces restes fossiles sont désormais catalogués et conservés dans les locaux de la Faculté (FSDM).`,

        //apropos
        a_propos_du_festival: "À propos Du Festival",
        a_propos_description:
          "Découvrez notre histoire, nos valeurs et notre engagement à fournir les meilleurs services.",
        presentation_festival: "Présentation du Festival",
        presentation_texte:
          `Le film documentaire archéologique et patrimonial est un des moyens les plus attractifs pour mettre l'accent sur ce patrimoine. L'intérêt de ce festival consiste d'abord à s'adresser à un large public pour qu'il découvre différents sujets sur le patrimoine et l'archéologie. Les projections de films seront accompagnées de débats avec les différents acteurs du patrimoine et les professionnels du cinéma qui partageront leurs passions et leurs savoirs. Le festival veut aussi assurer la promotion et la valorisation du patrimoine matériel et immatériel marocain grâce notamment à la création d'un prix attribué à de jeunes réalisateurs pour la production d'un court métrage sur le patrimoine marocain. Ce festival sera ainsi le premier rendez-vous des professionnels du cinéma documentaire d'archéologie et du patrimoine en Afrique et dans le monde Arabe. Il rejoindra le réseau des autres festivals de ce type: Amiens, Bordeaux et Narbonne en France ; Oiasso en Espagne ; Rovereto, Florence et Licodia en Italie ; Athènes en Grèce ; Nyon en Suisse ; Split en Croatie ; Arkhaios aux USA. Cette édition se tiendra à Rabat, ville lumière et capitale du Maroc, fondée au XIIème siècle par les Almohades sous le règne d'Abd El Moumen (1133-1163). Sous l'impulsion de Yaqoub El Mansour (1184-1199), le véritable fondateur de Rabat, la ville a connu de grandes constructions. Le souverain a édifié une grande muraille qui s'étendait le long de la Casbah, jalonnée de tours et percée de cinq portes ; il a également construit la mosquée dont la « Tour Hassân » qui s'apparente aux minarets de la Koutoubia à Marrakech et de la Giralda à Séville. En face de Bab Zaër, se situe le complexe archéologique Chellah sur une basse colline qui domaine la vallée de l'Oued Bouregrag. Le site composé d'une nécropole mérinide et de l'ancienne cité romaine de Sala, est encerclé d'une enceinte de murailles entourant une mosquée, une médersa, un mausolée, un capitole, des thermes et un arc de triomphe. L'histoire de Rabat se prolonge dans un passé très lointain par la présence de vestiges, <em class=\"italic\">Homo erectus</em> y a 400 000 ans (Salé et Rabat-Kebibat). Les grottes du littoral atlantique ont également livré des restes humains appartenant à une civilisation atérienne propre au Nord de l'Afrique et dont les datations remontent à plus de 92 000 ans. Cette édition sous le thème « Hommes, cultures territoires » propose une programmation riche et diversifiée à travers la projection d'une vingtaine de documentaires couvrant l'actualité archéologique. Une semaine de voyage archéologique visuel et sonore nous conduira à travers le temps aux quatre coins du monde à la recherche de nos ancêtres les plus lointains. Cette édition sera le moyen de présenter une série de conférences et des rencontres avec des archéologues, des réalisateurs et des historiens.`,
        association_cerpaam: "Association CERPAAM",
        coordonnees: "Coordonnées",
        festival_name:
          "Festival International Du Film Archéologique Et Patrimonial De Rabat",
        adresse_rabat: "Hassan, Rabat",
        info_ouverture:
          "Cette adresse est ouverte au public uniquement en période Festivale.",
        standard_telephonique: "Standard téléphonique",
        publics: "Publics",
        contact: "Contact",
        equipe: "Equipe",
        directrice_festival: "Directrice Du Festival",
        comite_organisation: "Comité d'organisation",

        //NavBar

        programme_2025: "Programme 2025",
        programme_2026: "Programme 2026",
      },
    },
    ar: {
      translation: {
        // Navigation
        Accueil: "الرئيسية",
        Programme: "البرنامج",
        "Autour du festival": "حول المهرجان", // ← Traduction correcte
        "À propos": "عن المهرجان", // ← Traduction correcte
        Contact: "اتصل بنا",
        Actualités: "أخبار",

        // Messages
        programme_du_festival: "برنامج المهرجان",
        decouvrez_programme:
          "اكتشف الأحداث البارزة في المهرجان وانغمس في تجربة فريدة !",
        voir_tout_programme: "عرض البرنامج كاملاً",
        chargement: "جاري التحميل...",
        aucune_description: "لا يوجد وصف متاح",
        image_non_disponible: "الصورة غير متوفرة",

        erreur_chargement: "خطأ في تحميل البرنامج",
        // Jours
        mardi: "الثلاثاء",
        mercredi: "الأربعاء",
        jeudi: "الخميس",
        vendredi: "الجمعة",
        samedi: "السبت",
        dimanche: "الأحد",

        // Mois
        juin: "يونيو",
        // ... autres traductions
        hero_premier: "الأول",
        hero_festival: "مهرجان",
        hero_international: "الدولي",
        hero_film_archeologique: "للفيلم الأثري",
        hero_patrimonial_rabat: "والتراثي بالرباط",
        hero_date: "09 - 13 يونيو 2026",
        invitation_filename: "دعوة_المهرجان.pdf",

        // prefaces
        prefaces_titre: "كلمات تمثيل المؤسسات",
        prefaces_description:
          "تلعب المؤسسات المغربية دورًا رئيسيًا في دعم المهرجان والترويج له. اكتشف رسائل وكلمات ممثليهم.",
        comite_organisation: "لجنة التنظيم",
        membres_jury: "أعضاء لجنة التحكيم",
        membre_jury: "عضو لجنة التحكيم",
        voir_tous_membres_comite: "عرض جميع أعضاء اللجنة",
        voir_tous_membres_jury: "عرض جميع أعضاء لجنة التحكيم",
        preface: "كلمة تمهيدية",
        editorial: "افتتاحية",
        voir_plus: "عرض المزيد",
        aucune_description: "لا يوجد وصف متاح",

        //MEMBERS
        retour: "رجوع",
        membre_introuvable: "العضو غير موجود",
        chargement: "جاري التحميل...",
        hero: {
          premier: "المهرجان الدولي الأول",
          film: "للفيلم",
          archaeology: "الأركيولوجيا والتراث",
          city: "لمدينة الرباط",
          date: "من 09 إلى 13 يونيو 2026",
        },
        nos_partenaires: "شركاؤنا",

        //hommage
        hommage: "تكريم",
        hommage_sous_titre: "إلى جودية حصار بنسليمان وعبد الرحمن شرفي",

        // Joudia Hassar-Benslimane
        hommage_joudia_titre: "تكريم لجودية حصار بنسليمان (1943-2018)",
        hommage_joudia_p1:
          "وُلدت السيدة جودية حصار بنسليمان بمدينة سلا سنة 1943، وهي واحدة من الشخصيات البارزة في علم الآثار المغربي. في عام 1972، التحقت بوزارة الشؤون الثقافية المغربية وأصبحت مديرة متحف الآثار بالرباط.",
        hommage_joudia_p2:
          "هذا المؤسسة، التي تأسست في عشرينيات القرن الماضي تحت الحماية الفرنسية، أصبحت جوهرة مدينة الرباط. تم تجديده عام 1952 ويحمل اسم متحف التاريخ والحضارات.",
        hommage_joudia_p3:
          "منذ تعيينها في دائرة الآثار، شاركت السيدة جودية حصار بنسليمان في العديد من الحفريات في المواقع الأثرية الإسلامية في المغرب.",
        hommage_joudia_p4:
          "بروح التعاون، بادرت وأدارت برامج بحثية في جميع أنحاء التراب المغربي بالتعاون مع مؤسسات فرنسية وألمانية وإسبانية وإيطالية. مكنت منشورات الأعمال التي تمت تحت إشرافها من ولادة نشرة الآثار المغربية عام 1975، والتي توقفت منذ بضع سنوات.",
        hommage_joudia_p5:
          "بتفانيها ووطنيتها العميقة، وكذلك بالتزامها لصالح الآثار والتراث المغربي، حظيت السيدة جودية حصار بنسليمان بالدعم الملكي. في عام 1992، أسست الجمعية المغربية للآثار والتراث تحت الرئاسة الفعلية لصاحبة السمو الملكي الأميرة للا حسناء. تعمل الجمعية على تعزيز وتثمين الآثار والتراث المغربي، وأطلقت في عام 2004 العدد الأول من المجلة العلمية المتخصصة في علوم الآثار والتراث 'حديقة الأندلس'.",
        hommage_joudia_p6:
          "في عام 2015، اختارت السيدة جودية حصار بنسليمان التقاعد من جميع أنشطتها العلمية مفضلة ترك المجال للباحثين الشباب. وُصفت من قبل زملائها وطلابها بالشخصية الجادة والدقيقة علمياً، توفيت جودية حصار بنسليمان في مايو 2018 بالرباط.",
        hommage_joudia_conclusion:
          "تركت وراءها مسيرة امرأة استثنائية، كرست حياتها كلها لجعل علم الآثار المغربي يحتل المكانة المرموقة التي يستحقها على مسرح الآثار العالمي.",

        // Abderrahmane Chorfi
        hommage_chorfi_titre: "تكريم لعبد الرحمن شرفي (1948–2026)",
        hommage_chorfi_p1:
          "السيد عبد الرحمن شرفي، الرئيس المؤسس لإيكوموس المغرب، كان مهندساً ومخططاً حضرياً وأستاذاً محترماً، كرس حياته لحماية وتثمين التراث المعماري للمغرب.",
        hommage_chorfi_p2:
          "في عام 1997، أصبح السيد شرفي أول رئيس لإيكوموس المغرب، بالإضافة إلى مشاركته في الفريق المؤسس الصغير الذي أعد إنشاء اللجنة الوطنية. شغل منصب الرئيس من 1997 إلى 2013. خلال هذه السنوات التكوينية، عزز مكانة اللجنة في النقاشات والمشاريع الوطنية حول التراث. كما شغل منصب عضو في مجلس إدارة إيكوموس بين 2002 و 2005.",
        hommage_chorfi_p3:
          "تحت قيادته، ساهمت إيكوموس المغرب في العديد من المبادرات ذات الأهمية الوطنية. شارك السيد شرفي بشكل خاص في إعداد ملف ترشيح الرباط للتراث العالمي، وكذلك في ملفات ترشيح عدة مواقع أخرى في سجل التراث الوطني للمغرب. تمت الاستعانة بخبراته في عام 2024 من قبل وحدة استشارة ومتابعة التراث العالمي التابعة لإيكوموس.",
        hommage_chorfi_p4:
          "كرس معلم ملتزم، أسس السيد شرفي المدرسة الوطنية للهندسة المعمارية بالرباط. كان مديراً لها من 1980 إلى 1982 ثم من 1999 إلى 2004. لعب دوراً حاسماً في تشجيع طلاب الهندسة المعمارية على معالجة مواضيع تتعلق بالتراث في مشاريع تخرجهم.",
        hommage_chorfi_p5:
          "على المستوى الوطني، شغل السيد شرفي منصب المدير العام للتعمير والهندسة المعمارية وتهيئة التراب بوزارة الإسكان والتعمير وتهيئة التراب من 2004 إلى 2010. من بين إنجازاته المهنية الرئيسية، يمكن ذكر الإدارة الشخصية لمخطط التهيئة والحفاظ على مدينة الرباط الحديثة وحي حبوس ديور جامع. ساهم هذا العمل في الاعتراف بحماية التراث الحضري للقرن العشرين.",
        hommage_chorfi_p6:
          "بفضل نصائحه وثقافته وكرمه تجاه الأجيال الشابة، يترك عبد الرحمن شرفي بصمة دائمة على الثقافة المعمارية للمغرب وكذلك في تطوير إيكوموس المغرب. ستبقى ذكرى نزاهته والتزامه الفكري وإيمانه الراسخ بقيمة التراث كأساس للهوية الجماعية والتنمية المستدامة خالدة في الأذهان.",
        hommage_chorfi_conclusion:
          "في عام 2025، كان لنا شرف مشاركته كعضو في لجنة تحكيم الدورة الأولى لمهرجان الفيلم الأثري والتراثي بالرباط.",
        //conferences
        conferences: "المؤتمرات",
        by: "بقلم",

        conf1_title:
          "المفصل القحفي الفقري عند إنسان النياندرتال والإنسان الحديث",
        conf1_subtitle: "بين شكل الجمجمة والوضعية المستقيمة",
        conf1_speaker: "جيلالي حجويس",
        conf1_speakerRole:
          "عالم متحجرات وعالم أنثروبولوجيا قديمة، رئيس لجنة 'المناهج والنظريات الأثرية'، الاتحاد الدولي للعلوم ما قبل التاريخية وبدايات التاريخ، المتحف الوطني للتاريخ الطبيعي، باريس",
        conf1_description:
          "تؤدي الوظائف التشريحية والفسيولوجية لقاعدة الجمجمة، التي تُعدّ حجر الزاوية في البنية القحفية، دوراً محورياً في تطور الوجه والإطباق، فضلاً عن تأثيرها على مفصل القفا العنقي. وبالمثل، يستجيب هذا الأخير لديناميكيات الوضعية العنقية والقطنية أثناء الوقوف المنتصب. وقد اتخذ تطور التكيف الوضعي لدى الإنسان الحديث *(Homo sapiens)* مساراً مختلفاً عن ذلك الخاص بإنسان النياندرتال، سواء عند الصغار أم عند البالغين.\n\nبالاستناد إلى التصوير الشعاعي التليراديوغرافي، تتشكّل الديناميكية الوظيفية للإطباق وتمفصلات الأسنان تحت تأثير مسارات النمو (الحركات الأمامية الخلفية) لقاعدة الجمجمة، ولا سيما مفصل القفا العنقي. وبمقارنة ذلك بإنسان النياندرتال، يتضح أن هذا المفصل يختلف اختلافاً جوهرياً عند الإنسان الحديث، نظراً لقصور في ميل العظم القذالي المعلّق في وضعية مد، مما يُفضي إلى غياب الحُدبة الأمامية في العمود الفقري العنقي، إلى جانب تشكّل حداب قطني في وضعية الحوض الخلفية. وفي المحصلة، كشفت هذه القراءة الشاملة الجديدة عن اختلالات في ديناميكية الوضعية ثنائية القدمين، كما رصدت عدداً كبيراً من التضاريس القحفية الوجهية غير المتماثلة والتشوهات السنية الهيكلية.",

        conf2_title: "الاكتشافات الأثرية الاستثنائية الأخيرة في المغرب",
        conf2_subtitle:
          "إسهامها في إعادة كتابة تاريخ شمال أفريقيا والصحراء الكبرى",
        conf2_speaker: "يوسف بوكبوت",
        conf2_speakerRole:
          "عالم آثار، أستاذ في المعهد الوطني لعلوم الآثار والتراث",
        conf2_description:
          "في السنوات الأخيرة، أجرت فرق بحثية دولية متعددة التخصصات، يقودها علماء آثار مغاربة بارزون من المعهد الوطني لعلوم الآثار والتراث (INSAP)، اكتشافات أثرية استثنائية من شأنها إعادة كتابة تاريخ البشرية جمعاء، أذهلت العالم أجمع، وأسهمت في إشعاع المغرب علمياً على الصعيد الدولي.\n\nففي عامَي 2024 و2025، أعلنت الفرق البحثية التي أقودها للمجتمع العلمي الدولي وللرأي العام عن اكتشافين أثريين استثنائيين بالغَي الأهمية، قلبا المعطيات التاريخية المتعلقة بالبحر الأبيض المتوسط وأفريقيا. يتعلق الأمر بالكشف في موقع واد بهت (إقليم الخميسات) عن أقدم وأوسع مجمع زراعي نيوليتي في أفريقيا، يعود تاريخه إلى ما بين 5400 و4800 سنة؛ فضلاً عن التعرف على أقدم قرية من العصر البرونزي في المغرب الكبير بموقع كاش كوش (واد لاو - تطوان)، سكنتها شعوب أمازيغية أصلية قبل 7 قرون من وصول البحارة والتجار الفينيقيين، وامتد توطّنها من 4200 إلى 2500 سنة مضت.\n\nوقد صنّفت الهيئات العلمية المتخصصة اكتشافاتنا في موقع واد بهت (إقليم الخميسات) ضمن الأفضل عالمياً في عامَي 2024 و2025:\n1. ضمن أفضل 10 اكتشافات أثرية في أفريقيا والبحر الأبيض المتوسط والشرق الأدنى، الذي منحته جامعة ستيلنبوش بجنوب أفريقيا؛\n2. 'جائزة أنتيكيتي' لأفضل منشور وأفضل فريق علمي، الممنوحة من جامعة كامبريدج؛\n3. جائزة الاكتشاف الميداني 2025، التي يمنحها المنتدى العالمي لعلم الآثار التابع للأكاديمية الصينية للعلوم الاجتماعية.",

        conf3_title:
          "اكتشاف ديناصور أنكيلوصور ذو درع غريب في عصر الجوراسي الأوسط",
        conf3_subtitle: "منطقة بولمان (الأطلس المتوسط، المغرب)",
        conf3_speaker: "إدريس وارهاش",
        conf3_speakerRole:
          "جيولوجي وعالم أنثروبولوجيا قديمة وأستاذ بجامعة سيدي محمد بن عبد الله بفاس",
        conf3_description:
          "أتاحت لنا أعمال الحفر الباليونتولوجية التي انطلقت منذ عام 2018 في التكوينات القارية للجوراسي الأوسط (الباثوني: من 165 إلى 168 مليون سنة) بمنطقة بولمان، جمعَ مواد غنية من الفقاريات الأحفورية. وقد كشفت دراسة هذه المواد، التي أجرتها فرقة من الباحثين المغاربة والبريطانيين، أن غالبية البقايا الأحفورية تعود إلى ديناصور مدرّع غريب ينتمي إلى مجموعة الأنكيلوصورات.\n\nالأنكيلوصورات (Ankylosaurus) ديناصورات عاشبة، معروفة أساساً في الكريتاسي الأعلى (من 68 إلى 66 مليون سنة)، وتتميز بدرع مكوّن من أشواك وألواح عظمية (عظيمات جلدية) متداخلة في الطبقات الجلدية، وهراوة دفاعية في طرف الذيل.\n\nكشفت دراسة المواد المجمّعة عن خصائص مورفولوجية غير مسبوقة، أبرزها:\n• أشواك درع ملتحمة بالأضلاع، وهي سمة فريدة لم تُلاحَظ من قبل في أي فقاري منقرض أو حي؛\n• فقرات ذيلية على شكل 'مقابض' تدل على امتلاك الحيوان سلاحاً ذيلياً، مما يُعيد النظر في المعطيات الراهنة حول تطور الهراوة الذيلية لدى الأنكيلوصورات، إذ كان يُعتقد أن هذه البنى لم تتطور إلا في الكريتاسي؛\n• أشواك طويلة يبلغ طولها متراً واحداً، تنبثق من طوق عنقي عظمي، مع زوج من الأشواك الطويلة عند الوركين؛\n• ألواح عظمية كانت تعمل على حماية جانبَي الحيوان.\n\nأتاحت هذه الخصائص المتفردة تسمية هذا الديناصور بـ Spicomellus afer، وهو اسم يعني 'الطوق الأفريقي ذو الأشواك'، وتقديمه باعتباره أقدم أنكيلوصور اكتُشف على الإطلاق وأول أنكيلوصور يُوصف في القارة الأفريقية. وقد نُشرت نتائج هذه الدراسة مؤخراً في المجلة العلمية Nature. ويُغيّر اكتشاف درع بهذا التعقيد لدى Spicomellus afer، وهو أنكيلوصور بدائي، فهمَنا للتطور الفيلوجيني لهذه الديناصورات وتوزيعها الجغرافي. غير أن بقايا الأنكيلوصورات من الجوراسي الأوسط لا تزال نادرة وشحيحة التوثيق، كما أن أفريقيا تبقى على الأرجح القارة الأقل استكشافاً في مجال أحفوريات الديناصورات. وتُحفظ هذه البقايا الأحفورية حالياً وتُصنَّف في مرافق الكلية (FSDM).",
        //apropos
        a_propos_du_festival: "عن المهرجان",
        a_propos_description:
          "اكتشف قصتنا وقيمنا والتزامنا بتقديم أفضل الخدمات.",
        presentation_festival: "تقديم المهرجان",
        presentation_texte:
          "يعد الفيلم الوثائقي أحد أكثر الوسائل جاذبية لتسليط الضوء على هذا التراث. يكمن الاهتمام من هذا المهرجان في مخاطبة جمهور واسع لاكتشاف مواضيع مختلفة حول التراث وعلم الآثار. ستصاحب عروض الأفلام نقاشات مع مختلف الفاعلين في مجال التراث والمهنيين السينمائيين الذين سيتشاركون شغفهم ومعرفتهم. يهدف المهرجان أيضًا إلى تعزيز وتثمين التراث المادي وغير المادي المغربي، خاصة من خلال إنشاء جائزة تمنح للمخرجين الشباب لإنتاج فيلم قصير عن التراث المغربي. سيكون هذا المهرجان أول موعد للمهنيين في مجال السينما الوثائقية لعلم الآثار والتراث في إفريقيا والعالم العربي. سينضم إلى شبكة المهرجانات الأخرى من هذا النوع: أميان وبوردو وناربون في فرنسا؛ أوياسو في إسبانيا؛ روفيريتو وفلورنسا وليكوديا في إيطاليا؛ أثينا في اليونان؛ نيون في سويسرا؛ سبليت في كرواتيا؛ أرخايوس في الولايات المتحدة الأمريكية. ستعقد الدورة الأولى في الرباط، مدينة الأنوار وعاصمة المغرب، التي تأسست في القرن الثاني عشر على يد الموحدين في عهد عبد المؤمن (1133-1163). تحت قيادة يعقوب المنصور (1184-1199)، المؤسس الحقيقي للرباط، شهدت المدينة تشييدات كبيرة. شيد الحاكم سورًا عظيمًا يمتد على طول القصبة، تتخلله أبراج وتخترقه خمسة أبواب؛ كما بنى الجامع الذي يشبه 'برج حسان' مآذن الكتبية بمراكش والجيرالدا بإشبيلية. مقابل باب زعير، يقع المجمع الأثري شالة على تل منخفض يطل على وادي أبي رقراق. الموقع الذي يتكون من مقبرة مرينية والمدينة الرومانية القديمة سالا، محاط بأسوار تحيط بجامع ومدرسة وضريح وكابيتول وحمامات وقوس النصر. يمتد تاريخ الرباط إلى ماض بعيد جدًا بوجود بقايا للإنسان المنتصب قبل 400 ألف عام (سلا والرباط-كبيبات). كما كشفت كهوف الساحل الأطلسي عن بقايا بشرية تعود لحضارة عاتيرية خاصة بشمال إفريقيا والتي يعود تاريخها إلى أكثر من 92 ألف عام. ستتيح هذه الدورة تحت شعار 'شمال إفريقيا، إعادة كتابة التاريخ البشري' تسليط الضوء على اكتشاف جبل إيغود. كما ستقدم برنامجًا غنيًا ومتنوعًا من خلال عرض حوالي عشرين فيلمًا وثائقيًا في المسابقة تغطي الأخبار الأثرية. سيقودنا أسبوع من الرحلة الأثرية البصرية والسمعية عبر الزمن إلى جميع أنحاء العالم بحثًا عن أسلافنا الأقدم. ستكون هذه الدورة وسيلة لتقديم سلسلة من المحاضرات والجولات الإرشادية للمواقع الأثرية واللقاءات مع علماء الآثار والمخرجين والمؤرخين.",
        association_cerpaam: "جمعية سيربام",
        coordonnees: "الإحداثيات",
        festival_name: "المهرجان الدولي للفيلم الأثري والتراثي بالرباط",
        adresse_rabat: "حسان، الرباط",
        info_ouverture: "هذا العنوان مفتوح للجمهور فقط خلال فترة المهرجان",
        standard_telephonique: "الهاتف القياسي",
        publics: "الجمهور",
        contact: "اتصل بنا",
        equipe: "الفريق",
        directrice_festival: "مديرة المهرجان",
        comite_organisation: "لجنة التنظيم",

        //NavBar

        programme_2025: "برنامج 2025",
        programme_2026: "برنامج 2026",
      },
    },
  },
  lng: localStorage.getItem("language") || "fr", // langue initiale
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
