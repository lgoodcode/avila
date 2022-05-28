import { Box, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import type { IconType } from 'react-icons'

export type CardProps = {
	heading: string
	text: string
	icon?: IconType
	minW?: number
	maxW?: number
	rest?: string[]
}
export default function Card({ heading, text, icon, minW = 320, maxW = 360, ...rest }: CardProps) {
	return (
		<Box className="info-card" minW={minW} maxW={maxW} p={4} {...rest}>
			<VStack spacing={4}>
				{icon && <Icon as={icon} h={12} w={12} color="secondary.500" />}
				<Heading size="xl">{heading}</Heading>
				<Text color="gray.700">{text}</Text>
			</VStack>
		</Box>
	)
}
