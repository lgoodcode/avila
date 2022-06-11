import qs from 'qs'
import type { RequestOptions } from 'https'

export type PayloadResponse = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	docs: any[]
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any
}

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getPayloadURL(path: `/${string}`) {
	return `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'http://localhost:4000'}${path}`
}

/** Used to make requests to Strapi backend */
export async function fetchAPI<T = PayloadResponse>(
	path: `/${string}`,
	urlParamsObject: Record<string, unknown> = {},
	options: RequestOptions = {}
): Promise<T> {
	const mergedOptions = {
		...options,
		headers: {
			'Content-Type': 'application/json',
			...options.headers,
		},
	}

	const query = qs.stringify(urlParamsObject, {
		addQueryPrefix: true,
	})
	const requestURL = getPayloadURL(`/api${path}${query}`)
	const response = await fetch(requestURL, mergedOptions)

	if (!response.ok) {
		console.error('ERROR: [Payload API Fetch]', {
			url: requestURL,
			response,
		})
	}

	return await response.json()
}
