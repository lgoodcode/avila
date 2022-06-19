import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Hydrate from '../components/Hydrate'
import Preloader from '../components/Preloader'
import theme from '../theme'
import 'aos/dist/aos.css'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => setLoading(false), 2e3)
	}, [])

	return (
		<ChakraProvider theme={theme}>
			<Hydrate>
				<Head>
					{/* Prevent mobile from zooming in with pinch - not to be used in _document.js */}
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
					/>
				</Head>
				<AnimatePresence>
					<motion.div
						key={loading ? 'preloader' : 'page'}
						initial={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						{loading ? <Preloader /> : <Component {...pageProps} />}
					</motion.div>
				</AnimatePresence>
			</Hydrate>
		</ChakraProvider>
	)
}
