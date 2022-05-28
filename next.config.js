// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
})({
	reactStrictMode: true,
	webpack: (config) => {
		config.module.rules.push({
			test: /\.md$/,
			loader: 'frontmatter-markdown-loader',
		})

		return config
	},
})
