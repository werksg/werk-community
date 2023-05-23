/** @type {import('next').NextConfig} */
const nextConfig = {
    target: 'serverless',
    generateStaticParams: async function () {
      return {
        '/': { page: '/' },
      };
    },
  };
  
  module.exports = nextConfig;
  