import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'All-in-One Growth',
    budget: 'Flexible / Let\'s Discuss',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      <SEO
        title="Contact Us - Free Strategy Call & Proposal"
        description="Get in touch with Socialtechs in Greater Noida, Delhi NCR. Call +91 74284 60083 or send an inquiry for custom digital marketing and website solutions."
        canonical="https://socialtechs.in/contact"
      />
      <div className="site-shell">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow text-blue-600 mb-4">
            <span className="eyebrow-line" />
            Connect With Socialtechs
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Start Your <span className="text-blue-600">Growth Conversation</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Tell us where you want to go. We&apos;ll help you build a clear path from online visibility to measurable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <a
                  href="tel:+917428460083"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Phone className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Direct Call / WhatsApp</span>
                    <strong className="block text-base font-bold text-slate-900 mt-0.5">+91 74284 60083</strong>
                    <span className="text-xs text-blue-600 font-semibold">Kunal Bhati &bull; Fast Response</span>
                  </div>
                </a>

                <a
                  href="mailto:kunalbhati596@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Email Inquiries</span>
                    <strong className="block text-base font-bold text-slate-900 mt-0.5">kunalbhati596@gmail.com</strong>
                    <span className="text-xs text-slate-500">Response within 24 hours</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <MapPin className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Office Location</span>
                    <strong className="block text-base font-bold text-slate-900 mt-0.5">Delta-1, Greater Noida</strong>
                    <span className="text-xs text-slate-500">Near Shivam Plaza, Uttar Pradesh 201308</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 space-y-3 shadow-sm">
              <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="size-5 text-blue-600 shrink-0" />
                <span>100% Free Initial Discovery Consultation</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="size-5 text-blue-600 shrink-0" />
                <span>Transparent Proposal with zero hidden costs</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="size-5 text-blue-600 shrink-0" />
                <span>No aggressive sales calls or lock-in obligations</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-md">
              {submitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900">Thank You, {formData.name || 'Friend'}!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received. Kunal Bhati and our strategy team will review your requirements and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: 'All-in-One Growth',
                        budget: 'Flexible / Let\'s Discuss',
                        message: ''
                      });
                    }}
                    className="mt-6 px-8 py-3 rounded-full text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">Tell Us About Your Project</h3>
                    <p className="text-sm text-slate-500">Fill out this quick form and we will prepare custom ideas for your business.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Kunal Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="business@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                        Primary Service Needed
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm cursor-pointer"
                      >
                        <option value="All-in-One Growth">All-in-One Growth (Website + Ads + SEO)</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                        <option value="Google &amp; Meta Ads">Google &amp; Meta Ads</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Custom Web Applications">Custom Web Applications</option>
                        <option value="E-commerce Store">E-commerce Store</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm cursor-pointer"
                      >
                        <option value="Flexible / Let's Discuss">Flexible / Let&apos;s Discuss</option>
                        <option value="₹15,000 - ₹35,000">₹15,000 - ₹35,000</option>
                        <option value="₹35,000 - ₹75,000">₹35,000 - ₹75,000</option>
                        <option value="₹75,000 - ₹1,50,000+">₹75,000 - ₹1,50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                      Brief Message or Project Goals
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what your business does and what you'd like to achieve..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    Send Inquiry &amp; Request Proposal
                    <Send className="size-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
