'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Trophy,
  Swords,
  FlaskConical,
  Clock,
  Users,
  CheckCircle2,
  XCircle,
  Code2,
  ExternalLink,
  Copy,
  Check,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
  Network,
  Cpu,
  ChevronRight,
  Flame
} from 'lucide-react'
import { ArenaEntry, ARENA_ENTRIES } from '@/lib/arenaData'

interface Props {
  entry: ArenaEntry
}

export default function ArenaCaseStudyClient({ entry }: Props) {
  const [copiedCode, setCopiedCode] = useState(false)
  const isPodium = entry.category === 'PODIUM'
  const isAttempt = entry.category === 'ATTEMPT'
  const isLab = entry.category === 'LAB'

  const handleCopyCode = () => {
    if (entry.solution.codeSnippet?.code) {
      navigator.clipboard.writeText(entry.solution.codeSnippet.code)
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    }
  }

  // Related other entries
  const otherEntries = ARENA_ENTRIES.filter(e => e.slug !== entry.slug)

  return (
    <article className="section-padding" style={{ minHeight: '100vh', paddingTop: '110px' }}>
      <div className="container" style={{ maxWidth: '1080px' }}>
        {/* ── BREADCRUMB NAVIGATION ── */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          style={{ marginBottom: '28px' }}
        >
          <Link
            href="/arena"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.88rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontWeight: 600,
              padding: '6px 14px',
              borderRadius: '50px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-color)',
              transition: 'all 0.2s ease'
            }}
          >
            <ArrowLeft size={16} /> Back to The Arena
          </Link>
        </motion.div>

        {/* ── SECTION 1: HERO & METADATA HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px' }}
        >
          {/* Category Ribbon & Outcome Pill */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span
              className={`arena-ribbon ${
                isPodium ? 'ribbon-podium' : isAttempt ? 'ribbon-attempt' : 'ribbon-lab'
              }`}
              style={{ position: 'static' }}
            >
              {isPodium ? '🏆 PODIUM FINISH' : isAttempt ? '⚔️ THE ATTEMPT' : '🧪 EXPERIMENTAL LAB'}
            </span>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 14px',
                borderRadius: '30px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--border-color)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-primary)'
              }}
            >
              {entry.outcome}
            </span>

            <span
              style={{
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)'
              }}
            >
              {entry.year}
            </span>
          </div>

          {/* Title */}
          <h1
            className="section-title gradient-text"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.15, marginBottom: '16px' }}
          >
            {entry.title}
          </h1>

          <div
            style={{
              fontSize: '1.15rem',
              color: 'var(--accent)',
              fontWeight: 600,
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}
          >
            {entry.event}
          </div>

          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: '1.75',
              color: 'var(--text-secondary)',
              maxWidth: '860px',
              marginBottom: '32px'
            }}
          >
            {entry.synopsis}
          </p>

          {/* Metadata Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              padding: '24px',
              borderRadius: 'var(--radius)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-color)',
              marginBottom: '32px'
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Engineering Role
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>
                {entry.role}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Sprint Duration
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>
                {entry.sprintDuration}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Team Configuration
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>
                {entry.teamName} {entry.teamSize ? `(${entry.teamSize})` : ''}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Outcome Status
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 600, color: isPodium ? '#fbbf24' : isAttempt ? '#f87171' : '#a78bfa', marginTop: '4px' }}>
                {entry.outcomeStatus}
              </div>
            </div>
          </div>

          {/* Verification & Repository Links */}
          {entry.verificationLinks && entry.verificationLinks.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {entry.verificationLinks.map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ fontSize: '0.85rem', padding: '8px 18px' }}
                >
                  <ExternalLink size={15} /> {link.label}
                </a>
              ))}
            </div>
          )}
        </motion.div>

        {/* ── HERO BANNER VISUAL ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            position: 'relative',
            width: '100%',
            height: '420px',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: '60px',
            border: '1px solid var(--border-color)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}
        >
          <Image
            src={entry.heroImage || entry.image}
            alt={entry.title}
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(14, 7, 19, 0.9) 0%, rgba(14, 7, 19, 0.2) 60%, transparent 100%)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '28px',
              right: '28px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}
          >
            {entry.tags.map(tag => (
              <span
                key={tag}
                style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '5px 12px',
                  borderRadius: '50px',
                  background: 'rgba(14, 7, 19, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'var(--text-primary)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── SECTION 2: THE CHALLENGE & CORE PROBLEM ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>01 // PROBLEM DOSSIER</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '24px' }}>
            The Challenge & Core Problem
          </h2>

          <div
            className="glass-panel"
            style={{
              padding: '32px',
              marginBottom: '28px',
              borderLeft: '4px solid #f59e0b'
            }}
          >
            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#fbbf24' }}>
              High-Level Briefing
            </h3>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.75', color: 'var(--text-secondary)' }}>
              {entry.challenge.briefing}
            </p>
          </div>

          <div
            style={{
              padding: '24px',
              borderRadius: 'var(--radius)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-color)',
              marginBottom: '32px'
            }}
          >
            <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Formal Technical Problem Statement
            </div>
            <p style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: '1.65' }}>
              "{entry.challenge.formalStatement}"
            </p>
          </div>

          {/* Real-World Sprint Constraints */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div
              style={{
                padding: '24px',
                borderRadius: 'var(--radius)',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-color)'
              }}
            >
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--accent)', marginBottom: '14px' }}>
                <Clock size={16} /> Hard Timebox & Rules
              </h4>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '12px' }}>
                {entry.challenge.sprintConstraints.timeLimit}
              </div>
              <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                {entry.challenge.sprintConstraints.constraints.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div
              style={{
                padding: '24px',
                borderRadius: 'var(--radius)',
                background: 'rgba(239, 68, 68, 0.04)',
                border: '1px solid rgba(239, 68, 68, 0.25)'
              }}
            >
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: '#f87171', marginBottom: '14px' }}>
                <Flame size={16} /> Unforeseen Pressure Factors
              </h4>
              <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                {entry.challenge.sprintConstraints.pressureFactors.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* ── SECTION 3: LEADERSHIP & PERSONAL CONTRIBUTION ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>02 // LEADERSHIP & ARCHITECTURE</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '24px' }}>
            Leadership & Personal Contribution
          </h2>

          <div
            style={{
              padding: '28px',
              borderRadius: 'var(--radius)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-color)',
              marginBottom: '28px'
            }}
          >
            <h3 style={{ fontSize: '1.15rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
              {entry.leadership.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {entry.leadership.responsibilities.map((resp, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {resp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* High-Pressure Decisions Breakdown */}
          <h3 style={{ fontSize: '1.15rem', marginBottom: '18px', color: 'var(--text-primary)' }}>
            Real-Time Architectural Dilemmas Under Clock Pressure
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {entry.leadership.highPressureDecisions.map((dec, i) => (
              <div
                key={i}
                className="glass-panel"
                style={{ padding: '24px', borderLeft: '4px solid var(--accent)' }}
              >
                <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  DILEMMA #{i + 1}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px' }}>
                  {dec.dilemma}
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '6px' }}>
                  ➔ Action Taken: {dec.decision}
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <strong>Engineering Rationale:</strong> {dec.rationale}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── SECTION 4: THE TECHNICAL SOLUTION ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>03 // SYSTEM ARCHITECTURE</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '24px' }}>
            The Technical Solution
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            {entry.solution.summary}
          </p>

          {/* Tech Stack Pills */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '10px' }}>
              SYSTEM TECHNOLOGY STACK
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {entry.solution.stack.map(s => (
                <span
                  key={s}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-primary)'
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Overview */}
          <div
            style={{
              padding: '24px',
              borderRadius: 'var(--radius)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-color)',
              marginBottom: '28px'
            }}
          >
            <h4 style={{ fontSize: '0.95rem', color: 'var(--accent)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Cpu size={16} /> Data Flow & Architecture
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              {entry.solution.architectureOverview}
            </p>
          </div>

          {/* Data Pipelines */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Network size={16} color="var(--accent)" /> Critical Data Pipelines
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {entry.solution.dataPipelines.map((pipe, i) => (
                <div
                  key={i}
                  style={{
                    padding: '14px 18px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontWeight: 700 }}>
                    [{i + 1}]
                  </span>
                  <span>{pipe}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Specification Box */}
          {entry.solution.codeSnippet && (
            <div className="code-box">
              <div className="code-header">
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Code2 size={16} color="var(--accent)" />
                  {entry.solution.codeSnippet.title} ({entry.solution.codeSnippet.language})
                </span>
                <button
                  onClick={handleCopyCode}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'none',
                    border: 'none',
                    color: copiedCode ? '#34d399' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontSize: '0.78rem'
                  }}
                >
                  {copiedCode ? <Check size={14} /> : <Copy size={14} />}
                  {copiedCode ? 'Copied' : 'Copy'}
                </button>
              </div>
              <pre className="code-content">
                <code>{entry.solution.codeSnippet.code}</code>
              </pre>
              <div
                style={{
                  padding: '12px 16px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderTop: '1px solid var(--border-color)',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)'
                }}
              >
                💡 {entry.solution.codeSnippet.explanation}
              </div>
            </div>
          )}
        </motion.section>

        {/* ── SECTION 5: THE RETROSPECTIVE ("WHAT WORKED & WHAT FAILED") ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>04 // POST-MORTEM & REFLECTION</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '24px' }}>
            The Retrospective: What Worked & What Failed
          </h2>

          <div className="retro-grid">
            {/* What Worked */}
            <div className="retro-col retro-success">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.15rem', color: '#34d399' }}>
                <CheckCircle2 size={20} /> What Worked
              </h3>
              <ul className="retro-list">
                {entry.retrospective.whatWorked.map((item, i) => (
                  <li key={i}>
                    <span style={{ color: '#34d399', fontWeight: 700 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Broke / Failed */}
            <div className="retro-col retro-failed">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.15rem', color: '#f87171' }}>
                <XCircle size={20} /> What Broke Under Pressure
              </h3>
              <ul className="retro-list">
                {entry.retrospective.whatFailed.map((item, i) => (
                  <li key={i}>
                    <span style={{ color: '#f87171', fontWeight: 700 }}>✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hard Engineering Takeaways */}
          <div
            className="glass-panel"
            style={{ padding: '28px', borderLeft: '4px solid var(--accent)' }}
          >
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
              <Lightbulb size={18} color="var(--accent)" /> Hard-Won Engineering Takeaways
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {entry.retrospective.engineeringTakeaways.map((takeaway, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontWeight: 700 }}>
                    0{i + 1}.
                  </span>
                  <span style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                    {takeaway}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── SECTION 6: DYNAMIC DEEP-DIVE SECTION ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '80px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>05 // DEEP-DIVE SPECIFICATION</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '10px' }}>
            {entry.deepDive.title}
          </h2>
          <div style={{ fontSize: '0.95rem', color: 'var(--accent)', marginBottom: '20px', fontFamily: 'var(--font-mono)' }}>
            {entry.deepDive.subtitle}
          </div>

          <p style={{ fontSize: '1.02rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '28px' }}>
            {entry.deepDive.description}
          </p>

          {/* Deep-Dive Metric Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '18px',
              marginBottom: '28px'
            }}
          >
            {entry.deepDive.components.map((comp, i) => (
              <div
                key={i}
                style={{
                  padding: '22px',
                  borderRadius: 'var(--radius)',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  {comp.name}
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', margin: '8px 0 10px 0' }}>
                  {comp.metricOrDetail}
                </div>
                <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                  {comp.notes}
                </div>
              </div>
            ))}
          </div>

          {entry.deepDive.highlightCallout && (
            <div
              style={{
                padding: '16px 20px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-color)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--text-primary)'
              }}
            >
              {entry.deepDive.highlightCallout}
            </div>
          )}
        </motion.section>

        {/* ── BROWSE OTHER ARENA ENTRIES ── */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '48px', marginBottom: '40px' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '20px' }}>
            Explore More Builds Under Pressure
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {otherEntries.map(other => (
              <Link
                key={other.slug}
                href={`/arena/${other.slug}`}
                style={{
                  padding: '20px',
                  borderRadius: 'var(--radius)',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-color)',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', marginBottom: '6px' }}>
                  {other.event}
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {other.title}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '14px', flex: 1 }}>
                  {other.keyTheme}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 600 }}>
                  View Post-Mortem <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
