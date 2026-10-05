import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { editorialData } from '../../data/editorialData';
import { SectionHeading } from './SectionHeading';

export const ContactSection = ({ isStandalone = false }) => {
  const { headingLine1, headingLine2, budgetOptions } = editorialData.contact;
  const { email: directEmail } = editorialData.identity;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    
    // Fallback direct mailto execution with state feedback
    setTimeout(() => {
      const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nBudget: ${formData.budget || 'Not specified'}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${directEmail}?subject=${subject}&body=${body}`;
      setStatus('success');
    }, 600);
  };

  return (
    <section id="contact" className={isStandalone ? "pt-0 pb-20" : "pt-24 sm:pt-32 pb-20"}>
      <SectionHeading line1={headingLine1} line2={headingLine2} />

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5 text-left max-w-full">
        {/* Name and Email share one row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="contact-name" className="text-[12px] font-bold uppercase text-[#9ca3af] tracking-wider">
              Name *
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full h-[46px] px-4 rounded-[8px] bg-[#1a1a1e] border border-white/5 text-white text-[14px] placeholder-[#6b7280] focus:outline-none focus:ring-1 focus:ring-[#ff5500] transition-colors"
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <label htmlFor="contact-email" className="text-[12px] font-bold uppercase text-[#9ca3af] tracking-wider">
              Email *
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className="w-full h-[46px] px-4 rounded-[8px] bg-[#1a1a1e] border border-white/5 text-white text-[14px] placeholder-[#6b7280] focus:outline-none focus:ring-1 focus:ring-[#ff5500] transition-colors"
            />
          </div>
        </div>

        {/* Budget Dropdown */}
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="contact-budget" className="text-[12px] font-bold uppercase text-[#9ca3af] tracking-wider">
            Budget (USD)
          </label>
          <select
            id="contact-budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full h-[46px] px-4 rounded-[8px] bg-[#1a1a1e] border border-white/5 text-white text-[14px] focus:outline-none focus:ring-1 focus:ring-[#ff5500] transition-colors cursor-pointer"
          >
            {budgetOptions.map((opt, i) => (
              <option key={i} value={i === 0 ? '' : opt} className="bg-[#1a1a1e] text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="contact-message" className="text-[12px] font-bold uppercase text-[#9ca3af] tracking-wider">
            Message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project, timeline, and goals..."
            className="w-full min-h-[120px] p-4 rounded-[8px] bg-[#1a1a1e] border border-white/5 text-white text-[14px] placeholder-[#6b7280] focus:outline-none focus:ring-1 focus:ring-[#ff5500] transition-colors resize-y"
          />
        </div>

        {/* Error message */}
        {errorMessage && (
          <p className="text-red-400 text-xs font-medium">{errorMessage}</p>
        )}

        {/* Success message */}
        {status === 'success' && (
          <div className="p-3.5 rounded-[8px] bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-emerald-400 text-xs font-semibold">
            <CheckCircle2 size={16} />
            <span>Redirecting to your mail client to send your message to {directEmail}!</span>
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full h-[50px] rounded-[8px] bg-[#ff5500] hover:bg-[#e04b00] active:scale-[0.99] text-white font-extrabold text-[15px] uppercase tracking-wider transition-all duration-200 shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
        >
          {status === 'loading' ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>SUBMIT</span>
              <Send size={15} />
            </>
          )}
        </button>

        {/* Direct Email Link Fallback */}
        <p className="text-center text-[13px] text-[#9ca3af] pt-2">
          Or email directly at{' '}
          <a href={`mailto:${directEmail}`} className="text-[#ff5500] hover:underline font-medium">
            {directEmail}
          </a>
        </p>
      </form>
    </section>
  );
};
