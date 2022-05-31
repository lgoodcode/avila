export type MediaData = {
	data: {
		id: number
		attributes: {
			alternativeText: 'string'
			url: `/${string}`
		}
	}
}

export type GlobalContextProps = {
	siteName: string
	defaultSeo: {
		metaTitle: string
		metaDescription: string
		metaImage: MediaData
	}
}

export type StrapiResponseData = {
	id: number
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	attributes: any
}

export type PageSeo = {
	metaTitle?: string
	metaDescription?: string
	metaImage?: MediaData
}

export interface HomePageProps {
	title: string
	hero: {
		headings?: {
			id: number
			heading: string
		}[]
		call_to_actions?: {
			id: number
			text: string
			link: `/${string}`
		}[]
		body?: string
	}
	locations: {
		heading: string
		description?: string
		location_images: {
			id: number
			location: string
			hover_text: string
		}[]
	}
}
