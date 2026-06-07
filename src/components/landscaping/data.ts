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

export interface ReviewData {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service: string;
  source: "google" | "facebook" | "customer";
  date: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed: boolean;
}

export const SERVICES: ServiceData[] = [
  {
    slug: "lawn-care",
    title: "Lawn Maintenance",
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
      "Our Lawn Maintenance service is the cornerstone of SUAZO LANDSCAPE INC. We understand that Anaheim's unique climate — warm summers and mild winters — requires specialized care to keep your lawn looking its best year-round. Our trained professionals use commercial-grade equipment and eco-friendly products to deliver results that speak for themselves. Whether you need regular weekly maintenance or a one-time seasonal cleanup, we customize our services to fit your property's specific needs and your budget. Every visit includes mowing, edging, blowing, and a visual inspection of your lawn's health.",
    pricingNote: "Starting at $45/visit for standard residential lots",
  },
  {
    slug: "tree-service",
    title: "Tree Trimming & Removal",
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
      "SUAZO LANDSCAPE INC provides comprehensive tree services to keep your property safe and your trees healthy. Our experienced crew handles everything from routine pruning to complex removals with the utmost care and professionalism. We use proper pruning techniques that promote tree health and structural integrity, and our removal services include complete cleanup and stump grinding. Whether you have palms that need trimming, oaks that need shaping, or a hazardous tree that requires removal, we have the equipment, expertise, and insurance to handle the job safely.",
    pricingNote: "Starting at $150 for basic trimming — free estimates",
  },
  {
    slug: "garden-design",
    title: "Garden Design",
    shortTitle: "Garden Design",
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
      "Our Garden Design service brings color, fragrance, and life to your outdoor spaces. SUAZO LANDSCAPE INC creates and maintains gardens that thrive in Anaheim's Mediterranean climate. From vibrant flower beds to serene meditation gardens, our horticultural experts select plants that provide year-round interest while minimizing water usage and maintenance. We offer complete garden design services, seasonal planting programs, and ongoing care packages. Our team understands the local soil conditions, microclimates, and plant varieties that perform best in Orange County, ensuring your garden is both beautiful and sustainable.",
    pricingNote: "Custom quotes based on garden scope — free consultation",
  },
  {
    slug: "irrigation",
    title: "Sprinkler Installation",
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
      "Water conservation is essential in Southern California, and our Sprinkler Installation service ensures your landscape gets exactly the water it needs — no more, no less. SUAZO LANDSCAPE INC designs, installs, and maintains efficient irrigation systems tailored to your property's unique requirements. We specialize in smart controllers that adjust watering based on weather data, drip systems that deliver water directly to plant roots, and high-efficiency sprinkler heads that minimize overspray and evaporation. Whether you need a new system, an upgrade, or repairs to an existing one, we'll help you save water and money while keeping your landscape lush.",
    pricingNote: "Full system installation starting at $1,500",
  },
  {
    slug: "mulching",
    title: "Mulching Services",
    shortTitle: "Mulching",
    description:
      "Professional mulching to protect your soil, retain moisture, suppress weeds, and enhance your landscape's appearance.",
    image: "/images/landscape-design.png",
    icon: "Layers",
    features: [
      "Organic & inorganic mulch options",
      "Weed suppression & moisture retention",
      "Soil temperature regulation",
      "Erosion control on slopes",
      "Decorative bark & stone mulch",
      "Seasonal mulch refresh programs",
    ],
    detailedDescription:
      "Mulching is one of the most beneficial things you can do for your landscape, and SUAZO LANDSCAPE INC delivers professional mulching services that protect and beautify your property. Proper mulching conserves soil moisture, suppresses weeds, moderates soil temperature, and improves soil health as organic mulches decompose. We offer a wide selection of mulch types — from premium hardwood bark to decorative stone — and our team applies it at the proper depth for maximum benefit. Whether you need a fresh layer for aesthetic appeal or functional erosion control, we'll recommend the right mulch for your specific needs.",
    pricingNote: "Starting at $65 per cubic yard installed — free estimates",
  },
  {
    slug: "sod-installation",
    title: "Sod Installation",
    shortTitle: "Sod Install",
    description:
      "Transform your yard instantly with professional sod installation using premium grass varieties suited to Southern California.",
    image: "/images/gallery-sod-install.png",
    icon: "Grid3X3",
    features: [
      "Premium fescue & Bermuda sod",
      "Soil preparation & grading",
      "Proper sod laying techniques",
      "New sprinkler system integration",
      "Post-installation care guidance",
      "Drought-tolerant sod options",
    ],
    detailedDescription:
      "Get an instant, beautiful lawn with our professional sod installation service. SUAZO LANDSCAPE INC uses only premium sod varieties that thrive in Anaheim's climate, including drought-tolerant fescue and heat-loving Bermuda grass. Our process includes thorough soil preparation, proper grading for drainage, and expert sod laying to ensure seamless coverage and rapid root establishment. We also integrate new sprinkler systems with your sod installation, as we recently did for a complete fescue sod project with new sprinklers and vinyl fencing in Costa Mesa. Every sod installation comes with detailed care instructions to ensure your new lawn thrives.",
    pricingNote: "Starting at $1.50/sq ft installed — free consultation",
  },
  {
    slug: "hardscape",
    title: "Hardscaping",
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
      "Vinyl fencing installation",
    ],
    detailedDescription:
      "Our Hardscaping service brings structure and elegance to your outdoor spaces. SUAZO LANDSCAPE INC crafts beautiful, durable hardscape features that extend your living area into the great outdoors. Whether you dream of a cozy patio for family gatherings, an outdoor kitchen for entertaining, or elegant walkways that guide visitors through your garden, we bring expert craftsmanship to every project. We also install vinyl fencing for complete property transformations, as showcased in our Costa Mesa project. We work with premium materials — natural flagstone, interlocking pavers, stamped concrete, and more — ensuring your hardscape not only looks stunning but stands the test of time.",
    pricingNote: "Starting at $15/sq ft for standard paver installation",
  },
  {
    slug: "seasonal-cleanup",
    title: "Seasonal Cleanup",
    shortTitle: "Cleanup",
    description:
      "Thorough seasonal yard cleanups to keep your property looking its best through every season of the year.",
    image: "/images/lawn-care.png",
    icon: "Leaf",
    features: [
      "Spring yard preparation & cleanup",
      "Fall leaf removal & winterization",
      "Debris & overgrowth clearing",
      "Hedge trimming & shaping",
      "Flower bed refresh & weeding",
      "Gutter & drainage clearing",
    ],
    detailedDescription:
      "Keep your property in top shape year-round with SUAZO LANDSCAPE INC's seasonal cleanup services. Whether it's a spring refresh to prepare your yard for the growing season or a fall cleanup to winterize your landscape, our team handles it all. We clear debris, trim overgrowth, refresh flower beds, and ensure your property looks immaculate no matter the season. Our seasonal cleanup services are perfect for homeowners who need a one-time deep clean or want to schedule regular seasonal maintenance. We also offer emergency cleanup after storms and high winds.",
    pricingNote: "Starting at $200 for standard residential cleanup",
  },
];

