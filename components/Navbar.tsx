import { Box, Button, Center, Flex, HStack, Link, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import MobileNav from './MobileNav'
import logo from '../assets/avilacare-logo.webp'
import type { Navigation } from '../types/payload-types'

export type NavbarProps = {
	nav: Navigation
	height: string
	mobile: boolean
}

export default function MyNavbar({ nav, height, mobile }: NavbarProps) {
	return (
		<Box
			as="nav"
			w="full"
			h={height}
			px={useBreakpointValue({ base: 4, lg: 24, xl: 32 })}
			bg="white"
			position="absolute"
			zIndex={10}
		>
			<Flex h="full" alignItems="center" justifyContent="space-between">
				<Box data-aos="fade-right">
					<NextLink href="/" passHref>
						<Link>
							<Center h="full">
								<Image src={logo} width={240} height={68} alt="AvilaCare Logo" />
							</Center>
						</Link>
					</NextLink>
				</Box>

				{mobile ? (
					<MobileNav nav={nav} data-aos="fade-left" />
				) : (
					<HStack h="full" spacing={4} data-aos="fade-left">
						<HStack spacing={0} h="full">
							{nav.links?.slice(0, nav.links.length - 1).map(({ id, url, label }) => (
								<NextLink key={id} href={url} passHref>
									<Link
										w={28}
										h="full"
										display="flex"
										alignItems="center"
										justifyContent="center"
										fontSize="lg"
										_hover={{
											bg: 'gray.100',
										}}
									>
										{label}
									</Link>
								</NextLink>
							))}
						</HStack>
						{nav.links?.slice(nav.links.length - 1).map(({ id, url, label }) => (
							<NextLink key={id} href={url} passHref>
								<Button as="a" variant="primarySolid" p={6} borderRadius="3xl">
									{label}
								</Button>
							</NextLink>
						))}
					</HStack>
				)}
			</Flex>
		</Box>
	)
}
