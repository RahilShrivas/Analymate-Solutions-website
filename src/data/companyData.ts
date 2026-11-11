export interface TeamMember {
  name: string;
  role: string;
  designationStatus?: 'confirmed' | 'pending';
  department: string;
  notes?: string;
}

export interface BusinessChallenge {
  id: string;
  number: string;
  title: string;
  description: string;
  impact: string;
}

export interface CoreSolution {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  serviceCategorySlug: string;
}

export interface ConsultingCategory {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  challengesAddressed: string[];
  scope: string[];
  outcomes: string[];
}

export interface IndustrySector {
  id: string;
  name: string;
  tagline: string;
  painPoints: string[];
  solutionsProvided: string[];
  operationalFocus: string;
}

export const COMPANY_INFO = {
  name: "Analymate Solutions Pvt. Ltd.",
  brandShort: "Analymate Solutions",
  category: "Business Consulting | Process Excellence | Automation | Growth",
  tagline: "We Don't Just Advise Businesses. We Build Systems That Help Them Grow.",
  supportingStatement: "We partner with businesses to streamline operations, reduce costs, improve accountability and implement the right systems and software to achieve sustainable growth.",
  address: {
    line1: "7th Floor, Currency Tower",
    line2: "VIP Road Corner, Telibandha",
    city: "Raipur",
    state: "Chhattisgarh",
    postalCode: "492001",
    country: "India",
    full: "7th Floor, Currency Tower, VIP Road Corner, Telibandha, Raipur, Chhattisgarh, 492001, India"
  },
  phones: [
    { display: "+91 89628 61774", raw: "+918962861774" },
    { display: "+91 91797 95954", raw: "+919179795954" }
  ],
  email: "asfiya@analymate.in",
  website: "www.analymate.in",
  whatsappNumber: "+918962861774",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.730335967699!2d81.6706911!3d21.2425375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd36a44d03e9%3A0xc3cf9704e6727fc4!2sCurrency%20Tower!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  mapsLink: "https://maps.google.com/?q=Currency+Tower+Telibandha+Raipur+Chhattisgarh"
};

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    name: "Asfiya Khan",
    role: "Chief Executive Officer",
    designationStatus: "confirmed",
    department: "Executive Leadership & Business Strategy",
    notes: "Directs organizational strategy, client partnership advisory, and high-level enterprise transformation programs."
  },
  {
    name: "Adil Khan",
    role: "Chief Technology Officer",
    designationStatus: "confirmed",
    department: "Technology Systems & Process Automation",
    notes: "Oversees enterprise ERP implementations, digital workflow engineering, and MIS dashboard architecture."
  },
  {
    name: "Rahil Shrivas",
    role: "Core Consulting Team",
    designationStatus: "pending",
    department: "Operations & Business Analysis",
    notes: "Designation to be confirmed. Editable team slot configured for official profile details and qualifications upon release."
  }
];

export const BUSINESS_CHALLENGES: BusinessChallenge[] = [
  {
    id: "rising-costs",
    number: "01",
    title: "Rising Operational Costs",
    description: "Uncontrolled expenses, hidden administrative leakages, and unbudgeted overheads slowly eroding operating margins without clear visibility.",
    impact: "Diminishing profit margins despite increasing top-line turnover."
  },
  {
    id: "undefined-sops",
    number: "02",
    title: "No Defined SOPs or Processes",
    description: "Daily operations depend heavily on tribal knowledge and ad-hoc firefighting rather than standard documented operating workflows.",
    impact: "Severe inconsistencies in output, customer experience, and operational delays."
  },
  {
    id: "lack-of-accountability",
    number: "03",
    title: "Employees Working Without Accountability",
    description: "Lack of clear role definitions, performance metrics, and ownership chains leading to finger-pointing when operational targets are missed.",
    impact: "Unchecked inefficiencies, missed deadlines, and management bottlenecks."
  },
  {
    id: "inventory-leakages",
    number: "04",
    title: "Inventory Losses & Material Leakages",
    description: "Poor warehouse tracking, physical vs book discrepancies, unmonitored scrap, and untracked pilferage eating directly into gross profit.",
    impact: "Working capital tied up in dead stock alongside frequent stockouts."
  },
  {
    id: "delayed-reports",
    number: "05",
    title: "Delayed Reports & Poor Decision-Making",
    description: "Leadership receives management reports weeks after the month has closed, forcing executive decisions to be made on guesswork or outdated data.",
    impact: "Inability to react swiftly to cashflow crunches, market trends, or operational issues."
  },
  {
    id: "failed-software",
    number: "06",
    title: "Software Purchased But Not Properly Implemented",
    description: "Expensive ERP or software licenses bought with high expectations but abandoned or poorly utilized due to lack of customized process alignment.",
    impact: "Sunk IT investments, duplicate manual work, and widespread user frustration."
  }
];

