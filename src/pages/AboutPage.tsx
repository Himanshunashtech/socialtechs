import React from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Users,
  Building2,
  Award,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import founderImg from '../assets/kunal-bhati-founder.webp';
import teamImg from '../assets/socialtechs-team-100.webp';
import officeImg from '../assets/socialtechs-office-hq.webp';
import { SEO } from '../components/SEO';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      <SEO
        title="About Us - Digital Growth Pioneers"
        description="Learn about Socialtechs, founded by Kunal Bhati. We are a premier digital marketing and web development agency in Greater Noida committed to ROI and transparency."
        canonical="https://socialtechs.in/about"
      />
      <div className="site-shell">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow text-blue-600 mb-4">
            <span className="eyebrow-line" />
            About Socialtechs
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            100+ Innovators. <br />
            <span className="text-blue-600">One Vision of Growth.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            From our cutting-edge headquarters in Delta-1, Greater Noida, Socialtechs blends full-stack engineering, performance marketing, and creative brand strategy to scale ambitious businesses across India.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {[
            { label: 'In-House Team', value: '100+', sub: 'Engineers & Marketers', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Projects Delivered', value: '500+', sub: 'Web, Apps & Ads', icon: Award, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'Client Retention', value: '98%', sub: 'Long-Term Partners', icon: ShieldCheck, color: 'text-purple-600', bg: 'bg-purple-50' },
            { label: 'Average Growth ROI', value: '3.5x', sub: 'Inbound Inquiries', icon: TrendingUp, color: 'text-amber-600', bg: 'bg-amber-50' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
                  <Icon className="size-6" />
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 block">{stat.value}</span>
                  <span className="text-sm font-bold text-slate-800 block mt-1">{stat.label}</span>
                  <span className="text-xs text-slate-500 font-medium">{stat.sub}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Founder & Leadership Spotlight */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-12 mb-20 shadow-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Founder Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-square max-w-[380px] w-full group">
                <img
                  src={founderImg}
                  alt="Kunal Bhati, Founder & Managing Director of Socialtechs"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base">Kunal Bhati</h4>
                      <p className="text-xs font-bold text-blue-600">Founder &amp; Managing Director</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      Leadership
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Message & Bio */}
            <div className="lg:col-span-7 space-y-5 text-slate-600">
              <p className="eyebrow text-blue-600"><span className="eyebrow-line" />Founder&apos;s Vision</p>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                &ldquo;We treat your business and budget with the same passion as our own.&rdquo;
              </h2>
              <blockquote className="text-sm sm:text-base leading-relaxed text-slate-700 border-l-4 border-blue-600 pl-4 italic">
                &ldquo;I started Socialtechs with one clear principle: cut through vanity metrics and deliver pure, commercial digital growth. Whether crafting high-performance code or managing millions in ad spend, our team takes pride in transparency, precision, and authentic relationships.&rdquo;
              </blockquote>
              <p className="text-sm leading-relaxed">
                Under Kunal&apos;s leadership, Socialtechs has grown into an agile powerhouse of 100+ developers, performance marketers, creative designers, and brand architects who have transformed hundreds of businesses across India.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+917428460083"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-all"
                >
                  <Phone className="size-3.5" /> Call Kunal Directly (+91 74284 60083)
                </a>
                <a
                  href="mailto:kunalbhati596@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all"
                >
                  <Mail className="size-3.5 text-blue-600" /> kunalbhati596@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 100+ Team Showcase Section */}
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-12 mb-20 shadow-xl overflow-hidden relative">
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <p className="eyebrow text-blue-400 mb-2">
                  <span className="eyebrow-line" />Our Greatest Asset
                </p>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                  Meet Our 100+ Member <span className="text-blue-400">Powerhouse</span>.
                </h2>
              </div>
              <p className="text-slate-300 text-sm max-w-md leading-relaxed">
                A unified collective of digital marketing strategists, full-stack software engineers, creative directors, and SEO masters working together under one roof.
              </p>
            </div>

            {/* Large Team Photo */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700 shadow-2xl mb-10 group">
              <img
                src={teamImg}
                alt="Socialtechs 100+ member digital marketing and engineering team"
                className="w-full h-auto object-cover max-h-[520px] group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:bottom-6 sm:right-auto bg-slate-950/85 backdrop-blur-md px-5 py-3 rounded-2xl border border-slate-700 flex items-center gap-3">
                <Users className="size-5 text-blue-400" />
                <span className="text-xs sm:text-sm font-bold text-white">100+ Full-Time Specialists in Delhi NCR</span>
              </div>
            </div>

            {/* Team Disciplines Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { title: 'Engineering & Dev', count: '35+ Tech Specialists', desc: 'React, Node, Cloud & Mobile Apps' },
                { title: 'Performance Ads', count: '25+ Media Buyers', desc: 'Meta, Google Ads & ROI Optimization' },
                { title: 'SEO & Content', count: '22+ Search Masters', desc: 'Technical SEO & Keyword Dominance' },
                { title: 'Creative & UI/UX', count: '18+ Brand Designers', desc: '3D Graphics, Video & Design Systems' },
              ].map((disc, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <span className="text-xs font-extrabold text-blue-400 uppercase tracking-wider block">{disc.count}</span>
                  <h4 className="text-base font-bold text-white mt-1 mb-1">{disc.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{disc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Office & Headquarters Tour */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-12 mb-20 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <p className="eyebrow text-blue-600"><span className="eyebrow-line" />Our Headquarters</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Built for High-Velocity Innovation.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our state-of-the-art office located at Delta-1, Greater Noida is equipped with modern collaborative zones, high-tech war rooms, live performance monitoring lounges, and biophilic green architecture designed to inspire groundbreaking ideas.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Delta-1, Greater Noida, Near Shivam Plaza (Easy Metro & Road Access)',
                  'Live client war rooms and interactive strategy pods',
                  'Dedicated 24/7 technical deployment and marketing support center'
                ].map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm font-semibold text-slate-800">
                    <span className="check shrink-0 mt-0.5"><Check className="size-3.5" /></span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/917428460083?text=Hi%20Kunal%2C%20I%20would%20like%20to%20schedule%20a%20visit%20to%20your%20Greater%20Noida%20office"
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary inline-flex"
                >
                  <Building2 className="size-4" /> Schedule an Office Visit &rarr;
                </a>
              </div>
            </div>

            {/* Office Image */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/10] group">
                <img
                  src={officeImg}
                  alt="Socialtechs modern digital agency office in Greater Noida"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-200 shadow-md flex items-center gap-2">
                  <MapPin className="size-4 text-blue-600" />
                  <span className="text-xs font-bold text-slate-900">Delta-1, Greater Noida Campus</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location & CTA */}
        <div className="contact-band">
          <div className="max-w-xl">
            <p className="eyebrow text-blue-300 mb-2"><span className="eyebrow-line" />Visit or Call Us</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Let&apos;s discuss your next project.</h2>
            <p className="mt-4 text-slate-200 text-sm leading-relaxed">
              We welcome in-person meetings at our Greater Noida office or online discovery calls.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="tel:+917428460083" className="button-hero">
                Call +91 74284 60083 <Phone className="size-4" />
              </a>
              <Link to="/contact" className="button-ghost">
                Send a Message <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 lg:w-[360px]">
            <div className="contact-card">
              <MapPin className="size-5 text-blue-300 shrink-0" />
              <div>
                <span>Headquarters</span>
                <strong>Delta-1, Greater Noida, Near Shivam Plaza</strong>
              </div>
            </div>
            <div className="contact-card">
              <Mail className="size-5 text-blue-300 shrink-0" />
              <div>
                <span>Email Support</span>
                <strong>kunalbhati596@gmail.com</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
