import { Box, useBreakpointValue } from '@chakra-ui/react'
import AOS from 'aos'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import { GlobalProps } from '../lib/getGlobalProps'
import Navbar from './Navbar'
import Seo, { type SeoProps } from './Seo'
const Footer = dynamic(() => import('./Footer'))
import type { Footer } from '../types/payload-types'

type LayoutProps = {
	children: React.ReactNode
} & GlobalProps &
	SeoProps

export default function Layout({ children, nav, footer, globalSeo, pageSeo }: LayoutProps) {
	const offset = useBreakpointValue({ base: 40, md: 80, lg: 120 })
	const height = useBreakpointValue({ base: '80px', md: '90px' }) as string
	const mobile = useBreakpointValue({ base: true, lg: false }) as boolean

	useEffect(() => {
		AOS.init({
			once: true,
			duration: 800,
			offset,
		})
	}, [offset])

	return (
		<>
			<Seo globalSeo={globalSeo} pageSeo={pageSeo} />
			<Navbar height={height} mobile={mobile} nav={nav} />
			<Box as="main" overflowX="hidden" position="relative" top={mobile ? height : 0}>
				{children}
			</Box>
			<Footer footer={footer} position="relative" top={mobile ? height : 0} />
		</>
	)
}
