import qs from 'qs'
import type { RequestOptions } from 'https'
import type { StrapiResponseData } from '../types'

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path: `/${string}`) {
	return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${path}`
}

/** Used to make requests to Strapi backend */
export async function fetchAPI(
	path: `/${string}`,
	urlParamsObject: Record<string, unknown> = {},
	options: RequestOptions = {}
): Promise<StrapiResponseData> {
	const mergedOptions = {
		...options,
		headers: {
			'Content-Type': 'application/json',
			...options.headers,
		},
	}

	const query = qs.stringify(urlParamsObject)
	const requestURL = `${getStrapiURL(`/api${path}${query ? `?${query}` : ''}`)}`
	const response = await fetch(requestURL, mergedOptions)

	if (!response.ok) {
		console.error(`ERROR: [Strapi API Fetch]`, {
			url: requestURL,
			response,
		})

		return {
			id: -1,
			attributes: {},
		}
	}

	return (await response.json()).data
}
