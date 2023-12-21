/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [{ type: "host", value: "m-package.com" }],
                destination: "https://www.m-package.com/:path*",
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
