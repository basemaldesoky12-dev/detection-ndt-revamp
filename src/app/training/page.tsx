import { Metadata } from "next";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { trainingCourses } from "@/lib/content";

export const metadata: Metadata = {
  title: "Training | Detection NDT Consulting",
};

export default function TrainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-xs uppercase font-semibold tracking-wider text-orange-500 mb-4">
              TRAINING
            </p>
            <h1 className="text-5xl font-extrabold text-white">
              NDT Training &amp; Certification
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-lg text-gray-700 leading-relaxed">
              Over the past 15 years, we have developed NDT training courses to
              provide the best possible training and examination solutions, ideal
              for both internationally recognised certification schemes, and
              employer based schemes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading overline="PROGRAMS" title="Training Programs" />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingCourses.map((course) => (
              <AnimatedSection key={course.title}>
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <GraduationCap className="w-8 h-8 text-orange-500 mb-4" />
                  <h3 className="font-bold text-lg text-navy-900">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 mt-2">{course.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Info */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              overline="CERTIFICATION"
              title="Certification & Qualification"
            />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-gray-100 rounded-xl p-8">
                <h3 className="font-bold text-xl text-navy-900 mb-4">
                  NDT Certification
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  ASNT certification for RT, ET, MT, UT, PT, VT Levels I &amp;
                  II. Our programs follow SNT-TC-1A guidelines to ensure
                  personnel are qualified and competent in their respective NDT
                  disciplines.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-gray-100 rounded-xl p-8">
                <h3 className="font-bold text-xl text-navy-900 mb-4">
                  Welder Certification
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  ASME, AWS &amp; API certification training and qualification.
                  We provide comprehensive welder qualification programs that
                  meet international code requirements for welding personnel.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white">
              Ready to Get Certified?
            </h2>
            <p className="mt-4 text-white/80 text-lg">
              Contact us for course schedule and registration details.
            </p>
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
