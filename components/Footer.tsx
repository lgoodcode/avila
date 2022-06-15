import {
	Box,
	BoxProps,
	Divider,
	Heading,
	Link,
	Stack,
	Text,
	useBreakpointValue,
	VStack,
} from '@chakra-ui/react'
import { Fragment } from 'react'
import NextLink from 'next/link'
import type { Footer } from '../types/payload-types'

export interface FooterProps extends BoxProps {
	footer: Footer
}

export default function Footer({ footer, ...props }: FooterProps) {
	return (
		<Box
			as="footer"
			w="full"
			py={16}
			px={useBreakpointValue({ base: 8, md: 12, lg: 16, xl: 24 })}
			color="white"
			bg="primary.400"
			zIndex={10}
			{...props}
		>
			<VStack spacing={20} h="full">
				{footer.other.length && (
					<Stack w="full" spacing={{ base: 24, lg: 48 }} direction={{ base: 'column', lg: 'row' }}>
						{footer.other.map((block) => (
							<Fragment key={block.id}>
								{/multiple-text-header-group|multiple-link-text-group/.test(block.blockType) &&
									/info/i.test(block.blockName || '') && (
										<Box className="footer-section">
											<VStack spacing={1} mb={8}>
												<Heading size="lg" w="full">
													Information
												</Heading>
												<Divider borderBottomColor="white" borderBottomWidth="2px" />
											</VStack>
											<VStack spacing={12} w="full">
												{block.blockType === 'multiple-link-text-group' &&
													block.groups.map(({ id, header, links }) => (
														<VStack key={id} className="location-name" spacing={4} w="full">
															<Heading size="md" w="full">
																{header}
															</Heading>
															<VStack className="location-info" spacing={3} w="full">
																{links.map(({ id, text, isLink, url }) =>
																	!isLink ? (
																		<Text key={id} w="full">
																			{text}
																		</Text>
																	) : (
																		<NextLink
																			key={id}
																			href={url}
																			passHref
																			target="_blank"
																			rel="noreferr noopener"
																		>
																			<Link>{text}</Link>
																		</NextLink>
																	)
																)}
															</VStack>
														</VStack>
													))}
												{block.blockType === 'multiple-text-header-group' &&
													block.groups.map(({ id, header, texts }) => (
														<VStack key={id} className="location-name" spacing={4} w="full">
															<Heading size="md" w="full">
																{header}
															</Heading>
															<VStack className="location-info" spacing={3} w="full">
																{texts.map(({ id, text }) => (
																	<Text key={id} w="full">
																		{text}
																	</Text>
																))}
															</VStack>
														</VStack>
													))}
											</VStack>
										</Box>
									)}

								{block.blockType === 'links' && /links/i.test(block.blockName || '') && (
									<Box className="footer-section">
										<VStack spacing={1} mb={8}>
											<Heading size="lg" w="full">
												Links
											</Heading>
											<Divider borderBottomColor="white" borderBottomWidth="2px" />
										</VStack>
										<VStack spacing={5} w="full">
											{block.links.map(({ id, type, url, label }) =>
												type === 'page' ? (
													<NextLink key={id} href={url} passHref>
														<Link w="full">{label}</Link>
													</NextLink>
												) : (
													<Box key={id} w="full">
														<NextLink href={url} passHref target="_blank" rel="noreferr noopener">
															<Link w="full">{label}</Link>
														</NextLink>
													</Box>
												)
											)}
										</VStack>
									</Box>
								)}

								{block.blockType === 'links' && /locations/i.test(block.blockName || '') && (
									<Box className="footer-section">
										<VStack spacing={1} mb={8}>
											<Heading size="lg" w="full">
												Locations
											</Heading>
											<Divider borderBottomColor="white" borderBottomWidth="2px" />
										</VStack>
										<VStack spacing={5} w="full">
											{block.links.map(({ id, url, label }) => (
												<NextLink key={id} href={url} passHref>
													<Link w="full">{label}</Link>
												</NextLink>
											))}
										</VStack>
									</Box>
								)}
							</Fragment>
						))}
					</Stack>
				)}
				<Stack
					h="full"
					w="full"
					alignItems="center"
					justifyContent="space-between"
					direction={{ base: 'column', lg: 'row' }}
				>
					<Text>
						{footer.copyright ||
							`&copy; AvilaCare ${new Date().getFullYear()}. All rights reserved.`}
					</Text>
					<Text pt={{ base: 8, lg: 0 }}>Developed by the pickleball runner-up</Text>
				</Stack>
			</VStack>
		</Box>
	)
}
