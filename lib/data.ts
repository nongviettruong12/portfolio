import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Zingmp3clone from "@/public/36 - CqI6HUQ.png";
import fashionFinds from "@/public/fashionfinds.jpg";
import ShopDienMay from "@/public/ShopDienMay.png";

export const links = [
  {
    name: "Home",
    hash: "#Home",
  },
  {
    name: "About",
    hash: "#About",
  },
  {
    name: "Projects",
    hash: "#Projects",
  },
  {
    name: "Skills",
    hash: "#Skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#Contact",
  },
] as const;

export const experiencesData = [
  {
    title: "FPT Polytechnic",
    location: "Trinh Van Bo Street,Nam Tu Liem District",
    description: "",
    date: "2021",
  },
];
export const projectData = [
  {
    title: "ZingMp3",
    description: "",
    imageUrl: Zingmp3clone,
  },
  {
    title: "Fashion_Finds",
    description: "",
    imageUrl: fashionFinds,
  },
  {
    title: "ShopDienMay",
    description: "",
    imageUrl: ShopDienMay,
  },
] as const;
export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Angular.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
] as const;
