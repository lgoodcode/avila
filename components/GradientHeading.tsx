import { Stack, Heading, Center, useBreakpointValue, HStack } from '@chakra-ui/react'

type GradientHeadingProps = {
	heading: string
}

export default function GradientHeading({ heading }: GradientHeadingProps) {
	const split = heading.split(' ')
	const middle = Math.floor(split.length / 2)
	const size = useBreakpointValue({ base: '2xl', md: '3xl' })

	return (
		<>
			{middle % 2 === 1 ? (
				<HStack spacing={2}>
					<Heading color="primary.500" size={size}>
						{split.slice(0, middle)}
					</Heading>
					<Heading color="secondary.500" size={size}>
						{split.slice(middle)}
					</Heading>
				</HStack>
			) : (
				<Stack
					spacing={4}
					textAlign="center"
					direction={{ base: 'column', lg: 'row' }}
					data-aos="fade-down"
				>
					<Heading color="primary.500" size="3xl">
						{split.slice(0, middle)}
					</Heading>
					<Center>
						<Heading
							w="fit-content"
							size="3xl"
							bgClip="text"
							bgGradient="linear(to-r, primary.500, secondary.500)"
						>
							{split.slice(middle, middle + 1)}
						</Heading>
					</Center>
					<Heading color="secondary.500" size="3xl">
						{split.slice(middle + 1)}
					</Heading>
				</Stack>
			)}
		</>
	)
}
