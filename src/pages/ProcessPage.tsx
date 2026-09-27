import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Compass,
  Code2,
  Rocket,
  RefreshCw,
  Target,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Phone,
  Mail,
  Layers,
  ChevronDown,
  LineChart,
  Award,
  Flame,
  Check
} from 'lucide-react';

interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  timeline: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  tag: string;
  summary: string;
  coreTasks: string[];
  deliverables: string[];
  toolsUsed: string[];
  expectedOutcome: string;
}

const detailedSteps: ProcessStep[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Discovery & Deep Business Audit",
    subtitle: "Root-Cause Diagnosis & Foundation",
    timeline: "Days 1 – 4",
    icon: Search,
    color: "from-blue-600 to-cyan-500",
    tag: "Phase 1: Research",
    summary: "Before writing a single line of code or launching an ad, we immerse ourselves in your business model, customer lifetime value, market competition, and digital bottlenecks.",
    coreTasks: [
      "1-on-1 strategic discovery interview with Kunal and technical leads",
      "Comprehensive website speed, accessibility, and Core Web Vitals audit",
      "Existing Google Ads & Meta Ads historical data forensics",
      "Direct competitor traffic benchmarking and market share analysis"
    ],
    deliverables: [
      "Digital Health Audit Report (30+ check points)",
      "Customer Persona & Value Matrix Document",
      "Baseline Analytics & Revenue Conversion Audit"
    ],
    toolsUsed: ["Google Analytics 4", "SEMrush", "Google Search Console", "Hotjar", "Lighthouse"],
    expectedOutcome: "Crystal clarity on existing roadblocks and quick-win opportunities to capture immediate ROI."
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "Market Intelligence & Keyword Mapping",
    subtitle: "Intent-Driven Channel Blueprint",
    timeline: "Days 5 – 8",
    icon: Target,
    color: "from-indigo-600 to-blue-500",
    tag: "Phase 2: Strategy",
    summary: "We map out the exact search queries, demographic clusters, and digital touchpoints where high-intent buyers in your market are actively searching for solutions.",
    coreTasks: [
      "High-intent commercial keyword clustering & search volume forecasting",
      "Negative keyword lists curation to prevent wasted ad budget",
      "Customer journey mapping from initial awareness to final inquiry",
      "Budget simulation model with projected ROAS and cost-per-lead"
    ],
    deliverables: [
      "Master Keyword & Target Intent Architecture",
      "Channel Prioritization & Media Spend Allocation Blueprint",
      "Quarterly KPI Roadmap (Traffic, Leads, Revenue Goals)"
    ],
    toolsUsed: ["Ahrefs", "Google Keyword Planner", "Meta Ad Library", "SpyFu"],
    expectedOutcome: "Zero guesswork: a validated roadmap targeting only ready-to-buy prospects."
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "UX Architecture, Wireframes & Brand Messaging",
    subtitle: "Psychological Conversion Design",
    timeline: "Days 9 – 14",
    icon: Compass,
    color: "from-purple-600 to-indigo-500",
    tag: "Phase 3: Creative",
    summary: "We construct conversion-focused wireframes, persuasive sales copy, and high-impact visual design concepts that compel visitors to take immediate action.",
    coreTasks: [
      "Figma UX wireframing with psychological conversion triggers",
      "Direct-response copywriting for headlines, landing pages, and CTAs",
      "Brand visual harmony: typography pairings, color systems & iconography",
      "Interactive clickable prototypes for stakeholder review and feedback"
    ],
    deliverables: [
      "Figma Prototype (Mobile, Tablet, and Desktop)",
      "Complete Conversion Copywriting Dossier",
      "Brand Style Guide & Design Asset Library"
    ],
    toolsUsed: ["Figma", "Adobe Creative Cloud", "Whimsical", "Notion"],
    expectedOutcome: "A polished, modern visual interface built from the ground up to convert traffic into leads."
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Agile Engineering & High-Performance Coding",
    subtitle: "Clean Code & Rapid Execution",
    timeline: "Days 15 – 24",
    icon: Code2,
    color: "from-emerald-600 to-teal-500",
    tag: "Phase 4: Engineering",
    summary: "Our full-stack developers write lightning-fast, secure, and maintainable code using React, TypeScript, and modern styling architectures.",
    coreTasks: [
      "Modular frontend component development with 100% responsiveness",
      "Integration of WhatsApp click-to-chat, lead capture forms & booking systems",
      "Payment gateway integrations (UPI, Razorpay, Stripe) with instant confirmation",
      "Technical on-page SEO integration (schema markup, semantic HTML5, XML sitemaps)"
    ],
    deliverables: [
      "Production-ready codebase with zero-dependency bloat",
      "Sub-1.2-second load times on 4G/5G mobile connections",
      "End-to-end security compliance, SSL certificates & database protection"
    ],
    toolsUsed: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "GitHub"],
    expectedOutcome: "A rock-solid, ultra-fast digital engine built to handle high traffic without crashing."
  },
  {
    id: "step-5",
    stepNumber: "05",
    title: "Ad Funnels, Pixel Tracking & Campaign Setup",
    subtitle: "Precision Lead Generation Infrastructure",
    timeline: "Days 25 – 28",
    icon: Flame,
    color: "from-amber-600 to-orange-500",
    tag: "Phase 5: Performance",
    summary: "We build server-side tracking, configure Google Search & Meta ad sets, upload creative variants, and test lead routing before going live.",
    coreTasks: [
      "Server-side Meta Conversions API & Google Tag Manager tracking",
      "Creation of high-CTR ad creatives, video hooks, and carousel banners",
      "CRM and instant WhatsApp notification routing for incoming leads",
      "A/B split-testing parameters for landing pages and offer angles"
    ],
    deliverables: [
      "Full tracking verification report with 100% data fidelity",
      "Live ad campaigns across Google Search, Display, and Meta",
      "Automated lead delivery directly to your phone & email inbox"
    ],
    toolsUsed: ["Meta Ads Manager", "Google Ads", "Google Tag Manager", "WhatsApp API"],
    expectedOutcome: "Immediate lead generation infrastructure ready to capture inquiries from day one."
  },
  {
    id: "step-6",
    stepNumber: "06",
    title: "Rigorous QA, Launch & Indexation",
    subtitle: "Zero-Downtime Live Deployment",
    timeline: "Days 29 – 30",
    icon: Rocket,
    color: "from-blue-600 to-indigo-600",
    tag: "Phase 6: Go-Live",
    summary: "We run exhaustive cross-device QA, submit pages for rapid Google indexing, and initiate the public launch with zero downtime.",
    coreTasks: [
      "Cross-browser and mobile device compatibility verification",
      "Instant submission to Google Search Console and Bing Webmaster",
      "SSL verification, DNS propagation, and backup system automation",
      "Live payment and form submission dry-run testing"
    ],
    deliverables: [
      "Successful live deployment certificate",
      "Client walkthrough recording & administrative access keys",
      "Google Indexation confirmation report"
    ],
    toolsUsed: ["Cloudflare", "BrowserStack", "Google Search Console", "Vercel / AWS"],
    expectedOutcome: "Flawless, seamless public launch with instant search presence and active conversion funnels."
  },
  {
    id: "step-7",
    stepNumber: "07",
    title: "Continuous Optimization, A/B Testing & Revenue Scaling",
    subtitle: "Compound Growth & Ongoing Mastery",
    timeline: "Continuous Monthly",
    icon: RefreshCw,
    color: "from-rose-600 to-pink-500",
    tag: "Phase 7: Compounding",
    summary: "Launch is only day one. We analyze real-world customer interactions weekly, eliminate underperforming ads, scale winning keywords, and defend top Google rankings.",
    coreTasks: [
      "Weekly negative keyword scrub and bidding optimization",
      "Landing page heat-map analysis to eliminate drop-off points",
      "High-authority backlink outreach and ongoing SEO authority building",
      "Transparent monthly video reviews and strategic roadmap planning"
    ],
    deliverables: [
      "Monthly Plain-English Performance & ROI Reports",
      "Bi-weekly A/B creative and headline split-test updates",
      "Dedicated WhatsApp & phone line with Kunal Bhati"
    ],
    toolsUsed: ["Looker Studio", "Hotjar", "SEMrush", "Google Analytics 4"],
    expectedOutcome: "Constantly decreasing cost per lead and steadily climbing organic market dominance."
  }
];

