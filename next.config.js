/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... your existing config
    experimental: {
        allowedDevOrigins: [
            "https://*.loca.lt",  // ← allows ALL LocalTunnel URLs
        ],
    },
};

export default nextConfig;