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
	useBreakpointValue,
	VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import Script from 'next/script'
import { Parallax } from 'react-parallax'
import { BiUserVoice } from 'react-icons/bi'
import { FaRegHandPaper } from 'react-icons/fa'
import { FiEye } from 'react-icons/fi'
import Image from '../components/Image'
import BlogCard from '../components/BlogCard'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Layout from '../components/Layout'
import styles from '../styles/landing.module.css'

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title>AvilaCare</title>
			</Head>

			<Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>

			<Box as="section" id="hero" h="100vh">
				<Carousel
					boxProps={{
						position: 'absolute',
						top: 0,
						left: 0,
						h: '100vh',
						w: '100%',
						zIndex: -2,
					}}
					images={[
						{
							src: '/img/landing_background_1.jpg',
							alt: 'amily sofa photo created by gpointstudio - www.freepik.com',
							layout: 'fill',
							objectFit: 'cover',
							priority: true,
						},
						{
							src: '/img/landing_background_2.jpg',
							alt: 'Asian elderly photo created by tirachardz - www.freepik.com',
							layout: 'fill',
							objectFit: 'cover',
							priority: true,
						},
						{
							src: '/img/landing_background_3.jpg',
							alt: 'Hospice photo created by freepik - www.freepik.com',
							layout: 'fill',
							objectFit: 'cover',
							priority: true,
						},
					]}
				/>

				<Box
					className="carousel-overlay"
					position="absolute"
					top={0}
					left={0}
					minW="100%"
					minH="100vh"
					bg="black"
					zIndex={-1}
					opacity={0.6}
				/>

				<Center
					className="content"
					w="full"
					h="full"
					px={{ base: 4, sm: 8, lg: 0 }}
					width={{ base: 'full', sm: 640, md: 860 }}
					ml="auto"
					mr={{ base: 0, sm: 12, md: 36 }}
				>
					<Flex h="full" alignItems="center">
						<VStack
							color="white"
							spacing={12}
							justifyContent="flex-start"
							textAlign={{ base: 'center', sm: 'inherit' }}
						>
							<VStack spacing={6} w="full">
								<Heading
									w="full"
									size={useBreakpointValue({ base: 'xl', sm: '2xl', md: '3xl' })}
									fontWeight={700}
								>
									Passionate about care.
								</Heading>
								<Heading
									w="full"
									size={useBreakpointValue({ base: 'xl', sm: '2xl', md: '3xl' })}
									fontWeight={700}
								>
									Compassionate about people.
								</Heading>
							</VStack>

							<Text fontSize={{ base: 'lg', md: 'xl' }}>
								Fugiat ipsum magna ad consectetur amet pariatur aute. Velit consectetur aliqua
								nostrud aliqua ullamco reprehenderit consectetur occaecat mollit amet ad aute veniam
								mollit. Anim deserunt voluptate non cupidatat pariatur Lorem irure adipisicing
								occaecat. Reprehenderit cupidatat labore ullamco labore laboris ipsum pariatur.
							</Text>

							<Stack
								spacing={8}
								justifyContent="start"
								w={{ base: '70%', md: 'full' }}
								direction={{ base: 'column', sm: 'row' }}
							>
								<Button variant="primarySolid" px={10} py={8} fontSize="xl">
									Call To Action
								</Button>
								<Button variant="primaryOutline" px={10} py={8} fontSize="xl">
									Call To Action
								</Button>
							</Stack>
						</VStack>
					</Flex>
				</Center>
			</Box>

			<Box id="locations" as="section" py={40} px={{ base: 4, md: 8, lg: 12 }}>
				<VStack spacing={28} w="full">
					<VStack
						className="heading"
						w="full"
						spacing={8}
						justifyContent="center"
						data-aos="fade-up"
					>
						<HStack spacing={2}>
							<Heading color="primary.500" size={useBreakpointValue({ base: '2xl', md: '3xl' })}>
								Community
							</Heading>
							<Heading color="secondary.500" size={useBreakpointValue({ base: '2xl', md: '3xl' })}>
								Locations
							</Heading>
						</HStack>

						<Box px={{ base: 0, md: 24 }}>
							<Text fontSize="xl" textAlign="center" color="gray.700">
								Select either our Bellingham, WA community or our Heath, TX community by clicking on
								one of the images below.
							</Text>
						</Box>
					</VStack>

					<Stack
						className="locations"
						textAlign="center"
						direction={{ base: 'column', lg: 'row' }}
						spacing={{ base: 12, sm: 24, lg: 4, xl: 48 }}
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<VStack spacing={4} mb={{ base: 12, sm: 0 }}>
							<Heading size="md">AvilaCare Senior Living in Bellingham, WA</Heading>
							<Box>
								<NextLink href="/location/bellingham">
									<figure className={styles['hover-img']}>
										<Image
											src="/img/location_bellingham.jpg"
											alt="Bellingham location"
											width={480}
											height={270}
											priority
										/>
										<figcaption>
											<Text>2315 WILLIAMS STREET,</Text>
											<Text>BELLINGHAM, WA 98225</Text>
										</figcaption>
									</figure>
								</NextLink>
							</Box>
						</VStack>

						<VStack spacing={4}>
							<Heading size="md">AvilaCare Senior Living in Heath, TX</Heading>
							<Box>
								<NextLink href="/location/bellingham">
									<figure className={styles['hover-img']}>
										<Image
											src="/img/location_heath.jpg"
											alt="Heath location"
											width={480}
											height={270}
											priority
										/>
										<figcaption>
											<Text>126 SMIRL DRIVE,</Text>
											<Text>HEATH, TX 75032</Text>
										</figcaption>
									</figure>
								</NextLink>
							</Box>
						</VStack>
					</Stack>
				</VStack>
			</Box>

			<Box id="quote" as="section">
				<Parallax
					strength={400}
					bgImage="/img/birdview_1.jpg"
					bgImageAlt="birdview of facility"
					bgImageStyle={{
						objectFit: 'cover',
					}}
				>
					<Flex
						minH={600}
						py={24}
						bg="rgba(0, 0, 0, 0.6)"
						alignItems="center"
						px={{ base: 4, md: 24, xl: 64 }}
						data-aos="fade"
					>
						<VStack spacing={16} color="white">
							<Text fontSize="2xl" fontStyle="italic">
								I was a &quot;hands-on&quot; caregiver. Determined of taking care of my mother
								myself. After 7 years I was exhausted. I knew there had to be another way. After
								trying in-home caregivers, and another facility, someone suggested the new facility
								in town, AvilaCare. With their help, a care team was assembled for mom. Now, after
								10 years, I can be a daughter and trust that my mother is in the best hands that I
								can give her. I am very thankful for AvilaCare Senior Living and the excellent care
								they give.
							</Text>
							<Text fontSize="2xl"> - Patty G, Daugther</Text>
						</VStack>
					</Flex>
				</Parallax>
			</Box>

			<Box id="care" as="section" py={40} px={{ base: 4, md: 8, lg: 12 }}>
				<VStack spacing={{ base: 24, lg: 32 }} w="full">
					<VStack w="full" spacing={12} justifyContent="center">
						<Stack
							spacing={4}
							textAlign="center"
							direction={{ base: 'column', lg: 'row' }}
							data-aos="fade-down"
						>
							<Heading color="primary.500" size="3xl">
								Assisted Living
							</Heading>
							<Center>
								<Heading
									w="fit-content"
									size="3xl"
									bgClip="text"
									bgGradient="linear(to-r, primary.500, secondary.500)"
								>
									and
								</Heading>
							</Center>
							<Heading color="secondary.500" size="3xl">
								Memory Care
							</Heading>
						</Stack>

						<VStack
							w="full"
							spacing={8}
							textAlign="center"
							px={{ base: 0, md: 12, lg: 16, xl: 40, '2xl': 72 }}
							data-aos="fade-down"
							data-aos-delay="100"
						>
							<Text fontSize="xl" color="gray.700">
								At AvilaCare, all our communities are 100% owned and managed by us, so don&apos;t be
								surprised if you find one of the owners helping with meals, cleaning, tours, and
								everything else. We have been setting the standard in senior living care for over 20
								years.
							</Text>
							<Text fontSize="xl" color="gray.700">
								We intentionally train our care staff to maximize every moment with each resident
								and family member. Our training includes personalized techniques for every level of
								care. Some of these unique techniques include:
							</Text>
						</VStack>
					</VStack>

					<Stack
						className="info-cards"
						direction={{ base: 'column', lg: 'row' }}
						spacing={{ base: 12, lg: 4, xl: 16 }}
						textAlign="center"
					>
						<Card
							icon={FiEye}
							heading="Gaze"
							text="Gaze techniques provide healthy emotional sensations. Engaging at eye level is not only
					warm and inviting, but a sign of humility and friendship."
							data-aos="fade-up-right"
							data-aos-delay={useBreakpointValue({ base: 200, lg: 400 })}
						/>
						<Card
							icon={BiUserVoice}
							heading="Speech"
							text="The right tone sets the foundation for communication. Soft and pleasant.
									Informative and caring. How we speak, sets the tone."
							data-aos="fade-up"
							data-aos-delay={useBreakpointValue({ base: 300, lg: 600 })}
						/>
						<Card
							icon={FaRegHandPaper}
							heading="Touch"
							text="A warm touch is essential for quality care services. Sometime a gentle touch is
									all that is needed to sooth a worried heart."
							data-aos="fade-up-left"
							data-aos-delay={useBreakpointValue({ base: 400, lg: 800 })}
						/>
					</Stack>
				</VStack>
			</Box>

			<Box id="community" as="section" py={40} bg="gray.100" position="relative">
				<Box w="full" h={{ base: '20%', md: '45%' }} position="absolute" zIndex={0} bottom={-2}>
					<Image src="/img/wave.svg" layout="fill" objectFit="cover" alt="shape svg" priority />
				</Box>

				<VStack spacing={28} w="full" px={{ base: 4, md: 8, lg: 12 }}>
					<VStack w="full" spacing={12} justifyContent="center" data-aos="zoom-in">
						<Stack spacing={4} textAlign="center" direction={{ base: 'column', sm: 'row' }}>
							<Heading color="primary.500" size="3xl">
								Life
							</Heading>
							<Center>
								<Heading
									w="fit-content"
									size="3xl"
									bgClip="text"
									bgGradient="linear(to-r, primary.500, secondary.500)"
								>
									in the
								</Heading>
							</Center>
							<Heading color="secondary.500" size="3xl">
								Community
							</Heading>
						</Stack>

						<VStack
							w="full"
							spacing={8}
							textAlign="center"
							px={{ base: 0, md: 12, lg: 16, xl: 40, '2xl': 72 }}
						>
							<Text fontSize="xl" color="gray.700">
								Too often we underestimate the power of a touch, a smile, a kind word, a listening
								ear, an honest compliment, or the smallest act of caring, all of which have the
								potential to turn a life around. Our communities are designed with a home-like
								atmosphere in mind. And the culture we create is one where staff and residents are
								the AvilaFamily.
							</Text>
						</VStack>
					</VStack>

					<Grid
						w="full"
						templateColumns="repeat(8, 1fr)"
						templateRows="repeat(9, 5vw)"
						gap={4}
						px={{ base: 0, lg: 24 }}
					>
						<GridItem colStart={1} rowStart={1} colSpan={3} rowSpan={3}>
							<Box w="full" h="full" objectFit="cover" position="relative" data-aos="flip-left">
								<Image
									src="/img/lifestyle_cooking.jpg"
									layout="fill"
									alt="Chef cooking photo created by freepik - www.freepik.com"
								/>
							</Box>
						</GridItem>
						<GridItem colStart={4} rowStart={1} colSpan={5} rowSpan={6}>
							<Box w="full" h="full" objectFit="cover" position="relative" data-aos="flip-up">
								<Image src="/img/lifestyle_meals.jpg" layout="fill" alt="meals" />
							</Box>
						</GridItem>
						<GridItem colStart={1} rowStart={4} colSpan={3} rowSpan={3}>
							<Box w="full" h="full" objectFit="cover" position="relative" data-aos="flip-down">
								<Image src="/img/lifestyle_activities.jpg" layout="fill" alt="activities" />
							</Box>
						</GridItem>
						<GridItem colStart={1} rowStart={7} colSpan={4} rowSpan={3}>
							<Box w="full" h="full" objectFit="cover" position="relative" data-aos="flip-right">
								<Image src="/img/lifestyle_housekeeping.jpg" layout="fill" alt="something" />
							</Box>
						</GridItem>
						<GridItem colStart={5} rowStart={7} colSpan={4} rowSpan={3}>
							<Box w="full" h="full" objectFit="cover" position="relative" data-aos="flip-right">
								<Image src="/img/lifestyle_housekeeping.jpg" layout="fill" alt="something" />
							</Box>
						</GridItem>
					</Grid>
				</VStack>
			</Box>

			<Box id="blogs" as="section" py={40} px={4} bg="primary.400">
				<VStack spacing={24} w="full">
					<Heading color="white" size="3xl" data-aos="fade-down">
						Latest Blogs
					</Heading>

					<Flex
						className="blog-cards"
						w="full"
						mt={'24px !important'}
						px={{ base: 0, lg: 24 }}
						flexWrap="wrap"
						justifyContent="space-around"
					>
						<BlogCard
							title="How to Perform Safe Check-Ins on Seniors"
							date="7 May 2022"
							img="/img/blog_safe-check.jpg"
							imgAlt="Nurse patient photo created by rawpixel.com - www.freepik.com"
							readTime="1 min read"
							description="Fugiat ipsum magna ad consectetur amet pariatur aute. Velit consectetur aliqua nostrud
							aliqua ullamco reprehenderit consectetur occaecat mollit amet ad aute veniam mollit."
							data-aos="fade-down"
							data-aos-delay={useBreakpointValue({ base: 100, lg: 200 })}
						/>
						<BlogCard
							title="Boosting Caregiver Health with Yoga and Meditation"
							date="14 Mar 2022"
							img="/img/blog_yoga.jpg"
							imgAlt="Pranayama photo created by yanalya - www.freepik.com"
							readTime="3 min read"
							description="Fugiat ipsum magna ad consectetur amet pariatur aute. Velit consectetur aliqua nostrud
							aliqua ullamco reprehenderit consectetur occaecat mollit amet ad aute veniam mollit."
							data-aos="fade-down"
							data-aos-delay={useBreakpointValue({ base: 200, lg: 500 })}
						/>
						<BlogCard
							title="Investigating the Financial Side of Retirement Living Space"
							date="21 Dec 2020"
							img="/img/blog_finance.jpg"
							imgAlt="Money dollars photo created by frimufilms - www.freepik.com"
							readTime="3 min read"
							description="Fugiat ipsum magna ad consectetur amet pariatur aute. Velit consectetur aliqua nostrud
							aliqua ullamco reprehenderit consectetur occaecat mollit amet ad aute veniam mollit."
							data-aos="fade-down"
							data-aos-delay={useBreakpointValue({ base: 300, lg: 800 })}
						/>
					</Flex>

					<Center>
						<Button
							bg="white"
							fontSize="xl"
							py={8}
							px={6}
							data-aos="fade-down"
							data-aos-delay={useBreakpointValue({ base: 0, lg: 100 })}
						>
							Read more
						</Button>
					</Center>
				</VStack>
			</Box>

			<Box id="contact" as="section" py={40} px={{ base: 4, md: 8, lg: 12 }}>
				<VStack spacing={24} w="full">
					<VStack w="full" spacing={12} justifyContent="center">
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
							<Text fontSize="2xl" color="gray.700" fontStyle="italic">
								&quot;The simple act of caring is heroic&quot;
							</Text>
						</VStack>
					</VStack>

					<Flex
						className="locations-and-form"
						w="full"
						justifyContent="space-around"
						direction={{ base: 'column', lg: 'row' }}
					>
						<VStack className="locations" spacing={12} w={{ base: 'full', lg: 600 }}>
							<VStack className="location-name" spacing={8} w="full">
								<Heading size="lg" w="full">
									AvilaCare Heath, TX
								</Heading>
								<VStack className="location-info" spacing={6} w="full" fontWeight={500}>
									<Text w="full" fontSize="lg">
										(469) 338-0283
									</Text>
									<Text w="full" fontSize="lg">
										Heath@AvilaCare.com
									</Text>
									<Text w="full" fontSize="lg">
										126 Smirl Drive, Heath, TX
									</Text>
								</VStack>
							</VStack>
							<VStack className="location-name" spacing={8} w="full">
								<Heading size="lg" w="full">
									AvilaCare Bellingham, WA
								</Heading>
								<VStack className="location-info" spacing={6} w="full" fontWeight={500}>
									<Text w="full" fontSize="lg">
										(360) 671-3631
									</Text>
									<Text w="full" fontSize="lg">
										Bellingham@AvilaCare.com
									</Text>
									<Text w="full" fontSize="lg">
										2315 Williams St, Bellingham, WA
									</Text>
								</VStack>
							</VStack>
						</VStack>

						<Flex
							className="form"
							mt={{ base: 24, lg: 0 }}
							w={{ base: 'full', lg: 600 }}
							px={{ base: 0, lg: 16 }}
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
					</Flex>
				</VStack>
			</Box>
		</Layout>
	)
}
