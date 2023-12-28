/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
};

module.exports = nextConfig;

// Next.js uses the next/image component to handle image optimization and serving,
// and it requires explicit configuration for the allowed domains.

// Here's what you can do to fix this issue:
// Configure Next.js Image Domains:
// Open or create the next.config.js file in the root of your Next.js project,
// and make sure to include the "cdn.imagin.studio" domain in the images configuration.
