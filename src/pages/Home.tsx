import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  LineChart,
  Mail,
  MapPin,
  Phone,
  Search,
  Star,
  Target,
  TrendingUp,
  ShieldCheck,
  Headphones,
  Award,
  ExternalLink,
} from "lucide-react";
import heroImage from "../assets/socialtechs-hero.jpg";
import seoExpertCustomImg from "../assets/seo-expert-custom.jpg";
import growthMarketerImg from "../assets/growth-marketer-3d.jpg";
import techDevImg from "../assets/tech-dev-3d.jpg";
import { servicesData } from "../data/servicesData";

const outcomes = [
  { icon: TrendingUp, value: "More", label: "Traffic" },
  { icon: BarChart3, value: "Better", label: "Visibility" },
  { icon: Target, value: "Qualified", label: "Leads" },
  { icon: CircleCheck, value: "Sustainable", label: "Growth" },
];

const reviews = [
  {
    name: "Himanshu & IndiHunt Team",
    role: "IndiHunt",
    website: "https://indihunt.in",
    websiteDisplay: "indihunt.in",
    text: "Socialtechs played a pivotal role in building and scaling IndiHunt (indihunt.in). From architecting a super-fast, responsive web platform to handling technical SEO and keyword strategy, Kunal and his team executed everything with precision. Our organic impressions and active user retention grew exponentially within months.",
  },
  {
    name: "Radhika",
    role: "Radhika Boutique",
    website: "https://radhikaboutique.in",
    websiteDisplay: "radhikaboutique.in",
    text: "Running an ethnic fashion brand requires both stunning visuals and an effortless checkout experience. Socialtechs designed our entire e-commerce store at radhikaboutique.in and set up targeted Instagram ads and WhatsApp direct-order integrations. Our customer inquiries and repeat orders quadrupled!",
  },
  {
    name: "Sonu",
    role: "Units Converter",
    website: "https://unitsconverter.in",
    websiteDisplay: "unitsconverter.in",
    text: "For a utility tool platform like unitsconverter.in, raw speed, instant responsiveness, and zero layout shift are critical for Google rankings and user retention. Socialtechs optimized our front-end architecture, refined our UI/UX, and implemented a technical SEO roadmap that significantly increased our daily queries.",
  },
  {
    name: "Himanshu",
    role: "Caloi",
    website: "https://caloi.in",
    websiteDisplay: "caloi.in",
    text: "Socialtechs delivered a top-notch web experience and brand presence for caloi.in. Their strategic input on digital user flow, conversion rate optimization, and brand positioning made an immediate difference to our online footprint. Dependable, skilled, and highly proactive team.",
  },
];

const articles = [
  {
    id: "ai-digital-marketing",
    category: "Digital Marketing",
    title: "5 Reasons to Choose AI Digital Marketing in Delhi NCR",
    desc: "Discover how AI-driven keyword intelligence, audience segmentation, and automated bidding lower your cost per acquisition.",
    date: "Sep 2026",
    slug: "search-engine-optimization"
  },
  {
    id: "fast-mobile-websites",
    category: "Web Development",
    title: "Why a Fast, Mobile-Friendly Website Is Crucial for Business Growth",
    desc: "A 1-second delay in page load time can reduce conversions by 20%. Explore how modern React websites transform conversion rates.",
    date: "Sep 2026",
    slug: "website-development"
  },
  {
    id: "instagram-trust-building",
    category: "Social Media",
    title: "How Instagram & WhatsApp Build Trust Before the First Consultation",
    desc: "Learn the exact organic content framework that turns cold social media scrollers into paying, high-ticket clients.",
    date: "Sep 2026",
    slug: "social-media-marketing"
  }
];

const faqs = [
  {
    q: "Who does Socialtechs work with?",
    a: "Everyone — that is the point of what we do. We work with local shops, startups, service businesses, manufacturers, clinics, schools, e-commerce brands and established companies across India. You do not need to be a tech company or have a big budget to benefit. We shape the strategy around your size, your market and your goals.",
  },
  {
    q: "What services do you offer?",
    a: "We cover the complete digital spectrum: search engine optimization, social media marketing, paid advertising, content marketing, brand strategy, website development, mobile app development, custom web applications, e-commerce stores, and WhatsApp automation.",
  },
  {
    q: "How long before I see results?",
    a: "It depends on the service. Paid advertising can start bringing enquiries within 2 to 3 days of launch. Social media and content build momentum over two to three months. SEO is a longer game — meaningful ranking improvements typically show within three to six months. Websites deliver value from launch day.",
  },
  {
    q: "How much do your services cost?",
    a: "Every business is different, so we quote based on what you actually need rather than selling fixed packages you do not. After a short discovery call we prepare a clear proposal with transparent pricing — no hidden costs, no lock-in surprises.",
  },
  {
    q: "Do you build websites and mobile apps too?",
    a: "Yes. We design and develop fast, modern websites, custom Android and iOS apps, web applications like dashboards and booking systems, and complete e-commerce stores with post-launch support and maintenance.",
  },
  {
    q: "Where are you located and how do we start?",
    a: "We are based in Delta-1, Greater Noida (Near Shivam Plaza), and we work with clients across India and beyond. Getting started is simple: call or message us, and we will set up a free consultation to understand your business and goals.",
  },
];

