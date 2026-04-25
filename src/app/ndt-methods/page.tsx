import { Metadata } from "next";
import Link from "next/link";
import {
  Eye,
  CircleDot,
  Magnet,
  Waves,
  Droplets,
  Zap,
  Gauge,
  Radio,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { ndtMethods } from "@/lib/content";

export const metadata: Metadata = {
  title: "NDT Methods | Detection NDT Consulting",
};

const iconMap: Record<string, React.ElementType> = {
  Eye,
  Radiation: CircleDot,
  Magnet,
  Waves,
  Droplets,
  Zap,
  Gauge,
  Radio,
};

export default function NdtMethodsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-xs uppercase font-semibold tracking-wider text-orange-500 mb-4">
              INSPECTION
            </p>
            <h1 className="text-5xl font-extrabold text-white">
              Non-Destructive Testing Methods
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The field of Nondestructive Testing (NDT) is a very broad,
              interdisciplinary field that plays a critical role in assuring that
              structural components and systems perform their function in a
              reliable and cost effective fashion.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              NDT technicians create tests that locate and characterize material
              flaws without damaging the inspected object, balancing quality
              control and cost-effectiveness.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Methods Grid */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading overline="TECHNIQUES" title="8 NDT Methods" />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ndtMethods.map((method) => {
              const Icon = iconMap[method.icon] || Eye;
              return (
                <AnimatedSection key={method.abbr}>
                  <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
                    <div className="bg-navy-900 text-white w-14 h-14 rounded-lg flex items-center justify-center font-bold text-lg">
                      {method.abbr}
                    </div>
                    <h3 className="font-bold text-lg mt-4 text-navy-900">
                      {method.title}
                    </h3>
                    <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                      {method.description}
                    </p>
                    <Icon className="w-5 h-5 text-orange-500 mt-4" />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* NDE Explanation */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading overline="NDE vs NDT" title="What is NDE?" />
            <p className="text-lg text-gray-700 leading-relaxed mt-8 text-center">
              Nondestructive evaluation (NDE) is often used interchangeably with
              NDT, though technically NDE describes quantitative measurements.
              NDE methods locate defects and measure characteristics like size,
              shape, and orientation, plus determine material properties
              including fracture toughness and formability.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white">
              Need NDT Inspection?
            </h2>
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
