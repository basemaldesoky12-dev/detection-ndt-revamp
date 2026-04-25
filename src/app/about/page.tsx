import { Metadata } from "next";
import {
  Search,
  Wrench,
  ShieldCheck,
  GraduationCap,
  Stamp,
  Flame,
  Droplets,
  Zap,
  Building2,
  Factory,
  Plane,
  Car,
  Cpu,
  Workflow,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { company, industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us | Detection NDT Consulting",
  description:
    "Learn about Detection NDT Consulting — over 15 years of experience providing independent inspection services across oil, gas, petrochemical, and industrial sectors.",
};

const expertiseCards = [
  {
    icon: Search,
    title: "NDT Inspection",
    description: "Comprehensive non-destructive testing across 8 methods",
  },
  {
    icon: Wrench,
    title: "Welding Consultation",
    description: "Expert welding procedure development and qualification",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    description: "Rigorous QC management for fabrication and repair works",
  },
  {
    icon: GraduationCap,
    title: "Training & Certification",
    description: "ASNT certified training programs for Level I & II",
  },
  {
    icon: Stamp,
    title: "ASME Compliance",
    description: "ASME stamp preparation and code compliance consulting",
  },
];

const industryIcons: Record<string, React.ElementType> = {
  "Oil & Gas": Flame,
  Petrochemical: Droplets,
  "Power Generation": Zap,
  "Civil Infrastructure": Building2,
  Manufacturing: Factory,
  Aerospace: Plane,
  Automotive: Car,
  Electronics: Cpu,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-xs uppercase font-semibold tracking-wider text-orange-500 mb-4">
              ABOUT US
            </p>
            <h1 className="text-5xl font-extrabold text-white">
              About Detection NDT Consulting
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {company.longDescription}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded by {company.founder}, our company has built a reputation
              for delivering reliable, high-quality inspection services. Serving
              clients across {company.region}, we combine deep technical
              expertise with a commitment to safety and regulatory compliance to
              protect critical infrastructure and ensure operational integrity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Quality Management */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading overline="QUALITY" title="Quality Management System" />
            <div className="mt-12 bg-white rounded-xl p-10 shadow-sm border-l-4 border-orange-500">
              <blockquote className="text-gray-700 text-lg italic leading-relaxed">
                &ldquo;{company.qms}&rdquo;
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              overline="EXPERTISE"
              title="Our Areas of Expertise"
            />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertiseCards.map((card, index) => (
              <AnimatedSection key={card.title}>
                <div
                  className={`bg-gray-100 rounded-xl p-8 ${
                    index >= 3 ? "md:col-span-1" : ""
                  }`}
                >
                  <card.icon className="w-8 h-8 text-orange-500 mb-4" />
                  <h3 className="font-bold text-lg text-navy-900">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 mt-2">{card.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              overline="INDUSTRIES"
              title="Industries We Serve"
            />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry) => {
              const Icon = industryIcons[industry] || Workflow;
              return (
                <AnimatedSection key={industry}>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <Icon className="w-8 h-8 text-navy-700 mx-auto mb-3" />
                    <p className="font-medium text-navy-900">{industry}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
