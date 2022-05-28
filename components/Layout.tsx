import { Box, useBreakpointValue } from '@chakra-ui/react'
import AOS from 'aos'
import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type LayoutProps = {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	const offset = useBreakpointValue({ base: 40, md: 80, lg: 120 })

	useEffect(() => {
		AOS.init({
			once: true,
			duration: 800,
			offset,
		})
	}, [offset])

	return (
		<>
			<Navbar />
			<Box as="main" overflowX="hidden">
				{children}
			</Box>
			<Footer />
		</>
	)
}
