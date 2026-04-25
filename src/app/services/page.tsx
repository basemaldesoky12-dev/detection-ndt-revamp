import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | Detection NDT Consulting",
  description:
    "Explore our comprehensive inspection, testing, and quality assurance services including welding inspection, NDT Level III consulting, and third party inspection.",
};

export default function ServicesPage() {
  const weldingQC = services[0];
  const ndtLevelIII = services[1];
  const thirdParty = services[2];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-xs uppercase font-semibold tracking-wider text-orange-500 mb-4">
              SERVICES
            </p>
            <h1 className="text-5xl font-extrabold text-white">
              Our Services
            </h1>
            <p className="text-lg text-white/80 mt-6 max-w-2xl mx-auto">
              Comprehensive inspection, testing, and quality assurance solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Welding & QC Inspection */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              overline="SERVICE 01"
              title="Welding & QC Inspection"
            />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <p className="text-lg text-gray-700 leading-relaxed">
                {weldingQC.shortDescription}
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Our team of qualified inspectors and engineers provides thorough
                inspection services covering pipelines, tanks, pressure vessels,
                heat exchangers, and all fabrication and repair works. We employ
                a full range of NDT methods to ensure structural integrity and
                code compliance.
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <div className="space-y-3">
                {weldingQC.items?.map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Staffing */}
          <AnimatedSection>
            <div className="mt-16">
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Staffing
              </h3>
              <p className="text-gray-700 mb-6">
                We provide qualified personnel for your projects:
              </p>
              <div className="flex flex-wrap gap-3">
                {weldingQC.staffing?.map((role) => (
                  <span
                    key={role}
                    className="bg-gray-100 text-navy-900 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* NDT Level III Services */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              overline="SERVICE 02"
              title="NDT Level III Services"
            />
            <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto text-center leading-relaxed">
              Operating as an outside agency, we provide Level III NDT services
              including ASME stamp preparation, NDE consulting, written
              practices development, and comprehensive training programs.
            </p>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {ndtLevelIII.subServices?.map((sub) => (
              <AnimatedSection key={sub.title}>
                <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                  <h3 className="text-lg font-bold text-navy-900 mb-4">
                    {sub.title}
                  </h3>
                  {"items" in sub && sub.items ? (
                    <ul className="space-y-2">
                      {sub.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 items-start text-gray-700 text-sm"
                        >
                          <span className="text-orange-500 mt-1 shrink-0">
                            &bull;
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {"description" in sub && sub.description ? (
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {sub.description}
                    </p>
                  ) : null}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party Inspection */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              overline="SERVICE 03"
              title="Third Party Inspection"
            />
            <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto text-center leading-relaxed">
              {thirdParty.shortDescription}
            </p>
          </AnimatedSection>
          <div className="mt-12 max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="space-y-3">
                {thirdParty.capabilities?.map((cap) => (
                  <div key={cap} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{cap}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              overline="ADDITIONAL"
              title="Additional Services"
            />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weldingQC.additional?.map((item) => (
              <AnimatedSection key={item}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white">
              Need Our Services?
            </h2>
            <p className="text-lg text-white/70 mt-4 max-w-xl mx-auto">
              Contact us to discuss your project requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl mt-8 transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
