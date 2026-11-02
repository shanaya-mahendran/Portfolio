export interface ArenaEntry {
  slug: string
  title: string
  event: string
  year: string
  category: 'PODIUM' | 'FINALIST' | 'ATTEMPT' | 'LAB'
  outcome: string
  outcomeStatus: 'Award Winner' | 'Finalist' | 'Submitted' | 'Did Not Advance' | 'Active Prototype'
  role: string
  teamName: string
  teamSize?: string
  sprintDuration: string
  synopsis: string
  keyTheme: string
  image: string
  heroImage?: string
  verificationLinks: {
    label: string
    url: string
    type: 'github' | 'slides' | 'certificate' | 'demo' | 'paper'
  }[]
  tags: string[]
  challenge: {
    briefing: string
    formalStatement: string
    sprintConstraints: {
      timeLimit: string
      constraints: string[]
      pressureFactors: string[]
    }
  }
  leadership: {
    title: string
    responsibilities: string[]
    highPressureDecisions: {
      dilemma: string
      decision: string
      rationale: string
    }[]
  }
  solution: {
    summary: string
    stack: string[]
    architectureOverview: string
    dataPipelines: string[]
    codeSnippet?: {
      title: string
      language: string
      code: string
      explanation: string
    }
  }
  retrospective: {
    whatWorked: string[]
    whatFailed: string[]
    engineeringTakeaways: string[]
  }
  deepDive: {
    title: string
    subtitle: string
    description: string
    components: {
      name: string
      metricOrDetail: string
      notes: string
    }[]
    highlightCallout?: string
  }
}

