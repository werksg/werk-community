/** @type {import('next').NextConfig} */
const nextConfig = {
    target: 'serverless',
    generateStaticPaths: async function () {
      return {
        '/': { page: '/' },
      };
    },
  };
  
  module.exports = nextConfig;
  