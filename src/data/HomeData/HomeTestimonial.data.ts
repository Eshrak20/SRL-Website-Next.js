// src/data/HomeData/HomeTestimonial.data.ts

export interface TestimonialData {
  id: string;
  videoThumbnail: string;
  videoTitle: string;
  quoteTitle: string;
  quoteDescription: string;
  authorName: string;
  authorRole: string;
  projectName: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: "1",
    videoThumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    videoTitle: "A SEAMLESS JOURNEY TO HOMEOWNERSHIP",
    quoteTitle: "They didn't just build our home, they built our trust",
    quoteDescription: "From blueprint to reality, every detail was handled with precision. The team's commitment to quality made our dream home a masterpiece.",
    authorName: "Sarah Mitchell",
    authorRole: "First-time Homeowner",
    projectName: "EDISON ADELIA"
  },
  {
    id: "2",
    videoThumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
    videoTitle: "INVESTMENT WITH PEACE OF MIND",
    quoteTitle: "Returns beyond expectations, service beyond compare",
    quoteDescription: "As an investor, I've worked with many developers. SRL stands out for their transparency and exceptional project execution.",
    authorName: "Michael Chen",
    authorRole: "Property Investor",
    projectName: "EDISON PORTIA"
  },
  {
    id: "3",
    videoThumbnail: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800",
    videoTitle: "LEGAL EXCELLENCE MEETS REAL ESTATE",
    quoteTitle: "Finally, a team that understands both law and luxury",
    quoteDescription: "The integrated legal support made our property acquisition smooth and worry-free. Truly a one-stop solution.",
    authorName: "Priya Sharma",
    authorRole: "Commercial Buyer",
    projectName: "EDISON TOWER"
  }
];