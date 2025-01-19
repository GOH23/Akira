import type { Metadata } from "next";

import "./globals.css";
import { Layout } from "antd"


import { ThemeProvider } from "next-themes";

import HeaderLayout from "./ui/HeaderWithoutSsr";
import { Content } from "antd/es/layout/layout";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: "Akira MMD",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>

        <ThemeProvider defaultTheme="purple" themes={["purple", "dark", "light"]} enableSystem={false}>
          <Layout className="overflow-x-hidden">
            <HeaderLayout />
            <Layout>
              <Content >

                {children}

              </Content>

            </Layout>
          </Layout>
        </ThemeProvider>

      </body>
    </html>
  );
}
