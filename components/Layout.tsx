import { Box, useBreakpoint } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import AOS from 'aos'
import Footer from './Footer'
import Navbar from './Navbar'

type LayoutProps = {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	const bp = useBreakpoint('base')

	useEffect(() => {
		AOS.init({
			once: true,
			duration: 800,
			offset: bp === 'base' ? 60 : 140,
		})
	}, [])

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