export const CORE_SOLUTIONS: CoreSolution[] = [
  {
    id: "business-audit",
    number: "01",
    title: "Business Audit & Analysis",
    tagline: "Comprehensive Diagnostics of Operations & Financial Health",
    description: "Deep dive into your organization's daily workflows, cost drivers, and organizational structure to diagnose silent leakages and performance bottlenecks.",
    deliverables: [
      "Operational GAP Analysis Report",
      "Process Bottleneck & Leakage Heatmap",
      "Resource Utilization & Capacity Audit",
      "Prioritized Transformation Action Plan"
    ],
    serviceCategorySlug: "business-process-consulting"
  },
  {
    id: "sop-design",
    number: "02",
    title: "SOP Design & Implementation",
    tagline: "Institutionalize Standard Work Across All Departments",
    description: "Designing end-to-end Standard Operating Procedures (SOPs) tailored to your operational reality, coupled with on-the-ground staff training and compliance auditing.",
    deliverables: [
      "Department-wise Documented SOP Manuals",
      "Process Flowcharts & RACI Responsibility Matrices",
      "Onboarding Checklists & Daily Task Logs",
      "Quarterly SOP Compliance Audit Checkpoints"
    ],
    serviceCategorySlug: "business-process-consulting"
  },
  {
    id: "process-automation",
    number: "03",
    title: "Process Automation",
    tagline: "Eliminate Repetitive Manual Interventions & Human Error",
    description: "Connecting disparate business software, automating approval chains, and deploying digital workflows that accelerate throughput and reduce headcount overhead.",
    deliverables: [
      "Automated Approval & Escalation Workflows",
      "Cross-Department Digital Data Pipelines",
      "Automated Email & WhatsApp Notifications",
      "Reduced Cycle Times for Purchase & Order Fulfillment"
    ],
    serviceCategorySlug: "mis-business-intelligence"
  },
  {
    id: "software-erp",
    number: "04",
    title: "Software & ERP Implementation",
    tagline: "Make Your Technology Investment Actually Deliver ROI",
    description: "Pragmatic bridge between business leadership and software vendors. We ensure software architecture matches business workflows and drive 100% user adoption.",
    deliverables: [
      "ERP Vendor Evaluation & Functional Mapping",
      "Master Data Cleansing & Migration Support",
      "Hands-on User Training & Change Management",
      "Post-Go-Live Adoption Governance & Milestone Audits"
    ],
    serviceCategorySlug: "business-strategy-advisory"
  },
  {
    id: "reports-dashboards",
    number: "05",
    title: "Management Reports & Dashboards",
    tagline: "Real-Time Clarity for Confident Executive Decisions",
    description: "Customized Management Information Systems (MIS) and executive dashboards that convert raw transactional data into single-screen actionable business insights.",
    deliverables: [
      "C-Suite Executive KPI Command Dashboard",
      "Daily Operational Flash Reports & Cash Flow Trackers",
      "Departmental Performance Scorecards",
      "Automated Monthly MIS Packs for Leadership"
    ],
    serviceCategorySlug: "mis-business-intelligence"
  },
  {
    id: "cost-reduction",
    number: "06",
    title: "Cost Reduction Consulting",
    tagline: "Systematic Expense Rationalization Without Sacrificing Output",
    description: "Scientific review of procurement costs, direct materials, administrative overheads, and inventory holding expenses to unlock immediate bottom-line cashflow.",
    deliverables: [
      "Item-level Cost Structure & Variance Analysis",
      "Vendor Re-negotiation & Procurement Frameworks",
      "Zero-Based Overhead Budgeting Protocols",
      "Inventory Holding & Wastage Control Systems"
    ],
    serviceCategorySlug: "cost-profitability-analysis"
  }
];

