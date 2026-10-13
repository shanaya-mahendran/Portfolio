export type PhaseType = 'Exploring' | 'Planned' | 'Building' | 'Pilot' | 'Deployed' | 'Impact Verified'

export interface SDGInfo {
  number: number
  title: string
  color: string
  icon: string
  tagline: string
}

export const SDG_METADATA: Record<number, SDGInfo> = {
  4: {
    number: 4,
    title: 'Quality Education',
    color: '#C5192D',
    icon: 'GraduationCap',
    tagline: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all'
  },
  8: {
    number: 8,
    title: 'Decent Work & Economic Growth',
    color: '#A21942',
    icon: 'Briefcase',
    tagline: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment'
  },
  9: {
    number: 9,
    title: 'Industry, Innovation & Infrastructure',
    color: '#F36D25',
    icon: 'Cpu',
    tagline: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation'
  },
  10: {
    number: 10,
    title: 'Reduced Inequalities',
    color: '#DD1367',
    icon: 'Scale',
    tagline: 'Reduce inequality within and among countries through inclusive digital access'
  },
  11: {
    number: 11,
    title: 'Sustainable Cities & Communities',
    color: '#FD9D24',
    icon: 'Building2',
    tagline: 'Make cities and human settlements inclusive, safe, resilient and sustainable'
  },
  12: {
    number: 12,
    title: 'Responsible Consumption & Production',
    color: '#BF8B2E',
    icon: 'Recycle',
    tagline: 'Ensure sustainable consumption and production patterns through circular tracking'
  },
  13: {
    number: 13,
    title: 'Climate Action',
    color: '#3F7E44',
    icon: 'Leaf',
    tagline: 'Take urgent action to combat climate change and its impacts through data-driven stewardship'
  },
  16: {
    number: 16,
    title: 'Peace, Justice & Strong Institutions',
    color: '#00689D',
    icon: 'ShieldCheck',
    tagline: 'Promote peaceful, inclusive societies, provide access to justice and build effective institutions'
  },
  17: {
    number: 17,
    title: 'Partnerships for the Goals',
    color: '#19486A',
    icon: 'Handshake',
    tagline: 'Strengthen the means of implementation and revitalize the global partnership for sustainable development'
  }
}

export interface MissionPillar {
  id: string
  title: string
  subtitle: string
  icon: string
  sdgs: number[]
  overview: string
  focusAreas: string[]
  quote: string
}

export interface Milestone {
  id: string
  title: string
  description: string
  targetQuarter: string
  isCompleted: boolean
  deliverable: string
}

export interface ImpactInitiative {
  slug: string
  title: string
  tagline: string
  primaryObjective: string
  targetDemographic: string
  provinces: string[]
  phase: PhaseType
  phaseIndex: number // 0 to 5
  sdgs: number[]
  icon: string
  image: string
  externalResources: {
    label: string
    url: string
    type: 'github' | 'paper' | 'brief'
  }[]
  problem: {
    overview: string
    rootCauses: string[]
    sriLankaContext: string
    impactMetrics: {
      stat: string
      label: string
    }[]
  }
  targetCommunity: {
    personas: {
      role: string
      description: string
      painPoints: string[]
    }[]
    accessibilityFocus: string
  }
  proposedSolution: {
    summary: string
    operationalModel: string
    citizenWorkflow: string[]
    keyInnovations: string[]
  }
  architecture: {
    summary: string
    stack: string[]
    offlineFirstStrategy: string
    bandwidthOptimization: string
    trilingualSupport: string
    dataPrivacy: string
  }
  milestones: Milestone[]
  successCriteria: {
    metric: string
    target: string
    verificationMethod: string
  }[]
  operationalDisclaimer: {
    assumptions: string[]
    externalDependencies: string[]
    governanceEthics: string
  }
}

