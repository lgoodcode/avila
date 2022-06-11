import { Center, Heading, Stack, useBreakpointValue } from '@chakra-ui/react'

type GradientHeadingProps = {
	heading: string
}

/**
 * Takes a sentence and if even, splits in two and applies text gradient to
 * each half. If the number of words are odd, it does the same but takes the
 * center word and applies a gradient on it that transitions from the first
 * to the second evenly.
 */
export default function GradientHeading({ heading }: GradientHeadingProps) {
	const split = heading.split(' ')
	const middle = Math.floor(split.length / 2)
	const size = useBreakpointValue({ base: '2xl', md: '3xl' })

	return (
		<>
			{split.length % 2 === 0 ? (
				<Stack spacing={2} textAlign="center" direction={{ base: 'column', sm: 'row' }}>
					<Heading color="primary.500" size={size}>
						{split.slice(0, middle).join(' ')}
					</Heading>
					<Heading color="secondary.500" size={size}>
						{split.slice(middle).join(' ')}
					</Heading>
				</Stack>
			) : (
				<Stack
					spacing={4}
					textAlign="center"
					direction={{ base: 'column', lg: 'row' }}
					data-aos="fade-down"
				>
					<Heading color="primary.500" size="3xl">
						{split.slice(0, middle).join(' ')}
					</Heading>
					<Center>
						<Heading
							w="fit-content"
							size="3xl"
							bgClip="text"
							bgGradient="linear(to-r, primary.500, secondary.500)"
						>
							{split.slice(middle, middle + 1).toString()}
						</Heading>
					</Center>
					<Heading color="secondary.500" size="3xl">
						{split.slice(middle + 1).join(' ')}
					</Heading>
				</Stack>
			)}
		</>
	)
}
