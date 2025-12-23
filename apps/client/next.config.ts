import {composePlugins, withNx} from "@nx/next"
import {WithNxOptions} from "@nx/next/plugins/with-nx"

const nextConfig: WithNxOptions = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        hostname: "localhost",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/uploads/:path*`,
      },
    ];
  },
};


const plugins = [
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
