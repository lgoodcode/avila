// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
})({
	reactStrictMode: true,
	images: {
		loader: 'default',
		domains: ['localhost'],
	},
	async rewrites() {
		return [
			{
				source: '/home',
				destination: '/',
			},
<<<<<<< HEAD
			{
				source: '/api',
				destination: `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api`,
			},
=======
			// {
			// 	source: '/api',
			// 	destination: 'http://localhost:1337/api',
			// },
>>>>>>> parent of 6f88245 (Merge branch 'main' of https://github.com/lgoodcode/avila)
		]
	},
})
