'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const DATA = {
  skillCategories: [
    { name: 'Frontend', skills: [{ name: 'HTML5 & CSS3', level: 90 }, { name: 'JavaScript (ES6+)', level: 88 }, { name: 'Next.js', level: 88 }, { name: 'React.js', level: 85 }, { name: 'TypeScript', level: 82 }, { name: 'Tailwind CSS', level: 80 }, { name: 'Responsive Design', level: 85 }] },
    { name: 'Backend & Databases', skills: [{ name: 'FastAPI', level: 78 }, { name: 'Node.js', level: 75 }, { name: 'Express.js', level: 72 }, { name: 'PostgreSQL / MySQL', level: 80 }, { name: 'SQLite', level: 78 }, { name: 'Supabase', level: 70 }] },
    { name: 'Tools & Practices', skills: [{ name: 'Git / GitHub', level: 88 }, { name: 'Docker', level: 75 }, { name: 'VS Code', level: 90 }, { name: 'Vite & Vitest', level: 82 }, { name: 'Postman', level: 75 }, { name: 'Vercel', level: 80 }] },
    { name: 'Languages', skills: [{ name: 'JavaScript', level: 88 }, { name: 'TypeScript', level: 82 }, { name: 'Python', level: 75 }, { name: 'SQL', level: 78 }, { name: 'Java', level: 65 }, { name: 'PHP', level: 50 }] }
  ],
  allSkillTags: [
    'Next.js', 'React', 'TypeScript', 'Prisma', 'Framer Motion', 'JavaScript', 'FastAPI', 'PostgreSQL', 'Docker', 'Vite', 'Vitest',
    'Java', 'Java Swing', 'CustomTkinter', 'Tkinter', 'Python', 'Node.js', 'Express.js', 'MySQL', 'SQLite',
    'Supabase', 'Stream API', 'Multithreading', 'Socket Programming', 'Generics', 'Gson', 'MVC', 'HashMap',
    'Tailwind CSS', 'HTML5', 'CSS3', 'Git', 'Vercel', 'Postman', 'Sequelize', 'Zustand'
  ],
  skillProjectMap: {
    'Next.js': ['smart-school', 'web-portfolio', 'sara', 'elegant-notes'],
    'React': ['web-portfolio', 'elegant-notes'],
    'TypeScript': ['smart-school', 'web-portfolio', 'elegant-notes'],
    'Prisma': ['smart-school', 'web-portfolio'],
    'Framer Motion': ['web-portfolio'],
    'FastAPI': ['sara'],
    'PostgreSQL': ['smart-school', 'sara', 'ssoc-2026'],
    'Docker': ['sara'],
    'Vite': ['sara'],
    'Vitest': ['sara'],
    'Java': ['cabXpert', 'day-01', 'day-02', 'day-03', 'day-04', 'day-05', 'day-06', 'day-07', 'day-09', 'day-10', 'day-12', 'day-16', 'day-18', 'day-19', 'day-20', 'day-21', 'day-22'],
    'Java Swing': ['day-07', 'day-09', 'day-10', 'day-18', 'day-19', 'day-20', 'day-21', 'day-22'],
    'CustomTkinter': ['day-11', 'day-14', 'day-15', 'day-17'],
    'Tkinter': ['day-08', 'day-13'],
    'Python': ['sara', 'day-08', 'day-11', 'day-13', 'day-14', 'day-15', 'day-17'],
    'MySQL': ['cabXpert'],
    'SQLite': ['slia-intern'],
    'Stream API': ['day-12'],
    'Multithreading': ['day-19', 'day-21'],
    'Socket Programming': ['day-21'],
    'Generics': ['day-18'],
    'Gson': ['day-22'],
    'MVC': ['day-22'],
    'HashMap': ['day-02', 'day-16'],
    'Node.js': ['ssoc-2026'],
    'Express.js': ['ssoc-2026'],
    'Supabase': ['smart-school', 'elegant-notes'],
    'Tailwind CSS': ['smart-school'],
    'HTML5': ['sara', 'my-educational'],
    'CSS3': ['sara', 'my-educational'],
    'JavaScript': ['sara', 'my-educational'],
    'Sequelize': ['ssoc-2026']
  },
  projects: [
    { id: 'smart-school', title: 'Smart School Management System (SSMS)', description: 'Enterprise-grade, multi-role School Management System built with Next.js 14, Prisma ORM, Supabase PostgreSQL, and Tailwind CSS.', category: 'fullstack', tags: ['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'Tailwind CSS', 'PostgreSQL'], image: '/images/Smart-School.png', link: '#', github: 'https://github.com/shanaya-mahendran/Smart-School', detail: 'Enterprise-grade, multi-role School Management System built with Next.js 14, Prisma ORM, Supabase PostgreSQL, and Tailwind CSS. Features 4 dedicated role-based portals (Admin, Teacher, Student, Parent), real-time timetable subscriptions, client-side PDF document generation (@react-pdf/renderer), and subject-scoped access control.' },
    { id: 'web-portfolio', title: 'Personal Web Portfolio 🚀', description: 'Modern, high-performance personal portfolio built with Next.js App Router, React, TypeScript, and Prisma.', category: 'fullstack', tags: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Framer Motion', 'Vanilla CSS'], image: '/images/Portfolio.png', link: 'https://shanaya-paul.vercel.app/', github: 'https://github.com/shanaya-mahendran/Portfolio', detail: 'Modern, high-performance personal portfolio built with Next.js (App Router), React, and TypeScript. Features Framer Motion page transitions, an interactive HTML5 Canvas hero particle networking simulation, a glassmorphism dark/light theme engine, Prisma database schema integration, and perfect 100 Lighthouse performance scores.' },
    { id: 'sara', title: 'Sara — Modern E-Commerce Platform', description: 'Full-stack e-commerce platform with FastAPI + PostgreSQL backend, Docker deployment, and vanilla JS frontend.', category: 'fullstack', tags: ['FastAPI', 'PostgreSQL', 'JavaScript', 'Docker', 'Vite', 'Vitest'], image: '/images/Sara.png', link: 'https://sara-001.vercel.app/', github: 'https://github.com/shanaya-mahendran/Sara', detail: 'Full-stack e-commerce platform featuring 32 real products, 4-column responsive grid, JWT auth, AI visual similarity search (FAISS + Transformers), real-time shared cart via WebSockets, multi-step checkout, PWA support, and 117 test files (988 unit tests) with Vitest.' },
    { id: 'cabXpert', title: 'CabXpert — Vehicle Reservation System', description: 'Online vehicle reservation system automating bookings, driver & car management, and billing.', category: 'fullstack', tags: ['Java EE', 'Jersey (JAX-RS)', 'MySQL', 'JDBC', 'Maven', 'Bootstrap'], image: '/images/CarXpert.png', link: '#', github: 'https://github.com/Shanaya-Mahendran', detail: 'Automated vehicle reservation system built for Mega City Cab using Java RESTful Web Services (Jersey) and Test-Driven Development (TDD). Ensures high reliability, scalability, driver & car scheduling, and automated billing management.' },
    { id: 'elegant-notes', title: 'Elegant Notes — PWA', description: 'Offline-first note-taking PWA with real-time cloud sync and premium editor.', category: 'web', tags: ['React', 'TypeScript', 'Supabase', 'Tiptap', 'Zustand'], image: '/images/Elegant-Notes.webp', link: 'https://elegant-notes-demo.vercel.app/', github: 'https://github.com/shanaya-mahendran/elegant-notes', detail: 'High-performance offline-first PWA with Service Workers, Supabase for real-time cloud sync, secure authentication, and a premium Tiptap editor with complex formatting.' },
    { id: 'ssoc-2026', title: 'PTET Web', description: '43 merged PRs — backend APIs, full-stack features, and UI enhancements.', category: 'opensource', tags: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'Social Summer of Code 2026', 'Collaborator'], image: '/images/ptet.png', link: 'https://github.com/AnthropicBots/ptet-web', github: 'https://github.com/AnthropicBots/ptet-web/pulls?q=is%3Apr+author%3Ashanaya-mahendran', detail: 'Open-source contributor with 43+ merged pull requests. Built backend APIs (Daily Tip, Study Materials CRUD, Recommendations, Bookmark), implemented full-stack features, and fixed dark/light theme support across the application.' },
    { id: 'my-educational', title: 'My Educational Website', description: 'Clean single-page portfolio built with pure HTML, CSS, and JavaScript.', category: 'web', tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'], image: '/images/iaii.png', link: 'https://my-web-project-iaii.vercel.app/', github: 'https://github.com/shanaya-mahendran/my-web-project-iaii', detail: 'A clean, single-page static portfolio website built with pure HTML to showcase projects and academic work. Deployed on Vercel with a streamlined workflow.' },
    { id: 'slia-intern', title: 'SLIA Database Management', description: 'Built and maintained SQLite database for 700+ member practice registration.', category: 'fullstack', tags: ['SQLite', 'Data Management', 'Google Forms'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format', link: '#', github: '#', detail: 'Developed and maintained an SQLite database for member practice registration of 700+ members at Sri Lanka Institute of Architects. Processed member updates via Google Forms and coordinated communications.' },
    { id: 'day-01', title: 'Java Basics — Quiz Game', description: 'Multiple-choice questions, input validation, instant feedback, score tracking, answer summary.', category: 'learning', tags: ['Java', 'CLI', 'Input Validation'], image: '/images/Project01.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-01', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-01', detail: 'Built an interactive Java CLI quiz game featuring multiple-choice questions, input validation, real-time score tracking, instant answer feedback, and a comprehensive end-of-game performance summary.' },
    { id: 'day-02', title: 'Java — Library Management System', description: 'Add/borrow/return books, inventory tracking, input validation, exception handling, persistent session.', category: 'learning', tags: ['Java', 'HashMap', 'Data Structures', 'Exception Handling'], image: '/images/Project02.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-02', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-02', detail: 'Developed a robust Java console library management application utilizing HashMap for fast inventory lookups, supporting add/borrow/return workflows, stock tracking, and exception handling.' },
    { id: 'day-03', title: 'Java OOP — Student Management System', description: 'Add/update/view students, duplicate ID check, static data management, menu-driven interface.', category: 'learning', tags: ['Java', 'OOP', 'Encapsulation', 'Static Data'], image: '/images/Project03.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-03', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-03', detail: 'Demonstrated key object-oriented programming principles (encapsulation, abstraction) in Java by building a menu-driven student management system with duplicate ID validation and static data control.' },
    { id: 'day-04', title: 'Java — Stock Analysis (Arrays & ArrayLists)', description: 'Average price, maximum price, occurrence count, cumulative sum, both array and ArrayList implementations.', category: 'learning', tags: ['Java', 'ArrayList', 'Arrays', 'Data Structures'], image: '/images/Project04.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-04', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-04', detail: 'Implemented financial stock price analysis algorithms comparing fixed-size Java primitive arrays against dynamic ArrayLists, computing average price, max price, occurrence count, and cumulative totals.' },
    { id: 'day-05', title: 'Java — University Enrollment & Grade System', description: 'Add courses/students, enroll with capacity check, assign grades (0–100), overall average calculation.', category: 'learning', tags: ['Java', 'OOP', 'Data Validation', 'Collections'], image: '/images/Project05.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-05', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-05', detail: 'Created a multi-entity Java university enrollment system allowing student course registration with strict capacity enforcement, grade assignments (0-100), static counter tracking, and GPA calculations.' },
    { id: 'day-06', title: 'Java — Car Rental Agency System', description: 'Add cars/motorcycles/trucks, type-specific attributes (doors, wheels, cargo), robust input validation.', category: 'learning', tags: ['Java', 'Interfaces', 'Polymorphism', 'OOP'], image: '/images/Project06.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-06', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-06', detail: 'Built a polymorphic Java vehicle rental engine leveraging interfaces and class inheritance to manage diverse vehicle types (cars, motorcycles, trucks) with custom attributes and inventory reporting.' },
    { id: 'day-07', title: 'Java Swing GUI — Student Management System', description: 'Tabbed interface (students, enrollments, grades), CRUD operations, auto-generated IDs, grade scale 0.0–4.0.', category: 'learning', tags: ['Java', 'Java Swing', 'GUI', 'CRUD'], image: '/images/Project07.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-07', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-07', detail: 'Designed a tabbed Java Swing desktop application featuring full CRUD capabilities for student records, automated student ID generation, grade point average calculation (0.0-4.0), and dynamic table views.' },
    { id: 'day-08', title: 'Python — CLI & GUI Calculator Suite', description: 'Basic arithmetic, division/modulo by zero handling, Tkinter dark-theme GUI, button layout.', category: 'learning', tags: ['Python', 'Tkinter', 'GUI', 'CLI'], image: '/images/Project08.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-08', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-08', detail: 'Developed a dual-mode calculator in Python featuring both a CLI version and a sleek Tkinter dark-mode desktop GUI with division-by-zero protection and real-time expression evaluation.' },
    { id: 'day-09', title: 'Java Swing GUI — Library Management System', description: 'Add/delete/update books, borrow/return with quantity control, search/filter, persistent file storage.', category: 'learning', tags: ['Java', 'Java Swing', 'GUI', 'File I/O', 'Serialization'], image: '/images/Project09.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-09', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-09', detail: 'Created an advanced Java Swing library app with persistent object serialization, live text filtering by title/author, stock quantity control, timestamped transaction logs, and status bar feedback.' },
    { id: 'day-10', title: 'Java Swing GUI — Car Rental Agency System', description: 'Tabbed interface (add car/motorcycle/truck), type-specific attributes, polymorphic storage.', category: 'learning', tags: ['Java', 'Java Swing', 'Polymorphism', 'GUI'], image: '/images/Project10.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-10', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-10', detail: 'Constructed a graphical desktop interface for car rentals in Java Swing, utilizing polymorphic collection storage for cars, motorcycles, and trucks with custom form validation and instant refresh.' },
    { id: 'day-11', title: 'Python — TaskFlow Pro To-Do List', description: 'Modern dark/light mode UI, add/complete/delete tasks, persistent storage (tasks.txt), status bar.', category: 'learning', tags: ['Python', 'CustomTkinter', 'GUI', 'File I/O'], image: '/images/Project11.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-11', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-11', detail: 'Engineered a modern productivity desktop app in Python using CustomTkinter, featuring persistent text storage, theme toggles, status counters (total/completed/pending), and smooth scrolling lists.' },
    { id: 'day-12', title: 'Java — Functional Programming & Stream API', description: 'Lambda expressions, stream mapping/filtering/averaging/grouping, parallel stream benchmark, top earners.', category: 'learning', tags: ['Java', 'Stream API', 'Functional Programming', 'Lambdas'], image: '/images/Project12.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-12', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-12', detail: 'Deep dive into modern Java functional programming concepts: Stream API pipelines, collectors, method references, Optional safety, parallel stream performance benchmarks, and department analytics.' },
    { id: 'day-13', title: 'Python — Number Guessing Game', description: 'Random secret number (1–100), input validation, hints (too low/high), attempt counter, Enter key support.', category: 'learning', tags: ['Python', 'Tkinter', 'GUI', 'Game'], image: '/images/Project13.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-13', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-13', detail: 'Built an interactive Python Tkinter number guessing game with automatic range checking, adaptive hint system, attempt counting, keyboard shortcuts (Enter key), and winner modal dialogs.' },
    { id: 'day-14', title: 'Python — Secure Password Generator', description: 'Cryptographically secure passwords (secrets module), length slider (8–50), clipboard copy, dark GUI.', category: 'learning', tags: ['Python', 'CustomTkinter', 'Security', 'GUI'], image: '/images/Project14.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-14', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-14', detail: 'Built a security utility in Python using the `secrets` module for cryptographically strong random generation with length sliders (8-50), character set selection, and 1-click clipboard copying.' },
    { id: 'day-15', title: 'Python — Rock Paper Scissors Game', description: 'Three move buttons, computer random choice, real-time score tracking, color-coded winner announcement.', category: 'learning', tags: ['Python', 'CustomTkinter', 'GUI', 'Game'], image: '/images/Project15.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-15', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-15', detail: 'Created a desktop arcade game in Python CustomTkinter with animated move buttons, AI move selection, color-coded victory banners, score state persistence, and OS-matched dark/light themes.' },
    { id: 'day-16', title: 'Java — Text Analysis Tool', description: 'Character/word counts, most common character/word, frequency analysis, unique word count, case-insensitive.', category: 'learning', tags: ['Java', 'Collections', 'HashMap', 'Text Processing'], image: '/images/Project16.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-16', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-16', detail: 'Developed a high-efficiency Java text processing tool analyzing character and word frequencies using HashMaps/HashSets, sentence stats, punctuation stripping, and top-frequency reporting.' },
    { id: 'day-17', title: 'Python — Weather App (Open-Meteo API)', description: 'City search with geocoding, real-time weather display, WMO code mapping with emojis, Open-Meteo API.', category: 'learning', tags: ['Python', 'CustomTkinter', 'API', 'GUI', 'JSON'], image: '/images/Project17.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-17', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-17', detail: 'Built a live desktop weather forecasting app in Python using Open-Meteo REST API, featuring geocoding city lookup, WMO weather code mapping to visual emojis, and CustomTkinter aesthetics.' },
    { id: 'day-18', title: 'Java Swing GUI — Generic Library Catalog System', description: 'Generic Catalog<T> and LibraryItem<T> classes, type-safe operations, Book/DVD/Magazine types, CardLayout.', category: 'learning', tags: ['Java', 'Java Swing', 'Generics', 'GUI', 'OOP'], image: '/images/Project18.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-18', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-18', detail: 'Implemented Java Generics (`Catalog<T>`, `LibraryItem<T>`) within a CardLayout Swing GUI to create a type-safe library system supporting Books, DVDs, and Magazines with unique item details.' },
    { id: 'day-19', title: 'Java Swing GUI — Multithreaded Clock Application', description: 'Two threads (display updater & time updater), volatile communication, invokeLater(), daemon threads.', category: 'learning', tags: ['Java', 'Java Swing', 'Multithreading', 'Concurrency', 'GUI'], image: '/images/Project19.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-19', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-19', detail: 'Demonstrated Java multithreading and thread synchronization by creating a real-time Swing clock app with separate display and time calculation threads using thread priorities and `SwingUtilities.invokeLater()`.' },
    { id: 'day-20', title: 'Java Swing GUI — E-Commerce System', description: 'Product catalog with stock management, shopping cart, order status tracking (Pending → Delivered).', category: 'learning', tags: ['Java', 'Java Swing', 'GUI', 'OOP', 'E-Commerce'], image: '/images/Project20.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-20', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-20', detail: 'Designed a complete Java Swing desktop e-commerce app with dynamic product inventory, shopping cart management, automatic stock reduction on checkout, order status pipelines, and split-pane layout.' },
    { id: 'day-21', title: 'Java — Online Chat Application (Socket Programming)', description: 'Multi-client support, message broadcasting, join/leave notifications, multithreaded client handlers, TCP sockets.', category: 'learning', tags: ['Java', 'Java Swing', 'Socket Programming', 'Multithreading', 'Networking'], image: '/images/Project21.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-21', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-21', detail: 'Built a real-time TCP socket chat server and Swing client in Java supporting multiple concurrent clients, multi-threaded client socket handlers, user join/leave alerts, and auto-scrolling chat logs.' },
    { id: 'day-22', title: 'Java Swing — Weather Application', description: 'Real-time weather & 5-day forecast, city search history, dynamic time-of-day backgrounds, OpenWeatherMap API.', category: 'learning', tags: ['Java', 'Java Swing', 'API', 'Gson', 'MVC', 'GUI'], image: '/images/Project22.webp', link: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-22', github: 'https://github.com/shanaya-mahendran/My-Learning-Journal/tree/main/Day-22', detail: 'Created an MVC Java Swing weather forecasting app integrated with OpenWeatherMap API and Gson JSON parser, featuring 5-day weather predictions, search history, dynamic background colors, and unit toggles.' }
  ]
}

export default function SkillsPage() {
  const [activeTag, setActiveTag] = useState('')
  const [modalData, setModalData] = useState<typeof DATA.projects[0] | null>(null)

  useEffect(() => {
    const fillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target as HTMLElement
          const target = fill.dataset.target
          fill.style.width = target + '%'
          fillObserver.unobserve(fill)
        }
      })
    }, { threshold: 0.3 })
    document.querySelectorAll('.skill-bar-fill').forEach(f => fillObserver.observe(f))
    
    return () => fillObserver.disconnect()
  }, [])

  const relatedProjectIds = activeTag ? (DATA.skillProjectMap as Record<string, string[]>)[activeTag] || [] : []
  const relatedProjects = DATA.projects.filter(p => relatedProjectIds.includes(p.id))

  return (
    <>
      <section className="section-padding" style={{ paddingTop: '120px' }}>
        <div className="container">
          <h2 className="section-title">Tech Stack &amp; <span className="accent-text">Expertise</span></h2>
          <p className="section-subtitle">Tools, languages, and frameworks I work with daily.</p>

          <div id="skillsContainer">
            {DATA.skillCategories.map(cat => (
              <div className="skill-category" key={cat.name}>
                <h3>{cat.name}</h3>
                {cat.skills.map(s => (
                  <div className="skill-bar-wrap" data-level={s.level} key={s.name}>
                    <div className="label">
                        <span>{s.name}</span>
                        <span>{s.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                        <div className="skill-bar-fill" style={{ width: '0%' }} data-target={s.level}></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <h3 className="section-title" style={{ fontSize: '1.6rem', marginTop: '48px' }}>Skill <span className="accent-text">Cloud</span></h3>
          <p className="section-subtitle" style={{ marginBottom: '16px' }}>Click a skill to see related projects.</p>
          <div className="skill-tag-cloud" id="skillCloud">
            {DATA.allSkillTags.map(tag => (
              <span 
                key={tag} 
                className={`skill-tag ${activeTag === tag ? 'active' : ''}`} 
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </span>
            ))}
          </div>

          <div id="relatedProjectsContainer">
            {activeTag && (
              relatedProjects.length === 0 ? (
                <p style={{ color: 'var(--text-secondary)' }}>No projects found for <strong>{activeTag}</strong>. Try another tag.</p>
              ) : (
                <>
                  <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>Projects using <span className="accent-text">{activeTag}</span></h4>
                  <div className="related-projects">
                    {relatedProjects.map(p => (
                      <div className="rp-item" key={p.id} onClick={() => setModalData(p)}>
                        <h4>{p.title}</h4>
                        <p>{p.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )
            )}
          </div>
        </div>
      </section>

      {/* PROJECT MODAL */}
      <div className={`modal-overlay ${modalData ? 'open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setModalData(null) }}>
        <div className="modal-content">
          <button className="modal-close" onClick={() => setModalData(null)} aria-label="Close modal">✕</button>
          
          {modalData && (
            <div id="modalBody">
              <div className="thumb" style={{ position: 'relative', margin: '-40px -40px 24px -40px', height: '280px', width: 'calc(100% + 80px)', borderRadius: 0 }}><Image src={modalData.image} alt={modalData.title} fill sizes="100vw" style={{ objectFit: 'cover' }} /></div>
              <h2>{modalData.title}</h2>
              <div className="meta">{modalData.category} · {modalData.tags.join(' · ')}</div>
              <p className="desc">{modalData.detail || modalData.description}</p>
              <div className="tech-list">{modalData.tags.map(t => <span key={t}>{t}</span>)}</div>
              <div className="links">
                  {modalData.link && modalData.link !== '#' && <a href={modalData.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">🔗 Live Site</a>}
                  {modalData.github && modalData.github !== '#' && <a href={modalData.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">🐙 GitHub</a>}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
