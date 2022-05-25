import { Center, Spinner } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

/**
 * This component is used within the app file to show a loading screen until
 * re-hydated. NextJS uses SSG by default, so the page is generated at build
 * and can have different generated css className values.
 */
export default function Hydrate({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return (
			<Center minH="100vh">
				<Spinner size="xl" />
			</Center>
		)
	}

	return <>{children}</>
}
