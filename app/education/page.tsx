'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── DATA ─────────────────────────────────────────────────────────────────────

const UOP_COMPLETED = [
  { code: 'UNIV 1001', name: 'Online Education Strategies', grade: 'A', knowledge: 'Strategies for success in online learning environments, time management, digital collaboration tools, and academic integrity.' },
  { code: 'ENGL 1102', name: 'English Composition 2', grade: 'A', knowledge: 'Advanced academic writing, research methodologies, critical analysis, and constructing persuasive arguments.' },
  { code: 'CS 1111', name: 'Introduction to Computer Science', grade: 'A', knowledge: 'Foundational computing concepts, binary systems, algorithms, and an overview of computing disciplines.' },
  { code: 'CS 1101', name: 'Programming Fundamentals', grade: 'A+', knowledge: 'Core programming logic, variables, control flow, functions, and introductory Python programming.' },
  { code: 'PSYC 1504', name: 'Introduction to Psychology', grade: 'A', knowledge: 'Human behavior, cognition, perception, emotion, and social dynamics — applied to user-centered design thinking.' },
  { code: 'MATH 1201', name: 'College Algebra', grade: 'A-', knowledge: 'Functions, equations, inequalities, matrices, and polynomial operations — foundations for higher math.' },
  { code: 'PHIL 1404', name: 'Introduction to Global Ethics', grade: 'A+', knowledge: 'Ethical frameworks, moral reasoning, global responsibility, and technology ethics in modern society.' },
  { code: 'CS 1105', name: 'Digital Electronics & Computer Architecture', grade: 'A', knowledge: 'Logic gates, Boolean algebra, digital circuits, CPU architecture, memory systems, and instruction sets.' },
  { code: 'MATH 1280', name: 'Introduction to Statistics', grade: 'A+', knowledge: 'Descriptive statistics, probability, hypothesis testing, and data interpretation for computing applications.' },
  { code: 'CS 1102', name: 'Programming 1', grade: 'A+', knowledge: 'Object-oriented programming principles, classes, inheritance, encapsulation, and Java fundamentals.' },
  { code: 'CS 2203', name: 'Databases 1', grade: 'A', knowledge: 'Relational database design, SQL, normalization, ER modeling, and data management best practices.' },
  { code: 'COM 2001', name: 'Professional Communication', grade: 'A+', knowledge: 'Business writing, presentations, interpersonal communication strategies, and professional etiquette.' },
  { code: 'ENVS 1301', name: 'Introduction to Environmental Sciences', grade: 'A-', knowledge: 'Environmental systems, climate change, sustainability practices, and the intersection with technology.' },
  { code: 'CS 1103', name: 'Programming 2', grade: 'A', knowledge: 'Advanced OOP, data structures (linked lists, stacks, queues, trees), recursion, and algorithm design.' },
  { code: 'CS 2204', name: 'Communications and Networking', grade: 'A', knowledge: 'Network protocols, OSI model, TCP/IP, routing, subnetting, and cybersecurity fundamentals.' },
]

const UOP_INPROGRESS = [
  { code: 'HIST 1421', name: 'Greek and Roman Civilization', grade: 'In Progress', knowledge: 'Ancient civilizations, historical methodology, and the cultural roots of Western thought and institutions.' },
  { code: 'PHIL 1402', name: 'Introduction to Philosophy', grade: 'In Progress', knowledge: 'Philosophical traditions, logic, epistemology, metaphysics, and critical thinking frameworks.' },
  { code: 'CS 2205', name: 'Web Programming 1', grade: 'In Progress', knowledge: 'HTML, CSS, JavaScript, responsive design, and building dynamic web interfaces.' },
  { code: 'CS 2401', name: 'Software Engineering 1', grade: 'In Progress', knowledge: 'Software development life cycle, Agile methodologies, requirements engineering, and project management.' },
]