export const ProcessPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>("step-1");
  const [expandedDetails, setExpandedDetails] = useState<{ [key: string]: boolean }>({
    "step-1": true
  });

  const toggleExpand = (id: string) => {
    setExpandedDetails(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      <div className="site-shell">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-widest mb-4">
            <Sparkles className="size-3.5 text-blue-600" />
            7-Stage Architectural Growth Tree
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Proven <span className="text-blue-600">Work Process</span>
          </h1>
          
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            A disciplined, tree-structured roadmap that transforms undefined goals into predictable revenue, top Google rankings, and high-converting digital assets.
          </p>
        </div>

        {/* Quick Stage Navigation Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-16 max-w-4xl mx-auto">
          {detailedSteps.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setActiveStep(s.id);
                setExpandedDetails(prev => ({ ...prev, [s.id]: true }));
                const element = document.getElementById(s.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeStep === s.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              <span className="font-mono text-[10px] opacity-75">{s.stepNumber}</span>
              <span>{s.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Tree-Structured Interactive Timeline */}
        <div className="relative max-w-5xl mx-auto mb-24">
          {/* Central Vertical Trunk Line with Glowing Gradient */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 sm:-translate-x-1/2 bg-gradient-to-b from-blue-600 via-indigo-600 via-teal-500 to-rose-500 rounded-full shadow-sm" />

          {/* Steps Loop */}
          <div className="space-y-12 sm:space-y-16">
            {detailedSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;
              const isExpanded = !!expandedDetails[step.id];

              return (
                <div
                  key={step.id}
                  id={step.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Central Node Pin */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-8 z-20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-white border-2 border-blue-500 shadow-lg shadow-blue-500/20 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:rotate-6">
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${step.color} flex items-center justify-center text-white shadow-xs`}>
                        <Icon className="size-4" />
                      </div>
                    </div>
                    {/* Glowing pulse ring */}
                    <div className="absolute inset-0 rounded-2xl bg-blue-400 opacity-25 animate-ping pointer-events-none" />
                  </div>

                  {/* Empty Spacer on opposite side for desktop layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card (Branches to left or right) */}
                  <div className="w-full sm:w-1/2 pl-14 sm:pl-0 sm:px-8">
                    <div
                      className={`relative rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:border-blue-300 ${
                        activeStep === step.id ? 'ring-2 ring-blue-500/50 border-blue-400' : ''
                      }`}
                    >
                      {/* Branch indicator tag */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold bg-blue-50 text-blue-700 border border-blue-200">
                            STEP {step.stepNumber}
                          </span>
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            {step.tag}
                          </span>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                          {step.timeline}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h2>
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mt-1">
                        {step.subtitle}
                      </p>

                      <p className="text-sm leading-relaxed text-slate-600 mt-3">
                        {step.summary}
                      </p>

                      {/* Expandable Deep Details */}
                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t border-slate-100 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                          {/* Core Tasks */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                              <Zap className="size-3.5 text-blue-600" />
                              Key Action Items:
                            </h4>
                            <div className="space-y-2">
                              {step.coreTasks.map((task, i) => (
                                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                                  <Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{task}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Deliverables */}
                          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2 flex items-center gap-1.5">
                              <Award className="size-3.5 text-blue-600" />
                              Verified Deliverables:
                            </h4>
                            <ul className="space-y-1.5 text-xs text-slate-700">
                              {step.deliverables.map((deliv, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                  <strong className="font-semibold text-slate-800">{deliv}</strong>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tools Badge Strip */}
                          <div>
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                              Tooling &amp; Stack:
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {step.toolsUsed.map((tool, i) => (
                                <span
                                  key={i}
                                  className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Expected Outcome Highlight */}
                          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
                            <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <strong>Outcome: </strong>
                              <span>{step.expectedOutcome}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Expand / Collapse Toggle Button */}
                      <button
                        type="button"
                        onClick={() => toggleExpand(step.id)}
                        className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-between text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
                      >
                        <span>{isExpanded ? 'Hide Deep Blueprint' : 'View Full Blueprint & Deliverables'}</span>
                        <ChevronDown
                          className={`size-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Guarantees Strip */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 mb-20 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow text-blue-600 mb-2"><span className="eyebrow-line" />Our Working Principles</p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Our Process Delivers Consistent Success
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <ShieldCheck className="size-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Complete Transparency</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                No black-box secrecy. You get full administrative ownership of your code, ad accounts, and analytics dashboards with weekly video summaries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                <Layers className="size-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Cross-Channel Synergy</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your web development, search engine rankings, Meta ads, and social media feed data into each other rather than operating in disconnected silos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <LineChart className="size-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Commercial Focus</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We measure success in qualified inbound phone calls, WhatsApp messages, and bottom-line revenue — not useless vanity impressions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="contact-band">
          <div className="max-w-xl">
            <p className="eyebrow text-blue-300 mb-2"><span className="eyebrow-line" />Map Your Project</p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Ready to begin Stage 01 with Kunal Bhati?
            </h2>
            <p className="mt-4 text-slate-200 text-sm leading-relaxed">
              Book your free discovery consultation today and receive a complimentary 30-point digital health audit for your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="button-hero">
                Start Stage 01 Discovery <ArrowRight className="size-4" />
              </Link>
              <a href="tel:+917428460083" className="button-ghost">
                Call +91 74284 60083 <Phone className="size-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-3 lg:w-[360px]">
            <a href="tel:+917428460083" className="contact-card">
              <Phone className="size-5 text-blue-300 shrink-0" />
              <div>
                <span>Direct Strategy Line</span>
                <strong>+91 74284 60083</strong>
              </div>
            </a>
            <a href="mailto:kunalbhati596@gmail.com" className="contact-card">
              <Mail className="size-5 text-blue-300 shrink-0" />
              <div>
                <span>Email Inquiries</span>
                <strong>kunalbhati596@gmail.com</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProcessPage;
