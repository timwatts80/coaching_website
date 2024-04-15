/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from "../Page/Page";
import Teaser from "../Teaser/Teaser";
import Feature from "../Feature/Feature";
import Grid from "../Grid/Grid";
 
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

/** 2. Initialize it as usual */
storyblokInit({
    accessToken: "your_preview_token",
    use: [apiPlugin],
    components
  });

export default function StoryblokProvider({ children }: any) { // Specify the type for children prop
    return children;
}
 

 