import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, Mail, ChevronDown, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service = servicesData.find(s => s.slug === serviceId || s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = servicesData.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      <SEO
        title={service.title}
        description={service.shortDesc}
        canonical={`https://socialtechs.in/services/${service.slug}`}
      />
      <div className="site-shell">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="size-4" /> Back to All Services
          </Link>
        </div>

        {/* Hero Banner for this service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
              <Sparkles className="size-3.5 text-blue-600" />
              {service.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              {service.fullDesc}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {service.metrics.map((m, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-xl sm:text-2xl font-black text-blue-600">{m.value}</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/contact" className="button-hero">
                Request Custom Proposal <ArrowRight className="size-4" />
              </Link>
              <a href="tel:+917428460083" className="button-primary">
                <Phone className="size-4" /> Call Kunal Bhati
              </a>
            </div>
          </div>

          {/* 3D Realistic Image Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white p-3 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 mb-16 shadow-sm">
          <div className="max-w-2xl mb-8">
            <p className="eyebrow text-blue-600 mb-2"><span className="eyebrow-line" />Scope of Work</p>
            <h2 className="text-3xl font-extrabold text-slate-900">What is included in this service</h2>
            <p className="text-slate-600 text-sm mt-2">
              Every deliverable is crafted with clarity, tested for performance, and reported with complete transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{item}</h4>
                  <p className="text-xs text-slate-500 mt-1">Full professional execution by our specialized team.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 mb-16 shadow-sm">
            <div className="max-w-2xl mb-8">
              <p className="eyebrow text-blue-600 mb-2"><span className="eyebrow-line" />Common Questions</p>
              <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.q} className="faq-item">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="faq-trigger"
                    >
                      <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`size-5 shrink-0 text-blue-600 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="faq-panel open">
                        <p className="text-sm leading-relaxed text-slate-600 pt-2 border-t border-slate-100">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Other Recommended Services */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="eyebrow text-blue-600"><span className="eyebrow-line" />Explore More</p>
              <h3 className="text-2xl font-bold text-slate-900">Other Services You Might Need</h3>
            </div>
            <Link to="/services" className="text-sm font-bold text-blue-600 hover:text-blue-700">
              View All Services &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                to={`/services/${other.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col"
              >
                <div className="rounded-2xl overflow-hidden mb-4 aspect-video bg-slate-100">
                  <img
                    src={other.image}
                    alt={other.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {other.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed flex-grow">{other.shortDesc}</p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Learn More</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="contact-band">
          <div className="max-w-xl">
            <p className="eyebrow text-blue-300 mb-2"><span className="eyebrow-line" />Ready to get started?</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Let&apos;s build a custom strategy for {service.title}.
            </h2>
            <p className="mt-4 text-slate-200 text-sm leading-relaxed">
              Book a free discovery call with Kunal Bhati to discuss timelines, pricing, and expected ROI.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="tel:+917428460083" className="button-hero">
                Call +91 74284 60083 <Phone className="size-4" />
              </a>
              <Link to="/contact" className="button-ghost">
                Send Direct Message <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 lg:w-[360px]">
            <a href="tel:+917428460083" className="contact-card">
              <Phone className="size-5 text-blue-300 shrink-0" />
              <div>
                <span>Phone / WhatsApp</span>
                <strong>+91 74284 60083</strong>
              </div>
            </a>
            <a href="mailto:kunalbhati596@gmail.com" className="contact-card">
              <Mail className="size-5 text-blue-300 shrink-0" />
              <div>
                <span>Email Inquiry</span>
                <strong>kunalbhati596@gmail.com</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetailPage;
