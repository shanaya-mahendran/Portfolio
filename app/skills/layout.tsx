import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Tech Stack | Deepthi Mahendran",
  description: "An overview of my technical expertise, tools, and frameworks I use every day.",
  openGraph: {
    title: "Skills & Tech Stack | Deepthi Mahendran",
    description: "An overview of my technical expertise, tools, and frameworks I use every day.",
    url: "https://deepthi-paul.vercel.app/skills",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills & Tech Stack | Deepthi Mahendran",
    description: "An overview of my technical expertise, tools, and frameworks I use every day.",
  }
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
