import { Box, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export type PreloaderProps = {
	children?: React.ReactNode
	loading: boolean
}

export default function Preloader({ children, loading }: PreloaderProps) {
	const [hide, setHide] = useState(false)

	useEffect(() => {
		if (!loading) {
			setTimeout(() => {
				setHide(true)
			}, 500)
		}
	}, [loading])

	return (
		<>
			<Box
				className="preloader"
				h="100vh"
				w="100vw"
				position="absolute"
				zIndex={9999}
				display={hide ? 'none' : 'flex'}
				justifyContent="center"
				alignItems="center"
				bg="white"
				opacity={loading ? 1 : 0}
				transition="opacity 500ms ease"
			>
				<Spinner size="xl" color="primary.500" ml="auto" mr="auto" />
			</Box>
			{children}
		</>
	)
}
