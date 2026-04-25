import Link from "next/link";
import { company } from "@/lib/content";

const serviceLinks = [
  { label: "Welding & QC", href: "/services#welding-qc" },
  { label: "NDT Level III", href: "/services#ndt-level-iii" },
  { label: "Third Party Inspection", href: "/services#third-party" },
  { label: "Training", href: "/training" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t-4 border-orange-500 bg-navy-900">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <p className="text-lg font-bold text-white">DETECTION NDT</p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {company.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </p>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </p>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>{company.address}</li>
              <li>{company.phone}</li>
              <li>{company.email}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/50">
        <div className="mx-auto max-w-[1200px] px-6 py-6">
          <p className="text-center text-sm text-white/70">
            &copy; 2024 Detection NDT Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
