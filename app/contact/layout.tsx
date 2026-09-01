import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Shanaya Mahendran",
  description: "Get in touch for freelance opportunities, full-time roles, or just to say hi.",
  openGraph: {
    title: "Contact | Shanaya Mahendran",
    description: "Get in touch for freelance opportunities, full-time roles, or just to say hi.",
    url: "https://shanaya-paul.vercel.app/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Shanaya Mahendran",
    description: "Get in touch for freelance opportunities, full-time roles, or just to say hi.",
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
