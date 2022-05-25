import React from 'react'
import NextLink from 'next/link'
import { BoxProps, Link } from '@chakra-ui/react'

type NavLinkProps = {
	href: string
	children: React.ReactNode
}

export default function NavLink(props: NavLinkProps & BoxProps) {
	return (
		<NextLink href={props.href} passHref>
			<Link
				w={props.w || props.width || 28}
				h="full"
				display="flex"
				alignItems="center"
				justifyContent="center"
				fontSize="lg"
				_hover={{
					bg: 'gray.100',
				}}
			>
				{props.children}
			</Link>
		</NextLink>
	)
}
