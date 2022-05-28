import {
	Box,
	Divider,
	Heading,
	Icon,
	IconButton,
	Link,
	Stack,
	Text,
	useBreakpointValue,
	VStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaFacebookF } from 'react-icons/fa'

export default function Footer() {
	return (
		<Box
			as="footer"
			w="full"
			py={16}
			px={useBreakpointValue({ base: 4, md: 12, xl: 24 })}
			color="white"
			bg="primary.400"
			position="relative"
			zIndex={10}
		>
			<VStack spacing={20} h="full">
				<Stack w="full" spacing={{ base: 24, lg: 48 }} direction={{ base: 'column', lg: 'row' }}>
					<Box className="footer-section">
						<VStack spacing={1} mb={8}>
							<Heading size="lg" w="full">
								Information
							</Heading>
							<Divider borderBottomColor="white" borderBottomWidth="2px" />
						</VStack>

						<VStack spacing={12} w="full">
							<VStack className="location-name" spacing={4} w="full">
								<Heading size="md" w="full">
									AvilaCare Heath, TX
								</Heading>
								<VStack className="location-info" spacing={3} w="full">
									<Text w="full">(469) 338-0283</Text>
									<Text w="full">Heath@AvilaCare.com</Text>
									<Text w="full">126 Smirl Drive, Heath, TX</Text>
								</VStack>
							</VStack>
							<VStack className="location-name" spacing={4} w="full">
								<Heading size="md" w="full">
									AvilaCare Bellingham, WA
								</Heading>
								<VStack className="location-info" spacing={3} w="full">
									<Text w="full">(360) 671-3631</Text>
									<Text w="full">Bellingham@AvilaCare.com</Text>
									<Text w="full">2315 Williams St, Bellingham, WA</Text>
								</VStack>
							</VStack>
						</VStack>
					</Box>

					<Box className="footer-section">
						<VStack spacing={1} mb={8}>
							<Heading size="lg" w="full">
								Links
							</Heading>
							<Divider borderBottomColor="white" borderBottomWidth="2px" />
						</VStack>
						<VStack spacing={5} w="full">
							<Box w="full">
								<NextLink
									href="https://www.facebook.com/AvilaCare-Senior-Living-100368025759313"
									target="_blank"
									rel="noreferr noopener"
								>
									<IconButton
										icon={<Icon as={FaFacebookF} />}
										aria-label="Facebook"
										borderRadius="3xl"
										colorScheme="facebook"
									/>
								</NextLink>
							</Box>
							<NextLink href="/privacy-policy" passHref>
								<Link w="full">About Us</Link>
							</NextLink>
							<NextLink href="/privacy-policy" passHref>
								<Link w="full">Blog</Link>
							</NextLink>
							<NextLink href="/privacy-policy" passHref>
								<Link w="full">Privacy Policy</Link>
							</NextLink>
						</VStack>
					</Box>

					<Box className="footer-section">
						<VStack spacing={1} mb={8}>
							<Heading size="lg" w="full">
								Locations
							</Heading>
							<Divider borderBottomColor="white" borderBottomWidth="2px" />
						</VStack>
						<VStack spacing={5} w="full">
							<NextLink href="/locations/bellingham" passHref>
								<Link w="full">Bellingham, WA</Link>
							</NextLink>
							<NextLink href="/locations/heath" passHref>
								<Link w="full">Heath, TX</Link>
							</NextLink>
						</VStack>
					</Box>
				</Stack>
				<Stack
					h="full"
					w="full"
					alignItems="center"
					justifyContent="space-between"
					direction={{ base: 'column', lg: 'row' }}
				>
					<Text>&copy; AvilaCare 2022. All rights reserved.</Text>
					<Text pt={{ base: 8, lg: 0 }}>Developed by the pickleball runner-up</Text>
				</Stack>
			</VStack>
		</Box>
	)
}
