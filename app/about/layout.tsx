import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Deepthi Mahendran",
  description: "About Deepthi Mahendran, Full-Stack Developer & Tech Enthusiast based in Chennai, India.",
  openGraph: {
    title: "About | Deepthi Mahendran",
    description: "Learn more about Deepthi Mahendran, Full-Stack Developer & Tech Enthusiast building impactful web solutions.",
    url: "https://deepthi-paul.vercel.app/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Deepthi Mahendran",
    description: "Learn more about Deepthi Mahendran, Full-Stack Developer & Tech Enthusiast building impactful web solutions.",
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
