/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "https://4b4g47wp-3000.asse.devtunnels.ms",
        "localhost:3000",
      ],
    },
  },
};

export default nextConfig;
