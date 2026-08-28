import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education & Certifications | Deepthi Mahendran",
  description: "Academic journey and professional certifications.",
  openGraph: {
    title: "Education & Certifications | Deepthi Mahendran",
    description: "Academic journey and professional certifications.",
    url: "https://deepthi-paul.vercel.app/education",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education & Certifications | Deepthi Mahendran",
    description: "Academic journey and professional certifications.",
  }
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