const UOM_COMPLETED = [
  { code: 'ITE1123', name: 'Fundamentals of Programming', grade: 'A', knowledge: 'Core programming constructs, algorithms, problem-solving strategies, and introductory software development.' },
  { code: 'ITE1213', name: 'Computer Systems', grade: 'A', knowledge: 'Hardware architecture, operating system concepts, memory management, and system-level programming.' },
  { code: 'ITE1713', name: 'Web Design', grade: 'B', knowledge: 'UI/UX principles, HTML/CSS fundamentals, responsive layouts, and accessibility standards.' },
  { code: 'ITE1813', name: 'Mathematics and Statistics for IT', grade: 'A-', knowledge: 'Applied mathematics, statistical analysis, probability theory, and data-driven decision making.' },
  { code: 'ITE1913', name: 'Communication Skills Development', grade: 'A+', knowledge: 'Technical presentation, professional writing, teamwork communication, and stakeholder management.' },
  { code: 'ITE1923', name: 'ICT Skills and Applications', grade: 'A', knowledge: 'Practical computing applications, productivity tools, digital literacy, and ICT project implementation.' },
]

const UOM_INPROGRESS = [
  { code: 'ITE1133', name: 'Visual Applications', grade: 'Pending', knowledge: 'GUI development, event-driven programming, visual design patterns, and desktop application development.' },
  { code: 'ITE1223', name: 'System & Design Paradigms', grade: 'Pending', knowledge: 'Software design principles, architectural patterns, systems thinking, and paradigm-driven development.' },
  { code: 'ITE1413', name: 'Fundamentals of Databases', grade: 'Pending', knowledge: 'Database design, normalization, SQL, transactions, and data modeling for IT applications.' },
  { code: 'ITE1723', name: 'Web Programming', grade: 'Pending', knowledge: 'Client-server architecture, dynamic web development, JavaScript frameworks, and REST APIs.' },
  { code: 'ITE1933', name: 'Technical Writing', grade: 'Pending', knowledge: 'Documentation standards, technical report writing, API documentation, and user manual creation.' },
  { code: 'ITE1943', name: 'ICT Project', grade: 'Pending', knowledge: 'End-to-end project development, agile team collaboration, and delivering a functional IT solution.' },
]

const EDUCATION_DATA = [
  {
    id: 'uom',
    date: 'Jan 2026 – Present',
    degree: 'BSc in Information Technology',
    institution: 'University of Moratuwa',
    cgpa: 'GPA: 3.76',
    description: 'Currently pursuing a comprehensive degree in Information Technology with a focus on modern software engineering paradigms, web application development, database management systems, and practical industry-oriented projects. Gaining hands-on experience through lab work and collaborative assignments.',
    completed: UOM_COMPLETED,
    inProgress: UOM_INPROGRESS,
    completedLabel: 'Semester 2025S1 – Completed',
    inProgressLabel: 'Semester 2025S2 – In Progress',
    showCredits: false,
  },
  {
    id: 'uop',
    date: 'Sep 2025 – Present',
    degree: 'BSc in Computer Science',
    institution: 'University of the People',
    cgpa: 'CGPA: 3.96',
    description: 'Expanding knowledge in core theoretical computer science fundamentals including algorithms, data structures, discrete mathematics, and software engineering principles. This program is broadening my perspective by complementing practical IT skills with strong theoretical foundations.',
    completed: UOP_COMPLETED,
    inProgress: UOP_INPROGRESS,
    completedLabel: 'Completed Courses',
    inProgressLabel: 'Currently In Progress',
    showCredits: false,
  },
  {
    id: 'al',
    date: '2024',
    degree: 'G.C.E. Advanced Level',
    institution: "St. Anne's Girls' School",
    cgpa: null,
    description: 'Completed comprehensive higher secondary education marking the transition into higher education in computing.',
    completed: [],
    inProgress: [],
    completedLabel: '',
    inProgressLabel: '',
    showCredits: false,
  },
  {
    id: 'ol',
    date: '2021',
    degree: 'G.C.E. Ordinary Level',
    institution: 'Alexandra College',
    cgpa: null,
    description: 'Completed comprehensive secondary education marking the transition into higher secondary education in commerce stream.',
    completed: [],
    inProgress: [],
    completedLabel: '',
    inProgressLabel: '',
    showCredits: false,
  },
]

