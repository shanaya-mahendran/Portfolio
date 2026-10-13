import { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { IMPACT_INITIATIVES } from '@/lib/impactData'
import ImpactInitiativeClient from '@/components/ImpactInitiativeClient'

interface PageProps {
  params: Promise<{ slug: string }>
}

const ALIAS_MAP: Record<string, string> = {
  'smart-waste-routing': 'community-smart-waste-network',
  'micro-skills-marketplace': 'digital-marketplace-informal-workers',
  'skill-tree': 'skilltree',
  'impact-connect': 'impactconnect',
  'dev-bridge': 'devbridge'
}

export async function generateStaticParams() {
  const directSlugs = IMPACT_INITIATIVES.map(i => ({ slug: i.slug }))
  const aliasSlugs = Object.keys(ALIAS_MAP).map(alias => ({ slug: alias }))
  return [...directSlugs, ...aliasSlugs]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const targetSlug = ALIAS_MAP[slug] || slug
  const initiative = IMPACT_INITIATIVES.find(i => i.slug === targetSlug)

  if (!initiative) {
    return {
      title: 'Initiative Not Found | Impact & SDGs',
      description: 'The requested initiative dossier could not be found.'
    }
  }

  const pageTitle = initiative.isSWoC
    ? `${initiative.title} | SWoC S7 Proposal · Shanaya Mahendran`
    : `${initiative.title} | Building Sri Lanka's Digital Future`

  return {
    title: pageTitle,
    description: initiative.primaryObjective,
    openGraph: {
      title: `${initiative.title} — Impact & SDGs Roadmap`,
      description: initiative.primaryObjective,
      url: `https://shanaya-paul.vercel.app/impact/${initiative.slug}`,
      images: [
        {
          url: initiative.image,
          width: 1200,
          height: 630,
          alt: initiative.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: initiative.primaryObjective
    }
  }
}

export default async function ImpactSubPage({ params }: PageProps) {
  const { slug } = await params
  
  if (ALIAS_MAP[slug]) {
    redirect(`/impact/${ALIAS_MAP[slug]}`)
  }

  const initiative = IMPACT_INITIATIVES.find(i => i.slug === slug)

  if (!initiative) {
    notFound()
  }

  return <ImpactInitiativeClient initiative={initiative} />
}
