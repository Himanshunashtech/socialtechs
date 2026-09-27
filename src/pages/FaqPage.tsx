import React, { useState } from 'react';
import { ChevronDown, Search, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const allFaqs = [
  {
    category: "General",
    q: "Who does Socialtechs work with?",
    a: "Everyone — that is the point of what we do. We work with local shops, startups, service businesses, manufacturers, clinics, schools, e-commerce brands and established companies across India. You do not need to be a tech company or have a big budget to benefit. We shape the strategy around your size, your market and your goals, whether you need your very first website or a full multi-channel growth engine."
  },
  {
    category: "Services",
    q: "What services do you offer?",
    a: "We cover the complete digital spectrum: search engine optimization, social media marketing, paid advertising, content marketing, brand strategy, website development, mobile app development, custom web applications and e-commerce stores. Most clients start with one or two services and expand as results come in. Because one team handles everything, your website, ads, app and content all work together instead of pulling in different directions."
  },
  {
    category: "Timeline",
    q: "How long before I see results?",
    a: "It depends on the service. Paid advertising can start bringing enquiries within days of launch. Social media and content build momentum over two to three months. SEO is a longer game — meaningful ranking improvements typically show within three to six months. Websites and apps deliver value from launch day. We set clear expectations up front and report progress honestly every month, so you always know where things stand."
  },
  {
    category: "Pricing",
    q: "How much do your services cost?",
    a: "Every business is different, so we quote based on what you actually need rather than selling fixed packages you do not. After a short discovery call we prepare a clear proposal with transparent pricing — no hidden costs, no lock-in surprises. We work with modest budgets as well as larger ones, and we will always tell you honestly what is realistic at your budget before you spend anything."
  },
  {
    category: "Technology",
    q: "Do you build websites and mobile apps too?",
    a: "Yes. We design and develop fast, modern websites, custom Android and iOS apps, web applications like dashboards and booking systems, and complete e-commerce stores. Every build is mobile-friendly, SEO-ready and designed to convert visitors into customers. We also provide ongoing support and maintenance after launch, so your product keeps improving instead of being left behind the moment it goes live."
  },
  {
    category: "Getting Started",
    q: "Where are you located and how do we start?",
    a: "We are based in Delta-1, Greater Noida, and we work with clients across India and beyond. Getting started is simple: call or message us, and we will set up a free consultation to understand your business and goals. From there we recommend the most practical starting point — often one high-impact project — and build the relationship from there. No pressure, no obligation, just a clear plan."
  },
  {
    category: "Contracts",
    q: "Do I have to sign a long-term lock-in contract?",
    a: "No. We believe clients should stay with us because they see tangible progress and return on investment, not because of restrictive contractual clauses. We offer month-to-month retainers for ongoing marketing as well as fixed-milestone contracts for web and app development."
  },
  {
    category: "Support",
    q: "What kind of reporting and support will I receive?",
    a: "You get direct communication with Kunal and your project team via phone and WhatsApp, plus transparent monthly analytical reports detailing traffic, leads, conversion rates, and action items."
  }
];

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = allFaqs.filter(
    f => f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      <div className="site-shell">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="eyebrow text-blue-600 mb-4">
            <span className="eyebrow-line" />
            Knowledge Base &amp; Answers
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Have questions about timelines, pricing, or our working process? Find your answers here or call us anytime.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions (e.g., pricing, apps, timeline)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm shadow-xs"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              No matching questions found. Call us directly at <a href="tel:+917428460083" className="text-blue-600 font-bold underline">+91 74284 60083</a>!
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.q} className="faq-item">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
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
            })
          )}
        </div>

        {/* Direct Call Section */}
        <div className="mt-16 text-center max-w-xl mx-auto p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <MessageCircle className="size-10 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900">Have a unique question not listed here?</h3>
          <p className="text-sm text-slate-600 mt-2">
            Speak directly with Kunal Bhati for straightforward, honest advice with no sales pressure.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+917428460083" className="button-primary">
              <Phone className="size-4" /> Call +91 74284 60083
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors text-sm">
              Contact Page <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FaqPage;
