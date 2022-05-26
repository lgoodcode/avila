import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import AOS from 'aos'
import Hydrate from '../components/Hydrate'
import theme from '../theme'
import 'aos/dist/aos.css'

export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init({
			once: true,
			duration: 800,
			throttleDelay: 10,
		})
	}, [])

	return (
		<ChakraProvider theme={theme}>
			<Hydrate>
				<Component {...pageProps} />
			</Hydrate>
		</ChakraProvider>
	)
}
