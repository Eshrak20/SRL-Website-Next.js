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
    videoThumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
    videoTitle: "OUR JOURNEY WITH EDISON HAS BEEN SMOOTH AND PLEASANT",
    quoteTitle: "Cherished Moments from Our Homeowner",
    quoteDescription: "Hear from Edison Adelia homeowners as they share their stories about their homes. Their experiences inspire us to keep providing the best for everyone we serve.",
    authorName: "Farzana Khalid",
    authorRole: "Apartment Owner",
    projectName: "EDISON ADELIA"
  },
  {
    id: "2",
    videoThumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    videoTitle: "TRANSFORMING DREAMS INTO REALITY",
    quoteTitle: "A Seamless Experience",
    quoteDescription: "The attention to detail and professional approach made our home-buying process incredibly easy. We couldn't be happier with the final result.",
    authorName: "Ahmed Zayan",
    authorRole: "Penthouse Owner",
    projectName: "EDISON PORTIA"
  }
];