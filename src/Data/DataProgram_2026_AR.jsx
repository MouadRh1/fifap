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

import { v4 as uuidv4 } from "uuid";

const ProgramData2026_AR = [
  {
    id: uuidv4(),
    slug: "inauguration-du-festival",
    date: "الثلاثاء 9 يونيو 2026",
    time: "19:00",
    place: "سينما البهنيني",
    title: "افتتاح المهرجان",
    description: "كلمات افتتاحية وتكريم جودية حسار بنسليمان وعبد الرحمان شرفي",
    activities: [
      {
        a_id: 1,
        a_title: "أمريكا: التاريخ الجديد للبشر الأوائل",
        a_image: amerique,
        a_description:
          "إخراج روبان بيكنيل (Bellota Films, Yap Films, 2023, 90'). تحقيق أثري مؤثر حول ظهور نموذج تاريخي جديد، يُؤرّخ وصول البشر إلى القارة الأمريكية بنحو 30,000 سنة قبل الميلاد.",
      },
      {
        a_id: 2,
        a_title: "حفل استقبال",
        a_image: null,
        a_description: "",
      },
    ],
  },

  // ==================== الأربعاء 10 يونيو 2026 ====================
  {
    id: uuidv4(),
    slug: "voyage-en-extreme-orient",
    date: "الأربعاء 10 يونيو 2026",
    time: "14:30",
    place: "سينما رينيسانس",
    title: "رحلة إلى أقصى الشرق",
    description: "",
    activities: [
      {
        a_id: 3,
        a_title: "قلعة أزوتشي المفقودة",
        a_image: azuchi,
        a_description:
          "إخراج مارك جامبولسكي (Gedeon Programmes, France Télévisions, ZDF, NHK, Ubisoft, RTS). اعتُبرت في عصرها أروع ما شيّده الإنسان، وتخضع قلعة أزوتشي اليوم لتحقيق أثري وتاريخي واسع النطاق.",
      },
      {
        a_id: 4,
        a_title: "المدينة المنسية لأسرة مينغ",
        a_image: citeMing,
        a_description:
          "إخراج ستيفان بيغوان (Bellota Films, Arte France, 2024, 91'). المدينة الإمبراطورية فنغيانغ، التي أمر ببنائها مؤسس أسرة مينغ جو يوانجانغ.",
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "ecritures-et-musiques-oubliees",
    date: "الأربعاء 10 يونيو 2026",
    time: "20:00",
    place: "سينما رينيسانس",
    title: "الكتابات والموسيقى المنسية",
    description: "",
    activities: [
      {
        a_id: 5,
        a_title: "بحثاً عن الكتابة المنسية",
        a_image: ecritureOubliee,
        a_description:
          "إخراج نيغار زوكا وتيبو مارشان (Les films d'ici, Arte France, 2024, 53'). الخط العيلامي الخطي، كتابة نشأت منذ أكثر من 4000 سنة في إيران الحالية.",
      },
      {
        a_id: 6,
        a_title: "الكون، حكاية من عصر ما قبل الكتابة",
        a_image: elKown,
        a_description:
          "إخراج أمجد القاضي (جامعة جنيف، 2024، 23'). ما قبل تاريخ بلاد الشام في قلب السهل السوري.",
      },
      {
        a_id: 7,
        a_title: "النوتات الأولى",
        a_image: premieresNotes,
        a_description:
          "إخراج ليزا فانجو (Bonne Pioche Télévision, 2026, 90'). تحقيق علمي في أصول الموسيقى.",
      },
    ],
  },

  // ==================== الخميس 11 يونيو 2026 ====================
  {
    id: uuidv4(),
    slug: "voyage-dans-la-grece-antique",
    date: "الخميس 11 يونيو 2026",
    time: "14:30",
    place: "سينما رينيسانس",
    title: "رحلة إلى اليونان القديمة",
    description: "",
    activities: [
      {
        a_id: 8,
        a_title: "أثينا، في فجر الديمقراطية",
        a_image: athenes,
        a_description:
          "إخراج فلورانس تران (Yuzu Productions, 2026, 90'). يستجوب علماء الآثار والمؤرخون وعلماء الجينات والجيولوجيون أصولَ الديمقراطية المباشرة في أثينا.",
      },
      {
        a_id: 9,
        a_title: "دلفي، سرّة العالم",
        a_image: delphes,
        a_description:
          "إخراج تيبو مارشان (Tournez S'il Vous Plaît !, 2025, 52'). بفضل الأعمال الأثرية الحديثة، يُعيد هذا الفيلم الوثائقي بناء معبد دلفي بالكامل.",
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "histoires-de-momies",
    date: "الخميس 11 يونيو 2026",
    time: "20:00",
    place: "سينما رينيسانس",
    title: "حكايات المومياوات",
    description: "",
    activities: [
      {
        a_id: 10,
        a_title: "مومياوات مصر، في طلب الخلود",
        a_image: momiesEgypte,
        a_description:
          "إخراج ألكساندرا باربو (ZED لصالح France Télévisions, 2026, 90'). اكتشاف ورشة تحنيط يعود تاريخها إلى 2500 سنة.",
      },
      {
        a_id: 11,
        a_title: "بردياتٌ تُحدث ضجةً كبيرة",
        a_image: papyrus,
        a_description:
          "إخراج رافاييل مفر وبولين دوبيل وماري-بيير شوفري وأستريد أماديو (Past and Curious, 2026, 4'). قصة بردية من العصر البطلمي.",
      },
      {
        a_id: 12,
        a_title: "لغز مومياء المستنقع",
        a_image: enigmeMomie,
        a_description:
          "إخراج أليكسيس دو فافيتسكي (Eclectic, France télévisions, 2024, 90'). إنسان تولوند، مومياء طبيعية محفوظة في مستنقع دنماركي منذ أكثر من 2500 سنة.",
      },
    ],
  },

  // ==================== الجمعة 12 يونيو 2026 ====================
  {
    id: uuidv4(),
    slug: "neolithique-du-bassin-mediterraneen",
    date: "الجمعة 12 يونيو 2026",
    time: "15:30",
    place: "سينما رينيسانس",
    title: "العصر الحجري الحديث في حوض البحر المتوسط",
    description: "",
    activities: [
      {
        a_id: 13,
        a_title: "غموض الطائرات الورقية الصحراوية",
        a_image: cerfsVolants,
        a_description:
          "إخراج ناتالي لافيل (Ma Drogue à Moi, FTV, BBC Four, 2025, 52'). آلاف من التشكيلات الهندسية الحجرية الغامضة التي يعود تاريخها إلى نحو 7000 قبل الميلاد.",
      },
      {
        a_id: 14,
        a_title: "حراس ماضي منجيز - الأحجار الضخمة اللبنانية تكشف أسرارها",
        a_image: gardiensMenjez,
        a_description:
          "إخراج جيوفان بيروتي (SciencEscape, 2025, 19'). يستكشف مشروع MEG-A المقابرَ الضخمة الحجرية في شمال لبنان.",
      },
      {
        a_id: 15,
        a_title: "سردينيا، الحضارة الغامضة للنوراغيين",
        a_image: sardaigne,
        a_description:
          "إخراج توماس مارليي (GEDEON Programmes, ARTE France, 2024, 90'). حضارة عصر البرونز القوية التي شيّدت أبراجاً يبلغ ارتفاعها 30 متراً تُعرف بالنوراغي.",
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "regards-sur-les-civilisations-precolombiennes",
    date: "الجمعة 12 يونيو 2026",
    time: "20:00",
    place: "سينما رينيسانس",
    title: "نظرة على الحضارات ما قبل الكولومبية",
    description: "",
    activities: [
      {
        a_id: 16,
        a_title: "مدن الذهب - سوء الفهم الكبير",
        a_image: citesOr,
        a_description:
          "إخراج جوزفين دوتوي (Tournez S'il Vous Plaît !, France Télévisions, 2024, 90'). بعد خمسة قرون من الفتح، يحقق باحثون في السعي وراء الذهب.",
      },
      {
        a_id: 17,
        a_title: "ميزكلا! وليمة عند الماياييين القدماء",
        a_image: mezcla,
        a_description:
          "إخراج Past & Curious (Past & Curious, 2024, 4'44). كيف يُعيد علماء الآثار تركيب النظام الغذائي للمايا.",
      },
      {
        a_id: 18,
        a_title: "على خطى هنود الكاريبي",
        a_image: indiensCaraibes,
        a_description:
          "إخراج ماري لينتون (KAMI Productions, France Télévisions, 2026, 90'). تفكيك أسطورة 'الهمجي الطيب'.",
      },
    ],
  },

  // ==================== السبت 13 يونيو 2026 ====================
  {
    id: uuidv4(),
    slug: "des-gaulois-aux-cathedrales",
    date: "السبت 13 يونيو 2026",
    time: "09:30",
    place: "سينما رينيسانس",
    title: "من الغاليين إلى الكاتدرائيات",
    description: "",
    activities: [
      {
        a_id: 19,
        a_title: "حرب الغال: هل كذب علينا قيصر؟",
        a_image: guerreGaules,
        a_description:
          "إخراج لوران تيريا (J2F production, 2025, 90'). لم يصلنا سوى شهادة قيصر ('De Bello Gallico') وحدها.",
      },
      {
        a_id: 20,
        a_title: "تحقيق في الكنوز المدفونة لكاتدرائية نوتردام دو باري",
        a_image: notreDame,
        a_description:
          "إخراج فلورانس تران (ZED, Inrap, CNRS Images لصالح ARTE France, 2024, 77'). بعد الحريق، كشف تنقيب أثري استثنائي عن تابوتَين من الرصاص.",
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "a-travers-la-prehistoire",
    date: "السبت 13 يونيو 2026",
    time: "14:30",
    place: "سينما رينيسانس",
    title: "عبر عصور ما قبل التاريخ",
    description: "",
    activities: [
      {
        a_id: 21,
        a_title: "طوبا، البركان الذي كاد يُفني البشرية",
        a_image: toba,
        a_description:
          "إخراج فرانك كوفيليي وإيريك إيلينا (French Connection, 2026, 90'). ثار بركان طوبا العملاق (سومطرة) منذ 74,000 سنة.",
      },
      {
        a_id: 22,
        a_title: "حفريات أبفيل: نافذة على حياة أوائل البشر منذ 600,000 سنة",
        a_image: fouillesAbbeville,
        a_description:
          "إخراج فرانسوا غولان وروبان تيدونا (Inrap, 2025, 4'38). استكشاف رواسب نهر السوم الفيضية (600,000 سنة).",
      },
      {
        a_id: 23,
        a_title: "في جلد أوائل الفلاحين الفرنسيين",
        a_image: premiersPaysans,
        a_description:
          "إخراج ستيفان جاك (Drôle de Trame, 2025, 90'). منذ 7500 سنة، رواد الزراعة القادمون من الشرق الأدنى.",
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "palmares-et-concert",
    date: "السبت 13 يونيو 2026",
    time: "20:00",
    place: "سينما رينيسانس",
    title: "قائمة المتوجين وحفل موسيقي",
    description: "توزيع الجوائز وحفل الختام",
    activities: [
      {
        a_id: 24,
        a_title: "حفل الختام – قائمة المتوجين",
        a_image: null,
        a_description:
          "تمنح لجنة التحكيم جائزتين: الجائزة الكبرى للمهرجان وجائزة أفضل إسهام علمي. كما تمنح لجنة تحكيم طلابية جائزةً خاصة بها.",
      },
      {
        a_id: 25,
        a_title: "حفل موسيقي ختامي",
        a_image: null,
        a_description: "يُختتم المهرجان بحفل موسيقي (البرنامج قيد التأكيد).",
      },
    ],
  },
];
export default ProgramData2026_AR;
