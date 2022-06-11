import {
	Box,
	IconButton,
	Icon,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerBody,
	Link,
	ListItem,
	ListIcon,
	Divider,
	useDisclosure,
	List,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { FaHome } from 'react-icons/fa'
import { AiFillInfoCircle } from 'react-icons/ai'
import { BsNewspaper } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import type { IconType } from 'react-icons'
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

	return (
		<Box {...rest}>
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
							{nav.links?.map(({ id, url, label }) => (
								<NextLink key={id} href={url} passHref>
									<Link>
										<ListItem p={4} m={2} fontSize="2xl">
											<ListIcon as={icons[label.replace(' ', '')]} />
											{label}
										</ListItem>
										<Divider />
									</Link>
								</NextLink>
							))}
						</List>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	)
}