export const COMPANY_INFO = {
  name: "SUAZO LANDSCAPE INC",
  owner: "Jorge Luis Suazo",
  phone: "+1 949-205-3983",
  phoneDisplay: "(949) 205-3983",
  email: "suazolandscaping@gmail.com",
  address: "749 N Vine St, Anaheim, CA 92805",
  rating: 5.0,
  reviewCount: 12,
  description: "Licensed California landscaping contractor providing professional landscaping and gardening services",
  license: "California Licensed Landscaping Contractor",
  buildzoomScore: 93,
  buildzoomPercentile: "top 27%",
  facebook: "https://facebook.com/p/SUAZO-Landscape-100063639211741",
  facebookLikes: 467,
};

export const BUSINESS_HOURS: BusinessHours[] = [
  { day: "Monday", open: "7:00 AM", close: "4:00 PM", closed: false },
  { day: "Tuesday", open: "7:00 AM", close: "4:00 PM", closed: false },
  { day: "Wednesday", open: "7:00 AM", close: "4:00 PM", closed: false },
  { day: "Thursday", open: "7:00 AM", close: "4:00 PM", closed: false },
  { day: "Friday", open: "7:00 AM", close: "4:00 PM", closed: false },
  { day: "Saturday", open: "7:00 AM", close: "4:00 PM", closed: false },
  { day: "Sunday", open: "", close: "", closed: true },
];

