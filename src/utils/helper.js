import {
  FaDiagramProject,
  FaEnvelope,
  FaTwitter,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
} from "react-icons/fa6";
import { DiceGame, Edusity, ChefsKitchen, PigGame } from "../assets";

export const Socials = [
  {
    id: `twitter-${Date.now()}`,
    Icon: FaTwitter,
    uril: "https://twitter.com/siddharth27soni",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uril: "https://www.linkedin.com/in/siddharth-soni-b2a0132a8/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uril: "https://github.com/web-sid",
    color: "#fff",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `Chef's Kitchen-${Date.now()}`,
    name: "Chef's Kitchen",
    imgSrc: ChefsKitchen,
    gitURL: "https://github.com/web-sid/Chef-s-Kitchen-Frontend-Admin-Panel",
    demo: "https://chefs-kitchen-restaurant.netlify.app/",
  },
  {
    id: `University-${Date.now()}`,
    name: "Edusity University!",
    imgSrc: Edusity,
    gitURL: "https://github.com/web-sid/Edusity",
    demo: "https://edusity-education-university.netlify.app/",
  },
  {
    id: `Dice Game-${Date.now()}`,
    name: "Guess the Dice!",
    imgSrc: DiceGame,
    gitURL: "https://github.com/web-sid/Dice-Game",
    demo: "https://guess-number-on-dice-game.netlify.app/",
  },
  {
    id: `A Pig Game-${Date.now()}`,
    name: "A Pig Game",
    imgSrc: PigGame,
    gitURL: "https://github.com/web-sid/The-Pig-Game",
    demo: "https://a-pigs-game.netlify.app/",
  },
];
