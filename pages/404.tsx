import { Button, Center, Heading, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function PageNotFound() {
	return (
		<Center h="100vh" bg="primary.500">
			<VStack spacing={8}>
				<Heading size="2xl" color="white">
					Page not found
				</Heading>
				<NextLink href="/" passHref>
					<Button as="a">Return home</Button>
				</NextLink>
			</VStack>
		</Center>
	)
}
