'use client';
import { useState, FormEvent } from 'react';
import ContactButton from './ContactButton';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function InquiryForm() {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [siteType, setSiteType] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormState>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, business, siteType, message }),
      });
      if (res.ok) {
        setStatus('success');
        setName(''); setBusiness(''); setSiteType(''); setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 20px',
    borderRadius: '12px',
    border: '1.5px solid rgba(109,40,217,0.35)',
    background: 'rgba(9,9,15,0.8)',
    color: '#fff',
    fontFamily: 'var(--font-kanit)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section
      id="inquiry"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0D0A1A', borderTop: '1px solid rgba(109,40,217,0.2)' }}
    >
      <div className="max-w-xl mx-auto text-center">
        <h2
          className="font-black uppercase leading-none tracking-tight mb-4"
          style={{
            fontSize: 'clamp(2rem, 6vw, 64px)',
            background: 'linear-gradient(180deg, #6D28D9 0%, #C4B5FD 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Let&apos;s Build Together
        </h2>
        <p className="font-light mb-10 sm:mb-12" style={{ color: '#C4B5FD', opacity: 0.7, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>
          Tell us about your project — we&apos;ll get back to you within 24 hours.
        </p>

        {status === 'success' ? (
          <div className="py-16 text-center">
            <p className="text-lg font-medium" style={{ color: '#A855F7' }}>✓ Message received!</p>
            <p className="mt-2 font-light text-sm" style={{ color: '#C4B5FD', opacity: 0.7 }}>We&apos;ll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            <input
              required
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={inputStyle}
              onFocus={e => (e.target.style.borderColor = '#A855F7')}
              onBlur={e => (e.target.style.borderColor = 'rgba(109,40,217,0.35)')}
            />
            <input
              required
              placeholder="Business Name"
              value={business}
              onChange={e => setBusiness(e.target.value)}
              style={inputStyle}
              onFocus={e => (e.target.style.borderColor = '#A855F7')}
              onBlur={e => (e.target.style.borderColor = 'rgba(109,40,217,0.35)')}
            />
            <select
              required
              value={siteType}
              onChange={e => setSiteType(e.target.value)}
              style={{ ...inputStyle, cursor: 'pointer' }}
              onFocus={e => (e.currentTarget.style.borderColor = '#A855F7')}
              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(109,40,217,0.35)')}
            >
              <option value="" disabled>Type of Site</option>
              <option value="landing">Landing Page</option>
              <option value="realestate">Real Estate Funnel</option>
              <option value="fullsite">Full Website</option>
              <option value="brand">Brand + Web Design</option>
              <option value="other">Other</option>
            </select>
            <textarea
              required
              placeholder="Tell us about your project..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={5}
              style={{ ...inputStyle, resize: 'none' }}
              onFocus={e => (e.target.style.borderColor = '#A855F7')}
              onBlur={e => (e.target.style.borderColor = 'rgba(109,40,217,0.35)')}
            />
            {status === 'error' && (
              <p className="text-sm text-center" style={{ color: '#F87171' }}>
                Something went wrong. Please try again.
              </p>
            )}
            <div className="flex justify-center mt-2">
              <ContactButton
                type="submit"
                label={status === 'loading' ? 'Sending...' : 'Send Inquiry ↗'}
                disabled={status === 'loading'}
              />
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
