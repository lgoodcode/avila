import React, { useEffect, useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import { Box, type BoxProps } from '@chakra-ui/react'

type CarouselProps = {
	images: ImageProps[]
	duration?: number
	boxProps?: BoxProps
}

export default function Carousel({ images, duration = 7000, boxProps }: CarouselProps) {
	const [selected, setSelected] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setSelected((selected) => (selected + 1 === images.length ? 0 : selected + 1))
		}, duration)

		return () => clearInterval(interval)
	}, [images, duration])

	return (
		<Box className="carousel" {...boxProps}>
			{images.map((image, i) => (
				<Box
					key={i}
					className={`carousel-slide ${i === selected ? 'active' : ''}`}
					opacity={i === selected ? 1 : 0}
					transitionProperty="opacity"
					transitionDuration="1s"
				>
					<Image {...image} alt={image.alt} />
				</Box>
			))}
		</Box>
	)
}
