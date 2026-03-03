import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
// src/data/Navigation/Footer.data.ts

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    company: [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about" },
      { label: "Contact", path: "/contact" },
      { label: "Careers", path: "/careers" },
    ],
    businesses: [
      { label: "SRL - Trading", path: "/about" },
      { label: "Health Care", path: "/projects" },
      { label: "Ever Power", path: "/gallery" },
      { label: "Dbox Digital", path: "/testimonial" },
    ],
    legal: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
      { label: "Cookie Policy", path: "/cookies" },
    ],
  };
  return (
    <footer className="bg-background text-foreground border-t border-border pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold tracking-tighter text-primary italic">
              SRL{" "}
              <span className="font-light not-italic text-muted-foreground">
                GROUP
              </span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building a sustainable tomorrow through innovation in trading,
              healthcare, power, and digital solutions.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Businesses Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6">
              Our Businesses
            </h3>
            <ul className="space-y-4">
              {footerLinks.businesses.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  123 Corporate Plaza, <br />
                  Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>contact@srlgroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground tracking-wide">
            © {currentYear}{" "}
            <span className="font-semibold text-foreground">SRL Group</span>.
            All rights reserved.
          </p>

          <div className="flex gap-8">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