export const CONSULTING_CATEGORIES: ConsultingCategory[] = [
  {
    id: "financial-consultancy",
    title: "Financial Consultancy",
    subtitle: "Financial Planning, Capital Structure & Performance Governance",
    overview: "We bring institutional financial discipline to growing enterprises. We help leadership establish structured budgeting, monitor working capital, forecast cash flows, and institute tight financial controls.",
    challengesAddressed: [
      "Unpredictable working capital cycles causing unexpected cash crunch",
      "Absence of structured annual budgeting and variance tracking",
      "Difficulty assessing true project or divisional profitability"
    ],
    scope: [
      "Financial planning, multi-year modeling and sensitivity analysis",
      "Budgeting, variance reporting and capital expenditure governance",
      "Working capital optimization and cash flow cycle acceleration",
      "Financial performance monitoring and institutional ratios tracking"
    ],
    outcomes: [
      "Predictable cash flow visibility up to 90 days in advance",
      "Elimination of unbudgeted discretionary spending",
      "Healthier debt-to-equity and working capital ratios"
    ]
  },
  {
    id: "business-process-consulting",
    title: "Business Process Consulting",
    subtitle: "Process Assessment, SOP Design & Workflow Excellence",
    overview: "A business cannot scale on chaos. We document, re-engineer, and institutionalize repeatable workflows across sales, procurement, warehouse, production, and customer support.",
    challengesAddressed: [
      "Over-reliance on key individuals whose absence halts operations",
      "Unstandardized service or product quality frustrating clients",
      "Lack of clear handoffs between departments resulting in finger-pointing"
    ],
    scope: [
      "End-to-end business process assessment and workflow mapping",
      "Standard Operating Procedure (SOP) development and manual creation",
      "Workflow optimization, handoff reduction and cycle time compression",
      "Internal process controls, segregation of duties, and audit checklists"
    ],
    outcomes: [
      "Smooth operations running reliably even in leadership absence",
      "60% faster employee onboarding and training times",
      "Drastic reduction in process rework and customer complaints"
    ]
  },
  {
    id: "cost-profitability-analysis",
    title: "Cost & Profitability Analysis",
    subtitle: "Expense Rationalization, Product Margins & Waste Elimination",
    overview: "Revenue is vanity, profit is sanity. We dissect your cost structure at a granular level to reveal true product-wise, branch-wise, and client-wise profitability.",
    challengesAddressed: [
      "Unclear unit economics where high-volume products generate losses",
      "Escalating factory or office overheads without clear justification",
      "Material wastage and scrap leakages remaining unmeasured"
    ],
    scope: [
      "Granular cost structure analysis and fixed vs variable breakdown",
      "Expense monitoring frameworks and approval threshold matrices",
      "Product, service, and customer account profitability analysis",
      "Identification of immediate and sustainable cost reduction opportunities"
    ],
    outcomes: [
      "Clear visibility on which product lines generate 80% of net margin",
      "Targeted 8-18% reduction in non-essential operational expenditure",
      "Tighter control on raw material yields and vendor procurement rates"
    ]
  },
  {
    id: "tax-compliance-advisory",
    title: "Tax & Compliance Advisory",
    subtitle: "Statutory Adherence, GST/TDS Governance & Risk Shielding",
    overview: "Navigating regulatory compliance without business disruption. We assist businesses in coordinating statutory obligations, ensuring timely filings, and eliminating penalty exposures.",
    challengesAddressed: [
      "Missed statutory deadlines causing heavy penalties and interest",
      "GST input tax credit (ITC) mismatch and vendor compliance delays",
      "Lack of centralized tracking for multi-entity regulatory requirements"
    ],
    scope: [
      "GST advisory, reconciliation, and compliance support systems",
      "TDS compliance verification and withholding tax coordination",
      "Statutory compliance calendar and filing coordination",
      "Ongoing compliance monitoring, risk alerts, and audit readiness"
    ],
    outcomes: [
      "Zero missed statutory filing deadlines through scheduled governance",
      "Maximum legitimate recovery of GST input tax credits",
      "Auditable peace of mind for management and board members"
    ]
  },
  {
    id: "mis-business-intelligence",
    title: "MIS & Business Intelligence",
    subtitle: "Actionable Reporting, KPI Dashboards & Operational Visibility",
    overview: "Transforming fragmented business data into clean, intuitive executive dashboards. We replace tedious spreadsheet compilation with automated, timely business intelligence.",
    challengesAddressed: [
      "Leadership waiting until mid-next month to know current financial standing",
      "Conflicting numbers between sales, production, and accounts departments",
      "Inability to track team KPIs objectively"
    ],
    scope: [
      "Executive management reporting architecture (Daily / Weekly / Monthly)",
      "Interactive business dashboards for sales, operations, and finance",
      "Key Performance Indicator (KPI) framework and scorecards",
      "Data analysis, visualization, and automated alert triggers"
    ],
    outcomes: [
      "Daily flash updates on revenue, collections, and production output",
      "Single source of truth across all organizational departments",
      "Data-backed leadership meetings with zero time wasted on data reconciliation"
    ]
  },
  {
    id: "business-strategy-advisory",
    title: "Business Strategy & Advisory",
    subtitle: "Growth Roadmaps, Strategic Reviews & Execution Alignment",
    overview: "Connecting high-level owner ambition with on-the-ground operational execution. We evaluate expansion opportunities, organizational readiness, and performance roadblocks.",
    challengesAddressed: [
      "Company plateauing after initial growth stage",
      "Unclear expansion roadmap across new geographies or product lines",
      "Disalignment between senior management goals and department heads"
    ],
    scope: [
      "Comprehensive business planning and 3-year strategic growth roadmaps",
      "Strategic operational capability and resource readiness assessments",
      "Growth opportunity analysis, market expansion, and feasibility review",
      "Quarterly executive performance reviews and accountability tracking"
    ],
    outcomes: [
      "Clear, prioritized annual strategic initiatives with accountable owners",
      "De-risked expansion projects backed by realistic resource modeling",
      "Aligned leadership team moving in a single synchronized direction"
    ]
  }
];

