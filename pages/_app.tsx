import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Hydrate from '../components/Hydrate'
import theme from '../theme'
import 'aos/dist/aos.css'
import '../styles/global.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
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
				<Component {...pageProps} />
			</Hydrate>
		</ChakraProvider>
	)
}
