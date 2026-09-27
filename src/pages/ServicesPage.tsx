import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'marketing' | 'tech'>('all');

  const filteredServices = servicesData.filter(s => {
    if (selectedFilter === 'marketing') return s.category === 'marketing';
    if (selectedFilter === 'tech') return s.category === 'tech';
    return true;
  });

  return (
    <div className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      <div className="site-shell">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="eyebrow text-blue-600 mb-4">
            <span className="eyebrow-line" />
            Comprehensive Capabilities
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Services Built for <span className="text-blue-600">Measurable Growth</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            From search engines to mobile app stores, explore our full spectrum of performance marketing and software engineering solutions.
          </p>

          {/* Filter Pills with DaisyUI tab styling */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'all' ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              All Services ({servicesData.length})
            </button>
            <button
              onClick={() => setSelectedFilter('marketing')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'marketing' ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Growth &amp; Marketing
            </button>
            <button
              onClick={() => setSelectedFilter('tech')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'tech' ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Web &amp; App Development
            </button>
          </div>
        </div>

        {/* 3D Illustrated Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="service-card group rounded-3xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 3D Realistic Card Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 mb-6 shadow-inner">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-blue-700 shadow-sm border border-slate-200/60">
                    {service.badge}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                    Category: {service.category === 'tech' ? 'Engineering' : 'Marketing'}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">0{index + 1}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Deliverables snippet */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Highlights:</p>
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="size-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all"
                >
                  View Details &amp; Pricing <ArrowRight className="size-4" />
                </Link>

                <Link
                  to="/contact"
                  className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-3">
              <Sparkles className="size-3.5 text-blue-300" />
              Integrated Growth Solutions
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Need a customized multi-service roadmap?</h3>
            <p className="text-slate-200 text-sm mt-2 max-w-xl leading-relaxed">
              We engineer multi-channel campaigns where your website, Google search campaigns, and mobile apps work seamlessly together.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              to="/contact"
              className="button-hero"
            >
              Schedule Free Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesPage;
