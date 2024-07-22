/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
            },
            {
                protocol: 'https',
                hostname: 'www.esan.edu.pe',
            },
            {
                protocol: 'https',
                hostname: 'static.vecteezy.com'
            }
        ]
    }
};

export default nextConfig;
