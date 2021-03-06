import { Box, Heading, Icon, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import type { IconType } from 'react-icons'

export type CardProps = {
	heading: string
	text: string
	icon?: IconType
	iconColor?: string
	minW?: number
	maxW?: number
	rest?: string[]
}
export default function Card({
	heading,
	text,
	icon,
	iconColor,
	minW = 320,
	maxW = 360,
	...rest
}: CardProps) {
	return (
		<Box className="info-card" minW={minW} maxW={maxW} p={4} {...rest}>
			<VStack spacing={4}>
				{icon && <Icon as={icon} h={12} w={12} color={iconColor} />}
				<Heading size="xl">{heading}</Heading>
				<Text color={useColorModeValue('gray.700', 'whiteAlpha.800')}>{text}</Text>
			</VStack>
		</Box>
	)
}
