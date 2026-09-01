import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Shanaya Mahendran",
  description: "Explore my latest projects, open-source contributions, and technical experiments.",
  openGraph: {
    title: "Projects | Shanaya Mahendran",
    description: "A showcase of web applications, full-stack tools, and open-source contributions built by Shanaya.",
    url: "https://shanaya-paul.vercel.app/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Shanaya Mahendran",
    description: "A showcase of web applications, full-stack tools, and open-source contributions built by Shanaya.",
  }
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
