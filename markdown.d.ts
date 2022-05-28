declare module '*.md' {
	const attributes: Record<string, unknown>
	export { attributes }
}

/** Type for the home page content */
interface Home {
	hero: {
		title: string
		headings: string[]
		body: string
		buttons: {
			value: string
			link: string
		}[]
	}
}
