import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type LayoutProps = {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
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
