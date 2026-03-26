import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/hausboote/luxus-hausboot-dahme/buchen/bestaetigung",
        destination: "/buchen/bestaetigung",
        permanent: true,
      },
      {
        source: "/hausboote/luxus-hausboot-dahme/buchen",
        destination: "/buchen",
        permanent: true,
      },
      {
        source: "/hausboote/luxus-hausboot-dahme",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hausboote/:slug/buchen/bestaetigung",
        destination: "/buchen/bestaetigung",
        permanent: true,
      },
      {
        source: "/hausboote/:slug/buchen",
        destination: "/buchen",
        permanent: true,
      },
      {
        source: "/hausboote/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hausboote",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
