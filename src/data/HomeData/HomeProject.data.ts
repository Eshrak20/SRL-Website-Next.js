// src/types/home-project.ts
export interface ProjectImage {
  id: string;
  image: string;
  title: string;
  location: string;
  description?: string;
  exploreLink: string;
}

export interface HomeProjectData {
  featuredLabel: string;
  sectionTitle: string;
  projects: ProjectImage[];
}


// src/data/HomeData/HomeProject.data.ts

export const homeProjectData: HomeProjectData = {
  featuredLabel: "FEATURED PROJECTS",
  sectionTitle: "BESPOKE ENCLAVES WITH FINESSE IN ARCHITECTURE AND DESIGN",
  projects: [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
      title: "EDISON PORTIA",
      location: "Bashundhara R/A",
      exploreLink: "#",
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format&fit=crop",
      title: "EDISON VERONA",
      location: "Uttara",
      exploreLink: "#",
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      title: "EDISON DESDEMONA",
      location: "Bashundhara R/A",
      description: "A lively structure, full of exclusivity. An Edifice that encourages you to live your life in the moment.",
      exploreLink: "#",
    },
    {
        id: "4",
        image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=800&auto=format&fit=crop",
        title: "EDISON AMELIA",
        location: "Gulshan",
        exploreLink: "#",
      },
  ],
};