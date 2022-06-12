// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')

if (!process.env.NEXT_PUBLIC_PAYLOAD_API_URL) {
	throw new Error(
		`[env] NEXT_PUBLIC_PAYLOAD_API_URL must be specified. Recieved: ${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}`
	)
}

if (!process.env.NEXT_PUBLIC_IMG_URL) {
	throw new Error(
		`[env] NEXT_PUBLIC_IMG_URL must be specified. Recieved: ${process.env.NEXT_PUBLIC_IMG_URL}`
	)
}

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
})({
	reactStrictMode: true,
	images: {
		loader: 'default',
		domains: ['localhost', process.env.NEXT_PUBLIC_IMG_URL.replace(/^http[s]?:\/\//, '')],
	},
	async rewrites() {
		return [
			{
				source: '/home',
				destination: '/',
			},
			{
				source: '/api',
				destination: `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api`,
			},
		]
	},
})
