import { Box, Spinner } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../assets/avilacare-logo.webp'

/**
 * If the preloader is taking longer than 3 seconds it will display a spinner
 * to let the user know it's loading and hasn't frozen or is bugged.
 */
export default function Preloader() {
	const [stillLoading, setStillLoading] = useState(false)

	useEffect(() => {
		setTimeout(() => setStillLoading(true), 3e3)
	}, [])

	return (
		<Box
			className="preloader"
			position="absolute"
			h="100vh"
			w="100vw"
			bg="white"
			zIndex={99}
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDir="column"
		>
			<motion.div
				initial={{ opacity: 0, scale: 0, y: 75 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{ type: 'spring', stiffness: 120, duration: 1, bounce: 0.2 }}
				exit={{ opacity: 0 }}
			>
				<Box
					maxW={480}
					px={{ base: 4, sm: 12 }}
					display="flex"
					flexDir="column"
					justifyContent="center"
				>
					<Image src={logo} alt="AvilaCare Senior Living" />
					{stillLoading && <Spinner size="xl" color="primary.500" ml="auto" mr="auto" mt="2rem" />}
				</Box>
			</motion.div>
		</Box>
	)
}
