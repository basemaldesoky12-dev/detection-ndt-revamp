import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { company, usefulLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Detection NDT Consulting",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-xs uppercase font-semibold tracking-wider text-orange-500 mb-4">
              GET IN TOUCH
            </p>
            <h1 className="text-5xl font-extrabold text-white">Contact Us</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Details */}
          <AnimatedSection>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy-900">Our Office</h3>
                  <p className="text-gray-700 mt-1">{company.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy-900">Phone &amp; Fax</h3>
                  <p className="text-gray-700 mt-1">
                    Phone: {company.phone}
                    <br />
                    Fax: {company.fax}
                    <br />
                    Mobile: {company.mobile}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy-900">Email</h3>
                  <p className="text-gray-700 mt-1">{company.email}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy-900">Working Hours</h3>
                  <p className="text-gray-700 mt-1">
                    Sunday &ndash; Thursday: 9:00 AM &ndash; 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column - Contact Form */}
          <AnimatedSection>
            <form className="space-y-6">
              <div>
                <label className="font-medium text-sm mb-2 block text-navy-900">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="font-medium text-sm mb-2 block text-navy-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="font-medium text-sm mb-2 block text-navy-900">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="font-medium text-sm mb-2 block text-navy-900">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="font-medium text-sm mb-2 block text-navy-900">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 w-full rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* Careers Section */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <SectionHeading overline="CAREERS" title="Join Our Team" />
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Send your CVs to:{" "}
              <a
                href={`mailto:${company.careersEmail}`}
                className="text-orange-500 font-semibold hover:underline"
              >
                {company.careersEmail}
              </a>
            </p>
            <p className="mt-4 text-gray-700">{company.address}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Useful Links */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading overline="RESOURCES" title="Industry Links" />
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {usefulLinks.map((link) => (
              <AnimatedSection key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-100 rounded-xl p-8 text-center hover:shadow-md transition"
                >
                  <p className="font-bold text-navy-900">{link.name}</p>
                  <ExternalLink className="w-5 h-5 text-orange-500 mx-auto mt-3" />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