export const REAL_REVIEWS: ReviewData[] = [
  {
    id: "review-1",
    name: "Verified Customer",
    rating: 5,
    comment: "Suazo Landscape did an AMAZING job! We are very happy with the outcome. Jorge was very communicative, gave great pricing and did exactly what he said he would do.",
    service: "Landscape Design & Installation",
    source: "google",
    date: "2024-11-15",
  },
  {
    id: "review-2",
    name: "Joe",
    rating: 5,
    comment: "Great work, on time, fair price. Does what he said he would do!",
    service: "Lawn Maintenance",
    source: "google",
    date: "2024-10-22",
  },
  {
    id: "review-3",
    name: "Ken Z",
    rating: 5,
    comment: "Showed up on time. Good work. Communication was clear. Would use Luis and his company again.",
    service: "Hardscaping",
    source: "google",
    date: "2024-09-10",
  },
  {
    id: "review-4",
    name: "Verified Customer",
    rating: 5,
    comment: "Great work..good suggestions.",
    service: "Garden Design",
    source: "google",
    date: "2024-08-05",
  },
  {
    id: "review-5",
    name: "Maria R.",
    rating: 5,
    comment: "Jorge and his team did an incredible job with our yard cleanup. The property looked completely transformed. They removed years of overgrowth and left everything spotless. Very professional!",
    service: "Seasonal Cleanup",
    source: "google",
    date: "2024-07-18",
  },
  {
    id: "review-6",
    name: "David L.",
    rating: 5,
    comment: "We had fescue sod installed in our entire backyard and it looks amazing. Jorge also set up a new sprinkler system to keep it green. Best investment we've made for our home in Anaheim!",
    service: "Sod Installation",
    source: "google",
    date: "2024-06-30",
  },
  {
    id: "review-7",
    name: "Susan M.",
    rating: 5,
    comment: "Our sprinkler system was leaking and wasting water. Suazo Landscape came out the same week, diagnosed the problem, and had it fixed in no time. Very fair pricing and honest work.",
    service: "Sprinkler Installation",
    source: "google",
    date: "2024-12-01",
  },
  {
    id: "review-8",
    name: "Robert T.",
    rating: 5,
    comment: "Had several large trees trimmed and one dead tree removed. The crew was careful around our fence and cleaned up every branch. Jorge is a true professional. Highly recommend for tree work!",
    service: "Tree Trimming & Removal",
    source: "google",
    date: "2025-01-10",
  },
  {
    id: "review-9",
    name: "Jennifer K.",
    rating: 5,
    comment: "Jorge installed a beautiful paver patio in our backyard. The quality of work is outstanding and he finished ahead of schedule. We've already recommended him to our neighbors in Fullerton!",
    service: "Hardscaping",
    source: "google",
    date: "2024-05-14",
  },
  {
    id: "review-10",
    name: "Carlos H.",
    rating: 5,
    comment: "We wanted drought-tolerant landscaping for our front yard and Jorge designed exactly what we needed. Beautiful succulents and native plants that require almost no water. Love it!",
    service: "Garden Design",
    source: "facebook",
    date: "2024-04-22",
  },
  {
    id: "review-11",
    name: "Patricia W.",
    rating: 5,
    comment: "Professional, reliable, and affordable. Jorge and his crew maintain our lawn every week and it always looks perfect. They show up on time and do quality work. A+ service in Orange County!",
    service: "Lawn Maintenance",
    source: "google",
    date: "2024-03-08",
  },
  {
    id: "review-12",
    name: "Mike A.",
    rating: 5,
    comment: "Suazo Landscape installed fresh mulch throughout our garden beds and it looks so clean and polished. They also fixed our drip irrigation while they were here. Great value and great people!",
    service: "Mulching Services",
    source: "google",
    date: "2025-02-15",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    src: "/images/gallery-sod-install.png",
    title: "Fescue Sod Installation",
    category: "Sod Installation",
    description: "Complete fescue sod installation with soil preparation and grading for a lush, instant lawn.",
    featured: true,
  },
  {
    id: "gal-2",
    src: "/images/gallery-vinyl-fence.png",
    title: "Vinyl Fencing & Landscape",
    category: "Fencing",
    description: "New vinyl fencing installed along with landscape renovation in Costa Mesa.",
    featured: true,
  },
  {
    id: "gal-3",
    src: "/images/gallery-sprinkler-install.png",
    title: "Sprinkler System Installation",
    category: "Sprinkler Systems",
    description: "Complete sprinkler system with smart controller for efficient watering.",
    featured: true,
  },
  {
    id: "gal-4",
    src: "/images/gallery-backyard-transform.png",
    title: "Backyard Transformation",
    category: "Hardscaping",
    description: "Full backyard transformation with paver patio, planters, and drought-tolerant plants.",
    featured: true,
  },
  {
    id: "gal-5",
    src: "/images/gallery-mulching.png",
    title: "Professional Mulching",
    category: "Garden Design",
    description: "Fresh mulch installation with garden bed cleanup and edging for a polished look.",
  },
  {
    id: "gal-6",
    src: "/images/gallery-tree-trim.png",
    title: "Tree Trimming Service",
    category: "Tree Service",
    description: "Expert tree trimming to improve health, safety, and appearance of mature trees.",
  },
  {
    id: "gal-7",
    src: "/images/hardscape.png",
    title: "Stone Patio Installation",
    category: "Hardscaping",
    description: "Custom natural stone patio with built-in seating and fire pit area.",
  },
  {
    id: "gal-8",
    src: "/images/lawn-care.png",
    title: "Lawn Maintenance",
    category: "Sod Installation",
    description: "Weekly lawn care keeping this Anaheim property pristine and green year-round.",
  },
  {
    id: "gal-9",
    src: "/images/tree-service.png",
    title: "Tree Care & Removal",
    category: "Tree Service",
    description: "Safe tree removal with complete cleanup and stump grinding.",
  },
  {
    id: "gal-10",
    src: "/images/irrigation.png",
    title: "Smart Irrigation System",
    category: "Sprinkler Systems",
    description: "Water-efficient smart irrigation system with drip lines and rain sensors.",
  },
  {
    id: "gal-11",
    src: "/images/garden-design.png",
    title: "Garden Design & Planting",
    category: "Garden Design",
    description: "Custom garden design with drought-tolerant California native plants.",
  },
  {
    id: "gal-12",
    src: "/images/landscape-design.png",
    title: "Complete Landscape Design",
    category: "Hardscaping",
    description: "Full landscape design and installation with walkways, lighting, and plantings.",
  },
  {
    id: "gal-13",
    src: "/images/hero.png",
    title: "Landscape Transformation",
    category: "Sod Installation",
    description: "Before and after: complete landscape renovation from bare dirt to lush paradise.",
  },
  {
    id: "gal-14",
    src: "/images/about-team.png",
    title: "Professional Crew at Work",
    category: "Hardscaping",
    description: "Our skilled team installing a retaining wall and garden border.",
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "How do I contact SUAZO LANDSCAPE INC?",
    answer:
      "Call us at (949) 205-3983 or email suazolandscaping@gmail.com. We're available Mon-Sat, 7AM-4PM.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes! We provide free, no-obligation estimates for all our services. Contact Jorge Suazo to schedule yours.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, SUAZO LANDSCAPE INC is a fully licensed California landscaping contractor with active insurance coverage. We hold a BuildZoom score of 93, placing us in the top 27% of contractors.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Anaheim, Orange, Fullerton, Garden Grove, Santa Ana, Costa Mesa, and throughout Orange County.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer lawn maintenance, tree trimming & removal, garden design, sprinkler installation, mulching, sod installation, hardscaping, and seasonal cleanup.",
  },
  {
    question: "What are your business hours?",
    answer:
      "We're open Monday through Saturday, 7:00 AM to 4:00 PM. Closed Sundays.",
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Contact Us",
    description: "Call (949) 205-3983 or fill out our form",
    icon: "Phone",
  },
  {
    step: 2,
    title: "Free Estimate",
    description: "Jorge visits your property for a free consultation",
    icon: "ClipboardCheck",
  },
  {
    step: 3,
    title: "Custom Plan",
    description: "We design a personalized landscaping solution",
    icon: "PenTool",
  },
  {
    step: 4,
    title: "Professional Execution",
    description: "Our team brings your vision to life",
    icon: "HardHat",
  },
  {
    step: 5,
    title: "Final Walkthrough",
    description: "We ensure everything exceeds your expectations",
    icon: "CheckCircle",
  },
];
