import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "../../providers/ThemeProvider";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import Login from "./sign-in/[[...sign-in]]/page";
import Register from "./sign-up/[[...sign-up]]/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>

        <body className={`${inter.className} h-full`} suppressHydrationWarning={true}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
              {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
