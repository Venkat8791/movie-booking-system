/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jjbecamvpybywlxbbtln.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/movieposters/**",
        search: "",
      },
    ],
  },
  // output:"export"
};

export default nextConfig;
