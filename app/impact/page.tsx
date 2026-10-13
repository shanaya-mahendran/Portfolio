'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe2,
  Landmark,
  Languages,
  Sprout,
  TrendingUp,
  Recycle,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Clock,
  ChevronDown,
  ChevronUp,
  MapPin,
  Sparkles,
  Info,
  Layers,
  HeartHandshake,
  Check,
  AlertCircle
} from 'lucide-react'
import {
  IMPACT_INITIATIVES,
  MISSION_PILLARS,
  SDG_METADATA,
  IMPACT_LIFECYCLE_STAGES,
  PhaseType,
  ImpactInitiative
} from '@/lib/impactData'

export default function ImpactPage() {
  const [selectedPhase, setSelectedPhase] = useState<string>('ALL')
  const [expandedTimeline, setExpandedTimeline] = useState<Record<string, boolean>>({
    'community-smart-waste-network': true,
    'public-service-reporting-dashboard': false,
    'digital-marketplace-informal-workers': false,
    'offline-first-digital-literacy-hub': false
  })

  const toggleTimeline = (slug: string) => {
    setExpandedTimeline(prev => ({ ...prev, [slug]: !prev[slug] }))
  }

  // Filtered initiatives
  const filteredInitiatives = useMemo(() => {
    if (selectedPhase === 'ALL') return IMPACT_INITIATIVES
    return IMPACT_INITIATIVES.filter(init => init.phase === selectedPhase)
  }, [selectedPhase])

  // Aggregate stats
  const totalInitiatives = IMPACT_INITIATIVES.length
  const totalMilestones = IMPACT_INITIATIVES.reduce((acc, curr) => acc + curr.milestones.length, 0)
  const completedMilestones = IMPACT_INITIATIVES.reduce(
    (acc, curr) => acc + curr.milestones.filter(m => m.isCompleted).length,
    0
  )
  const allUniqueSdgs = Array.from(new Set(IMPACT_INITIATIVES.flatMap(i => i.sdgs)))

  // Helper for pillar icons
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark':
        return <Landmark size={26} color="var(--accent)" />
      case 'Languages':
        return <Languages size={26} color="#38bdf8" />
      case 'Sprout':
        return <Sprout size={26} color="#34d399" />
      case 'TrendingUp':
        return <TrendingUp size={26} color="#fbbf24" />
      default:
        return <Sparkles size={26} color="var(--accent)" />
    }
  }

  return (
    <div className="section-padding" style={{ minHeight: '100vh', paddingTop: '120px' }}>
      <div className="container">
        {/* ── HERO SECTION ── */}
        <div style={{ maxWidth: '880px', marginBottom: '56px' }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: '16px' }}
          >
            <span className="badge-impact">
              <Globe2 size={15} /> IMPACT & SDGS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title gradient-text"
            style={{ marginBottom: '18px', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)' }}
          >
            Building Sri Lanka's Digital Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
            style={{ fontSize: '1.18rem', lineHeight: '1.8', marginBottom: '32px' }}
          >
            A living roadmap of civic-technology and digital public infrastructure initiatives directly aligned with the{' '}
            <strong>United Nations Sustainable Development Goals (SDGs)</strong>. 
            Framing software not as isolated commercial apps, but as a vehicle for systemic reform, public accountability, and regional equity across all 9 provinces of Sri Lanka.
          </motion.p>

          {/* Quick SDGs Pill Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}
          >
            {allUniqueSdgs.map(sdgNum => {
              const meta = SDG_METADATA[sdgNum]
              if (!meta) return null
              return (
                <div
                  key={sdgNum}
                  className="sdg-pill"
                  style={{
                    background: meta.color,
                    padding: '6px 12px',
                    fontSize: '0.78rem',
                    boxShadow: `0 3px 12px ${meta.color}44`
                  }}
                  title={meta.tagline}
                >
                  SDG {meta.number}: {meta.title}
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* ── SECTION 01: MY MISSION (4 STRATEGIC PILLARS) ── */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>
              01 // STRATEGIC VISION & ENGINEERING DOCTRINE
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', marginBottom: '16px' }}>
            My Mission for Sri Lanka
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '780px', marginBottom: '36px' }}>
            Four foundational engineering pillars guiding every open-source, civic-tech, and systems project I architect.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {MISSION_PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-panel"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {pillar.sdgs.map(s => {
                      const meta = SDG_METADATA[s]
                      return (
                        <span
                          key={s}
                          className="sdg-pill"
                          style={{ background: meta?.color || '#333' }}
                        >
                          SDG {s}
                        </span>
                      )
                    })}
                  </div>
                </div>

                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', marginBottom: '6px' }}>
                  {pillar.subtitle}
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, marginBottom: '14px' }}>
                  {pillar.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '20px' }}>
                  {pillar.overview}
                </p>

                {/* Focus Areas */}
                <div style={{ marginTop: 'auto', marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '10px' }}>
                    KEY OBJECTIVES:
                  </div>
                  <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                    {pillar.focusAreas.map((area, idx) => (
                      <li key={idx}>{area}</li>
                    ))}
                  </ul>
                </div>

                {/* Quote Callout */}
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderLeft: '3px solid var(--accent)',
                    fontSize: '0.84rem',
                    fontStyle: 'italic',
                    color: 'var(--text-muted)'
                  }}
                >
                  {pillar.quote}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SECTION 02: THE SDG ROADMAP ── */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>
              02 // INITIATIVE ROADMAP & MATURITY
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', marginBottom: '16px' }}>
            The SDG Initiative Roadmap
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '780px', marginBottom: '32px' }}>
            Tracking each digital transformation initiative from early problem discovery to verified community deployment.
          </p>

          {/* ── SDG REFERENCE TABLE ── */}
          <div
            className="glass-panel"
            style={{
              padding: '24px',
              overflowX: 'auto',
              marginBottom: '36px'
            }}
          >
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '14px', fontFamily: 'var(--font-mono)' }}>
              QUICK-GLANCE SDG MAPPING INDEX
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  <th style={{ padding: '12px 14px' }}>INITIATIVE</th>
                  <th style={{ padding: '12px 14px' }}>MAPPED SDGS</th>
                  <th style={{ padding: '12px 14px' }}>CURRENT STAGE</th>
                  <th style={{ padding: '12px 14px' }}>TARGET DEMOGRAPHIC</th>
                  <th style={{ padding: '12px 14px' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {IMPACT_INITIATIVES.map(init => (
                  <tr key={init.slug} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
                      <Link href={`/impact/${init.slug}`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                        {init.title}
                      </Link>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {init.sdgs.map(s => (
                          <span
                            key={s}
                            className="sdg-pill"
                            style={{ background: SDG_METADATA[s]?.color || '#555' }}
                          >
                            SDG {s}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 10px',
                          borderRadius: '20px',
                          background: 'rgba(52, 211, 153, 0.1)',
                          border: '1px solid rgba(52, 211, 153, 0.3)',
                          color: '#34d399',
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700
                        }}
                      >
                        ● {init.phase}
                      </span>
                    </td>
                    <td style={{ padding: '14px', color: 'var(--text-secondary)' }}>
                      {init.targetDemographic}
                    </td>
                    <td style={{ padding: '14px' }}>
                      <Link
                        href={`/impact/${init.slug}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: 'var(--accent)'
                        }}
                      >
                        Dossier <ArrowRight size={13} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── LIFECYCLE PHASE FILTERS ── */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '12px' }}>
              FILTER BY LIFECYCLE MATURITY:
            </div>
            <div className="impact-tab-bar">
              <button
                onClick={() => setSelectedPhase('ALL')}
                className={`tab-btn ${selectedPhase === 'ALL' ? 'active' : ''}`}
              >
                All Stages ({IMPACT_INITIATIVES.length})
              </button>
              {IMPACT_LIFECYCLE_STAGES.map((stage, idx) => {
                const count = IMPACT_INITIATIVES.filter(i => i.phase === stage).length
                return (
                  <button
                    key={stage}
                    onClick={() => setSelectedPhase(stage)}
                    className={`tab-btn ${selectedPhase === stage ? 'active' : ''}`}
                  >
                    <span>{idx + 1}. {stage}</span>
                    <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>({count})</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ── INITIATIVE CARDS GRID ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '28px'
            }}
          >
            {filteredInitiatives.map((init, index) => {
              const currentStepIndex = init.phaseIndex

              return (
                <motion.div
                  key={init.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="glass-panel"
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  {/* Image Banner */}
                  <div style={{ position: 'relative', width: '100%', height: '180px' }}>
                    <Image
                      src={init.image}
                      alt={init.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(14,7,19,0.92) 0%, rgba(14,7,19,0.2) 60%, transparent 100%)'
                      }}
                    />

                    {/* Phase Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        background: 'rgba(14, 7, 19, 0.85)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(52, 211, 153, 0.4)',
                        color: '#34d399',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      ● {init.phase}
                    </div>

                    {/* SDG Pills in Banner */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '14px',
                        right: '14px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px'
                      }}
                    >
                      {init.sdgs.map(s => (
                        <span
                          key={s}
                          className="sdg-pill"
                          style={{ background: SDG_METADATA[s]?.color || '#444' }}
                        >
                          SDG {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        marginBottom: '8px',
                        lineHeight: 1.3
                      }}
                    >
                      {init.title}
                    </h3>

                    <div style={{ fontSize: '0.84rem', color: 'var(--accent)', marginBottom: '14px', fontWeight: 500 }}>
                      {init.tagline}
                    </div>

                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        marginBottom: '16px',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {init.primaryObjective}
                    </p>

                    {/* Target Demographic & Province */}
                    <div
                      style={{
                        padding: '12px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        marginBottom: '18px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                        <MapPin size={13} color="var(--accent)" />
                        <span style={{ color: 'var(--text-primary)' }}>{init.provinces[0]}</span>
                      </div>
                      <div>Target: {init.targetDemographic}</div>
                    </div>

                    {/* Linear Phase Tracker */}
                    <div style={{ marginBottom: '22px' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-muted)',
                          marginBottom: '8px'
                        }}
                      >
                        <span>MATURITY TRACKER</span>
                        <span style={{ color: '#34d399', fontWeight: 600 }}>
                          STAGE {currentStepIndex + 1} OF 6
                        </span>
                      </div>

                      <div className="lifecycle-tracker">
                        <div className="lifecycle-track-bg" />
                        <div
                          className="lifecycle-track-fill"
                          style={{
                            width: `${Math.max(10, ((currentStepIndex + 0.5) / IMPACT_LIFECYCLE_STAGES.length) * 100)}%`
                          }}
                        />
                        <div className="lifecycle-steps">
                          {IMPACT_LIFECYCLE_STAGES.map((st, sIdx) => {
                            const isPassed = sIdx < currentStepIndex
                            const isCurrent = sIdx === currentStepIndex
                            return (
                              <div key={st} className="lifecycle-step" title={st}>
                                <div
                                  className={`step-circle ${
                                    isCurrent ? 'active' : isPassed ? 'passed' : ''
                                  }`}
                                >
                                  {isPassed ? '✓' : sIdx + 1}
                                </div>
                                <span className={`step-label ${isCurrent ? 'active' : ''}`}>
                                  {st}
                                </span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Direct Link to Case Study */}
                    <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                      <Link
                        href={`/impact/${init.slug}`}
                        className="btn btn-primary"
                        style={{
                          width: '100%',
                          justifyContent: 'center',
                          fontSize: '0.88rem',
                          textDecoration: 'none'
                        }}
                      >
                        Explore Initiative Dossier <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* ── SECTION 03: PROGRESS & IMPACT (AGGREGATES & TIMELINES) ── */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>
              03 // PROGRESS VERIFICATION & AUDIT
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', marginBottom: '16px' }}>
            Progress & Impact Metrics
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '780px', marginBottom: '36px' }}>
            Tangible verification indicators and chronological execution milestones across all active deployments.
          </p>

          {/* Aggregate Impact Counters */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              marginBottom: '40px'
            }}
          >
            <div className="stats-counter-card">
              <div className="stats-num accent-text">{totalInitiatives}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                TOTAL INITIATIVES
              </div>
            </div>
            <div className="stats-counter-card">
              <div className="stats-num" style={{ color: '#34d399' }}>{totalInitiatives} In Flight</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                ACTIVE LIFE-CYCLES
              </div>
            </div>
            <div className="stats-counter-card">
              <div className="stats-num" style={{ color: '#fbbf24' }}>
                {completedMilestones} / {totalMilestones}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                MILESTONES COMPLETE
              </div>
            </div>
            <div className="stats-counter-card">
              <div className="stats-num" style={{ color: '#60a5fa' }}>{allUniqueSdgs.length}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                UNIQUE SDGS ADDRESSED
              </div>
            </div>
          </div>

          {/* Per-Initiative Milestone Timelines Accordion */}
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '20px' }}>
            Per-Initiative Milestone Timelines & Verification Checklists
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {IMPACT_INITIATIVES.map(init => {
              const isOpen = !!expandedTimeline[init.slug]
              const completedCount = init.milestones.filter(m => m.isCompleted).length

              return (
                <div
                  key={init.slug}
                  className="glass-panel"
                  style={{
                    borderRadius: 'var(--radius)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  {/* Header / Accordion Trigger */}
                  <button
                    onClick={() => toggleTimeline(init.slug)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', marginBottom: '4px' }}>
                        {init.phase.toUpperCase()} · STAGE {init.phaseIndex + 1}
                      </div>
                      <div style={{ fontSize: '1.15rem', fontWeight: 700 }}>
                        {init.title}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '4px 10px',
                          borderRadius: '20px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {completedCount} of {init.milestones.length} Done
                      </span>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          style={{
                            padding: '0 24px 24px 24px',
                            borderTop: '1px solid var(--border-color)',
                            paddingTop: '20px'
                          }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {init.milestones.map((milestone) => (
                              <div
                                key={milestone.id}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '14px',
                                  padding: '14px',
                                  borderRadius: '8px',
                                  background: milestone.isCompleted
                                    ? 'rgba(52, 211, 153, 0.04)'
                                    : 'rgba(255, 255, 255, 0.02)',
                                  border: `1px solid ${
                                    milestone.isCompleted
                                      ? 'rgba(52, 211, 153, 0.25)'
                                      : 'var(--border-color)'
                                  }`
                                }}
                              >
                                <div
                                  style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    background: milestone.isCompleted ? '#10b981' : 'transparent',
                                    border: `2px solid ${
                                      milestone.isCompleted ? '#34d399' : 'var(--text-muted)'
                                    }`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    marginTop: '2px'
                                  }}
                                >
                                  {milestone.isCompleted && <Check size={14} color="#fff" />}
                                </div>

                                <div style={{ flex: 1 }}>
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexWrap: 'wrap',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      marginBottom: '4px'
                                    }}
                                  >
                                    <span style={{ fontWeight: 600, fontSize: '0.94rem', color: 'var(--text-primary)' }}>
                                      {milestone.title}
                                    </span>
                                    <span
                                      style={{
                                        fontSize: '0.75rem',
                                        fontFamily: 'var(--font-mono)',
                                        color: milestone.isCompleted ? '#34d399' : 'var(--text-muted)'
                                      }}
                                    >
                                      {milestone.targetQuarter} · {milestone.isCompleted ? 'COMPLETED' : 'PENDING'}
                                    </span>
                                  </div>
                                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                                    {milestone.description}
                                  </p>
                                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                                    Deliverable: {milestone.deliverable}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div style={{ marginTop: '18px', textAlign: 'right' }}>
                            <Link
                              href={`/impact/${init.slug}`}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                color: 'var(--accent)'
                              }}
                            >
                              Read Full Proposal & Architecture Dossier <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── SECTION 04/05: METHODOLOGY & RESPONSIBLE CIVIC DISCLAIMER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel"
          style={{
            padding: '36px',
            borderLeft: '4px solid #34d399',
            marginBottom: '40px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <AlertCircle size={24} color="#34d399" />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700 }}>
              Methodology & Responsible Civic Tech Disclaimer
            </h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.75', marginBottom: '16px' }}>
            Technology alone cannot fix governance failures. Digital public goods require sustained political will, institutional accountability, and genuine grassroots stakeholder participation. 
            Initiatives on this page designated as <strong>Exploring</strong> or <strong>Planned</strong> represent open-source architectural proposals, community research, and field discovery notes developed in consultation with civic stakeholders—not claimed municipal deployments until formally pilot-tested and independently audited.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#34d399" /> Open-source & non-commercial public goods
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#34d399" /> Human rights & privacy-preserving by design
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#34d399" /> Grounded in real-world Sri Lankan constraints
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
