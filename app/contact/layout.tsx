import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Deepthi Mahendran",
  description: "Get in touch for freelance opportunities, full-time roles, or just to say hi.",
  openGraph: {
    title: "Contact | Deepthi Mahendran",
    description: "Get in touch for freelance opportunities, full-time roles, or just to say hi.",
    url: "https://deepthi-paul.vercel.app/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Deepthi Mahendran",
    description: "Get in touch for freelance opportunities, full-time roles, or just to say hi.",
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
