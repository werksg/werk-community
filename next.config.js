/** @type {import('next').NextConfig} */
const nextConfig = {
    exportPathMap: async function () {
      return {
        '/': { page: '/' },
      };
    },
  };
  
  module.exports = nextConfig;