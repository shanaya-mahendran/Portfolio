import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ARENA_ENTRIES } from '@/lib/arenaData'
import ArenaCaseStudyClient from '@/components/ArenaCaseStudyClient'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return ARENA_ENTRIES.map(entry => ({
    slug: entry.slug
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const entry = ARENA_ENTRIES.find(e => e.slug === slug)

  if (!entry) {
    return {
      title: 'Case Study Not Found | The Arena',
      description: 'The requested arena case study could not be found.'
    }
  }

  return {
    title: `${entry.title} · ${entry.outcome} | The Arena`,
    description: entry.synopsis,
    openGraph: {
      title: `${entry.title} (${entry.event}) — Case Study & Post-Mortem`,
      description: entry.synopsis,
      url: `https://shanaya-paul.vercel.app/arena/${entry.slug}`,
      images: [
        {
          url: entry.image,
          width: 1200,
          height: 630,
          alt: entry.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${entry.title} · ${entry.outcome} | The Arena`,
      description: entry.synopsis
    }
  }
}

export default async function ArenaSubPage({ params }: PageProps) {
  const { slug } = await params
  const entry = ARENA_ENTRIES.find(e => e.slug === slug)

  if (!entry) {
    notFound()
  }

  return <ArenaCaseStudyClient entry={entry} />
}
