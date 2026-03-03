// src/data/HomeData/HomeBusiness.data.ts

export interface SubCategory {
    name: string;
    link: string;
}

export interface BusinessVertical {
    id: string;
    title: string;
    thumbnail: string;
    featuredImage: string;
    subCategories: SubCategory[];
    exploreLink: string;
}

export const businessData: BusinessVertical[] = [
    {
        id: "infrastructure",
        title: "Infrastructure",
        thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400",
        featuredImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200",
        exploreLink: "/infrastructure",
        subCategories: [
            { name: "Airports", link: "#" },
            { name: "Data Center", link: "#" },
            { name: "Defence & Aerospace", link: "#" },
            { name: "Road, Metro & Rail", link: "#" },
        ],
    },
    {
        id: "energy",
        title: "Energy & Utilities",
        thumbnail: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=400",
        featuredImage: "https://images.unsplash.com/photo-1466611653911-95282fc3656b?q=80&w=1200",
        exploreLink: "/energy",
        subCategories: [
            { name: "Solar", link: "#" },
            { name: "Wind", link: "#" },
            { name: "Transmission", link: "#" },
        ],
    },
    {
        id: "transport",
        title: "Transport & Logistics",
        thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400",
        featuredImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200",
        exploreLink: "/transport",
        subCategories: [
            { name: "Ports & Terminals", link: "#" },
            { name: "Supply Chain", link: "#" },
            { name: "E-com Logistics", link: "#" },
        ],
    },
    {
        id: "materials",
        title: "Materials",
        thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400",
        featuredImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200",
        exploreLink: "/materials",
        subCategories: [
            { name: "Cement", link: "#" },
            { name: "Steel", link: "#" },
            { name: "Mining", link: "#" },
        ],
    },
    {
        id: "consumer",
        title: "Direct to Consumers",
        thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400",
        featuredImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200",
        exploreLink: "/consumer",
        subCategories: [
            { name: "Retail", link: "#" },
            { name: "FMCG", link: "#" },
            { name: "Digital Services", link: "#" },
        ],
    },
    {
        id: "realestate",
        title: "Real Estate",
        thumbnail: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=400",
        featuredImage: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200",
        exploreLink: "/real-estate",
        subCategories: [
            { name: "Residential", link: "#" },
            { name: "Commercial", link: "#" },
            { name: "Smart Cities", link: "#" },
        ],
    },
    {
        id: "media",
        title: "Media",
        thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=400",
        featuredImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200",
        exploreLink: "/media",
        subCategories: [
            { name: "Broadcasting", link: "#" },
            { name: "Advertising", link: "#" },
            { name: "Content Studio", link: "#" },
        ],
    },
    {
        id: "sports",
        title: "Sports",
        thumbnail: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=400",
        featuredImage: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200",
        exploreLink: "/sports",
        subCategories: [
            { name: "Stadiums", link: "#" },
            { name: "Teams", link: "#" },
            { name: "Sports Tech", link: "#" },
        ],
    },
];