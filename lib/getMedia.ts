import { getStrapiURL } from './api'
import type { MediaData } from '../types'

export default function getMedia(media: MediaData) {
	return getStrapiURL(media.data.attributes.url)
}