const PROGRAMMES = [
  {
    id: 'omlas',
    title: 'OMLAS Champion 2026',
    org: 'One Million Leaders Asia (OMLAS) | South & Southeast Asia',
    period: 'August 2026 – Present',
    status: 'In Progress',
    statusColor: '#8B45BA',
    icon: '🌏',
    description: 'Selected as an OMLAS Champion, a prestigious international leadership program bringing together young changemakers from across South and Southeast Asia. The program is structured around five interconnected pillars: Personal Leadership, Sustainable Development, Social Innovation, Community Leadership, and Collaboration. As a Champion, I am participating in live interactive sessions with world-class trainers, receiving personalized mentorship from a certified OMLAS Fellow, and collaborating with peers across the region on real community projects that create measurable impact.',
    activities: [
      'Attending live online workshops on leadership, sustainability, and social innovation',
      'Receiving one-on-one mentorship from an OMLAS Fellow',
      'Collaborating with young leaders from diverse cultural backgrounds across Asia',
      'Developing and implementing a community project that addresses a local challenge',
      'Building skills in communication, teamwork, resilience, and ethical decision-making',
    ],
  },
  {
    id: 'nepd',
    title: 'National Entrepreneurship Development Programme (NEPD) – Phase 3',
    org: 'National Innovation Agency (NIA) | University of Moratuwa | Union Bank of Colombo',
    period: 'June 2026 – Present',
    status: 'Almost Completed',
    statusColor: '#f59e0b',
    icon: '🚀',
    description: "Selected to participate in the third cohort of this flagship national entrepreneurship programme, which equips aspiring entrepreneurs with practical knowledge, mentorship, industry exposure, and entrepreneurial skills to transform innovative ideas into sustainable ventures. Engaging in workshops, networking sessions, and mentorship opportunities designed to strengthen Sri Lanka's innovation ecosystem. Collaborating with fellow participants from across the country to develop and refine business concepts with real-world impact potential.",
    activities: [
      'Attending structured training sessions on business model development, market validation, and financial planning',
      'Receiving mentorship from industry experts and successful entrepreneurs',
      'Participating in networking events with investors, innovators, and policymakers',
      'Developing a venture concept aimed at addressing real-world challenges',
    ],
  },
]

const VOLUNTEERING = [
  {
    id: 'y2npro',
    title: 'Social Media Coordinator',
    org: 'Y2NPro Project | IEEE Young Professionals Sri Lanka',
    period: 'Feb 2026 – Present',
    status: undefined as string | undefined,
    statusColor: undefined as string | undefined,
    icon: '📡',
    description: 'Managed social media presence for Y2NPro, a flagship initiative of IEEE Young Professionals Sri Lanka focused on niche technological learning.',
    activities: [
      'Managed social media presence for Y2NPro across LinkedIn, Instagram, and Facebook',
      'Developed and executed content strategies to promote specialized workshops and industry collaborations',
      'Increased brand visibility for programs including Electric Vehicle technology, Robotics & Industry 4.0, and Cold Chain applications',
      'Engaged a community of young professionals, fostering connections between participants and industry experts',
      "Collaborated with the Y2NPro team to align digital campaigns with the initiative's mission of bridging academic knowledge and specialized industry demands",
    ],
  },
]

const ACHIEVEMENTS = [
  {
    id: 'karate',
    title: 'First Place (Gold Medal) – 1st Alliance Cup Full Contact Karate 2025',
    org: 'United World Martial Arts Federation - Sri Lanka | Sri Lanka Full Contact Karate Do Alliance affiliated by UWMF-Japan',
    period: 'November 2025',
    status: undefined as string | undefined,
    statusColor: '#f59e0b' as string | undefined,
    icon: '🥇',
    description: 'Awarded First Place with a Gold Medal at the inaugural Alliance Cup Full Contact Karate 2025, affiliated by the United World Martial Arts Federation-Japan. This achievement represents dedication, discipline, and peak competitive performance.',
    activities: [
      'Competed in the Full Contact Karate category at national level',
      'Awarded Gold Medal by United World Martial Arts Federation - Sri Lanka',
      'Affiliated recognition by United World Martial Arts Federation - Japan',
    ],
  },
]

// ─── GRADE BADGE ──────────────────────────────────────────────────────────────

