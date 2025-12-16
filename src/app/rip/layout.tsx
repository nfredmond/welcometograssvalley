import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RIP Memorial Notes",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RIPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

