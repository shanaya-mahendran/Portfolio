import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Shanaya Mahendran",
  description: "About Shanaya Mahendran, Full-Stack Developer & Tech Enthusiast based in Chennai, India.",
  openGraph: {
    title: "About | Shanaya Mahendran",
    description: "Learn more about Shanaya Mahendran, Full-Stack Developer & Tech Enthusiast building impactful web solutions.",
    url: "https://shanaya-paul.vercel.app/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Shanaya Mahendran",
    description: "Learn more about Shanaya Mahendran, Full-Stack Developer & Tech Enthusiast building impactful web solutions.",
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
