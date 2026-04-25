export const company = {
  name: "Detection NDT Consulting",
  fullName: "Detection. Welding & NDT Consulting Co.",
  founder: "Eng. Abdallah Hassanein",
  tagline: "Precision Inspection & Quality Assurance for Oil & Gas Industries",
  description:
    "A full service inspection company providing both field and laboratory inspection services across the Oil, Gas, and Petrochemical industries.",
  longDescription:
    "Detection for Welding and NDT Consulting has over ten years of experience as an independent contractor of inspection in the Oil, Gas, Chemicals, Industrial and petrochemicals industries. Our background encompasses planning and organizing inspection activities for purchased project materials, vendor-fabricated equipment, and site installation work. We supervise quality control and train inspectors in welding, fabrication, non-destructive testing, and quality control.",
  qms: "The quality of our services is of decisive significance for the competitiveness of our company, as well as for that of our clients. Our Quality Management System ensures organizational, commercial and technical activities are planned and managed to fulfill contractual requirements. Management establishes measurable quality objectives consistent with company policy. The organization implements monitoring, measurement, analysis and improvement processes needed to demonstrate conformity of the service.",
  address: "#31 Hadyek El Obour Building, Salah Salem Street, Cairo, Egypt",
  phone: "+202 2082 4261",
  fax: "+202 2082 4263",
  mobile: "+010 344 9707",
  email: "info@Detection-ndt.com",
  careersEmail: "Careers@detection-ndt.com",
  facebook: "https://www.facebook.com/Detection.ndt",
  region: "Egypt, Gulf, Middle East",
  experience: "15+",
};

export const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "8", label: "NDT Methods" },
  { value: "ASME", label: "Certified" },
];

export const services = [
  {
    title: "Welding & QC Inspection",
    slug: "welding-qc",
    shortDescription:
      "Comprehensive welding inspection and quality control including pipeline, tank, pressure vessel, and heat exchanger inspection.",
    items: [
      "Tank floor inspection via magnetic flux leakage",
      "Heat exchanger tube inspection using eddy current technique",
      "Pipeline inspection employing RT, MT, UT, PT, VT methods",
      "Tank inspection with RT, MT, UT, PT, VT techniques",
      "Pressure vessel inspection using RT, MT, UT, PT, VT",
      "Welding inspection via RT, MT, UT, PT, VT",
      "Post weld heat treatment services",
      "Hardness testing",
      "Wall thickness measurements",
      "Painting inspection",
      "Quality control on all fabrication and repair works",
    ],
    staffing: [
      "QC Managers",
      "Inspectors",
      "NDT Engineers",
      "Welders",
      "Supervisors",
      "Pipe Fitters",
      "Platers",
    ],
    additional: [
      "Plant inspector provision to petroleum companies",
      "Third-party surveyor services",
      "Training & qualifying of welders and certification to ASME, AWS & API requirements",
      "Welding procedure development and qualification witnessing",
      "Consulting in welding and NDT fields",
    ],
  },
  {
    title: "NDT Level III Services",
    slug: "ndt-level-iii",
    shortDescription:
      "ASME stamp preparation, NDE consulting, written practices per SNT-TC-1A, equipment calibration, and internal auditing.",
    subServices: [
      {
        title: "ASME Authorization Stamp Preparation",
        items: [
          "Personnel training, qualification and certification",
          "Written practices aligned with SNT-TC-1A standards",
          "NDE procedures (RT, UT, MT, PT) conforming to ASME Codes",
          "Mockup demonstration of NDE procedures",
          "Quality manual establishment/review",
          "Equipment calibration procedure review",
          "Representation during ASME Joint Review",
        ],
      },
      {
        title: "NDE Consulting for Industrial Companies",
        items: [
          "Training and certification of NDT and tubular inspection staff",
          "Written practices per SNT-TC-1A and API RP 5A5",
          "NDT procedures (RT, UT, MT, PT, ET, VT) per ASME Code/AWS D1.1",
          "Quality manual preparation/review",
          "Equipment calibration procedure review",
          "Internal/external auditing",
        ],
      },
      {
        title: "NDT Training Programs",
        description:
          "Certification programs for Level I & II personnel across six methodologies (UT, RT, MT, PT, VT, ET). Over 15 years of experience informs our courses designed for international and employer-based certification schemes.",
      },
    ],
  },
  {
    title: "Third Party Inspection",
    slug: "third-party",
    shortDescription:
      "Independent inspection services performing NDT (RT, UT, MT, PT, ET, VT) and third party services for industrial projects.",
    capabilities: [
      "Developing inspection techniques for aircraft maintenance/repair",
      "Shipbuilding inspection",
      "Oilfield work inspection",
      "Steel construction inspection",
      "Tubular drilling tools inspection",
      "Quality specifications for ferrous, nonferrous, and composite materials",
      "Equipment selection consulting",
      "NDT written practices per SNT-TC-1A standards",
    ],
  },
];

