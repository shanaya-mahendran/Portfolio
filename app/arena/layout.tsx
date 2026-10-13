import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Arena · Builds Under Pressure | Shanaya Mahendran',
  description: 'High-stakes hackathons, rapid technical sprints, podium finishes, and brutal engineering post-mortems under strict deadlines.',
  openGraph: {
    title: 'The Arena · Builds Under Pressure | Shanaya Mahendran',
    description: 'High-stakes hackathons, rapid technical sprints, podium finishes, and brutal engineering post-mortems under strict deadlines.',
    url: 'https://shanaya-paul.vercel.app/arena',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Arena · Builds Under Pressure | Shanaya Mahendran',
    description: 'High-stakes hackathons, rapid technical sprints, podium finishes, and brutal engineering post-mortems under strict deadlines.',
  }
}

export default function ArenaLayout({ children }: { children: React.ReactNode }) {
  return children
}
