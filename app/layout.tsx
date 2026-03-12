import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bert Darnell | Cybersecurity Professional",
  description: "Personal website, technical webposts, and resume for Bert Darnell - Cybersecurity Professional and Help Desk Specialist",
  metadataBase: new URL("https://helloto.dev"),
  openGraph: {
    title: "Bert Darnell | Cybersecurity Professional",
    description: "Personal website, technical webposts, and resume for Bert Darnell - Cybersecurity Professional and Help Desk Specialist",
    type: "website",
    url: "/",
    siteName: "helloto.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bert Darnell | Cybersecurity Professional",
    description: "Personal website, technical webposts, and resume for Bert Darnell - Cybersecurity Professional and Help Desk Specialist",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}})()",
          }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