export const TARGET_INDUSTRIES: IndustrySector[] = [
  {
    id: "manufacturing-industrial",
    name: "Manufacturing & Industrial",
    tagline: "Shopfloor Efficiency, Production SOPs & Scrap Control",
    operationalFocus: "Plant throughput, machine downtime tracking, bill of materials (BOM) accuracy, and scrap minimization.",
    painPoints: [
      "Discrepancies between theoretical BOM and actual shopfloor consumption",
      "Unplanned machine breakdowns and maintenance logging gaps",
      "Poor synchronization between raw material procurement and production schedules"
    ],
    solutionsProvided: [
      "Daily Production SOPs and machine maintenance logs",
      "Scrap monitoring and material yield audit systems",
      "Integrated production planning and dispatch scheduling frameworks"
    ]
  },
  {
    id: "trading-distribution",
    name: "Trading & Distribution",
    tagline: "Working Capital Velocity, Stock Accuracy & Order Fulfillment",
    operationalFocus: "Order turnaround times, multi-warehouse stock reconciliation, and credit control governance.",
    painPoints: [
      "High volume of dead or slow-moving stock absorbing working capital",
      "Frequent stock mismatch between physical warehouse and inventory software",
      "Overdue customer receivables slipping past agreed credit terms"
    ],
    solutionsProvided: [
      "Fast/Slow/Non-moving (FSN) inventory categorization and liquidation protocols",
      "Barcode-enabled stock inward and dispatch checklists",
      "Automated credit limit control and aging-based receivables follow-up systems"
    ]
  },
  {
    id: "logistics-transportation",
    name: "Logistics & Transportation",
    tagline: "Fleet Utilization, Turnaround Times & Cost Per Kilometer",
    operationalFocus: "Trip turnaround times, vehicle maintenance logs, fuel audit controls, and driver accountability.",
    painPoints: [
      "Fuel theft, route slippages, and unexplained trip cost spikes",
      "Vehicle detention at loading/unloading points without contractual penalties",
      "Manual toll and trip settlement disputes with drivers"
    ],
    solutionsProvided: [
      "Trip cost audit frameworks and standard diesel consumption baselines",
      "Digital trip sheets, POD verification, and turnaround time tracking",
      "Maintenance schedule compliance to prevent costly on-highway breakdowns"
    ]
  },
  {
    id: "retail-wholesale",
    name: "Retail & Wholesale",
    tagline: "Store-Level Margins, Cash Reconciliation & Shrinkage Prevention",
    operationalFocus: "POS accuracy, cash drawer reconciliation, inventory pilferage prevention, and store profitability.",
    painPoints: [
      "Cash desk variances and unmonitored discount abuse by store staff",
      "Stock shrinkage and return-to-vendor (RTV) claim leakages",
      "Disparate pricing across stores or wholesale dealer networks"
    ],
    solutionsProvided: [
      "Daily store cash closeout SOPs and surprise audit protocols",
      "Shrinkage investigation and stock loss mitigation systems",
      "Store-wise P&L tracking and profitability bench-marking"
    ]
  },
  {
    id: "professional-services",
    name: "Professional Services",
    tagline: "Billable Utilization, Project Governance & Deliverable Quality",
    operationalFocus: "Staff utilization, project milestone delivery, SLA compliance, and engagement profitability.",
    painPoints: [
      "Scope creep turning fixed-fee engagements into unprofitable commitments",
      "No real visibility on billable vs non-billable employee hours",
      "Inconsistent quality across different project delivery teams"
    ],
    solutionsProvided: [
      "Project milestone tracking and change-order documentation controls",
      "Timesheet-based cost-to-serve analysis and staff utilization scorecards",
      "Standard quality peer-review checklists before client deliverable signoff"
    ]
  },
  {
    id: "growing-enterprises",
    name: "Growing Enterprises",
    tagline: "Bridging the Gap from Founder-Led Hustle to System-Driven Scale",
    operationalFocus: "Delegation structures, middle-management accountability, ERP stabilization, and cash runway.",
    painPoints: [
      "Founder being bogged down in petty operational approvals daily",
      "High employee turnover due to ambiguous job expectations and firefighting",
      "Software bought during expansion remaining 80% under-utilized"
    ],
    solutionsProvided: [
      "Delegation of authority (DOA) matrix freeing founder time for strategy",
      "Departmental OKRs, KPIs, and monthly performance review cadences",
      "ERP stabilization audits to retire parallel offline spreadsheets"
    ]
  }
];

