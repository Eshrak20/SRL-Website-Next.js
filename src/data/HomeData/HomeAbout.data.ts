import img1 from "@/src/assets/images/real_state_about1.png"
import img2 from "@/src/assets/images/real_state_about2.png"


export interface AboutCard {
    id: number;
    title: string;
    description: string;
}

export interface HomeAboutData {
    mainTitle: string;
    cards: AboutCard[];
    images: {
        main: typeof img1,
        secondary: typeof img2,
    },
}

export const homeAboutData: HomeAboutData = {
    mainTitle: "Building Trust Through Real Estate Excellence",
    cards: [
        {
            id: 1,
            title: "Premium Property Listings",
            description:
                "We offer a curated selection of high-quality residential and commercial properties in prime locations to match every lifestyle and investment goal.",
        },
        {
            id: 2,
            title: "Trusted Market Expertise",
            description:
                "Our team provides data-driven insights and professional guidance to help clients make smart and profitable real estate decisions.",
        },
        {
            id: 3,
            title: "Customer-Centered Service",
            description:
                "From consultation to closing, we prioritize transparency, communication, and long-term relationships with our clients.",
        },
    ],

    images: {
        main: img1,
        secondary: img2,
    },
};