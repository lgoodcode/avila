import { ChakraProvider } from '@chakra-ui/react'
import 'aos/dist/aos.css'
import type { AppProps } from 'next/app'
import Hydrate from '../components/Hydrate'
import theme from '../theme'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Hydrate>
				<Component {...pageProps} />
			</Hydrate>
		</ChakraProvider>
	)
}
