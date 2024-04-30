import type { Metadata } from "next";
import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider/StoryblokProvider"

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
});

export const metadata: Metadata = {
  title: "Tim Watts",
  description: "No More Mr. Nice Guy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  );
}
