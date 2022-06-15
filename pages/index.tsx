import {
	Box,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	HStack,
	Input,
	Radio,
	RadioGroup,
	Stack,
	Text,
	Textarea,
	useBreakpoint,
	useBreakpointValue,
	useColorMode,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { Fragment } from 'react'
import { BiUserVoice } from 'react-icons/bi'
import { FaRegHandPaper } from 'react-icons/fa'
import { FiEye } from 'react-icons/fi'
import { Parallax } from 'react-parallax'
import { fetchAPI, getMediaURL } from '../lib/api'
import BlogCard from '../components/BlogCard'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import GradientHeading from '../components/GradientHeading'
import Image from '../components/Image'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import styles from '../styles/landing.module.css'
import waveSvg from '../assets/wave.svg'
import type { Blog, Media, Page } from '../types/payload-types'

export async function getStaticProps() {
	const data = await fetchAPI('/pages', {
		where: {
			slug: {
				equals: 'home',
			},
		},
	})

	return {
		props: {
			home: data.docs[0],
		},
	}
}

export default function HomePage({ home }: { home: Page }) {
	const bp = useBreakpoint()
	const heroHeadingSize = useBreakpointValue({ base: 'xl', sm: '2xl', md: '3xl' })
	const descTextColor = useColorModeValue('gray.700', 'whiteAlpha.800')
	const { colorMode } = useColorMode()

	return (
		<Layout>
			<Seo pageSeo={home.meta} />

			{home.content.map((block) => (
				<Fragment key={block.id}>
					{block.blockType === 'hero' && (
						<Box as="section" id="hero" h="100vh">
							{!block.images?.length ? (
								<Box
									bg="primary.700"
									position="absolute"
									top={0}
									left={0}
									h="100vh"
									w="100%"
									zIndex={-2}
								/>
							) : (
								<>
									<Carousel
										boxProps={{
											bg: 'primary.500',
											position: 'absolute',
											top: 0,
											left: 0,
											h: '100vh',
											w: '100%',
											zIndex: -20,
										}}
										images={block.images?.map(({ image }) => ({
											src: getMediaURL(image),
											alt: image.alt,
											layout: 'fill',
											objectFit: 'cover',
											priority: true,
										}))}
									/>
									<Box
										className="carousel-overlay"
										position="absolute"
										top={0}
										left={0}
										minW="100%"
										minH="100vh"
										bg="black"
										zIndex={-10}
										opacity={0.6}
									/>
								</>
							)}

							<Center
								className="content"
								w="full"
								h="full"
								px={{ base: 4, sm: 8, xl: 0 }}
								mx="auto"
								mr={{ base: 'inherit', md: '5rem' }}
								width={{ base: 'full', sm: 640, md: 900 }}
								alignItems="center"
							>
								<VStack
									w="full"
									color="white"
									spacing={12}
									justifyContent="flex-start"
									textAlign={{ base: 'center', sm: 'left' }}
								>
									{block.headings?.length && (
										<VStack spacing={6} w="full">
											{block.headings.map(({ id, heading }) => (
												<Heading
													key={id}
													w="full"
													size={heroHeadingSize}
													fontWeight={700}
													textAlign={{ base: 'center', md: 'inherit' }}
												>
													{heading}
												</Heading>
											))}
										</VStack>
									)}

									{block.text?.length &&
										block.text.map(({ id, body }) => (
											<Text key={id} fontSize={{ base: 'lg', md: 'xl' }}>
												{body}
											</Text>
										))}

									{block.ctas?.length && (
										<Stack
											spacing={8}
											justifyContent="start"
											w={{ base: '70%', md: 'full' }}
											direction={{ base: 'column', md: 'row' }}
										>
											{block.ctas?.length &&
												block.ctas.map(({ id, label, url }, i) => (
													<NextLink key={id} href={url} passHref>
														<Button
															as="a"
															px={10}
															py={8}
															fontSize="xl"
															variant={i % 2 === 0 ? 'primarySolid' : 'primaryOutline'}
														>
															{label}
														</Button>
													</NextLink>
												))}
										</Stack>
									)}
								</VStack>
							</Center>
						</Box>
					)}

					{/**
					 *
					 *	Location
					 *
					 */}
					{block.blockType === 'section' && /location[s]?/i.test(block.blockName || '') && (
						<Box id="locations" as="section" py={24} px={{ base: 8, md: 12, lg: 16 }}>
							<VStack spacing={20} w="full">
								<VStack
									className="heading"
									w="full"
									spacing={8}
									justifyContent="center"
									data-aos="fade-up"
								>
									{/* Display single heading or multiple depending on the blockType */}
									{block.blocks[0].blockType === 'heading' && (
										<GradientHeading heading={block.blocks[0].heading} />
									)}
									{block.blocks[0].blockType === 'headings' &&
										block.blocks[0].headings.map(({ id, heading }) => (
											<GradientHeading key={id} heading={heading} />
										))}
									{block.blocks[1].blockType === 'textarea' && (
										<Box px={{ base: 0, md: 24 }}>
											<Text fontSize="xl" textAlign="center" color={descTextColor}>
												{block.blocks[1].textarea}
											</Text>
										</Box>
									)}
									{block.blocks[1].blockType === 'textareas' && (
										<Box px={{ base: 0, md: 24 }}>
											{block.blocks[1].texts.map(({ id, text }) => (
												<Text key={id} fontSize="xl" textAlign="center" color={descTextColor}>
													{text}
												</Text>
											))}
										</Box>
									)}
									)
								</VStack>

								{block.blocks[2].blockType === 'image-custom-multiple' && (
									<Stack
										className="location-images"
										w="full"
										textAlign="center"
										direction={{ base: 'column', lg: 'row' }}
										spacing={{ base: 12, sm: 24, lg: 4, xl: 48 }}
										data-aos="fade-up"
										data-aos-delay="100"
									>
										{block.blocks[2].images.map(
											({ id, imageField }) =>
												imageField && (
													<VStack key={id} w="full" spacing={4} mb={{ base: 12, sm: 0 }}>
														<Heading size="md">{imageField?.image.name}</Heading>
														<Box w="full" h="full" maxW={480}>
															<NextLink href={imageField?.link?.url as string}>
																<figure className={styles['hover-img']}>
																	<Image
																		src={getMediaURL(imageField.image)}
																		alt={imageField?.image.alt}
																		layout="responsive"
																		priority
																	/>
																	{imageField?.hasText && (
																		<figcaption>
																			{imageField.texts.map(({ id, text }) => (
																				<Text key={id}>{text}</Text>
																			))}
																		</figcaption>
																	)}
																</figure>
															</NextLink>
														</Box>
													</VStack>
												)
										)}
									</Stack>
								)}
							</VStack>
						</Box>
					)}

					{/**
					 *
					 *	Quote
					 *
					 */}
					{block.blockType === 'section' && /quote/i.test(block.blockName || '') && (
						<Box id="quote" as="section">
							{block.blocks[0].blockType === 'image-custom' && (
								<Parallax
									strength={400}
									bgImage={getMediaURL(block.blocks[0].imageField?.image as Media)}
									bgImageAlt={block.blocks[0].imageField?.image.alt}
									bgImageStyle={{
										objectFit: 'cover',
									}}
								>
									<Flex
										minH={600}
										py={24}
										bg="rgba(0, 0, 0, 0.6)"
										alignItems="center"
										px={{ base: 8, md: 12, lg: 24, xl: 32, '2xl': 64 }}
										data-aos="fade"
									>
										{block.blocks[0].imageField?.texts.length && (
											<VStack spacing={16} color="white">
												<Text fontSize="2xl" fontStyle="italic">
													{block.blocks[0].imageField?.texts[0].text}
												</Text>
												<Text fontSize="2xl">{block.blocks[0].imageField?.texts[1].text}</Text>
											</VStack>
										)}
									</Flex>
								</Parallax>
							)}
						</Box>
					)}

					{/**
					 *
					 * 	Care
					 *
					 */}
					{block.blockType === 'section' && /care/i.test(block.blockName || '') && (
						<Box id="care" as="section" py={24} px={{ base: 8, md: 12, lg: 16 }}>
							<VStack spacing={{ base: 24, lg: 32 }} w="full">
								<VStack w="full" spacing={12} justifyContent="center">
									{/* Display single heading or multiple depending on the blockType */}
									{block.blocks[0].blockType === 'heading' && (
										<GradientHeading heading={block.blocks[0].heading} />
									)}

									{block.blocks[0].blockType === 'headings' &&
										block.blocks[0].headings.length &&
										block.blocks[0].headings.map(({ id, heading }) => (
											<GradientHeading key={id} heading={heading} />
										))}

									{block.blocks[1].blockType === 'textareas' && (
										<VStack
											w="full"
											spacing={8}
											textAlign="center"
											px={{ base: 0, md: 12, lg: 16, xl: 40, '2xl': 72 }}
											data-aos="fade-down"
											data-aos-delay="100"
										>
											{block.blocks[1].texts.map(({ id, text }) => (
												<Text key={id} fontSize="xl" color={descTextColor}>
													{text}
												</Text>
											))}
										</VStack>
									)}
								</VStack>
								{block.blocks[2].blockType === 'text-header-group' &&
									block.blocks[2].groups?.length && (
										<Stack
											className="info-cards"
											direction={{ base: 'column', lg: 'row' }}
											spacing={{ base: 12, lg: 4, xl: 16 }}
											textAlign="center"
										>
											{block.blocks[2].groups.map(({ id, header, text }, i) => (
												<Card
													key={id}
													icon={
														header.match(/gaze/i)
															? FiEye
															: header.match(/speech/i)
															? BiUserVoice
															: header.match(/touch/i)
															? FaRegHandPaper
															: undefined
													}
													iconColor={i % 2 === 0 ? 'secondary.500' : 'primary.500'}
													heading={header}
													text={text}
													data-aos={
														i === 0 ? 'fade-up-right' : i === 2 ? 'fade-up-left' : 'fade-up'
													}
													data-aos-delay={bp.match(/base|sm|md/) ? i * 200 : i * 300}
												/>
											))}
										</Stack>
									)}
							</VStack>
						</Box>
					)}

					{/**
					 *
					 * 	Community
					 *
					 */}
					{block.blockType === 'section' && /community/i.test(block.blockName || '') && (
						<Box
							id="community"
							as="section"
							py={24}
							bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
							position="relative"
						>
							<Box
								w="full"
								h={{ base: '20%', md: '45%' }}
								position="absolute"
								zIndex={0}
								bottom={-2}
							>
								<Image src={waveSvg} layout="fill" objectFit="cover" alt="shape svg" priority />
							</Box>

							{block.blocks.length && (
								<VStack spacing={28} w="full" px={{ base: 8, md: 12, lg: 16 }}>
									<VStack w="full" spacing={12} justifyContent="center" data-aos="zoom-in">
										<Stack spacing={4} textAlign="center" direction={{ base: 'column', sm: 'row' }}>
											{block.blocks[0].blockType === 'heading' && (
												<GradientHeading heading={block.blocks[0].heading} />
											)}

											{block.blocks[0].blockType === 'headings' &&
												block.blocks[0].headings.length &&
												block.blocks[0].headings.map(({ id, heading }) => (
													<GradientHeading key={id} heading={heading} />
												))}
										</Stack>

										<VStack
											w="full"
											spacing={8}
											textAlign="center"
											px={{ base: 0, md: 12, lg: 16, xl: 40, '2xl': 72 }}
										>
											{block.blocks[1].blockType === 'textarea' && (
												<Text fontSize="xl" color={descTextColor}>
													{block.blocks[1].textarea}
												</Text>
											)}
											{block.blocks[1].blockType === 'textareas' &&
												block.blocks[1].texts.map(({ id, text }) => (
													<Text key={id} fontSize="xl" color={descTextColor}>
														{text}
													</Text>
												))}
										</VStack>
									</VStack>

									{block.blocks[2].blockType === 'images' && (
										<Grid
											w="full"
											templateColumns="repeat(6, 1fr)"
											templateRows="repeat(9, 5vw)"
											gap={{ base: 2, lg: 4 }}
											px={{ base: 0, md: 12, lg: 24, xl: 44 }}
										>
											<GridItem colStart={1} rowStart={1} colSpan={3} rowSpan={3}>
												<Box
													w="full"
													h="full"
													objectFit="cover"
													position="relative"
													data-aos="flip-left"
												>
													<Image
														src={getMediaURL(block.blocks[2].images[0].image as Media)}
														alt={block.blocks[2].images[0].image?.alt}
														layout="fill"
													/>
												</Box>
											</GridItem>

											<GridItem colStart={4} rowStart={1} colSpan={5} rowSpan={6}>
												<Box
													w="full"
													h="full"
													objectFit="cover"
													position="relative"
													data-aos="flip-up"
												>
													<Image
														src={getMediaURL(block.blocks[2].images[1].image as Media)}
														alt={block.blocks[2].images[1].image?.alt}
														layout="fill"
													/>
												</Box>
											</GridItem>

											<GridItem colStart={1} rowStart={4} colSpan={3} rowSpan={3}>
												<Box
													w="full"
													h="full"
													objectFit="cover"
													position="relative"
													data-aos="flip-down"
												>
													<Image
														src={getMediaURL(block.blocks[2].images[2].image as Media)}
														alt={block.blocks[2].images[2].image?.alt}
														layout="fill"
													/>
												</Box>
											</GridItem>

											<GridItem colStart={1} rowStart={7} colSpan={3} rowSpan={4}>
												<Box
													w="full"
													h="full"
													objectFit="cover"
													position="relative"
													data-aos="flip-right"
												>
													<Image
														src={getMediaURL(block.blocks[2].images[3].image as Media)}
														alt={block.blocks[2].images[3].image?.alt}
														layout="fill"
													/>
												</Box>
											</GridItem>

											<GridItem colStart={4} rowStart={7} colSpan={5} rowSpan={4}>
												<Box
													w="full"
													h="full"
													objectFit="cover"
													position="relative"
													data-aos="flip-right"
												>
													<Image
														src={getMediaURL(block.blocks[2].images[4].image as Media)}
														alt={block.blocks[2].images[4].image?.alt}
														layout="fill"
													/>
												</Box>
											</GridItem>
										</Grid>
									)}
								</VStack>
							)}
						</Box>
					)}

					{/**
					 *
					 * 	Blog Posts
					 *
					 */}
					{block.blockType === 'blog-posts' && (
						<Box id="blogs" as="section" py={24} px={{ base: 8, md: 12, lg: 16 }} bg="primary.400">
							<VStack spacing={24} w="full">
								<Heading color="white" size="3xl" data-aos="fade-down">
									{block.heading}
								</Heading>

								<Flex
									className="blog-cards"
									w="full"
									mt={'24px !important'}
									px={{ base: 0, lg: 24 }}
									flexWrap="wrap"
									justifyContent="space-around"
								>
									{(block.posts as Blog[]).map((post, i) => (
										<BlogCard
											key={post.id}
											title={post.title}
											created={post.created as string}
											updated={post.updated}
											img={getMediaURL(post.image)}
											imgAlt={post.image.alt}
											readTime={post.readTime}
											description={post.content[0].text}
											data-aos="fade-down"
											data-aos-delay={bp.match(/base|sm|md/) ? i * 100 : i * 200}
										/>
									))}
								</Flex>

								<Center>
									<Button
										bg={colorMode === 'light' ? 'white' : 'gray.800'}
										fontSize="xl"
										py={8}
										px={6}
										data-aos="fade-down"
										data-aos-delay={bp.match(/base|sm|md/) ? 0 : 100}
										_hover={{
											bg: colorMode === 'light' ? 'white' : 'gray.700',
										}}
									>
										Read more
									</Button>
								</Center>
							</VStack>
						</Box>
					)}

					{/**
					 *
					 * 	Contact
					 *
					 */}
					{block.blockType === 'section' && /contact/i.test(block.blockName || '') && (
						<Box id="contact" as="section" py={16} mx={{ base: 8, md: 12, lg: 16 }}>
							<VStack spacing={24} w="full">
								<VStack w="full" spacing={8} justifyContent="center">
									<HStack spacing={4} textAlign="center">
										<Heading color="primary.500" size="3xl">
											Contact
										</Heading>
										<Heading color="secondary.500" size="3xl">
											Us
										</Heading>
									</HStack>

									<VStack
										w="full"
										spacing={8}
										textAlign="center"
										px={{ base: 0, md: 12, lg: 16, xl: 40, '2xl': 72 }}
									>
										<Text fontSize="2xl" color={descTextColor} fontStyle="italic">
											The simple act of caring is heroic
										</Text>
									</VStack>
								</VStack>

								<Flex
									className="locations-and-form"
									w="full"
									justifyContent="space-around"
									direction={{ base: 'column', lg: 'row' }}
								>
									{block.blocks[0].blockType === 'multiple-text-header-group' && (
										<VStack
											className="locations"
											spacing={12}
											w={{ base: 'full', lg: 600 }}
											textAlign={
												block.blocks[1].blockType === 'contact-form' && !block.blocks[1].useForm
													? 'center'
													: 'inherit'
											}
										>
											{block.blocks[0].groups.map(({ id, header, texts }) => (
												<VStack key={id} className="location-name" spacing={8} w="full">
													<Heading size="lg" w="full">
														{header}
													</Heading>
													<VStack className="location-info" spacing={6} w="full" fontWeight={500}>
														{texts.map(({ id, text }) => (
															<Text key={id} w="full" fontSize="lg">
																{text}
															</Text>
														))}
													</VStack>
												</VStack>
											))}
										</VStack>
									)}

									{block.blocks[1].blockType === 'contact-form' && block.blocks[1].useForm && (
										<Flex
											className="form"
											mt={{ base: 24, lg: 0 }}
											w={{ base: 'full', lg: 600 }}
											justifyContent="space-around"
											direction={{ base: 'column', lg: 'row' }}
										>
											<Box w="full">
												{/* <form onSubmit={handleSubmit} noValidate> */}
												<form noValidate>
													<Stack spacing={6}>
														<Stack spacing={5}>
															{/* <FormControl isInvalid={Boolean(errors.email)}> */}
															<FormControl>
																<FormLabel htmlFor="name">Name</FormLabel>
																<Input
																	id="name"
																	type="text"
																	placeholder="Name"
																	_placeholder={{ color: 'primary.500' }}
																	// onBlur={handleBlur('name')}
																	// onChange={handleChange('name')}
																/>
																{/* <FormErrorMessage>{errors.name}</FormErrorMessage> */}
															</FormControl>
															{/* <FormControl isInvalid={Boolean(errors.name)}> */}
															<FormControl>
																<FormLabel htmlFor="email">Email</FormLabel>
																<Input
																	id="email"
																	type="email"
																	placeholder="Email"
																	// onBlur={handleBlur('email')}
																	// onChange={handleChange('email')}
																/>
																{/* <FormErrorMessage>{errors.email}</FormErrorMessage> */}
															</FormControl>
															{/* <FormControl isInvalid={Boolean(errors.email)}> */}
															<FormControl>
																<FormLabel htmlFor="phone">Phone number</FormLabel>
																<Input
																	id="phone"
																	type="phone"
																	placeholder="Phone number"
																	// onBlur={handleBlur('phone')}
																	// onChange={handleChange('phone')}
																/>
																{/* <FormErrorMessage>{errors.phone}</FormErrorMessage> */}
															</FormControl>
															<FormControl>
																<FormLabel htmlFor="location">Choose a location</FormLabel>
																<RadioGroup>
																	<Stack spacing={4}>
																		<Radio value="TX">Heath, TX</Radio>
																		<Radio value="WA">Bellingham, WA</Radio>
																	</Stack>
																</RadioGroup>
															</FormControl>
															<FormControl>
																<FormLabel htmlFor="message">Message</FormLabel>
																<Textarea placeholder="Your message" minH={36} />
															</FormControl>
														</Stack>

														<Stack spacing={6}>
															<Button
																py={6}
																type="submit"
																variant="primarySolid"
																// isLoading={status === 'loading'}
																loadingText="Submitting"
															>
																Send message
															</Button>
														</Stack>
													</Stack>
												</form>
											</Box>
										</Flex>
									)}
								</Flex>
							</VStack>
						</Box>
					)}
				</Fragment>
			))}
		</Layout>
	)
}