export const MISSION_PILLARS: MissionPillar[] = [
  {
    id: 'govtech',
    title: 'GovTech & Digital Public Infrastructure',
    subtitle: 'SDG 9 · SDG 16',
    icon: 'Landmark',
    sdgs: [9, 16],
    overview: 'Accelerating citizen-centric e-governance, minimizing bureaucratic friction, and restoring institutional transparency across Sri Lanka through verifiable, open digital public goods.',
    focusAreas: [
      'Eliminating single-point bureaucratic gatekeepers with verifiable digital workflows',
      'Geotagged civic issue reporting with public SLA resolution timers',
      'Open data transparency dashboards for local Pradeshiya Sabhas and Municipal Councils',
      'Auditable digital logging to combat institutional opacity'
    ],
    quote: '"Public infrastructure in the 21st century is code. When civic systems are open, auditable, and resilient, democratic trust is restored."'
  },
  {
    id: 'inclusion',
    title: 'Regional Inclusion & Multilingual Equity',
    subtitle: 'SDG 10 · SDG 4',
    icon: 'Languages',
    sdgs: [10, 4],
    overview: 'Bridging the stark urban-rural divide by engineering lightweight, offline-first systems in Sinhala, Tamil, and English across all 9 provinces of Sri Lanka.',
    focusAreas: [
      'Strict trilingual parity—not afterthoughts, but native architectural first principles',
      'Sub-50KB payloads optimized for 2G/3G mobile networks and intermittent power',
      'Offline-first Service Workers ensuring full utility during electrical load shedding',
      'Inclusive audio-assisted and iconographic interfaces for low-literacy users'
    ],
    quote: '"Technology that only functions on 5G in Colombo is not national infrastructure—it is an amplifier of inequality. True impact begins where connectivity ends."'
  },
  {
    id: 'ecological',
    title: 'Ecological Resilience & Smart Systems',
    subtitle: 'SDG 11 · SDG 12 · SDG 13',
    icon: 'Sprout',
    sdgs: [11, 12, 13],
    overview: 'Deploying edge telemetry, circular economy workflows, and IoT monitoring to protect Sri Lanka’s vulnerable biodiversity, urban environments, and resource stewardship.',
    focusAreas: [
      'Decentralized municipal waste and recyclables routing systems',
      'Micro-climate flood and disaster warning networks for transport corridors',
      'Resource stewardship dashboards tracking community recycling yields',
      'Low-power sensor telemetry resilient against severe weather disruptions'
    ],
    quote: '"Island nations bear the brunt of climate volatility. Our digital architectures must serve as early warning shields and resource optimizers."'
  },
  {
    id: 'economy',
    title: 'Digital Economy & Youth Empowerment',
    subtitle: 'SDG 8 · SDG 17',
    icon: 'TrendingUp',
    sdgs: [8, 17],
    overview: 'Cultivating grassroots developer skills, open-source innovation, and decentralized economic opportunities to power Sri Lanka’s emerging knowledge economy.',
    focusAreas: [
      'Disintermediating informal gig economy workers from exploitative fee brokers',
      'Open-source mentorship and civic hackathon leadership for undergraduates',
      'Equitable skills accreditation accessible beyond elite metropolitan institutions',
      'Building global open-source partnerships that bridge local engineers with international initiatives'
    ],
    quote: '"Sri Lanka’s most resilient natural resource is the intellect and determination of its youth. We engineer platforms that transform potential into economic sovereignty."'
  }
]

