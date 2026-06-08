import duplex from "@/assets/project-duplex.jpg";
import villa from "@/assets/project-villa.jpg";
import commercial from "@/assets/project-commercial.jpg";
import interior from "@/assets/project-interior.jpg";
import elevation from "@/assets/project-elevation.jpg";
import construction from "@/assets/project-construction.jpg";

export type Project = {
  slug: string;
  name: string;
  location: string;
  area: string;
  category: string;
  thumbnail: string;
  plotSize: string;
  builtUp: string;
  floors: string;
  serviceType: string;
  completion: string;
  overview: string;
  requirements: string;
  approach: string;
  challenges: string;
  solutions: string;
};

export const categories = [
  "All Projects",
  "Residential",
  "Duplex Houses",
  "Luxury Villas",
  "Commercial Buildings",
  "Interior Design",
  "3D Elevation",
  "Under Construction",
];

export const projects: Project[] = [
  {
    slug: "modern-duplex-jaunpur",
    name: "Modern Duplex Residence",
    location: "Jaunpur",
    area: "2500 Sq. Ft.",
    category: "Duplex Houses",
    thumbnail: duplex,
    plotSize: "30 x 50 ft",
    builtUp: "2500 Sq. Ft.",
    floors: "G+1",
    serviceType: "Full Design + Supervision",
    completion: "March 2024",
    overview: "A contemporary duplex blending modern aesthetics with Vastu-compliant planning, designed for a growing family in Jaunpur.",
    requirements: "Open living areas, four bedrooms, dedicated puja room, and a parking court for two vehicles.",
    approach: "Used a split-volume facade with warm wood cladding to balance the white stucco mass while keeping interiors naturally lit.",
    challenges: "Narrow plot frontage and east-facing entry constraints.",
    solutions: "Reorganised circulation around a central courtyard and stepped the upper floor back to gain a private terrace.",
  },
  {
    slug: "luxury-villa-pratapgarh",
    name: "Luxury Villa with Pool",
    location: "Pratapgarh",
    area: "4200 Sq. Ft.",
    category: "Luxury Villas",
    thumbnail: villa,
    plotSize: "60 x 90 ft",
    builtUp: "4200 Sq. Ft.",
    floors: "G+1 with Basement",
    serviceType: "Architecture + Interior + Landscape",
    completion: "December 2023",
    overview: "A premium villa with a landscaped pool deck, double-height living and resort-style bedrooms.",
    requirements: "Five-bedroom luxury home with home theatre, gym and pool.",
    approach: "Hovering roof planes and floor-to-ceiling glass open the home to the pool court.",
    challenges: "Heat gain across the western facade.",
    solutions: "Deep cantilevers, aluminium louvres, and a green buffer reduced solar load by ~40%.",
  },
  {
    slug: "commercial-building-jaunpur",
    name: "Commercial Office Block",
    location: "Jaunpur",
    area: "8000 Sq. Ft.",
    category: "Commercial Buildings",
    thumbnail: commercial,
    plotSize: "50 x 80 ft",
    builtUp: "8000 Sq. Ft.",
    floors: "G+3",
    serviceType: "Structural + Architectural",
    completion: "August 2024",
    overview: "A four-storey commercial block with retail on ground and flexible offices above.",
    requirements: "Column-free floor plates and a prominent street identity.",
    approach: "Post-tensioned beams allowed 9m clear spans with a glazed double-height entrance.",
    challenges: "Tight site with no setback for staging.",
    solutions: "Phased construction with precast staircases reduced on-site time by six weeks.",
  },
  {
    slug: "premium-living-interior",
    name: "Premium Living Interior",
    location: "Jaunpur",
    area: "1800 Sq. Ft.",
    category: "Interior Design",
    thumbnail: interior,
    plotSize: "—",
    builtUp: "1800 Sq. Ft.",
    floors: "Apartment",
    serviceType: "Turnkey Interior",
    completion: "June 2024",
    overview: "Warm modern interior with gold accents, fluted wood panels and a custom chandelier feature.",
    requirements: "Elegant entertaining space with hidden storage and concealed lighting.",
    approach: "Layered lighting and a neutral palette let materials carry the story.",
    challenges: "Low slab height in living area.",
    solutions: "Coffered cove ceiling visually lifted the volume by 200mm.",
  },
  {
    slug: "contemporary-3d-elevation",
    name: "Contemporary 3D Elevation",
    location: "Pratapgarh",
    area: "2200 Sq. Ft.",
    category: "3D Elevation",
    thumbnail: elevation,
    plotSize: "30 x 60 ft",
    builtUp: "2200 Sq. Ft.",
    floors: "G+1",
    serviceType: "3D Elevation Design",
    completion: "February 2024",
    overview: "Photorealistic elevation study exploring two material options for a residential plot.",
    requirements: "Modern facade with low maintenance materials.",
    approach: "Combined white plaster with WPC cladding panels for warmth.",
    challenges: "Client wanted a sloped roof without losing modern character.",
    solutions: "Asymmetric mono-pitch roofs created a strong silhouette.",
  },
  {
    slug: "under-construction-jaunpur",
    name: "Residence Under Construction",
    location: "Jaunpur",
    area: "3000 Sq. Ft.",
    category: "Under Construction",
    thumbnail: construction,
    plotSize: "40 x 60 ft",
    builtUp: "3000 Sq. Ft.",
    floors: "G+2",
    serviceType: "Structural Design + Site Supervision",
    completion: "Ongoing — ETA Q2 2026",
    overview: "Three-storey residence currently in superstructure phase with weekly site supervision.",
    requirements: "Earthquake-resistant RCC frame with provision for future terrace addition.",
    approach: "Designed as Zone-III compliant with ductile detailing.",
    challenges: "Variable soil bearing capacity.",
    solutions: "Adopted raft + plinth beam combination after soil investigation.",
  },
];
