import React from 'react'
import './event.scss'
const Event = ({ endTime, startTime, name }) => {
	let hour = +startTime.slice(0, 2) * 60
	let minute = +startTime.slice(3, 5)
	let duration =
		endTime.slice(0, 2) * 60 -
		startTime.slice(0, 2) * 60 +
		(endTime.slice(3, 5) - startTime.slice(3, 5))
	let top = hour + minute

	return (
		<span
			style={{ top: `${top}px`, height: `${duration}px` }}
			className='event'
		>
			{name}
		</span>
	)
}

export default Event
