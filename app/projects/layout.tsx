import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Deepthi Mahendran",
  description: "Explore my latest projects, open-source contributions, and technical experiments.",
  openGraph: {
    title: "Projects | Deepthi Mahendran",
    description: "A showcase of web applications, full-stack tools, and open-source contributions built by Deepthi.",
    url: "https://deepthi-paul.vercel.app/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Deepthi Mahendran",
    description: "A showcase of web applications, full-stack tools, and open-source contributions built by Deepthi.",
  }
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
