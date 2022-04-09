/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    baseUrl: "https://www.giathinhnguyen.com/",
    devToApiKey: process.env.DEVTO_API_KEY,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "i.imgur.com",
      "picsum.photos",
      "res.cloudinary.com",
    ],
  },
};
