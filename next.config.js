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
	// async rewrites() {
	// 	return [
	// 		{
	// 			source: '/api',
	// 			destination: 'http://localhost:1337/api',
	// 		},
	// 	]
	// },
})
