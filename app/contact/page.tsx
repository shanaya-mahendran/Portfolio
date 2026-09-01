'use client'

import React, { useState } from 'react'
import Script from 'next/script'
import { BriefcaseBusiness, Code2, Mail, MessageCircle, MapPin, Clock3, Send, Loader2, Calendar } from 'lucide-react'

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false)

  const contactLinks = [
    { href: 'https://www.linkedin.com/in/shanaya-mahendran/', label: 'LinkedIn', icon: BriefcaseBusiness },
    { href: 'https://github.com/shanaya-mahendran', label: 'GitHub', icon: Code2 },
    { href: 'mailto:shanayamahendran.lk@outlook.com', label: 'Email', icon: Mail },
    { href: 'https://wa.me/94762079963?text=Hi%20Shanaya%2C%20I%20came%20across%20your%20portfolio!', label: 'WhatsApp', icon: MessageCircle },
    { 
      href: '#', 
      label: 'Schedule a Call', 
      icon: Calendar,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        // @ts-ignore
        if (typeof window !== 'undefined' && window.Calendly) {
          // @ts-ignore
          window.Calendly.initPopupWidget({ url: 'https://calendly.com/pauldeepthi523' });
        }
      }
    },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const result = await res.json()
      
      const tc = document.getElementById('toastContainer')
      if (tc) {
        const t = document.createElement('div')
        t.className = `toast ${res.ok ? 'success' : 'error'}`
        t.textContent = result.message || 'Message sent!'
        tc.appendChild(t)
        setTimeout(() => t.classList.add('show'), 100)
        setTimeout(() => { t.classList.remove('show'); setTimeout(() => tc.removeChild(t), 400) }, 3000)
      }
      if (res.ok) {
        (e.target as HTMLFormElement).reset()
      }
    } catch (err) {
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <section className="section-padding" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h2 className="section-title">Let's <span className="accent-text">Connect</span></h2>
        <p className="section-subtitle">Have a project, idea, or just want to say hello? Reach out!</p>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '20px', position: 'relative' }}>
                <label style={{ display: 'block', fontWeight: 500, fontSize: '0.85rem', marginBottom: '4px', color: 'var(--text-secondary)' }}>Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  autoComplete="name"
                  style={{ width: '100%', padding: '10px 0 8px', border: 'none', borderBottom: '2px solid var(--border-color)', background: 'transparent', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '1rem', outline: 'none' }}
                />
              </div>
              <div className="form-group" style={{ marginBottom: '20px', position: 'relative' }}>
                <label style={{ display: 'block', fontWeight: 500, fontSize: '0.85rem', marginBottom: '4px', color: 'var(--text-secondary)' }}>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  autoComplete="email"
                  style={{ width: '100%', padding: '10px 0 8px', border: 'none', borderBottom: '2px solid var(--border-color)', background: 'transparent', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '1rem', outline: 'none' }}
                />
              </div>
              <div className="form-group" style={{ marginBottom: '20px', position: 'relative' }}>
                <label style={{ display: 'block', fontWeight: 500, fontSize: '0.85rem', marginBottom: '4px', color: 'var(--text-secondary)' }}>Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  style={{ width: '100%', padding: '10px 0 8px', border: 'none', borderBottom: '2px solid var(--border-color)', background: 'transparent', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '1rem', outline: 'none' }}
                />
              </div>
              <div className="form-group" style={{ marginBottom: '20px', position: 'relative' }}>
                <label style={{ display: 'block', fontWeight: 500, fontSize: '0.85rem', marginBottom: '4px', color: 'var(--text-secondary)' }}>Message</label>
                <textarea 
                  name="message" 
                  required
                  style={{ width: '100%', padding: '10px 0 8px', border: 'none', borderBottom: '2px solid var(--border-color)', background: 'transparent', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '1rem', outline: 'none', minHeight: '100px', resize: 'vertical' }}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  {submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  {submitting ? 'Sending...' : 'Send Message'}
                </span>
              </button>
            </form>
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '8px' }}>Connect directly</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>I'm always open to new opportunities and collaborations.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '24px' }}>
              {contactLinks.map((link: any) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={link.onClick}
                    target={link.href.startsWith('mailto:') || link.href === '#' ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') || link.href === '#' ? undefined : 'noopener noreferrer'}
                    className="btn btn-outline"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 18px',
                      borderRadius: '999px',
                      fontWeight: 600,
                      letterSpacing: '0.01em'
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', borderRadius: '50%', background: 'var(--bg-surface-light)', color: 'var(--accent)' }}>
                      <Icon size={16} />
                    </span>
                    <span>{link.label}</span>
                  </a>
                )
              })}
            </div>
            <div style={{ marginTop: '24px', padding: '20px', background: 'var(--bg-surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'grid', gap: '8px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} /> Remote · Based in Sri Lanka</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Clock3 size={16} /> Usually replies within 24 hours</span>
                </p>
            </div>
            <div style={{ marginTop: '24px', background: 'var(--bg-surface-light)', borderRadius: 'var(--radius)', padding: '20px', textAlign: 'center', border: '1px solid var(--border-color)' }}>
                <span style={{ display: 'inline-flex', color: 'var(--accent)' }}><MapPin size={32} /></span>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