export const ndtMethods = [
  {
    abbr: "VT",
    title: "Visual & Optical Testing",
    description:
      "The most basic NDT method involves visual examination ranging from simply looking at a part to see if surface imperfections are visible, to using computer controlled camera systems to automatically recognize and measure features of a component.",
    icon: "Eye",
  },
  {
    abbr: "RT",
    title: "Radiography Testing",
    description:
      "Uses penetrating gamma or X-radiation to examine material defects and internal features. X-ray machines or radioactive isotopes are used as a source of radiation. Material thickness and density changes are indicated as lighter or darker areas on the film.",
    icon: "Radiation",
  },
  {
    abbr: "MT",
    title: "Magnetic Particle Testing",
    description:
      "Induces a magnetic field in ferromagnetic material, then applies iron particles (dry or liquid-suspended). Surface and near-surface flaws produce magnetic poles or distort the magnetic field in such a way that the iron particles are attracted and concentrated, providing a visible indication.",
    icon: "Magnet",
  },
  {
    abbr: "UT",
    title: "Ultrasonic Testing",
    description:
      "High-frequency sound waves are transmitted into a material to detect imperfections or to locate changes in material properties. The pulse echo technique sends sound into test objects, receiving reflections from imperfections or surfaces for detailed analysis.",
    icon: "Waves",
  },
  {
    abbr: "PT",
    title: "Penetrant Testing",
    description:
      "Objects are coated with visible or fluorescent dye solution. Excess solution is then removed from the surface but remains in surface-breaking defects. A developer draws the penetrant from defects to the surface for visibility under ultraviolet light or through color contrast.",
    icon: "Droplets",
  },
  {
    abbr: "ET",
    title: "Electromagnetic Testing",
    description:
      "Electrical currents (eddy currents) are generated in a conductive material by a changing magnetic field. Defects interrupt eddy current flow, alerting inspectors to problems. This method also assesses electrical conductivity and magnetic permeability of materials.",
    icon: "Zap",
  },
  {
    abbr: "LT",
    title: "Leak Testing",
    description:
      "Multiple techniques detect and locate leaks in pressure containment parts and vessels using electronic listening devices, pressure gauge measurements, liquid and gas penetrant techniques, and simple soap-bubble tests to ensure vessel integrity.",
    icon: "Gauge",
  },
  {
    abbr: "AE",
    title: "Acoustic Emission Testing",
    description:
      "When a solid material is stressed, imperfections within the material emit short bursts of acoustic energy called emissions. Special receivers detect these emissions, with intensity and arrival time analysis providing precise location information of defects.",
    icon: "Radio",
  },
];

export const trainingCourses = [
  {
    title: "Visual Testing",
    description: "Level I & II certification in visual and optical testing methods for surface examination.",
  },
  {
    title: "Liquid Penetrant",
    description: "Comprehensive training in penetrant testing techniques for surface-breaking defect detection.",
  },
  {
    title: "Magnetic Particle",
    description: "Training in magnetic particle inspection for ferromagnetic material examination.",
  },
  {
    title: "Ultrasonic Testing",
    description: "Advanced ultrasonic testing courses covering pulse-echo and through-transmission techniques.",
  },
  {
    title: "Radiography",
    description: "Radiographic testing training including X-ray and gamma ray inspection methods.",
  },
  {
    title: "Eddy Current",
    description: "Electromagnetic testing training for conductive material inspection and tube testing.",
  },
  {
    title: "Material Evaluation",
    description: "Comprehensive material evaluation courses covering properties and testing methodologies.",
  },
];

export const projects = [
  {
    title: "San Stefano Complex Hotel",
    year: "2002–2006",
    description: "Steel structure and deflection joint inspection for one of Alexandria's landmark developments.",
    services: ["Steel Structure Inspection", "Deflection Joint Testing"],
  },
  {
    title: "Carrefour CityCenter, Alexandria",
    year: "2003",
    description: "Complete inspection of steel beams, columns, and roof structure for the commercial complex.",
    services: ["Steel Beam Inspection", "Column Testing", "Roof Inspection"],
  },
  {
    title: "Egyptian Petrochemicals",
    year: "2004",
    description: "ASME-code welding inspection on dished ends for petrochemical processing equipment.",
    services: ["ASME Code Inspection", "Welding Inspection"],
  },
  {
    title: "Oceaneering / Solus Schall",
    year: "2005–2007",
    description:
      "Pressure vessel and feed heater inspections per ASME code for offshore and industrial applications.",
    services: ["Pressure Vessel Inspection", "Feed Heater Testing", "ASME Compliance"],
  },
  {
    title: "RASHPETCO",
    year: "2004–2005",
    description:
      "In-service pressure vessel inspections, procedure development, and Risk-Based Inspection (RBI) analysis.",
    services: ["Pressure Vessel Inspection", "RBI Analysis", "Procedure Development"],
  },
  {
    title: "General Petroleum Company",
    year: "2005–2006",
    description: "Pipeline, tank, and equipment inspections across multiple operational sites.",
    services: ["Pipeline Inspection", "Tank Inspection", "Equipment Testing"],
  },
  {
    title: "LAFARGE",
    year: "2006",
    description: "Rotary kiln third-party inspection for the cement manufacturing facility.",
    services: ["Third Party Inspection", "Rotary Kiln Testing"],
  },
];

export const industries = [
  "Oil & Gas",
  "Petrochemical",
  "Power Generation",
  "Civil Infrastructure",
  "Manufacturing",
  "Aerospace",
  "Automotive",
  "Electronics",
];

export const usefulLinks = [
  { name: "American Society for Nondestructive Testing (ASNT)", url: "https://www.asnt.org" },
  { name: "American Society of Mechanical Engineers (ASME)", url: "https://www.asme.org" },
  { name: "American Welding Society (AWS)", url: "https://www.aws.org" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "NDT Methods", href: "/ndt-methods" },
  { label: "Training", href: "/training" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
