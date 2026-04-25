import Link from "next/link";
import {
  Wrench,
  Award,
  ClipboardCheck,
  ShieldCheck,
  Clock,
  ClipboardList,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { company, stats, services, industries } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <AnimatedSection>
        <section className="flex min-h-[90vh] flex-col justify-between bg-gradient-to-br from-navy-900 to-navy-700">
          <div className="mx-auto flex max-w-[1200px] flex-1 items-center px-6 py-20 w-full">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                Welding &amp; NDT Experts
              </p>

              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
                {company.tagline}
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-white/80">
                Over 15 years of trusted inspection, NDT, and welding consulting
                services across Egypt and the Middle East.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-block rounded-lg bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-orange-600"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-block rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/20"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="bg-white/5 backdrop-blur">
            <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 px-6 py-6 sm:gap-6 sm:py-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-extrabold text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-white/70 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── About Preview ── */}
      <AnimatedSection>
        <section className="bg-white py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <SectionHeading overline="ABOUT US" title="Who We Are" />
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              {company.description}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block font-semibold text-orange-500 transition hover:text-orange-600"
            >
              Learn More &rarr;
            </Link>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Services Overview ── */}
      <AnimatedSection>
        <section className="bg-gray-100 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading overline="WHAT WE DO" title="Our Core Services" />

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
              {services.map((service, idx) => {
                const icons = [Wrench, Award, ClipboardCheck];
                const Icon = icons[idx] ?? Wrench;

                return (
                  <div
                    key={service.slug}
                    className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Icon className="h-10 w-10 text-orange-500" />
                    <h3 className="mt-4 text-xl font-bold text-navy-900">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-gray-700">
                      {service.shortDescription}
                    </p>
                    <Link
                      href={`/services#${service.slug}`}
                      className="mt-6 inline-block font-semibold text-orange-500 transition hover:text-orange-600"
                    >
                      Learn More &rarr;
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Why Choose Us ── */}
      <AnimatedSection>
        <section className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              overline="WHY DETECTION NDT"
              title="Trusted by Industry Leaders"
            />

            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  Icon: ShieldCheck,
                  title: "Certified Professionals",
                  text: "ASNT certified NDT technicians and ASME/AWS qualified welding inspectors.",
                },
                {
                  Icon: Clock,
                  title: "15+ Years Experience",
                  text: "Deep expertise in Oil & Gas, petrochemical, and industrial inspection.",
                },
                {
                  Icon: ClipboardList,
                  title: "Comprehensive Services",
                  text: "From NDT inspection to welder training, welding procedure development, and quality consulting.",
                },
                {
                  Icon: Award,
                  title: "Quality Assurance",
                  text: "Rigorous QMS ensuring all activities meet contractual and code requirements.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl bg-gray-100 p-8"
                >
                  <card.Icon className="mb-4 h-12 w-12 text-orange-500" />
                  <h3 className="text-lg font-bold text-navy-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Training CTA ── */}
      <AnimatedSection>
        <section className="bg-navy-900 py-20">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">
                NDT Training &amp; Certification Programs
              </h2>
              <p className="mt-3 max-w-xl text-white/80">
                Level I &amp; II certification in UT, RT, MT, PT, VT, ET. Over
                15 years of training excellence.
              </p>
            </div>
            <Link
              href="/training"
              className="shrink-0 rounded-lg bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-orange-600"
            >
              View Training Programs
            </Link>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Industries ── */}
      <AnimatedSection>
        <section className="bg-gray-100 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              overline="INDUSTRIES WE SERVE"
              title="Sectors We Work With"
            />

            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="rounded-lg bg-white px-6 py-4 text-center font-medium text-navy-900 shadow-sm"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Contact CTA ── */}
      <AnimatedSection>
        <section className="bg-white py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-4xl font-bold text-navy-900">
              Ready to Work With Us?
            </h2>
            <p className="mt-4 text-lg text-gray-500">{company.address}</p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-orange-600"
              >
                Get in Touch
              </Link>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="inline-block rounded-lg border border-navy-700 px-8 py-4 font-semibold text-navy-900 transition hover:bg-gray-100"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
