export interface GalleryImage {
    id: string;
    image: string; // Changed from StaticImageData to string for external links
    label: string;
    title: string;
    subtitle?: string;
    statValue?: string;
    statLabel?: string;
}

export interface HomeGalleryData {
    sectionTitle: string;
    images: GalleryImage[]; // Changed to an array for easy looping
}

export const homeGalleryData: HomeGalleryData = {
    sectionTitle: "For A Sustainable Tomorrow",
    images: [
        {
            id: "1",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
            label: "Environmental Impact",
            title: "Net Zero Real Estate Compliance",
            statValue: "2030",
            statLabel: "TARGET YEAR",
        },
        {
            id: "2",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
            label: "Governance",
            title: "Board Structure and Ethics",
            subtitle: "Ensuring legal transparency in every transaction.",
        },
        {
            id: "3",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
            label: "Urban Law",
            title: "Green Zoning Regulations",
            statValue: "100%",
            statLabel: "LEGAL COMPLIANCE",
        },
        {
            id: "4",
            image: "https://images.unsplash.com/photo-1449156003053-934cce4b7a1d?q=80&w=800&auto=format&fit=crop",
            label: "Community",
            title: "Affordable Housing Litigation",
            subtitle: "Supporting community-first urban development.",
        },
        {
            id: "5",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
            label: "Renewables",
            title: "Solar Integration Rights",
            statValue: "40%",
            statLabel: "ENERGY SAVINGS",
        },
        {
            id: "6",
            image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=800&auto=format&fit=crop",
            label: "Corporate",
            title: "ESG Reporting Standards",
            subtitle: "Navigating the 2026 Disclosure Laws.",
        },
        {
            id: "7",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
            label: "Smart Cities",
            title: "Digital Property Rights",
            statValue: "SECURE",
            statLabel: "BLOCKCHAIN TECH",
        },
        {
            id: "8",
            image: "https://images.unsplash.com/photo-1454165833267-028ec054638d?q=80&w=800&auto=format&fit=crop",
            label: "Litigation",
            title: "Environmental Dispute Resolution",
            subtitle: "Protecting natural assets through law.",
        },
        {
            id: "9",
            image: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?q=80&w=800&auto=format&fit=crop",
            label: "Ecosystems",
            title: "Wetland Protection Law",
            statValue: "50k",
            statLabel: "ACRES PRESERVED",
        },
        {
            id: "10",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
            label: "Strategy",
            title: "Sustainable Investment Advisory",
            subtitle: "Guiding real estate portfolios toward 2030.",
        },
    ],
};