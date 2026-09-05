// Centralized Mock Data Layer for Infinity Core Executive TV Dashboard
// Designed to support both Infinity Core Bhopal Real Estate data and 1:1 Reference visual fidelity

export const companyData = {
  name: "Infinity Core",
  location: "Bhopal",
  tagline: "Elevating Real Estate Intelligence",
  logoUrl: "/assets/company-logo.png",
  systemStatus: "All Systems Operational",
  liveTime: "01:42 PM",
  liveDate: "Fri, 05 Sept 2026",
};

export const featuredProperty = {
  title: "Dune Dweller House",
  subtitle: "Desert Mirage Dune District, N City, Saudi Arabia",
  loanId: "Loan ID #925129 Warsaw",
  alternateTitle: "Dune Horizon Residence",
  alternateSubtitle: "Bhopal Eco-Corridor Signature Estate",
  alternateLoanId: "Asset ID #IC-925129 Bhopal",
  imageUrl: "/assets/property-hero.jpeg",
  wideImageUrl: "/assets/property-wide.jpeg",
};

// Top 4 KPI Metrics requested in Prompt Section 6
export const topKPIMetrics = [
  {
    id: "clients-today",
    title: "Clients Today",
    value: "24",
    change: "+12.4%",
    note: "from yesterday",
    isPositive: true,
  },
  {
    id: "interactions-today",
    title: "Interactions Today",
    value: "68",
    change: "42 completed",
    note: "26 pending",
    isPositive: true,
  },
  {
    id: "calls-today",
    title: "Calls",
    value: "37",
    change: "29 connected",
    note: "78.4% rate",
    isPositive: true,
  },
  {
    id: "site-visits",
    title: "Site Visits",
    value: "12",
    change: "8 completed",
    note: "4 scheduled",
    isPositive: true,
  },
];

// Reference & Infinity Core Dataset Models
export const dashboardDatasets = {
  reference: {
    propertyTitle: "Dune Dweller House",
    propertySubtitle: "Desert Mirage Dune District, N City, Saudi Arabia",
    propertyId: "Loan ID #925129 Warsaw",
    borrower: {
      cardTitle: "True Borrower",
      name: "Scott J. Seligman",
      role: "Borrower",
      riskBadge: "Average risk ?",
      debtText: "Has a total debt of $42,910",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    },
    editorialClient: {
      cardTitle: "True Borrower",
      name: "Scott A Skaggs",
      role: "Borrower",
      averageLabel: "Average ROI",
      averageValue: "5",
      centralLabel: "Average loan size",
      centralValue: "5",
      centralSubtitle: "Borrowing Rating",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      initials: "SA",
      bars: [
        { day: "M", height: "42%", active: false },
        { day: "T", height: "62%", active: true },
        { day: "W", height: "47%", active: false },
        { day: "T", height: "73%", active: false },
        { day: "F", height: "54%", active: false },
        { day: "S", height: "86%", active: true },
      ],
      bottomMetrics: [
        { label: "Monthly Payment", value: "$4.2k" },
        { label: "Rating", value: "5" },
        { label: "APR", value: "3.72%" },
      ],
    },
    riskRating: {
      row1: {
        label: "CoStar Risk Rating",
        value: "4 - Low",
        avg: "5",
        exposure: "1.3%, $437,522",
      },
      bars: [
        { height: 26, active: false },
        { height: 44, active: true },
        { height: 22, active: false },
        { height: 34, active: false },
        { height: 46, active: false },
        { height: 58, active: true },
        { height: 30, active: false },
      ],
      badge: "High risk ?",
      row2: {
        label: "CoStar Risk Rating",
        value: "5 - Average",
        avg: "6",
        exposure: "3.2%, $1,153,102",
      },
    },
    loanStatus: {
      title: "Loan Status",
      metrics: [
        { label: "DP MIN", value: "322,471" },
        { label: "NC LOW", value: "179.49" },
        { label: "LTV", value: "41.4%" },
        { label: "DEBT YIELD", value: "9.6%" },
      ],
    },
    ltv: {
      title: "LTV",
      debtService: "$1,442,050",
      net: "$3,327,801",
      threshold: "75%",
      current: "41.4%",
      initial: "61.5%",
      market: "39.3%",
    },
    dscr: {
      title: "DSCR",
      auxiliaryThreshold: "1.25",
      progressWidth: "38%",
      current: "2.31",
      initial: "1.94",
      market: "2.51",
    },
    dock: {
      brand: "CoStar Group",
      streamLabel: "My Loans",
      streamCount: "22",
      actionText: "Add to scoring +",
    },
  },

  infinityCore: {
    propertyTitle: "Infinity Core • Dune Horizon",
    propertySubtitle: "Desert Mirage Dune District • Executive TV Display",
    propertyId: "Portfolio ID #IC-925129 Bhopal",
    borrower: {
      cardTitle: "Client Intelligence",
      name: "Rahul Sharma",
      role: "Premium Client",
      riskBadge: "High Engagement",
      debtText: "Average Visit: 2.4  •  Conversion: 41.2%",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    },
    editorialClient: {
      cardTitle: "Client Intelligence",
      name: "Rahul Sharma",
      role: "Premium Client",
      averageLabel: "Average Visit",
      averageValue: "2.4",
      centralLabel: "Engagement Score",
      centralValue: "86%",
      centralSubtitle: "High Priority Portfolio Client",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      initials: "RS",
      bars: [
        { day: "M", height: "42%", active: false },
        { day: "T", height: "62%", active: true },
        { day: "W", height: "47%", active: false },
        { day: "T", height: "73%", active: false },
        { day: "F", height: "54%", active: false },
        { day: "S", height: "86%", active: true },
      ],
      bottomMetrics: [
        { label: "Interactions", value: "18" },
        { label: "Follow-ups", value: "6" },
        { label: "Conversion", value: "41.2%" },
      ],
    },
    riskRating: {
      row1: {
        label: "Engagement Score",
        value: "86% High",
        avg: "5",
        exposure: "18 Interactions",
      },
      bars: [
        { height: 26, active: false },
        { height: 44, active: true },
        { height: 22, active: false },
        { height: 34, active: false },
        { height: 46, active: false },
        { height: 58, active: true },
        { height: 30, active: false },
      ],
      badge: "Priority Lead ?",
      row2: {
        label: "Conversion Probability",
        value: "41.2% Rate",
        avg: "6",
        exposure: "6 Follow-ups",
      },
    },
    loanStatus: {
      title: "Deal & Pipeline Status",
      metrics: [
        { label: "NEW ENQUIRIES", value: "32" },
        { label: "SITE VISITS", value: "18" },
        { label: "CONVERSION", value: "41.2%" },
        { label: "TOTAL LEADS", value: "124" },
      ],
    },
    ltv: {
      title: "Lead Distribution",
      debtService: "Active: 84",
      net: "Target: 124",
      threshold: "75%",
      current: "41.4%",
      initial: "61.5%",
      market: "39.3%",
    },
    dscr: {
      title: "Target Efficiency",
      auxiliaryThreshold: "8.4 Target",
      progressWidth: "68%",
      current: "9.2",
      initial: "7.8",
      market: "8.9",
    },
    dock: {
      brand: "INFINITY CORE BHOPAL",
      streamLabel: "Executive Feed",
      streamCount: "24",
      actionText: "Live Feed Active",
    },
  },
};

