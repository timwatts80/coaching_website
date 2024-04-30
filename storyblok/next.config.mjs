/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        storyblokApiToken: process.env.STORYBLOK_ACCESS_TOKEN,
    },
  }

export default nextConfig;
