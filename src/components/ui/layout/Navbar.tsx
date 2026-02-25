"use client";

import { useState, useEffect, JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  X,
  ArrowRight,
  ExternalLink,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "@/src/assets/logo/logo.jpeg";
import SupportModal from "../../supportModal/supportModal";
import CustomSRLLogo from "../../home/CustomSRLLogo";

interface SocialLink {
  id: number;
  platform: string;
  url: string;
  position: number;
}

interface SettingData {
  data?: {
    primary_phone?: string;
  }[];
}

interface NavbarProps {
  socialLinks?: SocialLink[];
  settingData?: SettingData;
}

const navItems = [
  { label: "Home", path: "/" },
  { label: "SRL - Trading", path: "/about" },
  { label: "Health Care", path: "/projects" },
  { label: "Ever Power", path: "/gallery" },
  { label: "Dbox Digital", path: "/testimonial" },
  { label: "Contact", path: "/contact" },
];

const Navbar = ({ socialLinks = [], settingData }: NavbarProps) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [callOpen, setCallOpen] = useState<boolean>(false);

  const sortedSocialLinks = [...socialLinks].sort(
    (a, b) => a.position - b.position,
  );

  const isHome = pathname === "/";
  const isProjectDetails = pathname.startsWith("/project/");

  const getPlatformIcon = (platform: string) => {
    const key = platform?.toLowerCase();

    const icons: Record<string, JSX.Element> = {
      instagram: <Instagram size={20} />,
      facebook: <Facebook size={20} />,
      twitter: <Twitter size={20} />,
      linkedin: <Linkedin size={20} />,
      youtube: <Youtube size={20} />,
      whatsapp: <Phone size={20} />,
    };

    return icons[key] || <ExternalLink size={20} />;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 80);

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <>
      {/* ... (SupportModal and Overlay remain same) */}

      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-70 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/90 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        {/* CHANGED: px-6 to px-6 (matching banner) and mx-auto container */}
        <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          {/* --- LOGO SECTION --- */}
          {/* We wrap the logo in a Link and remove the massive padding/glow for navbar use */}
          <Link href="/" className="relative flex items-center group">
            <div className="scale-50 md:scale-75 origin-left transition-transform duration-300">
              <CustomSRLLogo />
            </div>

            {/* Optional: Add the text brand name next to it if the logo is too small */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`ml-2 hidden md:block transition-colors ${isScrolled ? "text-white" : "text-white/80"}`}
            >
              <p className="text-[10px] font-mono tracking-[0.4em] uppercase opacity-50">
                Engineering
              </p>
            </motion.div>
          </Link>

          {/* Menu Toggle Button */}
          <div className="flex items-center gap-4">
            {/* Social icons can go here if needed, or just keep the Menu toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`group flex items-center gap-3 px-5 py-2.5 rounded-full transition-all ${
                isScrolled
                  ? "bg-primary text-white"
                  : "bg-white/10 backdrop-blur-md border border-white/20 text-white"
              }`}
            >
              <span className="hidden md:block text-xs font-black uppercase tracking-[0.2em]">
                Menu
              </span>
              <div className="w-5 h-3 flex flex-col justify-between items-end">
                <motion.span
                  animate={{
                    width: "100%",
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 5.5 : 0,
                  }}
                  className={`h-[1.5px] rounded-full origin-right ${isScrolled ? "bg-white" : "bg-primary"}`}
                />
                <motion.span
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  className={`h-[1.5px] w-2/3 rounded-full ${isScrolled ? "bg-white" : "bg-primary"}`}
                />
                <motion.span
                  animate={{
                    width: "100%",
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -5.5 : 0,
                  }}
                  className={`h-[1.5px] rounded-full origin-right ${isScrolled ? "bg-white" : "bg-primary"}`}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 30 }}
        className="fixed top-0 right-0 h-screen w-full max-w-112.5 bg-white z-80 overflow-y-auto"
      >
        <div className="relative flex flex-col h-full p-12">
          <div className="flex justify-between items-center mb-7">
            <span className="text-xl uppercase tracking-[0.5em] font-black">
              Navigation
            </span>
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.path ||
                (item.path === "/projects" && isProjectDetails);

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between py-5 text-4xl font-light ${
                    isActive
                      ? "text-primary font-normal"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  {item.label}
                  <ArrowRight size={28} />
                </Link>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="mt-auto pt-10">
            <div className="grid grid-cols-5 gap-3 mb-8">
              {sortedSocialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center"
                >
                  {getPlatformIcon(social.platform)}
                </a>
              ))}
            </div>

            <button
              onClick={() => setCallOpen(true)}
              className="flex items-center justify-center gap-4 bg-primary text-white py-5 rounded-xl w-full"
            >
              <Phone size={18} />
              Contact Support
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