export const CONSULTING_METHODOLOGY = [
  {
    step: "01",
    name: "UNDERSTAND",
    title: "Understand Business Objectives & Pain Points",
    description: "We engage directly with owners and key department heads to understand your strategic vision, immediate bottlenecks, growth constraints, and operational frustrations.",
    deliverable: "Stakeholder Alignment & Baseline Scope Map"
  },
  {
    step: "02",
    name: "ANALYZE",
    title: "Evaluate Processes, Financials & Operational Gaps",
    description: "Our team conducts on-site walk-throughs, audits financial ledger items, reviews inventory flows, inspects software usage, and maps actual vs theoretical workflows.",
    deliverable: "Comprehensive Gap Analysis & Leakage Diagnostic Report"
  },
  {
    step: "03",
    name: "STRATEGIZE",
    title: "Develop Practical Recommendations & Action Plan",
    description: "We craft an actionable roadmap with prioritized interventions, clear ROI justification, resource allocations, and realistic completion milestones.",
    deliverable: "Target Operating Model & Implementation Roadmap"
  },
  {
    step: "04",
    name: "IMPLEMENT",
    title: "Establish Processes, Systems, Controls & Technology",
    description: "We don't leave you with a presentation deck. We work alongside your team on the floor to draft SOPs, configure software, train staff, and implement internal checks.",
    deliverable: "Active SOPs, Live Dashboards & Configured Software Systems"
  },
  {
    step: "05",
    name: "IMPROVE",
    title: "Monitor Performance & Continuous Optimization",
    description: "Post-implementation governance through periodic compliance audits, KPI tracking, and system adjustments ensures new processes stick and deliver compounding value.",
    deliverable: "Governance Review Cadence & Optimization Audits"
  }
];

export const CLIENT_PARTNERS = [
  {
    name: "AGIPL",
    fullName: "Agrawal Global Infratech Pvt. Ltd.",
    category: "Infrastructure & Heavy Engineering",
    badge: "AGIPL",
    location: "Raipur / National"
  },
  {
    name: "Singhania Buildcon Group",
    fullName: "Singhania Buildcon Group",
    category: "Real Estate & Construction",
    badge: "SBG",
    location: "Central India"
  },
  {
    name: "Gurudev Abrasives",
    fullName: "Gurudev Abrasives Pvt. Ltd.",
    category: "Precision Manufacturing & Abrasives",
    badge: "GA",
    location: "Industrial Manufacturing"
  },
  {
    name: "Singhania Sarovar Portico",
    fullName: "Singhania Sarovar Portico",
    category: "Hospitality & Premium Services",
    badge: "SSP",
    location: "Raipur"
  },
  {
    name: "Shree Industrial Agencies",
    fullName: "Shree Industrial Agencies",
    category: "Industrial Trading & Distribution",
    badge: "SIA",
    location: "B2B Distribution"
  },
  {
    name: "Pip & Dip",
    fullName: "Pip & Dip Food & Beverage",
    category: "F&B Retail & Quick Service",
    badge: "P&D",
    location: "Consumer Retail"
  },
  {
    name: "HRI Wastik Group",
    fullName: "HRI Wastik Group",
    category: "Commercial Enterprises & Manufacturing",
    badge: "HWG",
    location: "Enterprise Group"
  },
  {
    name: "Wallfort Group",
    fullName: "Wallfort Group",
    category: "Urban Real Estate & Township Developers",
    badge: "WG",
    location: "Real Estate Development"
  }
];
