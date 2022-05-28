import {
	Box,
	Button,
	Center,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Flex,
	HStack,
	Icon,
	IconButton,
	Link,
	List,
	ListIcon,
	ListItem,
	useBreakpointValue,
	useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { FaHome } from 'react-icons/fa'
import { AiFillInfoCircle } from 'react-icons/ai'
import { BsNewspaper } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import NavLink from '../components/NavLink'
import logo from '../assets/avilacare-logo.webp'

export type NavbarProps = {
	height: string
	mobile: boolean
}

export default function Navbar({ height, mobile }: NavbarProps) {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<Box
			as="nav"
			w="full"
			h={height}
			px={useBreakpointValue({ base: 4, md: 24, xl: 32 })}
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

				{!mobile ? (
					<HStack h="full" spacing={4} data-aos="fade-left">
						<HStack spacing={0} h="full">
							<NavLink href="/">Home</NavLink>
							<NavLink href="/about">About Us</NavLink>
							<NavLink href="/blog">Blog</NavLink>
						</HStack>
						<NextLink href="/contact" passHref>
							<Button as="a" variant="primarySolid" p={6} borderRadius="3xl">
								Contact Us
							</Button>
						</NextLink>
					</HStack>
				) : (
					<Box>
						<IconButton
							onClick={onOpen}
							icon={<Icon as={FiMenu} h={9} w={9} />}
							color="gray.900"
							bg="transparent"
							aria-label="Open menu"
							_active={{
								bg: 'whiteAlpha.300',
							}}
							_hover={{
								bg: 'tranparent',
							}}
						/>

						<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
							<DrawerOverlay />
							<DrawerContent bg="gray.100">
								<DrawerCloseButton fontSize="2xl" />
								<DrawerBody mt={16}>
									<List>
										<NextLink href="/" passHref>
											<Link>
												<ListItem p={4} m={2} fontSize="2xl">
													<ListIcon as={FaHome} />
													Home
												</ListItem>
											</Link>
										</NextLink>

										<Divider />

										<NextLink href="/" passHref>
											<Link>
												<ListItem p={4} m={2} fontSize="2xl">
													<ListIcon as={AiFillInfoCircle} />
													About Us
												</ListItem>
											</Link>
										</NextLink>

										<Divider />

										<NextLink href="/" passHref>
											<Link>
												<ListItem p={4} m={2} fontSize="2xl">
													<ListIcon as={BsNewspaper} />
													Blog
												</ListItem>
											</Link>
										</NextLink>

										<Divider />

										<NextLink href="/" passHref>
											<Link>
												<ListItem p={4} m={2} fontSize="2xl">
													<ListIcon as={GrMail} />
													Contact Us
												</ListItem>
											</Link>
										</NextLink>
									</List>
								</DrawerBody>
							</DrawerContent>
						</Drawer>
					</Box>
				)}
			</Flex>
		</Box>
	)
}
