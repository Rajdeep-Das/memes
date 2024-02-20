/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rajdeep-das.s3.ap-south-1.amazonaws.com',
                port: '',
                pathname: '/project-memes/**',
            },
        ],
    },
};

export default nextConfig;