export const IMPACT_INITIATIVES: ImpactInitiative[] = [
  {
    slug: 'community-smart-waste-network',
    title: 'Municipal Waste & Recyclables Route Optimiser',
    tagline: 'Decentralized civic routing platform coordinating community waste collection and recycling drop points with offline resilience.',
    primaryObjective: 'Minimize municipal collection downtime, prevent illegal canal dumping, and incentivize community recycling sorting across urban Western Province.',
    targetDemographic: 'Urban households, municipal sanitation workers, and informal recycling collectors.',
    provinces: ['Western Province (Colombo & Moratuwa)', 'Southern Province (Galle)'],
    phase: 'Exploring',
    phaseIndex: 0,
    sdgs: [11, 12, 13],
    icon: 'Recycle',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1000&auto=format&fit=crop&q=80',
    externalResources: [
      { label: 'Architecture Concept Repo', url: 'https://github.com/shanaya-mahendran/smart-waste-routing', type: 'github' },
      { label: 'Municipal Waste Field Notes (PDF)', url: '#', type: 'brief' }
    ],
    problem: {
      overview: 'Municipal waste collection across Greater Colombo and Moratuwa suffers from erratic truck scheduling, fuel constraints, and lack of citizen visibility. Households dump uncollected organic waste into open storm drains, exacerbating urban flash floods and ocean microplastic contamination.',
      rootCauses: [
        'Municipal collection trucks operate on rigid legacy routes with zero dynamic route optimization for fuel efficiency',
        'Citizens have zero real-time visibility into collection schedules, leading to curbside waste pileups',
        'Informal recycling aggregators operate in silos without coordinated neighborhood drop-off schedules'
      ],
      sriLankaContext: 'Over 3,200 metric tonnes of solid waste are generated daily in Western Province alone. Following recent economic shocks, municipal councils face acute fuel quotas, making optimized waste routing a matter of critical urban public health.',
      impactMetrics: [
        { stat: '3,200T', label: 'Daily Waste in Western Province' },
        { stat: '42%', label: 'Uncollected or Canal-Dumping Rate' },
        { stat: '28%', label: 'Estimated Fuel Savings via Dynamic Routing' }
      ]
    },
    targetCommunity: {
      personas: [
        {
          role: 'Municipal Sanitation Truck Drivers',
          description: 'Drivers navigating narrow residential roads with restricted fuel budgets and no GPS routing tools.',
          painPoints: ['Arriving at streets where bins are empty', 'Fuel exhaustion mid-route', 'Lack of offline map directions']
        },
        {
          role: 'Suburban Residents & Small Businesses',
          description: 'Households seeking reliable pickup schedules and clear recycling segregation instructions.',
          painPoints: ['Stray animals scattering uncollected rubbish', 'No clear days for plastic/glass segregation', 'Lack of feedback mechanism']
        },
        {
          role: 'Grassroots Recyclable Collectors',
          description: 'Informal economy scrap dealers seeking aggregated bulk pickup locations.',
          painPoints: ['Wasted travel distance searching for recyclables', 'Price opacity from wholesale brokers']
        }
      ],
      accessibilityFocus: 'Low-bandwidth PWA with offline vector maps, icon-driven waste sorting categories, and audio alerts in Sinhala and Tamil.'
    },
    proposedSolution: {
      summary: 'A progressive web app that coordinates municipal truck telemetry with citizen pickup notifications and community recycling drop-points. Operates offline-first using service worker caching so collectors can record pickups without cell service.',
      operationalModel: 'Truck drivers broadcast lightweight location beacons along optimized daily loops. Citizens receive a localized chime 15 minutes before the truck enters their lane. Neighborhood collection hubs log sorted recyclables to earn municipal tax rebates or community tokens.',
      citizenWorkflow: [
        '1. Citizen opens lightweight PWA without app store download',
        '2. Live status card displays designated waste category for the day (Organic vs Plastics/Paper)',
        '3. Proximity alert triggers when municipal truck crosses neighborhood geofence',
        '4. Verification scan confirms household disposal and aggregates neighborhood cleanliness score'
      ],
      keyInnovations: [
        'Dynamic Travelling Salesperson Problem (TSP) heuristic optimized for narrow Sri Lankan sub-lanes',
        'Offline-first IndexedDB cache synchronizing via batched delta compression',
        'Automated SMS fallback notifications for non-smartphone households'
      ]
    },
    architecture: {
      summary: 'Built on Next.js PWA, Leaflet offline tiles, and Supabase / PostgreSQL with PostGIS spatial extensions for spatial clustering.',
      stack: ['Next.js PWA', 'PostgreSQL / PostGIS', 'Leaflet.js', 'Service Workers', 'IndexedDB', 'SMS Gateway API'],
      offlineFirstStrategy: 'All municipal road routing graphs are cached on device. Route changes are calculated client-side in the truck cabin without active cloud connection.',
      bandwidthOptimization: 'Average session packet size under 18KB; vector tiles compressed via Brotli.',
      trilingualSupport: 'Full trilingual localization strings stored in zero-dependency lightweight JSON dictionaries.',
      dataPrivacy: 'No personal identification is tied to waste logs; coordinates are snapped to street centroid.'
    },
    milestones: [
      {
        id: 'w-1',
        title: 'Phase 1: Field Discovery & Route Mapping',
        description: 'Document actual collection route bottlenecks across 3 wards in Moratuwa Municipal Council.',
        targetQuarter: 'Q2 2026',
        isCompleted: true,
        deliverable: 'Spatial route log data and ward interview dossier'
      },
      {
        id: 'w-2',
        title: 'Phase 2: Offline PWA Prototype Engine',
        description: 'Build core offline PWA with PostGIS routing heuristic and trilingual UI shell.',
        targetQuarter: 'Q3 2026',
        isCompleted: true,
        deliverable: 'Interactive prototype running on low-end Android hardware'
      },
      {
        id: 'w-3',
        title: 'Phase 3: Community Pilot (250 Households)',
        description: 'Execute controlled 4-week field pilot with local community welfare committee.',
        targetQuarter: 'Q4 2026',
        isCompleted: false,
        deliverable: 'Validated pilot report with fuel consumption delta'
      },
      {
        id: 'w-4',
        title: 'Phase 4: Municipal Council Integration',
        description: 'Open-source the platform and submit governance proposal to Urban Development Authority.',
        targetQuarter: 'Q1 2027',
        isCompleted: false,
        deliverable: 'Production DPI deployment handbook and council dashboard'
      }
    ],
    successCriteria: [
      { metric: 'Household Participation', target: '≥ 75% in pilot ward', verificationMethod: 'Daily disposal logs' },
      { metric: 'Missed Pickup Reductions', target: '≥ 35% reduction', verificationMethod: 'Community grievance tickets' },
      { metric: 'Recyclables Diverted', target: '≥ 2.4 tonnes / month', verificationMethod: 'Aggregator weighbridge receipts' }
    ],
    operationalDisclaimer: {
      assumptions: [
        'Local municipal sanitation departments are willing to share driver schedule constraints',
        'Smartphones or feature phone SMS access are present in at least 85% of target households'
      ],
      externalDependencies: [
        'Municipal council formal endorsement for driver route adherence',
        'Stability of localized municipal fuel supplies for consistent collection cadence'
      ],
      governanceEthics: 'Civic technology is never a substitute for adequate municipal funding and sanitation worker labor protections. This software is designed to protect workers from route exhaustion and empower communities, not enforce punitive driver surveillance.'
    }
  },
  {
    slug: 'public-service-reporting-dashboard',
    title: 'Public Service Transparency & Civic Reporting Dashboard',
    tagline: 'Trilingual geotagged civic issue reporting platform holding local municipal authorities accountable with verifiable resolution timestamps.',
    primaryObjective: 'Provide every citizen an unalterable, transparent channel to report broken roads, water leaks, and public health hazards, with public SLA accountability.',
    targetDemographic: 'Sri Lankan citizens, local ward councilors, and civil society oversight organizations.',
    provinces: ['All 9 Provinces (Western, Central, Northern, Southern, Eastern, North Western, North Central, Uva, Sabaragamuwa)'],
    phase: 'Planned',
    phaseIndex: 1,
    sdgs: [16, 9],
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1000&auto=format&fit=crop&q=80',
    externalResources: [
      { label: 'GitHub Repository Draft', url: 'https://github.com/shanaya-mahendran/civic-reporting-dashboard', type: 'github' },
      { label: 'Civic DPI Specification', url: '#', type: 'paper' }
    ],
    problem: {
      overview: 'Citizens reporting dangerous open manholes, contaminated water supplies, or unlit rural intersections must navigate opaque government departments, handwritten letters, and bureaucratic apathy. Issues linger unresolved for months with zero public tracking.',
      rootCauses: [
        'Zero centralized public tracking; grievances disappear into physical file cabinets',
        'Lack of public visibility creates no institutional incentive for rapid resolution',
        'Language barriers: Tamil-speaking citizens in mixed districts encounter Sinhala-only forms and vice versa'
      ],
      sriLankaContext: 'Sri Lanka operates 341 local authorities (Municipal Councils, Urban Councils, and Pradeshiya Sabhas). Most possess zero automated grievance handling systems, resulting in deep citizen disillusionment and delayed emergency responses.',
      impactMetrics: [
        { stat: '341', label: 'Local Authorities Across Sri Lanka' },
        { stat: '84%', label: 'Authorities Without Digital Reporting' },
        { stat: '45+ Days', label: 'Average Time to Address Basic Road Hazard' }
      ]
    },
    targetCommunity: {
      personas: [
        {
          role: 'Daily Commuters & School Parents',
          description: 'Citizens walking past open sewer pits, downed power lines, or severe potholes.',
          painPoints: ['Not knowing who has jurisdiction', 'Endless phone calls transferred between departments']
        },
        {
          role: 'Ward Council Representatives',
          description: 'Local representatives who want to demonstrate transparent constituent responsiveness.',
          painPoints: ['Overwhelmed by random WhatsApp messages', 'No verifiable records of contractor repairs']
        },
        {
          role: 'Civil Society & Investigative Journalists',
          description: 'Organizations tracking municipal fund utilization and regional infrastructure neglect.',
          painPoints: ['No open data APIs to track local authority repair speeds']
        }
      ],
      accessibilityFocus: 'Trilingual voice note upload option; camera-first quick report mode requiring under 3 taps.'
    },
    proposedSolution: {
      summary: 'A public digital public good (DPG) where citizens photograph and pin civic hazards. The platform automatically assigns the ticket to the correct Pradeshiya Sabha based on spatial boundary polygons and starts a public countdown timer.',
      operationalModel: 'Open dashboard displaying all active issues categorized by urgency, ward, and elapsed days. When municipal teams mark an issue resolved, photo verification and community confirmation are required to close the public SLA ticket.',
      citizenWorkflow: [
        '1. Snap photo of hazard with GPS location automatically captured',
        '2. Select hazard category (Road, Water, Sanitation, Power, Drainage)',
        '3. System determines municipal boundary jurisdiction and issues public Ticket ID',
        '4. Public dashboard tracks days open; updates sent via SMS/WhatsApp when work commences'
      ],
      keyInnovations: [
        'Jurisdiction Auto-Resolution: PostGIS polygon matching maps GPS coordinates directly to correct administrative ward',
        'Public SLA Ticker: Days elapsed since report is visible to all citizens, encouraging accountability',
        'Community Peer-Verification: Tickets cannot be closed without at least 2 independent nearby citizen confirmations'
      ]
    },
    architecture: {
      summary: 'Next.js App Router, Tailwind/Vanilla CSS, PostgreSQL with PostGIS, Supabase Realtime, and Cloudflare R2 image storage with client-side EXIF sanitization.',
      stack: ['Next.js 14', 'TypeScript', 'Supabase / PostGIS', 'Cloudflare R2', 'Leaflet / OpenStreetMap', 'WhatsApp Business API'],
      offlineFirstStrategy: 'Local report drafting saves pending submissions to IndexedDB and automatically transmits when connectivity is detected.',
      bandwidthOptimization: 'Images resized client-side to maximum 800px width before upload, keeping payload < 95KB.',
      trilingualSupport: 'Real-time interface switcher with native Sinhala, Tamil, and English semantic strings.',
      dataPrivacy: 'Citizen phone numbers are hashed; only public anonymized usernames are displayed on maps.'
    },
    milestones: [
      {
        id: 'p-1',
        title: 'Phase 1: Administrative Boundary Mapping',
        description: 'Digitize and compile GeoJSON polygons for all local authorities in Western and Central Provinces.',
        targetQuarter: 'Q3 2026',
        isCompleted: true,
        deliverable: 'Open GeoJSON boundary repository'
      },
      {
        id: 'p-2',
        title: 'Phase 2: Core Reporting Platform & SLA Engine',
        description: 'Build trilingual web reporting app and public accountability board.',
        targetQuarter: 'Q4 2026',
        isCompleted: false,
        deliverable: 'Functional staging deployment with live map visualization'
      },
      {
        id: 'p-3',
        title: 'Phase 3: Civil Society Alpha Trial',
        description: 'Partner with 2 youth civic groups to test live hazard submission and resolution logging.',
        targetQuarter: 'Q1 2027',
        isCompleted: false,
        deliverable: 'Trial analysis report with verified resolution rates'
      },
      {
        id: 'p-4',
        title: 'Phase 4: Open API & Council Handover',
        description: 'Release open REST APIs for municipal authorities and university researchers.',
        targetQuarter: 'Q2 2027',
        isCompleted: false,
        deliverable: 'Comprehensive API documentation and developer portal'
      }
    ],
    successCriteria: [
      { metric: 'Time to First Acknowledgment', target: '≤ 48 Hours', verificationMethod: 'Audit log timestamp' },
      { metric: 'Community Verification Pass Rate', target: '≥ 85% accuracy', verificationMethod: 'Peer-reviewed closing photos' },
      { metric: 'Public Citizen Reports', target: '1,000+ reports logged in year 1', verificationMethod: 'Database public ledger' }
    ],
    operationalDisclaimer: {
      assumptions: [
        'Local authority officials will engage constructively rather than attempt to block public scrutiny',
        'Sufficient civic momentum exists to sustain community peer-verification'
      ],
      externalDependencies: [
        'OpenStreetMap administrative polygon accuracy in rural areas',
        'Reliable telecommunication SMS gateways for status notification delivery'
      ],
      governanceEthics: 'The dashboard strictly filters private property disputes and personal defamation. All reports are strictly scoped to public infrastructure assets.'
    }
  },
  {
    slug: 'digital-marketplace-informal-workers',
    title: 'Digital Marketplace for Informal Workers',
    tagline: 'Trust-verified mobile directory connecting informal tradespeople and domestic workers to fair gigs without exploitative middleman cuts.',
    primaryObjective: 'Provide daily-wage electricians, plumbers, carpenters, and domestic caregivers verifiable digital work credentials and direct customer access without paying 20-30% platform commissions.',
    targetDemographic: 'Informal daily-wage tradespeople, independent technicians, and domestic household employers.',
    provinces: ['Western Province', 'Central Province (Kandy)', 'Southern Province (Galle)'],
    phase: 'Exploring',
    phaseIndex: 0,
    sdgs: [8, 10],
    icon: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&auto=format&fit=crop&q=80',
    externalResources: [
      { label: 'Marketplace Concept Brief', url: '#', type: 'brief' },
      { label: 'Worker Dignity Research Paper', url: '#', type: 'paper' }
    ],
    problem: {
      overview: 'Over 60% of Sri Lanka’s labor force is employed in the informal economy. Skilled daily-wage tradespeople (carpenters, plumbers, masonry workers, domestic helpers) rely on predatory contractor middlemen who skim significant portions of their earnings.',
      rootCauses: [
        'Lack of verifiable digital work history prevents informal workers from establishing creditworthiness',
        'Predatory middlemen take up to 30% commission while providing zero labor insurance or safety guarantees',
        'Households struggle to find trustworthy, vetted local tradespeople in unfamiliar neighborhoods'
      ],
      sriLankaContext: 'Following unprecedented inflation and the economic crisis, daily-wage laborers experienced severe real-income erosion. Traditional high-commission ride-hail and gig apps extract heavy fees that workers cannot afford.',
      impactMetrics: [
        { stat: '60%+', label: 'Informal Labor Share in Sri Lanka' },
        { stat: '0%', label: 'Platform Commission Charged (Non-Profit DPI)' },
        { stat: '25-30%', label: 'Income Recovered vs Commercial Gig Apps' }
      ]
    },
    targetCommunity: {
      personas: [
        {
          role: 'Daily-Wage Electrician / Plumber',
          description: 'Skilled technician seeking consistent local jobs without paying extortionate commission fees.',
          painPoints: ['Unpaid invoices after completing work', 'Idle days waiting at street-corner labor junctions']
        },
        {
          role: 'Homeowner / Apartment Tenant',
          description: 'Resident needing urgent pipe repair or wiring fixes with reliable pricing and safety vetting.',
          painPoints: ['Price gouging during emergencies', 'Safety uncertainty when admitting strangers']
        }
      ],
      accessibilityFocus: 'Audio profiles where tradespeople speak their experience in Sinhala/Tamil; SMS job match broadcasts.'
    },
    proposedSolution: {
      summary: 'A public-interest digital labor directory featuring zero commission fees. Employs community peer endorsements and decentralized QR verification so workers build an unalterable portfolio of completed work.',
      operationalModel: 'Customers search by neighborhood and trade skill. Direct contact occurs via phone call or WhatsApp with zero middleman escrow intercepting wages. Community elders or vocational training centers vouch for worker skill tiers.',
      citizenWorkflow: [
        '1. Worker registers basic profile with national ID verification and skill endorsement',
        '2. Customer searches trade skill within 5km radius',
        '3. Direct connection via phone/WhatsApp with transparent indicative rate cards',
        '4. On job completion, customer scans worker QR code to leave an auditable positive review'
      ],
      keyInnovations: [
        'Zero-Commission Non-Profit Architecture: Direct peer-to-peer economic exchange',
        'Audio Resume Integration: Workers record 30-second voice introductions in their mother tongue',
        'Cryptographic Proof-of-Skill: Badges verified by local technical colleges and trade unions'
      ]
    },
    architecture: {
      summary: 'Lightweight PWA engineered with Next.js, SQLite / Turso distributed edge databases, and low-latency search indexing.',
      stack: ['Next.js PWA', 'TypeScript', 'Turso / LibSQL', 'Tailwind CSS', 'Web Audio API', 'Twilio / Dialog SMS'],
      offlineFirstStrategy: 'Worker directory caches locally; workers can view booked contact details even when mobile data runs out.',
      bandwidthOptimization: 'Ultra-low data footprint: whole app bundle is under 120KB gzip.',
      trilingualSupport: 'Full trilingual voice and text UI with phonetic keyword search across Sinhala, Tamil, and English.',
      dataPrivacy: 'Strict location fuzzing: worker residential addresses are never exposed, only service radius.'
    },
    milestones: [
      {
        id: 'm-1',
        title: 'Phase 1: Worker Union & Stakeholder Discovery',
        description: 'Conduct interviews with 40 informal tradespeople across Pettah and Moratuwa.',
        targetQuarter: 'Q3 2026',
        isCompleted: true,
        deliverable: 'Field needs assessment and UX wireframe validation'
      },
      {
        id: 'm-2',
        title: 'Phase 2: Trilingual Directory Engine',
        description: 'Build audio-enabled mobile web application and direct calling bridge.',
        targetQuarter: 'Q4 2026',
        isCompleted: false,
        deliverable: 'Beta release tested with 50 local technicians'
      },
      {
        id: 'm-3',
        title: 'Phase 3: Vocational Institute Partnership',
        description: 'Collaborate with technical colleges to verify trade certifications digitally.',
        targetQuarter: 'Q1 2027',
        isCompleted: false,
        deliverable: 'Formal credential issuing pipeline'
      },
      {
        id: 'm-4',
        title: 'Phase 4: Open Public Deployment',
        description: 'Deploy across Colombo metropolitan area with community outreach workshops.',
        targetQuarter: 'Q2 2027',
        isCompleted: false,
        deliverable: '500+ active trade profiles onboarded'
      }
    ],
    successCriteria: [
      { metric: 'Worker Net Income Retention', target: '100% (0% fee extracted)', verificationMethod: 'Platform policy audit' },
      { metric: 'Worker Repeat Engagement', target: '≥ 60% quarterly repeat', verificationMethod: 'QR endorsement logs' },
      { metric: 'Active Tradespeople Onboarded', target: '500+ across 12 trades', verificationMethod: 'Verified directory count' }
    ],
    operationalDisclaimer: {
      assumptions: [
        'Informal workers possess basic smartphones or can access assistance from family members',
        'Users prioritize community trust and direct relationships over corporate app guarantees'
      ],
      externalDependencies: [
        'Partnerships with local community welfare associations for initial worker identity verification',
        'Sustained donor or university hosting support to maintain non-profit zero-fee status'
      ],
      governanceEthics: 'The directory is explicitly designed as a non-commercial digital public good. Monetization through worker fees is fundamentally prohibited by charter.'
    }
  },
  {
    slug: 'offline-first-digital-literacy-hub',
    title: 'Offline-First Digital Literacy & Citizen Rights Hub',
    tagline: 'Offline PWA delivering foundational smartphone, cybersecurity, and e-government training in Sinhala and Tamil for rural communities.',
    primaryObjective: 'Equip rural students, elders, and smallholders with practical digital competencies and legal citizen rights awareness without requiring continuous internet or expensive data subscriptions.',
    targetDemographic: 'Rural secondary students, tea estate community members, and rural elders across remote provinces.',
    provinces: ['Uva Province (Badulla, Monaragala)', 'Central Province (Nuwara Eliya)', 'Northern Province (Kilinochchi)'],
    phase: 'Planned',
    phaseIndex: 1,
    sdgs: [4, 10],
    icon: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1000&auto=format&fit=crop&q=80',
    externalResources: [
      { label: 'Literacy Hub Curricular Plan', url: '#', type: 'brief' },
      { label: 'GitHub Open Curriculum', url: 'https://github.com/shanaya-mahendran/digital-literacy-hub', type: 'github' }
    ],
    problem: {
      overview: 'As Sri Lankan banking, examinations, and civic services shift online, rural populations outside the Western Province are left behind due to expensive mobile data plans, frequent power outages, and interfaces designed exclusively in English.',
      rootCauses: [
        'Data packages are prohibitively expensive for rural families, forcing students to ration megabytes',
        'Critical government portals (passports, birth certificates, examinations) are difficult to navigate for non-tech-native citizens',
        'Surge in digital loan shark scams targeting financially vulnerable rural citizens via predatory mobile apps'
      ],
      sriLankaContext: 'While smartphone penetration in Sri Lanka exceeds 70%, digital literacy is heavily skewed. Over 65% of rural citizens struggle with basic two-factor authentication, online banking safety, and identifying digital fraud.',
      impactMetrics: [
        { stat: '65%', label: 'Rural Population Without Safe Digital Skills' },
        { stat: '100%', label: 'Offline Usability (Zero Data Required After First Sync)' },
        { stat: '2 Languages', label: 'Complete Native Sinhala & Tamil Content' }
      ]
    },
    targetCommunity: {
      personas: [
        {
          role: 'Rural High School Student',
          description: 'Student in Monaragala preparing for O/L or A/L examinations, sharing one phone with 3 siblings.',
          painPoints: ['Cannot stream YouTube tutorials due to data cost', 'Unstable internet connectivity in evening']
        },
        {
          role: 'Elderly Citizen & Pensioner',
          description: 'Retiree navigating new online pension authentication and hospital clinic appointments.',
          painPoints: ['Fear of pressing the wrong button', 'Susceptibility to OTP SMS phishing scams']
        }
      ],
      accessibilityFocus: 'High-contrast typography, large touch targets, complete native audio narration in Sinhala and Tamil.'
    },
    proposedSolution: {
      summary: 'An offline-capable Progressive Web App containing gamified micro-lessons on smartphone safety, digital banking protection, e-gov navigation, and citizen rights. Once loaded via school Wi-Fi or community centers, it operates 100% offline indefinitely.',
      operationalModel: 'Distributed via school computer labs and temple/community libraries through local Wi-Fi caches (PirateBox/Raspberry Pi local servers) without requiring internet connection. Students earn printable offline certificates upon module completion.',
      citizenWorkflow: [
        '1. User connects to local community Wi-Fi hotspot for 60 seconds to download the PWA shell',
        '2. Interactive trilingual modules guide user through simulated tasks (e.g. "How to identify a fake bank SMS")',
        '3. Quizzes test comprehension with immediate audio feedback in native language',
        '4. Progress persists locally in browser IndexedDB cache with zero data consumption'
      ],
      keyInnovations: [
        'Zero-Data Service Worker Architecture: Complete audio and visual assets bundled under 4.8MB',
        'Simulated Safe Sandbox: Users practice inputting passwords, checking URLs, and recognizing scams in a harmless mockup environment',
        'Peer-to-Peer Lesson Sharing: Users can transfer module updates to nearby phones via Wi-Fi Direct or QR exchange'
      ]
    },
    architecture: {
      summary: 'Built with React, Service Workers Cache API, IndexedDB, and compressed WebP/Opus audio assets for extreme compression.',
      stack: ['Next.js PWA', 'TypeScript', 'CacheStorage API', 'IndexedDB', 'Web Audio API (Opus)', 'Tailwind CSS'],
      offlineFirstStrategy: 'Aggressive Cache-First strategy. All lessons, voice narration clips, and simulated interfaces reside on device.',
      bandwidthOptimization: 'Entire curriculum packaged in modular chunks under 1.2MB each; total hub size < 5MB.',
      trilingualSupport: 'Audio voiceover and text authored natively by educators in Sinhala and Tamil.',
      dataPrivacy: 'Zero analytics or user tracking sent to external servers; student progress strictly stored locally.'
    },
    milestones: [
      {
        id: 'l-1',
        title: 'Phase 1: Curriculum Co-Design with Educators',
        description: 'Author 12 core micro-modules on digital safety and e-gov with rural school teachers.',
        targetQuarter: 'Q3 2026',
        isCompleted: true,
        deliverable: 'Trilingual curriculum syllabus and audio scripts'
      },
      {
        id: 'l-2',
        title: 'Phase 2: Offline PWA & Sandbox Simulator',
        description: 'Build interactive scam detection simulator and offline PWA storage engine.',
        targetQuarter: 'Q4 2026',
        isCompleted: false,
        deliverable: 'Interactive web application running on $50 Android devices'
      },
      {
        id: 'l-3',
        title: 'Phase 3: Rural School Pilot (3 Schools in Uva)',
        description: 'Deploy offline hub across 3 rural schools using local Raspberry Pi servers.',
        targetQuarter: 'Q1 2027',
        isCompleted: false,
        deliverable: 'Pilot evaluation with 300+ students evaluated'
      },
      {
        id: 'l-4',
        title: 'Phase 4: Open Community Release',
        description: 'Partner with regional libraries and youth clubs for nationwide offline distribution.',
        targetQuarter: 'Q2 2027',
        isCompleted: false,
        deliverable: 'Nationwide distribution release and open curriculum kit'
      }
    ],
    successCriteria: [
      { metric: 'Offline Retention', target: '100% functionality without cellular data', verificationMethod: 'Airplane-mode test audit' },
      { metric: 'Scam Detection Accuracy', target: '≥ 80% improvement in post-quiz', verificationMethod: 'Pre/post quiz comparison' },
      { metric: 'Students Reached', target: '1,500+ rural students in year 1', verificationMethod: 'School lab completion records' }
    ],
    operationalDisclaimer: {
      assumptions: [
        'Rural schools have access to occasional power or solar charging to operate devices',
        'Local community teachers are motivated to incorporate the interactive modules into weekly ICT periods'
      ],
      externalDependencies: [
        'Cooperation of zonal education directors for school lab deployment',
        'Device availability in households or community learning centers'
      ],
      governanceEthics: 'All curriculum materials are completely free, open-source (CC BY-SA 4.0), and devoid of commercial sponsor placement or corporate tracking.'
    }
  }
]

export const IMPACT_LIFECYCLE_STAGES: PhaseType[] = [
  'Exploring',
  'Planned',
  'Building',
  'Pilot',
  'Deployed',
  'Impact Verified'
]
