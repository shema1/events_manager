import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

const Month = ({ month, prevMonth, nextMonth }) => {
	return (
		<div className='month'>
			<ul>
				<li className='prev' onClick={() => prevMonth()}>
					&#10094;
				</li>
				<li className='next' onClick={() => nextMonth()}>
					&#10095;
				</li>
				<li>{moment(month).format('MMMM YYYY')}</li>
			</ul>
		</div>
	)
}

Month.propTypes = {
	month: PropTypes.object,
	prevMonth: PropTypes.func,
	nextMonth: PropTypes.func,
}
export default Month
