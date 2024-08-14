import { IBM_Plex_Mono, Ubuntu } from "next/font/google";

// Configure the Ubuntu font with only the allowed weights
export const ubuntu = Ubuntu({
  subsets: ['latin'], 
  weight: ['300', '400', '500', '700']  // Restrict to allowed weights
});

// Configure the IBM Plex Mono font with only the allowed weights
export const ibm = IBM_Plex_Mono({
  subsets: ['latin'], 
  weight: ['300', '400', '500', '700']  // Restrict to allowed weights
});

export const skills =[
    {skillName:'Html'},
    {skillName:'Css'},
    {skillName:'Tailwind'},
    {skillName:'JS'},
    {skillName:'TS'},
    {skillName:'React'},
    {skillName:'Next.js'},
    {skillName:'Node.js'},
    {skillName:'Express.js'},
    {skillName:'MongoDB'},
    {skillName:'REST API'},
    {skillName:'Figma'},
    {skillName:'Git'},
    {skillName:'GitHub'},
]
