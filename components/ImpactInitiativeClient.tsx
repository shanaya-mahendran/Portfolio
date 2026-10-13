'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Globe2,
  ExternalLink,
  MapPin,
  CheckCircle2,
  Clock,
  Layers,
  ShieldAlert,
  Target,
  Users,
  Cpu,
  Workflow,
  Sparkles,
  ChevronRight,
  Check,
  AlertTriangle,
  FileText
} from 'lucide-react'
import {
  ImpactInitiative,
  IMPACT_INITIATIVES,
  SDG_METADATA,
  IMPACT_LIFECYCLE_STAGES
} from '@/lib/impactData'

interface Props {
  initiative: ImpactInitiative
}

export default function ImpactInitiativeClient({ initiative }: Props) {
  const currentStepIndex = initiative.phaseIndex
  const otherInitiatives = IMPACT_INITIATIVES.filter(i => i.slug !== initiative.slug)

  return (
    <article className="section-padding" style={{ minHeight: '100vh', paddingTop: '110px' }}>
      <div className="container" style={{ maxWidth: '1080px' }}>
        {/* ── BREADCRUMB ── */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          style={{ marginBottom: '28px' }}
        >
          <Link
            href="/impact"
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
            <ArrowLeft size={16} /> Back to Impact & SDGs Roadmap
          </Link>
        </motion.div>

        {/* ── SECTION 1: INITIATIVE HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '40px' }}
        >
          {/* Accent Gradient Bar */}
          <div
            style={{
              height: '4px',
              width: '120px',
              background: 'linear-gradient(90deg, #34d399, var(--accent))',
              borderRadius: '2px',
              marginBottom: '20px'
            }}
          />

          {/* SDG Badges & Phase */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            {initiative.sdgs.map(s => {
              const meta = SDG_METADATA[s]
              return (
                <div
                  key={s}
                  className="sdg-pill"
                  style={{
                    background: meta?.color || '#333',
                    padding: '6px 14px',
                    fontSize: '0.8rem',
                    boxShadow: `0 4px 14px ${meta?.color || '#000'}44`
                  }}
                >
                  SDG {s}: {meta?.title}
                </div>
              )
            })}

            {initiative.isSWoC && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '30px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)'
                }}
              >
                ★ SWOC SEASON 7 PROPOSAL
              </span>
            )}

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '30px',
                background: 'rgba(52, 211, 153, 0.12)',
                border: '1px solid rgba(52, 211, 153, 0.4)',
                color: '#34d399',
                fontSize: '0.8rem',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)'
              }}
            >
              ● {initiative.phase.toUpperCase()}
            </span>
          </div>

          {/* SWoC Season 7 Proposal Metadata Banner */}
          {initiative.isSWoC && (
            <div
              className="glass-panel"
              style={{
                padding: '20px 24px',
                borderRadius: 'var(--radius)',
                marginBottom: '28px',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                background: 'rgba(16, 185, 129, 0.04)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px'
              }}
            >
              <div>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  PROGRAM & SEASON
                </div>
                <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#34d399', marginTop: '2px' }}>
                  Social Winter of Code · S7
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  ROLE & STATUS
                </div>
                <div style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>
                  {initiative.role || 'Project Admin / Maintainer'}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  OPEN SOURCE LICENSE
                </div>
                <div style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>
                  {initiative.license || 'MIT License'}
                </div>
              </div>
              {initiative.repoUrl && (
                <div>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    TARGET REPOSITORY
                  </div>
                  <a
                    href={initiative.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginTop: '2px'
                    }}
                  >
                    View on GitHub <ExternalLink size={13} />
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Title & Tagline */}
          <h1
            className="section-title gradient-text"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.15, marginBottom: '16px' }}
          >
            {initiative.title}
          </h1>

          <p
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.6',
              color: 'var(--accent)',
              maxWidth: '880px',
              marginBottom: '28px',
              fontWeight: 500
            }}
          >
            {initiative.tagline}
          </p>

          {/* Primary Objective Summary */}
          <div
            className="glass-panel"
            style={{
              padding: '24px',
              marginBottom: '32px',
              borderLeft: '4px solid #34d399'
            }}
          >
            <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#34d399', marginBottom: '6px' }}>
              PRIMARY CIVIC OBJECTIVE
            </div>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>
              {initiative.primaryObjective}
            </p>
          </div>

          {/* Multi-Stage Lifecycle Stepper */}
          <div
            style={{
              padding: '24px',
              borderRadius: 'var(--radius)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-color)',
              marginBottom: '32px'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                marginBottom: '16px'
              }}
            >
              <span style={{ letterSpacing: '0.06em', fontWeight: 600 }}>LIFECYCLE MATURITY PROGRESSION</span>
              <span
                style={{
                  color: '#34d399',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '12px',
                  background: 'rgba(52, 211, 153, 0.1)',
                  border: '1px solid rgba(52, 211, 153, 0.3)'
                }}
              >
                PHASE {currentStepIndex + 1} OF 6: {initiative.phase.toUpperCase()}
              </span>
            </div>

            <div className="stepper-pipeline">
              {IMPACT_LIFECYCLE_STAGES.map((st, sIdx) => {
                const isPassed = sIdx < currentStepIndex
                const isCurrent = sIdx === currentStepIndex
                return (
                  <div
                    key={st}
                    className={`stepper-node ${isCurrent ? 'active' : isPassed ? 'passed' : ''}`}
                  >
                    <div className="stepper-num">
                      {isPassed ? '✓' : sIdx + 1}
                    </div>
                    <div className="stepper-text">
                      {st}
                    </div>
                    <div className="stepper-status">
                      {isPassed ? 'Completed' : isCurrent ? 'Active Phase' : `Stage ${sIdx + 1}`}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Target Provinces & Demographics */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              fontSize: '0.88rem',
              color: 'var(--text-secondary)'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={16} color="var(--accent)" />
              <strong>Regional Focus:</strong> {initiative.provinces.join(', ')}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Users size={16} color="#34d399" />
              <strong>End-Users:</strong> {initiative.targetDemographic}
            </span>
          </div>
        </motion.div>

        {/* ── SECTION 2: EXTERNAL RESOURCES ── */}
        {initiative.externalResources && initiative.externalResources.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '48px' }}>
            {initiative.externalResources.map(res => (
              <a
                key={res.label}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: '0.85rem', padding: '8px 18px' }}
              >
                <FileText size={15} /> {res.label}
              </a>
            ))}
          </div>
        )}

        {/* ── BANNER IMAGE ── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '400px',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: '64px',
            border: '1px solid var(--border-color)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}
        >
          <Image
            src={initiative.image}
            alt={initiative.title}
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
        </div>

        {/* ── SECTION 3: THE PROBLEM & CONTEXT ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>
              {initiative.isSWoC ? '01 // PROBLEM STATEMENT & ECOSYSTEM NEED' : '01 // SYSTEMIC PROBLEM IN SRI LANKA'}
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '20px' }}>
            The Root Challenge
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            {initiative.problem.overview}
          </p>

          {/* Ecosystem Context */}
          <div
            className="glass-panel"
            style={{
              padding: '24px',
              borderLeft: '4px solid #f59e0b',
              marginBottom: '28px'
            }}
          >
            <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#fbbf24', marginBottom: '6px' }}>
              {initiative.isSWoC ? 'REGIONAL & ECOSYSTEM CONTEXT' : 'SRI LANKAN ECONOMIC & GEOGRAPHIC CONTEXT'}
            </div>
            <p style={{ fontSize: '0.96rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {initiative.problem.sriLankaContext}
            </p>
          </div>

          {/* Impact Data Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: '28px'
            }}
          >
            {initiative.problem.impactMetrics.map((metric, i) => (
              <div key={i} className="stats-counter-card">
                <div className="stats-num accent-text">{metric.stat}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Root Causes */}
          <div
            style={{
              padding: '24px',
              borderRadius: 'var(--radius)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-color)'
            }}
          >
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
              Structural Root Causes:
            </h4>
            <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {initiative.problem.rootCauses.map((rc, i) => (
                <li key={i}>{rc}</li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* ── SECTION 4: TARGET COMMUNITY ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>
              {initiative.isSWoC ? '02 // TARGET CONTRIBUTORS & BENEFICIARIES' : '02 // END-USER PERSONAS & DIGNITY'}
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '24px' }}>
            Target Community & Beneficiaries
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
              marginBottom: '28px'
            }}
          >
            {initiative.targetCommunity.personas.map((persona, i) => (
              <div
                key={i}
                className="glass-panel"
                style={{ padding: '24px' }}
              >
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {persona.role}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '14px' }}>
                  {persona.description}
                </p>
                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  PRIMARY PAIN POINTS:
                </div>
                <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  {persona.painPoints.map((pp, idx) => (
                    <li key={idx}>{pp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: '20px',
              borderRadius: 'var(--radius)',
              background: 'rgba(52, 211, 153, 0.05)',
              border: '1px solid rgba(52, 211, 153, 0.25)',
              fontSize: '0.92rem',
              color: 'var(--text-primary)'
            }}
          >
            <strong>Accessibility & Inclusion Focus:</strong> {initiative.targetCommunity.accessibilityFocus}
          </div>
        </motion.section>

        {/* ── SECTION 5: PROPOSED SOLUTION ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>03 // CIVIC-TECH PLATFORM DESIGN</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '20px' }}>
            The Proposed Solution & Workflow
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            {initiative.proposedSolution.summary}
          </p>

          <div
            style={{
              padding: '24px',
              borderRadius: 'var(--radius)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-color)',
              marginBottom: '28px'
            }}
          >
            <h4 style={{ fontSize: '0.95rem', color: 'var(--accent)', marginBottom: '8px' }}>
              Operational Model & Governance
            </h4>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              {initiative.proposedSolution.operationalModel}
            </p>
          </div>

          {/* Citizen Workflow Steps */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Workflow size={16} color="var(--accent)" /> Citizen Engagement Lifecycle
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {initiative.proposedSolution.citizenWorkflow.map((step, i) => (
                <div
                  key={i}
                  style={{
                    padding: '14px 18px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Key Innovations */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} color="#34d399" /> Key Civic-Tech Innovations
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
              {initiative.proposedSolution.keyInnovations.map((inn, i) => (
                <div
                  key={i}
                  style={{
                    padding: '16px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.88rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  ✓ {inn}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── SECTION 6: ARCHITECTURE & TECHNICAL APPROACH ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>04 // ARCHITECTURE & LOW-BANDWIDTH SPECS</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '20px' }}>
            Architecture & Engineering Approach
          </h2>

          <p style={{ fontSize: '1.02rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            {initiative.architecture.summary}
          </p>

          {/* Stack Pills */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '8px' }}>
              PRODUCTION TECH STACK
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {initiative.architecture.stack.map(s => (
                <span
                  key={s}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.84rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-primary)'
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Criteria Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px'
            }}
          >
            <div
              style={{
                padding: '20px',
                borderRadius: 'var(--radius)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', marginBottom: '6px' }}>
                OFFLINE-FIRST STRATEGY
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {initiative.architecture.offlineFirstStrategy}
              </p>
            </div>

            <div
              style={{
                padding: '20px',
                borderRadius: 'var(--radius)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', marginBottom: '6px' }}>
                BANDWIDTH OPTIMIZATION
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {initiative.architecture.bandwidthOptimization}
              </p>
            </div>

            <div
              style={{
                padding: '20px',
                borderRadius: 'var(--radius)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', marginBottom: '6px' }}>
                TRILINGUAL I18N
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {initiative.architecture.trilingualSupport}
              </p>
            </div>

            <div
              style={{
                padding: '20px',
                borderRadius: 'var(--radius)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', marginBottom: '6px' }}>
                CITIZEN DATA PRIVACY
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {initiative.architecture.dataPrivacy}
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── SECTION 7: IMPLEMENTATION MILESTONES ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>05 // CHRONOLOGICAL EXECUTION TIMELINE</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '24px' }}>
            Implementation Milestones
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {initiative.milestones.map((m) => (
              <div
                key={m.id}
                className="glass-panel"
                style={{
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  borderLeft: m.isCompleted ? '4px solid #10b981' : '4px solid var(--border-color)'
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: m.isCompleted ? '#10b981' : 'transparent',
                    border: `2px solid ${m.isCompleted ? '#34d399' : 'var(--text-muted)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  {m.isCompleted && <Check size={16} color="#fff" />}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {m.title}
                    </h4>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: m.isCompleted ? 'rgba(52, 211, 153, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                        color: m.isCompleted ? '#34d399' : 'var(--text-muted)'
                      }}
                    >
                      {m.targetQuarter} · {m.isCompleted ? 'COMPLETED' : 'IN PROGRESS'}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '8px' }}>
                    {m.description}
                  </p>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                    Deliverable: {m.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── SECTION 8: MEASURABLE SUCCESS CRITERIA ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>06 // VALIDATION METRICS & KPIS</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '24px' }}>
            Measurable Success Criteria
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '18px'
            }}
          >
            {initiative.successCriteria.map((sc, i) => (
              <div
                key={i}
                style={{
                  padding: '24px',
                  borderRadius: 'var(--radius)',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  {sc.metric}
                </div>
                <div style={{ fontSize: '1.45rem', fontWeight: 700, color: '#34d399', margin: '8px 0 10px 0' }}>
                  {sc.target}
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                  Audit Method: {sc.verificationMethod}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── SECTION 9: OPERATIONAL DISCLAIMER & GOVERNANCE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel"
          style={{
            padding: '32px',
            borderLeft: '4px solid #f87171',
            marginBottom: '60px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <ShieldAlert size={22} color="#f87171" />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700 }}>
              Operational Assumptions & Governance Ethics
            </h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '16px' }}>
            {initiative.operationalDisclaimer.governanceEthics}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                Critical Assumptions:
              </div>
              <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {initiative.operationalDisclaimer.assumptions.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>

            <div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                Institutional Dependencies:
              </div>
              <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {initiative.operationalDisclaimer.externalDependencies.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ── BROWSE OTHER INITIATIVES ── */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '48px', marginBottom: '40px' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '20px' }}>
            Explore More Digital Public Infrastructure Initiatives
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {otherInitiatives.map(other => (
              <Link
                key={other.slug}
                href={`/impact/${other.slug}`}
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
                <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
                  {other.sdgs.map(s => (
                    <span
                      key={s}
                      className="sdg-pill"
                      style={{ background: SDG_METADATA[s]?.color || '#555', fontSize: '0.68rem', padding: '2px 8px' }}
                    >
                      SDG {s}
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                  {other.title}
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '14px', flex: 1 }}>
                  {other.tagline}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#34d399', fontWeight: 600 }}>
                  View Full Dossier <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
