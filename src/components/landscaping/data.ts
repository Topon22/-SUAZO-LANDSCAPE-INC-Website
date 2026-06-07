export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
  detailedDescription: string;
  pricingNote: string;
}

export const SERVICES: ServiceData[] = [
  {
    slug: "lawn-care",
    title: "Lawn Care & Maintenance",
    shortTitle: "Lawn Care",
    description:
      "Keep your lawn lush, green, and perfectly manicured with our comprehensive maintenance programs tailored to Anaheim's climate.",
    image: "/images/lawn-care.png",
    icon: "Sprout",
    features: [
      "Weekly & bi-weekly mowing services",
      "Professional edging and trimming",
      "Fertilization & weed control programs",
      "Aeration and overseeding",
      "Seasonal cleanup and debris removal",
      "Lawn health assessment & treatment",
    ],
    detailedDescription:
      "Our Lawn Care & Maintenance service is the cornerstone of SUAZO LANDSCAPE INC. We understand that Anaheim's unique climate — warm summers and mild winters — requires specialized care to keep your lawn looking its best year-round. Our trained professionals use commercial-grade equipment and eco-friendly products to deliver results that speak for themselves. Whether you need regular weekly maintenance or a one-time seasonal cleanup, we customize our services to fit your property's specific needs and your budget. Every visit includes mowing, edging, blowing, and a visual inspection of your lawn's health.",
    pricingNote: "Starting at $45/visit for standard residential lots",
  },
  {
    slug: "landscape-design",
    title: "Landscape Design & Installation",
    shortTitle: "Landscape Design",
    description:
      "Transform your outdoor space with custom landscape designs that blend beauty, functionality, and sustainability.",
    image: "/images/landscape-design.png",
    icon: "Palette",
    features: [
      "Custom 3D landscape design plans",
      "Drought-tolerant & native plant selection",
      "Complete installation & project management",
      "Outdoor lighting design",
      "Water features & focal points",
      "Sustainable landscaping solutions",
    ],
    detailedDescription:
      "At SUAZO LANDSCAPE INC, our Landscape Design & Installation service turns your vision into reality. Our experienced designers work closely with you to create outdoor spaces that reflect your lifestyle and enhance your property's value. We specialize in California-friendly landscapes that are both beautiful and water-efficient, incorporating native plants, smart irrigation, and sustainable materials. From initial concept to final installation, we handle every detail — grading, soil preparation, planting, mulching, and finishing touches. Our designs consider Anaheim's Mediterranean climate to ensure your landscape thrives with minimal maintenance.",
    pricingNote: "Custom quotes — free design consultation included",
  },
  {
    slug: "hardscape",
    title: "Hardscape & Patios",
    shortTitle: "Hardscape",
    description:
      "Create stunning outdoor living spaces with expertly crafted patios, walkways, retaining walls, and more.",
    image: "/images/hardscape.png",
    icon: "BrickWall",
    features: [
      "Custom patio design & installation",
      "Natural stone & paver walkways",
      "Retaining walls & garden borders",
      "Outdoor kitchens & fire pits",
      "Decorative concrete & stamping",
      "Driveway design & installation",
    ],
    detailedDescription:
      "Our Hardscape & Patios service brings structure and elegance to your outdoor spaces. SUAZO LANDSCAPE INC crafts beautiful, durable hardscape features that extend your living area into the great outdoors. Whether you dream of a cozy patio for family gatherings, an outdoor kitchen for entertaining, or elegant walkways that guide visitors through your garden, we bring expert craftsmanship to every project. We work with premium materials — natural flagstone, interlocking pavers, stamped concrete, and more — ensuring your hardscape not only looks stunning but stands the test of time in Anaheim's climate.",
    pricingNote: "Starting at $15/sq ft for standard paver installation",
  },
  {
    slug: "tree-service",
    title: "Tree Services",
    shortTitle: "Tree Service",
    description:
      "Expert tree trimming, removal, and health care to keep your trees safe, healthy, and beautiful.",
    image: "/images/tree-service.png",
    icon: "TreePine",
    features: [
      "Professional tree trimming & pruning",
      "Safe tree removal & stump grinding",
      "Tree health assessment & treatment",
      "Emergency storm damage response",
      "Palm tree maintenance",
      "Crown thinning & shaping",
    ],
    detailedDescription:
      "SUAZO LANDSCAPE INC provides comprehensive tree services to keep your property safe and your trees healthy. Our certified arborists and experienced crew handle everything from routine pruning to complex removals with the utmost care and professionalism. We use proper pruning techniques that promote tree health and structural integrity, and our removal services include complete cleanup and stump grinding. Whether you have palms that need trimming, oaks that need shaping, or a hazardous tree that requires removal, we have the equipment, expertise, and insurance to handle the job safely. Emergency services are available for storm-damaged trees.",
    pricingNote: "Starting at $150 for basic trimming — free estimates",
  },
  {
    slug: "irrigation",
    title: "Irrigation & Sprinkler Systems",
    shortTitle: "Irrigation",
    description:
      "Smart irrigation solutions that conserve water while keeping your landscape vibrant and healthy.",
    image: "/images/irrigation.png",
    icon: "Droplets",
    features: [
      "Smart sprinkler system installation",
      "Drip irrigation systems",
      "System repair & upgrades",
      "Water-efficient retrofits",
      "Seasonal adjustment & programming",
      "Rain sensor installation",
    ],
    detailedDescription:
      "Water conservation is essential in Southern California, and our Irrigation & Sprinkler Systems service ensures your landscape gets exactly the water it needs — no more, no less. SUAZO LANDSCAPE INC designs, installs, and maintains efficient irrigation systems tailored to your property's unique requirements. We specialize in smart controllers that adjust watering based on weather data, drip systems that deliver water directly to plant roots, and high-efficiency sprinkler heads that minimize overspray and evaporation. Whether you need a new system, an upgrade, or repairs to an existing one, we'll help you save water and money while keeping your landscape lush.",
    pricingNote: "Full system installation starting at $1,500",
  },
  {
    slug: "garden-design",
    title: "Garden & Plant Care",
    shortTitle: "Garden Care",
    description:
      "Nurture beautiful gardens with expert plant selection, design, and ongoing care tailored to Southern California.",
    image: "/images/garden-design.png",
    icon: "Flower2",
    features: [
      "Custom garden design & planting",
      "Seasonal flower rotations",
      "Plant health diagnosis & treatment",
      "Mulching & soil amendment",
      "Rose & specialty garden care",
      "Container & vertical garden design",
    ],
    detailedDescription:
      "Our Garden & Plant Care service brings color, fragrance, and life to your outdoor spaces. SUAZO LANDSCAPE INC creates and maintains gardens that thrive in Anaheim's Mediterranean climate. From vibrant flower beds to serene meditation gardens, our horticultural experts select plants that provide year-round interest while minimizing water usage and maintenance. We offer complete garden design services, seasonal planting programs, and ongoing care packages. Our team understands the local soil conditions, microclimates, and plant varieties that perform best in Orange County, ensuring your garden is both beautiful and sustainable.",
    pricingNote: "Custom quotes based on garden scope — free consultation",
  },
];

export const COMPANY_INFO = {
  name: "SUAZO LANDSCAPE INC",
  phone: "+1 949-205-3983",
  phoneDisplay: "(949) 205-3983",
  address: "749 N Vine St, Anaheim, CA 92805",
  rating: 5.0,
  reviewCount: 11,
  description: "Local landscaping and gardening services",
};
