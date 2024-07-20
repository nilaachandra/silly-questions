/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
         {
             hostname: 'scontent-ccu1-1.cdninstagram.com',
             protocol: "https",
         }
        ]
     }
};

export default nextConfig;
