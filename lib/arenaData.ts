export interface ArenaEntry {
  slug: string
  title: string
  event: string
  year: string
  category: 'PODIUM' | 'ATTEMPT' | 'LAB'
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
    title: 'SmartPark',
    event: 'IEEE CS Sri Lanka R10 Summer School 2026',
    year: '2026',
    category: 'PODIUM',
    outcome: '🏆 3rd Place Winner',
    outcomeStatus: 'Award Winner',
    role: 'Team Lead & Systems Architect',
    teamName: 'HungryBeast',
    teamSize: '4 Engineers',
    sprintDuration: '24-Hour Ideathon & Rapid Prototyping',
    synopsis: 'Trustworthy, privacy-preserving predictive parking ecosystem with offline-first mesh resilience, rejecting predatory dynamic pricing in high-congestion urban cores.',
    keyTheme: 'Trustworthy, privacy-preserving parking heuristics with offline-first mesh resilience.',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1000&auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1400&auto=format&fit=crop&q=85',
    tags: ['Edge Mesh', 'Predictive Parking', 'Privacy-Preserving', 'Offline-First', 'IEEE CS R10'],
    verificationLinks: [
      { label: 'IEEE CS R10 Certificate', url: '#', type: 'certificate' },
      { label: 'Ideathon Pitch Deck', url: '#', type: 'slides' },
      { label: 'GitHub Repository', url: 'https://github.com/shanaya-mahendran/SmartPark', type: 'github' }
    ],
    challenge: {
      briefing: 'High-density commercial hubs in Colombo suffer from severe congestion caused by drivers circling for vacant parking. Existing solutions rely on centralized cameras streaming license plates to the cloud—raising serious surveillance concerns, latency delays, and total breakdown during mobile network dropouts.',
      formalStatement: 'Design an equitable, trustworthy urban parking system that operates under constrained connectivity, guarantees driver anonymity, and prevents exploitative surge pricing while maintaining real-time spot occupancy accuracy above 94%.',
      sprintConstraints: {
        timeLimit: 'Strict 24-hour delivery window from briefing to live panel pitch',
        constraints: [
          'Zero transmission of raw driver identifiers or license plate images off-premises',
          'System must survive complete 30-minute 4G/5G cellular blackouts without stale state',
          'Fairness algorithm must prevent spot monopolization by premium bidders'
        ],
        pressureFactors: [
          'Sprint halfway checkpoint required immediate pivot from cloud database to edge SQLite',
          'Live judges simulation tested simulated sensor latency spikes of up to 4,200ms'
        ]
      }
    },
    leadership: {
      title: 'Architectural Command & Feature Ownership',
      responsibilities: [
        'Directed 4-engineer multi-disciplinary team HungryBeast across hardware modeling, frontend telemetry, and consensus design.',
        'Architected the localized bloom-filter occupancy broadcast protocol across simulated mesh nodes.',
        'Authored and presented the technical evaluation defense before IEEE Computer Society international jury.'
      ],
      highPressureDecisions: [
        {
          dilemma: 'Should we build computer vision license-plate recognition or anonymous ultrasonic beacon heuristics?',
          decision: 'Chose anonymous ultrasonic beacon heuristics with localized edge nodes.',
          rationale: 'Avoided GDPR/privacy failure modes and slashed bandwidth requirement from ~12MB/min to under 1.2KB/min per zone.'
        },
        {
          dilemma: 'Cloud sync was dropping packets during midnight stress testing.',
          decision: 'Decoupled spot allocation from cloud sync; made local gate controllers authoritative with eventual consistency.',
          rationale: 'Zero single-point-of-failure; drivers can park even if the telecommunication tower is completely offline.'
        }
      ]
    },
    solution: {
      summary: 'SmartPark integrates edge-computed occupancy vectors, zero-knowledge vehicle tokenization, and a deterministic fairness allocation score that prioritizes waiting time and distance over dynamic bid pricing.',
      stack: ['Next.js 14', 'TypeScript', 'WebSockets', 'SQLite / IndexedDB', 'Service Workers', 'Chart.js'],
      architectureOverview: 'Localized Gate Controllers maintain ephemeral slot states in a low-footprint ring buffer. Availability summaries are broadcast to arriving vehicles over peer-to-peer Wi-Fi Direct beacons. Reservations generate cryptographic ephemeral vouchers valid for 12 minutes without tracking user identity.',
      dataPipelines: [
        'Sensor Ingestion: Ultrasonic spot sensors emit 2-byte state packets to edge broker',
        'Edge Clustering: Local aggregation node computes probabilistic vacancy decay every 1500ms',
        'Mesh Broadcast: High-density beacon transmits 84-byte compressed occupancy bitmaps to mobile clients',
        'Eventual Cloud Sync: Batched delta hashes pushed to central registry when upstream connectivity stabilizes'
      ],
      codeSnippet: {
        title: 'Heuristic Fairness Score Calculator',
        language: 'typescript',
        code: `// Calculates spot allocation weight balancing driver proximity and wait duration
export function calculateFairnessAllocation(
  distanceMeters: number,
  waitTimeSeconds: number,
  isEmergencyOrDisability: boolean
): number {
  if (isEmergencyOrDisability) return Number.MAX_SAFE_INTEGER;
  
  // Alpha: Weight for patience (seconds)
  // Beta: Proximity damping factor to avoid corner-spot starvations
  const ALPHA = 1.85;
  const BETA = 120.0;
  
  const waitFactor = Math.pow(Math.max(1, waitTimeSeconds), 0.72) * ALPHA;
  const distancePenalty = Math.log2(Math.max(10, distanceMeters) + BETA);
  
  // Higher score receives higher allocation priority without surge bidding
  return Number((waitFactor / distancePenalty).toFixed(4));
}`,
        explanation: 'Enforces equitable parking dispatch. Wealthier drivers cannot pay premiums to leapfrog waiting citizens, adhering directly to UN SDG 10 (Reduced Inequalities) and trustworthy AI tenets.'
      }
    },
    retrospective: {
      whatWorked: [
        'Demonstrating an intentional offline simulation during live judge testing proved system robustness and stood out among competitors.',
        'Privacy-first angle directly answered the IEEE Summer School theme of "Trustworthy Smart Ecosystems".',
        'Strict timeboxing enabled us to deliver a complete polished UI with live canvas parking lot visualizer 2 hours before deadline.'
      ],
      whatFailed: [
        'Initial reliance on WebSocket heartbeats caused browser throttle warnings when tabs were backgrounded.',
        'Underestimated sensor drift modeling in physical parking lots, which required a rapid heuristic smoothing layer.',
        'Did not have enough time to test multi-level garage floor transitions in the 3D demo view.'
      ],
      engineeringTakeaways: [
        'Heuristic, edge-first architectures consistently outshine over-engineered cloud monoliths under real-world connectivity constraints.',
        'In competitive hackathons, framing technical decisions around human trust and privacy makes architectural complexity relatable to non-developer judges.',
        'Always design demo data fixtures with intentional chaos engineering to prove resilience on stage.'
      ]
    },
    deepDive: {
      title: 'Decentralized Mesh Protocol & Anti-Surge Heuristics',
      subtitle: 'Technical deep-dive into the localized gossip protocol',
      description: 'SmartPark nodes exchange occupancy updates via a lightweight gossip broadcast protocol. Each parking precinct operates as an autonomous cell with zero dependencies on external cloud availability.',
      components: [
        {
          name: 'Occupancy Vector Size',
          metricOrDetail: '84 Bytes per 250 spots',
          notes: 'Bit-packed boolean arrays with Run-Length Encoding (RLE) ensure near-instant transfer across BLE / Wi-Fi Direct.'
        },
        {
          name: 'Sync Recovery Time',
          metricOrDetail: '< 420ms after reconnect',
          notes: 'Vector clocks resolve conflicting slot assignments deterministically without split-brain locks.'
        },
        {
          name: 'Zero-PII Token TTL',
          metricOrDetail: '12 Minutes Ephemeral',
          notes: 'Driver tickets are hashed with salted session nonces that automatically expire upon parking bay entry.'
        }
      ],
      highlightCallout: '🏆 Result: Awarded 3rd Place out of 28 competing international teams at the IEEE Computer Society R10 Summer School 2026.'
    }
  },
  {
    slug: 'smart-travel',
    title: 'Smart Travel',
    event: 'Cre8X Oracle Challenge 2026',
    year: '2026',
    category: 'ATTEMPT',
    outcome: '⚔️ Did Not Advance',
    outcomeStatus: 'Did Not Advance',
    role: 'Lead Full-Stack Architect',
    teamName: 'Apex Route',
    teamSize: '3 Engineers',
    sprintDuration: '36-Hour Sprint',
    synopsis: 'Crowdsourced road hazard telemetry and transit resilience platform engineered for Sri Lankan micro-climate disasters, featuring an aggressive technical post-mortem on scope creep.',
    keyTheme: 'Real-time hazard telemetry; retrospective focuses on scope creep and pitch clarity.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1000&auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1400&auto=format&fit=crop&q=85',
    tags: ['Telemetry Ingestion', 'Post-Mortem', 'Oracle Cloud', 'Geohashing', 'Cre8X 2026'],
    verificationLinks: [
      { label: 'GitHub Project Archive', url: 'https://github.com/shanaya-mahendran/Smart-Travel-Cre8X', type: 'github' },
      { label: 'Cre8X Post-Mortem Slides', url: '#', type: 'slides' }
    ],
    challenge: {
      briefing: 'Sri Lankan intercity transit faces flash floods, fallen trees in central highlands, and unpredictable rail disruptions. Drivers and commuters rely on fragmented WhatsApp messages rather than coordinated spatial warnings.',
      formalStatement: 'Construct a resilient transit telemetry platform ingesting real-time road hazard reports, verifying crowdsourced authenticity, and computing alternate detour paths with minimal cellular bandwidth overhead.',
      sprintConstraints: {
        timeLimit: '36 continuous sprint hours with mandatory cloud database integration',
        constraints: [
          'Must ingest continuous GPS breadcrumbs and hazard markers',
          'Enforce strict deduplication of overlapping hazard reports within 200m radius',
          'Must present live working prototype to Oracle technical evaluation team'
        ],
        pressureFactors: [
          'Team expanded scope into booking ticketing simultaneously with hazard tracking',
          'Cloud database instance ran out of connection pool slots 4 hours before submission'
        ]
      }
    },
    leadership: {
      title: 'Full-Stack Lead & Post-Mortem Reflection',
      responsibilities: [
        'Built WebSocket real-time ingest server handling simulated multi-vehicle location updates.',
        'Engineered Geohash cluster indexing logic to aggregate overlapping hazard pings.',
        'Led post-competition retrospective documenting systemic failure factors.'
      ],
      highPressureDecisions: [
        {
          dilemma: 'Should we stick to pure hazard telemetry or also demo a passenger bus booking interface?',
          decision: 'Attempted to build both hazard telemetry and bus booking simultaneously.',
          rationale: 'Hoped to show end-to-end commercial viability; instead divided frontend focus and diluted the core pitch.'
        },
        {
          dilemma: 'Database connection timeouts occurred under heavy concurrent socket pings.',
          decision: 'Added an in-memory batch buffer to pool writes before Oracle DB commits.',
          rationale: 'Saved the backend from crashing during load tests, but consumed 6 hours of UI polishing time.'
        }
      ]
    },
    solution: {
      summary: 'Smart Travel combined geohash-based spatial bucketing, time-decay confidence scoring for crowdsourced hazards, and offline vector maps for bus drivers operating across high-altitude roads.',
      stack: ['Node.js', 'Express', 'Oracle Autonomous DB', 'Leaflet / Mapbox', 'WebSockets', 'Redis Cache'],
      architectureOverview: 'Mobile clients emit periodic hazard pings (pothole, fallen tree, waterlogging). The ingest layer hashes coordinates into 7-character Geohashes (~150m accuracy), merging duplicate reports into a single weighted incident score with a half-life decay function.',
      dataPipelines: [
        'Telemetry Uplink: Compressed JSON payload containing coordinates and hazard type (88 bytes)',
        'Spatial Bucketing: Coordinates snapped to Geohash cell with existing incident lookups',
        'Decay Algorithm: Old warnings degrade by 50% confidence every 45 minutes unless re-confirmed',
        'Client Push: Geo-fenced alerts streamed only to drivers within 5km approach trajectory'
      ],
      codeSnippet: {
        title: 'Geohash Hazard Cluster & Half-Life Decay',
        language: 'typescript',
        code: `// Computes decayed confidence score for crowdsourced road warnings
export function computeIncidentConfidence(
  initialReportsCount: number,
  lastReportedTimestamp: number,
  decayHalfLifeMinutes: number = 45
): number {
  const elapsedMinutes = (Date.now() - lastReportedTimestamp) / 60000;
  if (elapsedMinutes <= 0) return Math.min(100, initialReportsCount * 25);
  
  // Radioactive-style half-life decay to automatically purge cleared hazards
  const decayMultiplier = Math.pow(0.5, elapsedMinutes / decayHalfLifeMinutes);
  const rawScore = (initialReportsCount * 25) * decayMultiplier;
  
  return Math.max(0, Math.min(100, Math.round(rawScore)));
}`,
        explanation: 'Solves the classic crowdsourced mapping bug: ghost hazards remaining indefinitely on map long after the road obstruction has been cleared by authorities.'
      }
    },
    retrospective: {
      whatWorked: [
        'The backend spatial telemetry pipeline was blazingly fast: sub-40ms incident clustering and solid database write batching.',
        'Geohash decay algorithm functioned flawlessly in synthetic load testing.',
        'Team operated with transparent communication, documenting issues candidly throughout the 36 hours.'
      ],
      whatFailed: [
        'FATAL SCOPE CREEP: We attempted to build a transit reservation system on top of a hazard tracker. Neither received 100% polish.',
        'PITCH MISALIGNMENT: The pitch presentation spent 70% of the 3-minute slot explaining database connection pooling and relational normalization instead of demonstrating commuter lives saved.',
        'DEMO TIMEOUT: The mobile web UI suffered from a minor CSS viewport bug on iOS Safari, causing judges to pause their testing during live evaluation.'
      ],
      engineeringTakeaways: [
        'Never build two apps in a 36-hour sprint. Perfect one compelling workflow and defend it ruthlessly against feature creep.',
        'Judges evaluate outcomes, not backend suffering. A flawless database architecture is invisible if the demo narrative takes 90 seconds to unpack.',
        'Failures analyzed honestly are worth 10x more than easy victories—this retrospective laid the foundation for our IEEE R10 podium win 3 months later.'
      ]
    },
    deepDive: {
      title: 'Post-Mortem Anatomy: Root Causes & The Re-Architecture',
      subtitle: 'Frank engineering critique of Cre8X performance',
      description: 'The failure at Cre8X was not an algorithm failure—it was a product management and storytelling failure under severe deadline pressure.',
      components: [
        {
          name: 'Backend Ingest Throughput',
          metricOrDetail: '4,800 events / sec',
          notes: 'High-performing pipeline that unfortunately was not front-and-center during the pitch.'
        },
        {
          name: 'Pitch Time on Architecture',
          metricOrDetail: '135 / 180 seconds',
          notes: 'Major mistake: spent precious pitch time discussing indexing rather than user pain.'
        },
        {
          name: 'Code Written vs Code Used',
          metricOrDetail: '42% unused code',
          notes: 'Ticketing and passenger seat reservation logic was completely unviewed by judges.'
        }
      ],
      highlightCallout: '⚔️ Post-Mortem Lesson: Engineering humility is the prerequisite to true technical excellence. This retrospective transformed our team doctrine.'
    }
  },
  {
    slug: 'agentic-neural-router',
    title: 'Autonomous Multi-Agent Workflow Engine',
    event: 'Autonomous Systems & Edge AI Lab Sprint 2026',
    year: '2026',
    category: 'LAB',
    outcome: '🧪 Active Prototype',
    outcomeStatus: 'Active Prototype',
    role: 'Core Systems Researcher & Creator',
    teamName: 'Independent Systems Lab',
    teamSize: 'Solo Research',
    sprintDuration: 'Experimental Technical Sprint',
    synopsis: 'Reactive DAG scheduler with ACID-style transactional rollbacks and typed boundary contracts for local multi-agent LLM systems, stopping cascading hallucination loops.',
    keyTheme: 'Reactive DAG scheduler and reversible rollbacks for local multi-agent LLM systems.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1400&auto=format&fit=crop&q=85',
    tags: ['Multi-Agent DAG', 'Local LLMs', 'Rollback Journal', 'Active Prototype', 'Systems Lab'],
    verificationLinks: [
      { label: 'Architecture RFC & Specs', url: '#', type: 'paper' },
      { label: 'Prototype GitHub Repository', url: 'https://github.com/shanaya-mahendran/agentic-neural-router', type: 'github' }
    ],
    challenge: {
      briefing: 'Autonomous multi-agent LLM pipelines frequently suffer from compounding hallucination cascades: Agent A emits an invalid tool argument, Agent B attempts to parse it and hallucinates an erroneous downstream mutation, causing catastrophic non-deterministic execution failure.',
      formalStatement: 'Design a deterministic execution supervisor that treats LLM agent interactions as transactional graph transitions, guaranteeing state rollbacks, strict JSON schema validation, and cycle detection.',
      sprintConstraints: {
        timeLimit: '48-hour continuous technical proof-of-concept sprint',
        constraints: [
          'Zero cloud API reliance—must execute locally on consumer GPU/CPU using quantized Ollama models',
          'Every agent mutation must be reversible via an append-only WAL (Write-Ahead Log)',
          'Total orchestration overhead must remain below 18ms per transition step'
        ],
        pressureFactors: [
          'High memory pressure when running multiple concurrent 8B quantized models locally',
          'Handling partial execution failures without corrupting shared sandbox memory'
        ]
      }
    },
    leadership: {
      title: 'Solo Architecture & System Design',
      responsibilities: [
        'Formulated the state-machine formal model and directed acyclic execution graph topology.',
        'Implemented the in-memory transactional snapshot journal with zero-copy state diffs.',
        'Benchmarked latency, failure recovery rates, and token economy across 250 simulated pipeline tasks.'
      ],
      highPressureDecisions: [
        {
          dilemma: 'Should agent state be serialized in natural language context or strict binary JSON?',
          decision: 'Enforced rigid Zod/Pydantic schema validation at every transition boundary.',
          rationale: 'Natural language context accumulation is brittle and burns precious local context windows.'
        },
        {
          dilemma: 'How to recover when an agent gets stuck in infinite clarification loops?',
          decision: 'Introduced an automatic depth-bound supervisor with simulated annealing backoff.',
          rationale: 'Terminates runaway loops at depth 4 and triggers a parent branch rollback.'
        }
      ]
    },
    solution: {
      summary: 'An autonomous multi-agent orchestration runtime featuring a reactive DAG scheduler, transactional state snapshots, and automatic rollback semantics when downstream agents violate schema invariants.',
      stack: ['TypeScript', 'Node.js', 'Ollama (Llama-3.1 8B / Mistral)', 'Zod', 'RxJS', 'JSON-Schema'],
      architectureOverview: 'The orchestrator maintains an execution graph where nodes are specialized agent personas (Researcher, Coder, Critic, Validator) and edges are strictly typed contract pipelines. Before any tool execution, an immutable snapshot is pushed to the Journal. If a schema violation or test failure occurs, the state is rolled back cleanly to the last validated checkpoint.',
      dataPipelines: [
        'DAG Compilation: User goal decomposes into dependency-ordered execution graph',
        'Pre-Flight Snapshot: Immutable state clone saved into rollback journal stack',
        'Contract Validation: Output payload verified against strict schema before node advancement',
        'Auto-Rollback Trigger: On contract mismatch, journal reverts state and synthesizes targeted corrective prompts'
      ],
      codeSnippet: {
        title: 'Transactional Graph Step with Rollback Reversion',
        language: 'typescript',
        code: `// Executes an agent task within a transactional checkpoint envelope
export async function executeTransactionalNode<TState>(
  nodeId: string,
  state: TState,
  journal: SnapshotJournal<TState>,
  executor: (s: TState) => Promise<TState>,
  validator: (s: TState) => boolean
): Promise<{ success: boolean; state: TState; rolledBack: boolean }> {
  // Push pre-execution checkpoint
  const checkpointId = journal.recordSnapshot(nodeId, state);
  
  try {
    const nextState = await executor(state);
    const isValid = validator(nextState);
    
    if (!isValid) {
      // Automatic reversion to safe checkpoint
      const revertedState = journal.rollbackTo(checkpointId);
      return { success: false, state: revertedState, rolledBack: true };
    }
    
    return { success: true, state: nextState, rolledBack: false };
  } catch (error) {
    const revertedState = journal.rollbackTo(checkpointId);
    return { success: false, state: revertedState, rolledBack: true };
  }
}`,
        explanation: 'Transforms unpredictable LLM non-determinism into predictable, transactional software engineering guarantees.'
      }
    },
    retrospective: {
      whatWorked: [
        'Rollback engine successfully prevented 99.4% of simulated cascading tool failures across 250 benchmark tests.',
        'Running lightweight quantized models locally completely eliminated cloud API costs and rate limit failures.',
        'Schema-first contracts forced prompt brevity, reducing average agent token usage by 38%.'
      ],
      whatFailed: [
        'Deep recursion in the DAG occasionally saturated local VRAM when concurrent model instances competed for memory.',
        'Synthesized corrective feedback prompts were sometimes ignored by lower-parameter models (<7B params).',
        'Visual DAG viewer needs deeper real-time introspection into token generation stream speeds.'
      ],
      engineeringTakeaways: [
        'The primary bottleneck in multi-agent systems is not reasoning capability—it is state management and failure recovery boundaries.',
        'Software design patterns from database transaction management (WAL, snapshots, isolation levels) apply directly to generative AI pipelines.',
        'Treating LLMs as probabilistic subroutines inside deterministic supervisor graphs is far more reliable than letting agents wander freely.'
      ]
    },
    deepDive: {
      title: 'Reactive DAG Engine & Transactional Memory Journal',
      subtitle: 'Formal state graph execution benchmarks',
      description: 'The engine implements state snapshotting using structural sharing, enabling microsecond rollback times even when managing multi-megabyte document context structures.',
      components: [
        {
          name: 'Rollback Recovery Speed',
          metricOrDetail: '1.4ms average latency',
          notes: 'Zero-copy memory diffing restores safe baseline states before the next iteration cycle.'
        },
        {
          name: 'Benchmark Task Completion',
          metricOrDetail: '91.2% deterministic pass rate',
          notes: 'Tested on complex code generation and research extraction pipelines with self-healing triggers.'
        },
        {
          name: 'Local Token Efficiency',
          metricOrDetail: '38% prompt token reduction',
          notes: 'Typed payload structures eliminate the need to repeat conversation history on every node.'
        }
      ],
      highlightCallout: '🧪 Status: Active Prototype under active research iteration. Open RFCs and benchmark suite available on GitHub.'
    }
  }
]
