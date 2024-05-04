import * as React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../src/theme';
import { Inter } from "next/font/google";
import Image from 'next/image';
import "./globals.css";
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tim Watts Coaching",
  description: "No More Mr. Nice Guy Certified Coach; Positivity and Empowerment Coach",
};
const logoPath = "/timwatts_logo-WHITE.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="icon" type="image/png" href="/icon.png" />
      </Head>
      <body className={inter.className}>
        <Analytics />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="fixed" sx={{ background: 'rgba(255, 255, 255, 0.2)', }} elevation={0}>
                <Toolbar className="MuiContainer-maxWidthLg" sx={{ display: "flex", justifyContent: "center",  }}>
                  <Typography variant="h6" component="div" sx={{ display: "flex", flexDirection: "row", alignItems: "center", flexGrow: 1, maxWidth: "lg" }}>
                    <Image src={logoPath} alt="Logo" width={185} height={42} />
                  </Typography>
                  <Button color="inherit">Login</Button>
                </Toolbar>
              </AppBar>
            </Box>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

