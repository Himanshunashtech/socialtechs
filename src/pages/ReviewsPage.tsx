import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, ExternalLink } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  const fullReviews = [
    {
      name: "Himanshu & IndiHunt Team",
      role: "IndiHunt",
      website: "https://indihunt.in",
      websiteDisplay: "indihunt.in",
      location: "Greater Noida, India",
      metric: "+250% Organic Traffic",
      highlight: "Complete web architecture, SEO scaling, and seamless portal performance",
      text: "Socialtechs played a pivotal role in building and scaling IndiHunt (indihunt.in). From architecting a super-fast, responsive web platform to handling technical SEO and keyword strategy, Kunal and his team executed everything with precision. Our organic impressions and active user retention grew exponentially within months. Their commitment to clean code, ultra-fast loading speed, and proactive support makes them our trusted tech and marketing partner."
    },
    {
      name: "Radhika",
      role: "Radhika Boutique",
      website: "https://radhikaboutique.in",
      websiteDisplay: "radhikaboutique.in",
      location: "Delhi NCR, India",
      metric: "4x Direct Sales Growth",
      highlight: "Stunning e-commerce storefront, high-converting social campaigns, and WhatsApp sales flow",
      text: "Running an ethnic fashion brand requires both stunning visuals and an effortless checkout experience. Socialtechs designed our entire e-commerce store at radhikaboutique.in and set up targeted Instagram ads and WhatsApp direct-order integrations. Our customer inquiries and repeat orders quadrupled within three months. Kunal understands how to turn casual social media visitors into paying loyal customers!"
    },
    {
      name: "Sonu",
      role: "Units Converter",
      website: "https://unitsconverter.in",
      websiteDisplay: "unitsconverter.in",
      location: "India",
      metric: "100/100 Core Web Vitals",
      highlight: "Lightweight web tool optimization, responsive UI, and explosive search visibility",
      text: "For a utility tool platform like unitsconverter.in, raw speed, instant responsiveness, and zero layout shift are critical for Google rankings and user retention. Socialtechs optimized our front-end architecture, refined our UI/UX for all screen sizes, and implemented a technical SEO roadmap that significantly increased our daily calculation queries. Working with Kunal is effortless — transparent communication, technical mastery, and rapid delivery."
    },
    {
      name: "Himanshu",
      role: "Caloi",
      website: "https://caloi.in",
      websiteDisplay: "caloi.in",
      location: "India",
      metric: "+180% Brand Inbound Reach",
      highlight: "Modern digital identity, lightning-fast web experience, and high-impact digital presence",
      text: "Socialtechs delivered a top-notch web experience and brand presence for caloi.in. Their strategic input on digital user flow, conversion rate optimization, and brand positioning made an immediate difference to our online footprint. The team was always proactive, met every milestone on time, and provided clear, actionable insights without unnecessary jargon."
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      <div className="site-shell">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow text-blue-600 mb-4">
            <span className="eyebrow-line" />
            Client Testimonials &amp; Outcomes
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Real Clients. <span className="text-blue-600">Real Results.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Read unedited feedback from business owners, founders, and directors who have partnered with Socialtechs.
          </p>
        </div>

        {/* Rating Banner */}
        <div className="max-w-xl mx-auto mb-16 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center flex items-center justify-around">
          <div>
            <div className="text-3xl font-extrabold text-slate-900">4.9 / 5.0</div>
            <div className="flex items-center justify-center gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-1 font-medium">Overall Client Satisfaction</p>
          </div>
          <div className="h-10 w-px bg-slate-200" />
          <div>
            <div className="text-3xl font-extrabold text-slate-900">100%</div>
            <p className="text-xs text-slate-500 mt-2 font-medium">Verified Real Clients</p>
          </div>
        </div>

        {/* Grid of Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fullReviews.map((rev) => (
            <div
              key={rev.name}
              className="review-card"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {rev.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-4 italic">
                  &ldquo;{rev.highlight}&rdquo;
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {rev.text}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="review-avatar">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{rev.name}</h4>
                    <p className="text-xs text-slate-500">{rev.location}</p>
                  </div>
                </div>
                <a
                  href={rev.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200 transition-colors"
                >
                  <span>{rev.websiteDisplay}</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to become our next success story?</h2>
          <Link to="/contact" className="button-hero inline-flex">
            Start Your Consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ReviewsPage;
