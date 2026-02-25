export interface SustainItem {
    id: number;
    title: string;
    description: string;
    images: string[]; // Updated to an array to handle multiple photos
}

export const sustain: SustainItem[] = [
    {
        id: 1,
        title: "Advancing Green Litigation and NZEB Compliance in 2026",
        description: "Updated February 2026",
        images: [
            // Modern Law/Office Building
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop", 
            // Legal documentation/Contract
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
            // Sustainable Urban Planning
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
            // Modern sustainable architecture
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
        ],
    },
];