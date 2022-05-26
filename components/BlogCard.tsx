import { VStack, Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

export type BlogCardProps = {
	title: string
	date: string
	img: string
	readTime: string
	description: string
	rest?: string[]
}

export default function BlogCard({
	title,
	date,
	img,
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
					<Image
						src={img}
						width={300}
						height={200}
						alt="Nurse patient photo created by rawpixel.com - www.freepik.com"
					/>
				</Box>

				<Flex className="date-and-read-time" w="full" justifyContent="space-between">
					<Box>
						<Text>{date}</Text>
					</Box>
					<Box>
						<Text>{readTime}</Text>
					</Box>
				</Flex>

				<Box className="title">
					<Heading size="md">{title}</Heading>
				</Box>

				<Box className="description">{description}</Box>
			</VStack>
		</Box>
	)
}
