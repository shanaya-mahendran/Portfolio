import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Building Sri Lanka's Digital Future | Impact & SDGs · Shanaya Mahendran",
  description: 'A living roadmap of civic-tech, digital public infrastructure, and social innovations directly aligned with the United Nations Sustainable Development Goals across Sri Lanka.',
  openGraph: {
    title: "Building Sri Lanka's Digital Future | Impact & SDGs · Shanaya Mahendran",
    description: 'A living roadmap of civic-tech, digital public infrastructure, and social innovations directly aligned with the United Nations Sustainable Development Goals across Sri Lanka.',
    url: 'https://shanaya-paul.vercel.app/impact',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Building Sri Lanka's Digital Future | Impact & SDGs · Shanaya Mahendran",
    description: 'A living roadmap of civic-tech, digital public infrastructure, and social innovations directly aligned with the United Nations Sustainable Development Goals across Sri Lanka.',
  }
}

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children
}
