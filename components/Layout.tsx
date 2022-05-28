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
	const height = useBreakpointValue({ base: '80px', md: '90px' }) as string
	const mobile = useBreakpointValue({ base: true, md: false }) as boolean

	useEffect(() => {
		AOS.init({
			once: true,
			duration: 800,
			offset,
		})
	}, [offset])

	return (
		<>
			<Navbar height={height} mobile={mobile} />
			<Box as="main" overflowX="hidden" position="relative" top={mobile ? height : 0}>
				{children}
			</Box>
			<Footer />
		</>
	)
}
