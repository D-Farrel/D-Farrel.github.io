/**
 * =========================================================================
 *  PORTFOLIO DATA — Edit konten di sini, jangan di index.html
 *  Struktur ini map 1:1 ke komponen render di index.html.
 *  Tambah/hapus item → UI otomatis menyesuaikan.
 * =========================================================================
 */
const DATA = {
  profile: {
    name: "Don Bosco Farrel",
    initials: "DF",
    available: true,
    availableText: "Available for opportunities",
    email: "donboscofarrel288@gmail.com",
    phone: "+62 859-3023-6659",
    whatsapp: "6285930236659",
    github: "https://github.com/D-Farrel",
    linkedin: "https://linkedin.com/in/donbosco-farrel-81691b322",
    tableau: "https://public.tableau.com/app/profile/donbosco.farrel",
    instagram: "https://instagram.com/donboscofr"
  },

  hero: {
    eyebrow: "Hi, my name is",
    tagline: "Building Data Pipelines & Digital Solutions.",
    bio: "I'm a Computer Science student at BINUS University, Jakarta, focused on turning raw data into pipelines, dashboards, and applications that people actually use."
  },

  about: {
    paragraphs: [
      'Hello! I\'m Don Bosco, a Computer Science student at <span class="hl">BINUS University, Jakarta</span>. My focus is the full data lifecycle — from raw, messy datasets to clean <span class="hl">pipelines, dashboards, and applications</span> that people actually use.',
      'I enjoy the engineering behind data: designing ETL flows, modeling warehouses, and surfacing insight through visualization. I care about building things that are reliable, scalable, and easy to maintain.'
    ],
    tech: ["Python","SQL / MySQL","PySpark","Pandas","Tableau","Pentaho","ETL / Warehousing","Git"]
  },

  projects: [
    {
      id: "hotel-booking-analysis",
      title: "Hotel Booking Demand Analysis",
      category: "data-science",
      tags: ["Python","Pandas","Tableau"],
      summary: "An interactive dashboard built over 86K+ hotel booking records, surfacing cancellation patterns, seasonal demand, and revenue-optimization opportunities.",
      metric: "86K+ records analyzed",
      links: [
        { label: "GitHub", url: "https://github.com/D-Farrel/data-analytics-binus", icon: "github" },
        { label: "Live Dashboard", url: "https://public.tableau.com/app/profile/donbosco.farrel/viz/DashboardHotelAnalysis/DashboardHotelAnalysis?publish=yes", icon: "external" }
      ],
      featured: true,
      color: ["#C9A227","#4A3F2A"],
      initial: "HB"
    },
    {
      id: "etl-data-pipeline",
      title: "ETL Data Pipeline",
      category: "data-engineering",
      tags: ["Pentaho","MySQL","SCD","CDC"],
      summary: "End-to-end pipeline implementing Slowly Changing Dimensions (SCD Type 2) and Change Data Capture into a MySQL data warehouse.",
      metric: null,
      links: [
        { label: "GitHub", url: "https://github.com/D-Farrel/data-engineer-binus", icon: "github" }
      ],
      featured: false,
      color: ["#F0D98C","#C9A227"],
      initial: "ETL"
    },
    {
      id: "walmart-big-data-processing",
      title: "Walmart Sales Forecasting",
      category: "data-science",
      tags: ["PySpark","Python","Pandas","Power BI","HDFS","Cloudera"],
      summary: "Big data pipeline processing 421K+ Walmart sales records across 45 stores using PySpark on Cloudera HDFS. Includes full EDA, feature engineering, and ML forecasting with Linear Regression achieving 94.22% R² accuracy.",
      metric: "421K+ records · R² 94.22%",
      links: [
        { label: "GitHub", url: "https://github.com/D-Farrel/big-data-processing", icon: "github" }
      ],
      featured: false,
      color: ["#4A3F2A","#C9A227"],
      initial: "WM"
    }
  ],

  skills: [
    { cat: "Core Language", title: "Python", items: ["Pandas","NumPy","PySpark","BioPython"], size: "big" },
    { cat: "Databases", items: ["SQL / MySQL","Data Warehousing"], size: "wide" },
    { cat: "Visualization", items: ["Tableau","Power BI"], size: "wide" },
    { cat: "Engineering", items: ["Pentaho","ETL","SCD / CDC"], size: "wide" },
    { cat: "Development", items: ["JavaScript","Git","Jupyter"], size: "wide" }
  ],

  certificates: [],

  resume: {
    role: "Data Engineer & CS Student",
    location: "Jakarta, Indonesia",
    pdfUrl: "",
    summary: "Computer Science student at BINUS University focused on the full data lifecycle — building ETL pipelines, data warehouses, and analytics dashboards that turn raw data into decisions.",
    education: [
      { school: "BINUS University, Jakarta", degree: "B.Sc. Computer Science", period: "2023 — Present", note: "Focus: Data Engineering & Analytics" }
    ],
    experience: [
      {
        role: "Hotel Booking Demand Analysis",
        org: "Academic / Personal Project",
        period: "2024",
        points: [
          "Analyzed 86K+ booking records to surface cancellation & seasonal demand patterns",
          "Built an interactive Tableau dashboard for revenue-optimization insights",
          "Optimized large-dataset processing with Pandas chunking"
        ]
      },
      {
        role: "ETL Data Pipeline",
        org: "Academic / Personal Project",
        period: "2024",
        points: [
          "Implemented SCD Type 2 & Change Data Capture into a MySQL data warehouse",
          "Designed an end-to-end extract-transform-load flow using Pentaho"
        ]
      }
    ]
  }
};
