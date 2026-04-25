import dayExperience1 from "./../assets/watersport/day-experience/01.webp";
import dayExperience2 from "./../assets/watersport/day-experience/02.webp";
import dayExperience3 from "./../assets/watersport/day-experience/03.webp";
import dayExperience4 from "./../assets/watersport/day-experience/04.webp";
import dayExperience5 from "./../assets/watersport/day-experience/05.webp";

import watersport4days1 from "./../assets/watersport/4-day-retreat/1.webp";
import watersport4days2 from "./../assets/watersport/4-day-retreat/2.webp";
import watersport4days3 from "./../assets/watersport/4-day-retreat/3.webp";
import watersport4days4 from "./../assets/watersport/4-day-retreat/4.webp";
import watersport4days5 from "./../assets/watersport/4-day-retreat/5.webp";

import watersport5days1 from "./../assets/watersport/5-day-retreat/1.webp";
import watersport5days2 from "./../assets/watersport/5-day-retreat/2.webp";
import watersport5days3 from "./../assets/watersport/5-day-retreat/3.webp";
import watersport5days4 from "./../assets/watersport/5-day-retreat/4.webp";
import watersport5days5 from "./../assets/watersport/5-day-retreat/5.webp";
import watersport5days6 from "./../assets/watersport/5-day-retreat/6.webp";
import watersport5days7 from "./../assets/watersport/5-day-retreat/7.webp";
import watersport5days8 from "./../assets/watersport/5-day-retreat/8.webp";
import watersport5days9 from "./../assets/watersport/5-day-retreat/9.webp";

import janzuTraining1 from "./../assets/watersport/janzu-training/1.webp";
import janzuTraining2 from "./../assets/watersport/janzu-training/2.webp";
import janzuTraining3 from "./../assets/watersport/janzu-training/3.webp";
import janzuTraining4 from "./../assets/watersport/janzu-training/4.webp";
import janzuTraining5 from "./../assets/watersport/janzu-training/5.webp";
import { includes } from "../components/molecules/RetreatsCard/RetreatsCard";

interface retreatsTypes {
  section: string;
  photos: string[];
  title: string;
  summary: string;
  includes: includes[];
  prices: { [key: string]: number | string }[];
  discounts?: string;
  headerImg: string;
  button?: string;
}

export const waterSportRetreats: retreatsTypes[] = [
  {
    photos: [
      dayExperience1,
      dayExperience3,
      dayExperience4,
      dayExperience5,
    ],
    section: "water-retreat-bacalar-day-experience",
    title: "1 DAY WATER RETREAT",
    summary:
      "Are you in Bacalar or nearby? I invite you to experience a holistic healing day designed to renew your vital energ. "
      ,
    includes: [
      {
        title: "Why Should You Join?",
        list: [
          "Includes guided outdoor meditation, mindful breathing, and relaxing yoga.",
          "Renew your energy and bring intention to your vacation.",
          "We conclude with a group activity at the lagoon to boost your self-confidence.",
        ],
      },
    ],
    prices: [
    ],
    button: "Reserve Your Spot",
    headerImg: dayExperience2,
  },
  {
    photos: [
      watersport4days2,
      watersport4days3,
      watersport4days4,
      watersport4days5,
    ],
    section: "water-wellness-retreat-mexico-4-days",
    title: "4 DAY WATER WELLNESS RETREAT IN MEXICO ",
    summary:
      "Do you feel blocked or deeply in need of a reset? This 4-day water retreat in Mexico is an immersive wellness experience designed to help you release stress, restore balance, and reconnect with yourself through water-based therapies and conscious practices in nature.",
    includes: [
      {
        title: "What Will You Experience?",
        list: [
          "4 days of luxury accommodation",
          "Daily breakfast, lunch & nourishing snacks",
          "Daily restorative yoga & meditation to calm the mind",
          "Ice bath & breathwork sessions to build resilience",
          "Janzu Water Therapy — a rebirth experience",
          "Water contact dance —free expression",
          "Transformational breathwork — a guided journey for reset and vision",
          "Cenotes tour & immersive nature experiences",
        ],
      },
    ],
    prices: [
      { title: "Private room for 1 person", price: 1800 },
      { title: "Deluxe room for 1 person", price: 2000 },
      { title: "Twins room for 2 people", price: 1600 },
    ],
    headerImg: watersport4days1,
    button: "Book Now",
  },
  {
    photos: [
      watersport5days1,
      watersport5days2,
      watersport5days3,
      watersport5days5,
      watersport5days6,
      watersport5days7,
      watersport5days8,
      watersport5days9,
    ],
    section: "sup-kayak-wellness-retreat-bacalar",
    title: "5 DAY WATERSPORT RETREAT",
    summary:
      "Are you feeling exhausted or burned out? It's time to pause. I invite you to an exclusive integrative retreat in Bacalar designed for outdoorsy souls. Here, you will experience a deep reset and renewal of your body, mind, and soul — fully immersed in nature and the healing waters of the lagoon.",
    includes: [
      {
        title: " What's Included:",
        list: [
          "5 nights of luxury accommodation",
          "Daily breakfast, lunch, and healthy snacks",
          "Daily yoga and meditation classes",
          "3 aquatic therapy sessions (Ice Bath, Janzu & Water Contact)",
          "2 serene excursions (SUP & Kayak)",
          "3 mental health and personal growth workshops",
          "1 cacao ceremony & ecstatic dance with live DJ set",
          "Eco Tour — exploring geology, wildlife, and native flora",
          "And more…",
        ],
      },
    ],
    prices: [
      { title: "Private room for 1 person", price: 990 },
      { title: "Deluxe room for 1 person", price: 1090 },
      { title: "Twins room for 2 people", price: 790 },
    ],
    headerImg: watersport5days4,
    button: "Book Your Retreat",
  },
  {
    photos: [
      janzuTraining1,
      janzuTraining2,
      janzuTraining3,
      janzuTraining4,
    ],
    section: "janzu-training",
    title: "Janzu Water Healing Training",
    summary:
      "10 days or 14 days Certified Janzu Facilitator Training, Mexico. Are you ready to lead, heal, and expand your path in the world of holistic wellness?",
    includes: [
      {
        title: "",
        list: [
          "This immersive Janzu Level 1 & 2 training is a powerful journey of self-discovery, healing, and transformation—combining both theory and hands-on practice.",
          "Learn directly from Daniel, an experienced teacher with over 8 years of guiding Janzu sessions worldwide, while also receiving support from Hilda, holistic business mentor and founder of Outretreat, to help you grow professionally in the wellness industry.",
          "Set in the breathtaking natural beauty of Bacalar Lagoon, often called the “Maldives of Mexico,” this experience integrates nature as a key part of your learning and transformation.)",
        ],
      },
    ],
    prices: [{ title: "Private cabin for 1 person", price: 5200 }],
    discounts: "",
    headerImg: janzuTraining5,
    button: "Apply Now",
  },
];

