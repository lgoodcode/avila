import { useState } from 'react'

export type useWaitForOptions = {
	mustInit?: boolean
}

/**
 * A hook that simplies waiting for another process to complete that will then
 * change the boolean value to allow another trigger to occur off of that.
 *
 * Can optionally pass a boolean value to determine that it can only be done
 * after an initialization.
 */
const useWaitFor = ({ mustInit }: useWaitForOptions) => {
	const [init, setInit] = useState(false)
	const [isDone, setIsDone] = useState(false)
	const done = () => {
		if (!mustInit || (mustInit && init)) setIsDone(true)
	}

	return {
		init: () => {
			setInit(true)
		},
		isInit: init,
		isDone,
		done,
	}
}

export default useWaitFor