function GradeBadge({ grade }: { grade: string }) {
  const isInProgress = grade === 'In Progress' || grade === 'Pending'
  const isAPlus = grade === 'A+'
  const bg = isInProgress ? 'rgba(139,69,186,0.25)' : isAPlus ? 'rgba(181,136,211,0.22)' : 'rgba(181,136,211,0.14)'
  // Use var(--accent) for both A+ and in-progress so it stays readable in light mode
  const color = isInProgress ? 'var(--accent)' : isAPlus ? 'var(--accent)' : 'var(--text-secondary)'
  return (
    <span style={{
      display: 'inline-block', padding: '2px 10px', borderRadius: '20px',
      fontSize: '0.72rem', fontWeight: 700,
      background: bg, color,
      border: `1px solid ${isInProgress ? 'rgba(139,69,186,0.4)' : isAPlus ? 'rgba(181,136,211,0.35)' : 'rgba(181,136,211,0.2)'}`,
      letterSpacing: '0.5px', whiteSpace: 'nowrap',
    }}>
      {grade}
    </span>
  )
}

// ─── COURSE TABLE ─────────────────────────────────────────────────────────────

type Course = { code: string; name: string; grade: string; knowledge: string; credits?: number }

function CourseTable({ courses, label, showCredits }: { courses: Course[]; label: string; showCredits?: boolean }) {
  const [expandedRow, setExpandedRow] = useState<string | null>(null)
  return (
    <div style={{ marginBottom: '28px' }}>
      <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ width: '20px', height: '1px', background: 'var(--accent)', display: 'inline-block' }} />
        {label}
      </div>
      <div style={{ border: '1px solid rgba(181,136,211,0.18)', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: showCredits ? '1.2fr 2.8fr 0.5fr 0.7fr' : '1.2fr 3fr 0.7fr',
          background: 'rgba(139,69,186,0.15)', padding: '10px 16px',
          fontSize: '0.68rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-muted)', gap: '8px',
        }}>
          <span>Code</span><span>Course Name</span>
          {showCredits && <span style={{ textAlign: 'center' }}>Cr.</span>}
          <span style={{ textAlign: 'center' }}>Grade</span>
        </div>
        {courses.map((course, idx) => {
          const isExpanded = expandedRow === course.code
          const isLast = idx === courses.length - 1
          return (
            <React.Fragment key={course.code}>
              <motion.div
                onClick={() => setExpandedRow(isExpanded ? null : course.code)}
                whileHover={{ background: 'rgba(181,136,211,0.07)' }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: showCredits ? '1.2fr 2.8fr 0.5fr 0.7fr' : '1.2fr 3fr 0.7fr',
                  padding: '10px 16px', gap: '8px', alignItems: 'center',
                  cursor: 'pointer',
                  borderBottom: (isLast && !isExpanded) ? 'none' : '1px solid rgba(181,136,211,0.08)',
                  transition: 'background 0.2s',
                  background: isExpanded ? 'rgba(181,136,211,0.06)' : 'transparent',
                }}
              >
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontWeight: 600 }}>{course.code}</span>
                <span style={{ fontSize: '0.84rem', color: 'var(--text-primary)' }}>{course.name}</span>
                {showCredits && <span style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{course.credits}</span>}
                <div style={{ display: 'flex', justifyContent: 'center' }}><GradeBadge grade={course.grade} /></div>
              </motion.div>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden', borderBottom: isLast ? 'none' : '1px solid rgba(181,136,211,0.08)' }}
                  >
                    <div style={{ padding: '12px 20px 16px', background: 'rgba(139,69,186,0.08)', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1rem', marginTop: '2px' }}>💡</span>
                      <div>
                        <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent)', marginBottom: '4px' }}>What I Gained</div>
                        <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>{course.knowledge}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

// ─── EDUCATION CARD ───────────────────────────────────────────────────────────

type EduItem = typeof EDUCATION_DATA[number]

function EducationCard({ item, index, expandedId, onToggle }: { item: EduItem; index: number; expandedId: string | null; onToggle: (id: string) => void }) {
  const expanded = expandedId === item.id
  const hasCourses = item.completed.length > 0 || item.inProgress.length > 0
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }} transition={{ delay: index * 0.15, duration: 0.5 }}
      className="glass-panel" style={{ marginBottom: '40px', padding: '32px', position: 'relative', marginLeft: '24px' }}
    >
      <div style={{ position: 'absolute', left: '-58px', top: '32px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 16px var(--accent-glow-strong)' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ flex: 1 }}>
          <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.5px' }}>{item.date}</span>
          <h3 style={{ margin: '8px 0 4px', fontSize: '1.4rem', fontFamily: 'var(--font-heading)' }}>{item.degree}</h3>
          <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{item.institution}</p>
          {item.cgpa && (
            <span style={{ display: 'inline-block', marginTop: '8px', padding: '3px 12px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700, background: 'rgba(181,136,211,0.18)', color: 'var(--accent)', border: '1px solid rgba(181,136,211,0.3)', letterSpacing: '0.5px' }}>
              {item.cgpa}
            </span>
          )}
        </div>
        {hasCourses && (
          <motion.button
            onClick={() => onToggle(item.id)}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '10px', background: expanded ? 'rgba(181,136,211,0.25)' : 'rgba(181,136,211,0.1)', border: '1px solid rgba(181,136,211,0.3)', color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.25s ease', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}
          >
            <span style={{ display: 'inline-block', transition: 'transform 0.3s ease', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
            {expanded ? 'Hide Courses' : 'View Courses & Grades'}
          </motion.button>
        )}
      </div>
      <p style={{ marginTop: '16px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.description}</p>
      <AnimatePresence>
        {expanded && hasCourses && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}
          >
            <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: '1px solid rgba(181,136,211,0.12)' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>💡</span> Click any course row to reveal the knowledge and skills gained.
              </p>
              {item.completed.length > 0 && <CourseTable courses={item.completed} label={item.completedLabel} showCredits={item.showCredits} />}
              {item.inProgress.length > 0 && <CourseTable courses={item.inProgress} label={item.inProgressLabel} showCredits={item.showCredits} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── PROGRAMME CARD ───────────────────────────────────────────────────────────

type ProgItem = { id: string; title: string; org: string; period: string; icon: string; description: string; activities: string[]; status?: string; statusColor?: string }

function ProgrammeCard({ item, index, type, expandedId, onToggle }: { item: ProgItem; index: number; type: 'programme' | 'volunteering' | 'achievement'; expandedId: string | null; onToggle: (id: string) => void }) {
  const expanded = expandedId === item.id
  const dotColor = item.statusColor ?? (type === 'achievement' ? '#f59e0b' : 'var(--accent)')
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }} transition={{ delay: index * 0.12, duration: 0.5 }}
      className="glass-panel" style={{ marginBottom: '32px', position: 'relative', marginLeft: '24px', overflow: 'hidden' }}
    >
      <div style={{ position: 'absolute', left: '-58px', top: '28px', width: '16px', height: '16px', borderRadius: '50%', background: dotColor, boxShadow: `0 0 16px ${dotColor}88` }} />
      <motion.div onClick={() => onToggle(item.id)} whileHover={{ background: 'rgba(181,136,211,0.04)' }} style={{ padding: '28px 32px', cursor: 'pointer', transition: 'background 0.2s' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
              <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem' }}>{item.period}</span>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-heading)', marginBottom: '4px', lineHeight: 1.35 }}>{item.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', fontWeight: 500 }}>{item.org}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
            {item.status && (
              <span style={{ padding: '4px 14px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 700, background: `${item.statusColor}22`, color: item.statusColor, border: `1px solid ${item.statusColor}55`, letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>
                {item.status}
              </span>
            )}
            <span style={{ fontSize: '0.78rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '4px', opacity: 0.8 }}>
              {expanded ? '▴ Collapse' : '▾ Details'}
            </span>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 32px 28px', borderTop: '1px solid rgba(181,136,211,0.12)' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginTop: '20px', fontSize: '0.9rem' }}>{item.description}</p>
              {item.activities.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--accent)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '20px', height: '1px', background: 'var(--accent)', display: 'inline-block' }} />Key Activities
                  </div>
                  <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {item.activities.map((act, i) => (
                      <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--accent)', marginTop: '4px', flexShrink: 0 }}>▸</span>{act}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── SUB-LABEL ────────────────────────────────────────────────────────────────

function SubLabel({ label }: { label: string }) {
  return (
    <div style={{ marginLeft: '24px', marginTop: '48px', marginBottom: '24px' }}>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '30px', height: '1px', background: 'var(--border-color)', display: 'inline-block' }} />{label}
        </span>
      </motion.div>
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function EducationPage() {
  // Accordion state: only one education card open at a time
  const [openEduId, setOpenEduId] = useState<string | null>(null)
  // Accordion state: only one programme/vol/achievement card open at a time
  const [openProgId, setOpenProgId] = useState<string | null>(null)

  const toggleEdu = (id: string) => setOpenEduId(prev => prev === id ? null : id)
  const toggleProg = (id: string) => setOpenProgId(prev => prev === id ? null : id)

  return (
    <section className="section-padding" style={{ paddingTop: '140px', minHeight: '100vh', paddingBottom: '100px' }}>
      <div className="container">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="section-title">Academic <span className="gradient-text">Journey</span></h1>
          <p className="section-subtitle">My formal education, degrees, programmes, and volunteering milestones.</p>
        </motion.div>

        <div style={{ marginTop: '48px', position: 'relative', paddingLeft: '24px', borderLeft: '2px dashed var(--border-color)' }}>

          {/* Education Cards – accordion group */}
          {EDUCATION_DATA.map((item, index) => (
            <EducationCard key={item.id} item={item} index={index} expandedId={openEduId} onToggle={toggleEdu} />
          ))}

          {/* Programmes & Volunteering Section */}
          <div style={{ marginLeft: '24px' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginTop: '70px', marginBottom: '40px' }}>
              <h2 className="section-title">Programmes & <span className="gradient-text">Volunteering</span></h2>
              <p className="section-subtitle">Leadership programmes, community initiatives, and industry volunteering.</p>
            </motion.div>
          </div>

          {/* Programme / Vol / Achievement Cards – shared accordion group */}
          {PROGRAMMES.map((item, index) => (
            <ProgrammeCard key={item.id} item={item} index={index} type="programme" expandedId={openProgId} onToggle={toggleProg} />
          ))}

          <SubLabel label="Volunteering" />
          {VOLUNTEERING.map((item, index) => (
            <ProgrammeCard key={item.id} item={item} index={index} type="volunteering" expandedId={openProgId} onToggle={toggleProg} />
          ))}

          <SubLabel label="Achievements & Awards" />
          {ACHIEVEMENTS.map((item, index) => (
            <ProgrammeCard key={item.id} item={item} index={index} type="achievement" expandedId={openProgId} onToggle={toggleProg} />
          ))}

        </div>

        {/*
        Certificates Section
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           style={{ marginTop: '100px', marginBottom: '40px' }}
        >
          <h2 className="section-title">Licenses & <span className="gradient-text">Certifications</span></h2>
          <p className="section-subtitle">Click on any certificate to view detailed information and official credentials.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {CERTIFICATES.map((cert, index) => (
            <motion.a 
               href={cert.link}
               target="_blank"
               rel="noopener noreferrer"
               key={cert.id}
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true, margin: '-50px' }}
               whileHover={{ y: -8, borderColor: 'var(--accent)' }}
               transition={{ delay: index * 0.1, duration: 0.4 }}
               className="glass-panel"
               style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', textDecoration: 'none', color: 'inherit', height: '100%', cursor: 'pointer' }}
            >
               <div style={{ width: '100%', height: '180px', background: 'var(--bg-surface-light)', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
                 <Image src={cert.image} alt={cert.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                 <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(0,0,0,0.6)', padding: '8px', borderRadius: '50%', color: '#fff', backdropFilter: 'blur(8px)', transition: 'all 0.3s' }}>
                    <ExternalLink size={16} />
                 </div>
               </div>
               <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--accent)' }}>
                   <Award size={18} />
                   <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Verified Certificate</span>
                 </div>
                 <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4 }}>{cert.name}</h4>
                 <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                   <span style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                     View Credential <ExternalLink size={14} />
                   </span>
                 </div>
               </div>
            </motion.a>
          ))}
        </div>
        */}

      </div>
    </section>
  )
}
