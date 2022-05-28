import { ChakraProvider } from '@chakra-ui/react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Hydrate from '../components/Hydrate'
import theme from '../theme'

export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init({
			once: true,
			duration: 800,
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
