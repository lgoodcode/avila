import {
	Box,
	Button,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Icon,
	IconButton,
	useColorMode,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import type { IconType } from 'react-icons'
import { AiFillInfoCircle } from 'react-icons/ai'
import { BsNewspaper } from 'react-icons/bs'
import { FaHome, FaMoon, FaSun } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { GrMail } from 'react-icons/gr'
import type { Navigation } from '../types/payload-types'

export type MobileNavProps = {
	nav: Navigation
	rest?: string[]
}

const icons: Record<string, IconType> = {
	Home: FaHome,
	AboutUs: AiFillInfoCircle,
	Blog: BsNewspaper,
	ContactUS: GrMail,
}

export default function MobileNav({ nav, ...rest }: MobileNavProps) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { toggleColorMode } = useColorMode()
	const mobileNavHoverColor = useColorModeValue('whiteAlpha', 'white')
	const mobileNavHoverBg = useColorModeValue('gray.100', 'gray.800')

	return (
		<Box {...rest}>
			<IconButton
				onClick={onOpen}
				icon={<Icon as={FiMenu} h={12} w={12} p={2} />}
				h={12}
				w={12}
				color={useColorModeValue('gray.900', 'gray.100')}
				bg={useColorModeValue('transparent', 'primary.400')}
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
				<DrawerContent>
					<DrawerCloseButton fontSize="2xl" />
					<DrawerBody mt={16}>
						{nav.links?.map(({ id, url, label }) => (
							<Box key={id} w="full" textAlign="start">
								<NextLink href={url} passHref>
									<Button
										variant="link"
										display="block"
										fontSize="2xl"
										fontWeight="medium"
										p="1rem 2rem"
										my={1.5}
										w="full"
										textAlign="start"
										_hover={{
											color: mobileNavHoverColor,
											bg: mobileNavHoverBg,
											textDecoration: 'none',
										}}
									>
										<Icon as={icons[label.replace(' ', '')]} mr={4} />
										{label}
									</Button>
								</NextLink>
								<Divider w="full" />
							</Box>
						))}
						<Button
							variant="link"
							display="block"
							fontSize="2xl"
							fontWeight="medium"
							p="1rem 2rem"
							my={1.5}
							w="full"
							textAlign="start"
							onClick={toggleColorMode}
							_hover={{
								color: mobileNavHoverColor,
								bg: mobileNavHoverBg,
								textDecoration: 'none',
							}}
						>
							<Icon as={useColorModeValue(FaMoon, FaSun)} mr={4} />
							{useColorModeValue('Dark Mode', 'Light Mode')}
						</Button>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	)
}
