const config = {
  // BUSINESS INFO
  businessName: "Bob's Landwork",
  phone: "(999)-999-9999",
  email: "bob@email.com",

  // BRANDING
  logoUrl: "", // Provide your logo URL here
  showLogo: true,

  // BUTTONS
  contactButtonText: "Contact Us",

  // HEADER CONFIGURATION
  showNavLinks: true, // Toggle to show or hide the Home, Services, About Us, Contact buttons
  headerLinks: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ],
  headerBackground: "bg-white",
  headerBorder: "border-gray-200",
  headerTextColor: "text-gray-800",

  headerButtonBg: "bg-blue-600",
  headerButtonHover: "hover:bg-blue-700",
  headerButtonText: "text-white",

  // STYLE
  font: "font-sans",
  primaryColor: "blue-600",
  secondaryColor: "gray-200",

  // HERO SECTION
  heroTitle: "Bob's Landwork",
  heroSubtitle:
    "Reliable Land Clearing and Property Services Throughout Central Massachusetts",
  heroUseImage: true,
  heroImage:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
  heroBackgroundColor: "bg-blue-600",

  // ABOUT SECTION
  companyStory:
    "Bob's Landwork provides professional land clearing, excavation, property cleanup, and site preparation services throughout Central Massachusetts. We take pride in delivering dependable work, honest communication, and quality results for every customer.",

  mission:
    "Our goal is to help property owners improve and maintain their land with safe, efficient, and affordable services.",

  // WHAT WE DO
  whatWeDo:
    "Bob's Landwork specializes in land clearing, excavation, grading, property cleanup, brush removal, site preparation, and related land management services. Whether you're preparing for construction, improving your property, or cleaning up overgrown areas, we provide reliable solutions tailored to your needs.",

  // WHY CHOOSE US
  whyChooseUs:
    "Experienced, dependable, fully committed to customer satisfaction, and focused on delivering quality results every time.",

  // SERVICE AREAS
  serviceAreas: ["Central Massachusetts"],

  // MEDIA
  images: [
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
  ],

  video: "",

  // TESTIMONIALS
  testimonials: [
    {
      name: "John",
      stars: 5,
      review: "Amazing service!",
    },
    {
      name: "Sarah",
      stars: 5,
      review: "Highly recommend!",
    },
    {
      name: "Mike",
      stars: 4,
      review: "Great experience!",
    },
  ],

  googleReviewsLink: "",
};

export default config;
