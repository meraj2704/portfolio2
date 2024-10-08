import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";

import store from "@/redux/Store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ReduxProvider from "./ReduxProvider";
import StarsCanvas from "@/components/test/StarCanvas";

// const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Meraj - Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const queryClient = new QueryClient();

  return (
    <html lang="en">
      <ReduxProvider>
      {/* <QueryClientProvider client={queryClient}> */}
      <body className={`${ubuntu.className} bg-bg1`}>
        <div className="fixed left-0 right-0 top-0 bottom-0">
        <StarsCanvas/>
        </div>
        <Navbar/><div className="pt-16">{children}</div><Footer/></body>
      {/* </QueryClientProvider> */}
      </ReduxProvider>
    </html>
  );
}
