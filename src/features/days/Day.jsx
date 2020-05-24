import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import './day.scss'

const Day = ({ day, openPopup, date, events }) => {
	let activeDay =
		moment(day).format('D M YYYY') === moment().format('D M YYYY')
			? ' active '
			: ' '
	let curentMonth =
		moment(date).format('M') === moment(day).format('M') ? ' curent ' : ' '

	let containEvnts = events.filter(
		elem => elem.date === moment(day).format('D-M-YYYY')
	)

	return (
		<li onClick={() => openPopup(true, day)}>
			<span className={`day ${activeDay}  ${curentMonth}`}>
				{moment(day).format('D')}
				{containEvnts.length > 0 && <span className='contain-events'></span>}
			</span>
		</li>
	)
}

Day.propTypes = {
	day: PropTypes.object,
	openPopup: PropTypes.func,
	date: PropTypes.object,
	events: PropTypes.array,
}

export default Day