const AnimatedLetters: React.FC<{
  text: string;
  delayOffset?: number;
  charDelay?: number;
  className?: string;
}> = ({ text, delayOffset = 0, charDelay = 0.03, className = "" }) => {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="char-reveal"
          style={{
            animationDelay: `${delayOffset + i * charDelay}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="overflow-hidden bg-slate-50 text-slate-900 pt-16 sm:pt-20">
      {/* Hero Section */}
      <section id="home" className="hero-section relative flex min-h-[500px] sm:min-h-[560px] lg:min-h-[580px] items-start">
        <img
          src={heroImage}
          alt="Business team collaborating with a digital strategist"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="site-shell relative z-10 pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16">
          <div className="max-w-[710px]">
            {/* Eyebrow */}
            <p className="eyebrow text-slate-300 hero-fade-up" style={{ animationDelay: '0.05s' }}>
              <span className="eyebrow-line" />
              Digital marketing &amp; development
            </p>

            {/* Letter by letter animated headline */}
            <h1 className="mt-2 sm:mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-white">
              <AnimatedLetters text="Digital growth built for " delayOffset={0.15} charDelay={0.032} />
              <AnimatedLetters
                text="every business."
                delayOffset={0.95}
                charDelay={0.035}
                className="text-blue-400"
              />
            </h1>

            {/* Smooth staggered paragraph */}
            <p
              className="mt-4 sm:mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-200 hero-fade-up"
              style={{ animationDelay: '1.45s' }}
            >
              We turn strategy, creativity and performance marketing into a stronger online presence — for businesses of every size, in every industry.
            </p>

            {/* Smooth staggered CTA buttons */}
            <div
              className="mt-6 sm:mt-7 flex flex-wrap gap-3.5 hero-fade-up"
              style={{ animationDelay: '1.7s' }}
            >
              <Link to="/contact" className="button-hero">
                Start a conversation <ArrowRight className="size-4" />
              </Link>
              <Link to="/services" className="button-ghost">
                Explore our services <ChevronRight className="size-4" />
              </Link>
            </div>

            {/* Smooth staggered badges */}
            <div
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase text-slate-300 hero-fade-up"
              style={{ animationDelay: '1.9s' }}
            >
              <span>More traffic</span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>More leads</span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>More growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Bar */}
      <section id="outcomes" className="relative z-20 -mt-8 sm:-mt-10 pb-12">
        <div className="site-shell">
          <div className="outcome-panel grid grid-cols-2 lg:grid-cols-4">
            {outcomes.map(({ icon: Icon, value, label }) => (
              <div key={label} className="outcome-item group">
                <Icon className="size-6 text-blue-600 transition-transform duration-300 group-hover:-translate-y-1" />
                <div>
                  <strong className="block text-xl sm:text-2xl font-extrabold text-slate-900">{value}</strong>
                  <span className="text-sm text-slate-500 font-medium">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features: What Makes Us Different */}
      <section className="py-16 bg-slate-50">
        <div className="site-shell">
          <div className="p-8 sm:p-12 rounded-3xl bg-blue-50/80 border border-blue-100 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
              <div>
                <p className="eyebrow text-blue-600 mb-2"><span className="eyebrow-line" />Our Core Features</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">What Makes Us Different?</h2>
              </div>
              <p className="text-slate-600 text-sm max-w-md leading-relaxed">
                Our unique blend of commercial strategy, modern code architecture, and high-impact performance marketing sets us apart.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* 3D Expert Showcase Image Card */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-emerald-50 via-teal-50 to-blue-50 p-3 border border-emerald-100/80 shadow-lg flex items-center justify-center max-w-[380px] w-full group">
                  <img
                    src={seoExpertCustomImg}
                    alt="SEO & Digital Marketing Specialist"
                    className="w-full h-auto object-contain rounded-2xl drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 shadow-md flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600 block">Verified Impact</span>
                      <strong className="text-sm font-bold text-slate-900">#1 Google Ranking SEO</strong>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800">
                      +78% Traffic
                    </span>
                  </div>
                </div>
              </div>

              {/* 4 Feature Cards in 2x2 Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: TrendingUp, title: "Increase Traffic", desc: "We analyze your business goals, target audience, and market trends to flood your channels with intent buyers." },
                  { icon: Search, title: "Improve Ranking", desc: "Top search positions for your core revenue terms through clean white-hat optimization." },
                  { icon: CircleCheck, title: "Sustainable Growth", desc: "Predictable, repeatable client acquisition pipelines that compound month over month." },
                  { icon: Target, title: "Targeted Audience", desc: "Pinpoint customer demographic and intent mapping to stop wasted advertising budget." }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="p-6 rounded-2xl bg-white border border-blue-100 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                          <Icon className="size-5" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (All 12 Services matching reference with click to service detail) */}
      <section id="services" className="section-space bg-white">
        <div className="site-shell">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-blue-600 mb-3"><span className="eyebrow-line" />Our Services</p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Unlock Your Website&apos;s Potential with Our Services
            </h2>
            <p className="mt-4 text-slate-600 text-base">
              Elevate your online presence and attract your target audience with our comprehensive digital marketing, branding and software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className="group rounded-3xl p-6 sm:p-7 bg-slate-50/70 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    {/* Circle badge icon matching reference */}
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-[2px] shadow-md shadow-blue-500/15 group-hover:scale-105 transition-transform">
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">0{index + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Clickable link directly navigating to the service detail page */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all"
                  >
                    Explore more <ArrowRight className="size-4" />
                  </Link>

                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-semibold text-slate-500 hover:text-blue-600"
                  >
                    Discuss service &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="button-primary">
              View Complete Services Portfolio <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Tailored Strategies */}
      <section className="section-space bg-slate-50 border-t border-slate-200">
        <div className="site-shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-square sm:aspect-[4/3] bg-white group">
            <img
              src={growthMarketerImg}
              alt="Socialtechs digital growth strategist"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay badge */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-200 shadow-md flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-800">150%+ Client ROI Focus</span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="eyebrow text-blue-600"><span className="eyebrow-line" />Why Choose Us?</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Our Tailored Strategies for Your Success
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Crafting precision in every detail, our tailored strategies pave the way for your unparalleled success in the modern digital landscape.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Award className="size-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">First Working Process</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">We analyze your needs, setting the stage for a bespoke and impactful growth strategy.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="size-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Dedicated Expert Team</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">Empower your success with our specialized experts committed to navigating digital complexity.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0">
                  <Headphones className="size-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">24/7 Dedicated Support</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">Experience peace of mind with prompt assistance, direct WhatsApp access, and personalized service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech & Development Excellence Spotlight */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="site-shell">
          <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="eyebrow text-blue-400"><span className="eyebrow-line" />High-Performance Tech</p>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Websites &amp; Apps Engineered for <span className="text-blue-400">Extreme Speed</span>.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed max-w-xl">
                We combine modern tech stacks (React, Vite, Next.js, Node, Cloud Architecture) with commercial marketing strategies to build lightning-fast web apps that convert visitors into revenue.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <span className="text-2xl font-extrabold text-blue-400 block">100/100</span>
                  <span className="text-xs text-slate-400 font-medium">Core Web Vitals</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <span className="text-2xl font-extrabold text-emerald-400 block">&lt; 1.2s</span>
                  <span className="text-xs text-slate-400 font-medium">Page Load Speeds</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 col-span-2 sm:col-span-1">
                  <span className="text-2xl font-extrabold text-cyan-400 block">24/7</span>
                  <span className="text-xs text-slate-400 font-medium">Direct Tech Support</span>
                </div>
              </div>
              <div className="pt-2">
                <Link to="/contact" className="button-hero inline-flex">
                  Build Your Digital Platform <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-blue-900/40 to-slate-900/60 p-3 border border-blue-500/30 shadow-2xl max-w-[360px] w-full">
                <img
                  src={techDevImg}
                  alt="Full stack developer building digital solutions"
                  className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process: Map Your Roadmap */}
      <section id="process" className="section-space bg-slate-900 text-white">
        <div className="site-shell">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow text-blue-400 mb-2"><span className="eyebrow-line" />Map Your Roadmap</p>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Our Proven Work Process</h2>
            </div>
            <p className="text-slate-300 text-sm max-w-md leading-relaxed">
              Our proven work process blends experience, precision, and innovation for consistently outstanding business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { num: "1", title: "Keyword & Market Research", desc: "We pinpoint and leverage the most impactful search terms and buyer channels, aligning your content seamlessly." },
              { num: "2", title: "Build & Strategic Optimization", desc: "We secure high-converting landing pages, authoritative backlinks, and high-impact campaigns boosting your credibility." },
              { num: "3", title: "Fast Ranking & Scaled Growth", desc: "Our goal is clear: secure top rankings and inbound inquiries through meticulous continuous optimization." }
            ].map((step, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 font-extrabold text-2xl flex items-center justify-center mb-6">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700/60">
                  <Link to="/process" className="text-xs font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5">
                    View full process timeline <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Stories & Testimonials with Quotation marks */}
      <section id="reviews" className="section-space bg-white">
        <div className="site-shell">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow text-blue-600 mb-3"><span className="eyebrow-line" />Our Client&apos;s Testimonials</p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Client Stories of Socialtechs
            </h2>
            <p className="mt-4 text-slate-600 text-base">
              Dive into the success stories of Socialtechs&apos;s clients — where digital growth dreams become reality.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {reviews.map(({ name, role, text, website, websiteDisplay }) => (
              <figure key={name} className="relative rounded-3xl p-8 sm:p-10 bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between">
                {/* Background quote mark watermark */}
                <div className="absolute top-6 left-6 text-7xl font-serif text-blue-100 select-none pointer-events-none leading-none -z-0">
                  &ldquo;
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <LineChart className="size-5 text-blue-500" />
                  </div>

                  <blockquote className="text-sm leading-relaxed text-slate-700 pt-2 italic">
                    &ldquo;{text}&rdquo;
                  </blockquote>
                </div>

                <figcaption className="relative z-10 mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <strong className="block text-sm font-bold text-slate-900">{name}</strong>
                    <span className="text-xs text-slate-500 font-medium">{role}</span>
                  </div>
                  <a
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200 transition-colors"
                  >
                    <span>{websiteDisplay}</span>
                    <ExternalLink className="size-3" />
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/reviews" className="button-primary">
              Read All Verified Client Reviews <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News & Articles Section */}
      <section className="section-space bg-slate-50 border-t border-slate-200">
        <div className="site-shell">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow text-blue-600 mb-2"><span className="eyebrow-line" />Insights &amp; Updates</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Checkout Latest News Updates &amp; Articles
              </h2>
            </div>
            <Link to="/services" className="text-sm font-bold text-blue-600 hover:text-blue-700">
              Browse All Topics &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art) => (
              <div key={art.id} className="group rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      {art.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{art.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {art.desc}
                  </p>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <Link
                    to={`/services/${art.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                  >
                    Read More <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-space bg-white">
        <div className="site-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow text-blue-600"><span className="eyebrow-line" />FAQ</p>
            <h2 className="section-title">Questions, answered.</h2>
            <p className="section-copy mt-6">
              Everything you need to know before getting started. Still unsure about something? Call us — we are happy to help.
            </p>
            <a href="tel:+917428460083" className="button-primary mt-8">
              <Phone className="size-4" /> Ask us directly
            </a>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, index) => {
              const open = openFaq === index;
              return (
                <div key={q} className="faq-item">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="faq-trigger"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900">{q}</span>
                    <ChevronDown className={`size-5 shrink-0 text-blue-600 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`faq-panel ${open ? "open" : ""}`}>
                    <p className="text-sm leading-relaxed text-slate-600 pt-2 border-t border-slate-100">{a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Band */}
      <section id="contact" className="section-space bg-slate-50">
        <div className="site-shell">
          <div className="contact-band">
            <div className="relative z-10 max-w-2xl">
              <p className="eyebrow text-blue-300"><span className="eyebrow-line" />Bring Success With Socialtechs!</p>
              <h2 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Reach Out and Elevate Your Success Now!
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
                Our proven work process blends experience, precision, and innovation for consistently outstanding business results.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="button-hero">
                  Get Started with Us <ArrowRight className="size-4" />
                </Link>
                <a href="tel:+917428460083" className="button-ghost">
                  Call Kunal Bhati <Phone className="size-4" />
                </a>
              </div>
            </div>
            <div className="relative z-10 grid gap-4 lg:w-[380px]">
              <a href="tel:+917428460083" className="contact-card">
                <Phone className="size-5 text-blue-300 shrink-0" />
                <div>
                  <span>Phone</span>
                  <strong>+91 74284 60083</strong>
                </div>
              </a>
              <a href="mailto:kunalbhati596@gmail.com" className="contact-card">
                <Mail className="size-5 text-blue-300 shrink-0" />
                <div>
                  <span>Email</span>
                  <strong>kunalbhati596@gmail.com</strong>
                </div>
              </a>
              <div className="contact-card">
                <MapPin className="size-5 text-blue-300 shrink-0" />
                <div>
                  <span>Visit</span>
                  <strong>Delta-1, Greater Noida<br />Near Shivam Plaza</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
