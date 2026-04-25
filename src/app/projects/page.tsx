import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { projects, industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects | Detection NDT Consulting",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-xs uppercase font-semibold tracking-wider text-orange-500 mb-4">
              PORTFOLIO
            </p>
            <h1 className="text-5xl font-extrabold text-white">
              Our Projects
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <AnimatedSection key={project.title}>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition">
                  <div className="bg-navy-900 px-6 py-3">
                    <span className="text-orange-400 text-sm font-medium">
                      {project.year}
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-navy-900">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mt-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Summary */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              overline="EXPERIENCE"
              title="Industries We've Served"
            />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <AnimatedSection key={industry}>
                <div className="bg-white rounded-lg px-6 py-4 text-center font-medium text-navy-900 shadow-sm">
                  {industry}
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
            <h2 className="text-3xl font-bold text-white">Have a Project?</h2>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-orange-600"
            >
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