import wellnessJanzu from "./../assets/wellness/Janzu.webp";
import wellnessIceBath from "./../assets/wellness/Ice-bath.webp";
import wellnessBreathwork from "./../assets/wellness/Breathwork.webp";

export const mountRetreats: retreatsTypes[] = [
  {
    photos: [
      wellnessJanzu
    ],
    section: "janzu-water-therapy-bacalar-lagoon",
    title: "Janzu Water Therapy ",
    summary:
      "Janzu is a unique water therapy experience in Bacalar Lagoon, Mexico. This aquatic healing session combines gentle floating techniques, breath awareness, and fluid underwater movements to promote deep relaxation and emotional release. If you are looking for one of the top wellness experiences in Bacalar, a private water healing therapy session, or a peaceful lagoon activity, Janzu is a must-try experience.",
    includes: [
    ],
    prices: [
      { title: "Private cabin for 1 person", price: 5200 }
    ],
    button: "Book Water Session",
    headerImg: wellnessJanzu,
  },
  {
    photos: [
      wellnessIceBath
    ],
    section: "ice-bath-bacalar-lagoon",
    title: "Guided Cold Plunge with Brearthwork ",
    summary:
      "Our Ice Bath experience is inspired by the Wim Hof Method, combining controlled breathing techniques, mindset training, and safe cold exposure. Through guided breathwork before entering the ice bath, you learn how to regulate your nervous system, increase oxygen levels, and prepare your body for the cold immersion experience.",
    includes: [
      {
        title: "Cold Water immersion helps to:",

        list: [
          "Strengthen mental resilience",
          "Boost immune response",
          "Increase focus and clarity",
        ],
      },
    ],
    prices: [
      { title: "Private cabin for 1 person", price: 5200 }
    ],
    button: "Join us",
    headerImg: wellnessIceBath,
  },
  {
    photos: [
      wellnessBreathwork
    ],
    section: "online-breathwork-session-1-1",
    title: "Breathwork",
    summary: 
    "Through structured breathing techniques, you can access deeper states of awareness — all from the comfort of your home. I offer four different types of breathwork sessions,",
    includes: [
      {
        title: " Each designed with a specific intention:",
        list: [
          "Stress Relief Session – Regulate the nervous system, release tension, and restore calm.",
          "Trauma Reset Session – Gently support emotional release and help the body process stored experiences.",
          "Vision & Clarity Session – Gain mental clarity, unlock creativity, and reconnect with your direction and purpose.",
          "Anxiety Relief Session – Calm an overactive mind, reduce anxious patterns, and create inner stability.",
        ],
      },
    ],
    prices: [
      { title: "Private cabin for 1 person", price: 5200 }
    ],
    button: "1:1 Online Session",
    headerImg: wellnessBreathwork,
  },
];
