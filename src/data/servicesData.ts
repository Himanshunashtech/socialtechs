import seoImg from '../assets/seo-3d.jpg';
import webDevImg from '../assets/web-dev-3d.jpg';
import appDevImg from '../assets/app-dev-3d.jpg';
import marketingImg from '../assets/marketing-3d.jpg';
import ecommerceImg from '../assets/ecommerce-3d.jpg';
import brandingImg from '../assets/branding-3d.jpg';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  badge: string;
  category: 'marketing' | 'tech' | 'creative';
  metrics: { value: string; label: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    slug: "website-development",
    title: "Website Development",
    shortDesc: "Crafting responsive and engaging websites that reflect your brand identity, ensuring seamless user experience and optimal functionality to drive business growth.",
    fullDesc: "We build modern, blazing-fast websites using React, TypeScript, and modern styling architectures. Every website is engineered for maximum conversion, flawless mobile responsiveness, and high Google PageSpeed scores.",
    image: webDevImg,
    badge: "High Conversion",
    category: "tech",
    metrics: [
      { value: "< 1.2s", label: "Ultra-Fast Load Time" },
      { value: "100%", label: "Mobile Responsive" },
      { value: "99+", label: "Performance Score" }
    ],
    deliverables: [
      "Custom responsive web development with modern React/TypeScript",
      "Conversion-focused landing pages and interactive forms",
      "Full SEO foundation, schema markup, and Google Analytics setup",
      "Free domain/SSL setup and continuous cloud maintenance"
    ],
    faqs: [
      {
        q: "Will my website look great on mobile and tablets?",
        a: "Yes! Every website is built mobile-first and rigorously tested on all screen sizes."
      },
      {
        q: "How long does a website take to build?",
        a: "A standard business website typically takes 7 to 14 days from initial wireframe approval to live launch."
      }
    ]
  },
  {
    id: "branding",
    slug: "branding",
    title: "Branding & Visual Identity",
    shortDesc: "Unleash the power of a compelling brand identity that resonates with your audience, creating trust and recognition that sets your business apart in a competitive market.",
    fullDesc: "Our branding team designs iconic visual identities, color palettes, typography systems, and comprehensive brand guidelines that establish your credibility and make you top-of-mind for customers.",
    image: brandingImg,
    badge: "Market Leader",
    category: "creative",
    metrics: [
      { value: "100%", label: "Unique Brand Identity" },
      { value: "Full", label: "Brand Guidelines Pack" },
      { value: "3x", label: "Customer Recall Rate" }
    ],
    deliverables: [
      "Brand strategy, mission formulation, and value proposition",
      "Logo suite (Primary, Secondary, Icon marks, Dark/Light modes)",
      "Typography styling, color tokens, and stationery design",
      "Complete master brand asset kit for print and digital"
    ],
    faqs: [
      {
        q: "What files will I receive for my brand assets?",
        a: "You receive vector sources (AI, EPS, SVG), high-res PNGs, PDFs, and editable font pairings."
      }
    ]
  },
  {
    id: "social-media",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortDesc: "Ignite your brand's presence on social media, fostering genuine connections with your target audience through captivating content, driving engagement and business growth.",
    fullDesc: "We take full charge of your Instagram, LinkedIn, and Facebook presence. From content calendars and high-retention video reels to targeted community engagement, we build an active audience that converts into customers.",
    image: marketingImg,
    badge: "Brand Trust",
    category: "marketing",
    metrics: [
      { value: "+280%", label: "Average Reach Lift" },
      { value: "4.8%", label: "Engagement Rate" },
      { value: "Daily", label: "Active Posting & Moderation" }
    ],
    deliverables: [
      "Monthly content plan & aesthetic grid curation",
      "High-production graphic carousels and trending reels",
      "Active comment moderation and direct lead triage",
      "Monthly growth reporting and competitor benchmarking"
    ],
    faqs: [
      {
        q: "Do you create the graphics and write the captions?",
        a: "Yes! Our creative copywriters and designers produce all content end-to-end for your approval."
      }
    ]
  },
  {
    id: "seo",
    slug: "search-engine-optimization",
    title: "Search Engine Optimization (SEO)",
    shortDesc: "Harness SEO expertise to elevate your website's visibility on search engines, driving organic traffic and positioning your business at the forefront of relevant online searches.",
    fullDesc: "Rank #1 on Google for high-intent queries. We combine on-page technical optimization, keyword gap research, Google Business Profile enhancement, and authoritative backlink acquisition.",
    image: seoImg,
    badge: "Organic Growth",
    category: "marketing",
    metrics: [
      { value: "+240%", label: "Organic Search Inquiries" },
      { value: "Page 1", label: "Google Keyword Target" },
      { value: "100%", label: "White-Hat Optimization" }
    ],
    deliverables: [
      "Comprehensive keyword intent mapping & competitor analysis",
      "On-page meta tags, schema markup & Core Web Vitals optimization",
      "Local SEO, Google Business Profile ranking & citation building",
      "High-authority white-hat link acquisition & monthly reports"
    ],
    faqs: [
      {
        q: "How soon can we see ranking improvements?",
        a: "Initial ranking improvements typically appear within 60 to 90 days, with strong traffic compounding in months 4 to 6."
      }
    ]
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Graphic Design & UI/UX",
    shortDesc: "Weaving artistic excellence into visual content, our designs communicate your message effectively, leaving a lasting impact on your audience and enhancing brand aesthetics.",
    fullDesc: "From stunning promotional banners and marketing decks to complete web & app UI/UX designs in Figma, our team creates visuals that look premium and drive real user action.",
    image: webDevImg,
    badge: "Visual Excellence",
    category: "creative",
    metrics: [
      { value: "Pixel-Perfect", label: "Design Standards" },
      { value: "Figma & Vector", label: "Deliverable Assets" },
      { value: "24-48h", label: "Fast Turnaround" }
    ],
    deliverables: [
      "Marketing banners, social media creatives & print flyers",
      "Figma UI/UX wireframes & interactive clickable prototypes",
      "Pitch decks, company profiles & presentation slides",
      "Custom vector illustrations & icon sets"
    ],
    faqs: [
      {
        q: "Can you redesign our existing marketing collateral?",
        a: "Yes, we modernize existing materials to align with modern corporate standards."
      }
    ]
  },
  {
    id: "marketplace",
    slug: "marketplace-management",
    title: "Marketplace Management",
    shortDesc: "Navigating the intricacies of online marketplaces, we optimize product listings and strategies, maximizing your reach and sales potential within diverse e-commerce platforms.",
    fullDesc: "Scale your sales across Amazon, Flipkart, JioMart, and international marketplaces. We handle listing creation, A+ content, catalog optimization, and marketplace sponsored ads.",
    image: ecommerceImg,
    badge: "Marketplace Scale",
    category: "marketing",
    metrics: [
      { value: "Amazon & Flipkart", label: "Certified Optimization" },
      { value: "+65%", label: "Listing Conversion Rate" },
      { value: "A+ Content", label: "Enhanced Brand Pages" }
    ],
    deliverables: [
      "SEO-rich product titles, bullet points, and search backend keywords",
      "High-converting A+ Enhanced Brand Content & infographic images",
      "Marketplace sponsored ad setup and ACOS management",
      "Inventory alerts and review generation strategies"
    ],
    faqs: [
      {
        q: "Do you help with Amazon Brand Registry and store setup?",
        a: "Yes, we handle the entire Brand Registry process, storefront design, and catalog uploads."
      }
    ]
  },
  {
    id: "orm",
    slug: "online-reputation-management",
    title: "Online Reputation Management",
    shortDesc: "Masterfully manage your online image, strategically addressing feedback and reviews to shape a positive perception, boosting credibility and customer trust.",
    fullDesc: "Protect and elevate your brand's public reputation. We help you generate genuine 5-star Google reviews, suppress negative misinformation, and build an authoritative public perception.",
    image: brandingImg,
    badge: "Trust & Credibility",
    category: "marketing",
    metrics: [
      { value: "4.8+", label: "Target Star Rating" },
      { value: "100%", label: "Crisis Mitigation Response" },
      { value: "Top Rank", label: "Positive Brand SERPs" }
    ],
    deliverables: [
      "Automated customer review generation workflows",
      "Google Business review monitoring and professional responses",
      "Search Engine Results Page (SERP) brand reputation defense",
      "Brand mention tracking and sentiment analysis"
    ],
    faqs: [
      {
        q: "How do you help get genuine 5-star reviews?",
        a: "We set up automated WhatsApp and SMS follow-ups after customer transactions making it effortless for happy customers to leave 5-star reviews."
      }
    ]
  },
  {
    id: "video-marketing",
    slug: "video-marketing",
    title: "Video Marketing & Motion",
    shortDesc: "Elevate engagement with dynamic video content, conveying your brand's story, products, or services, and captivating viewers across platforms to foster deeper connections.",
    fullDesc: "Video is the highest converting format online. We script, edit, and optimize short-form reels, product explainer videos, customer testimonial showcases, and animated motion graphics.",
    image: marketingImg,
    badge: "Viral Engagement",
    category: "creative",
    metrics: [
      { value: "10x", label: "Higher Viewer Retention" },
      { value: "4K / 60FPS", label: "Ultra-High Quality" },
      { value: "Reels & YT", label: "Multi-Platform Export" }
    ],
    deliverables: [
      "Engaging scriptwriting and hook design",
      "Professional video editing, motion subtitles & sound design",
      "Instagram Reels, YouTube Shorts & TikTok formats",
      "2D motion graphics and explainer animations"
    ],
    faqs: [
      {
        q: "Can we provide raw footage recorded from a smartphone?",
        a: "Yes! You can shoot clips on your phone and our editing team transforms them into high-converting videos."
      }
    ]
  },
  {
    id: "content-creation",
    slug: "content-creation",
    title: "Content Creation & Copywriting",
    shortDesc: "Crafting compelling, valuable content tailored to your audience's preferences, we drive engagement, shareability, and brand loyalty through articles, blogs, and multimedia materials.",
    fullDesc: "Words that sell. Our professional copywriters write persuasive landing page copy, authority-building SEO blog posts, corporate whitepapers, and high-impact email sequences.",
    image: brandingImg,
    badge: "Authority Content",
    category: "creative",
    metrics: [
      { value: "100%", label: "Original & Plagiarism-Free" },
      { value: "SEO-Ready", label: "Keyword Intent Matched" },
      { value: "High ROI", label: "Conversion-Focused Copy" }
    ],
    deliverables: [
      "SEO-optimized long-form blog articles & thought leadership",
      "High-converting landing page & website copywriting",
      "Case studies, eBooks, and whitepapers",
      "Email newsletter sequences and sales copy"
    ],
    faqs: [
      {
        q: "Are the articles written by humans and checked for SEO?",
        a: "Yes, all content is researched and written by industry specialists with strict SEO formatting."
      }
    ]
  },
  {
    id: "performance-marketing",
    slug: "performance-marketing",
    title: "Performance Marketing (Google & Meta Ads)",
    shortDesc: "Strategically leveraging data-driven insights, we optimize campaigns across platforms, driving tangible results through targeted advertising and efficient resource allocation.",
    fullDesc: "Scale your revenue with high-precision Google Search, Display, YouTube, and Meta (Facebook/Instagram) ad campaigns. We focus on ROAS and cost per acquisition.",
    image: marketingImg,
    badge: "Direct ROI",
    category: "marketing",
    metrics: [
      { value: "4.5x+", label: "Average ROAS" },
      { value: "-45%", label: "Cost Per Qualified Lead" },
      { value: "Daily", label: "Funnel Optimization" }
    ],
    deliverables: [
      "Laser-targeted audience profiling and competitor conquesting",
      "High-converting ad copies, banners, and video creatives",
      "Full server-side pixel tracking and CRM lead sync",
      "Weekly analytics dashboards with ROAS transparency"
    ],
    faqs: [
      {
        q: "What is the minimum ad budget required?",
        a: "We configure campaigns starting from ₹15,000/month up to enterprise scale, optimizing every rupee."
      }
    ]
  },
  {
    id: "ecommerce-services",
    slug: "ecommerce-services",
    title: "E-Commerce Solutions & Stores",
    shortDesc: "From store setup to checkout optimization, we provide end-to-end e-commerce solutions, creating seamless online shopping experiences that boost conversions and customer satisfaction.",
    fullDesc: "We build high-converting online stores using Shopify, WooCommerce, or custom React headless architectures. Complete with UPI payment gateways, automated inventory, and fast checkouts.",
    image: ecommerceImg,
    badge: "Sales Machine",
    category: "tech",
    metrics: [
      { value: "+38%", label: "Average Conversion Rate Lift" },
      { value: "Instant", label: "UPI & Multi-Gateway Checkout" },
      { value: "Automated", label: "Shipping & Tracking Sync" }
    ],
    deliverables: [
      "Custom e-commerce store design and product catalog setup",
      "Payment gateway integration (Razorpay, Cashfree, Stripe, UPI)",
      "Automated WhatsApp & Email order status notifications",
      "Abandoned cart recovery flows & one-click checkout"
    ],
    faqs: [
      {
        q: "Can I manage inventory and orders from my phone?",
        a: "Yes, you get full access to mobile store management apps to track orders and inventory on the go."
      }
    ]
  },
  {
    id: "whatsapp-email",
    slug: "whatsapp-email-marketing",
    title: "WhatsApp & Email Marketing",
    shortDesc: "Harness the direct power of personalized communication, reaching customers through targeted messages, promotions, and updates via WhatsApp and email, fostering lasting connections.",
    fullDesc: "Achieve 90%+ open rates with official WhatsApp Business API integration and targeted email marketing automations. Send broadcast alerts, abandoned cart reminders, and festive offers.",
    image: appDevImg,
    badge: "90%+ Open Rates",
    category: "marketing",
    metrics: [
      { value: "92%", label: "WhatsApp Open Rate" },
      { value: "Automated", label: "Drip Nurture Funnels" },
      { value: "Green Tick", label: "Official WhatsApp API Setup" }
    ],
    deliverables: [
      "Official Meta WhatsApp Cloud API verification and green tick guidance",
      "Automated customer notification triggers (orders, bookings, renewals)",
      "High-converting promotional broadcast campaigns with dynamic buttons",
      "Email marketing drip workflows and list segmentation"
    ],
    faqs: [
      {
        q: "Will my WhatsApp number get banned if I send promotions?",
        a: "No! We use the official Meta WhatsApp Business API with approved templates, ensuring 100% compliance."
      }
    ]
  }
];
