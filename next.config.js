/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: "/:locale/assets/:path*",
          destination: "/assets/:path*",
        },
      ];
    },
  };
};

module.exports = nextConfig;