export const ARENA_ENTRIES: ArenaEntry[] = [
  {
    slug: 'smartpark',
    title: 'SmartPark OGF',
    event: 'IEEE Computer Society R10 Summer School 2026 Mini Ideathon',
    year: '2026',
    category: 'PODIUM',
    outcome: '🏆 3rd Place Winner',
    outcomeStatus: 'Award Winner',
    role: 'Team Leader',
    teamName: 'HungryBeast',
    sprintDuration: 'Mini Ideathon during the four-day Summer School',
    synopsis: 'A predictive parking proposal for One Galle Face that combines demand forecasting, fair prorated billing, computer-vision occupancy insights, and an offline-capable driver experience.',
    keyTheme: 'Predictive parking, fair billing, and computer-vision-assisted operations.',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1000&auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1400&auto=format&fit=crop&q=85',
    tags: ['Predictive Parking', 'Computer Vision', 'Fair Billing', 'Offline PWA', 'IEEE CS R10'],
    verificationLinks: [
      { label: 'GitHub Repository', url: 'https://github.com/shanaya-mahendran/SmartPark', type: 'github' }
    ],
    challenge: {
      briefing: 'The proposal describes One Galle Face visitors facing high parking charges, limited guidance, no advance occupancy prediction, and billing that rounds partial hours upward. It cites a documented Rs. 750 charge for a 2-hour-15-minute visit.',
      formalStatement: 'Design a predictive parking ecosystem that forecasts demand 30 minutes ahead, allocates capacity across three parking levels, applies fair prorated billing, and supports an offline-capable driver experience.',
      sprintConstraints: {
        timeLimit: 'Mini Ideathon held during the four-day IEEE CS R10 Summer School',
        constraints: [
          'The zero-budget proposal uses simulated IoT data rather than installing physical parking sensors.',
          'The system combines a predictive engine, agent-based decision flow, computer vision, and operational dashboards.',
          'The driver-facing experience is designed as an offline-capable Progressive Web App.'
        ],
        pressureFactors: [
          'Performance figures in the proposal are projected targets, not field-measured results.',
          'The proposal relies on simulated data for evaluation and does not document a live OGF deployment.'
        ]
      }
    },
    leadership: {
      title: 'Team Leadership',
      responsibilities: [
        'Led team HungryBeast during the IEEE CS R10 Summer School Mini Ideathon.',
        'Presented SmartPark OGF, a predictive parking concept for One Galle Face.'
      ],
      highPressureDecisions: [
        {
          dilemma: 'How could the concept demonstrate parking intelligence without purchasing and installing physical sensors?',
          decision: 'Use simulated IoT data and add a computer-vision layer for CCTV-based occupancy, queue, and anomaly insights.',
          rationale: 'The proposal keeps the build within a zero-budget scope while describing how the sensing-to-dashboard flow could work.'
        },
        {
          dilemma: 'How could parking fees avoid charging visitors for a full extra hour when they stayed only part of it?',
          decision: 'Use prorated billing and validate proposed actions against fairness and policy rules.',
          rationale: 'The proposal directly addresses the documented complaint about rounded-up parking charges.'
        }
      ]
    },
    solution: {
      summary: 'SmartPark OGF combines 30-minute demand forecasts, a six-agent decision loop, a parallel computer-vision agent, operational dashboards, and fair prorated billing in an offline-capable parking concept.',
      stack: ['Python', 'scikit-learn', 'YOLOv8n', 'OpenCV', 'Next.js', 'Progressive Web App', 'SQLite', 'Supabase', 'Service Workers', 'IndexedDB'],
      architectureOverview: 'The proposal sends simulated IoT and CCTV-derived telemetry through a stream processor and predictive engine. Monitor, Planner, Validator, Action, Dashboard, and Feedback functions form the decision loop, while a Vision Agent supplies occupancy, queue, and anomaly signals. Outputs include a driver PWA, mall dashboard, signage, and billing flow.',
      dataPipelines: [
        'Simulated sensor and CCTV inputs are normalized into a telemetry stream.',
        'The predictive engine estimates occupancy and demand up to 30 minutes ahead.',
        'The Vision Agent extracts occupancy changes, queue estimates, and anomaly signals.',
        'Agent decisions feed the driver PWA, mall dashboard, signage, and prorated billing flow.'
      ]
    },
    retrospective: {
      whatWorked: [
        'The proposal ties the concept to documented parking complaints and a specific receipt example.',
        'The architecture connects forecasting, operational decisions, computer vision, and visitor-facing guidance.',
        'The design includes offline support and prorated billing as explicit product requirements.'
      ],
      whatFailed: [
        'The proposal presents target performance figures as projections rather than measured results.',
        'The documented work does not establish a live deployment or validation with physical parking sensors at OGF.'
      ],
      engineeringTakeaways: [
        'Keep projected performance targets distinct from measured outcomes.',
        'Validate simulated computer-vision and demand-forecasting results against real operating data before deployment.',
        'Connect technical architecture to the visitor problems the product is meant to solve.'
      ]
    },
    deepDive: {
      title: 'Predictive Parking and the Agent Decision Loop',
      subtitle: 'How SmartPark OGF connects sensing, decisions, and visitor guidance',
      description: 'The proposal combines short-horizon demand forecasting with agent-based policy checks and a parallel vision layer, then routes approved actions to both mall operations and drivers.',
      components: [
        {
          name: 'Demand prediction',
          metricOrDetail: '30-minute forecast horizon',
          notes: 'The Planner uses historical patterns and current telemetry to anticipate parking demand.'
        },
        {
          name: 'Vision layer',
          metricOrDetail: 'YOLOv8n and OpenCV',
          notes: 'CCTV-derived signals support occupancy, queue estimation, and anomaly detection.'
        },
        {
          name: 'Fair billing',
          metricOrDetail: 'Prorated parking charges',
          notes: 'The billing design avoids rounding a partial hour up to a full additional hour.'
        }
      ],
      highlightCallout: 'HungryBeast placed third in the IEEE Computer Society R10 Summer School Mini Ideathon.'
    }
  },
  {
    slug: 'smart-travel',
    title: 'Smart Travel · Earth',
    event: 'The Oracle Challenge (Cre8X 3.0) | BCS Student Chapter, KDU',
    year: '2026',
    category: 'ATTEMPT',
    outcome: 'Not Selected',
    outcomeStatus: 'Did Not Advance',
    role: 'UI/UX Designer',
    teamName: 'Legacy Aurora',
    sprintDuration: 'Round 01 mini task (18-20 September 2026)',
    synopsis: 'A vision for Sri Lanka 2100 that unifies five transport modes in an accessible mobility platform, with multimodal journeys, hazard reporting, and weather-aware rerouting.',
    keyTheme: 'Sustainable, accessible multimodal transportation for Sri Lanka in 2100.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1000&auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1400&auto=format&fit=crop&q=85',
    tags: ['Multimodal Mobility', 'Sustainable Transport', 'Accessibility', 'Sri Lanka 2100', 'The Oracle Challenge'],
    verificationLinks: [
      { label: 'GitHub Project Archive', url: 'https://github.com/shanaya-mahendran/Smart-Travel-Cre8X', type: 'github' }
    ],
    challenge: {
      briefing: 'Under the theme “IMAGINE 2100. DESIGN WHAT COMES NEXT.”, The Oracle Challenge invited teams to imagine transportation in Sri Lanka in 2100 and design a future-facing mobility concept.',
      formalStatement: 'Design a sustainable and accessible multimodal mobility experience for Sri Lanka 2100, connecting future transport modes in a single traveler journey.',
      sprintConstraints: {
        timeLimit: 'Round 01 mini task, 18-20 September 2026',
        constraints: [
          'The concept combines eVTOL, MagLev, autonomous rapid transit, HyperTube, and GetIn shared pods.',
          'The traveler experience includes journey planning, live map context, and accessible itinerary information.',
          'Weather disruption handling is represented through simulated monsoon rerouting.'
        ],
        pressureFactors: [
          'The concept explores how distinct future transport modes can connect within one journey.',
          'Accessibility and disruption support are considered alongside multimodal trip planning.'
        ]
      }
    },
    leadership: {
      title: 'UI/UX Design',
      responsibilities: [
        'Designed the Smart Travel · Earth concept for the Legacy Aurora team.',
        'Mapped the multimodal journey experience across five future transport modes.',
        'Included accessible itinerary information, step-free access details, and hazard reporting in the traveler experience.'
      ],
      highPressureDecisions: [
        {
          dilemma: 'How can a traveler understand a complex route that spans several future transport modes?',
          decision: 'Present the trip as a multimodal journey timeline alongside a live radar map.',
          rationale: 'The timeline makes the sequence of transport connections legible while the map provides spatial context.'
        },
        {
          dilemma: 'How should the journey experience support travelers with different accessibility needs?',
          decision: 'Provide a text itinerary with step-free access details.',
          rationale: 'Accessibility information is surfaced as part of trip planning rather than being left implicit.'
        }
      ]
    },
    solution: {
      summary: 'Smart Travel · Earth is a sustainable multimodal mobility concept for Sri Lanka 2100, pairing a journey timeline and live radar map with traveler hazard reporting, Oracle AI insights, and simulated monsoon rerouting.',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'Canvas 2D', 'MapLibre GL JS', 'Web Audio API', 'Progressive Web App'],
      architectureOverview: 'The UI/UX concept brings eVTOL, MagLev, autonomous rapid transit, HyperTube, and GetIn shared pods into one traveler-facing experience. Journey planning, live map context, hazard reporting, AI insights, simulated weather rerouting, and accessible text directions support the trip from planning through travel.',
      dataPipelines: [
        'Plan a multimodal journey across eVTOL, MagLev, autonomous rapid transit, HyperTube, and GetIn shared pods.',
        'Show route progress and spatial context through a journey timeline and live radar map.',
        'Surface traveler-submitted hazards and Oracle AI insights in the travel experience.',
        'Demonstrate monsoon-aware rerouting with simulated disruption data.',
        'Provide a readable text itinerary with step-free access information.'
      ]
    },
    retrospective: {
      whatWorked: [
        'The concept connects five future transport modes in one multimodal journey.',
        'The interface combines map-based context with an accessible text itinerary.',
        'Simulated monsoon rerouting and traveler hazard reporting address disruption as part of the travel experience.'
      ],
      whatFailed: [
        'The submission was not selected to advance beyond Round 01.',
        'Rerouting is presented as a simulation rather than a live transport operations integration.'
      ],
      engineeringTakeaways: [
        'Keep the multimodal journey understandable as travelers move between transport systems.',
        'Make accessibility and disruption information visible within the primary trip-planning flow.',
        'Treat future transport integrations and AI insights as a concept unless validated by operational services.'
      ]
    },
    deepDive: {
      title: 'A Connected Journey for Sri Lanka 2100',
      subtitle: 'Five future transport modes, one traveler experience',
      description: 'Smart Travel · Earth frames future mobility around the traveler: connect transport modes, explain each leg, provide accessible directions, and respond to simulated weather disruption.',
      components: [
        {
          name: 'Future transport modes',
          metricOrDetail: '5 modes',
          notes: 'eVTOL, MagLev, autonomous rapid transit, HyperTube, and GetIn shared pods are brought into one multimodal concept.'
        },
        {
          name: 'Traveler experience',
          metricOrDetail: 'Timeline, radar map, and text itinerary',
          notes: 'The interface combines route sequence and map context with step-free access information.'
        },
        {
          name: 'Disruption support',
          metricOrDetail: 'Simulated monsoon rerouting',
          notes: 'Weather-aware route changes are demonstrated as a simulation, not a live operational integration.'
        }
      ],
      highlightCallout: 'Legacy Aurora was not selected to advance beyond Round 01 of The Oracle Challenge.'
    }
  },
  {
    slug: 'passion-discovery-engine',
    title: 'The Passion Discovery Engine',
    event: "IntelliCon '26 Buildathon | AIESEC in SLIIT",
    year: '2026',
    category: 'FINALIST',
    outcome: 'Top 16 Finalist',
    outcomeStatus: 'Finalist',
    role: 'Full-Stack Developer',
    teamName: 'HungryBeast',
    teamSize: '4 members',
    sprintDuration: 'Three weeks (20 September-11 October 2026)',
    synopsis: 'A mobile-first career discovery platform where Sri Lankan students explore real study and career paths through AI-guided work simulations and adaptive skill mapping.',
    keyTheme: 'Experiential career exploration for students navigating major education and career choices.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1000&auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1400&auto=format&fit=crop&q=85',
    tags: ['Career Discovery', 'AI Simulations', 'Education', 'Sri Lanka', 'IntelliCon 2026'],
    verificationLinks: [],
    challenge: {
      briefing: 'Sri Lankan students make high-impact A/L stream, degree, and career choices with little structured, hands-on exposure to what those paths involve. The submission focused first on A/L completers waiting to enter university.',
      formalStatement: 'Help students make more informed career and study choices by letting them experience realistic work scenarios, reflect on their decisions, and discover skills to develop.',
      sprintConstraints: {
        timeLimit: 'Three-week Buildathon, 20 September-11 October 2026',
        constraints: [
          'The initial product scope focused on A/L completers in the post-exam gap year.',
          'The proposal planned three pilot simulation areas: IT/Product, Management, and Bio Science.',
          'The platform was planned as mobile-first with English and Sinhala support.'
        ],
        pressureFactors: [
          'Whether students would complete multi-day simulations remained to be tested with beta users.',
          'Tuition-centre distribution and corporate sponsorship interest were still unvalidated.'
        ]
      }
    },
    leadership: {
      title: 'Full-Stack Development',
      responsibilities: [
        'Contributed as the full-stack developer on the four-member HungryBeast team.',
        'Worked on a submission that combined AI-guided career simulations with adaptive skill mapping and peer cohorts.'
      ],
      highPressureDecisions: [
        {
          dilemma: 'How could the first version stay focused while serving students at several education decision points?',
          decision: 'The initial product scope targeted A/L completers in the gap year, with O/L and current A/L students treated as future expansion segments.',
          rationale: 'The report identifies segment dilution as a risk and prioritizes validation with one clear initial audience.'
        }
      ]
    },
    solution: {
      summary: 'The concept pairs conversational AI career simulations with skill mapping based on students’ work and decisions, then recommends focused learning and peer support.',
      stack: ['Next.js', 'React', 'Tailwind CSS', 'Gemini 2.0 Flash', 'Groq', 'Vercel AI SDK', 'Node.js', 'Express', 'PostgreSQL', 'Supabase'],
      architectureOverview: 'A mobile-first web platform was planned with an AI simulation layer using Gemini 2.0 Flash and Groq through the Vercel AI SDK, a Node.js and Express backend, and Supabase for PostgreSQL, authentication, and real-time peer cohorts.',
      dataPipelines: [
        'Students work through role-play scenarios based on real tasks in selected careers.',
        'The system evaluates demonstrated strengths and gaps from their reasoning and decisions.',
        'Personalized micro-learning recommendations target identified skill gaps.',
        'Local peer cohorts provide shared support and accountability.'
      ]
    },
    retrospective: {
      whatWorked: [
        'The Gate 1 report documented primary research with 28 survey responses and five interviews.',
        'The team selected a clear first audience and connected the proposed simulations to student research.'
      ],
      whatFailed: [
        'The report notes that actual completion of multi-day simulations had not yet been tested.',
        'Tuition-centre partnerships and corporate sponsorship interest still needed validation.'
      ],
      engineeringTakeaways: [
        'Test real user behaviour rather than relying only on stated interest.',
        'Keep the first product focused on one audience before expanding to adjacent segments.',
        'Use beta feedback to improve simulation quality and measure completion.'
      ]
    },
    deepDive: {
      title: 'Research-Led Career Simulations',
      subtitle: 'A focused first step for students in the university-entry gap year',
      description: 'The proposal uses early research to define its beachhead audience, then centers the product around experiential simulations rather than static career descriptions.',
      components: [
        {
          name: 'Problem research',
          metricOrDetail: '28 survey responses and 5 interviews',
          notes: 'Primary research documented in the Gate 1 submission.'
        },
        {
          name: 'Initial audience',
          metricOrDetail: 'A/L completers awaiting university',
          notes: 'The MVP focuses on students in the post-exam gap year.'
        },
        {
          name: 'Pilot career areas',
          metricOrDetail: 'IT/Product, Management, Bio Science',
          notes: 'Three pilot simulation scenarios were planned for the initial product.'
        }
      ],
      highlightCallout: "HungryBeast reached the top 16 finalists at IntelliCon '26 Buildathon."
    }
  },
  {
    slug: 'waypoint-dispatch-intelligence',
    title: 'Waypoint Dispatch Intelligence',
    event: 'Tech-Triathlon 2026 Designathon | Waypoint Group',
    year: '2026',
    category: 'ATTEMPT',
    outcome: 'Not Selected',
    outcomeStatus: 'Did Not Advance',
    role: 'Team Lead & Full-Stack Developer',
    teamName: 'Legacy Aurora',
    sprintDuration: 'Five-day Designathon phase',
    synopsis: 'A shared delivery-operations concept connecting dispatchers, drivers, loaders, and store managers through role-specific views of one delivery record.',
    keyTheme: 'Shared situational awareness for delivery operations.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&auto=format&fit=crop&q=85',
    tags: ['Delivery Operations', 'Four User Roles', 'Offline-First', 'Designathon', 'Waypoint Group'],
    verificationLinks: [],
    challenge: {
      briefing: 'The design blueprint frames Waypoint Group’s core issue as fragmented information, not simply logistics. Dispatchers plan from spreadsheets, drivers report by paper and phone, loaders use stale lists, and store managers lack delivery confirmation and reliable ETAs.',
      formalStatement: 'Create a shared source of truth for deliveries, with role-specific workflows that help teams plan, load, update, and confirm deliveries even when drivers lose connectivity.',
      sprintConstraints: {
        timeLimit: 'Five-day Designathon phase',
        constraints: [
          'The proposal was grounded in analysis of more than 90,000 delivery records.',
          'Fresh deliveries had to arrive before 8 AM, within a 270-minute Fresh trip budget.',
          'The Designathon scope excluded route optimization, real-time traffic maps, multi-depot coordination, consumer tracking, and inventory management.'
        ],
        pressureFactors: [
          'Drivers in hill-country routes face intermittent connectivity, so the mobile workflow must work offline and sync later.',
          'Dispatch plans must account for vehicle capacity, trip budgets, van-only outlets, mall delivery windows, and deferral history.'
        ]
      }
    },
    leadership: {
      title: 'Team Lead & Full-Stack Developer',
      responsibilities: [
        'Led team Legacy Aurora and contributed as its full-stack developer.',
        'Developed the product strategy around shared delivery awareness across four operational roles.',
        'Defined role-specific screen flows and degraded-connectivity scenarios for the Designathon submission.'
      ],
      highPressureDecisions: [
        {
          dilemma: 'Should the Designathon concept prioritize route optimization or the information gaps affecting each delivery role?',
          decision: 'Focused the design on a shared delivery record and four role-specific workflows, leaving route optimization to a separate competition phase.',
          rationale: 'The submission prioritizes the information fracture identified in its data analysis and keeps the five-day scope focused.'
        },
        {
          dilemma: 'How should the driver workflow behave on routes with poor mobile coverage?',
          decision: 'Designed an offline-first route view with local progress updates and automatic sync when connectivity returns.',
          rationale: 'The blueprint highlights hill-country delays and connectivity loss as operating conditions, not exceptional cases.'
        }
      ]
    },
    solution: {
      summary: 'The concept gives dispatchers a command dashboard, drivers an offline-first route app, loaders a live reverse-order loading list, and store managers delivery status, ETAs, and receipt confirmation.',
      stack: [],
      architectureOverview: 'Each role works from a shared delivery record. Dispatchers create plans and assign vehicles, loaders confirm items and flag shortages, drivers record arrivals or issues with offline sync, and store managers track ETAs and confirm receipts.',
      dataPipelines: [
        'Dispatchers plan orders against vehicle capacity, trip budgets, time windows, and deferral history.',
        'Loaders use the current plan to confirm items in reverse delivery order and report shortages.',
        'Drivers record arrivals, issues, and proof of delivery, saving updates offline until synchronization is available.',
        'Store managers receive delivery status and ETA updates and confirm receipt or report discrepancies.'
      ]
    },
    retrospective: {
      whatWorked: [
        'The blueprint reframed the challenge around information silos and a shared delivery record.',
        'Four role-specific interfaces were grounded in Sri Lankan locations, devices, and connectivity conditions.',
        'The submission explicitly scoped out features that did not fit the five-day Designathon phase.'
      ],
      whatFailed: [
        'The team was not selected to advance to the next stage.',
        'The blueprint lists persona validation and an interactive prototype as planned next steps, not completed submission evidence.'
      ],
      engineeringTakeaways: [
        'A shared domain record can coordinate multiple interfaces without forcing every role into one workflow.',
        'Offline support should be designed around real route conditions and synchronization recovery.',
        'Explicit scope exclusions can keep a multi-role concept focused within a short design phase.'
      ]
    },
    deepDive: {
      title: 'One Delivery, Four Role-Specific Views',
      subtitle: 'A shared operational record from planning through receipt',
      description: 'The design centers all four users on the same delivery while presenting only the actions and context each role needs.',
      components: [
        {
          name: 'Research base',
          metricOrDetail: '90,000+ delivery records',
          notes: 'The proposal uses historical delivery data to define operating constraints and failure patterns.'
        },
        {
          name: 'Role coverage',
          metricOrDetail: 'Dispatcher, driver, loader, store manager',
          notes: 'Each role receives a focused workflow tied to the same delivery status and ETA.'
        },
        {
          name: 'Connectivity handling',
          metricOrDetail: 'Offline driver updates',
          notes: 'Route details and progress updates remain available without signal and sync when service returns.'
        }
      ],
      highlightCallout: 'Legacy Aurora was not selected to advance beyond the Tech-Triathlon 2026 Designathon.'
    }
  },
  {
    slug: 'pathfinder-ai',
    title: 'PathfinderAI',
    event: 'InnovaX 1.0',
    year: '2026',
    category: 'ATTEMPT',
    outcome: 'Proposal Submitted',
    outcomeStatus: 'Submitted',
    role: 'Team Member',
    teamName: 'Legacy Aurora',
    sprintDuration: 'InnovaX 1.0 proposal phase',
    synopsis: 'A proposed B2B2C recruitment and skill-verification platform that replaces static resume screening with adaptive roleplay interviews and job simulations, giving employers competency scorecards and candidates actionable practice feedback.',
    keyTheme: 'Demonstrated workplace capability, fairer hiring, and candidate growth.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&auto=format&fit=crop&q=85',
    tags: ['Agentic AI', 'Recruitment', 'Skill Verification', 'Candidate Feedback', 'InnovaX 1.0'],
    verificationLinks: [],
    challenge: {
      briefing: 'The proposal identifies a trust and verification gap in recruitment: resume keyword matching can miss practical capability, while candidates often receive little guidance after rejection and employers have limited time for individualized assessment.',
      formalStatement: 'Design a scalable way for employers to assess role-relevant reasoning and workplace skills while giving candidates a safe environment for practice and constructive feedback.',
      sprintConstraints: {
        timeLimit: '10-day prototype window described for the proposed Phase 2',
        constraints: [
          'The proposed system uses adaptive, job-description-based interviews and situational simulations rather than resume keywords alone.',
          'A multi-agent workflow is proposed to generate contextual follow-up questions and evaluate responses against employer-provided rubrics.',
          'Speech-to-text is planned as a mocked demonstration integration for the Phase 2 prototype; the core workflow is text-based.'
        ],
        pressureFactors: [
          'Candidate and employer needs must be served without making hiring decisions autonomously.',
          'The proposal identifies fairness, data privacy, model costs, and safeguards against unbounded agent questioning as design constraints.'
        ]
      }
    },
    leadership: {
      title: 'Team Member',
      responsibilities: [
        'Contributed to Legacy Aurora’s PathfinderAI proposal for InnovaX 1.0.',
        'The proposal defines a candidate and recruiter experience around adaptive roleplay, competency feedback, and skill development.'
      ],
      highPressureDecisions: [
        {
          dilemma: 'How can an assessment respond to a candidate’s reasoning instead of relying on a fixed list of questions?',
          decision: 'Propose an Interrogator Agent that selects contextual follow-up questions and an Evaluation Agent that scores responses against professional rubrics.',
          rationale: 'The proposal argues that adaptive dialogue and situational decisions are needed to explore workplace competence beyond static tests.'
        },
        {
          dilemma: 'How can automated assessment support recruitment without taking consequential decisions away from people?',
          decision: 'Keep AI-generated scorecards advisory and hiring decisions under human control.',
          rationale: 'Human oversight is a stated responsible-AI safeguard in the submitted proposal.'
        }
      ]
    },
    solution: {
      summary: 'PathfinderAI proposes adaptive interview and job-simulation sessions that generate employer-facing competency scorecards and candidate-facing growth roadmaps. Candidates can also use the platform to practice without sharing a profile with an employer.',
      stack: ['Next.js', 'React', 'Tailwind CSS', 'shadcn/ui', 'Python FastAPI', 'Node.js', 'LangGraph', 'OpenAI / Gemini APIs', 'ChromaDB', 'PostgreSQL'],
      architectureOverview: 'The proposed LangGraph workflow ingests job descriptions, competency rubrics, resumes, and candidate responses. An Interrogator Agent generates context-aware questions and pushback; an Evaluation Agent compares responses with employer-provided rubrics. The system proposes separate outputs for HR and the candidate. Whisper-based Sinhala and Tamil support is described as a localization feature, with speech-to-text mocked for the proposed Phase 2 demonstration.',
      dataPipelines: [
        'Ingest a job description, employer competency rubric, candidate profile, and interview response.',
        'Use role context and prior responses to generate situational questions and follow-ups.',
        'Evaluate reasoning against the supplied rubric and produce an advisory competency scorecard.',
        'Give candidates strengths, improvement areas, and tailored practice exercises.',
        'In practice mode, revisit weaker skill areas with bounded, progressively tailored exercises.'
      ]
    },
    retrospective: {
      whatWorked: [
        'The proposal identifies distinct needs for recruiters and candidates and gives each a separate output.',
        'It describes an adaptive multi-agent workflow rather than treating a general chatbot as the assessment.',
        'Human oversight, bounded interview turns, privacy controls, and bias mitigation are included as responsible-AI safeguards.'
      ],
      whatFailed: [
        'PathfinderAI is documented here as a submitted proposal; no completed product, deployment, or judging outcome has been reported.'
      ],
      engineeringTakeaways: [
        'Keep assessment grounded in employer-provided criteria and make scorecards advisory.',
        'Separate employer evaluation from candidate practice and feedback.',
        'Mocked integrations and proposal-stage architecture should be clearly distinguished from implemented features.'
      ]
    },
    deepDive: {
      title: 'Adaptive Skill Verification with Human Oversight',
      subtitle: 'A proposed two-sided recruitment and candidate-growth loop',
      description: 'PathfinderAI uses contextual roleplay to explore candidate reasoning, then turns the session into separate employer and candidate outputs while leaving final hiring decisions with people.',
      components: [
        {
          name: 'Interrogator Agent',
          metricOrDetail: 'Contextual follow-up questions',
          notes: 'The proposed agent responds to earlier answers with relevant follow-ups and situational pushback.'
        },
        {
          name: 'Evaluation Agent',
          metricOrDetail: 'Employer-provided rubrics',
          notes: 'The proposal grounds competency feedback in job criteria and semantic reasoning rather than accent or demographic markers.'
        },
        {
          name: 'Candidate growth loop',
          metricOrDetail: 'Practice and tailored exercises',
          notes: 'Candidates receive improvement feedback and can revisit weaker skill areas; sharing a profile with an employer is optional.'
        },
        {
          name: 'Human oversight',
          metricOrDetail: 'Advisory AI scorecards',
          notes: 'The proposal reserves final hiring decisions and rejections for human decision-makers.'
        }
      ],
      highlightCallout: 'Legacy Aurora submitted the PathfinderAI proposal to InnovaX 1.0.'
    }
  },
  {
    slug: 'civiclens',
    title: 'CivicLens',
    event: 'SDG Sprints 2026 | Stage 02',
    year: '2026',
    category: 'ATTEMPT',
    outcome: 'Stage 02 – In Progress',
    outcomeStatus: 'Submitted',
    role: 'Team Member',
    teamName: 'Legacy Aurora',
    sprintDuration: 'SDG Sprints 2026 Stage 02',
    synopsis: 'An AI-assisted civic reporting and tracking platform for Sri Lanka that helps citizens report local infrastructure issues and gives councils tools to validate, group, prioritize, and resolve them transparently.',
    keyTheme: 'Accountable local services and stronger civic participation (SDG 16).',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1000&auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1400&auto=format&fit=crop&q=85',
    tags: ['Civic Technology', 'Public Services', 'Computer Vision', 'PostGIS', 'SDG 16'],
    verificationLinks: [],
    challenge: {
      briefing: 'The proposal describes a broken feedback loop between citizens and local authorities: reports are fragmented across informal channels, citizens cannot reliably track resolution, and councils lack a structured way to triage and publicly demonstrate performance.',
      formalStatement: 'Create a low-friction public-service reporting and tracking platform that helps local authorities act on citizen reports and makes progress visible.',
      sprintConstraints: {
        timeLimit: 'SDG Sprints 2026 Stage 02',
        constraints: [
          'Citizen reporting is designed to work through a web-first PWA without requiring an app download.',
          'Computer vision is proposed to validate and categorize issue photos; PostGIS groups duplicate reports into shared tickets.',
          'Public scorecards and SLA escalation are proposed to support accountability and follow-through.'
        ],
        pressureFactors: [
          'The proposal depends on local-authority partnership and access to operational workflows.',
          'Image classification, geospatial deduplication, and response-time targets are proposed capabilities, not reported pilot results.'
        ]
      }
    },
    leadership: {
      title: 'Team Member',
      responsibilities: [
        'Contributed to Legacy Aurora’s CivicLens proposal for SDG Sprints 2026.',
        'Worked on a concept for citizen reporting, council case management, and public accountability.'
      ],
      highPressureDecisions: [
        {
          dilemma: 'How can councils avoid handling many reports about the same public issue as separate cases?',
          decision: 'Propose PostGIS-based clustering that combines nearby reports into a shared master ticket.',
          rationale: 'A single ticket with community support signals is intended to reduce duplicate triage and make prioritization clearer.'
        },
        {
          dilemma: 'How can citizens see whether reports lead to action?',
          decision: 'Include report tracking, SLA escalation, and public council scorecards in the proposed service.',
          rationale: 'The proposal treats visible follow-through as central to rebuilding trust, not just collecting complaints.'
        }
      ]
    },
    solution: {
      summary: 'CivicLens proposes a web-first civic service with photo validation and issue categorization, geospatial duplicate grouping, council ticket workflows, SLA escalation, and public performance scorecards.',
      stack: ['Next.js 14', 'Tailwind CSS', 'shadcn/ui', 'FastAPI', 'PostgreSQL', 'PostGIS', 'Redis', 'Celery', 'YOLOv8-nano or TensorFlow Lite', 'Mapbox GL JS or Leaflet', 'AWS S3 or MinIO'],
      architectureOverview: 'The proposal separates a Next.js PWA for citizens, administrators, and public maps from a FastAPI application layer and PostgreSQL/PostGIS data services. Redis and Celery are proposed for caching and background processing, with image storage and computer-vision inference used to validate reports and support routing and escalation.',
      dataPipelines: [
        'A citizen submits a location-aware issue report and optional image through the browser-based PWA.',
        'Computer vision is proposed to validate the image, identify the issue category, and estimate severity.',
        'PostGIS checks for nearby reports and merges duplicates into a master ticket.',
        'Council workflows track assignment, status changes, service deadlines, and escalation.',
        'Aggregated resolution and response metrics feed public accountability scorecards.'
      ]
    },
    retrospective: {
      whatWorked: [
        'The proposal connects citizen-facing reporting with council workflows and public accountability.',
        'It identifies app-download friction and duplicate case handling as core design constraints.',
        'The roadmap distinguishes a core reporting MVP from later intelligence and pilot stages.'
      ],
      whatFailed: [
        'CivicLens is presented as a proposal; the document describes a future pilot and does not report a live council deployment or measured outcomes.'
      ],
      engineeringTakeaways: [
        'Treat duplicate reports as a shared service case while preserving community interest in its resolution.',
        'Design low-bandwidth, no-download access for occasional users.',
        'Validate computer-vision and escalation workflows with local authorities before describing targets as results.'
      ]
    },
    deepDive: {
      title: 'From Citizen Report to Public Accountability',
      subtitle: 'A proposed service loop for local infrastructure issues',
      description: 'CivicLens links a citizen’s report to council action and visible progress through validation, spatial clustering, ticket tracking, and aggregated service metrics.',
      components: [
        {
          name: 'Report validation',
          metricOrDetail: 'Computer-vision image review',
          notes: 'The proposed pipeline filters irrelevant images and categorizes infrastructure issues.'
        },
        {
          name: 'Duplicate handling',
          metricOrDetail: 'PostGIS spatial clustering',
          notes: 'Reports within the proposal’s 25-meter radius are candidates for a shared master ticket.'
        },
        {
          name: 'Service accountability',
          metricOrDetail: 'SLA escalation and public scorecards',
          notes: 'The concept makes ticket status and council response measures visible to residents.'
        }
      ],
      highlightCallout: 'CivicLens is a Stage 02 proposal by Legacy Aurora for SDG Sprints 2026.'
    }
  },
  {
    slug: 'digiedu',
    title: 'DigiEdu',
    event: 'SDG Sprints 2026 | Stage 02',
    year: '2026',
    category: 'ATTEMPT',
    outcome: 'Stage 02 – In Progress',
    outcomeStatus: 'Submitted',
    role: 'Team Member',
    teamName: 'Legacy Aurora',
    sprintDuration: 'SDG Sprints 2026 Stage 02',
    synopsis: 'An offline-first digital literacy and train-the-trainer PWA for rural and estate communities in Sri Lanka, with Sinhala and Tamil lessons, practical simulations, and resources for community trainers.',
    keyTheme: 'Accessible digital learning and reduced inequalities (SDGs 4 and 10).',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&auto=format&fit=crop&q=85',
    tags: ['Digital Literacy', 'Offline-First PWA', 'Sinhala and Tamil', 'Train-the-Trainer', 'SDGs 4 and 10'],
    verificationLinks: [],
    challenge: {
      briefing: 'The proposal identifies data affordability, unreliable connectivity, language barriers, and limited trainer resources as barriers to practical digital-skills learning in rural and estate communities.',
      formalStatement: 'Deliver localized digital literacy lessons that can be downloaded once, used offline, and supported by community trainers.',
      sprintConstraints: {
        timeLimit: 'SDG Sprints 2026 Stage 02',
        constraints: [
          'The proposed PWA is designed to download a small content bundle and work offline afterward.',
          'Lessons cover government e-services, digital financial literacy, workplace fundamentals, and device safety.',
          'Sinhala and Tamil interfaces, audio narration, quizzes, guided simulations, and trainer materials are part of the concept.'
        ],
        pressureFactors: [
          'The proposal targets budget Android devices and intermittent connectivity.',
          'Offline progress and synchronization must remain reliable across periods without network access.'
        ]
      }
    },
    leadership: {
      title: 'Team Member',
      responsibilities: [
        'Contributed to Legacy Aurora’s DigiEdu proposal for SDG Sprints 2026.',
        'Worked on an offline-first learning concept for learners and community trainers.'
      ],
      highPressureDecisions: [
        {
          dilemma: 'How can learners continue lessons when mobile data is unavailable or unaffordable?',
          decision: 'Propose a downloadable PWA that caches lessons and stores progress locally for later synchronization.',
          rationale: 'The learning experience is designed around the connectivity conditions of the intended communities.'
        },
        {
          dilemma: 'How can digital-skills content work for learners with different language and literacy needs?',
          decision: 'Include Sinhala and Tamil support, voice narration, short lessons, quizzes, and guided practice simulations.',
          rationale: 'Multiple learning formats reduce reliance on English-heavy text and continuous video streaming.'
        }
      ]
    },
    solution: {
      summary: 'DigiEdu proposes a low-bandwidth PWA for practical digital skills, with offline micro-lessons, quizzes, simulated e-service tasks, audio narration, learner progress, and trainer resources.',
      stack: ['Next.js 14', 'Progressive Web App', 'Workbox', 'Service Workers', 'IndexedDB', 'Dexie.js', 'FastAPI', 'PostgreSQL', 'Supabase', 'Sanity.io or Strapi'],
      architectureOverview: 'The proposed Next.js PWA stores lesson content in the Cache API and learner progress in IndexedDB, using service workers for offline access and synchronization. When connectivity returns, a FastAPI service and PostgreSQL-backed platform support progress sync, analytics, content management, and trainer dashboards.',
      dataPipelines: [
        'Learners download the PWA and lesson content while temporarily online.',
        'Lessons, quizzes, and simulations run locally without a network connection.',
        'Progress and quiz results are saved on-device and queued for synchronization.',
        'The app syncs learner progress and completion records when connectivity returns.',
        'Trainer resources and dashboards support community-led workshops and tracking.'
      ]
    },
    retrospective: {
      whatWorked: [
        'The proposal targets practical digital tasks and community trainers rather than assuming continuous online access.',
        'Offline content, Sinhala and Tamil support, and audio narration are considered together.',
        'The roadmap separates a proof of concept, MVP, field testing, and wider distribution.'
      ],
      whatFailed: [
        'DigiEdu is presented as a proposal; the document describes planned field testing and impact targets, not measured deployments.'
      ],
      engineeringTakeaways: [
        'Offline-first learning requires local persistence and explicit synchronization behavior.',
        'Test language rendering, audio playback, and performance on entry-level Android devices.',
        'Treat user, lesson, and trainer targets as goals until verified through field pilots.'
      ]
    },
    deepDive: {
      title: 'Digital Learning That Works Offline',
      subtitle: 'A community-supported PWA for practical skills',
      description: 'DigiEdu proposes an offline learning loop: download concise lessons, practice on-device, save progress locally, and synchronize when a connection becomes available.',
      components: [
        {
          name: 'Offline learning',
          metricOrDetail: 'Lessons and quizzes stored on-device',
          notes: 'The proposal uses service-worker caching and IndexedDB for learning without continuous connectivity.'
        },
        {
          name: 'Localized instruction',
          metricOrDetail: 'Sinhala and Tamil with audio',
          notes: 'Voice narration and low-literacy-friendly interfaces support learners who need more than text-only lessons.'
        },
        {
          name: 'Trainer support',
          metricOrDetail: 'Guides and progress tracking',
          notes: 'Community trainers receive lesson plans, workshop materials, and proposed learner progress tools.'
        }
      ],
      highlightCallout: 'DigiEdu is a Stage 02 proposal by Legacy Aurora for SDG Sprints 2026.'
    }
  },
  {
    slug: 'ecochain-lanka',
    title: 'EcoChain Lanka',
    event: 'SDG Sprints 2026 | Stage 02',
    year: '2026',
    category: 'ATTEMPT',
    outcome: 'Stage 02 – In Progress',
    outcomeStatus: 'Submitted',
    role: 'Team Member',
    teamName: 'Legacy Aurora',
    sprintDuration: 'SDG Sprints 2026 Stage 02',
    synopsis: 'A proposed peer-to-peer waste collection and recycling network that connects households, informal collectors, scrap yards, and brands through QR-verified pickups, local pricing, and auditable recovery data.',
    keyTheme: 'Circular material recovery, sustainable communities, and decent work (SDGs 8, 11, 12, and 13).',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1000&auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1400&auto=format&fit=crop&q=85',
    tags: ['Recycling', 'Peer-to-Peer Network', 'Informal Collectors', 'QR Verification', 'SDGs 8, 11, 12, and 13'],
    verificationLinks: [],
    challenge: {
      briefing: 'The proposal describes fragmented recycling logistics, limited digital tracking, unpredictable material supply, and a need for auditable recovery data, while recognizing informal collectors as an existing community resource.',
      formalStatement: 'Coordinate household pickups, independent collectors, scrap yards, and corporate recovery reporting without building a new fleet or requiring household phone numbers.',
      sprintConstraints: {
        timeLimit: 'SDG Sprints 2026 Stage 02',
        constraints: [
          'The proposal uses existing independent collectors and their vehicles instead of a platform-owned fleet.',
          'Pickup verification uses visual confirmation with one-time QR codes or PINs, without scales or specialized hardware.',
          'Households can use a PWA or static QR sticker without providing a phone number.'
        ],
        pressureFactors: [
          'The proposed workflow must work for participants with different device access and intermittent connectivity.',
          'Recycling quantities and pickup verification require fraud controls while avoiding expensive equipment.'
        ]
      }
    },
    leadership: {
      title: 'Team Member',
      responsibilities: [
        'Contributed to Legacy Aurora’s EcoChain Lanka proposal for SDG Sprints 2026.',
        'Worked on a concept linking household pickup requests, collector workflows, recycler pricing, and recovery records.'
      ],
      highPressureDecisions: [
        {
          dilemma: 'How can pickup verification work without buying scales or specialized collection hardware?',
          decision: 'Propose visual verification with a one-time QR code or PIN, with GPS-stamped collector confirmation.',
          rationale: 'The design aims to make the workflow inexpensive while including expiry, repeat-pickup limits, and audit checks.'
        },
        {
          dilemma: 'How can a digital recycling service include households without smartphones and protect personal privacy?',
          decision: 'Support static household QR stickers and avoid collecting household phone numbers.',
          rationale: 'The proposal reduces digital access and privacy barriers while still recording verified collection activity.'
        }
      ]
    },
    solution: {
      summary: 'EcoChain Lanka proposes a four-sided marketplace for households, independent collectors, scrap yards, and corporate brands, using QR-verified pickup records, collector routing, dynamic local pricing, and aggregated recovery data.',
      stack: ['Next.js PWA', 'FastAPI', 'PostgreSQL', 'PostGIS', 'Supabase', 'OpenStreetMap', 'Leaflet', 'OSRM', 'Python qrcode', 'BarcodeDetector API', 'Service Workers', 'IndexedDB', 'WebSockets'],
      architectureOverview: 'A household PWA records pickup requests and issues one-time QR codes or PINs. Collector tools provide offline-capable routes and verification. FastAPI and PostgreSQL/PostGIS manage requests, spatial matching, transactions, and pricing, while scrap yards publish daily prices and anonymized recovery records support proposed EPR reporting.',
      dataPipelines: [
        'A household records recyclable material and requests a pickup through the PWA or a QR sticker workflow.',
        'The system matches nearby collectors and supports route grouping using spatial data.',
        'A collector verifies the pickup using an expiring QR code or PIN and location confirmation.',
        'Verified activity updates pickup records and the household points ledger.',
        'Scrap-yard prices inform collector choices; aggregated transactions support proposed recovery and EPR reporting.'
      ]
    },
    retrospective: {
      whatWorked: [
        'The proposal builds on existing informal collectors instead of assuming a new logistics fleet.',
        'Privacy and low-cost access are treated as part of the service design, including QR stickers and no household phone-number collection.',
        'The concept connects pickup verification with dynamic pricing and downstream recovery reporting.'
      ],
      whatFailed: [
        'EcoChain Lanka is presented as a proposal; the document describes a future pilot and targets rather than verified collection or income outcomes.'
      ],
      engineeringTakeaways: [
        'Include offline collector workflows and non-smartphone access in the core design.',
        'Balance simple verification with expiry, location checks, and audit controls.',
        'Label projected recycling, income, and EPR figures as targets until pilot data confirms them.'
      ]
    },
    deepDive: {
      title: 'A Privacy-Aware Recycling Network',
      subtitle: 'Connecting collection to verified recovery data',
      description: 'EcoChain Lanka proposes a lightweight coordination layer that uses existing collectors and QR-based confirmation to connect household material with local recyclers and auditable downstream records.',
      components: [
        {
          name: 'Household access',
          metricOrDetail: 'PWA or static QR sticker',
          notes: 'The proposal supports households without a smartphone and avoids collecting phone numbers.'
        },
        {
          name: 'Pickup verification',
          metricOrDetail: 'One-time QR code or PIN',
          notes: 'Collector confirmation is paired with expiry, repeat-pickup limits, and location checks.'
        },
        {
          name: 'Local market coordination',
          metricOrDetail: 'Collector routes and scrap-yard prices',
          notes: 'Spatial routing and daily price broadcasts are proposed to help connect supply with nearby buyers.'
        }
      ],
      highlightCallout: 'EcoChain Lanka is a Stage 02 proposal by Legacy Aurora for SDG Sprints 2026.'
    }
  },
  {
    slug: 'skilllink-lanka',
    title: 'SkillLink Lanka',
    event: 'SDG Sprints 2026 | Stage 02',
    year: '2026',
    category: 'ATTEMPT',
    outcome: 'Stage 02 – In Progress',
    outcomeStatus: 'Submitted',
    role: 'Team Member',
    teamName: 'Legacy Aurora',
    sprintDuration: 'SDG Sprints 2026 Stage 02',
    synopsis: 'A secure mobile-first marketplace and verified skill portfolio for informal tradespeople in Sri Lanka, connecting workers with customers through identity and skill checks, protected communication, payments, and dispute resolution.',
    keyTheme: 'Decent work and reduced inequalities for informal workers (SDGs 8 and 10).',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&auto=format&fit=crop&q=85',
    tags: ['Informal Workers', 'Skills Marketplace', 'Digital Trust', 'LankaQR', 'SDGs 8 and 10'],
    verificationLinks: [],
    challenge: {
      briefing: 'The proposal identifies a trust gap affecting informal tradespeople and customers: workers lack portable proof of skills and income, while consumers have limited ways to verify providers, communicate safely, or resolve disputes.',
      formalStatement: 'Create a secure marketplace that connects customers and tradespeople while supporting worker verification, private communication, protected transactions, and accountability.',
      sprintConstraints: {
        timeLimit: 'SDG Sprints 2026 Stage 02',
        constraints: [
          'The proposal targets skilled informal trades such as masonry, carpentry, electrical work, plumbing, tiling, and painting.',
          'Worker access is designed for low digital literacy through voice-first Sinhala and Tamil onboarding and app-free SMS links.',
          'Identity and skill checks, masked communication, LankaQR escrow, ratings, and dispute resolution are proposed as one closed-loop service.'
        ],
        pressureFactors: [
          'The concept must serve workers with entry-level devices, limited digital confidence, or changing phone access.',
          'Identity, payment, and communication safeguards must protect both customers and workers across multi-day jobs.'
        ]
      }
    },
    leadership: {
      title: 'Team Member',
      responsibilities: [
        'Contributed to Legacy Aurora’s SkillLink Lanka proposal for SDG Sprints 2026.',
        'Worked on a concept for verified worker portfolios and safer service transactions.'
      ],
      highPressureDecisions: [
        {
          dilemma: 'How can customers evaluate workers without excluding experienced tradespeople who lack formal certificates?',
          decision: 'Propose tiered verification that combines work evidence, community endorsements, and formal TVEC/NVQ checks where available.',
          rationale: 'Multiple verification pathways recognize practical experience while distinguishing the level of evidence.'
        },
        {
          dilemma: 'How can users communicate and transact without exposing workers’ and customers’ personal contact details?',
          decision: 'Route communication through masked in-app chat and voice, with proposed LankaQR escrow and dispute support.',
          rationale: 'Keeping trust and transaction steps within the platform is presented as a core safety and accountability mechanism.'
        }
      ]
    },
    solution: {
      summary: 'SkillLink Lanka proposes a mobile-first service marketplace with geospatial discovery, tiered identity and skill verification, masked chat and voice, LankaQR escrow, and dispute resolution.',
      stack: ['Next.js PWA', 'FastAPI', 'PostgreSQL', 'PostGIS', 'Cloudflare R2 or AWS S3', 'WebSockets', 'WebRTC', 'LankaQR / LankaPay API', 'NIC OCR and e-KYC', 'TVEC / NVQ verification', 'SMS gateway'],
      architectureOverview: 'The proposed PWA supports worker portfolios and customer discovery. FastAPI handles matching, booking, WebSocket chat, and payment orchestration, with PostgreSQL/PostGIS for jobs and geospatial queries. Object storage holds portfolio media, while WebRTC, one-time SMS links, identity checks, skill verification, and LankaQR escrow are proposed to support protected end-to-end transactions.',
      dataPipelines: [
        'Workers create profiles through voice-assisted onboarding, work evidence, and identity checks.',
        'Customer requests are matched to nearby workers using geospatial search and verified skill information.',
        'Masked chat and voice support booking coordination without exposing personal numbers.',
        'LankaQR-linked escrow is proposed to hold payment against job progress and completion.',
        'Ratings and dispute workflows contribute to worker accountability and a portable verified portfolio.'
      ]
    },
    retrospective: {
      whatWorked: [
        'The proposal addresses discovery, verification, communication, payment, and dispute resolution as one trust workflow.',
        'Tiered evidence allows both community-validated experience and formal credentials to contribute to worker profiles.',
        'Voice-first onboarding and one-time SMS links consider workers with lower digital access.'
      ],
      whatFailed: [
        'SkillLink Lanka is presented as a proposal; integrations with identity, TVEC/NVQ, and payment services are proposed rather than confirmed as operational.'
      ],
      engineeringTakeaways: [
        'Trust-sensitive marketplaces need clear verification levels and transparent evidence sources.',
        'Privacy controls should cover communication and transactions, not just profile data.',
        'Validate external payment and credential integrations before treating them as implemented capabilities.'
      ]
    },
    deepDive: {
      title: 'Verified Skills and Safer Service Transactions',
      subtitle: 'A closed-loop marketplace concept for informal trades',
      description: 'SkillLink Lanka proposes linking worker discovery to evidence of skills, protected communication, and payment handling so that both parties have accountability throughout a job.',
      components: [
        {
          name: 'Tiered skill verification',
          metricOrDetail: 'Community and TVEC/NVQ pathways',
          notes: 'The proposal distinguishes self-submitted evidence, community endorsements, and formal credential checks.'
        },
        {
          name: 'Protected communication',
          metricOrDetail: 'Masked chat and WebRTC voice',
          notes: 'The platform is designed to avoid exposing personal phone numbers between customers and workers.'
        },
        {
          name: 'Transaction safeguards',
          metricOrDetail: 'LankaQR escrow and dispute support',
          notes: 'Payment protection and dispute resolution are proposed as part of the service flow.'
        }
      ],
      highlightCallout: 'SkillLink Lanka is a Stage 02 proposal by Legacy Aurora for SDG Sprints 2026.'
    }
  },
]