// Barcode waveform heights for center bottom card (64 vertical tick lines)
export const barcodeTicks = [
  10, 14, 18, 14, 22, 16, 20, 13, 24, 28, 22, 26, 16, 20, 14, 18,
  13, 17, 22, 26, 30, 24, 28, 18, 23, 16, 20, 14, 18, 13, 15, 11,
  14, 17, 22, 26, 20, 24, 16, 20, 14, 18, 22, 28, 24, 20, 16, 13,
  15, 18, 23, 20, 26, 16, 22, 14, 18, 13, 16, 11, 14, 11, 13, 9
];

// Real Estate Details for modal or quick inspector
export const leadBreakdown = [
  { name: "New Enquiries", count: 32, percentage: "25.8%" },
  { name: "Contacted", count: 28, percentage: "22.6%" },
  { name: "Interested", count: 24, percentage: "19.4%" },
  { name: "Site Visit", count: 18, percentage: "14.5%" },
  { name: "Converted", count: 22, percentage: "17.7%" },
];

export const siteVisitRows = [
  { label: "Scheduled", count: 12, max: 12, color: "#C5A059" },
  { label: "Confirmed", count: 10, max: 12, color: "#DFBE77" },
  { label: "Completed", count: 8, max: 12, color: "#4A7C59" },
  { label: "Follow-up", count: 6, max: 12, color: "#726D66" },
];

export const topPropertyInterests = [
  { name: "Green Glades Estate", type: "Residential Plots", count: 42, share: "34%" },
  { name: "Riverside Enclave", type: "3 BHK Apartments", count: 28, share: "23%" },
  { name: "Skyline Residences", type: "Luxury Villas", count: 24, share: "19%" },
  { name: "Central Heights", type: "Commercial Spaces", count: 18, share: "14%" },
];

export const recentActivities = [
  { time: "09:42 AM", title: "New client enquiry", sub: "Residential Property" },
  { time: "10:18 AM", title: "Site visit confirmed", sub: "Green Glades Estate" },
  { time: "11:05 AM", title: "Client call completed", sub: "Follow-up scheduled" },
  { time: "12:32 PM", title: "New interaction", sub: "Commercial Property" },
  { time: "01:15 PM", title: "Proposal shared", sub: "3 BHK Villa" },
];
