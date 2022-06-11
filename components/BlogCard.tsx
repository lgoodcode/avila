import { VStack, Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from './Image'

export type BlogCardProps = {
	title: string
	author?: string
	created: string
	updated?: string
	img: string
	imgAlt: string
	placeholder?: 'blur'
	blurDataURL?: string
	readTime: string | number
	description: string
	rest?: string[]
}

export default function BlogCard({
	title,
	created,
	updated,
	img,
	imgAlt,
	readTime,
	description,
	...rest
}: BlogCardProps) {
	return (
		<Box className="blog-card" {...rest}>
			<VStack
				maxW={360}
				bg="white"
				spacing={8}
				mx={4}
				px={6}
				py={8}
				mt={16}
				top={0}
				borderRadius="lg"
				position="relative"
				transition="top linear 200ms, box-shadow linear 200ms"
				_hover={{
					cursor: 'pointer',
					boxShadow: 'dark-lg',
					top: -3,
				}}
			>
				<Box w="full" h="full" position="relative">
					<Image src={img} width={300} height={200} alt={imgAlt} />
				</Box>

				<Flex className="date-and-read-time" w="full" justifyContent="space-between">
					<Box>
						<Text>{updated || created}</Text>
					</Box>
					<Box>
						<Text>{readTime} minutes</Text>
					</Box>
				</Flex>

				<Box className="title">
					<Heading size="md">{title}</Heading>
				</Box>

				<Box className="description">
					<Text noOfLines={{ base: 5, lg: 7 }}>{description}</Text>
				</Box>
			</VStack>
		</Box>
	)
}
