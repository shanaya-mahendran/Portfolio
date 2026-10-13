'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Trophy,
  Swords,
  FlaskConical,
  Search,
  SlidersHorizontal,
  ArrowRight,
  Flame,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Users,
  Code2,
  ExternalLink,
  X,
  Sparkles,
  ShieldAlert
} from 'lucide-react'
import { ARENA_ENTRIES, ArenaEntry } from '@/lib/arenaData'

export default function ArenaPage() {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'PODIUM' | 'ATTEMPT' | 'LAB'>('ALL')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedYear, setSelectedYear] = useState<string>('ALL')
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL')
  const [quickViewEntry, setQuickViewEntry] = useState<ArenaEntry | null>(null)

  // Derived filter options
  const years = useMemo(() => {
    const list = Array.from(new Set(ARENA_ENTRIES.map(e => e.year)))
    return ['ALL', ...list]
  }, [])

  const statuses = useMemo(() => {
    const list = Array.from(new Set(ARENA_ENTRIES.map(e => e.outcomeStatus)))
    return ['ALL', ...list]
  }, [])

  // Filtered entries
  const filteredEntries = useMemo(() => {
    return ARENA_ENTRIES.filter(entry => {
      // Category match
      if (selectedCategory !== 'ALL' && entry.category !== selectedCategory) return false

      // Year match
      if (selectedYear !== 'ALL' && entry.year !== selectedYear) return false

      // Status match
      if (selectedStatus !== 'ALL' && entry.outcomeStatus !== selectedStatus) return false

      // Search match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase()
        const matchTitle = entry.title.toLowerCase().includes(q)
        const matchEvent = entry.event.toLowerCase().includes(q)
        const matchRole = entry.role.toLowerCase().includes(q)
        const matchSynopsis = entry.synopsis.toLowerCase().includes(q)
        const matchTheme = entry.keyTheme.toLowerCase().includes(q)
        const matchTags = entry.tags.some(t => t.toLowerCase().includes(q))
        if (!matchTitle && !matchEvent && !matchRole && !matchSynopsis && !matchTheme && !matchTags) {
          return false
        }
      }

      return true
    })
  }, [selectedCategory, selectedYear, selectedStatus, searchQuery])

  // Aggregate stats
  const totalBuilds = ARENA_ENTRIES.length
  const podiumCount = ARENA_ENTRIES.filter(e => e.category === 'PODIUM').length
  const attemptCount = ARENA_ENTRIES.filter(e => e.category === 'ATTEMPT').length
  const labCount = ARENA_ENTRIES.filter(e => e.category === 'LAB').length

  return (
    <div className="section-padding" style={{ minHeight: '100vh', paddingTop: '120px' }}>
      <div className="container">
        {/* ── HEADER ── */}
        <div style={{ maxWidth: '840px', marginBottom: '40px' }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: '16px' }}
          >
            <span className="badge-pressure">
              <Flame size={15} /> BUILDS UNDER PRESSURE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title gradient-text"
            style={{ marginBottom: '18px' }}
          >
            The Arena
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
            style={{ fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '28px' }}
          >
            A high-stakes showcase of hackathons, ideathons, and rapid technical sprints executed against unrelenting deadlines. 
            Unlike traditional vanity galleries, The Arena values <strong>transparent technical post-mortems</strong> as equal to victories—demonstrating real-time decision-making, resilience, and true engineering maturity.
          </motion.p>

          {/* ── STATS COUNTER BAR ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '14px',
              marginBottom: '36px'
            }}
          >
            <div className="stats-counter-card">
              <div className="stats-num accent-text">{totalBuilds}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                TOTAL SPRINT BUILDS
              </div>
            </div>
            <div className="stats-counter-card" style={{ borderColor: 'rgba(245, 158, 11, 0.4)' }}>
              <div className="stats-num" style={{ color: '#fbbf24' }}>{podiumCount} 🏆</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                PODIUM FINISHES
              </div>
            </div>
            <div className="stats-counter-card" style={{ borderColor: 'rgba(239, 68, 68, 0.4)' }}>
              <div className="stats-num" style={{ color: '#f87171' }}>{attemptCount} ⚔️</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                POST-MORTEMS
              </div>
            </div>
            <div className="stats-counter-card" style={{ borderColor: 'rgba(139, 92, 246, 0.4)' }}>
              <div className="stats-num" style={{ color: '#a78bfa' }}>{labCount} 🧪</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                EXPERIMENTAL LABS
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── FILTER & NAVIGATION TABS ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ marginBottom: '24px' }}
        >
          <div className="arena-tab-bar">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`tab-btn ${selectedCategory === 'ALL' ? 'active' : ''}`}
            >
              All Builds ({totalBuilds})
            </button>
            <button
              onClick={() => setSelectedCategory('PODIUM')}
              className={`tab-btn ${selectedCategory === 'PODIUM' ? 'active' : ''}`}
            >
              <Trophy size={16} color="#fbbf24" /> Podium Finishes ({podiumCount})
            </button>
            <button
              onClick={() => setSelectedCategory('ATTEMPT')}
              className={`tab-btn ${selectedCategory === 'ATTEMPT' ? 'active' : ''}`}
            >
              <Swords size={16} color="#f87171" /> The Attempts ({attemptCount})
            </button>
            <button
              onClick={() => setSelectedCategory('LAB')}
              className={`tab-btn ${selectedCategory === 'LAB' ? 'active' : ''}`}
            >
              <FlaskConical size={16} color="#a78bfa" /> The Experimental Lab ({labCount})
            </button>
          </div>
        </motion.div>

        {/* ── SEARCH & SECONDARY FILTER BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '36px',
            padding: '16px',
            borderRadius: 'var(--radius)',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-color)'
          }}
        >
          {/* Search Input */}
          <div style={{ position: 'relative', flex: '1 1 280px' }}>
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }}
            />
            <input
              type="text"
              placeholder="Search by event, role, problem synopsis, or technology..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px 10px 42px',
                borderRadius: '10px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer'
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Year Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              Year:
            </span>
            <select
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              {years.map(y => (
                <option key={y} value={y}>
                  {y === 'ALL' ? 'All Years' : y}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              Outcome:
            </span>
            <select
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              {statuses.map(s => (
                <option key={s} value={s}>
                  {s === 'ALL' ? 'All Statuses' : s}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* ── CARD GRID ── */}
        <AnimatePresence mode="popLayout">
          {filteredEntries.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                padding: '60px 20px',
                textAlign: 'center',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius)',
                border: '1px dashed var(--border-color)'
              }}
            >
              <AlertTriangle size={36} color="var(--accent)" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No arena builds match your search</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Try clearing your search query or switching your category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('ALL')
                  setSelectedYear('ALL')
                  setSelectedStatus('ALL')
                }}
                className="btn btn-outline"
                style={{ marginTop: '18px' }}
              >
                Reset All Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '28px',
                marginBottom: '60px'
              }}
            >
              {filteredEntries.map((entry, index) => {
                const isPodium = entry.category === 'PODIUM'
                const isAttempt = entry.category === 'ATTEMPT'
                const isLab = entry.category === 'LAB'

                return (
                  <motion.div
                    key={entry.slug}
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="arena-card"
                  >
                    {/* Visual Media Banner */}
                    <div className="arena-card-banner">
                      <Image
                        src={entry.image}
                        alt={entry.title}
                        width={600}
                        height={340}
                        style={{ objectFit: 'cover' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(14,7,19,0.92) 0%, rgba(14,7,19,0.2) 60%, transparent 100%)'
                        }}
                      />

                      {/* Category Ribbon */}
                      <div
                        className={`arena-ribbon ${
                          isPodium ? 'ribbon-podium' : isAttempt ? 'ribbon-attempt' : 'ribbon-lab'
                        }`}
                      >
                        {isPodium ? '🏆 PODIUM' : isAttempt ? '⚔️ ATTEMPT' : '🧪 LAB POC'}
                      </div>

                      {/* Outcome Badge */}
                      <div className="outcome-pill">
                        {entry.outcome}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      {/* Competition & Year */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '8px',
                          fontSize: '0.8rem',
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        <span style={{ fontWeight: 600, color: 'var(--accent)' }}>{entry.event}</span>
                        <span>{entry.year}</span>
                      </div>

                      {/* Title */}
                      <h2
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.45rem',
                          fontWeight: 700,
                          marginBottom: '10px',
                          lineHeight: 1.3
                        }}
                      >
                        {entry.title}
                      </h2>

                      {/* Metadata Summary Row: Role & Team */}
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '12px',
                          marginBottom: '16px',
                          fontSize: '0.82rem',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <Users size={14} color="var(--accent)" />
                          <strong>Role:</strong> {entry.role}
                        </span>
                        {entry.teamName && (
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <Clock size={14} color="var(--text-muted)" />
                            {entry.sprintDuration}
                          </span>
                        )}
                      </div>

                      {/* 3-Line Problem Synopsis */}
                      <p
                        style={{
                          color: 'var(--text-secondary)',
                          fontSize: '0.92rem',
                          lineHeight: '1.6',
                          marginBottom: '20px',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {entry.synopsis}
                      </p>

                      {/* Tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                        {entry.tags.map(tag => (
                          <span
                            key={tag}
                            style={{
                              fontSize: '0.72rem',
                              fontFamily: 'var(--font-mono)',
                              padding: '3px 9px',
                              borderRadius: '4px',
                              background: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid var(--border-color)',
                              color: 'var(--text-muted)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Action Buttons */}
                      <div
                        style={{
                          marginTop: 'auto',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          paddingTop: '16px',
                          borderTop: '1px solid var(--border-color)'
                        }}
                      >
                        <Link
                          href={`/arena/${entry.slug}`}
                          className="btn btn-primary"
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            fontSize: '0.84rem',
                            padding: '9px 16px',
                            textDecoration: 'none'
                          }}
                        >
                          Case Study <ArrowRight size={15} />
                        </Link>
                        <button
                          onClick={() => setQuickViewEntry(entry)}
                          className="btn btn-outline"
                          style={{
                            fontSize: '0.84rem',
                            padding: '9px 14px',
                            whiteSpace: 'nowrap'
                          }}
                          aria-label={`Quick overview of ${entry.title}`}
                        >
                          Quick Look
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── ENGINEERING RETROSPECTIVE MANIFESTO ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel"
          style={{
            padding: '36px',
            borderLeft: '4px solid var(--accent)',
            marginBottom: '40px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <ShieldAlert size={22} color="var(--accent)" />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700 }}>
              The Retrospective Philosophy: Why Document The Failures?
            </h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '14px' }}>
            Anyone can paste an award certificate into a portfolio. But in real-world systems engineering, software is born in crisis—under incomplete requirements, network drops, and extreme constraints. Documenting why a prototype did not advance, where scope creep infiltrated, and how pitch execution fell short demonstrates <strong>intellectual honesty</strong> and <strong>anti-fragility</strong>.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#34d399" /> Root cause analysis over excuses
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#34d399" /> Architectural trade-offs quantified
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#34d399" /> Lessons incorporated into production systems
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── QUICK LOOK PREVIEW MODAL ── */}
      <AnimatePresence>
        {quickViewEntry && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              background: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)'
            }}
            onClick={() => setQuickViewEntry(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '680px',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '32px',
                position: 'relative',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <button
                onClick={() => setQuickViewEntry(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '50%',
                  padding: '8px',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div style={{ marginBottom: '16px' }}>
                <span
                  className={`arena-ribbon ${
                    quickViewEntry.category === 'PODIUM'
                      ? 'ribbon-podium'
                      : quickViewEntry.category === 'ATTEMPT'
                      ? 'ribbon-attempt'
                      : 'ribbon-lab'
                  }`}
                  style={{ position: 'static', display: 'inline-block', marginBottom: '8px' }}
                >
                  {quickViewEntry.category} · {quickViewEntry.outcome}
                </span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginTop: '6px' }}>
                  {quickViewEntry.title}
                </h2>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                  {quickViewEntry.event} ({quickViewEntry.year})
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Core Challenge
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {quickViewEntry.challenge.briefing}
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Key Engineering Takeaway
                </h4>
                <div
                  style={{
                    padding: '14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderLeft: '3px solid var(--accent)',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  {quickViewEntry.retrospective.engineeringTakeaways[0]}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '28px' }}>
                <Link
                  href={`/arena/${quickViewEntry.slug}`}
                  className="btn btn-primary"
                  style={{ flex: 1, justifyContent: 'center' }}
                  onClick={() => setQuickViewEntry(null)}
                >
                  Read Full Case Study & Post-Mortem <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
