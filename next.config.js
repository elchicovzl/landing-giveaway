/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [
            "res.cloudinary.com",
            "https://source.unsplash.com/random/480x360"
        ]
    },
}

module.exports = nextConfig
